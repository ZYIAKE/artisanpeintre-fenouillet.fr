import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MapPin, ChevronRight, ArrowLeft, Navigation } from 'lucide-react';
import { getZoneBySlug, zones } from '../data/zones';
import { services } from '../data/services';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';
import GoogleMap from '../components/GoogleMap';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

export default function ZonePage() {
  const { slug } = useParams<{ slug: string }>();
  const zone = slug ? getZoneBySlug(slug) : undefined;

  if (!zone) {
    return <Navigate to="/zones-intervention" replace />;
  }

  const nearbyZoneData = zone.nearbyZones
    .map((s) => zones.find((z) => z.slug === s))
    .filter(Boolean);

  return (
    <>
      <SEOHead
        title={`Peintre en Bâtiment à ${zone.name} (31) | Devis Gratuit - ${BUSINESS.name}`}
        description={`Artisan peintre en bâtiment à ${zone.name}, à ${zone.distance} de ${BUSINESS.address.city}. Peinture intérieure, extérieure, ravalement de façade. Devis gratuit sous 48h ☎ ${BUSINESS.phone}.`}
        canonical={`/zones-intervention/${zone.slug}`}
        faqs={zone.faqs}
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <Link to="/zones-intervention" className="inline-flex items-center gap-1 text-primary-200 hover:text-white text-sm mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Toutes les zones
              </Link>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Votre artisan peintre en bâtiment à {zone.name}</h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Travaux de peinture à {zone.name}, à seulement {zone.distance} de notre atelier de {BUSINESS.address.city}. Peinture intérieure, extérieure et ravalement de façade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href={BUSINESS.phoneTel} className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg">
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  Demander un devis
                </Link>
              </div>
            </div>
            <div className="hidden lg:block shrink-0">
              <img
                src={mascotte}
                alt={`Mascotte ${BUSINESS.trade}`}
                className="w-48 xl:w-56 rounded-2xl drop-shadow-2xl"
                loading="lazy"
                width={192}
                height={240}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Devis gratuit à {zone.name}</h2>
              <p className="text-gray-600 text-sm mb-4">
                Décrivez votre projet de peinture à {zone.name} et recevez un devis sous 48h.
              </p>
              <ContactForm compact />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{zone.name} sur la carte</h2>
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <GoogleMap query={zone.mapQuery} height="260px" />
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(BUSINESS.address.full)}&destination=${encodeURIComponent(zone.name + ', ' + BUSINESS.address.department + ', France')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Itinéraire vers {zone.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: "Zones d'intervention", path: '/zones-intervention' },
            { label: zone.name, path: `/zones-intervention/${zone.slug}` },
          ]} />

          <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {zone.distance} de {BUSINESS.address.city}</span>
            <span>|</span>
            <span>Trajet : {zone.travelTime}</span>
            <span>|</span>
            <span>Devis gratuit</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Votre {BUSINESS.trade} de confiance à {zone.name}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">{zone.intro}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{zone.specificInfo}</p>
          {zone.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-6">{p}</p>
          ))}

          {zone.sections && zone.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Services disponibles à {zone.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="flex items-center gap-2 bg-white p-4 rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all"
              >
                <ChevronRight className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm font-medium text-gray-900">{s.shortName}</span>
                <span className="text-xs text-accent-600 font-bold ml-auto">{s.pricingHint}</span>
              </Link>
            ))}
          </div>

          <Link to="/tarifs" className="inline-flex items-center gap-1 text-primary-500 font-medium hover:text-primary-600 transition-colors mb-10">
            Consulter nos tarifs <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Questions fréquentes - {BUSINESS.tradeName} à {zone.name}
          </h2>
          <FAQ items={zone.faqs} />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Communes voisines de {zone.name}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {nearbyZoneData.map((z) => z && (
              <Link
                key={z.slug}
                to={`/zones-intervention/${z.slug}`}
                className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-primary-300 hover:text-primary-500 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {z.name}
              </Link>
            ))}
          </div>
          <Link
            to="/zones-intervention"
            className="inline-flex items-center gap-1 text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Toutes les zones d'intervention
          </Link>
        </div>
      </section>

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{BUSINESS.tradeName} à {zone.name}</h2>
          <p className="text-primary-100 mb-8">Intervention rapide - Devis gratuit - Sans engagement</p>
          <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg text-lg">
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
