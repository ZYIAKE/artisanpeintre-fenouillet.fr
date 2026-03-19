import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, FileText } from 'lucide-react';
import { BUSINESS } from '../data/business';
import mascotteLogo from '../assets/mascotte-peintre.jpg';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/zones-intervention', label: 'Zones' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <img
              src={mascotteLogo}
              alt={`Logo ${BUSINESS.name}`}
              className="w-9 h-9 rounded-lg object-cover"
              width={36}
              height={36}
            />
            <div className="leading-tight">
              <span className="block text-sm sm:text-base font-bold text-gray-900">{BUSINESS.tradeName}</span>
              <span className="block text-xs text-primary-500 font-medium -mt-0.5">{BUSINESS.address.city}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors px-3 py-2"
            >
              <FileText className="w-4 h-4" />
              Devis
            </Link>
            <a href={BUSINESS.phoneTel} className="btn-phone text-sm">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{BUSINESS.phone}</span>
              <span className="sm:hidden">Appeler</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 flex gap-3">
              <a href={BUSINESS.phoneTel} className="btn-primary flex-1 text-center">
                <Phone className="w-4 h-4" />
                Appeler
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary flex-1 text-center"
              >
                Devis gratuit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
