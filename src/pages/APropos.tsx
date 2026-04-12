import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Sparkles, Eye, Phone, CheckCircle, MapPin, Briefcase } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

const engagementIcons: Record<string, React.ElementType> = {
  'Finitions soignées': Sparkles,
  'Transparence': Eye,
  'Propreté du chantier': Sparkles,
  'Garantie': Shield,
};

export default function APropos() {
  useEffect(() => {
    const existing = document.querySelector('script[data-person-schema]');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-person-schema', 'true');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: BUSINESS.founderName,
      jobTitle: 'Gerant',
      worksFor: {
        '@type': 'Organization',
        '@id': BUSINESS.domain + '/#business',
        name: BUSINESS.name,
      },
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title={`Artisan Peintre à ${BUSINESS.address.city} (${BUSINESS.address.postalCode}) | Qui Sommes-Nous ?`}
        description={`${BUSINESS.name}, artisan peintre en bâtiment basé à ${BUSINESS.address.city}. Finitions soignées, garantie décennale, devis gratuit. Intervention dans un rayon de ${BUSINESS.radius} en Haute-Garonne.`}
        canonical="/a-propos"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Votre artisan peintre à Fenouillet : VG Peintures et Rénovations</h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                {BUSINESS.aboutHeroText}
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

      {/* Section métier — contenu SEO stable */}
      <section className="section-padding">
        <div className="container-narrow">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: 'A propos', path: '/a-propos' },
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {BUSINESS.aboutSections.tradeTitle}
              </h2>
              {BUSINESS.aboutSections.tradeParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src={mascotte}
                alt={`Artisan ${BUSINESS.trade} à ${BUSINESS.address.city}`}
                className="w-64 lg:w-80 rounded-2xl drop-shadow-xl"
                width={320}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section zone d'intervention — contenu SEO stable */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 pt-2">
              {BUSINESS.aboutSections.zoneTitle}
            </h2>
          </div>
          {BUSINESS.aboutSections.zoneParagraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <div className="mt-4">
            <Link to="/zones-intervention" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
              Voir toutes nos zones d'intervention &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Nos engagements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BUSINESS.aboutSections.engagements.map((item, i) => {
              const Icon = engagementIcons[item.title] || Shield;
              return (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthode de travail */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notre méthode de travail
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {BUSINESS.aboutSections.workSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui nous distingue */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce qui nous distingue</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {BUSINESS.aboutSections.distinguishing.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 bg-white px-4 py-3 rounded-lg border border-gray-200 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc professionnel — seul bloc à modifier si changement de client */}
      <section className="section-padding bg-primary-50 border-t border-primary-100">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{BUSINESS.aboutPro.name}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {BUSINESS.aboutPro.address}
                </p>
              </div>
            </div>
            {BUSINESS.aboutPro.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-primary-500" />
                <span>Fondée en {BUSINESS.aboutPro.founded}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Briefcase className="w-4 h-4 text-primary-500" />
                <span>Plus de {BUSINESS.aboutPro.experience} d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
