import { Link } from 'react-router-dom';
import {
  PaintBucket, Home, Building2, Wallpaper, Layers, Palette,
  ChevronRight, MapPin, Phone, Wrench,
} from 'lucide-react';
import { BUSINESS } from '../data/business';
import { services } from '../data/services';
import { zones } from '../data/zones';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

const iconMap: Record<string, React.ElementType> = {
  PaintBucket, Home, Building2, Wallpaper, Layers, Palette,
};

export default function ServicesHub() {
  return (
    <>
      <SEOHead
        title={`Services Peinture en Bâtiment à ${BUSINESS.address.city} (31) | Intérieur, Extérieur, Façade`}
        description={`Tous les services de votre artisan peintre à ${BUSINESS.address.city} : peinture intérieure, extérieure, ravalement de façade, papier peint, enduit, peinture décorative. Devis gratuit ☎ ${BUSINESS.phone}.`}
        canonical="/services"
        faqs={BUSINESS.servicesHubFaqs}
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Tous nos services de peinture en bâtiment à {BUSINESS.address.city}</h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Du rafraîchissement d'une pièce à la rénovation complète, nous prenons en charge tous vos besoins en {BUSINESS.tradeDomain}. Finitions soignées, devis gratuit, travail de qualité.
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
            { label: 'Services', path: '/services' },
          ]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {service.shortName}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">{service.heroText}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-600 font-bold text-sm">{service.pricingHint}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-500">
                      Détails <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Zones d'intervention
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Nous intervenons à {BUSINESS.address.city} et dans toutes les communes dans un rayon de {BUSINESS.radius}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                to={`/zones-intervention/${zone.slug}`}
                className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-primary-300 hover:text-primary-500 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions fréquentes</h2>
          <FAQ items={BUSINESS.servicesHubFaqs} />
        </div>
      </section>

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{BUSINESS.ctaTitle}</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">Appelez-nous pour une intervention rapide ou un devis gratuit.</p>
          <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg text-lg">
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
