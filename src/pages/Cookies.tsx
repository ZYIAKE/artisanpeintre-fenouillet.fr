import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import mascotte from '../assets/mascotte-peintre.jpg';

export default function Cookies() {
  return (
    <>
      <SEOHead
        title={`Politique de Cookies | ${BUSINESS.name}`}
        description={`Politique de cookies du site artisanpeintre-fenouillet.fr. Informations sur l'utilisation des cookies et vos choix.`}
        canonical="/cookies"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold">Politique de cookies</h1>
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Qu'est-ce qu'un cookie ?</h2>
          <p className="text-gray-600 mb-6">
            Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone lors de la visite d'un site internet. Il permet au site de se souvenir de vos actions et préférences pendant une durée déterminée.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies utilisés sur ce site</h2>
          <p className="text-gray-600 mb-4">
            Ce site utilise un nombre minimal de cookies, nécessaires à son bon fonctionnement :
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>Cookies techniques essentiels au fonctionnement du site</li>
            <li>Cookies de mesure d'audience (anonymisés) pour améliorer notre service</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies tiers</h2>
          <p className="text-gray-600 mb-6">
            Ce site intègre des éléments Google Maps pour vous permettre de localiser notre adresse. Google peut déposer des cookies lors du chargement de ces éléments. Nous vous invitons à consulter la politique de cookies de Google pour plus d'informations.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Gérer vos cookies</h2>
          <p className="text-gray-600 mb-6">
            Vous pouvez à tout moment gérer vos préférences en matière de cookies directement depuis les paramètres de votre navigateur. Vous pouvez choisir de bloquer ou supprimer les cookies. Notez que la désactivation de certains cookies peut affecter le fonctionnement du site.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p className="text-gray-600">
            Pour toute question concernant notre utilisation des cookies, contactez-nous au {BUSINESS.phone} ou par courrier au {BUSINESS.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
