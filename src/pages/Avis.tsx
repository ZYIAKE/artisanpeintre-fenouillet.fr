import { Link } from 'react-router-dom';
import { Phone, Shield, Award, CheckCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import ReviewsCarousel from '../components/ReviewsCarousel';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';

const trustSignals = [
  {
    icon: Award,
    title: `${BUSINESS.aboutPro.experience} d'experience`,
    description: "Un savoir-faire eprouve dans tous les types de travaux de peinture en batiment.",
  },
  {
    icon: CheckCircle,
    title: `+${BUSINESS.projectsDone} chantiers realises`,
    description: "Des dizaines de clients satisfaits a Fenouillet et dans toute la metropole toulousaine.",
  },
  {
    icon: Shield,
    title: 'Assurance decennale & RC Pro',
    description: "Tous nos travaux sont couverts par une assurance responsabilite civile professionnelle et garantie decennale.",
  },
];

export default function Avis() {
  return (
    <>
      <SEOHead
        title="Avis Clients | VG Peintures - Peintre a Fenouillet (31)"
        description={`Consultez les avis clients de ${BUSINESS.name}, artisan peintre a Fenouillet (31). Avis Google verifies, temoignages et retours d'experience sur nos travaux de peinture.`}
        canonical="/avis"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Ce que nos clients disent de nous
              </h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                La satisfaction de nos clients est notre meilleure carte de visite. Decouvrez les avis verifies laisses sur Google par les particuliers et professionnels que nous avons accompagnes.
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
            { label: 'Avis clients', path: '/avis' },
          ]} />

          <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
            Nous croyons en la transparence totale. C'est pourquoi nous affichons nos avis Google sans filtre. Chaque temoignage ci-dessous est un avis authentique laisse par un client apres la realisation de ses travaux de peinture.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi nous faire confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustSignals.map((signal, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{signal.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Partagez votre experience</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Vous avez fait appel a nos services ? Votre avis compte et aide d'autres personnes a nous faire confiance.
          </p>
          <a
            href="https://www.google.com/maps/place/VG+Peintures+et+R%C3%A9novations/@43.8509052,0.9317117,10z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-500 font-bold px-6 py-3 rounded-lg border-2 border-primary-500 hover:bg-primary-50 transition-all duration-200"
          >
            Donnez votre avis sur Google
          </a>
        </div>
      </section>

      <CTABanner
        title="Convaincu par nos avis ?"
        subtitle={`Demandez votre devis gratuit a ${BUSINESS.address.city} et environs. Sans engagement.`}
      />
    </>
  );
}
