import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title={`Page introuvable | ${BUSINESS.name}`}
        description={`La page que vous recherchez n'existe pas. Retrouvez nos services de ${BUSINESS.tradeDomain} à ${BUSINESS.address.city}.`}
        canonical="/404"
      />

      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-7xl font-extrabold text-primary-500 mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h1>
          <p className="text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée. Pas d'inquiétude, vous pouvez revenir à l'accueil ou nous contacter directement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <a href={BUSINESS.phoneTel} className="btn-secondary">
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>
          <div className="mt-12 text-left bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3">Vous cherchez peut-être :</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Nos services de peinture
                </Link>
              </li>
              <li>
                <Link to="/zones-intervention" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Nos zones d'intervention
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Nos tarifs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
