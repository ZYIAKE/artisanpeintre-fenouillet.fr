import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const CACHE_DURATION_HOURS = 24;

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const googleApiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = Deno.env.get('GOOGLE_PLACE_ID');

    if (!googleApiKey || !placeId) {
      return new Response(
        JSON.stringify({ error: 'Google API not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check cache
    const cacheThreshold = new Date();
    cacheThreshold.setHours(cacheThreshold.getHours() - CACHE_DURATION_HOURS);

    const { data: cached } = await supabase
      .from('google_reviews_cache')
      .select('*')
      .eq('place_id', placeId)
      .gte('fetched_at', cacheThreshold.toISOString())
      .order('fetched_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (cached) {
      return new Response(
        JSON.stringify({
          rating: cached.rating,
          totalReviews: cached.total_reviews,
          reviews: cached.reviews,
          cached: true,
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch from Google Places API (New)
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`,
      {
        headers: {
          'X-Goog-Api-Key': googleApiKey,
          'X-Goog-FieldMask': 'id,rating,userRatingCount,reviews',
        },
      }
    );

    if (!response.ok) {
      console.error('Google Places API error:', await response.text());

      // Return stale cache if available
      const { data: staleCache } = await supabase
        .from('google_reviews_cache')
        .select('*')
        .eq('place_id', placeId)
        .order('fetched_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (staleCache) {
        return new Response(
          JSON.stringify({
            rating: staleCache.rating,
            totalReviews: staleCache.total_reviews,
            reviews: staleCache.reviews,
            cached: true,
          }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Failed to fetch reviews' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    const reviews = (data.reviews || []).map((r: any) => ({
      author: r.authorAttribution?.displayName || 'Anonyme',
      photoUrl: r.authorAttribution?.photoUri || null,
      rating: r.rating || 5,
      text: r.originalText?.text || r.text?.text || '',
      relativeTime: r.relativePublishTimeDescription || '',
      publishTime: r.publishTime || null,
    }));

    // Store in cache
    await supabase
      .from('google_reviews_cache')
      .insert([{
        place_id: placeId,
        rating: data.rating || null,
        total_reviews: data.userRatingCount || 0,
        reviews,
        fetched_at: new Date().toISOString(),
      }]);

    // Clean old cache entries (keep last 5)
    const { data: oldEntries } = await supabase
      .from('google_reviews_cache')
      .select('id')
      .eq('place_id', placeId)
      .order('fetched_at', { ascending: false })
      .range(5, 100);

    if (oldEntries && oldEntries.length > 0) {
      await supabase
        .from('google_reviews_cache')
        .delete()
        .in('id', oldEntries.map((e: any) => e.id));
    }

    return new Response(
      JSON.stringify({
        rating: data.rating || null,
        totalReviews: data.userRatingCount || 0,
        reviews,
        cached: false,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
