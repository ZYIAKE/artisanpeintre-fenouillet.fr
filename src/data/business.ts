export const BUSINESS = {
  // --- Identité ---
  name: 'VG Peintures et Rénovations',
  legalName: 'VG Peintures et Rénovations',
  siret: '89403726600034',
  siren: '894037266',
  tva: 'FR21894037266',
  founderName: 'Vincent George',
  foundingYear: 2021,
  projectsDone: 100,
  phone: '05 17 94 83 78',
  phoneE164: '+33517948378',
  phoneTel: 'tel:0517948378',
  email: 'contact@artisanpeintre-fenouillet.fr',
  address: {
    street: '8 Rue des Mariniers',
    postalCode: '31150',
    city: 'Fenouillet',
    region: 'Occitanie',
    department: 'Haute-Garonne',
    country: 'FR',
    full: '8 Rue des Mariniers, 31150 Fenouillet',
  },
  mapQuery: 'VG+Peintures+et+Rénovations,+Fenouillet',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d1.3973336!3d43.6860663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb3168734eef%3A0x90e13e15f7fdb70e!2sVG+Peintures+et+R%C3%A9novations!5e0!3m2!1sfr!2sfr',
  hours: {
    weekdays: 'Lundi - Samedi : 8h00 - 19h00',
    saturday: '',
    sunday: 'Dimanche : Fermé',
  },
  domain: 'https://artisanpeintre-fenouillet.fr',
  radius: '20 km',

  // --- Métier ---
  trade: 'peintre',
  tradeName: 'Artisan Peintre',
  tradeDomain: 'peinture en bâtiment',
  schemaType: 'HousePainter' as string,

  // --- Textes hero / CTA ---
  heroTagline: 'Peintre en bâtiment à Fenouillet et environs',
  heroDescription: "Peinture intérieure, peinture extérieure, ravalement de façade, pose de papier peint. Votre artisan peintre de confiance intervient à Fenouillet et dans un rayon de 20 km en Haute-Garonne. Devis gratuit et sans engagement.",
  ctaTitle: "Besoin d'un peintre en bâtiment ?",
  ctaSubtitle: 'Travaux de peinture à Fenouillet et dans toute la métropole toulousaine. Devis gratuit et sans engagement.',
  footerDescription: 'Votre artisan peintre de confiance à Fenouillet et ses environs. Peinture intérieure, extérieure, ravalement de façade et finitions soignées.',

  // --- Options du formulaire de contact ---
  contactFormServices: [
    { value: 'peinture-interieure', label: 'Peinture intérieure' },
    { value: 'peinture-exterieure', label: 'Peinture extérieure' },
    { value: 'ravalement-facade', label: 'Ravalement de façade' },
    { value: 'papier-peint', label: 'Papier peint / Revêtements muraux' },
    { value: 'enduit-preparation', label: 'Enduit et préparation de surfaces' },
    { value: 'peinture-decorative', label: 'Peinture décorative' },
    { value: 'autre', label: 'Autre' },
  ],

  // --- FAQs page d'accueil ---
  homeFaqs: [
    {
      question: 'Quel est le délai pour commencer des travaux de peinture à Fenouillet ?',
      answer: "En général, nous pouvons intervenir sous 5 à 10 jours après acceptation du devis, selon notre planning. Pour les petits chantiers (une pièce), le délai peut être plus court. Nous vous communiquons une date de début précise dès la validation du devis.",
    },
    {
      question: 'Vos devis sont-ils gratuits ?',
      answer: "Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous nous déplaçons à votre domicile pour évaluer les surfaces, discuter de vos souhaits (couleurs, finitions) et vous remettre un devis détaillé poste par poste.",
    },
    {
      question: 'Quelles peintures utilisez-vous ?',
      answer: "Nous travaillons avec des peintures professionnelles de grandes marques (Tollens, Sikkens, Zolpan). Nous privilégions les peintures à faible émission de COV pour préserver la qualité de l'air intérieur. Le choix de la peinture est adapté à chaque support et chaque pièce.",
    },
    {
      question: 'Quelles communes desservez-vous autour de Fenouillet ?',
      answer: "Nous intervenons dans un rayon de 20 km autour de Fenouillet, couvrant une vingtaine de communes de la Haute-Garonne : Aucamville, Fonbeauzard, Gagnac-sur-Garonne, Saint-Alban, Launaguet, Castelginest, Beauzelle, Gratentour, Seilh, Bruguières, Blagnac, Toulouse, Aussonne, L'Union, Cornebarrieu, Colomiers, Balma, Tournefeuille, Saint-Orens-de-Gameville et Cugnaux.",
    },
    {
      question: 'Prenez-vous en charge la préparation des murs ?',
      answer: "Oui, la préparation des supports est une étape essentielle que nous réalisons systématiquement : lessivage, ponçage, rebouchage des fissures, application d'enduit si nécessaire. Un bon résultat de peinture repose avant tout sur une préparation soignée.",
    },
  ],

  // --- FAQs page services hub ---
  servicesHubFaqs: [
    {
      question: 'Quels services de peinture proposez-vous à Fenouillet ?',
      answer: "Nous proposons la peinture intérieure (murs, plafonds, boiseries), la peinture extérieure (façades, volets, portails), le ravalement de façade, la pose de papier peint et revêtements muraux, les travaux d'enduit et préparation de surfaces, ainsi que la peinture décorative (effets, stuc, patine).",
    },
    {
      question: 'Intervenez-vous chez les particuliers et les professionnels ?',
      answer: "Oui, nous travaillons aussi bien pour les particuliers (maisons, appartements) que pour les professionnels (bureaux, commerces, locaux). Nous adaptons notre planning pour minimiser la gêne occasionnée par les travaux.",
    },
    {
      question: 'Comment obtenir un devis pour des travaux de peinture ?',
      answer: "Appelez-nous au 05 17 94 83 78 ou utilisez notre formulaire de contact. Nous nous déplaçons gratuitement pour évaluer vos besoins, prendre les mesures et vous remettre un devis détaillé sous 48 heures.",
    },
  ],

  // --- FAQs page zones hub ---
  zonesHubFaqs: [
    {
      question: "Quelle est votre zone d'intervention autour de Fenouillet ?",
      answer: "Nous intervenons dans un rayon de 20 km autour de Fenouillet, couvrant une vingtaine de communes de la Haute-Garonne : Aucamville, Fonbeauzard, Gagnac-sur-Garonne, Saint-Alban, Launaguet, Castelginest, Beauzelle, Gratentour, Seilh, Bruguières, Blagnac, Toulouse, Aussonne, L'Union, Cornebarrieu, Colomiers, Balma, Tournefeuille, Saint-Orens-de-Gameville et Cugnaux.",
    },
    {
      question: "Y a-t-il un supplément pour le déplacement ?",
      answer: "Non, le déplacement est inclus dans nos tarifs pour toutes les communes situées dans notre zone d'intervention de 20 km autour de Fenouillet. Aucun frais supplémentaire ne sera ajouté à votre devis.",
    },
    {
      question: 'Intervenez-vous dans des communes non listées ?',
      answer: "Si votre commune se situe dans un rayon de 20 km autour de Fenouillet, contactez-nous au 05 17 94 83 78. Nous étudierons votre demande et pourrons très probablement intervenir.",
    },
  ],

  // --- Textes page À Propos ---
  aboutHeroText: "Un savoir-faire artisanal en peinture et rénovation, au service des habitants de Fenouillet et de la Haute-Garonne.",
  aboutSections: {
    // Section 1 : Le métier (contenu SEO stable)
    tradeTitle: 'Le métier d\'artisan peintre en bâtiment',
    tradeParagraphs: [
      "Le métier d'artisan peintre en bâtiment va bien au-delà de la simple application de peinture. C'est un travail de précision qui exige une connaissance approfondie des supports (plâtre, béton, bois, métal), des produits (peintures acryliques, glycéro, enduits, lasures) et des techniques d'application adaptées à chaque situation.",
      "De la préparation minutieuse des surfaces — ponçage, rebouchage, enduit de lissage, sous-couche — jusqu'aux finitions soignées, chaque étape est essentielle pour garantir un résultat durable et esthétique. Un travail de peinture réussi, c'est avant tout une préparation irréprochable.",
      "Que ce soit pour des travaux de peinture intérieure (murs, plafonds, boiseries), de peinture extérieure (façades, volets, portails), de ravalement de façade, de pose de papier peint ou de peinture décorative, faire appel à un artisan qualifié, c'est l'assurance d'un chantier maîtrisé de A à Z.",
    ],
    // Section 2 : Zone d'intervention (contenu SEO stable)
    zoneTitle: 'Intervention à Fenouillet et dans un rayon de 20 km',
    zoneParagraphs: [
      "Basés à Fenouillet, nous connaissons parfaitement le parc immobilier local : maisons des années 60-80 nécessitant une rénovation, constructions récentes, appartements en copropriété. Cette connaissance du terrain nous permet d'anticiper les contraintes propres à chaque type de bâti.",
      "Nous intervenons dans toutes les communes situées dans un rayon de 20 km autour de Fenouillet : Aucamville, Fonbeauzard, Gagnac-sur-Garonne, Saint-Alban, Launaguet, Castelginest, Beauzelle, Gratentour, Seilh, Bruguières, Blagnac, Toulouse, Aussonne, L'Union, Cornebarrieu, Colomiers, Balma, Tournefeuille, Saint-Orens-de-Gameville et Cugnaux. Le déplacement est inclus dans nos tarifs, sans surcoût.",
    ],
    engagements: [
      {
        title: 'Finitions soignées',
        desc: "Nous accordons une attention particulière aux finitions : angles nets, découpes précises, surfaces uniformes. Le résultat final doit être impeccable à vos yeux.",
      },
      {
        title: 'Transparence',
        desc: "Devis gratuit et détaillé avant toute intervention. Le prix annoncé est le prix final, sans frais cachés ni mauvaise surprise. Chaque poste est clairement identifié.",
      },
      {
        title: 'Propreté du chantier',
        desc: "Nous protégeons vos sols et meubles avec des bâches avant de commencer. Chaque soir, le chantier est rangé et nettoyé. À la fin des travaux, vous retrouvez votre intérieur propre.",
      },
      {
        title: 'Garantie',
        desc: "Assurance responsabilité civile professionnelle et garantie décennale. Nos travaux sont couverts et nous utilisons des peintures professionnelles pour un résultat durable.",
      },
    ],
    workSteps: [
      { step: '1', title: 'Prise de contact', desc: "Vous nous appelez ou remplissez notre formulaire. Nous convenons d'un rendez-vous pour visiter le chantier." },
      { step: '2', title: 'Visite et devis', desc: "Nous évaluons les surfaces, discutons de vos envies (couleurs, finitions) et vous remettons un devis détaillé sous 48h." },
      { step: '3', title: 'Réalisation des travaux', desc: "Après votre accord, nous préparons soigneusement les supports puis appliquons les peintures ou revêtements choisis." },
      { step: '4', title: 'Réception du chantier', desc: "Nous faisons le tour du chantier ensemble, vérifions chaque détail et nettoyons intégralement la zone de travail." },
    ],
    distinguishing: ['Devis gratuit & sans engagement', 'Finitions impeccables', 'Assurance RC Pro & décennale', 'Tarifs transparents', 'Chantier propre au quotidien', 'Peintures professionnelles'],
  },

  // --- Bloc professionnel (seul bloc à modifier si changement de client) ---
  aboutPro: {
    name: 'VG Peintures et Rénovations',
    address: '8 Rue des Mariniers, 31150 Fenouillet',
    founded: '2021',
    experience: '25 ans',
    paragraphs: [
      "Basée à Fenouillet, VG Peintures et Rénovations est une entreprise artisanale spécialisée dans les travaux de peinture intérieure et la rénovation. Fondée en 2021, elle repose sur l'expertise et le professionnalisme d'un artisan passionné, qui met son savoir-faire au service de chaque projet.",
      "Avec plus de 25 ans d'expérience, VG Peintures et Rénovations garantit un travail soigné, réalisé avec des matériaux de qualité et une attention particulière aux détails. Travaillant exclusivement avec des artisans qualifiés, l'entreprise assure des prestations à la hauteur de vos attentes, en alliant technique, précision et sens du conseil.",
    ],
  },
};

export const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': BUSINESS.schemaType,
  '@id': BUSINESS.domain + '/#business',
  name: BUSINESS.name,
  description: BUSINESS.footerDescription,
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  url: BUSINESS.domain,
  logo: BUSINESS.domain + '/favicon.jpg',
  image: BUSINESS.domain + '/og-image.jpg',
  foundingDate: String(BUSINESS.foundingYear),
  founder: {
    '@type': 'Person',
    name: BUSINESS.founderName,
  },
  taxID: BUSINESS.siret,
  vatID: BUSINESS.tva,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    postalCode: BUSINESS.address.postalCode,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6772,
    longitude: 1.3939,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.6772,
      longitude: 1.3939,
    },
    geoRadius: '20000',
  },
  hasMap: 'https://www.google.com/maps/place/VG+Peintures+et+R%C3%A9novations',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phoneE164,
    contactType: 'customer service',
    availableLanguage: 'French',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de peinture',
    itemListElement: BUSINESS.contactFormServices
      .filter(s => s.value !== 'autre')
      .map(s => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.label,
          url: BUSINESS.domain + '/services/' + s.value,
        },
      })),
  },
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Especes, Cheque, Virement, Carte bancaire',
  sameAs: [],
  priceRange: '$$',
};
