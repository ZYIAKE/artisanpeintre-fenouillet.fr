import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Tag, Info } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';

const projects = [
  {
    title: 'Renovation complete appartement T3',
    location: 'Fenouillet',
    description:
      "Remise en peinture integrale d'un appartement T3 de 65 m² : murs, plafonds et boiseries. Rebouchage de fissures, enduit de lissage et deux couches de peinture acrylique mate. Teintes claires pour agrandir l'espace.",
    duration: '1 semaine',
    budget: '3 500 - 5 000 EUR',
    service: 'Peinture interieure',
  },
  {
    title: 'Ravalement facade maison individuelle',
    location: 'Aucamville',
    description:
      "Nettoyage haute pression, traitement anti-mousse, rebouchage des microfissures et application d'un enduit de facade taloché. Finition peinture siloxane ton pierre pour une protection durable contre les intemperies.",
    duration: '2 semaines',
    budget: '6 000 - 9 000 EUR',
    service: 'Ravalement de facade',
  },
  {
    title: 'Peinture sejour et cuisine ouverte',
    location: 'Toulouse',
    description:
      "Mise en peinture d'un sejour-cuisine de 40 m² dans un appartement neuf. Preparation des supports neufs (sous-couche), application de peinture veloutee blanche au plafond et deux teintes contrastees aux murs.",
    duration: '3 jours',
    budget: '1 500 - 2 500 EUR',
    service: 'Peinture interieure',
  },
  {
    title: 'Peinture exterieure volets et portail',
    location: 'Blagnac',
    description:
      "Decapage, poncage et mise en peinture de 8 volets bois et d'un portail metallique. Application d'un antirouille sur le portail et d'une lasure microporeuse teintee sur les volets pour une protection longue duree.",
    duration: '4 jours',
    budget: '2 000 - 3 000 EUR',
    service: 'Peinture exterieure',
  },
  {
    title: 'Pose de papier peint panoramique',
    location: 'Launaguet',
    description:
      "Preparation du mur d'accent (depose ancien papier, enduit, poncage) et pose d'un papier peint panoramique sur 8 m lineaires. Raccords invisibles et finition soignee au niveau des angles et interrupteurs.",
    duration: '2 jours',
    budget: '1 200 - 1 800 EUR',
    service: 'Papier peint',
  },
  {
    title: 'Renovation cage d\'escalier copropriete',
    location: 'Castelginest',
    description:
      "Lessivage, enduit de rebouchage et peinture des murs et plafonds sur 3 niveaux. Travail en hauteur avec echafaudage roulant. Application de peinture lessivable pour faciliter l'entretien des parties communes.",
    duration: '1 semaine',
    budget: '4 000 - 6 000 EUR',
    service: 'Peinture interieure',
  },
];

export default function Realisations() {
  return (
    <>
      <SEOHead
        title="Nos Realisations | VG Peintures - Peintre a Fenouillet (31)"
        description={`Decouvrez les realisations de ${BUSINESS.name} : peinture interieure, exterieure, ravalement de facade a Fenouillet et environs. Projets recents et exemples de chantiers.`}
        canonical="/realisations"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Nos realisations de peinture a Fenouillet et environs
              </h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Depuis {BUSINESS.foundingYear}, nous avons realise plus de {BUSINESS.projectsDone} chantiers de peinture en Haute-Garonne. Decouvrez quelques exemples representatifs de notre savoir-faire.
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
              <p className="text-sm text-gray-500 mb-4">Reponse sous 24h — sans engagement</p>
              <ContactForm />
              <p className="text-xs text-gray-400 mt-3 text-center">Vos donnees restent confidentielles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: 'Realisations', path: '/realisations' },
          ]} />

          <div className="flex items-start gap-3 mb-8 bg-primary-50 rounded-xl p-4 border border-primary-100">
            <Info className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
            <p className="text-sm text-gray-600">
              Les projets presentes ci-dessous sont des exemples illustratifs representant le type de chantiers que nous realisons. Les photos et descriptions de nos vrais chantiers seront ajoutees prochainement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-gray-100 h-48 flex items-center justify-center relative">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-sm">Photo a venir</p>
                  </div>
                  <span className="absolute top-3 right-3 bg-white/90 text-xs font-medium text-gray-500 px-2 py-1 rounded-full border border-gray-200">
                    Illustration
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {project.service}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{project.duration}</span>
                    </div>
                    <span className="font-semibold text-accent-600">{project.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Vous avez un projet similaire ? Contactez-nous pour obtenir un devis gratuit adapte a votre situation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
