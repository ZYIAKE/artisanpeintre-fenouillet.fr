import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';

export default function MentionsLegales() {
  return (
    <>
      <SEOHead
        title={`Mentions Légales | ${BUSINESS.name}`}
        description={`Mentions légales du site artisanpeintre-fenouillet.fr. Informations sur l'artisan intervenant, l'éditeur, l'hébergeur et les conditions d'utilisation.`}
        canonical="/mentions-legales"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Artisan intervenant */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Artisan peintre — Intervenant</h2>
          <p className="text-gray-600 mb-3">Le professionnel intervenant dans le cadre des prestations proposées sur ce site est :</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Nom de l'entreprise</td><td className="px-4 py-2.5 text-gray-600">VG Peintures et Rénovations</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Dirigeant</td><td className="px-4 py-2.5 text-gray-600">Vincent George</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Forme juridique</td><td className="px-4 py-2.5 text-gray-600">Entrepreneur individuel</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">SIRET</td><td className="px-4 py-2.5 text-gray-600">894 037 266 00034</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">SIREN</td><td className="px-4 py-2.5 text-gray-600">894 037 266</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Code APE / NAF</td><td className="px-4 py-2.5 text-gray-600">4334Z — Travaux de peinture et vitrerie</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Adresse</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.address.full}</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Téléphone</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.phone}</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Adresse e-mail</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.email}</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Zone de couverture</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.address.city} et communes environnantes ({BUSINESS.address.department})</td></tr>
              </tbody>
            </table>
          </div>

          {/* 2. Éditeur du site */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Éditeur du site</h2>
          <p className="text-gray-600 mb-3">Le présent site est édité par :</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Raison sociale</td><td className="px-4 py-2.5 text-gray-600">AMD ANDRYSIAK</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Forme juridique</td><td className="px-4 py-2.5 text-gray-600">Entrepreneur individuel</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Numéro d'immatriculation</td><td className="px-4 py-2.5 text-gray-600">890 847 346</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">RCS</td><td className="px-4 py-2.5 text-gray-600">890 847 346</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Siège social</td><td className="px-4 py-2.5 text-gray-600">69 rue de Belbèze, 31170 Tournefeuille, France</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Adresse e-mail</td><td className="px-4 py-2.5 text-gray-600">contact@atlinker.com</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Téléphone</td><td className="px-4 py-2.5 text-gray-600">05 17 94 84 21</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Directeur de la publication</td><td className="px-4 py-2.5 text-gray-600">AMD ANDRYSIAK</td></tr>
              </tbody>
            </table>
          </div>

          {/* 3. Hébergement */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Hébergement du site</h2>
          <p className="text-gray-600 mb-3">Le site est hébergé par :</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Hébergeur</td><td className="px-4 py-2.5 text-gray-600">Cloudflare, Inc.</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Service</td><td className="px-4 py-2.5 text-gray-600">Cloudflare Pages</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Siège social</td><td className="px-4 py-2.5 text-gray-600">101 Townsend St, San Francisco, CA 94107, États-Unis</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Site web</td><td className="px-4 py-2.5 text-gray-600"><a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600">www.cloudflare.com</a></td></tr>
              </tbody>
            </table>
          </div>

          {/* 4. Propriété intellectuelle */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-600 mb-3">
            L'ensemble des contenus présents sur ce site (textes, images, photographies, logos, icônes, vidéos, sons, logiciels, mises en page, bases de données, code source) est protégé par le droit d'auteur, le droit des marques et le droit des bases de données, conformément aux dispositions du Code de la propriété intellectuelle.
          </p>
          <p className="text-gray-600 mb-8">
            Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de l'un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'éditeur. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>

          {/* 5. Conditions d'utilisation */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Conditions d'utilisation</h2>
          <p className="text-gray-600 mb-3">
            L'utilisation du présent site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment. Les utilisateurs sont invités à les consulter de manière régulière.
          </p>
          <p className="text-gray-600 mb-8">
            Ce site est accessible en tout temps aux utilisateurs. Une interruption pour raison de maintenance technique peut toutefois être décidée par l'éditeur, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.
          </p>

          {/* 6. Limitation de responsabilité */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
          <p className="text-gray-600 mb-3">
            L'éditeur du site ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
          <p className="text-gray-600 mb-8">
            Les informations contenues sur ce site sont aussi précises que possible et le site est mis à jour régulièrement, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une erreur ou ce qui peut être un dysfonctionnement, veuillez le signaler par e-mail à <a href="mailto:contact@atlinker.com" className="text-primary-500 hover:text-primary-600">contact@atlinker.com</a> en décrivant le problème de manière aussi précise que possible.
          </p>

          {/* 7. Liens hypertextes */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">7. Liens hypertextes</h2>
          <p className="text-gray-600 mb-3">
            Le site peut contenir des liens hypertextes vers d'autres sites internet. Les pages web auxquelles mènent ces liens ne relèvent pas de la responsabilité de l'éditeur qui ne peut en aucun cas être tenu responsable de leur contenu.
          </p>
          <p className="text-gray-600 mb-8">
            La mise en place de liens hypertextes vers le présent site est autorisée sans demande préalable, à condition que ces liens soient accessibles dans une nouvelle fenêtre du navigateur. Cependant, l'éditeur se réserve le droit de demander la suppression d'un lien qu'il estime non conforme à l'objet du site.
          </p>

          {/* 8. Protection des données personnelles */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">8. Protection des données personnelles</h2>
          <p className="text-gray-600 mb-3">
            Conformément au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016 et à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition de leurs données personnelles.
          </p>
          <p className="text-gray-600 mb-3">
            Les données personnelles collectées via les formulaires de contact du site (nom, prénom, adresse e-mail, numéro de téléphone, message) sont uniquement destinées au traitement de votre demande de devis ou de contact. Elles ne sont en aucun cas transmises à des tiers.
          </p>
          <p className="text-gray-600 mb-3">Pour exercer vos droits ou pour toute question relative au traitement de vos données, vous pouvez contacter l'éditeur :</p>
          <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
            <li>Par e-mail : <a href="mailto:contact@atlinker.com" className="text-primary-500 hover:text-primary-600">contact@atlinker.com</a></li>
            <li>Par courrier : AMD ANDRYSIAK — 69 rue de Belbèze, 31170 Tournefeuille, France</li>
          </ul>
          <p className="text-gray-600 mb-8">
            Pour plus d'informations sur le traitement de vos données, veuillez consulter notre <Link to="/politique-confidentialite" className="text-primary-500 hover:text-primary-600">politique de confidentialité</Link>.
          </p>

          {/* 9. Cookies */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">9. Cookies</h2>
          <p className="text-gray-600 mb-3">
            Le site peut être amené à utiliser des cookies. Un cookie est un petit fichier texte stocké sur le disque dur de l'utilisateur par le navigateur web. Il permet de reconnaître l'utilisateur lors de ses visites ultérieures et d'améliorer son expérience de navigation.
          </p>
          <p className="text-gray-600 mb-3">
            L'utilisateur peut configurer son navigateur pour refuser les cookies. Toutefois, certaines fonctionnalités du site pourraient ne plus être accessibles.
          </p>
          <p className="text-gray-600 mb-2">Les cookies éventuellement utilisés sur ce site servent à :</p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1">
            <li>Mesurer l'audience du site (nombre de visites, pages vues, etc.)</li>
            <li>Améliorer la navigation et l'ergonomie du site</li>
            <li>Mémoriser les préférences de l'utilisateur</li>
          </ul>

          {/* 10. Droit applicable */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">10. Droit applicable et juridiction</h2>
          <p className="text-gray-600 mb-3">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
          </p>
          <p className="text-gray-600">
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@atlinker.com" className="text-primary-500 hover:text-primary-600">contact@atlinker.com</a>.
          </p>

        </div>
      </section>
    </>
  );
}
