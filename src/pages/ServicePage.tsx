import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, ChevronRight, MapPin, ArrowLeft } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { zones } from '../data/zones';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import GoogleMap from '../components/GoogleMap';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

const featuredZones = zones.slice(0, 6);

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        faqs={service.faqs}
        service={{
          name: service.name,
          description: service.metaDescription,
          url: `/services/${service.slug}`,
        }}
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link to="/services" className="inline-flex items-center gap-1 text-primary-200 hover:text-white text-sm mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Tous les services
              </Link>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{service.name} à {BUSINESS.address.city} et environs (31)</h1>
              <p className="text-primary-100 max-w-2xl text-lg">{service.heroText}</p>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: 'Services', path: '/services' },
            { label: service.name, path: `/services/${service.slug}` },
          ]} />

          <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
            <span className="text-accent-600 font-bold">{service.pricingHint}</span>
            <span>|</span>
            <span>Devis gratuit</span>
            <span>|</span>
            <span>Intervention rapide</span>
          </div>

          <div className="prose prose-gray max-w-none">
            {service.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mb-4">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-4 h-4 text-primary-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          <FAQ items={service.faqs} />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Nous intervenons aussi à :</h2>
          <div className="flex flex-wrap gap-2">
            {featuredZones.map((zone) => (
              <Link
                key={zone.slug}
                to={`/zones-intervention/${zone.slug}`}
                className="inline-flex items-center gap-1.5 bg-white px-3 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-primary-300 hover:text-primary-500 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Notre zone d'intervention à {BUSINESS.address.city}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <GoogleMap query={`${BUSINESS.address.city}+${BUSINESS.address.department}+${BUSINESS.address.postalCode}`} height="350px" />
          </div>
        </div>
      </section>

      <CTABanner
        title={`Besoin d'un artisan pour votre ${service.shortName.toLowerCase()} ?`}
        subtitle={`Devis gratuit à ${BUSINESS.address.city} et dans un rayon de ${BUSINESS.radius}. Sans engagement.`}
      />
    </>
  );
}
