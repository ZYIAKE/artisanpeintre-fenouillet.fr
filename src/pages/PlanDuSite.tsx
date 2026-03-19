import { Link } from 'react-router-dom';
import { Phone, Home, Wrench, MapPin, FileText, ChevronRight } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { services } from '../data/services';
import { zones } from '../data/zones';
import SEOHead from '../components/SEOHead';
import mascotte from '../assets/mascotte-peintre.jpg';

const mainPages = [
  { to: '/', label: 'Accueil', description: 'Page d\'accueil du site' },
  { to: '/services', label: 'Nos services', description: 'Tous nos services de peinture en bâtiment' },
  { to: '/zones-intervention', label: 'Zones d\'intervention', description: `Communes desservies autour de ${BUSINESS.address.city}` },
  { to: '/tarifs', label: 'Tarifs', description: 'Nos tarifs et devis gratuit' },
  { to: '/a-propos', label: 'À propos', description: 'Qui sommes-nous ?' },
  { to: '/contact', label: 'Contact', description: 'Formulaire de contact et coordonnées' },
];

const legalPages = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { to: '/cookies', label: 'Gestion des cookies' },
  { to: '/plan-du-site', label: 'Plan du site' },
];

interface SitemapSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function SitemapSection({ icon, title, children }: SitemapSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="w-9 h-9 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export default function PlanDuSite() {
  return (
    <>
      <SEOHead
        title={`Plan du site | ${BUSINESS.name}`}
        description={`Plan du site artisanpeintre-fenouillet.fr. Retrouvez l'ensemble des pages du site : services de peinture, zones d'intervention, tarifs et informations.`}
        canonical="/plan-du-site"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold">Plan du site</h1>
              <p className="mt-3 text-primary-100 text-lg max-w-xl">
                Retrouvez l'ensemble des pages de notre site pour naviguer facilement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href={BUSINESS.phoneTel} className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg">
                  <Phone className="w-5 h-5" />
                  Appeler : {BUSINESS.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
            <div className="hidden lg:block shrink-0">
              <img
                src={mascotte}
                alt={`Mascotte ${BUSINESS.name}`}
                className="w-48 xl:w-56 rounded-2xl drop-shadow-2xl"
                loading="lazy"
                width={192}
                height={240}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SitemapSection
            icon={<Home className="w-5 h-5" />}
            title="Pages principales"
          >
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className="group flex items-center gap-3 py-2 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-primary-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">{page.label}</span>
                      <span className="text-gray-400 text-sm ml-2 hidden sm:inline">{page.description}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapSection>

          <SitemapSection
            icon={<Wrench className="w-5 h-5" />}
            title={`Nos services (${services.length})`}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-primary-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapSection>

          <SitemapSection
            icon={<MapPin className="w-5 h-5" />}
            title={`Zones d'intervention (${zones.length})`}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
              {zones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    to={`/zones-intervention/${zone.slug}`}
                    className="group flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-primary-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">{zone.name}</span>
                      <span className="text-gray-400 text-xs">{zone.distance}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapSection>

          <SitemapSection
            icon={<FileText className="w-5 h-5" />}
            title="Informations legales"
          >
            <ul className="space-y-2">
              {legalPages.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className="group flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-primary-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapSection>
        </div>
      </section>
    </>
  );
}
