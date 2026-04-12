import { useState, useEffect } from 'react';

const CONSENT_KEY = 'cookie_consent';
const GA_ID = 'G-JHWM1XM0TB';

function loadGA4() {
  if (document.querySelector(`script[src*="gtag/js?id=${GA_ID}"]`)) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') {
      loadGA4();
    } else if (stored === null) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    loadGA4();
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur border-t border-white/10 shadow-2xl">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-gray-300 flex-1">
          Ce site utilise des cookies pour mesurer l'audience (Google Analytics).
          Aucune donnee personnelle n'est vendue.{' '}
          <a href="/cookies" className="text-orange-400 underline hover:text-orange-300">
            En savoir plus
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={refuse}
            className="px-4 py-2 text-sm rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-400 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
