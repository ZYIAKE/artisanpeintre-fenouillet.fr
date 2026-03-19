-- Cache for Google reviews
CREATE TABLE IF NOT EXISTS google_reviews_cache (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  place_id text NOT NULL,
  rating numeric,
  total_reviews integer,
  reviews jsonb,
  fetched_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_google_reviews_cache_place_id ON google_reviews_cache (place_id);
CREATE INDEX idx_google_reviews_cache_fetched_at ON google_reviews_cache (fetched_at DESC);

-- RLS
ALTER TABLE google_reviews_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage reviews cache"
  ON google_reviews_cache
  FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Anyone can read reviews cache"
  ON google_reviews_cache
  FOR SELECT
  USING (true);
