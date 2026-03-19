import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { BUSINESS } from '../data/business';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      honeypot: formData.get('website') as string,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Échec de l\'envoi');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-semibold mb-1">Demande envoyée</p>
        <p className="text-green-600 text-sm">Nous vous recontacterons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        aria-hidden="true"
      />
      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={loading}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={loading}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
            <input
              type="text"
              id="city"
              name="city"
              disabled={loading}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder={BUSINESS.address.city}
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Besoin</label>
            <select
              id="service"
              name="service"
              disabled={loading}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Sélectionner...</option>
              {BUSINESS.contactFormServices.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          disabled={loading}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Décrivez votre besoin..."
        />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}
