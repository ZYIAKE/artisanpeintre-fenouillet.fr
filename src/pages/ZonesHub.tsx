import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { zones } from '../data/zones';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

export default function ZonesHub() {
  return (
    <>
      <SEOHead
        title={`Peintre en Bâtiment ${BUSINESS.address.city} et Alentours (${BUSINESS.radius}) | ${BUSINESS.name}`}
        description={`Artisan peintre intervenant à ${BUSINESS.address.city} et dans 20 communes de Haute-Garonne : Toulouse, Blagnac, Colomiers, L'Union, Aucamville... Déplacement inclus. Devis gratuit ☎ ${BUSINESS.phone}.`}
        canonical="/zones-intervention"
        faqs={BUSINESS.zonesHubFaqs}
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Votre peintre en bâtiment à {BUSINESS.address.city} et dans un rayon de {BUSINESS.radius}
              </h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Nous intervenons dans un rayon de {BUSINESS.radius} autour de {BUSINESS.address.city}. Découvrez les communes desservies et bénéficiez d'une intervention rapide sans supplément de déplacement.
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
            { label: 'Zones d\'intervention', path: '/zones-intervention' },
          ]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                to={`/zones-intervention/${zone.slug}`}
                className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                    {zone.name}
                  </h2>
                  <p className="text-sm text-gray-500">{zone.distance} - {zone.travelTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions fréquentes</h2>
          <FAQ items={BUSINESS.zonesHubFaqs} />
        </div>
      </section>

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{BUSINESS.ctaTitle}</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">Intervention rapide dans toute notre zone. Devis gratuit.</p>
          <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg text-lg">
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
