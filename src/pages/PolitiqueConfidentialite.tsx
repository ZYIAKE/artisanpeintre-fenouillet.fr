import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import mascotte from '../assets/mascotte-peintre.jpg';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEOHead
        title={`Politique de Confidentialité | ${BUSINESS.name}`}
        description={`Politique de confidentialité du site artisanpeintre-fenouillet.fr. Informations sur la collecte et le traitement de vos données personnelles.`}
        canonical="/politique-confidentialite"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold">Politique de confidentialité</h1>
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Collecte des données personnelles</h2>
          <p className="text-gray-600 mb-6">
            Les données personnelles collectées sur ce site sont uniquement celles que vous nous transmettez volontairement via notre formulaire de contact : nom, numéro de téléphone, ville et message. Ces informations sont utilisées exclusivement pour répondre à votre demande de devis ou de renseignement.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Utilisation des données</h2>
          <p className="text-gray-600 mb-6">
            Vos données personnelles sont utilisées uniquement pour vous recontacter suite à votre demande. Elles ne sont en aucun cas transmises à des tiers, vendues ou utilisées à des fins commerciales non sollicitées.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Conservation des données</h2>
          <p className="text-gray-600 mb-6">
            Les données collectées via le formulaire de contact sont conservées pour une durée maximale de 3 ans à compter de votre dernière interaction, conformément aux recommandations de la CNIL.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Vos droits</h2>
          <p className="text-gray-600 mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Pour exercer ces droits, vous pouvez nous contacter par téléphone au {BUSINESS.phone} ou par courrier à l'adresse : {BUSINESS.address.full}.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Sécurité</h2>
          <p className="text-gray-600 mb-6">
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p className="text-gray-600">
            Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter au {BUSINESS.phone} ou à l'adresse {BUSINESS.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
