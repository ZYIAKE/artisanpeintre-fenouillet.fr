import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, FileText, Shield, Clock, CheckCircle, Sparkles,
  PaintBucket, Home, Building2, Wallpaper, Layers, Palette,
  MapPin, ChevronRight, Euro, Wrench, Star, Award, Users,
} from 'lucide-react';
import { BUSINESS } from '../data/business';
import { services } from '../data/services';
import { zones } from '../data/zones';
import SEOHead from '../components/SEOHead';
import FAQ from '../components/FAQ';
import GoogleMap from '../components/GoogleMap';
import ContactForm from '../components/ContactForm';
import mascotte from '../assets/mascotte-peintre.jpg';

const iconMap: Record<string, React.ElementType> = {
  PaintBucket, Home, Building2, Wallpaper, Layers, Palette,
};

const reassurance = [
  { icon: Clock, title: 'Délai rapide', desc: 'Début des travaux sous 5 à 10 jours' },
  { icon: Euro, title: 'Devis gratuit', desc: 'Prix transparent, sans surprise' },
  { icon: Shield, title: 'Assurance décennale', desc: 'Travaux couverts et garantis' },
  { icon: Sparkles, title: 'Finitions soignées', desc: 'Un travail impeccable, dans les moindres détails' },
];

const featuredZones = zones.slice(0, 8);

const counters = [
  { icon: Award, value: 25, suffix: '+', label: "ans d'experience" },
  { icon: Wrench, value: BUSINESS.projectsDone, suffix: '+', label: 'chantiers realises' },
  { icon: Star, value: 5.0, suffix: '/5', label: 'sur Google', decimals: 1 },
  { icon: Users, value: 20, suffix: '+', label: 'communes couvertes' },
];

function AnimatedCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1500;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(counters.map(c => Number((c.value * eased).toFixed(c.decimals ?? 0))));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section ref={ref} className="py-12 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="text-white">
                <Icon className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <p className="text-3xl sm:text-4xl font-bold">
                  {counts[i]}{c.suffix}
                </p>
                <p className="text-sm text-blue-200 mt-1">{c.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SEOHead
        title={`Artisan Peintre en Bâtiment à ${BUSINESS.address.city} (${BUSINESS.address.postalCode}) | Devis Gratuit`}
        description={`${BUSINESS.name}, votre artisan peintre en bâtiment à ${BUSINESS.address.city} (${BUSINESS.address.postalCode}). Peinture intérieure et extérieure, ravalement de façade, papier peint. Devis gratuit sous 48h. ☎ ${BUSINESS.phone}.`}
        canonical="/"
        faqs={BUSINESS.homeFaqs}
      />

      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Clock className="w-4 h-4 text-accent-400" />
                {BUSINESS.heroTagline}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Artisan peintre en bâtiment à {BUSINESS.address.city} et en Haute-Garonne
              </h1>
              <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-lg leading-relaxed">
                {BUSINESS.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={BUSINESS.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg shadow-accent-500/30 hover:shadow-xl hover:-translate-y-0.5 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <FileText className="w-5 h-5" />
                  Demander un devis
                </Link>
              </div>
              <p className="text-primary-200 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={BUSINESS.phoneTel} className="hover:text-white transition-colors">{BUSINESS.phone}</a>
                <span className="mx-1">|</span>
                <span>Devis gratuit & sans engagement</span>
              </p>
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

      {/* Section SEO : Présentation artisan peintre Fenouillet */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Votre artisan peintre à Fenouillet, au service de vos projets
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Vous recherchez un <strong>artisan peintre à Fenouillet</strong> pour vos travaux de peinture intérieure, de peinture extérieure ou de ravalement de façade ? Artisan Peintre 31 est votre interlocuteur de confiance dans le <strong>31150</strong> et dans toute la métropole toulousaine. Installés au cœur de Fenouillet, nous connaissons parfaitement le parc immobilier local et les spécificités des habitations de la commune : maisons traditionnelles en brique toulousaine, pavillons des années 70-80, résidences récentes ou appartements en copropriété.
              </p>
              <p>
                Notre entreprise de <strong>peinture en bâtiment à Fenouillet</strong> intervient aussi bien chez les particuliers que chez les professionnels. Que vous souhaitiez rafraîchir une pièce, rénover entièrement votre intérieur, redonner un coup d'éclat à votre façade ou poser du papier peint, nous vous accompagnons à chaque étape de votre projet. Du premier contact jusqu'à la réception du chantier, nous mettons un point d'honneur à vous offrir un travail soigné, dans le respect des délais et du budget convenus.
              </p>
              <p>
                Faire appel à un <strong>peintre professionnel à Fenouillet</strong>, c'est l'assurance de bénéficier d'un savoir-faire artisanal éprouvé, de peintures professionnelles de grandes marques (Tollens, Sikkens, Zolpan) et d'une préparation minutieuse des supports. C'est cette rigueur dans chaque étape du chantier qui garantit un résultat durable et esthétique. Nous sommes couverts par une assurance responsabilité civile professionnelle et une garantie décennale, pour des travaux réalisés en toute sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nos services de {BUSINESS.tradeDomain}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Du rafraîchissement d'une pièce à la rénovation complète, nous prenons en charge tous vos besoins en {BUSINESS.tradeDomain} à {BUSINESS.address.city}.
            </p>
          </div>
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
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.heroText}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-500">
                    En savoir plus <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-secondary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Section SEO : Prestations détaillées */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Des travaux de peinture adaptés à chaque projet à Fenouillet
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                En tant qu'<strong>artisan peintre à Fenouillet</strong>, nous proposons une gamme complète de prestations pour répondre à tous vos besoins. La <strong>peinture intérieure</strong> est notre cœur de métier : murs, plafonds, boiseries, pièces humides, nous traitons chaque surface avec les produits les plus adaptés. Pour vos extérieurs, nous réalisons la <strong>peinture de façade</strong>, de volets, de portails et de clôtures avec des peintures résistantes aux conditions climatiques de la Haute-Garonne.
              </p>
              <p>
                Le <strong>ravalement de façade à Fenouillet</strong> fait également partie de nos spécialités. Ce chantier complet comprend le nettoyage haute pression, le traitement des fissures et mousses, la reprise des enduits endommagés et l'application d'une finition protectrice. C'est une intervention indispensable pour préserver la valeur de votre bien immobilier et respecter les obligations légales d'entretien des façades.
              </p>
              <p>
                Nous maîtrisons aussi la <strong>pose de papier peint</strong> et de revêtements muraux (intissé, vinyle, panoramique, toile de verre) ainsi que les travaux d'<strong>enduit et de préparation de surfaces</strong>. Rebouchage, lissage, ponçage, bandes à joints : la préparation est une étape clé que nous réalisons systématiquement pour garantir un résultat final irréprochable. Enfin, pour ceux qui souhaitent des finitions originales, notre expertise en <strong>peinture décorative</strong> vous ouvre les portes du stuc vénitien, du béton ciré, de la patine ou du tadelakt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Intervention rapide à {BUSINESS.address.city} et alentours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous intervenons dans un rayon de {BUSINESS.radius} autour de {BUSINESS.address.city}. Découvrez les communes que nous desservons.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredZones.map((zone) => (
              <Link
                key={zone.slug}
                to={`/zones-intervention/${zone.slug}`}
                className="group flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200"
              >
                <MapPin className="w-5 h-5 text-primary-400 group-hover:text-primary-500 shrink-0" />
                <div>
                  <span className="block font-medium text-gray-900 group-hover:text-primary-500 transition-colors text-sm">
                    {zone.name}
                  </span>
                  <span className="block text-xs text-gray-500">{zone.distance}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/zones-intervention" className="btn-secondary">
              <MapPin className="w-4 h-4" />
              Toutes les communes
            </Link>
          </div>
        </div>
      </section>

      {/* Section SEO : Pourquoi choisir un artisan peintre local */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi faire appel à un artisan peintre à Fenouillet ?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Choisir un <strong>artisan peintre implanté à Fenouillet</strong> présente de nombreux avantages par rapport à une grande entreprise ou un auto-entrepreneur de passage. En tant que professionnel ancré localement, nous connaissons les caractéristiques du bâti de la commune et de la métropole toulousaine. Les sols argileux de la Haute-Garonne provoquent des mouvements de terrain qui engendrent des fissures spécifiques : nous savons les identifier et les traiter efficacement avant toute mise en peinture.
              </p>
              <p>
                Notre proximité géographique nous permet d'être réactifs. Lorsque vous faites appel à notre entreprise de <strong>peinture à Fenouillet</strong>, nous nous déplaçons gratuitement pour établir un devis détaillé sous 48 heures. Le début des travaux intervient généralement sous 5 à 10 jours après votre accord, selon la taille du chantier. En cas de besoin urgent, nous pouvons adapter notre planning pour intervenir plus rapidement.
              </p>
              <p>
                La relation de confiance est au cœur de notre métier d'<strong>artisan peintre</strong>. Nous travaillons principalement grâce au bouche-à-oreille et aux recommandations de nos clients satisfaits à Fenouillet, Aucamville, Fonbeauzard, Launaguet et dans toutes les communes environnantes. Chaque chantier est pour nous l'occasion de démontrer notre sérieux : devis clair et respecté, finitions impeccables, chantier propre et rangé chaque soir, et un interlocuteur unique du début à la fin de vos travaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Tarifs transparents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos prix sont clairs et communiqués avant toute intervention. Pas de surprise sur la facture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map((s) => (
              <div key={s.slug} className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-100">
                <span className="font-medium text-gray-900 text-sm">{s.shortName}</span>
                <span className="text-accent-600 font-bold text-sm">{s.pricingHint}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/tarifs" className="btn-secondary">
              <Euro className="w-4 h-4" />
              Voir tous les tarifs
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Pourquoi nous faire confiance ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reassurance.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section SEO : Engagement qualité et méthode de travail */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Notre méthode de travail : un artisan peintre rigoureux à Fenouillet
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                La qualité d'un chantier de <strong>peinture à Fenouillet</strong> repose sur une méthode de travail rigoureuse. Chaque projet commence par une visite gratuite à votre domicile. Nous évaluons l'état des surfaces, discutons de vos envies en matière de couleurs et de finitions, et prenons les mesures nécessaires pour établir un devis précis, détaillé poste par poste. Aucune mauvaise surprise : le prix annoncé est le prix final.
              </p>
              <p>
                Avant toute application de peinture, nous consacrons le temps nécessaire à la <strong>préparation des supports</strong>. Cette étape, souvent négligée par les peintres pressés, représente pourtant la moitié du travail. Lessivage, ponçage, rebouchage des fissures, application d'enduit de lissage, pose de sous-couche : chaque surface est traitée avec le plus grand soin. C'est cette préparation minutieuse qui fait la différence entre un résultat médiocre et un rendu professionnel qui tient dans le temps.
              </p>
              <p>
                Nous sélectionnons des <strong>peintures professionnelles à faible émission de COV</strong> pour préserver la qualité de l'air intérieur de votre logement. Chaque produit est choisi en fonction du support et de l'usage de la pièce : peinture mate pour les chambres, satinée et lessivable pour les pièces de vie et les pièces humides, laquée pour les boiseries. Pour l'extérieur, nous utilisons des peintures microporeuses résistantes aux UV et aux intempéries du climat toulousain. Faites confiance à votre <strong>artisan peintre à Fenouillet</strong> pour des travaux réalisés dans les règles de l'art.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Questions fréquentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={BUSINESS.homeFaqs} />
          </div>
        </div>
      </section>

      <section className="section-padding" id="contact">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Contactez votre {BUSINESS.trade}
              </h2>
              <p className="text-gray-600 mb-8">
                Besoin d'un devis pour vos travaux de peinture ? Remplissez le formulaire ou appelez-nous directement.
              </p>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={mascotte}
                  alt={`Mascotte ${BUSINESS.trade} - Réparation rapide à ${BUSINESS.address.city}`}
                  className="w-20 h-auto rounded-xl"
                  width={80}
                  height={100}
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-gray-900">À votre écoute</p>
                  <a href={BUSINESS.phoneTel} className="text-accent-600 font-bold text-xl hover:text-accent-700 transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>{BUSINESS.address.full}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <div>
                    <p>{BUSINESS.hours.weekdays}</p>
                    <p>{BUSINESS.hours.sunday}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>Devis gratuit & sans engagement</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <GoogleMap query={BUSINESS.mapQuery} height="280px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
