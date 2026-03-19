import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { services } from '../data/services';
import GoogleMap from './GoogleMap';
import mascotteLogo from '../assets/mascotte-peintre.jpg';

const quickLinks = [
  { to: '/services', label: 'Nos services' },
  { to: '/zones-intervention', label: 'Zones d\'intervention' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { to: '/cookies', label: 'Cookies' },
  { to: '/plan-du-site', label: 'Plan du site' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={mascotteLogo}
                alt={`Logo ${BUSINESS.name}`}
                className="w-9 h-9 rounded-lg object-cover"
                loading="lazy"
                width={36}
                height={36}
              />
              <div className="leading-tight">
                <span className="block text-sm font-bold text-white">{BUSINESS.tradeName}</span>
                <span className="block text-xs text-primary-300 font-medium -mt-0.5">{BUSINESS.address.city}</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              {BUSINESS.footerDescription}
            </p>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-white">{BUSINESS.aboutPro.name}</p>
              <a href={BUSINESS.phoneTel} className="flex items-start gap-2 text-accent-400 hover:text-accent-300 font-semibold transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                <span>{BUSINESS.address.full}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                <div>
                  <p>{BUSINESS.hours.weekdays}</p>
                  <p>{BUSINESS.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-white font-semibold mb-4">Nous trouver</h3>
            <div className="rounded-lg overflow-hidden mb-4 w-full">
              <GoogleMap query={BUSINESS.mapQuery} height="180px" />
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              Itinéraire
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 lg:pb-6 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-center sm:text-left">&copy; Artisan Peintre Fenouillet. Tous droits réservés.</p>
            <p className="text-center sm:text-right">
              Site réalisé par <a href="https://atlinker.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">atlinker</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
