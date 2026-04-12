import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEOHead
        title={`Politique de Confidentialité | ${BUSINESS.name}`}
        description={`Politique de confidentialité du site artisanpeintre-fenouillet.fr. Informations sur la collecte et le traitement de vos données personnelles conformément au RGPD.`}
        canonical="/politique-confidentialite"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Engagement RGPD */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Engagement RGPD de VG Peintures et Rénovations</h2>
          <p className="text-gray-600 mb-3">
            VG Peintures et Rénovations accorde une importance particulière au respect de votre vie privée. La présente politique de confidentialité a été rédigée pour vous informer des pratiques concernant la collecte et l'utilisation de vos données personnelles, conformément aux dispositions du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD) et de la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
          </p>
          <p className="text-gray-600 mb-8">
            Nous nous engageons à mettre en œuvre les mesures techniques et organisationnelles appropriées pour assurer un niveau de sécurité adapté aux risques liés au traitement de vos données.
          </p>

          {/* 2. Responsable du traitement */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
          <p className="text-gray-600 mb-3">Le responsable du traitement de vos données personnelles est :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Nom de l'entreprise</td><td className="px-4 py-2.5 text-gray-600">VG Peintures et Rénovations</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Dirigeant</td><td className="px-4 py-2.5 text-gray-600">Vincent George</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Adresse</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.address.full}</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Téléphone</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.phone}</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Adresse e-mail</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.email}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter aux coordonnées mentionnées ci-dessus.
          </p>

          {/* 3. Données collectées */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
          <p className="text-gray-600 mb-3">Nous collectons les données personnelles suivantes via les formulaires de contact et de demande de devis présents sur notre site :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Nom et prénom</td><td className="px-4 py-2.5 text-gray-600">Identifiant</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Numéro de téléphone</td><td className="px-4 py-2.5 text-gray-600">Moyen de communication direct</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Ville</td><td className="px-4 py-2.5 text-gray-600">Localisation pour définir la zone d'intervention</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Type de prestation</td><td className="px-4 py-2.5 text-gray-600">Nature du travail demandé</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Message / description</td><td className="px-4 py-2.5 text-gray-600">Détails de votre demande</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Ces données sont collectées uniquement si vous remplissez volontairement nos formulaires de contact ou de demande de devis. Aucune donnée personnelle n'est collectée automatiquement lors de votre visite, à l'exception des données de navigation standard (adresse IP, pages visitées) pour le suivi d'audience.
          </p>

          {/* 4. Finalités du traitement */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Finalités du traitement</h2>
          <p className="text-gray-600 mb-3">Les données personnelles collectées sont utilisées pour les finalités suivantes :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Traitement de votre demande de devis</td><td className="px-4 py-2.5 text-gray-600">Évaluer votre demande et vous proposer un devis personnalisé</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Suivi client et communication</td><td className="px-4 py-2.5 text-gray-600">Vous contacter pour discuter de votre projet et assurer le suivi de votre demande</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Gestion administrative</td><td className="px-4 py-2.5 text-gray-600">Archiver les demandes et assurer la continuité de service</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Nous ne traiterons vos données qu'à ces fins précises. En aucun cas, vos données ne seront utilisées à d'autres fins sans votre consentement explicite.
          </p>

          {/* 5. Base juridique */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Base juridique du traitement</h2>
          <p className="text-gray-600 mb-3">Le traitement de vos données personnelles repose sur les bases juridiques suivantes :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Votre consentement</td><td className="px-4 py-2.5 text-gray-600">Vous avez donné votre consentement explicite en remplissant nos formulaires de contact ou de demande de devis (article 6(1)a du RGPD)</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Intérêt légitime</td><td className="px-4 py-2.5 text-gray-600">Le traitement est nécessaire pour répondre à votre demande de devis et assurer le suivi administratif (article 6(1)f du RGPD)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Vous pouvez retirer votre consentement à tout moment sans affecter la légalité du traitement antérieur.
          </p>

          {/* 6. Destinataires des données */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
          <p className="text-gray-600 mb-3">Vos données personnelles sont traitées uniquement par VG Peintures et Rénovations. Elles ne sont transmises à des tiers que dans les cas strictement nécessaires :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">VG Peintures et Rénovations</td><td className="px-4 py-2.5 text-gray-600">Seul responsable du traitement et utilisant les données pour la gestion de votre demande</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Supabase</td><td className="px-4 py-2.5 text-gray-600">Sous-traitant technique assurant l'hébergement et le stockage sécurisé de vos données</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Resend</td><td className="px-4 py-2.5 text-gray-600">Sous-traitant technique assurant l'envoi de nos e-mails de communication</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Tous nos sous-traitants sont tenus par contrat de protéger vos données conformément aux normes du RGPD et ne sont autorisés à les utiliser que pour les finalités définies.
          </p>

          {/* 7. Durée de conservation */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">7. Durée de conservation des données</h2>
          <p className="text-gray-600 mb-3">Vos données personnelles sont conservées selon les délais suivants :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Demandes de devis</td><td className="px-4 py-2.5 text-gray-600">3 ans à compter de votre dernier contact ou de votre dernière activité</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Communications par e-mail</td><td className="px-4 py-2.5 text-gray-600">3 ans après la fin de la correspondance</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Données de navigation</td><td className="px-4 py-2.5 text-gray-600">Supprimées après 13 mois conformément aux standards du secteur</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Une fois la durée de conservation écoulée, vos données sont supprimées automatiquement ou archivées pour des raisons légales ou comptables si nécessaire. Vous pouvez demander la suppression de vos données à tout moment avant l'expiration de ce délai.
          </p>

          {/* 8. Droits des personnes */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">8. Droits des personnes concernées</h2>
          <p className="text-gray-600 mb-3">Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Droit d'accès</td><td className="px-4 py-2.5 text-gray-600">Vous pouvez demander l'accès à vos données et obtenir une copie</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Droit de rectification</td><td className="px-4 py-2.5 text-gray-600">Vous pouvez demander la correction de données inexactes ou incomplètes</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Droit à l'effacement</td><td className="px-4 py-2.5 text-gray-600">Vous pouvez demander la suppression de vos données (droit à l'oubli), sauf si nous avons une obligation légale de les conserver</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Droit à la limitation</td><td className="px-4 py-2.5 text-gray-600">Vous pouvez demander une restriction du traitement de vos données dans certaines circonstances</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Droit à la portabilité</td><td className="px-4 py-2.5 text-gray-600">Vous pouvez demander la transmission de vos données dans un format structuré et exploitable</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Droit d'opposition</td><td className="px-4 py-2.5 text-gray-600">Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Décision automatisée</td><td className="px-4 py-2.5 text-gray-600">Vous avez le droit de ne pas être soumis à une décision basée uniquement sur un traitement automatisé</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Pour exercer l'un de ces droits, contactez-nous à <a href={`mailto:${BUSINESS.email}`} className="text-primary-500 hover:text-primary-600">{BUSINESS.email}</a> ou par courrier à l'adresse mentionnée ci-dessus. Nous traiterons votre demande dans les 30 jours suivant sa réception.
          </p>

          {/* 9. Cookies */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">9. Cookies et technologies de suivi</h2>
          <p className="text-gray-600 mb-3">
            Le site artisanpeintre-fenouillet.fr est un site statique qui n'utilise pas de cookies de suivi ou de profilage. Cependant, veuillez noter :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Google Fonts</td><td className="px-4 py-2.5 text-gray-600">Notre site utilise les polices de caractères Google Fonts, un service externe. Google peut collecter certaines données techniques lors du chargement de ces polices</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Cookies analytiques</td><td className="px-4 py-2.5 text-gray-600">Nous n'utilisons pas Google Analytics ou d'autres outils de suivi d'audience qui installent des cookies</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Cookies de publicité</td><td className="px-4 py-2.5 text-gray-600">Aucun cookie publicitaire n'est utilisé</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Votre navigateur peut installer des cookies de session (cookies de fonctionnement), mais ceux-ci ne sont pas contrôlés par VG Peintures et Rénovations et ne collectent pas vos données personnelles. Vous pouvez configurer votre navigateur pour refuser les cookies si vous le souhaitez.
          </p>

          {/* 10. Sécurité */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">10. Sécurité et protection des données</h2>
          <p className="text-gray-600 mb-3">
            VG Peintures et Rénovations met en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">Chiffrement HTTPS</td><td className="px-4 py-2.5 text-gray-600">Notre site utilise le protocole HTTPS pour chiffrer les données en transit</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Accès restreint</td><td className="px-4 py-2.5 text-gray-600">Seules les personnes autorisées ont accès à vos données personnelles</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Hébergement sécurisé</td><td className="px-4 py-2.5 text-gray-600">Nos données sont hébergées sur des serveurs sécurisés avec des mesures de protection appropriées</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Mises à jour régulières</td><td className="px-4 py-2.5 text-gray-600">Nous maintenons à jour nos systèmes pour prévenir les vulnérabilités de sécurité</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8">
            Bien que nous prenions des mesures raisonnables pour protéger vos données, aucun système n'est totalement invulnérable. Si vous découvrez une faille de sécurité, veuillez nous en informer immédiatement à <a href={`mailto:${BUSINESS.email}`} className="text-primary-500 hover:text-primary-600">{BUSINESS.email}</a>.
          </p>

          {/* 11. Modifications */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">11. Modifications de cette politique</h2>
          <p className="text-gray-600 mb-3">
            VG Peintures et Rénovations se réserve le droit de modifier cette politique de confidentialité à tout moment, notamment pour se conformer à une évolution réglementaire ou technique. Les modifications seront effectives dès leur publication sur ce site.
          </p>
          <p className="text-gray-600 mb-8">
            Nous vous recommandons de consulter régulièrement cette page pour rester informé de nos pratiques en matière de confidentialité. Si des modifications substantielles sont apportées qui affectent le traitement de vos données, nous vous en informerons par e-mail ou par une notification claire sur notre site.
          </p>

          {/* 12. Contact */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">12. Nous contacter — Exercer vos droits</h2>
          <p className="text-gray-600 mb-3">
            Pour toute question concernant cette politique de confidentialité, pour signaler une préoccupation en matière de sécurité des données, ou pour exercer l'un de vos droits en vertu du RGPD, vous pouvez nous contacter :
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700 w-56">E-mail</td><td className="px-4 py-2.5 text-gray-600"><a href={`mailto:${BUSINESS.email}`} className="text-primary-500 hover:text-primary-600">{BUSINESS.email}</a></td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-gray-700">Téléphone</td><td className="px-4 py-2.5 text-gray-600">{BUSINESS.phone}</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-2.5 font-medium text-gray-700">Courrier</td><td className="px-4 py-2.5 text-gray-600">VG Peintures et Rénovations — {BUSINESS.address.full}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-3">
            Nous traiterons votre demande dans les 30 jours suivant sa réception.
          </p>
          <p className="text-gray-600">
            Si vous considérez que nous ne respectons pas votre droit à la protection des données, vous avez également le droit de déposer une plainte auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) à <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600">www.cnil.fr</a>.
          </p>

        </div>
      </section>
    </>
  );
}
