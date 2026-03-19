import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactFormData {
  name: string;
  phone: string;
  city?: string;
  service?: string;
  message?: string;
  honeypot?: string;
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MINUTES = 60;
const MAX_FIELD_LENGTH = 1000;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function sanitizeInput(input: string, maxLength: number): string {
  return input.trim().substring(0, maxLength);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateName(name: string): boolean {
  return name.length >= 2 && name.length <= 100 && /^[a-zA-ZÀ-ÿ\s'-]+$/.test(name);
}

async function checkRateLimit(supabase: any, ipAddress: string): Promise<boolean> {
  const windowStart = new Date();
  windowStart.setMinutes(windowStart.getMinutes() - RATE_LIMIT_WINDOW_MINUTES);

  const { data: existingLimit } = await supabase
    .from('contact_rate_limits')
    .select('*')
    .eq('ip_address', ipAddress)
    .gte('window_start', windowStart.toISOString())
    .maybeSingle();

  if (existingLimit) {
    if (existingLimit.submission_count >= RATE_LIMIT_MAX) {
      return false;
    }

    await supabase
      .from('contact_rate_limits')
      .update({ submission_count: existingLimit.submission_count + 1 })
      .eq('id', existingLimit.id);
  } else {
    await supabase
      .from('contact_rate_limits')
      .insert([{ ip_address: ipAddress, submission_count: 1 }]);
  }

  return true;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData: ContactFormData = await req.json();

    if (formData.honeypot) {
      return new Response(
        JSON.stringify({ error: 'Invalid submission' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (!formData.name || !formData.phone) {
      return new Response(
        JSON.stringify({ error: 'Le nom et le téléphone sont requis' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const name = sanitizeInput(formData.name, MAX_FIELD_LENGTH);
    const phone = sanitizeInput(formData.phone, MAX_FIELD_LENGTH);
    const city = formData.city ? sanitizeInput(formData.city, MAX_FIELD_LENGTH) : null;
    const service = formData.service ? sanitizeInput(formData.service, MAX_FIELD_LENGTH) : null;
    const message = formData.message ? sanitizeInput(formData.message, MAX_MESSAGE_LENGTH) : null;

    if (!validateName(name)) {
      return new Response(
        JSON.stringify({ error: 'Nom invalide' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (!validatePhone(phone)) {
      return new Response(
        JSON.stringify({ error: 'Numéro de téléphone invalide' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                      req.headers.get('x-real-ip') ||
                      'unknown';

    const rateLimitOk = await checkRateLimit(supabase, ipAddress);
    if (!rateLimitOk) {
      return new Response(
        JSON.stringify({ error: 'Trop de tentatives. Veuillez réessayer plus tard.' }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          phone,
          city,
          service_type: service,
          message,
          ip_address: ipAddress,
          email_sent: false,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Échec de l\'enregistrement' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    let emailSent = false;

    if (resendApiKey) {
      try {
        const escapedName = escapeHtml(name);
        const escapedPhone = escapeHtml(phone);
        const escapedCity = city ? escapeHtml(city) : null;
        const escapedService = service ? escapeHtml(service) : null;
        const escapedMessage = message ? escapeHtml(message).replace(/\n/g, '<br>') : null;

        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Artisan Peintre 31 <noreply@artisanpeintre-fenouillet.fr>',
            to: 'contact@artisanpeintre-fenouillet.fr',
            subject: `Nouvelle demande de contact - ${escapedName}`,
            html: `
              <h2>Nouvelle demande de contact</h2>
              <p><strong>Nom :</strong> ${escapedName}</p>
              <p><strong>Téléphone :</strong> ${escapedPhone}</p>
              ${escapedCity ? `<p><strong>Ville :</strong> ${escapedCity}</p>` : ''}
              ${escapedService ? `<p><strong>Service demandé :</strong> ${escapedService}</p>` : ''}
              ${escapedMessage ? `<p><strong>Message :</strong></p><p>${escapedMessage}</p>` : ''}
              <hr>
              <p><small>Soumis le ${new Date().toLocaleString('fr-FR')}</small></p>
              <p><small>IP: ${escapeHtml(ipAddress)}</small></p>
            `,
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
          await supabase
            .from('contact_submissions')
            .update({ email_sent: true })
            .eq('id', submission.id);
        } else {
          console.error('Failed to send email:', await emailResponse.text());
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Votre demande a été enregistrée',
        emailSent,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur interne du serveur' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
