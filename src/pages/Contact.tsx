import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { BUSINESS } from '../data/business';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import mascotte from '../assets/mascotte-peintre.jpg';

export default function Contact() {
  return (
    <>
      <SEOHead
        title={`Contactez votre Peintre en Bâtiment à ${BUSINESS.address.city} (31) | Devis Gratuit`}
        description={`Demandez un devis gratuit à votre artisan peintre à ${BUSINESS.address.city}. Réponse sous 48h. Formulaire en ligne ou appel direct au ${BUSINESS.phone}. Intervention en Haute-Garonne.`}
        canonical="/contact"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Contactez votre artisan peintre à {BUSINESS.address.city}</h1>
              <p className="text-primary-100 max-w-2xl text-lg">
                Besoin d'un {BUSINESS.trade} à {BUSINESS.address.city} ? Appelez-nous ou remplissez le formulaire pour obtenir un devis gratuit.
              </p>
              <div className="mt-8">
                <a href={BUSINESS.phoneTel} className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-lg">
                  <Phone className="w-5 h-5" />
                  Appeler : {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="hidden lg:block shrink-0">
              <img
                src={mascotte}
                alt={`Mascotte ${BUSINESS.trade}`}
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
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Demande de devis gratuit</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
                <div className="space-y-5">
                  <a
                    href={BUSINESS.phoneTel}
                    className="flex items-center gap-4 bg-accent-50 rounded-xl p-5 border border-accent-200 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent-600 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Téléphone</p>
                      <p className="text-xl font-bold text-accent-600">{BUSINESS.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Adresse</p>
                      <p className="font-semibold text-gray-900">{BUSINESS.address.street}</p>
                      <p className="text-gray-600">{BUSINESS.address.postalCode} {BUSINESS.address.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Horaires</p>
                      <p className="font-medium text-gray-900">{BUSINESS.hours.weekdays}</p>
                      <p className="text-gray-600">{BUSINESS.hours.sunday}</p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{BUSINESS.email}</p>
                      <p className="text-gray-600">Réponse sous 24h</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nous trouver</h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            <GoogleMap query={BUSINESS.mapQuery} height="400px" />
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            {BUSINESS.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
