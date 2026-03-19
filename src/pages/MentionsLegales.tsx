import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import mascotte from '../assets/mascotte-peintre.jpg';

export default function MentionsLegales() {
  return (
    <>
      <SEOHead
        title={`Mentions Légales | ${BUSINESS.name}`}
        description={`Mentions légales du site artisanpeintre-fenouillet.fr. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.`}
        canonical="/mentions-legales"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold">Mentions légales</h1>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Éditeur du site</h2>
          <p className="text-gray-600 mb-2">{BUSINESS.name}</p>
          <p className="text-gray-600 mb-2">{BUSINESS.address.full}</p>
          <p className="text-gray-600 mb-6">Téléphone : {BUSINESS.phone}</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Hébergement</h2>
          <p className="text-gray-600 mb-6">
            Ce site est hébergé par un prestataire professionnel assurant la disponibilité et la sécurité des données.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
          <p className="text-gray-600 mb-6">
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de {BUSINESS.name}, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Responsabilité</h2>
          <p className="text-gray-600 mb-6">
            {BUSINESS.name} s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Liens hypertextes</h2>
          <p className="text-gray-600 mb-6">
            Le site peut contenir des liens hypertextes vers d'autres sites. {BUSINESS.name} ne dispose d'aucun moyen pour contrôler le contenu de ces sites tiers et n'assume aucune responsabilité quant à leur contenu.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Droit applicable</h2>
          <p className="text-gray-600">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </div>
      </section>
    </>
  );
}
