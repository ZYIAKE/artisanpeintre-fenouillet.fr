import { Link } from 'react-router-dom';
import { Phone, Info } from 'lucide-react';
import { services } from '../data/services';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

const variations = [
  { label: 'État des murs (préparation lourde)', detail: 'Supplément de 10 à 20 €/m²' },
  { label: 'Hauteur sous plafond > 3 m', detail: 'Supplément selon accessibilité' },
  { label: 'Peinture haut de gamme (décorative, laque)', detail: 'Selon produit sélectionné' },
  { label: 'Accessibilité difficile (échafaudage)', detail: 'Supplément selon situation' },
  { label: 'Fourniture de peinture', detail: 'Facturée en supplément ou fournie par le client' },
];

export default function Tarifs() {
  return (
    <>
      <SEOHead
        title={`Tarifs Peintre en Bâtiment à ${BUSINESS.address.city} (31) | Prix au m² & Devis Gratuit`}
        description={`Consultez les tarifs de votre artisan peintre à ${BUSINESS.address.city}. Prix transparents au m² : peinture intérieure, extérieure, ravalement de façade. Devis gratuit et sans engagement ☎ ${BUSINESS.phone}.`}
        canonical="/tarifs"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Tarifs peintre en bâtiment à {BUSINESS.address.city} et environs</h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Des tarifs clairs et transparents. Nous vous communiquons le prix avant toute intervention. Pas de mauvaise surprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href={BUSINESS.phoneTel} className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg">
                  <Phone className="w-5 h-5" />
                  Appeler : {BUSINESS.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
            <div className="hidden lg:block bg-white rounded-2xl shadow-xl p-6 text-gray-900">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Demande de devis gratuit</h2>
              <p className="text-sm text-gray-500 mb-4">Réponse sous 24h — sans engagement</p>
              <ContactForm />
              <p className="text-xs text-gray-400 mt-3 text-center">🔒 Vos données restent confidentielles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: 'Tarifs', path: '/tarifs' },
          ]} />
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 px-6 py-3">
              <span className="font-semibold text-gray-900 text-sm">Prestation</span>
              <span className="font-semibold text-gray-900 text-sm text-center">Prix de départ</span>
              <span className="font-semibold text-gray-900 text-sm text-right">Détails</span>
            </div>
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`grid grid-cols-3 items-center px-6 py-4 ${
                  i < services.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="font-medium text-gray-900 text-sm">{s.shortName}</span>
                <span className="text-accent-600 font-bold text-center">{s.pricingHint}</span>
                <div className="text-right">
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-primary-50 rounded-xl p-6 sm:p-8 border border-primary-100">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <h2 className="text-lg font-bold text-gray-900">Variations de tarifs</h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Les prix affichés sont des tarifs de départ pour des interventions standard durant les heures ouvrées. Plusieurs facteurs peuvent influencer le tarif final :
            </p>
            <div className="space-y-3">
              {variations.map((v, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-lg p-4 border border-primary-100">
                  <span className="text-sm font-medium text-gray-900">{v.label}</span>
                  <span className="text-sm text-gray-600">{v.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Pour un prix précis adapté à votre situation, demandez un devis gratuit. Nous vous répondrons dans les meilleurs délais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BUSINESS.phoneTel} className="btn-primary text-lg">
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-secondary">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
