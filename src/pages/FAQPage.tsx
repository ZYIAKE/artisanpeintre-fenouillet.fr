import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQTheme {
  title: string;
  items: FAQItem[];
}

const faqThemes: FAQTheme[] = [
  {
    title: 'Tarifs et devis',
    items: [
      ...BUSINESS.servicesHubFaqs.filter(f => f.question.toLowerCase().includes('devis')),
      {
        question: 'Quel est le prix moyen de la peinture au m2 ?',
        answer: "Le prix de la peinture interieure demarre a environ 25 EUR/m2 pour des murs en bon etat. Ce tarif comprend la preparation legere du support, la sous-couche et deux couches de finition. Pour un ravalement de facade, comptez a partir de 45 EUR/m2. Ces prix varient selon l'etat des surfaces, la peinture choisie et la hauteur sous plafond.",
      },
      {
        question: 'Quels facteurs influencent le prix des travaux de peinture ?',
        answer: "Plusieurs elements impactent le tarif : l'etat initial des murs (fissures, humidite, ancien papier peint a decoller), la surface totale, la hauteur sous plafond, le type de peinture choisie (standard, decorative, ecologique) et l'accessibilite du chantier. Un devis gratuit sur place permet de vous donner un prix precis.",
      },
      {
        question: 'Quels modes de paiement acceptez-vous ?',
        answer: "Nous acceptons le paiement par cheque, virement bancaire, especes et carte bancaire. Pour les chantiers importants, un echelonnement du paiement peut etre mis en place : un acompte a la commande, un reglement intermediaire et le solde a la reception des travaux.",
      },
      {
        question: 'Vos devis sont-ils vraiment gratuits et sans engagement ?',
        answer: "Oui, tous nos devis sont 100 % gratuits et sans aucun engagement. Nous nous deplacons a votre domicile pour evaluer les surfaces, discuter de vos souhaits en termes de couleurs et de finitions, et vous remettre un devis detaille poste par poste sous 48 heures.",
      },
    ],
  },
  {
    title: 'Delais et deroulement',
    items: [
      {
        question: 'Combien de temps faut-il pour peindre une piece ?',
        answer: "Pour une piece standard de 12 a 15 m2 (chambre, bureau), comptez 1 a 2 jours incluant la preparation et la peinture. Ce delai suppose des murs en etat correct. Si un travail de rebouchage ou d'enduit important est necessaire, ajoutez 1 jour supplementaire.",
      },
      {
        question: 'Quelle est la duree pour peindre un appartement complet ?',
        answer: "Un appartement T3 (environ 65 m2) necessite en general 1 semaine de travaux. Un T2 se fait en 3 a 4 jours. Ces durees incluent la protection du mobilier, la preparation des surfaces, l'application de la peinture et le nettoyage final du chantier.",
      },
      {
        question: 'Combien de temps dure un ravalement de facade ?',
        answer: "Un ravalement complet d'une maison individuelle prend generalement 2 a 3 semaines selon la surface et l'etat de la facade. Cela comprend le montage de l'echafaudage, le nettoyage, les reparations, l'application de l'enduit et de la peinture, puis le demontage.",
      },
      {
        question: 'Quel est le delai pour commencer les travaux ?',
        answer: `En general, nous pouvons demarrer sous 5 a 10 jours apres acceptation du devis, selon notre planning. Pour les petits chantiers (une piece), le delai peut etre plus court. Nous vous communiquons une date de debut precise des la validation. Contactez-nous au ${BUSINESS.phone} pour connaitre nos disponibilites.`,
      },
      {
        question: 'Peut-on habiter le logement pendant les travaux ?',
        answer: "Oui, dans la plupart des cas, vous pouvez rester chez vous. Nous travaillons piece par piece pour limiter la gene. Les meubles sont proteges par des baches, et nous nettoyons chaque soir. Pour les gros chantiers (appartement complet), nous vous conseillons de liberer les pieces au fur et a mesure.",
      },
    ],
  },
  {
    title: 'Garanties et assurances',
    items: [
      {
        question: "Etes-vous assure pour les travaux de peinture ?",
        answer: "Oui, nous disposons d'une assurance responsabilite civile professionnelle (RC Pro) et d'une garantie decennale. Ces assurances couvrent les dommages eventuels lies a notre intervention et garantissent la perennite de nos travaux pendant 10 ans.",
      },
      {
        question: 'Que couvre exactement la garantie decennale ?',
        answer: "La garantie decennale couvre pendant 10 ans les desordres qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination. Pour la peinture, cela concerne notamment les problemes d'adherence graves, les infiltrations liees a un ravalement defectueux ou les defauts affectant l'etancheite.",
      },
      {
        question: 'Que faire si un defaut apparait apres les travaux ?',
        answer: "Contactez-nous immediatement. Nous effectuons une visite de controle pour constater le probleme. Si le defaut releve de notre intervention, nous procedons a la reprise sans frais supplementaires. Notre objectif est votre satisfaction totale, et nous nous engageons a corriger tout defaut dans les meilleurs delais.",
      },
      {
        question: 'Quelles marques de peinture utilisez-vous ?',
        answer: "Nous travaillons exclusivement avec des peintures professionnelles de grandes marques : Tollens, Sikkens, Zolpan. Nous privilegions les peintures a faible emission de COV pour preserver la qualite de l'air interieur. Le choix du produit est adapte a chaque support et chaque usage (pieces humides, facades, boiseries).",
      },
    ],
  },
  {
    title: "Zones d'intervention",
    items: [
      ...BUSINESS.zonesHubFaqs,
      {
        question: 'Facturez-vous des frais de deplacement ?',
        answer: `Non, le deplacement est inclus dans nos tarifs pour toutes les communes situees dans notre zone d'intervention de ${BUSINESS.radius} autour de ${BUSINESS.address.city}. Aucun frais supplementaire ne sera ajoute a votre devis. Au-dela de cette zone, contactez-nous pour etudier la faisabilite.`,
      },
      {
        question: 'Intervenez-vous en urgence ?',
        answer: "Nous faisons notre maximum pour repondre aux demandes urgentes (degat des eaux, sinistre). Selon notre planning, nous pouvons intervenir sous 24 a 48 heures pour les situations qui le necessitent. Appelez-nous directement pour nous expliquer votre situation et nous organiserons une intervention rapide.",
      },
    ],
  },
];

const allFaqs = faqThemes.flatMap(theme => theme.items);

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-900 pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="px-5 pb-4 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="FAQ | VG Peintures - Peintre a Fenouillet (31)"
        description={`Retrouvez les reponses a toutes vos questions sur nos services de peinture a Fenouillet et environs : tarifs, delais, garanties, zones d'intervention. ${BUSINESS.name}.`}
        canonical="/faq"
        faqs={allFaqs}
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Questions frequentes sur nos services de peinture
              </h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Retrouvez les reponses aux questions les plus courantes sur nos prestations, nos tarifs, nos delais et nos garanties.
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
        <div className="container-narrow max-w-3xl">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: 'Questions frequentes', path: '/faq' },
          ]} />

          <div className="space-y-12">
            {faqThemes.map((theme, i) => (
              <div key={i}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{theme.title}</h2>
                <FAQAccordion items={theme.items} />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-50 rounded-xl p-6 sm:p-8 border border-primary-100 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Vous n'avez pas trouve votre reponse ?</h2>
            <p className="text-gray-600 mb-6">
              Contactez-nous directement, nous serons ravis de repondre a toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-2 bg-accent-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg text-lg">
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-500 font-bold px-8 py-4 rounded-lg border-2 border-primary-500 hover:bg-primary-50 transition-all duration-200"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
