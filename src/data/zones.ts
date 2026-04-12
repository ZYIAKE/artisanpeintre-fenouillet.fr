export interface ZoneSection {
  heading: string;
  paragraphs: string[];
}

export interface ZoneData {
  slug: string;
  name: string;
  distance: string;
  travelTime: string;
  mapQuery: string;
  nearbyZones: string[];
  intro: string;
  specificInfo: string;
  paragraphs: string[];
  sections: ZoneSection[];
  faqs: { question: string; answer: string }[];
}

export const zones: ZoneData[] = [
  {
    slug: 'aucamville',
    name: 'Aucamville',
    distance: '2 km',
    travelTime: '4 minutes',
    mapQuery: 'Aucamville+31140+Haute-Garonne+France',
    nearbyZones: ['fonbeauzard', 'saint-alban', 'launaguet', 'castelginest'],
    intro: "Commune limitrophe de Fenouillet, Aucamville compte environ 8 500 habitants et mêle quartiers pavillonnaires, résidences collectives et zones d'activité. Les besoins en peinture y sont variés : rénovation d'appartements, rafraîchissement de maisons individuelles et entretien de locaux professionnels.",
    specificInfo: "Les lotissements résidentiels d'Aucamville, développés depuis les années 1990, présentent souvent des façades en enduit monocouche qui commencent à montrer des signes de vieillissement après 20 à 25 ans. Dans le centre historique, les maisons toulousaines en brique nécessitent des travaux de peinture adaptés à ce support traditionnel.",
    paragraphs: [
      "À seulement 4 minutes de notre atelier, Aucamville est la commune où nous intervenons le plus fréquemment après Fenouillet. Nous connaissons bien les résidences du quartier de la Maourine, les pavillons du secteur du Moulin et les immeubles du centre-ville.",
      "Les propriétaires d'Aucamville font régulièrement appel à nos services pour des travaux de peinture intérieure lors de la revente de leur bien ou pour moderniser leur décoration. Nous réalisons également de nombreux ravalements de façade dans les lotissements où les enduits d'origine commencent à s'écailler.",
    ],
    sections: [
      {
        heading: 'Rénover les intérieurs variés d\'Aucamville',
        paragraphs: [
          "Le parc immobilier d'Aucamville mêle appartements en résidence collective et maisons individuelles, chacun avec ses spécificités techniques. Les appartements du quartier de la Maourine, construits dans les années 2000, présentent des cloisons en plaques de plâtre qui nécessitent un traitement soigné des bandes à joints avant toute mise en peinture. Les maisons plus anciennes du centre, souvent dotées de murs en brique enduite, demandent un diagnostic préalable pour identifier les éventuels problèmes d'humidité ou de fissuration.",
          "Nous adaptons systématiquement notre approche au type de logement. Dans les appartements, nous veillons à protéger les sols et les parties communes de l'immeuble, en utilisant des peintures à faible odeur pour le confort des voisins. Dans les maisons individuelles, nous pouvons traiter simultanément plusieurs pièces pour optimiser la durée du chantier et limiter la gêne pour votre famille.",
        ],
      },
      {
        heading: 'Façades et ravalements à Aucamville : les enjeux du bâti local',
        paragraphs: [
          "Les façades des lotissements d'Aucamville, édifiées principalement dans les années 1990-2000, arrivent à un âge critique. Après 20 à 25 ans, les enduits monocouche présentent des signes caractéristiques de vieillissement : micro-fissures en toile d'araignée, farinage de la surface, développement de mousses et de lichens sur les faces nord. Un ravalement réalisé à ce stade est nettement plus économique qu'une réfection reportée de plusieurs années, lorsque les dégâts deviennent structurels.",
          "Dans le centre historique d'Aucamville, les maisons en brique toulousaine requièrent une approche différente. Selon l'état de la brique et les souhaits du propriétaire, nous proposons soit un nettoyage doux suivi d'un traitement hydrofuge pour conserver l'aspect brique apparente, soit l'application d'un badigeon à la chaux qui protège la brique tout en lui donnant un aspect authentique et respirant.",
        ],
      },
      {
        heading: 'Un artisan peintre de proximité pour Aucamville',
        paragraphs: [
          "Notre atelier de Fenouillet se situe à moins de 2 km du centre d'Aucamville. Cette proximité immédiate nous permet d'être sur place en quelques minutes, que ce soit pour un premier rendez-vous d'évaluation, pour livrer du matériel supplémentaire en cours de chantier ou pour effectuer une retouche après les travaux. C'est un avantage concret que ne peut offrir un peintre éloigné.",
          "Cette relation de voisinage nous a permis de construire une clientèle fidèle à Aucamville. De nombreux chantiers nous parviennent par recommandation : un voisin satisfait qui parle de notre travail, un gardien d'immeuble qui nous recontacte pour un autre appartement. Cette confiance est notre meilleure publicité et nous motive à maintenir un niveau d'exigence élevé sur chaque chantier.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel est le délai pour des travaux de peinture à Aucamville ?',
        answer: "Étant basés à Fenouillet, à 2 km d'Aucamville, nous pouvons généralement commencer les travaux sous 5 à 10 jours après acceptation du devis. Pour les petits chantiers, le délai peut être plus court.",
      },
      {
        question: 'Intervenez-vous dans les copropriétés d\'Aucamville ?',
        answer: "Oui, nous intervenons dans les copropriétés pour la peinture des parties privatives (appartements). Pour les parties communes (cages d'escalier, halls), nous travaillons sur devis auprès du syndic de copropriété.",
      },
      {
        question: 'Quel budget prévoir pour repeindre un appartement à Aucamville ?',
        answer: "Pour un T3 de 65 m² avec murs en bon état, comptez entre 1 800 et 2 500 € pour un rafraîchissement complet (murs et plafonds). Si les murs nécessitent une préparation importante (enduit, rebouchage), le budget se situe plutôt entre 3 000 et 4 500 €. Le devis est gratuit et détaillé.",
      },
      {
        question: 'Peignez-vous les garages et sous-sols à Aucamville ?',
        answer: "Oui, nous réalisons la peinture de garages, sous-sols et caves avec des peintures techniques résistantes à l'humidité et aux chocs. Un traitement anti-humidité peut être appliqué en amont si nécessaire. Ces espaces souvent négligés gagnent beaucoup en luminosité et en propreté avec une peinture claire.",
      },
    ],
  },
  {
    slug: 'fonbeauzard',
    name: 'Fonbeauzard',
    distance: '2 km',
    travelTime: '4 minutes',
    mapQuery: 'Fonbeauzard+31140+Haute-Garonne+France',
    nearbyZones: ['aucamville', 'gagnac-sur-garonne', 'beauzelle', 'castelginest'],
    intro: "Petite commune résidentielle de près de 4 000 habitants, Fonbeauzard offre un cadre de vie calme aux portes de Toulouse. Son parc immobilier est principalement composé de maisons individuelles avec jardins, générant des besoins réguliers en peinture intérieure et extérieure.",
    specificInfo: "Le caractère résidentiel de Fonbeauzard se traduit par une prédominance de maisons individuelles construites entre les années 1970 et 2010. Les plus anciennes nécessitent souvent un ravalement de façade complet, tandis que les plus récentes demandent principalement des travaux de peinture intérieure pour rafraîchir ou personnaliser la décoration.",
    paragraphs: [
      "Fonbeauzard est l'une des communes les plus proches de notre atelier. En 4 minutes, nous sommes sur place pour évaluer vos besoins et réaliser vos travaux de peinture. Cette proximité nous permet d'optimiser nos déplacements et de vous proposer des tarifs compétitifs.",
      "Les habitants de Fonbeauzard nous sollicitent régulièrement pour la peinture de leurs façades, la remise en état de volets en bois et la rénovation de leurs intérieurs. Nous intervenons aussi sur les clôtures et portails métalliques qui embellissent les propriétés de la commune.",
    ],
    sections: [
      {
        heading: 'Peinture intérieure à Fonbeauzard : personnaliser votre maison',
        paragraphs: [
          "Les maisons individuelles de Fonbeauzard offrent de beaux volumes à mettre en valeur. Séjours ouverts sur la cuisine, chambres spacieuses, pièces de vie lumineuses : chaque espace mérite une attention particulière dans le choix des couleurs et des finitions. Nous vous guidons dans la sélection des teintes en tenant compte de l'orientation de chaque pièce, de la luminosité naturelle et de votre mobilier existant.",
          "Les maisons construites dans les années 1970-1980 à Fonbeauzard présentent souvent des revêtements datés : papier peint à motifs, crépi intérieur, lambris. Nous réalisons la dépose complète de ces anciens revêtements, remettons les murs en état avec un enduit de lissage soigné, puis appliquons une peinture contemporaine qui transforme radicalement l'ambiance de votre intérieur.",
        ],
      },
      {
        heading: 'Entretien des extérieurs à Fonbeauzard : volets, façades et clôtures',
        paragraphs: [
          "Le cadre résidentiel de Fonbeauzard se caractérise par des maisons avec jardins, des volets en bois ou en aluminium, des portails et des clôtures qui participent à l'esthétique de la commune. L'entretien régulier de ces éléments extérieurs est essentiel pour préserver l'apparence et la valeur de votre propriété. Nous proposons un service complet qui couvre tous les éléments extérieurs en une seule intervention.",
          "Les volets en bois, très répandus à Fonbeauzard, nécessitent un entretien régulier tous les 5 à 8 ans. Nous les ponçons, traitons le bois si nécessaire, puis appliquons une lasure ou une peinture microporeuse qui protège durablement contre les UV et l'humidité. Pour les portails et clôtures métalliques, nous réalisons un traitement antirouille suivi d'une peinture de finition résistante aux intempéries.",
        ],
      },
      {
        heading: 'Fonbeauzard : une commune résidentielle que nous connaissons bien',
        paragraphs: [
          "Fonbeauzard fait partie des communes limitrophes de Fenouillet où nous intervenons le plus souvent. En 4 minutes de trajet, nous sommes sur place, ce qui nous permet de planifier les chantiers avec une grande souplesse. Cette proximité est un avantage concret : en cas d'imprévu sur le chantier (couche supplémentaire nécessaire, produit manquant), nous pouvons nous réapprovisionner rapidement sans perte de temps.",
          "Le caractère calme et résidentiel de Fonbeauzard nous permet de travailler dans des conditions optimales. Les chantiers se déroulent sans les contraintes de stationnement ou d'accès que l'on rencontre en milieu urbain dense. Cela se traduit par une plus grande efficacité et, in fine, par des tarifs compétitifs pour les habitants de la commune.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peignez-vous les volets en bois à Fonbeauzard ?',
        answer: "Oui, nous réalisons la peinture et la lasure de volets en bois. Nous commençons par poncer et traiter le bois (fongicide, insecticide si nécessaire), puis appliquons une peinture microporeuse ou une lasure qui protège le bois tout en le laissant respirer.",
      },
      {
        question: 'Quel budget prévoir pour repeindre l\'intérieur d\'une maison à Fonbeauzard ?',
        answer: "Le budget dépend de la surface et de l'état des murs. Pour une maison de 100 m² habitables (murs et plafonds en état correct), comptez entre 3 000 et 5 000 €. Un devis gratuit sur place vous donnera un montant précis adapté à votre logement.",
      },
      {
        question: 'Peut-on enlever du crépi intérieur dans une maison à Fonbeauzard ?',
        answer: "Oui, nous réalisons le décapage ou le recouvrement de crépi intérieur. Selon l'épaisseur et le type de crépi, nous utilisons le ponçage mécanique ou l'application d'un enduit de lissage épais. Le résultat est un mur parfaitement lisse, prêt à recevoir la peinture de votre choix.",
      },
      {
        question: 'Intervenez-vous le samedi à Fonbeauzard ?',
        answer: "Oui, nous travaillons du lundi au samedi inclus, de 8h à 20h. Le samedi est souvent un créneau apprécié par les propriétaires qui souhaitent être présents lors du démarrage ou de la réception du chantier.",
      },
    ],
  },
  {
    slug: 'gagnac-sur-garonne',
    name: 'Gagnac-sur-Garonne',
    distance: '3 km',
    travelTime: '6 minutes',
    mapQuery: 'Gagnac-sur-Garonne+31150+Haute-Garonne+France',
    nearbyZones: ['fonbeauzard', 'beauzelle', 'seilh', 'aussonne'],
    intro: "Gagnac-sur-Garonne, charmante commune de plus de 3 500 habitants, est située sur la rive gauche de la Garonne au nord-ouest de Toulouse. Son cadre verdoyant et ses constructions récentes en font un secteur dynamique en matière de rénovation et de décoration.",
    specificInfo: "Le patrimoine bâti de Gagnac-sur-Garonne est varié : anciennes bâtisses en brique du village historique, pavillons des années 80-90 et maisons contemporaines dans les lotissements récents. Les bords de Garonne ajoutent une contrainte d'humidité qui nécessite des peintures extérieures adaptées et un traitement anti-mousse régulier des façades.",
    paragraphs: [
      "À 6 minutes de Fenouillet, Gagnac-sur-Garonne fait partie de notre zone d'intervention immédiate. Nous connaissons bien les quartiers résidentiels de la commune et les spécificités des habitations proches de la Garonne, qui peuvent présenter des problèmes d'humidité sur les façades.",
      "Les propriétaires gagnacais apprécient notre réactivité et notre connaissance du secteur. Nous réalisons autant des travaux de peinture intérieure dans les maisons du lotissement de la Ramée que des ravalements de façade sur les maisons plus anciennes du cœur de village.",
    ],
    sections: [
      {
        heading: 'Peinture intérieure à Gagnac-sur-Garonne : du village aux lotissements',
        paragraphs: [
          "Le village historique de Gagnac-sur-Garonne abrite des maisons anciennes en brique et pierre dont les intérieurs conservent un caractère authentique. Poutres apparentes, murs épais en brique, cheminées d'époque : ces éléments demandent une approche respectueuse lors des travaux de peinture. Nous utilisons des enduits à la chaux et des peintures minérales qui laissent respirer ces murs anciens tout en les protégeant durablement.",
          "Dans les lotissements plus récents de Gagnac, comme le secteur de la Ramée, les besoins sont différents. Les maisons construites après 2000 disposent de cloisons modernes en plaques de plâtre et d'enduits lisses. Les propriétaires souhaitent généralement apporter de la couleur et de la personnalité à des intérieurs livrés en blanc standard. Nous les accompagnons dans le choix des teintes et réalisons des mises en couleur harmonieuses pièce par pièce.",
        ],
      },
      {
        heading: 'Façades en bord de Garonne : des contraintes spécifiques à Gagnac',
        paragraphs: [
          "La proximité de la Garonne confère à Gagnac-sur-Garonne un charme indéniable, mais elle impose aussi des contraintes techniques pour les travaux de peinture extérieure. L'humidité ambiante favorise le développement de mousses, d'algues et de lichens sur les façades, en particulier sur les faces nord et les murs ombragés. Un traitement anti-mousse en profondeur est indispensable avant toute mise en peinture pour garantir l'adhérence et la durabilité du revêtement.",
          "Nous sélectionnons pour les habitations de Gagnac des peintures de façade spécialement formulées pour les environnements humides : peintures siloxanes qui repoussent l'eau tout en laissant le mur respirer, traitements hydrofuges invisibles pour les façades en pierre ou en brique apparente. Cette expertise technique garantit un résultat esthétique qui résiste dans le temps malgré les conditions particulières du secteur.",
        ],
      },
      {
        heading: 'Notre expertise locale au service des Gagnacais',
        paragraphs: [
          "Installés à Fenouillet, à seulement 6 minutes de Gagnac-sur-Garonne, nous avons développé une connaissance fine du bâti local. Nous savons que les maisons du cœur de village ont des murs porteurs épais en brique qui régulent naturellement l'humidité, tandis que les constructions récentes en périphérie utilisent des techniques modernes qui appellent des produits différents.",
          "Cette connaissance terrain est un atout précieux pour les propriétaires gagnacais. Lorsque nous réalisons un devis, nous identifions immédiatement les points d'attention spécifiques à votre maison : traces d'humidité liées à la proximité de la Garonne, fissures dues aux mouvements de terrain argileux, écaillage d'un enduit monocouche vieillissant. Ce diagnostic précis nous permet de vous proposer des solutions durables et adaptées.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Les maisons proches de la Garonne nécessitent-elles une peinture spéciale ?',
        answer: "Oui, les habitations proches de la Garonne sont davantage exposées à l'humidité. Nous utilisons des peintures microporeuses et des traitements anti-mousse adaptés. Un diagnostic de la façade nous permet de détecter d'éventuels problèmes d'humidité avant d'appliquer la peinture.",
      },
      {
        question: 'Intervenez-vous rapidement à Gagnac-sur-Garonne ?',
        answer: "Oui, Gagnac-sur-Garonne n'est qu'à 3 km de notre atelier. Nous pouvons nous déplacer très rapidement pour un devis gratuit et commencer les travaux sous quelques jours après acceptation.",
      },
      {
        question: 'Faut-il traiter les murs contre l\'humidité avant de peindre à Gagnac ?',
        answer: "Cela dépend de l'emplacement de votre maison et de l'état des murs. Lors de notre visite gratuite, nous réalisons un diagnostic humidité. Si nécessaire, nous appliquons un traitement avant la peinture : hydrofuge en extérieur, enduit anti-humidité en intérieur. Ce traitement préventif assure la pérennité de la peinture.",
      },
    ],
  },
  {
    slug: 'saint-alban',
    name: 'Saint-Alban',
    distance: '3 km',
    travelTime: '6 minutes',
    mapQuery: 'Saint-Alban+31140+Haute-Garonne+France',
    nearbyZones: ['aucamville', 'launaguet', 'castelginest', 'gratentour'],
    intro: "Saint-Alban, commune de plus de 5 500 habitants située au nord de Toulouse, est un secteur résidentiel en plein essor. Ses nombreux lotissements et ses maisons individuelles génèrent une demande constante en travaux de peinture, tant pour les constructions neuves que pour la rénovation.",
    specificInfo: "Saint-Alban a connu un fort développement immobilier ces dernières décennies. Les pavillons récents nécessitent principalement des travaux de personnalisation (choix de couleurs, peinture décorative), tandis que les constructions plus anciennes du centre-bourg demandent des travaux de rafraîchissement et de ravalement.",
    paragraphs: [
      "Nous intervenons régulièrement à Saint-Alban, à 6 minutes de notre atelier. La commune compte de nombreuses maisons individuelles dont les propriétaires souhaitent personnaliser leur intérieur ou entretenir leur façade.",
      "Les constructions neuves de Saint-Alban font souvent appel à nos services pour la mise en peinture initiale ou pour ajouter des finitions décoratives que les constructeurs ne proposent pas. Nous réalisons aussi les retouches après travaux d'installation (électricité, plomberie) dans les logements récemment livrés.",
    ],
    sections: [
      {
        heading: 'Mise en peinture et personnalisation des logements neufs à Saint-Alban',
        paragraphs: [
          "Saint-Alban accueille chaque année de nouvelles constructions, et les propriétaires qui emménagent souhaitent rapidement s'approprier leur logement. Les constructeurs livrent généralement les murs avec une sous-couche blanche uniforme qui ne reflète pas la personnalité des occupants. Notre rôle est de transformer ces intérieurs standardisés en espaces de vie chaleureux et personnalisés grâce au choix des couleurs et des finitions.",
          "Nous intervenons fréquemment dans les constructions neuves de Saint-Alban pour créer des ambiances distinctes dans chaque pièce : teintes douces et apaisantes dans les chambres, couleurs dynamiques dans les espaces de vie, finitions satinées résistantes dans les pièces humides. Nous pouvons aussi réaliser un mur d'accent en papier peint panoramique ou en peinture décorative pour donner du caractère à votre séjour.",
        ],
      },
      {
        heading: 'Ravalement et rénovation des pavillons existants à Saint-Alban',
        paragraphs: [
          "Les pavillons les plus anciens de Saint-Alban, construits dans les années 1980-1990, commencent à nécessiter des travaux de rénovation importants. Les enduits extérieurs présentent des signes de fatigue : fissures, décollement, traces de pollution. Un ravalement bien mené remet la façade à neuf pour une quinzaine d'années et contribue à maintenir la valeur de votre bien immobilier dans un marché concurrentiel.",
          "À l'intérieur, ces pavillons arborent souvent des revêtements datés — papier peint fleuri, moquette murale, peinture jaunissante — qui alourdissent l'atmosphère. Nous prenons en charge la rénovation complète : dépose des anciens revêtements, traitement des fissures et imperfections, enduit de lissage, puis application d'une peinture contemporaine qui modernise durablement votre intérieur.",
        ],
      },
      {
        heading: 'Saint-Alban : un secteur dynamique pour notre activité de peintre',
        paragraphs: [
          "L'essor démographique de Saint-Alban génère un flux constant de projets de peinture. Entre les constructions neuves à personnaliser, les rénovations de pavillons anciens et les remises en état pour la revente, notre carnet de commandes à Saint-Alban est régulièrement rempli. Cette activité soutenue nous permet de proposer des créneaux d'intervention rapides aux habitants de la commune.",
          "Notre connaissance de Saint-Alban s'est construite chantier après chantier. Nous connaissons les lotissements, les types de construction et les matériaux utilisés selon les époques. Ce savoir-faire local nous permet d'anticiper les difficultés potentielles et de vous proposer des solutions éprouvées, sans mauvaise surprise en cours de travaux.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Réalisez-vous la peinture de maisons neuves à Saint-Alban ?',
        answer: "Oui, nous intervenons régulièrement sur des constructions neuves pour la mise en peinture intérieure. Les constructeurs livrent généralement les murs avec une sous-couche blanche. Nous appliquons les couleurs et finitions de votre choix pour personnaliser votre nouveau logement.",
      },
      {
        question: 'Le devis est-il gratuit à Saint-Alban ?',
        answer: "Oui, nous nous déplaçons gratuitement à Saint-Alban (à 3 km de notre atelier) pour évaluer vos besoins et vous remettre un devis détaillé sans engagement.",
      },
      {
        question: 'Pouvez-vous intervenir après la livraison d\'un constructeur à Saint-Alban ?',
        answer: "Oui, nous intervenons fréquemment après la livraison par le constructeur pour réaliser les finitions de peinture, les retouches après passage des électriciens et plombiers, et la personnalisation des couleurs. Nous pouvons commencer dès la remise des clés.",
      },
      {
        question: 'Proposez-vous des murs d\'accent ou du papier peint à Saint-Alban ?',
        answer: "Oui, un mur d'accent en couleur contrastée ou en papier peint panoramique est une solution tendance et abordable pour donner du caractère à une pièce. Nous vous conseillons sur le mur à mettre en valeur et le revêtement le plus adapté à votre intérieur.",
      },
    ],
  },
  {
    slug: 'launaguet',
    name: 'Launaguet',
    distance: '4 km',
    travelTime: '8 minutes',
    mapQuery: 'Launaguet+31140+Haute-Garonne+France',
    nearbyZones: ['aucamville', 'saint-alban', 'castelginest', 'toulouse'],
    intro: "Launaguet, commune de plus de 8 500 habitants, est un pôle résidentiel attractif au nord de Toulouse. Ses quartiers variés — du centre historique aux lotissements récents — offrent un large éventail de besoins en travaux de peinture.",
    specificInfo: "Launaguet présente un urbanisme mixte avec un centre-bourg ancien aux maisons en brique, des quartiers pavillonnaires développés dans les années 1980-2000 et des programmes immobiliers récents. Cette diversité se traduit par des besoins variés : ravalement de bâtisses anciennes, rafraîchissement de pavillons, personnalisation de logements neufs.",
    paragraphs: [
      "Launaguet est l'une des communes les plus peuplées de notre zone d'intervention nord. À 8 minutes de notre atelier, nous y intervenons très régulièrement pour tous types de travaux de peinture, du simple rafraîchissement à la rénovation complète.",
      "Les maisons de Launaguet offrent une diversité architecturale intéressante. Nous adaptons nos techniques à chaque type de support : enduit à la chaux sur les bâtisses anciennes, peinture pliolite sur les crépis des années 80, peinture acrylique sur les enduits récents. Cette expertise locale est un atout pour un résultat durable.",
    ],
    sections: [
      {
        heading: 'Peinture des maisons en brique toulousaine à Launaguet',
        paragraphs: [
          "Le centre-bourg de Launaguet conserve de belles maisons en brique toulousaine qui font le charme de la commune. Ces bâtisses centenaires exigent un traitement spécifique : la brique est un matériau poreux qui doit pouvoir respirer. Utiliser une peinture filmogène classique sur de la brique ancienne serait une erreur technique qui provoquerait des problèmes d'humidité. Nous privilégions les badigeons à la chaux, les peintures minérales ou les traitements hydrofuges invisibles qui respectent la nature du matériau.",
          "Pour les maisons en brique déjà peintes par le passé, la situation est différente. Nous diagnostiquons l'état de la couche existante : si elle adhère bien et ne s'écaille pas, nous pouvons la rafraîchir avec une peinture microporeuse compatible. Si elle se décolle, un décapage partiel ou total sera nécessaire avant de repartir sur une base saine. Chaque cas est unique et mérite un diagnostic personnalisé.",
        ],
      },
      {
        heading: 'Ravalement de façade à Launaguet : respecter le PLU et le patrimoine',
        paragraphs: [
          "Le Plan Local d'Urbanisme de Launaguet encadre les couleurs de façade autorisées pour préserver l'harmonie visuelle de la commune. Avant tout ravalement, il est indispensable de vérifier les teintes admises auprès des services d'urbanisme. Nous accompagnons nos clients dans cette démarche administrative et leur proposons des coloris conformes au nuancier communal tout en respectant leurs préférences esthétiques.",
          "Les pavillons des années 1980-2000, très présents dans les lotissements de Launaguet, arrivent à l'âge où un ravalement devient nécessaire. Les enduits monocouche de cette époque présentent typiquement des micro-fissures et un encrassement qui ternit l'aspect de la façade. Un nettoyage haute pression suivi d'un traitement des fissures et d'une peinture de finition redonne à votre maison son éclat d'origine pour 10 à 15 ans.",
        ],
      },
      {
        heading: 'Launaguet : une diversité architecturale qui demande de l\'expertise',
        paragraphs: [
          "La richesse du parc immobilier de Launaguet — de la maison de village en brique au pavillon contemporain — exige un artisan peintre capable de s'adapter. Nous ne traitons pas de la même manière un mur en brique centenaire et une cloison en plaques de plâtre. Les produits diffèrent, les techniques d'application aussi, et la préparation du support est spécifique à chaque matériau.",
          "Cette capacité d'adaptation est le fruit de notre expérience sur des chantiers variés à Launaguet et dans les communes voisines. Nous avons traité des sous-couches sur du plâtre ancien friable, des enduits de rénovation sur de la brique fissurée, des peintures techniques sur des supports métalliques. Ce savoir-faire polyvalent nous permet de répondre à toutes les demandes des propriétaires launaguetains avec compétence et efficacité.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Pouvez-vous rénover une maison en brique à Launaguet ?',
        answer: "Oui, nous maîtrisons la peinture et la rénovation des maisons en brique toulousaine. Selon l'état de la brique, nous proposons soit un nettoyage et un traitement hydrofuge pour conserver l'aspect brique apparente, soit une peinture de façade si la brique est trop abîmée ou déjà peinte.",
      },
      {
        question: 'Quelles couleurs de façade sont autorisées à Launaguet ?',
        answer: "Les couleurs de façade sont encadrées par le PLU de Launaguet. Nous vous conseillons de consulter la mairie ou les services d'urbanisme avant de choisir votre coloris. Nous pouvons vous accompagner dans cette démarche et vous proposer des teintes conformes au nuancier communal.",
      },
      {
        question: 'Traitez-vous les murs en plâtre ancien à Launaguet ?',
        answer: "Oui, les vieilles maisons de Launaguet ont souvent des murs en plâtre ancien, parfois friable ou fissuré. Nous appliquons un fixateur de fond pour stabiliser le support, puis un enduit de rénovation adapté avant la peinture. Ce traitement assure une finition propre et durable sur ces supports délicats.",
      },
      {
        question: 'Réalisez-vous la peinture des cages d\'escalier à Launaguet ?',
        answer: "Oui, nous intervenons dans les cages d'escalier des petits immeubles et maisons de ville de Launaguet. Nous utilisons des peintures lessivables résistantes aux frottements et travaillons avec des échafaudages adaptés pour accéder aux hauteurs en toute sécurité.",
      },
    ],
  },
  {
    slug: 'castelginest',
    name: 'Castelginest',
    distance: '4 km',
    travelTime: '7 minutes',
    mapQuery: 'Castelginest+31780+Haute-Garonne+France',
    nearbyZones: ['saint-alban', 'gratentour', 'launaguet', 'bruguieres'],
    intro: "Castelginest, commune d'environ 10 000 habitants, est l'une des plus peuplées au nord de Toulouse. Son tissu urbain dense, mêlant résidences collectives et quartiers pavillonnaires, génère des besoins importants en travaux de peinture.",
    specificInfo: "Le parc immobilier de Castelginest est composé d'un centre ancien avec des maisons de ville, de vastes lotissements pavillonnaires et de résidences collectives récentes. Les copropriétés du centre représentent une part notable de nos interventions, tant pour la rénovation des parties privatives que pour les cages d'escalier et les halls.",
    paragraphs: [
      "Castelginest est une commune dynamique où nous intervenons chaque semaine. La densité de population et la variété du bâti créent une demande soutenue en travaux de peinture. Nous connaissons les quartiers de Castelginest et pouvons vous conseiller sur les meilleures solutions pour votre logement.",
      "Les syndics de copropriété de Castelginest font régulièrement appel à nos services pour l'entretien des parties communes. Nous réalisons aussi les travaux de peinture dans les appartements en location lors des changements de locataires, avec des délais courts et un résultat soigné.",
    ],
    sections: [
      {
        heading: 'Peinture d\'appartements et de copropriétés à Castelginest',
        paragraphs: [
          "Castelginest compte un nombre important de résidences collectives où la demande en travaux de peinture est constante. Les appartements en location nécessitent un rafraîchissement entre chaque locataire pour maintenir l'attractivité du bien. Nous proposons une prestation rapide et efficace pour ce type d'intervention : rebouchage des fixations, lessivage, peinture blanche professionnelle des murs et plafonds. En 2 à 3 jours, l'appartement est remis à neuf et prêt à être reloué.",
          "Pour les propriétaires occupants, nos interventions sont plus personnalisées. Nous prenons le temps de discuter des couleurs, des finitions et des éventuels aménagements décoratifs. Un appartement à Castelginest peut être transformé par un jeu de couleurs bien pensé : un mur d'accent dans le séjour, une teinte chaude dans la chambre, une peinture satinée résistante dans la cuisine et la salle de bain.",
        ],
      },
      {
        heading: 'Entretien des parties communes et halls d\'immeubles à Castelginest',
        paragraphs: [
          "Les parties communes des résidences de Castelginest — halls d'entrée, cages d'escalier, couloirs, parkings — subissent un usage intensif qui dégrade les peintures. Les traces de frottement, les éraflures de meubles lors des déménagements et l'usure naturelle imposent une réfection périodique. Nous travaillons avec les syndics de copropriété pour planifier ces interventions au moment le plus opportun, souvent pendant les périodes de vacances.",
          "Nous utilisons dans les parties communes des peintures techniques hautement résistantes : peintures lessivables et anti-traces pour les couloirs, peintures anti-graffiti dans les halls, peintures techniques pour les parkings. Le choix des couleurs est fait en concertation avec le syndic et le conseil syndical pour un résultat qui satisfasse l'ensemble des copropriétaires.",
        ],
      },
      {
        heading: 'Castelginest : une ville dense aux besoins multiples en peinture',
        paragraphs: [
          "Avec près de 10 000 habitants, Castelginest est l'une des communes les plus peuplées de la périphérie nord de Toulouse. Cette densité se traduit par un tissu urbain mixte — maisons de ville du centre, pavillons en lotissement, résidences collectives — qui génère des besoins en peinture très variés. Notre polyvalence nous permet de répondre à toutes ces demandes avec le même niveau de qualité.",
          "Nous intervenons chaque semaine à Castelginest, ce qui nous donne une excellente connaissance du terrain. Nous savons quels lotissements ont des enduits fragiles, quels immeubles ont des problèmes récurrents d'humidité en sous-sol, quelles rues sont difficiles d'accès pour les échafaudages. Cette connaissance pratique nous permet d'anticiper les contraintes et d'optimiser nos interventions.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous dans les appartements en location à Castelginest ?',
        answer: "Oui, nous intervenons fréquemment pour la remise en état de logements locatifs : rafraîchissement des murs et plafonds, rebouchage des trous de chevilles, peinture blanche standard. Nous proposons des tarifs adaptés à ce type de prestation et des délais rapides pour limiter la vacance locative.",
      },
      {
        question: 'Faites-vous les peintures de cages d\'escalier à Castelginest ?',
        answer: "Oui, nous réalisons la peinture de cages d'escalier et de parties communes pour les copropriétés. Nous intervenons en horaires décalés si nécessaire pour minimiser la gêne pour les résidents. Nous établissons un devis sur demande du syndic ou du conseil syndical.",
      },
      {
        question: 'Quel délai pour remettre en peinture un appartement locatif à Castelginest ?',
        answer: "Pour un appartement standard (T2 ou T3) en rafraîchissement blanc, comptez 2 à 3 jours ouvrés. Nous pouvons intervenir rapidement entre deux locataires pour limiter la vacance locative. Contactez-nous dès que votre locataire donne son préavis pour bloquer un créneau.",
      },
    ],
  },
  {
    slug: 'beauzelle',
    name: 'Beauzelle',
    distance: '5 km',
    travelTime: '8 minutes',
    mapQuery: 'Beauzelle+31700+Haute-Garonne+France',
    nearbyZones: ['fonbeauzard', 'gagnac-sur-garonne', 'seilh', 'blagnac'],
    intro: "Beauzelle, commune résidentielle de plus de 6 000 habitants, est appréciée pour son cadre de vie entre Garonne et campagne. Ses quartiers pavillonnaires et ses programmes immobiliers récents alimentent une demande régulière en travaux de peinture.",
    specificInfo: "Beauzelle a connu un développement rapide avec de nombreux lotissements construits depuis les années 2000. Ces maisons relativement récentes demandent principalement des travaux de personnalisation intérieure et, pour les plus anciennes, un premier ravalement de façade. La proximité de la Garonne impose des précautions particulières contre l'humidité sur les bâtiments les plus proches du fleuve.",
    paragraphs: [
      "Nous intervenons régulièrement à Beauzelle, à seulement 8 minutes de notre atelier. Les propriétaires de la commune nous sollicitent pour rafraîchir leurs intérieurs, moderniser leur décoration ou entretenir leurs façades.",
      "Les maisons récentes de Beauzelle sont souvent livrées avec des finitions standard que les propriétaires souhaitent personnaliser : choix de couleurs, peinture décorative dans le séjour, papier peint dans les chambres. Nous les accompagnons dans leur projet de décoration en proposant des solutions adaptées à leur budget.",
    ],
    sections: [
      {
        heading: 'Personnaliser votre maison récente à Beauzelle',
        paragraphs: [
          "Les constructions livrées depuis les années 2000 à Beauzelle partagent souvent un point commun : des intérieurs blancs et standardisés. La sous-couche blanche appliquée par le constructeur est fonctionnelle mais impersonnelle. Nous transformons ces espaces neutres en intérieurs chaleureux en créant des palettes de couleurs cohérentes d'une pièce à l'autre. Notre conseil colorimétrique tient compte de la luminosité naturelle de chaque pièce, de votre mobilier et du style que vous souhaitez créer.",
          "Au-delà de la couleur, nous proposons des finitions variées pour apporter du caractère : un mur en papier peint panoramique dans le séjour, une tête de lit en peinture à effet dans la chambre, une crédence en peinture satinée résistante dans la cuisine. Ces touches décoratives, abordables et faciles à réaliser, personnalisent votre maison sans engager de gros travaux.",
        ],
      },
      {
        heading: 'Premier ravalement de façade à Beauzelle : quand et comment ?',
        paragraphs: [
          "Les lotissements les plus anciens de Beauzelle, construits au début des années 2000, approchent de leur premier ravalement. Après 15 à 20 ans, les enduits monocouche montrent des signes de vieillissement : encrassement, développement de micro-organismes sur les faces nord, micro-fissures de retrait. Intervenir à ce stade est judicieux car le support est encore globalement sain et les travaux se limitent à un nettoyage, un traitement et une remise en peinture.",
          "Attendre trop longtemps expose à des réparations plus lourdes et plus coûteuses : fissures profondes nécessitant des reprises d'enduit, infiltrations d'eau derrière le revêtement, décollement de plaques entières. Nous vous recommandons de faire examiner votre façade dès l'apparition des premiers signes et de planifier un ravalement préventif qui protégera votre maison pour une nouvelle période de 10 à 15 ans.",
        ],
      },
      {
        heading: 'Beauzelle et les bords de Garonne : adapter la peinture au terrain',
        paragraphs: [
          "Les habitations de Beauzelle situées à proximité de la Garonne bénéficient d'un cadre exceptionnel, mais subissent une exposition accrue à l'humidité atmosphérique. Les façades orientées vers le fleuve verdissent plus rapidement et les murs intérieurs peuvent présenter des traces de condensation pendant l'hiver. Nous traitons ces problématiques avec des produits spécifiques : peintures siloxanes en extérieur, enduits anti-humidité et peintures anti-condensation en intérieur.",
          "Pour les propriétés éloignées de la Garonne, les contraintes sont moindres mais les sols argileux de Beauzelle peuvent provoquer des fissures de tassement sur les façades. Nous identifions ces fissures lors de notre diagnostic et les traitons avec des enduits souples et des bandes armées avant l'application de la peinture de finition.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Proposez-vous du conseil en couleurs à Beauzelle ?',
        answer: "Oui, le conseil colorimétrique fait partie de notre prestation. Lors de la visite, nous pouvons vous aider à choisir les teintes en fonction de la luminosité de vos pièces, de votre mobilier et de l'ambiance souhaitée. Nous réalisons des essais de couleur directement sur vos murs avant validation.",
      },
      {
        question: 'Combien de temps pour peindre une maison neuve à Beauzelle ?',
        answer: "Pour une maison neuve de 100 à 120 m², comptez environ 5 à 8 jours ouvrés pour une mise en peinture complète (murs et plafonds). Le délai est plus court que pour une rénovation car les murs neufs nécessitent moins de préparation.",
      },
      {
        question: 'Quel est le coût d\'un premier ravalement à Beauzelle ?',
        answer: "Pour une maison récente dont la façade est encore en état correct, le premier ravalement est moins coûteux qu'une réfection complète. Comptez entre 30 et 50 €/m² selon l'état du support et la finition choisie. Le devis est gratuit et établi après visite de votre maison.",
      },
    ],
  },
  {
    slug: 'gratentour',
    name: 'Gratentour',
    distance: '5 km',
    travelTime: '9 minutes',
    mapQuery: 'Gratentour+31150+Haute-Garonne+France',
    nearbyZones: ['castelginest', 'saint-alban', 'bruguieres', 'launaguet'],
    intro: "Gratentour, commune d'environ 4 000 habitants, est un village résidentiel au caractère préservé au nord de Toulouse. Ses maisons individuelles, allant des bâtisses anciennes aux constructions contemporaines, forment un ensemble architectural varié qui génère des besoins diversifiés en travaux de peinture.",
    specificInfo: "Le centre de Gratentour conserve des maisons anciennes en brique et pierre qui nécessitent des techniques de peinture traditionnelles. En périphérie, les lotissements des années 1990-2010 commencent à nécessiter leur premier ravalement de façade, tandis que les constructions récentes demandent surtout des travaux de personnalisation intérieure.",
    paragraphs: [
      "Gratentour fait partie de notre zone d'intervention immédiate. À 9 minutes de notre atelier, nous nous déplaçons facilement pour évaluer vos projets et réaliser vos travaux de peinture dans les meilleurs délais.",
      "Les habitants de Gratentour apprécient le côté village de leur commune et souhaitent souvent des travaux de peinture qui respectent le caractère de leur habitation. Nous les conseillons sur les finitions les plus adaptées, qu'il s'agisse d'un badigeon à la chaux sur une maison ancienne ou d'une peinture contemporaine sur un pavillon récent.",
    ],
    sections: [
      {
        heading: 'Techniques traditionnelles pour les maisons anciennes de Gratentour',
        paragraphs: [
          "Le cœur de Gratentour abrite des maisons en brique et pierre qui témoignent de l'histoire du village. Ces bâtisses nécessitent des techniques de peinture respectueuses de leur patrimoine. Le badigeon à la chaux, technique ancestrale, est parfaitement adapté à ces supports anciens : il laisse respirer les murs, régule naturellement l'humidité et offre un aspect velouté caractéristique des maisons du Sud-Ouest.",
          "Nous proposons également des patines et des effets vieillis qui ajoutent de la profondeur aux murs anciens. Ces finitions artisanales, réalisées couche par couche, créent des jeux de transparence et de matière impossibles à obtenir avec une peinture industrielle. Chaque mur devient unique, avec des nuances subtiles qui évoluent selon la lumière du jour.",
        ],
      },
      {
        heading: 'Peinture des pavillons modernes à Gratentour',
        paragraphs: [
          "En périphérie du village, les lotissements résidentiels de Gratentour abritent des maisons modernes aux lignes épurées. Pour ces constructions, nous privilégions des peintures contemporaines offrant des rendus nets et uniformes. Les finitions mates sont tendance pour les murs, tandis que les satinées sont recommandées pour les pièces de vie et les zones de passage qui nécessitent un entretien régulier.",
          "Les pavillons construits dans les années 1990-2000 commencent à montrer des signes de vieillissement intérieur : jaunissement des plafonds, usure de la peinture dans les zones de passage, traces d'humidité dans les salles de bain. Un rafraîchissement complet redonne un coup de jeune à ces habitations et peut constituer un argument de poids en cas de revente.",
        ],
      },
      {
        heading: 'Gratentour : un village de caractère à préserver',
        paragraphs: [
          "Gratentour est une commune attachée à son identité villageoise. Les travaux de peinture, qu'ils soient intérieurs ou extérieurs, doivent respecter ce caractère. Nous conseillons les propriétaires sur les choix les plus harmonieux : palettes de couleurs naturelles pour les façades, finitions authentiques pour les maisons anciennes, teintes sobres et élégantes pour les constructions modernes afin qu'elles s'intègrent dans le paysage.",
          "Notre approche à Gratentour est celle d'un artisan qui prend le temps de comprendre le contexte de chaque chantier. Nous ne proposons pas les mêmes solutions pour une ferme rénovée du centre-village et pour un pavillon contemporain en lotissement. Cette attention aux détails et au contexte local est ce qui distingue un artisan peintre implanté dans le secteur d'un prestataire de passage.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Réalisez-vous des patines sur les maisons anciennes de Gratentour ?',
        answer: "Oui, nous maîtrisons les techniques de patine et de badigeon à la chaux qui conviennent parfaitement aux maisons anciennes. Ces techniques apportent un rendu authentique tout en protégeant durablement les murs. Nous adaptons la teinte et la finition au style de votre maison.",
      },
      {
        question: 'Le déplacement est-il facturé pour un devis à Gratentour ?',
        answer: "Non, le déplacement et le devis sont entièrement gratuits à Gratentour comme dans toute notre zone d'intervention de 20 km autour de Fenouillet.",
      },
      {
        question: 'Quelles teintes de façade conviennent au style de Gratentour ?',
        answer: "Les teintes chaudes et naturelles s'intègrent le mieux dans le paysage de Gratentour : ocres, beiges, sables, blancs cassés. Pour les maisons en brique apparente, un traitement hydrofuge invisible préserve l'aspect d'origine. Nous vous guidons dans le choix en tenant compte du PLU communal.",
      },
    ],
  },
  {
    slug: 'seilh',
    name: 'Seilh',
    distance: '6 km',
    travelTime: '10 minutes',
    mapQuery: 'Seilh+31840+Haute-Garonne+France',
    nearbyZones: ['beauzelle', 'gagnac-sur-garonne', 'aussonne', 'blagnac'],
    intro: "Seilh, commune résidentielle de plus de 3 500 habitants, est connue pour son parcours de golf et son cadre de vie verdoyant. Les propriétés y sont souvent de standing, avec des maisons individuelles soignées qui demandent des travaux de peinture de qualité.",
    specificInfo: "Le parc immobilier de Seilh se distingue par une proportion importante de maisons individuelles de bon standing. Les propriétaires sont exigeants sur la qualité des finitions et recherchent des prestations haut de gamme : peinture décorative, enduits à la chaux, laque tendue. Les façades des maisons de Seilh sont généralement bien entretenues et les propriétaires investissent régulièrement dans leur rénovation.",
    paragraphs: [
      "Seilh est une commune où la qualité des travaux de peinture est primordiale. Les propriétaires recherchent un résultat impeccable, tant pour la peinture intérieure que pour l'entretien des façades. Nous répondons à ces exigences avec un travail soigné et des matériaux de premier choix.",
      "Nous intervenons régulièrement à Seilh pour des projets de décoration intérieure ambitieux : peinture décorative, stuc vénitien, pose de papier peint haut de gamme. Les maisons spacieuses de la commune se prêtent parfaitement à des finitions décoratives qui subliment les volumes.",
    ],
    sections: [
      {
        heading: 'Finitions haut de gamme pour les résidences de Seilh',
        paragraphs: [
          "Les maisons de Seilh se distinguent par des volumes généreux — doubles hauteurs, grandes baies vitrées, séjours cathédrales — qui appellent des finitions à la hauteur. La laque tendue, par exemple, offre un rendu ultra-brillant et profond sur les boiseries et les murs d'accent, apportant une touche de raffinement incomparable. Le stuc vénitien, avec ses reflets nacrés et sa surface lisse comme du marbre, sublime les entrées et les espaces de réception.",
          "Ces techniques décoratives haut de gamme demandent un savoir-faire artisanal que nous cultivons depuis des années. Chaque intervention est réalisée manuellement, couche après couche, avec des temps de séchage et de ponçage intermédiaires qui garantissent un résultat parfait. Nous réalisons systématiquement des échantillons de 50 × 50 cm sur votre mur pour que vous puissiez valider la teinte et la texture avant le traitement complet.",
        ],
      },
      {
        heading: 'Peinture décorative et enduits de prestige à Seilh',
        paragraphs: [
          "Seilh attire une clientèle exigeante qui recherche des finitions originales et sur mesure. Le béton ciré mural, avec son aspect contemporain et minimaliste, est particulièrement prisé dans les salons et salles de bain des maisons du secteur. Le tadelakt, enduit marocain imperméable à l'eau, est une alternative luxueuse au carrelage dans les douches et les plans de vasque, offrant un rendu unique et chaleureux.",
          "Nous proposons également des effets de matière plus subtils : peinture sablée aux reflets changeants, peinture métallisée pour un accent moderne, enduit à la chaux brossé pour un style méditerranéen. Chaque projet est un travail sur mesure : nous échangeons longuement avec vous sur vos inspirations, réalisons des essais, ajustons les teintes jusqu'à obtenir exactement le résultat que vous imaginez.",
        ],
      },
      {
        heading: 'Entretien des grandes propriétés et façades à Seilh',
        paragraphs: [
          "Les propriétés de Seilh disposent souvent de surfaces de façade conséquentes : murs de clôture, façade principale sur plusieurs niveaux, dépendances et pool house. L'entretien régulier de ces grandes surfaces nécessite une organisation rigoureuse et un équipement professionnel. Nous planifions ces chantiers avec soin pour minimiser les nuisances et respecter le cadre de vie du voisinage.",
          "Les abords du golf de Seilh comptent parmi les adresses les plus prestigieuses de la commune. Les propriétaires de ce secteur attachent une importance particulière à l'apparence extérieure de leur habitation. Nous répondons à cette exigence avec des peintures de façade premium, appliquées avec le plus grand soin, pour un résultat qui met en valeur l'architecture de votre maison.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Réalisez-vous des finitions haut de gamme à Seilh ?',
        answer: "Oui, nous proposons toute la gamme des finitions décoratives : stuc vénitien, béton ciré, laque tendue, badigeon à la chaux. Ces techniques demandent un savoir-faire particulier que nous maîtrisons. Nous réalisons des échantillons sur votre mur avant de traiter l'ensemble de la surface.",
      },
      {
        question: 'Pouvez-vous peindre l\'extérieur d\'une grande propriété à Seilh ?',
        answer: "Oui, nous intervenons sur des propriétés de toute taille. Pour les grandes surfaces de façade, nous utilisons des échafaudages professionnels et planifions le chantier pour respecter les délais convenus. Un devis détaillé vous sera remis après visite.",
      },
      {
        question: 'Quel est le coût d\'un mur en stuc vénitien à Seilh ?',
        answer: "Le stuc vénitien se situe entre 60 et 100 €/m² selon le nombre de couches et la finition souhaitée (mat, satiné, ciré). C'est un investissement plus important qu'une peinture classique, mais le rendu est incomparable et la durabilité excellente. Nous réalisons un échantillon gratuit avant de vous engager.",
      },
    ],
  },
  {
    slug: 'bruguieres',
    name: 'Bruguières',
    distance: '7 km',
    travelTime: '10 minutes',
    mapQuery: 'Bruguières+31150+Haute-Garonne+France',
    nearbyZones: ['castelginest', 'gratentour', 'saint-alban', 'aussonne'],
    intro: "Bruguières, commune d'environ 6 000 habitants au nord de Toulouse, offre un cadre de vie agréable avec un bon équilibre entre zones résidentielles et espaces verts. Son parc immobilier en croissance constante génère des besoins réguliers en travaux de peinture.",
    specificInfo: "Bruguières présente un tissu urbain typique de la périphérie nord de Toulouse : un centre ancien avec quelques maisons de caractère et de vastes zones pavillonnaires développées depuis les années 1990. Les constructions récentes du secteur de la Menude et les lotissements le long de la route de Fronton forment l'essentiel de notre clientèle locale.",
    paragraphs: [
      "Bruguières est facilement accessible depuis notre atelier de Fenouillet, en seulement 10 minutes. Nous intervenons régulièrement dans les différents quartiers de la commune pour des travaux de peinture intérieure et extérieure.",
      "Les propriétaires de Bruguières nous consultent souvent pour des projets de rénovation complète : rafraîchissement de l'ensemble des pièces, ravalement de façade, peinture des boiseries extérieures. Nous proposons des forfaits avantageux pour les chantiers importants.",
    ],
    sections: [
      {
        heading: 'Rénovation intérieure des pavillons de Bruguières',
        paragraphs: [
          "Les pavillons du secteur de la Menude et de la route de Fronton, construits dans les années 1990-2000, offrent de beaux espaces de vie que leurs propriétaires souhaitent remettre au goût du jour. Après 20 à 30 ans, les peintures d'origine ont perdu leur éclat, les plafonds ont jauni, et la décoration ne correspond plus aux tendances actuelles. Nous réalisons le rafraîchissement complet de ces intérieurs en proposant des palettes de couleurs modernes et des finitions adaptées à chaque pièce.",
          "Nos interventions à Bruguières incluent souvent la remise en état complète des pièces d'eau. Les salles de bain et cuisines des maisons des années 1990 présentent fréquemment des traces d'humidité au plafond et des peintures qui s'écaillent à proximité des points d'eau. Nous traitons ces zones avec des produits spécifiques anti-humidité avant d'appliquer des peintures techniques résistantes à la vapeur d'eau.",
        ],
      },
      {
        heading: 'Peinture de façade et boiseries extérieures à Bruguières',
        paragraphs: [
          "Les maisons de Bruguières disposent généralement d'éléments extérieurs en bois ou en métal qui nécessitent un entretien régulier : volets, portails, clôtures, bandeaux de sous-toiture. Ces éléments sont les premiers à souffrir des intempéries et leur dégradation impacte directement l'apparence de votre propriété. Nous proposons un entretien groupé de tous les éléments extérieurs pour optimiser les coûts et garantir un résultat homogène.",
          "Les façades des lotissements de Bruguières, exposées au vent d'autan et aux variations de température, nécessitent des peintures résistantes et durables. Nous utilisons des peintures de façade de qualité professionnelle, microporeuses et anti-salissures, qui conservent leur éclat pendant 10 à 15 ans même dans les conditions climatiques exigeantes de la Haute-Garonne.",
        ],
      },
      {
        heading: 'Bruguières : des forfaits adaptés à vos projets de rénovation',
        paragraphs: [
          "Lorsque plusieurs travaux de peinture sont nécessaires simultanément — intérieur, façade, boiseries — nous proposons des forfaits globaux plus avantageux que des interventions séparées. La mobilisation du matériel et de l'équipe en une seule fois réduit les coûts de mise en place et de déplacement. C'est une formule particulièrement appréciée des propriétaires de Bruguières qui souhaitent remettre l'ensemble de leur maison en état.",
          "Le forfait est établi sur devis gratuit après une visite complète de votre propriété. Nous évaluons chaque poste (intérieur, extérieur, boiseries) et vous remettons un chiffrage détaillé et transparent. Le prix est fixe et garanti : aucune surprise en cours de chantier, même si nous découvrons des désordres imprévus lors de la préparation des supports.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Proposez-vous des forfaits pour la peinture complète d\'une maison à Bruguières ?',
        answer: "Oui, pour les chantiers importants (peinture complète d'une maison intérieur + extérieur), nous proposons des tarifs dégressifs. Le devis est établi sur place gratuitement et le prix est ferme et définitif. Contactez-nous pour une évaluation personnalisée.",
      },
      {
        question: 'Intervenez-vous pendant les vacances scolaires à Bruguières ?',
        answer: "Oui, nous travaillons toute l'année sauf les jours fériés. Les vacances scolaires sont d'ailleurs un bon moment pour réaliser des travaux de peinture, notamment dans les chambres d'enfants. N'hésitez pas à anticiper et à nous contacter en amont.",
      },
      {
        question: 'Pouvez-vous peindre les dessous de toit et bandeaux à Bruguières ?',
        answer: "Oui, nous réalisons la peinture des dessous de toit (sous-face), bandeaux et planches de rive. Ces éléments, souvent en bois ou en PVC, sont exposés aux intempéries et nécessitent un entretien régulier. Nous les traitons en même temps que la façade pour un résultat esthétique homogène.",
      },
    ],
  },
  {
    slug: 'blagnac',
    name: 'Blagnac',
    distance: '7 km',
    travelTime: '12 minutes',
    mapQuery: 'Blagnac+31700+Haute-Garonne+France',
    nearbyZones: ['beauzelle', 'seilh', 'colomiers', 'toulouse'],
    intro: "Blagnac, ville de plus de 25 000 habitants, est la quatrième commune de la Haute-Garonne. Connue pour l'aéroport Toulouse-Blagnac et le siège d'Airbus, elle combine dynamisme économique et qualité de vie résidentielle. Les besoins en travaux de peinture y sont considérables.",
    specificInfo: "Blagnac offre un paysage immobilier très diversifié : centre historique avec des maisons en brique, quartiers résidentiels des années 60-80, programmes immobiliers modernes autour d'Andromède et nombreux locaux professionnels. Cette diversité demande une capacité d'adaptation que nous maîtrisons.",
    paragraphs: [
      "Blagnac est une commune importante de notre zone d'intervention. Sa population et la diversité de son parc immobilier en font un secteur où nous intervenons très fréquemment, tant chez les particuliers que chez les professionnels.",
      "Les entreprises implantées à Blagnac (zone aéroportuaire, centre commercial) font également appel à nos services pour l'entretien de leurs locaux : bureaux, espaces d'accueil, salles de réunion. Nous intervenons le soir ou le week-end pour ne pas perturber l'activité professionnelle.",
    ],
    sections: [
      {
        heading: 'Peinture de locaux professionnels et commerciaux à Blagnac',
        paragraphs: [
          "La zone aéroportuaire de Blagnac concentre un tissu économique dense, avec les installations d'Airbus, de nombreuses entreprises sous-traitantes et des espaces tertiaires qui doivent projeter une image soignée. En tant qu'artisan peintre intervenant à Blagnac, nous réalisons la mise en peinture de bureaux, halls d'accueil, salles de réunion et showrooms dans le respect des normes en vigueur, notamment les réglementations anti-feu pour les établissements recevant du public.",
          "Nous comprenons les contraintes spécifiques des professionnels blagnacais : continuité d'activité, délais serrés et exigence de finition irréprochable. C'est pourquoi nous proposons des interventions en horaires décalés — soirs, nuits et week-ends — pour que vos locaux soient repeints sans aucune perturbation pour vos collaborateurs ou vos clients. Nos peintures professionnelles à séchage rapide et faible émission de COV permettent une reprise d'activité dès le lendemain matin.",
        ],
      },
      {
        heading: 'Personnalisation des logements neufs du quartier Andromède',
        paragraphs: [
          "Le quartier Andromède, vaste écoquartier en plein essor à Blagnac, accueille chaque année de nouveaux résidents dans des logements livrés avec des finitions basiques par les promoteurs. Murs blancs uniformes, peinture monocouche d'entrée de gamme, absence de personnalité : de nombreux acquéreurs nous contactent dès la remise des clés pour transformer leur appartement ou leur maison en un espace qui leur ressemble véritablement.",
          "Notre intervention dans les logements neufs d'Andromède consiste à appliquer des couleurs choisies avec soin, pièce par pièce, en tenant compte de la luminosité et de l'agencement propres à chaque bien. Nous proposons des finitions supérieures — mat profond, satin lavable, velours — que les constructeurs ne prévoient pas dans leurs prestations standard. Ce travail de personnalisation valorise immédiatement votre bien et améliore considérablement votre confort au quotidien.",
        ],
      },
      {
        heading: 'Entretien et ravalement des maisons du centre historique de Blagnac',
        paragraphs: [
          "Le centre ancien de Blagnac recèle de belles maisons en brique toulousaine, témoins d'un patrimoine architectural qu'il convient de préserver avec des techniques adaptées. En tant qu'artisan peintre expérimenté, nous maîtrisons les méthodes spécifiques à ce bâti traditionnel : badigeons à la chaux naturelle, enduits respirants compatibles avec la brique, et teintes inspirées de la palette historique de la région toulousaine.",
          "Le ravalement de ces maisons anciennes exige un diagnostic préalable rigoureux. Nous vérifions l'état des joints, détectons les éventuelles remontées d'humidité et identifions les zones fragilisées avant de proposer un traitement sur mesure. L'objectif est double : protéger durablement la façade contre les intempéries tout en respectant le caractère authentique du bâtiment. Chaque chantier dans le centre historique de Blagnac est une occasion de contribuer à la beauté de ce patrimoine local.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Réalisez-vous la peinture de locaux professionnels à Blagnac ?',
        answer: "Oui, nous intervenons dans les bureaux, commerces et locaux professionnels de Blagnac. Nous pouvons travailler en dehors des heures d'ouverture (soir, week-end) pour ne pas perturber votre activité. Nous utilisons des peintures à séchage rapide et faible odeur.",
      },
      {
        question: 'Intervenez-vous dans le quartier d\'Andromède à Blagnac ?',
        answer: "Oui, nous intervenons dans tous les quartiers de Blagnac, y compris Andromède. Les logements neufs de ce quartier nécessitent souvent une personnalisation de la peinture intérieure (couleurs, finitions) au-delà de la livraison standard du promoteur.",
      },
      {
        question: 'Pouvez-vous peindre un appartement dans un immeuble neuf à Blagnac ?',
        answer: "Absolument. Nous intervenons fréquemment dans les résidences neuves de Blagnac, notamment à Andromède et dans les programmes récents du centre-ville. Nous personnalisons la peinture livrée par le promoteur en appliquant les couleurs et finitions de votre choix. L'intervention est rapide car les supports neufs nécessitent peu de préparation, et nous protégeons soigneusement les sols et menuiseries déjà posés.",
      },
    ],
  },
  {
    slug: 'toulouse',
    name: 'Toulouse',
    distance: '8 km',
    travelTime: '15 minutes',
    mapQuery: 'Toulouse+31000+Haute-Garonne+France',
    nearbyZones: ['aucamville', 'launaguet', 'blagnac', 'lunion', 'balma', 'colomiers', 'tournefeuille'],
    intro: "Toulouse, préfecture de la Haute-Garonne et quatrième ville de France avec près de 500 000 habitants, offre un patrimoine architectural exceptionnel. La Ville Rose et ses quartiers variés génèrent une demande constante en travaux de peinture, de la rénovation d'appartements haussmanniens à la personnalisation de logements neufs.",
    specificInfo: "Le parc immobilier toulousain est d'une grande diversité : hôtels particuliers en brique du centre historique, immeubles haussmanniens des grands boulevards, logements collectifs des années 60-70, maisons de ville et programmes neufs en périphérie. Chaque type de bâtiment appelle des techniques de peinture spécifiques que nous maîtrisons.",
    paragraphs: [
      "Bien que basés à Fenouillet, nous intervenons régulièrement dans Toulouse et ses différents quartiers. À 15 minutes de trajet, nous accédons facilement aux secteurs nord (Borderouge, Les Minimes, Lalande) ainsi qu'au centre-ville.",
      "Les appartements toulousains présentent souvent des particularités qui demandent un savoir-faire spécifique : moulures et corniches à peindre avec précision, hauteurs sous plafond importantes, enduits anciens à restaurer. Nous adaptons nos techniques à chaque situation pour un résultat fidèle au caractère du bâtiment.",
    ],
    sections: [
      {
        heading: 'Rénovation d\'appartements haussmanniens à Toulouse',
        paragraphs: [
          "Les immeubles haussmanniens des grands boulevards toulousains — allées Jean-Jaurès, rue d'Alsace-Lorraine, place Wilson — abritent des appartements au charme indéniable mais exigeants en matière de peinture. Moulures ornementales, corniches en plâtre, rosaces au plafond, hauteurs sous plafond dépassant trois mètres : chaque élément architectural nécessite un traitement précis. En tant qu'artisan peintre intervenant à Toulouse, nous maîtrisons les techniques de découpe fine au pinceau et l'utilisation d'enduits traditionnels compatibles avec ces supports anciens.",
          "La rénovation de ces appartements de caractère demande une préparation minutieuse. Les enduits à la chaux d'origine, parfois centenaires, doivent être consolidés avant toute mise en peinture. Nous rebouchons les fissures avec des enduits souples qui respectent les mouvements du bâti ancien, puis appliquons des peintures de qualité supérieure qui mettent en valeur les volumes généreux. Le résultat allie fidélité au patrimoine architectural et confort contemporain pour les occupants.",
        ],
      },
      {
        heading: 'Peinture et décoration dans les quartiers nord de Toulouse',
        paragraphs: [
          "Les quartiers nord de Toulouse — Borderouge, Les Minimes, Lalande, Sept-Deniers — constituent notre zone d'intervention privilégiée dans la métropole. Depuis notre atelier de Fenouillet, nous y accédons en moins de quinze minutes par la route de Launaguet ou la rocade. Ces quartiers dynamiques concentrent un parc immobilier diversifié : résidences récentes à Borderouge, immeubles de standing aux Minimes, maisons de ville à Lalande et pavillons familiaux à Sept-Deniers.",
          "Cette proximité géographique nous permet de proposer un service réactif aux habitants du nord toulousain. Nous intervenons aussi bien pour le rafraîchissement d'un studio étudiant que pour la rénovation complète d'une maison familiale. Notre connaissance fine de ces quartiers, de leurs copropriétés et de leurs spécificités architecturales nous permet d'adapter nos prestations aux attentes de chaque client, avec des conseils déco en phase avec l'esprit de chaque secteur.",
        ],
      },
      {
        heading: 'Mise en valeur de l\'architecture en brique de la Ville Rose',
        paragraphs: [
          "Toulouse doit son surnom de Ville Rose à l'omniprésence de la brique foraine dans son architecture. Ce matériau noble, utilisé depuis le Moyen Âge, confère aux façades toulousaines leurs teintes chaudes caractéristiques allant du rose saumon à l'ocre profond. En tant qu'artisan peintre spécialisé, nous intervenons sur ces façades en brique avec des techniques respectueuses du support : badigeons à la chaux aérienne, enduits minéraux respirants et peintures silicatées conformes aux prescriptions du PLU patrimonial.",
          "La restauration d'une façade en brique toulousaine ne s'improvise pas. Il faut d'abord évaluer l'état des joints, vérifier l'absence de salpêtre et choisir des teintes qui s'harmonisent avec le bâti environnant. Nous travaillons en étroite relation avec les architectes des Bâtiments de France lorsque le bien se situe en secteur protégé. Notre objectif est de redonner aux façades leur éclat d'origine tout en assurant une protection durable contre les agressions climatiques propres au bassin toulousain.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous dans tout Toulouse ?',
        answer: "Nous intervenons principalement dans les quartiers nord et centre de Toulouse, facilement accessibles depuis Fenouillet : Borderouge, Les Minimes, Lalande, Sept-Deniers, Compans-Caffarelli, Capitole, Saint-Cyprien. Pour les quartiers sud, nous intervenons au cas par cas.",
      },
      {
        question: 'Pouvez-vous peindre un appartement avec moulures à Toulouse ?',
        answer: "Oui, nous avons l'expérience de la peinture d'appartements anciens avec moulures, corniches et rosaces. Nous utilisons des pinceaux fins et du scotch de masquage professionnel pour des découpes nettes. Les moulures peuvent être mises en valeur par un jeu de couleurs ou peintes dans la même teinte que le plafond.",
      },
      {
        question: 'Quel est le délai d\'intervention pour un appartement à Toulouse ?',
        answer: "Pour un appartement à Toulouse, nous pouvons généralement débuter les travaux sous 1 à 2 semaines après acceptation du devis. La durée du chantier varie selon la surface et l'état des supports : comptez 3 à 5 jours pour un T3 en bon état, et jusqu'à 2 semaines pour une rénovation complète avec reprise d'enduits et traitement des moulures. Nous établissons un planning précis dès le devis.",
      },
    ],
  },
  {
    slug: 'aussonne',
    name: 'Aussonne',
    distance: '8 km',
    travelTime: '12 minutes',
    mapQuery: 'Aussonne+31840+Haute-Garonne+France',
    nearbyZones: ['seilh', 'beauzelle', 'cornebarrieu', 'bruguieres'],
    intro: "Aussonne, commune d'environ 6 500 habitants, est un village résidentiel agréable situé au nord-ouest de Toulouse. Son développement récent a engendré de nombreuses constructions pavillonnaires qui nécessitent aujourd'hui leurs premiers travaux d'entretien et de rénovation.",
    specificInfo: "Aussonne a vu sa population doubler en vingt ans. Les lotissements construits dans les années 2000-2010 arrivent à l'âge où les premiers ravalements de façade deviennent nécessaires. Les intérieurs, souvent livrés en peinture blanche standard, sont progressivement personnalisés par les propriétaires qui souhaitent apporter de la couleur et du caractère à leur logement.",
    paragraphs: [
      "Aussonne est accessible en 12 minutes depuis notre atelier de Fenouillet. Nous y intervenons régulièrement pour des travaux de personnalisation intérieure et d'entretien extérieur des maisons individuelles.",
      "Le tissu pavillonnaire d'Aussonne génère une demande régulière en peinture de façade. Les enduits monocouche des constructions des années 2000 commencent à s'encrasser et à présenter des micro-fissures. Un ravalement à ce stade est plus économique qu'une réfection complète reportée de plusieurs années.",
    ],
    sections: [
      {
        heading: 'Premier ravalement de façade pour les maisons récentes d\'Aussonne',
        paragraphs: [
          "Les maisons construites entre 2000 et 2010 à Aussonne arrivent désormais à l'âge de leur premier ravalement. Les enduits monocouche appliqués lors de la construction, bien que résistants, subissent après quinze à vingt ans les effets du temps : encrassement généralisé, développement de mousses et d'algues sur les faces nord, apparition de micro-fissures en toile d'araignée et farinage progressif de la surface. En tant qu'artisan peintre intervenant à Aussonne, nous diagnostiquons précisément l'état de votre façade.",
          "Notre approche commence par un nettoyage haute pression adapté à la fragilité de l'enduit, suivi d'un traitement anti-mousse préventif. Les micro-fissures sont traitées avec un enduit souple de rebouchage avant l'application d'une peinture de ravalement microporeuse qui laisse le mur respirer. En intervenant à ce stade précoce de dégradation, le coût du ravalement reste contenu et la longévité de la protection est maximale, repoussant le prochain entretien de dix à quinze ans.",
        ],
      },
      {
        heading: 'Personnalisation des intérieurs à Aussonne',
        paragraphs: [
          "La majorité des maisons récentes d'Aussonne ont été livrées par les constructeurs avec une peinture blanche standard en monocouche. Si cette finition permet d'emménager rapidement, elle manque cruellement de caractère et ne résiste pas longtemps aux marques du quotidien. De plus en plus de propriétaires aussonnais nous sollicitent pour apporter couleur et personnalité à leur intérieur, pièce par pièce, en suivant les tendances décoratives actuelles.",
          "Nous accompagnons chaque projet avec un conseil couleur personnalisé adapté à votre logement. Teintes douces et naturelles pour les chambres, couleurs affirmées en mur d'accent dans le séjour, finitions satinées lavables pour la cuisine et les pièces d'eau : chaque espace reçoit un traitement réfléchi. Nous utilisons des peintures de qualité professionnelle en deux couches qui offrent une couvrance parfaite et une durabilité bien supérieure à la peinture d'origine du constructeur.",
        ],
      },
      {
        heading: 'Peinture extérieure et traitement des boiseries à Aussonne',
        paragraphs: [
          "Les maisons d'Aussonne comportent souvent des éléments en bois exposés aux intempéries : volets battants ou coulissants, portails de jardin, clôtures, pergolas et avancées de toit en bois. Ces boiseries extérieures subissent les effets conjugués du soleil, de la pluie et des variations de température. Sans entretien régulier, le bois grise, se fendille et perd sa capacité de protection. Un traitement tous les cinq à sept ans est indispensable pour préserver leur beauté et leur fonction.",
          "Notre intervention sur les boiseries extérieures à Aussonne suit un protocole rigoureux : ponçage pour retrouver le bois sain, application d'un traitement fongicide et insecticide si nécessaire, puis mise en peinture ou lasure selon l'effet recherché. La lasure conserve l'aspect veiné du bois tout en le protégeant, tandis que la peinture microporeuse offre un large choix de coloris pour s'harmoniser avec la façade. Nous traitons l'ensemble des boiseries en une seule intervention pour un résultat cohérent.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Quand faut-il ravaler une façade d\'une maison récente à Aussonne ?',
        answer: "Les maisons construites dans les années 2000-2010 à Aussonne approchent de leur premier besoin de ravalement. Si vous constatez des traces verdâtres, un encrassement généralisé ou des micro-fissures, il est temps de planifier un ravalement. En intervenant tôt, les travaux sont moins coûteux car le support est encore en bon état.",
      },
      {
        question: 'Traitez-vous les façades encrassées sans forcément les repeindre ?',
        answer: "Oui, si votre façade est simplement encrassée mais que la peinture est encore en bon état, un nettoyage haute pression suivi d'un traitement anti-mousse peut suffire. C'est une solution plus économique qu'un ravalement complet. Nous évaluons l'état de la façade et vous proposons la solution la plus adaptée.",
      },
      {
        question: 'Proposez-vous un conseil couleur pour les maisons d\'Aussonne ?',
        answer: "Oui, nous proposons un accompagnement couleur gratuit lors de notre visite d'évaluation. Nous apportons des nuanciers professionnels et nous vous guidons dans le choix des teintes en tenant compte de la luminosité de chaque pièce, de votre mobilier et de vos goûts. Nous pouvons également réaliser des essais de couleur directement sur vos murs avant de valider le choix définitif.",
      },
    ],
  },
  {
    slug: 'lunion',
    name: "L'Union",
    distance: '9 km',
    travelTime: '14 minutes',
    mapQuery: 'L\'Union+31240+Haute-Garonne+France',
    nearbyZones: ['toulouse', 'launaguet', 'saint-alban', 'balma'],
    intro: "L'Union, commune résidentielle d'environ 12 000 habitants à l'est de Toulouse, offre un cadre de vie recherché avec ses quartiers pavillonnaires et ses espaces verts. Le parc immobilier varié de la commune génère une demande soutenue en travaux de peinture.",
    specificInfo: "L'Union présente un urbanisme mixte : un centre-bourg traditionnel, de vastes quartiers pavillonnaires développés dans les années 1970-1990 et des programmes récents. Les maisons des années 70-80 nécessitent souvent une rénovation complète de la peinture intérieure et un ravalement de façade, tandis que les constructions récentes demandent des travaux de personnalisation.",
    paragraphs: [
      "L'Union est l'une des communes les plus peuplées de notre zone d'intervention. Nous y intervenons régulièrement pour des travaux allant du simple rafraîchissement au projet de rénovation complet.",
      "Les maisons des années 70-80 de L'Union sont souvent dotées de papier peint vieillissant et de peintures défraîchies. Nous réalisons la dépose complète des anciens revêtements, la remise en état des murs et l'application de nouvelles finitions pour transformer radicalement l'intérieur de ces habitations.",
    ],
    sections: [
      {
        heading: 'Rénovation complète des maisons des années 70-80 à L\'Union',
        paragraphs: [
          "L'Union s'est fortement développée entre les années 1970 et 1990, avec de vastes lotissements pavillonnaires qui constituent aujourd'hui l'essentiel du parc immobilier communal. Ces maisons, souvent acquises à prix attractif par de nouveaux propriétaires, nécessitent une rénovation intérieure profonde : dépose de papiers peints superposés sur plusieurs couches, décapage de crépis intérieurs grossiers, retrait de lambris démodés et remise à nu des murs pour repartir sur une base saine.",
          "En tant qu'artisan peintre spécialisé dans la rénovation à L'Union, nous prenons en charge l'intégralité de cette remise en état. Après dépose des anciens revêtements, nous traitons les fissures, appliquons un enduit de lissage sur l'ensemble des surfaces et posons une sous-couche adaptée avant la finition. Ce travail complet représente un investissement maîtrisé — que nous détaillons dans un devis transparent — et transforme durablement votre cadre de vie sans nécessiter de travaux lourds.",
        ],
      },
      {
        heading: 'Modernisation des intérieurs à L\'Union',
        paragraphs: [
          "Au-delà de la simple remise en état, de nombreux propriétaires à L'Union souhaitent moderniser leur intérieur en adoptant les tendances décoratives actuelles. Les couleurs terreuses et les teintes naturelles — vert sauge, terracotta, bleu minéral — remplacent les beiges uniformes d'autrefois. Les murs d'accent, consistant à peindre un seul pan de mur dans une couleur affirmée, apportent profondeur et caractère aux pièces de vie sans les assombrir.",
          "Notre rôle d'artisan peintre à L'Union va au-delà de la simple application de peinture. Nous vous conseillons sur l'harmonie des couleurs entre les pièces, la cohérence des finitions (mat, satin, velours) et l'association avec vos revêtements de sol et votre mobilier. Nous pouvons également créer des effets décoratifs — soubassements peints, encadrements de portes contrastés, têtes de lit colorées — qui modernisent votre intérieur à moindre coût et avec un impact visuel remarquable.",
        ],
      },
      {
        heading: 'Ravalement et peinture de façade à L\'Union',
        paragraphs: [
          "Les façades des maisons des années 70-80 à L'Union présentent fréquemment des signes avancés de vieillissement : enduit fissuré en profondeur, écaillage de la peinture, traces d'humidité et développement important de végétation. Un ravalement s'impose pour stopper la dégradation et redonner une belle allure à votre maison. Nous commençons par un diagnostic complet de la façade pour identifier les causes des désordres et proposer un traitement adapté.",
          "Selon l'état du support, nous procédons au rebouchage des fissures avec un mastic élastomère, à la reprise des enduits dégradés et à l'application d'une peinture de façade haute performance. Nous privilégions des revêtements pliolite ou siloxane, reconnus pour leur durabilité et leur résistance aux conditions climatiques de la région toulousaine. Le ravalement est aussi l'occasion de repenser l'esthétique de votre façade en choisissant de nouvelles teintes, dans le respect des règles d'urbanisme de L'Union.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Combien coûte la rénovation peinture d\'une maison des années 80 à L\'Union ?',
        answer: "Pour une maison des années 80 d'environ 100 m² nécessitant une rénovation complète (dépose papier peint, enduit, peinture murs et plafonds), comptez un budget de 6 000 à 10 000 € selon l'état des murs et les finitions choisies. Le devis gratuit sur place vous donnera un montant précis.",
      },
      {
        question: 'Pouvez-vous enlever du crépi intérieur à L\'Union ?',
        answer: "Oui, nous réalisons le décapage de crépi intérieur. Selon le type de crépi et le support, nous utilisons différentes techniques : ponçage mécanique, décapage chimique ou recouvrement par un enduit de lissage épais. Nous vous conseillerons la solution la plus adaptée et la plus économique après diagnostic.",
      },
      {
        question: 'Comment choisir les couleurs pour une chambre d\'enfant à L\'Union ?',
        answer: "Pour les chambres d'enfants, nous recommandons des peintures certifiées à faible émission de COV (label A+) pour garantir une qualité d'air optimale. Côté couleurs, nous vous guidons vers des teintes apaisantes qui favorisent le sommeil et la concentration. Nous utilisons des finitions satinées lavables, particulièrement adaptées aux chambres d'enfants car elles résistent aux traces de doigts et se nettoient facilement.",
      },
    ],
  },
  {
    slug: 'cornebarrieu',
    name: 'Cornebarrieu',
    distance: '10 km',
    travelTime: '15 minutes',
    mapQuery: 'Cornebarrieu+31700+Haute-Garonne+France',
    nearbyZones: ['aussonne', 'seilh', 'blagnac', 'colomiers'],
    intro: "Cornebarrieu, commune de plus de 7 000 habitants située à l'ouest de Toulouse, est un pôle résidentiel en plein développement. Proche de l'aéroport et des zones d'emploi de Blagnac, elle attire de nombreux actifs qui investissent dans leur logement.",
    specificInfo: "Cornebarrieu a connu un essor immobilier important ces dernières années, avec de nombreux programmes neufs et des lotissements résidentiels. Le centre ancien conserve un patrimoine bâti traditionnel qui demande des travaux de restauration et de peinture adaptés. La cohabitation entre ancien et neuf crée des besoins variés en matière de peinture.",
    paragraphs: [
      "Cornebarrieu est facilement accessible depuis Fenouillet en empruntant la rocade nord. En 15 minutes, nous sommes sur place pour évaluer vos besoins et planifier vos travaux de peinture.",
      "Les habitants de Cornebarrieu apprécient notre sérieux et notre ponctualité. Nous intervenons dans les maisons du centre comme dans les constructions récentes de la périphérie, en adaptant systématiquement nos techniques au type de bâtiment et à vos attentes.",
    ],
    sections: [
      {
        heading: 'Peinture des constructions neuves à Cornebarrieu',
        paragraphs: [
          "Cornebarrieu connaît un essor immobilier soutenu avec de nombreux programmes neufs qui accueillent chaque année de nouvelles familles. Ces logements, livrés avec des prestations de peinture minimales — monocouche blanche sur l'ensemble des murs — offrent un potentiel de personnalisation considérable. En tant qu'artisan peintre intervenant à Cornebarrieu, nous transformons ces intérieurs standardisés en espaces de vie uniques qui reflètent la personnalité de chaque occupant.",
          "Notre intervention dans les constructions neuves de Cornebarrieu inclut la reprise en deux couches de peinture de qualité professionnelle, le choix de couleurs adaptées à chaque pièce et l'application de finitions supérieures que les promoteurs ne proposent pas. Mat absolu pour les plafonds, satin résistant pour les pièces de vie, velours pour les chambres : nous sélectionnons la finition idéale selon l'usage de chaque espace. Ce travail de personnalisation est d'autant plus simple que les supports neufs sont en parfait état.",
        ],
      },
      {
        heading: 'Restauration des maisons anciennes du centre de Cornebarrieu',
        paragraphs: [
          "Le centre ancien de Cornebarrieu abrite un patrimoine bâti traditionnel composé de maisons en brique, de corps de ferme rénovés et de bâtisses en pierre et en galets garonnais. La restauration de ces édifices exige une connaissance approfondie des matériaux anciens et des techniques compatibles. Nous utilisons des enduits à la chaux naturelle, des badigeons traditionnels et des peintures minérales qui laissent respirer les murs tout en les protégeant durablement.",
          "Chaque maison ancienne de Cornebarrieu raconte une histoire architecturale que nous respectons dans nos interventions. Nous veillons à conserver le caractère authentique des façades en brique apparente, à restaurer les enduits d'origine lorsque c'est possible et à choisir des teintes cohérentes avec le style du bâtiment et de son environnement. Cette approche patrimoniale, alliée à notre savoir-faire technique, garantit une restauration pérenne qui valorise votre bien sur le long terme.",
        ],
      },
      {
        heading: 'Peinture de façade et ravalement à Cornebarrieu',
        paragraphs: [
          "Située à l'ouest de Toulouse, Cornebarrieu est exposée aux vents d'ouest dominants qui accélèrent le vieillissement des façades. Les pluies battantes, les écarts de température et l'ensoleillement intense de la région sollicitent fortement les revêtements extérieurs. En tant qu'artisan peintre spécialiste du ravalement à Cornebarrieu, nous sélectionnons des peintures de façade à haute résistance : revêtements microporeaux qui laissent évacuer l'humidité, formulations anti-salissures qui retardent l'encrassement et pigments résistants aux UV.",
          "Notre protocole de ravalement à Cornebarrieu débute par un diagnostic complet de l'état de la façade, incluant un test d'adhérence de l'ancien revêtement et une vérification de l'étanchéité. Après nettoyage et traitement des supports, nous appliquons un système complet — fixateur, sous-couche et finition — adapté à la nature de votre façade. Le choix de produits performants et durables, combiné à une pose dans les règles de l'art, assure une protection de votre façade pour douze à quinze ans minimum.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Réalisez-vous des travaux de peinture dans les maisons neuves à Cornebarrieu ?',
        answer: "Oui, nous intervenons régulièrement dans les constructions neuves de Cornebarrieu pour personnaliser la peinture intérieure. Nous proposons des couleurs et des finitions que les constructeurs ne prévoient pas dans leurs prestations standard.",
      },
      {
        question: 'Combien de temps à l\'avance faut-il réserver pour un chantier à Cornebarrieu ?',
        answer: "Nous vous recommandons de nous contacter 2 à 3 semaines avant la date souhaitée pour les chantiers courants. Pour les projets importants (ravalement, rénovation complète), un délai de 3 à 4 semaines est préférable. En période creuse, les délais peuvent être plus courts.",
      },
      {
        question: 'Intervenez-vous dans les écoquartiers de Cornebarrieu ?',
        answer: "Oui, nous intervenons dans tous les quartiers de Cornebarrieu, y compris les écoquartiers et les programmes récents. Dans ces constructions à haute performance énergétique, nous utilisons des peintures écologiques labellisées (Ecolabel, NF Environnement) à faible teneur en COV, cohérentes avec la démarche environnementale de ces habitations. Nous veillons également à limiter les déchets de chantier en adoptant des pratiques responsables.",
      },
    ],
  },
  {
    slug: 'colomiers',
    name: 'Colomiers',
    distance: '12 km',
    travelTime: '18 minutes',
    mapQuery: 'Colomiers+31770+Haute-Garonne+France',
    nearbyZones: ['blagnac', 'cornebarrieu', 'tournefeuille', 'toulouse'],
    intro: "Colomiers, deuxième ville de la Haute-Garonne avec plus de 40 000 habitants, est un pôle urbain majeur à l'ouest de Toulouse. Son vaste parc immobilier, allant des grands ensembles des années 60 aux programmes neufs, offre un large spectre de besoins en travaux de peinture.",
    specificInfo: "Colomiers présente un urbanisme très varié : grands ensembles du centre-ville (résidence En Jacca, Perget), quartiers pavillonnaires de Ramassiers et de la Naspe, constructions récentes du secteur de Monréjeau. Cette diversité architecturale et sociale se traduit par des demandes de peinture très différentes, du rafraîchissement économique de logements locatifs aux finitions haut de gamme de maisons individuelles.",
    paragraphs: [
      "Colomiers est la plus grande commune de notre zone d'intervention. Malgré la distance (18 minutes), nous y intervenons régulièrement grâce à un accès rapide par la rocade. La taille de la ville et la diversité de son parc immobilier en font un secteur où nous traitons tous types de chantiers.",
      "Les copropriétés de Colomiers représentent une part significative de nos interventions : ravalement de façades d'immeubles, peinture de cages d'escalier et rénovation d'appartements. Nous travaillons en bonne intelligence avec les syndics et respectons les plannings imposés par les assemblées générales.",
    ],
    sections: [
      {
        heading: 'Ravalement de façade des copropriétés et immeubles à Colomiers',
        paragraphs: [
          "Colomiers compte de nombreux grands ensembles résidentiels, notamment dans les secteurs En Jacca et Perget, où les immeubles des années 1960 à 1980 nécessitent un entretien régulier de leurs façades. En tant qu'artisan peintre intervenant à Colomiers, nous maîtrisons les contraintes spécifiques de ces chantiers collectifs : coordination avec le syndic de copropriété, respect strict du planning voté en assemblée générale et gestion des accès aux parties communes pendant toute la durée des travaux.",
          "Nos interventions sur les copropriétés de Colomiers couvrent le ravalement complet des façades, la remise en peinture des cages d'escalier, des halls d'entrée et des locaux techniques. Nous établissons des devis détaillés conformes aux exigences des syndics et pouvons présenter notre offre lors des assemblées générales. Notre expérience des grands ensembles columérins nous permet de proposer des solutions adaptées au budget de chaque copropriété tout en garantissant un résultat durable et soigné.",
        ],
      },
      {
        heading: 'Peinture des maisons individuelles à Ramassiers et La Naspe',
        paragraphs: [
          "Les quartiers pavillonnaires de Ramassiers et de La Naspe représentent une part importante du tissu résidentiel de Colomiers. Ces lotissements matures, construits pour la plupart dans les années 1980 et 1990, abritent des maisons individuelles dont les intérieurs méritent aujourd'hui une rénovation complète. En tant qu'artisan peintre à Colomiers, nous accompagnons les propriétaires de ces quartiers dans la modernisation de leur habitat, en remplaçant les revêtements d'origine par des finitions contemporaines.",
          "La rénovation intérieure de ces maisons passe souvent par la dépose des anciens papiers peints, le traitement des fissures apparues avec le temps et l'application de peintures actuelles aux teintes lumineuses. Nous conseillons chaque propriétaire sur le choix des couleurs pièce par pièce, en tenant compte de la configuration des espaces propre à ces pavillons des années 80-90. Le résultat transforme radicalement le cadre de vie sans engager de lourds travaux de rénovation structurelle.",
        ],
      },
      {
        heading: 'Peinture de locaux professionnels et commerciaux à Colomiers',
        paragraphs: [
          "Colomiers abrite un tissu économique dense avec ses zones d'activité, ses parcs tertiaires et ses nombreux commerces de proximité. En tant qu'artisan peintre à Colomiers, nous répondons aux besoins spécifiques des professionnels : peinture de bureaux, rafraîchissement de locaux commerciaux, mise aux normes de surfaces industrielles. Chaque projet est traité avec une attention particulière aux contraintes du monde professionnel, notamment le respect des délais serrés.",
          "Pour limiter l'impact sur votre activité, nous adaptons nos horaires d'intervention en travaillant tôt le matin, en soirée ou le week-end selon vos besoins. Nous utilisons exclusivement des peintures professionnelles normées, à séchage rapide et faible émission de composés organiques volatils, permettant une reprise d'activité dans les meilleurs délais. Nos devis pour les locaux professionnels de Colomiers incluent une planification précise phase par phase pour une organisation optimale de votre chantier.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous dans les grandes copropriétés de Colomiers ?',
        answer: "Oui, nous avons l'expérience des chantiers en copropriété. Nous intervenons sur les parties communes (cages d'escalier, halls, parking) et les parties privatives. Nous pouvons établir des devis sur demande du syndic de copropriété et respecter les plannings votés en assemblée générale.",
      },
      {
        question: 'Quels sont vos tarifs pour un appartement à Colomiers ?',
        answer: "Les tarifs dépendent de la surface et de l'état des murs. Pour un T3 de 65 m² en rafraîchissement (murs et plafonds en bon état), comptez entre 1 800 et 2 500 €. Pour une rénovation complète avec enduit, comptez entre 3 500 et 5 000 €. Le devis est gratuit et sans engagement.",
      },
      {
        question: 'Quel est le coût moyen d\'un ravalement de façade pour un immeuble à Colomiers ?',
        answer: "Le coût d'un ravalement de façade d'immeuble à Colomiers dépend de la surface totale, de l'état du support et des traitements nécessaires. Pour une copropriété de taille moyenne (3 à 4 étages), comptez entre 15 000 et 40 000 € pour l'ensemble de l'immeuble, soit un coût réparti entre copropriétaires souvent compris entre 1 500 et 4 000 € par lot. Nous établissons un devis gratuit et détaillé après diagnostic de la façade.",
      },
    ],
  },
  {
    slug: 'balma',
    name: 'Balma',
    distance: '13 km',
    travelTime: '18 minutes',
    mapQuery: 'Balma+31130+Haute-Garonne+France',
    nearbyZones: ['toulouse', 'lunion', 'saint-orens-de-gameville', 'launaguet'],
    intro: "Balma, commune résidentielle de plus de 17 000 habitants à l'est de Toulouse, est reconnue pour sa qualité de vie et son centre commercial Gramont. Son parc immobilier de qualité génère une demande exigeante en travaux de peinture et de décoration.",
    specificInfo: "Balma se distingue par un habitat résidentiel de bon standing : maisons individuelles spacieuses, résidences récentes de qualité et quelques propriétés de prestige. Les propriétaires balmanais sont généralement attentifs à la qualité des finitions et investissent dans l'entretien et l'embellissement de leur bien.",
    paragraphs: [
      "Balma est accessible en 18 minutes depuis Fenouillet via la rocade. Nous y intervenons pour des projets de qualité : peinture intérieure avec des finitions soignées, peinture décorative, ravalement de façade.",
      "Les maisons de Balma offrent souvent de beaux volumes qui se prêtent à des mises en couleur ambitieuses. Nous accompagnons les propriétaires dans le choix des teintes et des finitions pour créer des intérieurs élégants et harmonieux, en cohérence avec le style de leur habitation.",
    ],
    sections: [
      {
        heading: 'Décoration intérieure haut de gamme à Balma',
        paragraphs: [
          "Balma est réputée pour ses propriétés résidentielles de standing, offrant des volumes généreux et une architecture soignée. En tant qu'artisan peintre à Balma, nous répondons aux attentes élevées des propriétaires balmanais en matière de décoration intérieure. Grands séjours cathédrale, suites parentales spacieuses, entrées majestueuses : chaque espace est traité avec une exigence de finition irréprochable, en sélectionnant des peintures haut de gamme aux rendus subtils et durables.",
          "Notre accompagnement en décoration va au-delà de la simple mise en peinture. Nous conseillons nos clients balmanais sur les associations de teintes, les jeux de matières et les effets décoratifs qui subliment leur intérieur. Pose de papier peint design dans une chambre, enduit décoratif dans un séjour, finition satinée dans une cuisine ouverte : nous maîtrisons l'ensemble des techniques pour créer des ambiances raffinées et personnalisées, à la hauteur du cadre de vie exceptionnel qu'offre Balma.",
        ],
      },
      {
        heading: 'Peinture et rénovation des résidences de Gramont',
        paragraphs: [
          "Le secteur de Gramont, à la frontière entre Balma et Toulouse, concentre de nombreuses résidences récentes dont les propriétaires souhaitent personnaliser les finitions intérieures. En tant qu'artisan peintre à Balma, nous intervenons régulièrement dans ces programmes immobiliers pour remplacer les peintures blanches d'origine par des teintes choisies avec soin et des finitions supérieures qui affirment le caractère de chaque logement.",
          "Les résidences de Gramont bénéficient généralement de prestations de base correctes, mais les propriétaires les plus exigeants recherchent une qualité de finition supérieure. Nous proposons des peintures premium offrant une meilleure couvrance, un rendu plus profond et une résistance accrue aux taches et à l'usure. Chaque projet fait l'objet d'un diagnostic précis de l'existant, permettant d'optimiser la préparation des supports et de garantir un résultat qui valorise durablement votre investissement immobilier.",
        ],
      },
      {
        heading: 'Ravalement de façade et peinture extérieure à Balma',
        paragraphs: [
          "Les propriétés de Balma se distinguent par leur architecture soignée et leurs espaces extérieurs entretenus. Le ravalement de façade représente un enjeu esthétique majeur pour préserver le cachet de ces habitations de qualité. En tant qu'artisan peintre à Balma, nous réalisons des ravalements qui mettent en valeur les lignes architecturales de votre maison, en choisissant des teintes et des traitements adaptés au style de la construction et aux règles d'urbanisme locales.",
          "Au-delà de la façade principale, nous traitons l'ensemble des éléments extérieurs : murs de clôture, portails, volets, dessous de toit et menuiseries. Cette approche globale garantit une harmonie visuelle complète qui rehausse l'ensemble de votre propriété balmanaise. Nous utilisons des peintures extérieures de haute qualité, résistantes aux intempéries et aux UV, pour un résultat qui conserve son éclat pendant de nombreuses années sans nécessiter d'entretien intermédiaire.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Réalisez-vous des projets de décoration complets à Balma ?',
        answer: "Oui, nous proposons un accompagnement complet en décoration : conseil couleurs, choix des finitions (mat, satin, brillant), peinture décorative, pose de papier peint. Nous pouvons intervenir sur l'ensemble de votre habitation pour un résultat cohérent et harmonieux.",
      },
      {
        question: 'Peignez-vous les plafonds hauts à Balma ?',
        answer: "Oui, nous intervenons sur les plafonds quelle que soit la hauteur. Pour les plafonds hauts (supérieurs à 3 m), nous utilisons des échafaudages intérieurs sécurisés qui garantissent un travail précis et en toute sécurité. Le surcoût lié à la hauteur est précisé dans le devis.",
      },
      {
        question: 'Quelles techniques de peinture décorative proposez-vous à Balma ?',
        answer: "Nous maîtrisons plusieurs techniques de peinture décorative adaptées aux intérieurs de standing balmanais : enduit à la chaux pour un effet naturel et texturé, stucco vénitien pour un rendu lisse et brillant, peinture à effets (sablé, nacré, métallisé) pour des ambiances contemporaines, ainsi que la pose de papier peint panoramique et de revêtements muraux design. Chaque technique est présentée sur échantillon avant validation.",
      },
    ],
  },
  {
    slug: 'tournefeuille',
    name: 'Tournefeuille',
    distance: '15 km',
    travelTime: '22 minutes',
    mapQuery: 'Tournefeuille+31170+Haute-Garonne+France',
    nearbyZones: ['colomiers', 'toulouse', 'cugnaux', 'blagnac'],
    intro: "Tournefeuille, troisième commune de la Haute-Garonne avec plus de 28 000 habitants, est une ville résidentielle prisée au sud-ouest de Toulouse. Son cadre de vie agréable et ses nombreux quartiers pavillonnaires en font un secteur actif pour les travaux de peinture.",
    specificInfo: "Tournefeuille est essentiellement résidentielle, avec une majorité de maisons individuelles réparties dans de nombreux lotissements. Les quartiers de Pahin, La Paderne, Laubian et le centre-ville présentent des typologies variées, des maisons des années 1970 aux constructions contemporaines. Les premiers lotissements arrivent à maturité et nécessitent d'importants travaux de rénovation.",
    paragraphs: [
      "Tournefeuille est la commune la plus au sud-ouest de notre zone d'intervention. En 22 minutes par la rocade, nous y accédons facilement pour réaliser vos travaux de peinture dans les meilleures conditions.",
      "La forte proportion de maisons individuelles à Tournefeuille génère une demande importante en peinture de façade et en rénovation intérieure. Nous intervenons sur des projets de toute envergure, du rafraîchissement d'une pièce à la rénovation complète d'une maison.",
    ],
    sections: [
      {
        heading: 'Rénovation des lotissements matures de Tournefeuille',
        paragraphs: [
          "Tournefeuille s'est développée grâce à ses nombreux lotissements résidentiels, et les quartiers de Pahin, La Paderne et Laubian comptent parmi les plus anciens de la commune. Les maisons construites entre les années 1970 et 1990 dans ces secteurs arrivent à un stade où une rénovation complète de la peinture intérieure s'impose. En tant qu'artisan peintre à Tournefeuille, nous accompagnons les propriétaires de ces pavillons dans une remise au goût du jour qui respecte le caractère de leur habitation.",
          "La rénovation de ces maisons matures implique souvent la dépose d'anciens revêtements muraux, le traitement de fissures liées au tassement naturel du bâti et la reprise complète des plafonds. Nous proposons un diagnostic pièce par pièce pour établir un plan de rénovation cohérent et hiérarchiser les priorités selon votre budget. Le résultat redonne une véritable seconde jeunesse à ces pavillons tournefeuillais, avec des finitions modernes qui transforment le cadre de vie quotidien de toute la famille.",
        ],
      },
      {
        heading: 'Peinture de façade et ravalement à Tournefeuille',
        paragraphs: [
          "Avec ses vastes quartiers pavillonnaires, Tournefeuille présente un nombre considérable de façades exposées aux aléas climatiques. Pluie, vent d'autan et ensoleillement intense favorisent l'apparition de salissures, de mousses et de micro-fissures sur les enduits extérieurs. En tant qu'artisan peintre à Tournefeuille, nous réalisons des ravalements de façade complets incluant le nettoyage haute pression, le traitement fongicide, la réparation des fissures et l'application d'une peinture de façade durable et résistante.",
          "Chaque ravalement à Tournefeuille débute par un diagnostic précis de l'état de la façade, car les pathologies varient selon l'orientation et l'âge de la construction. Les façades exposées au nord développent davantage de mousses, tandis que celles orientées au sud subissent un vieillissement accéléré par les UV. Nous sélectionnons des peintures de façade adaptées à chaque situation, garantissant une protection efficace et un rendu esthétique qui valorise votre maison pour les dix à quinze années à venir.",
        ],
      },
      {
        heading: 'Conseil en couleurs et tendances déco à Tournefeuille',
        paragraphs: [
          "Choisir les bonnes couleurs pour son intérieur est souvent un exercice délicat. En tant qu'artisan peintre à Tournefeuille, nous proposons un véritable accompagnement décoratif à nos clients. Lors de la visite préalable, nous analysons chaque pièce en tenant compte de sa luminosité naturelle, de ses dimensions, de l'orientation des fenêtres et du mobilier existant pour suggérer une palette de couleurs harmonieuse et actuelle qui correspond à vos envies.",
          "Les tendances actuelles privilégient des teintes douces et naturelles dans les espaces de repos, des couleurs plus affirmées en accent sur un mur de séjour et des tons clairs et lumineux dans les pièces d'eau et la cuisine. Nous présentons des échantillons directement chez vous pour que vous puissiez visualiser le rendu final dans les conditions réelles de lumière. Cette approche pièce par pièce garantit une ambiance cohérente dans l'ensemble de votre maison tournefeuillaise, créant un fil conducteur décoratif tout en personnalisant chaque espace.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous régulièrement à Tournefeuille ?',
        answer: "Oui, Tournefeuille fait partie de notre zone d'intervention habituelle. Malgré les 15 km de distance, l'accès par la rocade est rapide (22 minutes). Nous y avons de nombreux clients satisfaits et intervenons chaque mois dans les différents quartiers de la commune.",
      },
      {
        question: 'Quels quartiers de Tournefeuille desservez-vous ?',
        answer: "Nous intervenons dans tous les quartiers de Tournefeuille sans exception : centre-ville, Pahin, La Paderne, Laubian, Moulin à Vent et tous les lotissements résidentiels. Le déplacement est inclus dans nos tarifs.",
      },
      {
        question: 'Faut-il peindre sur un ancien papier peint ou le retirer à Tournefeuille ?',
        answer: "Nous recommandons systématiquement de retirer l'ancien papier peint avant de peindre pour un résultat optimal et durable. Peindre sur du papier peint peut fonctionner temporairement, mais les raccords, les bulles et les décollements finissent par réapparaître. Nous assurons la dépose complète, le lessivage des murs, l'application d'un enduit de lissage si nécessaire, puis la mise en peinture. Le rendu est incomparablement plus propre et pérenne.",
      },
    ],
  },
  {
    slug: 'saint-orens-de-gameville',
    name: 'Saint-Orens-de-Gameville',
    distance: '17 km',
    travelTime: '25 minutes',
    mapQuery: 'Saint-Orens-de-Gameville+31650+Haute-Garonne+France',
    nearbyZones: ['balma', 'toulouse', 'lunion', 'cugnaux'],
    intro: "Saint-Orens-de-Gameville, commune résidentielle de plus de 14 000 habitants au sud-est de Toulouse, est un secteur dynamique avec un parc immobilier en renouvellement constant. Les besoins en travaux de peinture y sont variés et réguliers.",
    specificInfo: "Saint-Orens-de-Gameville combine un centre-bourg préservé, des quartiers pavillonnaires des années 1980-2000 et des programmes neufs en développement. Les maisons des lotissements anciens (Les Music, Catala) nécessitent souvent une rénovation complète de la peinture intérieure, tandis que les constructions récentes demandent des travaux de personnalisation.",
    paragraphs: [
      "Saint-Orens-de-Gameville est l'une des communes les plus éloignées de notre zone d'intervention, mais reste facilement accessible en 25 minutes par la rocade est. Nous y intervenons régulièrement pour des chantiers de peinture intérieure et extérieure.",
      "Les propriétaires de Saint-Orens apprécient notre professionnalisme et la qualité de nos finitions. Nous intervenons aussi bien dans les maisons anciennes du centre que dans les pavillons des lotissements ou les appartements des résidences récentes.",
    ],
    sections: [
      {
        heading: 'Rénovation des maisons des lotissements Les Music et Catala',
        paragraphs: [
          "Les lotissements Les Music et Catala figurent parmi les quartiers les plus emblématiques de Saint-Orens-de-Gameville. Construites entre les années 1980 et 2000, les maisons de ces secteurs montrent aujourd'hui des signes de vieillissement intérieur : peintures jaunies, fissures aux angles des cloisons, plafonds ternis et revêtements démodés. En tant qu'artisan peintre à Saint-Orens-de-Gameville, nous proposons une rénovation intérieure complète qui redonne tout leur éclat à ces habitations familiales.",
          "Notre intervention commence par un état des lieux minutieux de chaque pièce pour identifier les travaux prioritaires et établir un plan de rénovation adapté à votre budget. Rebouchage des fissures, ponçage des enduits fatigués, traitement des traces d'humidité éventuelles : chaque étape de préparation est réalisée avec soin avant l'application des couches de finition. Les propriétaires de ces lotissements saint-orennais retrouvent ainsi un intérieur moderne et lumineux, valorisant significativement leur patrimoine immobilier.",
        ],
      },
      {
        heading: 'Peinture extérieure et traitement de façade à Saint-Orens',
        paragraphs: [
          "Saint-Orens-de-Gameville bénéficie d'une exposition sud-est qui offre un ensoleillement généreux tout au long de l'année. Si ce cadre est agréable pour ses habitants, il soumet les façades à une exposition intense aux rayons UV et à des amplitudes thermiques marquées entre été et hiver. En tant qu'artisan peintre à Saint-Orens-de-Gameville, nous réalisons un diagnostic complet de chaque façade avant intervention pour identifier les pathologies spécifiques à cette exposition climatique.",
          "Les façades orientées plein sud présentent fréquemment un farinage accéléré de la peinture, une décoloration prononcée et des micro-fissures liées aux cycles de dilatation thermique. Nous sélectionnons des peintures de façade à haute résistance aux UV et aux intempéries, spécialement formulées pour le climat du sud-ouest. Le traitement inclut un nettoyage adapté, l'application d'un fixateur de fond sur les zones fragilisées et deux couches de peinture microporeuse qui laisse respirer le support tout en le protégeant durablement.",
        ],
      },
      {
        heading: 'Coordination avec les autres corps de métier à Saint-Orens',
        paragraphs: [
          "Les projets de rénovation à Saint-Orens-de-Gameville impliquent souvent plusieurs corps de métier intervenant successivement : plaquiste pour la création de cloisons ou doublages, électricien pour la mise aux normes du tableau et des prises, plombier pour la réfection d'une salle de bain. En tant qu'artisan peintre à Saint-Orens-de-Gameville, nous savons que notre intervention se situe en fin de chaîne et requiert une coordination rigoureuse avec l'ensemble des professionnels présents sur le chantier.",
          "Nous établissons un planning d'intervention précis en concertation avec les autres artisans et le maître d'ouvrage, afin de garantir un enchaînement fluide des travaux sans temps mort ni reprise inutile. Notre expérience des chantiers de rénovation nous permet d'anticiper les contraintes techniques : délais de séchage des enduits du plaquiste, positionnement définitif des boîtiers électriques avant enduisage, protection des équipements sanitaires fraîchement posés. Cette rigueur organisationnelle assure un résultat final impeccable pour votre projet saint-orennais.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Le déplacement est-il inclus pour Saint-Orens-de-Gameville ?',
        answer: "Oui, le déplacement est inclus dans nos tarifs pour Saint-Orens-de-Gameville comme pour toutes les communes situées dans notre zone d'intervention de 20 km autour de Fenouillet. Aucun supplément ne sera appliqué.",
      },
      {
        question: 'Pouvez-vous intervenir sur un chantier de rénovation à Saint-Orens ?',
        answer: "Oui, nous intervenons sur les chantiers de rénovation en coordination avec les autres corps de métier (maçon, plaquiste, électricien). Nous pouvons intervenir après les travaux de gros œuvre pour la mise en peinture et les finitions.",
      },
      {
        question: 'Peut-on combiner isolation thermique et peinture de façade à Saint-Orens ?',
        answer: "Oui, nous pouvons intervenir sur la finition peinte d'une isolation thermique par l'extérieur (ITE). Après la pose du système isolant par un façadier spécialisé, nous réalisons la couche de finition décorative avec une peinture de façade compatible. Si vous envisagez un ravalement simple sans ITE, nous pouvons également vous conseiller sur l'intérêt d'une peinture isolante thermique qui améliore modestement le confort sans travaux lourds.",
      },
    ],
  },
  {
    slug: 'cugnaux',
    name: 'Cugnaux',
    distance: '18 km',
    travelTime: '25 minutes',
    mapQuery: 'Cugnaux+31270+Haute-Garonne+France',
    nearbyZones: ['tournefeuille', 'toulouse', 'colomiers', 'saint-orens-de-gameville'],
    intro: "Cugnaux, commune de plus de 18 000 habitants au sud-ouest de Toulouse, est un secteur résidentiel attractif. Son développement immobilier soutenu et l'entretien des habitations existantes génèrent une demande régulière en travaux de peinture.",
    specificInfo: "Cugnaux présente un urbanisme structuré autour d'un centre-ville dynamique et de nombreux quartiers résidentiels. Les maisons individuelles dominent le paysage, avec une grande variété de styles et d'époques de construction. Le secteur du Vivier, les quartiers sud et les lotissements récents constituent nos principales zones d'intervention à Cugnaux.",
    paragraphs: [
      "Cugnaux marque la limite sud-ouest de notre zone d'intervention. À 25 minutes par la rocade, nous y intervenons régulièrement pour des projets de peinture de qualité.",
      "La commune de Cugnaux voit arriver de nombreux nouveaux propriétaires qui souhaitent personnaliser leur logement à leur image. Nous les accompagnons dans le choix des couleurs et des finitions pour créer un intérieur qui leur ressemble, tout en respectant leur budget.",
    ],
    sections: [
      {
        heading: 'Accompagnement des nouveaux propriétaires à Cugnaux',
        paragraphs: [
          "Cugnaux attire chaque année de nombreux primo-accédants séduits par le cadre de vie agréable et les prix immobiliers accessibles de la commune. Ces nouveaux propriétaires souhaitent souvent personnaliser rapidement leur logement pour s'y sentir chez eux. En tant qu'artisan peintre à Cugnaux, nous proposons un accompagnement spécifique adapté aux besoins et au budget des jeunes propriétaires, en les aidant à définir les priorités de leur projet de peinture.",
          "Nous commençons par une visite conseil gratuite au cours de laquelle nous passons en revue chaque pièce et identifions ensemble les travaux essentiels et ceux qui peuvent être reportés. Cette approche progressive permet de répartir l'investissement dans le temps tout en bénéficiant immédiatement d'un intérieur à votre goût. Nous conseillons sur les choix de couleurs et de finitions qui apportent le meilleur rapport qualité-prix, en privilégiant des peintures durables qui ne nécessiteront pas de rafraîchissement prématuré.",
        ],
      },
      {
        heading: 'Rénovation intérieure des maisons du Vivier et quartiers sud',
        paragraphs: [
          "Le secteur du Vivier et les quartiers sud de Cugnaux regroupent un parc de maisons individuelles aux styles et aux époques de construction variés. Des pavillons des années 1980 aux constructions plus récentes des années 2010, chaque habitation présente des besoins spécifiques en matière de peinture et de rénovation intérieure. En tant qu'artisan peintre à Cugnaux, nous adaptons notre intervention au type de construction et à l'état des supports pour garantir un résultat optimal.",
          "Dans les maisons les plus anciennes du Vivier, nous procédons souvent à une remise en état approfondie : dépose des revêtements vétustes, reprise des enduits abîmés, traitement des fissures et application d'une sous-couche adaptée avant la finition. Pour les constructions plus récentes, l'intervention se concentre sur la personnalisation et la modernisation des teintes. Dans tous les cas, nous utilisons des peintures de qualité professionnelle qui assurent un rendu impeccable et une excellente tenue dans le temps pour votre maison cugnalaise.",
        ],
      },
      {
        heading: 'Peinture de façade et entretien extérieur à Cugnaux',
        paragraphs: [
          "L'entretien extérieur d'une maison à Cugnaux ne se limite pas au ravalement de la façade principale. Volets, portails, clôtures, dessous de toit et boiseries extérieures participent à l'esthétique globale de votre propriété et nécessitent un entretien régulier. En tant qu'artisan peintre à Cugnaux, nous proposons une prise en charge complète de tous les éléments extérieurs lors d'une même intervention, ce qui optimise le coût global et garantit une harmonie visuelle parfaite.",
          "Le traitement des boiseries extérieures demande un savoir-faire particulier : ponçage, application d'un traitement insecticide et fongicide, puis mise en peinture ou lasure selon l'essence du bois et le rendu souhaité. Pour les éléments métalliques comme les portails et les garde-corps, nous réalisons un décapage, un traitement antirouille et une peinture de finition résistante aux chocs. En regroupant l'ensemble de ces travaux d'entretien extérieur, nos clients cugnalais bénéficient d'un tarif global plus avantageux qu'en traitant chaque élément séparément.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous jusqu\'à Cugnaux depuis Fenouillet ?',
        answer: "Oui, Cugnaux fait partie de notre zone d'intervention (18 km). L'accès par la rocade est rapide et le déplacement est inclus dans nos tarifs, sans supplément.",
      },
      {
        question: 'Pouvez-vous peindre un local commercial à Cugnaux ?',
        answer: "Oui, nous intervenons dans les locaux commerciaux et professionnels de Cugnaux. Nous adaptons nos horaires pour ne pas perturber votre activité et utilisons des peintures à séchage rapide et faible odeur pour un confort optimal.",
      },
      {
        question: 'Comment choisir entre une peinture satinée et une peinture mate à Cugnaux ?',
        answer: "Le choix entre mat et satiné dépend de l'usage de la pièce et du rendu souhaité. La peinture mate offre un aspect velouté élégant, idéal pour les chambres et séjours, mais elle est plus sensible aux traces. La peinture satinée, légèrement brillante, est plus résistante aux frottements et lavable, ce qui la rend parfaite pour les pièces de passage, cuisines et salles de bain. Nous vous conseillons sur place en fonction de vos contraintes et de vos préférences esthétiques.",
      },
    ],
  },
  {
    slug: 'lespinasse',
    name: 'Lespinasse',
    distance: '3 km',
    travelTime: '5 minutes',
    mapQuery: 'Lespinasse+31150+Haute-Garonne+France',
    nearbyZones: ['gagnac-sur-garonne', 'saint-jory', 'fonbeauzard', 'castelginest'],
    intro: "Lespinasse, commune voisine de Fenouillet, compte environ 2 600 habitants. Située en bordure de Garonne, cette commune résidentielle allie maisons individuelles récentes et quelques propriétés plus anciennes nécessitant des travaux de rénovation réguliers.",
    specificInfo: "Le tissu pavillonnaire de Lespinasse s'est principalement développé entre 2000 et 2015. Les constructions récentes en parpaing enduit présentent des façades qui commencent à nécessiter un premier ravalement. Les maisons proches de la Garonne peuvent présenter des problématiques d'humidité nécessitant un traitement adapté avant mise en peinture.",
    paragraphs: [
      "À 3 km de notre atelier, Lespinasse est une commune que nous connaissons parfaitement. Nous intervenons régulièrement dans les lotissements récents pour des travaux de personnalisation intérieure et de premiers ravalements de façade.",
      "Les propriétaires de Lespinasse apprécient notre réactivité : en cas de besoin urgent, comme un dégât des eaux nécessitant une remise en peinture, nous pouvons intervenir très rapidement grâce à notre proximité.",
    ],
    sections: [
      {
        heading: 'Peinture intérieure à Lespinasse : personnaliser son logement',
        paragraphs: [
          "Les maisons de Lespinasse, souvent livrées avec des finitions standard par les promoteurs, offrent un potentiel de personnalisation important. Un changement de couleurs, l'ajout d'un mur d'accent ou le passage d'une peinture mate à satinée transforment radicalement l'atmosphère d'un intérieur. Nous accompagnons les propriétaires dans ces choix décoratifs en proposant des nuanciers adaptés à chaque pièce.",
          "Pour les maisons plus anciennes situées dans le bourg, nous réalisons des diagnostics complets avant intervention. Les murs en brique ou en pierre enduite peuvent masquer des problèmes d'humidité remontante qu'il est essentiel de traiter avant d'appliquer toute peinture de finition.",
        ],
      },
      {
        heading: 'Façades et environnement à Lespinasse',
        paragraphs: [
          "La proximité de la Garonne influence l'état des façades à Lespinasse. L'humidité ambiante favorise le développement d'algues et de mousses, particulièrement sur les façades orientées au nord. Un nettoyage haute pression suivi d'un traitement algicide et d'une peinture hydrofuge permet de protéger durablement les façades.",
          "Nous utilisons des peintures de façade microporeuses qui laissent respirer les murs tout en les protégeant de la pluie. Ce choix technique est particulièrement important pour les constructions proches de la zone inondable où les murs doivent pouvoir sécher efficacement après une période d'humidité.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Combien coûte un ravalement de façade à Lespinasse ?',
        answer: "Pour une maison individuelle de plain-pied avec environ 120 m² de façade, comptez entre 4 000 et 7 000 € selon l'état des murs et le type de finition choisi. Le devis est gratuit et détaillé.",
      },
      {
        question: 'Intervenez-vous rapidement à Lespinasse ?',
        answer: "Oui, Lespinasse est à seulement 3 km de notre atelier de Fenouillet. Nous pouvons être sur place en 5 minutes pour un rendez-vous ou une intervention urgente.",
      },
      {
        question: 'Proposez-vous des peintures anti-humidité à Lespinasse ?',
        answer: "Absolument. Compte tenu de la proximité de la Garonne, nous proposons des solutions anti-humidité adaptées : peintures hydrofuges, traitements anti-condensation et enduits respirants pour les murs sujets à l'humidité.",
      },
    ],
  },
  {
    slug: 'pechbonnieu',
    name: 'Pechbonnieu',
    distance: '7 km',
    travelTime: '12 minutes',
    mapQuery: 'Pechbonnieu+31140+Haute-Garonne+France',
    nearbyZones: ['saint-loup-cammas', 'saint-genies-bellevue', 'launaguet', 'gratentour'],
    intro: "Pechbonnieu est une commune résidentielle d'environ 4 400 habitants, appréciée pour son cadre verdoyant et ses lotissements familiaux. Le parc immobilier se compose principalement de maisons individuelles avec jardin, typiques de la deuxième couronne toulousaine.",
    specificInfo: "Les constructions de Pechbonnieu datent pour beaucoup des années 1980-2000. Ces maisons, souvent en parpaing avec enduit de façade, arrivent à un âge où le ravalement devient nécessaire. Les intérieurs, avec leurs cloisons en plaques de plâtre, se prêtent bien aux travaux de rénovation et de modernisation par la peinture.",
    paragraphs: [
      "Pechbonnieu, accessible en 12 minutes depuis Fenouillet, fait partie de notre zone d'intervention privilégiée. Les habitants de cette commune résidentielle nous sollicitent fréquemment pour des travaux de rafraîchissement complets lors de l'achat d'un bien ou pour moderniser leur décoration.",
      "La commune étant principalement composée de maisons individuelles, nous réalisons aussi bien des travaux intérieurs que des ravalements de façade. Les lotissements des années 90, comme ceux du quartier de la Peyrolade, nécessitent aujourd'hui leurs premiers gros travaux d'entretien extérieur.",
    ],
    sections: [
      {
        heading: 'Rénover sa maison à Pechbonnieu',
        paragraphs: [
          "Les maisons de Pechbonnieu offrent généralement des volumes intérieurs confortables. Les pièces de vie spacieuses, souvent ouvertes sur le jardin, bénéficient d'une bonne luminosité qui met en valeur les couleurs choisies. Nous conseillons nos clients sur les teintes les mieux adaptées en fonction de l'exposition et de l'ambiance souhaitée.",
          "Les chambres sous combles, fréquentes dans les maisons à étage de Pechbonnieu, présentent des contraintes spécifiques : sous-pentes, velux, poutres apparentes. Notre expérience de ces configurations nous permet de proposer des solutions esthétiques et pratiques, comme la mise en valeur des charpentes par un contraste de couleurs.",
        ],
      },
      {
        heading: 'Entretien des façades dans les lotissements de Pechbonnieu',
        paragraphs: [
          "Après 25 à 30 ans, les façades des lotissements de Pechbonnieu montrent des signes d'usure : micro-fissures, farinage, verdissement. Un ravalement complet comprenant le nettoyage, la réparation des fissures et l'application d'une peinture de façade de qualité redonne une seconde jeunesse à votre maison pour 15 à 20 ans.",
          "La plupart des règlements de lotissement à Pechbonnieu imposent des teintes harmonisées. Nous connaissons ces contraintes et vous orientons vers des coloris conformes tout en proposant des nuances qui personnalisent votre façade. Une déclaration préalable en mairie peut être nécessaire : nous vous accompagnons dans cette démarche.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Faut-il une autorisation pour ravaler sa façade à Pechbonnieu ?',
        answer: "En général, un ravalement de façade nécessite une déclaration préalable de travaux en mairie de Pechbonnieu. Nous pouvons vous accompagner dans cette démarche et nous assurer que les teintes choisies respectent les règles d'urbanisme locales.",
      },
      {
        question: 'Quel délai pour des travaux de peinture à Pechbonnieu ?',
        answer: "Nous pouvons généralement commencer les travaux sous 7 à 14 jours après acceptation du devis. Pour un chantier complet (intérieur + façade), prévoyez 2 à 3 semaines de travaux selon la surface.",
      },
      {
        question: 'Peignez-vous les clôtures et portails à Pechbonnieu ?',
        answer: "Oui, nous réalisons la peinture et la lasure de tous types de clôtures, portails, volets et menuiseries extérieures. C'est un complément idéal au ravalement de façade pour redonner un aspect neuf à l'ensemble de votre propriété.",
      },
    ],
  },
  {
    slug: 'saint-loup-cammas',
    name: 'Saint-Loup-Cammas',
    distance: '7 km',
    travelTime: '12 minutes',
    mapQuery: 'Saint-Loup-Cammas+31140+Haute-Garonne+France',
    nearbyZones: ['pechbonnieu', 'saint-genies-bellevue', 'launaguet', 'castelginest'],
    intro: "Saint-Loup-Cammas est un village résidentiel d'environ 1 900 habitants, niché dans un cadre champêtre au nord-est de Toulouse. Son patrimoine bâti mêle maisons de caractère en brique toulousaine et constructions récentes dans les lotissements périphériques.",
    specificInfo: "Le village conserve un noyau ancien avec des bâtisses en brique et en pierre qui nécessitent un savoir-faire spécifique en matière de peinture et de ravalement. Les enduits à la chaux et les badigeons traditionnels y côtoient les constructions modernes en parpaing enduit.",
    paragraphs: [
      "Saint-Loup-Cammas séduit par son ambiance villageoise préservée. Les propriétaires de cette commune sont souvent attachés au caractère de leur maison et recherchent un artisan peintre capable de respecter l'authenticité des matériaux anciens tout en apportant une touche de modernité.",
      "Nous intervenons régulièrement à Saint-Loup-Cammas pour des travaux de rénovation intérieure dans les maisons anciennes du bourg et pour des ravalements dans les lotissements plus récents. Notre connaissance des techniques traditionnelles (badigeon, chaux, patine) est un atout pour les propriétés de caractère.",
    ],
    sections: [
      {
        heading: 'Restaurer le charme des maisons anciennes de Saint-Loup-Cammas',
        paragraphs: [
          "Les maisons en brique toulousaine du cœur de village méritent une attention particulière. La brique, matériau noble et vivant, doit respirer. Nous utilisons des peintures minérales et des enduits à la chaux qui préservent les échanges hygrométriques du mur tout en offrant un rendu esthétique soigné.",
          "Pour les intérieurs de ces maisons anciennes, les murs irréguliers en brique ou en torchis peuvent être mis en valeur par des enduits décoratifs ou des peintures à effet. Nous proposons également le décapage et la remise à nu de briques intérieures pour un style loft industriel très recherché.",
        ],
      },
      {
        heading: 'Peinture et rénovation dans les lotissements de Saint-Loup-Cammas',
        paragraphs: [
          "Les lotissements récents de Saint-Loup-Cammas proposent des maisons aux standards actuels. Les travaux de peinture y sont principalement motivés par l'envie de personnaliser les finitions standard ou de moderniser une décoration datée. Nous proposons des prestations sur mesure adaptées à chaque projet.",
          "Les extérieurs de ces maisons récentes bénéficient de notre expertise en peinture de façade. Un traitement préventif anti-mousse et l'application d'une peinture de qualité protègent votre investissement pour de nombreuses années.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Savez-vous travailler la chaux pour les maisons anciennes de Saint-Loup-Cammas ?',
        answer: "Oui, nous maîtrisons les techniques traditionnelles à la chaux : badigeon, enduit, patine. Ces finitions sont idéales pour les maisons en brique ou en pierre de Saint-Loup-Cammas car elles laissent respirer les murs tout en les protégeant.",
      },
      {
        question: 'Quel est le tarif pour peindre une maison ancienne à Saint-Loup-Cammas ?',
        answer: "Le tarif dépend fortement de l'état des supports et de la préparation nécessaire. Pour une maison ancienne, la préparation (rebouchage, enduit, traitement) peut représenter 50% du budget total. Comptez entre 25 et 45 €/m² selon les travaux nécessaires. Le devis sur place est gratuit.",
      },
      {
        question: 'Intervenez-vous le week-end à Saint-Loup-Cammas ?',
        answer: "Nos chantiers se déroulent du lundi au vendredi. Cependant, nous pouvons organiser les rendez-vous de devis le samedi matin sur demande pour les habitants de Saint-Loup-Cammas qui travaillent en semaine.",
      },
    ],
  },
  {
    slug: 'saint-genies-bellevue',
    name: 'Saint-Geniès-Bellevue',
    distance: '7 km',
    travelTime: '12 minutes',
    mapQuery: 'Saint-Geniès-Bellevue+31180+Haute-Garonne+France',
    nearbyZones: ['pechbonnieu', 'saint-loup-cammas', 'launaguet', 'lunion'],
    intro: "Saint-Geniès-Bellevue, commune de 2 200 habitants perchée sur les coteaux au nord-est de Toulouse, offre de belles vues sur la chaîne des Pyrénées. Son parc immobilier mêle propriétés de standing sur les hauteurs et maisons familiales dans les lotissements.",
    specificInfo: "L'exposition aux vents et l'altitude légèrement plus élevée que la plaine de Fenouillet soumettent les façades de Saint-Geniès-Bellevue à des conditions climatiques parfois rudes. Les écarts de température et l'ensoleillement important accélèrent le vieillissement des enduits de façade.",
    paragraphs: [
      "Les propriétaires de Saint-Geniès-Bellevue sont souvent exigeants en matière de finitions, leur commune étant réputée pour la qualité de son cadre de vie. Nous répondons à cette exigence par un travail soigné et des conseils personnalisés sur le choix des teintes et des finitions.",
      "La diversité du bâti, des villas contemporaines aux maisons traditionnelles, nous permet de mettre en œuvre l'ensemble de nos compétences techniques et décoratives.",
    ],
    sections: [
      {
        heading: 'Embellir les intérieurs à Saint-Geniès-Bellevue',
        paragraphs: [
          "Les maisons de Saint-Geniès-Bellevue disposent souvent de pièces lumineuses avec de grandes baies vitrées offrant des vues panoramiques. Cette luminosité exceptionnelle est un atout à exploiter dans le choix des couleurs : des teintes claires et douces subliment la lumière naturelle, tandis que des couleurs plus soutenues peuvent créer des ambiances chaleureuses dans les pièces en retrait.",
          "Les villas de standing du coteau intègrent souvent des matériaux nobles (pierre, bois, fer forgé) que nous savons mettre en valeur par des traitements adaptés : lasure sur bois, peinture ferronnerie, enduit décoratif sur pierre.",
        ],
      },
      {
        heading: 'Protection des façades sur les coteaux de Saint-Geniès-Bellevue',
        paragraphs: [
          "L'exposition des façades sud et ouest aux vents dominants et au soleil intense nécessite l'utilisation de peintures de façade haute résistance. Nous recommandons des systèmes de peinture pliolite ou siloxane qui offrent une excellente tenue dans le temps face aux UV et aux intempéries.",
          "Les propriétés sur les hauteurs de Saint-Geniès-Bellevue présentent parfois des accès difficiles pour les échafaudages. Nous évaluons systématiquement les contraintes d'accès lors du devis pour vous proposer une solution technique et un tarif adaptés.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Les façades s\'usent-elles plus vite à Saint-Geniès-Bellevue ?',
        answer: "Les façades exposées au sud et à l'ouest sur les coteaux subissent effectivement un ensoleillement plus intense et des vents plus soutenus. Nous recommandons des peintures de façade haute résistance UV avec une durée de vie de 15 à 20 ans.",
      },
      {
        question: 'Proposez-vous des enduits décoratifs à Saint-Geniès-Bellevue ?',
        answer: "Oui, nous proposons une gamme d'enduits décoratifs (taloché, gratté, projeté) et de peintures à effet (béton ciré, chaux, stuc) pour des intérieurs haut de gamme à la hauteur du cadre de vie de Saint-Geniès-Bellevue.",
      },
      {
        question: 'Pouvez-vous peindre une façade en pierre à Saint-Geniès-Bellevue ?',
        answer: "Oui. Pour les façades en pierre, nous proposons soit un ravivage par nettoyage et hydrofuge transparent (conservation de l'aspect pierre), soit un badigeon à la chaux pour une protection tout en préservant le caractère du matériau.",
      },
    ],
  },
  {
    slug: 'saint-jory',
    name: 'Saint-Jory',
    distance: '8 km',
    travelTime: '12 minutes',
    mapQuery: 'Saint-Jory+31790+Haute-Garonne+France',
    nearbyZones: ['lespinasse', 'gagnac-sur-garonne', 'bruguieres', 'gratentour'],
    intro: "Saint-Jory est une commune dynamique de 5 700 habitants située au nord de l'agglomération toulousaine. Son développement rapide ces dernières années a généré de nombreux lotissements neufs qui côtoient un centre-village traditionnel en brique.",
    specificInfo: "La forte croissance de Saint-Jory a entraîné la construction de nombreux programmes immobiliers ces 15 dernières années. Ces maisons récentes nécessitent progressivement leurs premiers travaux de personnalisation et d'entretien. Le centre ancien, avec ses maisons en brique rose, offre un patrimoine architectural typique de la région.",
    paragraphs: [
      "Saint-Jory est une commune que nous connaissons bien, accessible en 12 minutes par la D4. Nous y réalisons des chantiers variés allant du simple rafraîchissement d'une pièce à la rénovation complète d'une maison ancienne du bourg.",
      "Les nouveaux habitants de Saint-Jory, nombreux ces dernières années, nous contactent souvent pour personnaliser leur maison neuve : changement de couleurs, création de murs d'accent, mise en peinture de placards et d'éléments de menuiserie intérieure.",
    ],
    sections: [
      {
        heading: 'Peinture et personnalisation des maisons neuves à Saint-Jory',
        paragraphs: [
          "Les maisons neuves de Saint-Jory sont souvent livrées avec une peinture blanche standard sur l'ensemble des murs. Nos clients souhaitent apporter de la personnalité à leur intérieur par le choix de couleurs adaptées à chaque espace. Nous réalisons des mises en couleur complètes avec des peintures de qualité professionnelle qui offrent un rendu supérieur aux peintures grand public.",
          "Pour les cuisines et salles de bain, nous proposons des peintures spécifiques résistantes à l'humidité et aux projections de graisse. Ces peintures lessivables conservent leur aspect neuf pendant de longues années malgré les sollicitations quotidiennes.",
        ],
      },
      {
        heading: 'Rénovation du bâti ancien au centre de Saint-Jory',
        paragraphs: [
          "Le centre historique de Saint-Jory recèle de belles maisons en brique toulousaine qui méritent une rénovation respectueuse de leur caractère. Nous intervenons dans ces bâtisses pour des travaux de peinture intérieure en tenant compte des contraintes du bâti ancien : murs épais, plafonds hauts, menuiseries d'origine.",
          "Les façades en brique du bourg de Saint-Jory peuvent être traitées de différentes manières : nettoyage et hydrofuge pour conserver l'aspect brique, badigeon à la chaux pour une teinte uniforme, ou peinture de façade minérale pour les murs déjà enduits. Nous vous conseillons la solution la plus adaptée à votre maison.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peignez-vous les maisons neuves à Saint-Jory ?',
        answer: "Oui, c'est même l'une de nos interventions les plus fréquentes à Saint-Jory. Nous personnalisons les intérieurs des maisons neuves avec des couleurs et des finitions de qualité supérieure aux peintures standard des constructeurs.",
      },
      {
        question: 'Quel est le coût pour repeindre un séjour à Saint-Jory ?',
        answer: "Pour un séjour de 30 m² (murs et plafond), comptez entre 800 et 1 400 € selon l'état des supports et la finition choisie. Ce tarif inclut la protection des sols, la préparation des murs et deux couches de peinture de qualité professionnelle.",
      },
      {
        question: 'Faites-vous des devis gratuits à Saint-Jory ?',
        answer: "Oui, nous nous déplaçons gratuitement à Saint-Jory pour évaluer vos travaux et vous remettre un devis détaillé sous 48h. Le rendez-vous de devis nous permet de voir l'état réel des supports et de vous conseiller au mieux.",
      },
    ],
  },
  {
    slug: 'mondonville',
    name: 'Mondonville',
    distance: '8 km',
    travelTime: '14 minutes',
    mapQuery: 'Mondonville+31700+Haute-Garonne+France',
    nearbyZones: ['aussonne', 'cornebarrieu', 'beauzelle', 'seilh'],
    intro: "Mondonville est une commune résidentielle de près de 5 000 habitants, à l'ouest de l'agglomération toulousaine. Son cadre verdoyant et ses lotissements familiaux attirent de nombreuses familles recherchant un compromis entre nature et proximité de Toulouse.",
    specificInfo: "Le développement de Mondonville s'est accéléré depuis les années 2000 avec la création de nombreux lotissements. Les maisons y sont généralement spacieuses avec de beaux volumes intérieurs. Les façades en enduit clair sont caractéristiques de la commune.",
    paragraphs: [
      "Mondonville est accessible en 14 minutes depuis notre atelier de Fenouillet, via Aussonne. Nous y intervenons pour des travaux de peinture intérieure et extérieure dans les lotissements résidentiels.",
      "Les propriétaires de Mondonville recherchent souvent des prestations de qualité pour valoriser leur bien immobilier dans ce secteur prisé. Nous proposons des finitions soignées et des conseils en décoration adaptés à chaque projet.",
    ],
    sections: [
      {
        heading: 'Peinture intérieure à Mondonville : optimiser les volumes',
        paragraphs: [
          "Les maisons de Mondonville disposent souvent de beaux volumes avec des plafonds cathédrale ou des mezzanines. Ces configurations nécessitent un équipement adapté (échafaudages, perches télescopiques) et un savoir-faire pour obtenir un résultat régulier et homogène sur de grandes surfaces.",
          "Nous accompagnons les propriétaires de Mondonville dans le choix des couleurs en tenant compte de la luminosité de chaque pièce. Les grandes baies vitrées orientées sud, fréquentes dans les constructions récentes, créent des conditions de lumière particulières que nous prenons en compte dans nos recommandations.",
        ],
      },
      {
        heading: 'Entretien des façades à Mondonville',
        paragraphs: [
          "Les façades claires des maisons de Mondonville se salissent plus rapidement que les teintes foncées. Nous proposons un nettoyage régulier et l'application de peintures anti-salissures qui maintiennent l'aspect propre de votre façade plus longtemps.",
          "Pour les propriétaires souhaitant changer la teinte de leur façade, nous vérifions au préalable les contraintes du règlement de lotissement et du PLU de Mondonville afin de vous proposer des couleurs conformes.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous dans tous les lotissements de Mondonville ?',
        answer: "Oui, nous intervenons dans l'ensemble de la commune de Mondonville, que ce soit dans les lotissements récents ou dans le centre du village. Le déplacement est inclus dans nos tarifs.",
      },
      {
        question: 'Combien de temps pour peindre une maison de 4 chambres à Mondonville ?',
        answer: "Pour une maison complète (séjour, cuisine, 4 chambres, couloirs), comptez 8 à 12 jours ouvrés selon l'état des supports. Nous organisons le chantier pièce par pièce pour vous permettre de continuer à vivre dans votre maison.",
      },
      {
        question: 'Proposez-vous des couleurs tendance pour les intérieurs à Mondonville ?',
        answer: "Oui, nous vous présentons les tendances actuelles lors du rendez-vous de devis : verts sauge, bleus profonds, terracotta, et teintes naturelles sont très demandés. Nous vous conseillons en fonction de votre mobilier et de la luminosité de vos pièces.",
      },
    ],
  },
  {
    slug: 'montrabe',
    name: 'Montrabé',
    distance: '10 km',
    travelTime: '18 minutes',
    mapQuery: 'Montrabé+31850+Haute-Garonne+France',
    nearbyZones: ['lunion', 'saint-genies-bellevue', 'balma', 'pin-balma'],
    intro: "Montrabé, commune résidentielle d'environ 3 800 habitants, est réputée pour son calme et son cadre de vie privilégié à l'est de Toulouse. Les propriétés y sont souvent spacieuses, entourées de jardins arborés.",
    specificInfo: "Montrabé se distingue par un habitat pavillonnaire de qualité, avec de nombreuses maisons des années 1970-1990 qui nécessitent aujourd'hui des travaux de rénovation. Les propriétés de standing y sont fréquentes et demandent des prestations de peinture haut de gamme.",
    paragraphs: [
      "Montrabé fait partie de notre zone d'intervention à 18 minutes de Fenouillet. Les habitants de cette commune résidentielle prisée nous confient des chantiers où la qualité des finitions est primordiale.",
      "Nous intervenons à Montrabé pour des rénovations complètes de maisons des années 80, des rafraîchissements de villas contemporaines et des ravalements de façade exigeants.",
    ],
    sections: [
      {
        heading: 'Rénovation intérieure haut de gamme à Montrabé',
        paragraphs: [
          "Les maisons de Montrabé offrent des superficies généreuses qui permettent de jouer avec les couleurs et les matières. Nous proposons des finitions premium : peinture laquée pour les boiseries, enduits décoratifs pour les murs de séjour, peinture velours pour les chambres.",
          "La rénovation des maisons des années 70-80 à Montrabé peut inclure le décollage d'anciens papiers peints, le traitement de fissures structurelles et la mise en peinture de plafonds avec moulures. Nous maîtrisons ces techniques pour redonner tout leur éclat à ces propriétés de caractère.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Rénovez-vous les maisons des années 80 à Montrabé ?',
        answer: "Oui, c'est l'une de nos spécialités. Nous rénovons les intérieurs des maisons des années 70-80 : décollage de papiers peints, traitement des fissures, modernisation par la couleur. Le résultat transforme complètement l'atmosphère de la maison.",
      },
      {
        question: 'Proposez-vous des peintures écologiques à Montrabé ?',
        answer: "Oui, nous proposons des peintures à faible émission de COV et des peintures biosourcées pour les clients soucieux de la qualité de l'air intérieur. Ces peintures sont particulièrement recommandées pour les chambres d'enfants et les pièces de vie.",
      },
      {
        question: 'Quel budget pour une rénovation complète de peinture à Montrabé ?',
        answer: "Pour une maison de 120 m² habitables avec murs en état moyen, comptez entre 6 000 et 10 000 € pour une rénovation intérieure complète (toutes les pièces, murs et plafonds). Le devis détaillé est gratuit.",
      },
    ],
  },
  {
    slug: 'castelmaurou',
    name: 'Castelmaurou',
    distance: '8 km',
    travelTime: '14 minutes',
    mapQuery: 'Castelmaurou+31180+Haute-Garonne+France',
    nearbyZones: ['saint-genies-bellevue', 'lunion', 'montrabe', 'launaguet'],
    intro: "Castelmaurou est une commune de 4 200 habitants au nord-est de Toulouse. Perchée sur les coteaux, elle offre un panorama sur les Pyrénées et un cadre de vie très apprécié des familles. Le tissu pavillonnaire s'y est développé régulièrement depuis les années 1980.",
    specificInfo: "La situation en coteau de Castelmaurou expose les façades à des conditions climatiques variées. Les maisons orientées plein sud subissent un ensoleillement intense tandis que les faces nord sont sujettes au développement de mousses et lichens.",
    paragraphs: [
      "Castelmaurou est une commune que nous desservons en 14 minutes depuis Fenouillet. Nous y intervenons régulièrement pour des travaux de peinture intérieure et des ravalements de façade.",
      "Les propriétaires de Castelmaurou apprécient notre expertise sur les problématiques spécifiques aux maisons en coteau : gestion de l'humidité, protection renforcée des façades exposées, mise en valeur des vues panoramiques par le choix des couleurs intérieures.",
    ],
    sections: [
      {
        heading: 'Protéger et embellir les façades de Castelmaurou',
        paragraphs: [
          "Les façades de Castelmaurou sont soumises à des contraintes climatiques marquées. Les murs orientés sud-ouest reçoivent de plein fouet les intempéries et le soleil, ce qui accélère le vieillissement des peintures. Nous utilisons des systèmes de ravalement adaptés : peintures siloxane hydrophobes et micro-poreuses pour une protection optimale.",
          "Les maisons en crête de coteau peuvent être battues par les vents, ce qui dessèche les enduits et provoque des fissures de retrait. Nous traitons systématiquement ces fissures avec des résines souples avant l'application de la peinture de finition.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Les façades sont-elles plus exposées à Castelmaurou ?',
        answer: "La position en coteau de Castelmaurou expose effectivement certaines façades à des conditions plus rudes (vent, ensoleillement). Nous adaptons nos préconisations en conséquence avec des peintures haute résistance.",
      },
      {
        question: 'Quel est le prix d\'un ravalement à Castelmaurou ?',
        answer: "Pour une maison individuelle standard (100-150 m² de façade), le ravalement complet se situe entre 5 000 et 9 000 € selon l'état des supports, la hauteur et l'accessibilité. Le devis est établi gratuitement sur place.",
      },
      {
        question: 'Peignez-vous les terrasses et balcons à Castelmaurou ?',
        answer: "Oui, nous appliquons des peintures de sol et des résines d'étanchéité pour terrasses et balcons. Ces revêtements techniques protègent le support tout en offrant un aspect propre et antidérapant.",
      },
    ],
  },
  {
    slug: 'saint-jean',
    name: 'Saint-Jean',
    distance: '9 km',
    travelTime: '15 minutes',
    mapQuery: 'Saint-Jean+31240+Haute-Garonne+France',
    nearbyZones: ['lunion', 'balma', 'montrabe', 'castelmaurou'],
    intro: "Saint-Jean est une commune de plus de 8 400 habitants, en forte croissance, située à l'est de Toulouse. Son développement urbain soutenu crée une demande constante en travaux de peinture, aussi bien dans le neuf que dans la rénovation.",
    specificInfo: "Saint-Jean a connu un boom immobilier considérable, avec de nombreux programmes neufs (maisons et appartements). Le centre historique conserve toutefois un patrimoine bâti ancien qui contraste avec les quartiers récents.",
    paragraphs: [
      "À 15 minutes de Fenouillet, Saint-Jean fait partie de notre zone d'intervention. La forte dynamique immobilière de cette commune génère des besoins importants en peinture, du neuf à la rénovation.",
      "Nous intervenons à Saint-Jean aussi bien chez les particuliers que dans les copropriétés récentes où les parties communes nécessitent un entretien régulier.",
    ],
    sections: [
      {
        heading: 'Peinture dans les logements neufs et rénovés à Saint-Jean',
        paragraphs: [
          "Le marché de la revente est actif à Saint-Jean, et de nombreux acquéreurs nous contactent pour personnaliser leur nouveau logement. Un changement complet de couleurs permet de s'approprier un espace et de l'adapter à son style de vie.",
          "Pour les appartements en copropriété, nous travaillons en respectant les contraintes des immeubles : horaires de chantier, protection des parties communes, utilisation de peintures à faible odeur pour le confort des voisins.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peignez-vous les appartements neufs à Saint-Jean ?',
        answer: "Oui, nous personnalisons régulièrement les intérieurs des appartements neufs à Saint-Jean. Nous apportons des finitions supérieures aux peintures standard du promoteur, avec un choix de couleurs et de finitions adapté à vos goûts.",
      },
      {
        question: 'Travaillez-vous dans les copropriétés de Saint-Jean ?',
        answer: "Oui, nous intervenons dans les parties privatives des copropriétés et pouvons également répondre aux appels d'offres des syndics pour les parties communes (cages d'escalier, halls, parkings).",
      },
      {
        question: 'Quel délai pour un devis à Saint-Jean ?',
        answer: "Nous pouvons nous déplacer à Saint-Jean sous 48 à 72 heures pour évaluer vos travaux. Le devis détaillé vous est remis dans les 2 jours suivant la visite.",
      },
    ],
  },
  {
    slug: 'rouffiac-tolosan',
    name: 'Rouffiac-Tolosan',
    distance: '10 km',
    travelTime: '17 minutes',
    mapQuery: 'Rouffiac-Tolosan+31180+Haute-Garonne+France',
    nearbyZones: ['castelmaurou', 'saint-genies-bellevue', 'lunion', 'montrabe'],
    intro: "Rouffiac-Tolosan est un village résidentiel de 2 100 habitants niché sur les coteaux au nord-est de Toulouse. Cette commune à taille humaine séduit par son cadre verdoyant et ses propriétés spacieuses.",
    specificInfo: "Le bâti de Rouffiac-Tolosan mêle maisons de maître en brique et constructions contemporaines. Le village a su préserver son caractère rural tout en accueillant de nouveaux résidents dans des lotissements intégrés au paysage.",
    paragraphs: [
      "Rouffiac-Tolosan fait partie de notre rayon d'intervention à 17 minutes de Fenouillet. Nous apprécions la diversité du bâti de cette commune qui nous permet de mettre en œuvre nos compétences aussi bien en rénovation traditionnelle qu'en décoration contemporaine.",
      "Les habitants de Rouffiac-Tolosan sont souvent propriétaires depuis longtemps et entretiennent leur bien avec soin. Ils recherchent un artisan peintre fiable et soigneux pour des travaux d'entretien régulier ou de rénovation ponctuelle.",
    ],
    sections: [
      {
        heading: 'Restauration et peinture du bâti traditionnel à Rouffiac-Tolosan',
        paragraphs: [
          "Les maisons de caractère de Rouffiac-Tolosan, avec leurs murs en brique et leurs menuiseries en bois, demandent un entretien régulier. La mise en peinture des volets, fenêtres et portails en bois est un chantier récurrent que nous réalisons avec des lasures et peintures extérieures haute durabilité.",
          "Pour les intérieurs des maisons anciennes, nous proposons des techniques de peinture qui respectent le caractère du bâti : enduits traditionnels, badigeons à la chaux, peintures à effets matières pour créer des ambiances chaleureuses dans les pièces de réception.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peignez-vous les volets en bois à Rouffiac-Tolosan ?',
        answer: "Oui, la peinture de volets en bois est l'une de nos prestations courantes. Nous décapons, poncent, traitons et repeignons vos volets avec des peintures microporeuses qui protègent le bois tout en le laissant respirer. Comptez 80 à 150 € par volet selon la taille et l'état.",
      },
      {
        question: 'Intervenez-vous pour de petits travaux à Rouffiac-Tolosan ?',
        answer: "Oui, nous acceptons les petits chantiers : une pièce à rafraîchir, un plafond à repeindre, quelques volets à rénover. Aucun chantier n'est trop petit pour mériter un travail soigné.",
      },
      {
        question: 'Comment préparez-vous un devis à Rouffiac-Tolosan ?',
        answer: "Nous nous déplaçons gratuitement à Rouffiac-Tolosan pour mesurer les surfaces, évaluer l'état des supports et comprendre vos attentes. Le devis détaillé, poste par poste, vous est remis sous 48 heures.",
      },
    ],
  },
  {
    slug: 'pin-balma',
    name: 'Pin-Balma',
    distance: '10 km',
    travelTime: '18 minutes',
    mapQuery: 'Pin-Balma+31130+Haute-Garonne+France',
    nearbyZones: ['balma', 'montrabe', 'lunion', 'quint-fonsegrives'],
    intro: "Pin-Balma est la plus petite commune de Toulouse Métropole avec environ 1 200 habitants. Ce village préservé, entouré de verdure, offre un habitat exclusivement pavillonnaire dans un cadre bucolique.",
    specificInfo: "L'habitat de Pin-Balma est constitué quasi exclusivement de maisons individuelles entourées de grands jardins. Les propriétés y sont souvent spacieuses et bien entretenues, reflétant le caractère résidentiel haut de gamme de la commune.",
    paragraphs: [
      "Pin-Balma, malgré sa petite taille, fait partie de notre zone d'intervention. Les propriétaires de cette commune discrète et prisée nous font confiance pour l'entretien et la rénovation de leur habitat.",
      "Le caractère exclusivement pavillonnaire de Pin-Balma nous amène à réaliser aussi bien des travaux intérieurs que des ravalements de façade et des mises en peinture de menuiseries extérieures.",
    ],
    sections: [
      {
        heading: 'Entretien et valorisation des propriétés de Pin-Balma',
        paragraphs: [
          "Les maisons de Pin-Balma, souvent implantées sur de grandes parcelles, présentent des surfaces de façade conséquentes. Un ravalement complet représente un investissement significatif qu'il est important de bien planifier. Nous proposons des devis détaillés et pouvons échelonner les travaux si nécessaire.",
          "La peinture intérieure de ces maisons spacieuses est l'occasion de créer une décoration harmonieuse pièce par pièce. Nous établissons un plan couleur global qui assure la cohérence de l'ensemble tout en personnalisant chaque espace.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous pour une seule pièce à Pin-Balma ?',
        answer: "Oui, nous intervenons pour tous types de chantiers à Pin-Balma, de la pièce unique à la rénovation complète. Chaque projet est traité avec le même soin et le même professionnalisme.",
      },
      {
        question: 'Quelle peinture pour une véranda à Pin-Balma ?',
        answer: "Pour les vérandas, nous utilisons des peintures résistantes aux UV et aux variations de température. Les structures en aluminium ou en bois nécessitent des traitements différents que nous adaptons au matériau de votre véranda.",
      },
    ],
  },
  {
    slug: 'quint-fonsegrives',
    name: 'Quint-Fonsegrives',
    distance: '12 km',
    travelTime: '20 minutes',
    mapQuery: 'Quint-Fonsegrives+31130+Haute-Garonne+France',
    nearbyZones: ['balma', 'pin-balma', 'montrabe', 'saint-orens-de-gameville'],
    intro: "Quint-Fonsegrives est une commune résidentielle de 5 200 habitants à l'est de Toulouse. Connue pour la qualité de son cadre de vie, elle abrite un habitat diversifié allant des maisons anciennes du village aux résidences contemporaines.",
    specificInfo: "La commune de Quint-Fonsegrives se distingue par un urbanisme maîtrisé qui mêle harmonieusement bâti ancien et constructions récentes. Les deux villages historiques de Quint et de Fonsegrives conservent un charme authentique avec des maisons en brique rose.",
    paragraphs: [
      "Quint-Fonsegrives est accessible en 20 minutes depuis Fenouillet, principalement par la rocade. Nous y intervenons pour des travaux de peinture aussi bien dans le neuf que dans la rénovation de l'habitat ancien.",
      "La double identité de la commune (les villages historiques et les quartiers résidentiels modernes) nous amène à adapter notre approche à chaque type de bâti.",
    ],
    sections: [
      {
        heading: 'Rénovation des maisons de village à Quint-Fonsegrives',
        paragraphs: [
          "Les maisons anciennes de Quint et de Fonsegrives, construites en brique toulousaine, représentent un patrimoine architectural à préserver. Nous utilisons des techniques adaptées à ces matériaux traditionnels pour des résultats durables et esthétiques.",
          "Les plafonds à la française, les murs en brique apparente et les menuiseries en bois massif de ces maisons anciennes demandent un savoir-faire spécifique que nous avons développé au fil de nos chantiers dans la région.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Rénovez-vous les maisons en brique à Quint-Fonsegrives ?',
        answer: "Oui, nous avons l'expérience de la rénovation des maisons en brique toulousaine. Selon vos souhaits, nous pouvons mettre en valeur la brique apparente ou la recouvrir d'un enduit traditionnel à la chaux.",
      },
      {
        question: 'Le déplacement est-il facturé à Quint-Fonsegrives ?',
        answer: "Non, le déplacement est inclus dans nos tarifs pour l'ensemble de notre zone d'intervention, dont Quint-Fonsegrives. Aucun supplément ne sera ajouté à votre devis.",
      },
      {
        question: 'Pouvez-vous peindre un plafond cathédrale à Quint-Fonsegrives ?',
        answer: "Oui, nous disposons de l'équipement nécessaire (échafaudages, nacelles) pour intervenir sur les plafonds hauts et cathédrale. Cette prestation demande un matériel spécifique que nous incluons dans le devis.",
      },
    ],
  },
  {
    slug: 'flourens',
    name: 'Flourens',
    distance: '13 km',
    travelTime: '20 minutes',
    mapQuery: 'Flourens+31130+Haute-Garonne+France',
    nearbyZones: ['pin-balma', 'montrabe', 'quint-fonsegrives', 'balma'],
    intro: "Flourens, commune de 2 200 habitants à l'est de Toulouse, est un village résidentiel au caractère rural préservé. Son habitat pavillonnaire, implanté dans un environnement verdoyant, offre un cadre de vie paisible apprécié des familles.",
    specificInfo: "Flourens a conservé son identité villageoise avec un centre ancien autour de l'église et des lotissements pavillonnaires bien intégrés au paysage. Les constructions datent principalement des années 1990 à 2010.",
    paragraphs: [
      "Flourens fait partie de notre zone d'intervention, accessible en 20 minutes par la rocade est. Les propriétaires de cette commune calme et verdoyante nous sollicitent pour l'entretien régulier de leur habitat.",
      "Nous réalisons à Flourens des travaux variés : rafraîchissement des intérieurs, ravalement de façade, peinture des menuiseries extérieures et des dépendances.",
    ],
    sections: [
      {
        heading: 'Peinture et entretien des maisons de Flourens',
        paragraphs: [
          "Les maisons de Flourens, souvent entourées de jardins, sont exposées à un environnement humide et ombragé qui favorise le développement de mousses sur les façades nord. Un traitement anti-mousse régulier suivi d'une peinture de façade hydrofuge préserve l'aspect de votre maison.",
          "Les dépendances (garages, abris de jardin, murets) font partie intégrante de l'esthétique de la propriété. Nous proposons leur mise en peinture en complément des travaux principaux pour un résultat homogène sur l'ensemble du bien.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peignez-vous les abris de jardin et dépendances à Flourens ?',
        answer: "Oui, nous réalisons la peinture et la lasure de tous types de dépendances : garages, abris de jardin, clôtures, murets. C'est un complément idéal pour harmoniser l'ensemble de votre propriété.",
      },
      {
        question: 'Quel traitement contre les mousses sur les façades à Flourens ?',
        answer: "Nous appliquons un traitement anti-mousse professionnel à action lente qui élimine durablement les mousses, algues et lichens. Ce traitement peut être suivi d'une peinture de façade hydrofuge pour une protection longue durée.",
      },
    ],
  },
  {
    slug: 'pibrac',
    name: 'Pibrac',
    distance: '13 km',
    travelTime: '20 minutes',
    mapQuery: 'Pibrac+31820+Haute-Garonne+France',
    nearbyZones: ['colomiers', 'cornebarrieu', 'leguevin', 'plaisance-du-touch'],
    intro: "Pibrac est une commune de 8 600 habitants à l'ouest de Toulouse, connue pour son château et sa forêt. Le cadre de vie y est particulièrement agréable avec un mélange d'habitat ancien dans le bourg et de lotissements résidentiels en périphérie.",
    specificInfo: "Le centre historique de Pibrac abrite de belles demeures en brique rose et en pierre. Les quartiers résidentiels environnants proposent un habitat pavillonnaire des années 1980 à aujourd'hui. La commune attire une population exigeante en matière de cadre de vie.",
    paragraphs: [
      "Pibrac est accessible en 20 minutes depuis Fenouillet. Nous y intervenons pour des projets variés, du rafraîchissement d'intérieur à la restauration de façades anciennes en brique.",
      "La diversité architecturale de Pibrac nous permet de mettre en œuvre l'ensemble de notre savoir-faire : techniques modernes pour les constructions récentes et techniques traditionnelles pour le bâti ancien du centre-ville.",
    ],
    sections: [
      {
        heading: 'Valoriser le patrimoine bâti de Pibrac',
        paragraphs: [
          "Le centre de Pibrac recèle des maisons de caractère avec des façades en brique rose, des encadrements en pierre et des menuiseries anciennes. La rénovation de ces éléments architecturaux demande un savoir-faire spécifique et des matériaux adaptés que nous maîtrisons.",
          "Les maisons des lotissements périphériques bénéficient de notre expertise en ravalement de façade et en peinture intérieure contemporaine. Nous proposons des finitions modernes et des couleurs tendance pour moderniser les intérieurs des années 80-90.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Rénovez-vous les façades en brique à Pibrac ?',
        answer: "Oui, nous intervenons sur les façades en brique du centre historique de Pibrac. Nous proposons le nettoyage, le rejointoiement et le traitement hydrofuge pour conserver l'aspect brique, ou l'application d'un enduit à la chaux selon vos préférences.",
      },
      {
        question: 'Peignez-vous les volets et persiennes à Pibrac ?',
        answer: "Oui, nous réalisons la peinture de volets, persiennes et menuiseries extérieures avec des peintures microporeuses haute durabilité. Nous pouvons décaper les anciennes couches, traiter le bois et appliquer la finition de votre choix.",
      },
      {
        question: 'Combien coûte la peinture d\'une chambre à Pibrac ?',
        answer: "Pour une chambre standard de 12 m² (murs et plafond), comptez entre 400 et 700 € selon l'état des supports et la finition choisie. Ce tarif inclut la protection du mobilier, la préparation et l'application de deux couches.",
      },
    ],
  },
  {
    slug: 'plaisance-du-touch',
    name: 'Plaisance-du-Touch',
    distance: '15 km',
    travelTime: '22 minutes',
    mapQuery: 'Plaisance-du-Touch+31830+Haute-Garonne+France',
    nearbyZones: ['tournefeuille', 'colomiers', 'pibrac', 'cugnaux'],
    intro: "Plaisance-du-Touch est une commune dynamique de 18 000 habitants à l'ouest de Toulouse. Son important parc immobilier résidentiel génère une demande constante en travaux de peinture et de rénovation.",
    specificInfo: "Plaisance-du-Touch a connu une urbanisation massive depuis les années 1990, avec de nombreux lotissements et programmes collectifs. La commune compte aussi un centre historique et des quartiers plus anciens qui nécessitent des rénovations régulières.",
    paragraphs: [
      "Plaisance-du-Touch fait partie de notre zone d'intervention élargie, à 22 minutes de Fenouillet par la rocade. La taille de la commune et la diversité de son habitat nous offrent des chantiers variés.",
      "Nous intervenons aussi bien dans les copropriétés du centre que dans les maisons individuelles des lotissements périphériques, en adaptant nos méthodes au type de logement.",
    ],
    sections: [
      {
        heading: 'Peinture résidentielle à Plaisance-du-Touch',
        paragraphs: [
          "Le marché immobilier actif de Plaisance-du-Touch génère de nombreuses demandes de mise en peinture lors des transactions. Vendeurs comme acquéreurs font appel à nos services pour valoriser ou personnaliser leur bien.",
          "Les maisons des lotissements récents présentent des intérieurs standardisés que nos clients souhaitent personnaliser. Nous proposons des mises en couleur complètes avec un accompagnement décoratif pour créer des intérieurs uniques et chaleureux.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous dans tout Plaisance-du-Touch ?',
        answer: "Oui, nous couvrons l'ensemble de la commune de Plaisance-du-Touch, du centre-ville aux lotissements périphériques. Le déplacement est inclus dans nos tarifs sans supplément.",
      },
      {
        question: 'Peignez-vous avant la vente d\'un bien à Plaisance-du-Touch ?',
        answer: "Oui, nous proposons des prestations de home staging par la peinture pour valoriser un bien avant sa mise en vente. Des teintes neutres et lumineuses permettent aux visiteurs de se projeter et peuvent accélérer la vente.",
      },
      {
        question: 'Quel est votre délai d\'intervention à Plaisance-du-Touch ?',
        answer: "Nous pouvons généralement programmer un rendez-vous de devis sous 48h et commencer les travaux sous 10 à 15 jours après acceptation, selon notre planning.",
      },
    ],
  },
  {
    slug: 'ramonville-saint-agne',
    name: 'Ramonville-Saint-Agne',
    distance: '15 km',
    travelTime: '22 minutes',
    mapQuery: 'Ramonville-Saint-Agne+31520+Haute-Garonne+France',
    nearbyZones: ['toulouse', 'saint-orens-de-gameville', 'balma', 'castanet-tolosan'],
    intro: "Ramonville-Saint-Agne est une commune de 13 000 habitants au sud-est de Toulouse, proche du campus universitaire et du canal du Midi. Son parc immobilier diversifié comprend aussi bien des résidences collectives que des maisons individuelles.",
    specificInfo: "La proximité du pôle universitaire et scientifique de Rangueil-Ramonville donne à la commune un caractère dynamique et cosmopolite. Le bâti va des immeubles des années 1970 aux constructions récentes, en passant par des maisons de village dans le centre historique.",
    paragraphs: [
      "Ramonville-Saint-Agne est accessible en 22 minutes par la rocade. Nous y intervenons régulièrement, notamment pour la rénovation des logements lors des changements de locataires et pour les projets de décoration des propriétaires.",
      "La diversité de l'habitat à Ramonville nous amène à intervenir dans des contextes très différents : studios étudiants, appartements familiaux, maisons avec jardin.",
    ],
    sections: [
      {
        heading: 'Rénovation des appartements à Ramonville-Saint-Agne',
        paragraphs: [
          "Le parc locatif important de Ramonville génère des besoins réguliers en remise en peinture entre deux locataires. Nous proposons des prestations rapides et efficaces pour les propriétaires bailleurs : peinture blanche intégrale en 2 à 3 jours pour un T2, avec des peintures résistantes et lessivables adaptées à l'usage locatif.",
          "Pour les propriétaires occupants, nous proposons des projets de décoration plus élaborés avec des couleurs et des finitions personnalisées. La luminosité variable des appartements selon leur orientation nous guide dans le choix des teintes.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Remettez-vous en peinture entre deux locataires à Ramonville ?',
        answer: "Oui, c'est une prestation courante. Pour un appartement T2/T3, nous pouvons réaliser une remise en blanc complète en 2 à 3 jours. Nous utilisons des peintures lessivables et résistantes adaptées à l'usage locatif.",
      },
      {
        question: 'Intervenez-vous dans les résidences universitaires ?',
        answer: "Nous intervenons dans les copropriétés et résidences pour les parties privatives. Pour les résidences universitaires gérées par le CROUS, nous ne sommes pas prestataires mais nous pouvons intervenir dans les logements privés du secteur.",
      },
      {
        question: 'Quel tarif pour un studio à Ramonville ?',
        answer: "Pour la mise en peinture complète d'un studio de 25-30 m² (murs et plafonds), comptez entre 700 et 1 200 € selon l'état des supports. Un simple rafraîchissement sur murs en bon état peut revenir à 500-700 €.",
      },
    ],
  },
  {
    slug: 'castanet-tolosan',
    name: 'Castanet-Tolosan',
    distance: '17 km',
    travelTime: '25 minutes',
    mapQuery: 'Castanet-Tolosan+31320+Haute-Garonne+France',
    nearbyZones: ['ramonville-saint-agne', 'saint-orens-de-gameville', 'quint-fonsegrives'],
    intro: "Castanet-Tolosan est une commune de 13 500 habitants située au sud-est de Toulouse, le long du canal du Midi. Son centre historique animé et ses quartiers résidentiels en font l'une des communes les plus attractives de l'agglomération.",
    specificInfo: "Castanet-Tolosan mêle un centre-bourg commerçant vivant, avec des maisons de ville en brique, et des zones pavillonnaires en expansion. Le marché immobilier y est actif, créant une demande soutenue en travaux de peinture.",
    paragraphs: [
      "Castanet-Tolosan, à 25 minutes de Fenouillet par la rocade, représente la limite sud de notre zone d'intervention. Les habitants de cette commune dynamique nous font confiance pour des travaux de qualité à des tarifs maîtrisés.",
      "Le dynamisme du marché immobilier de Castanet génère des besoins importants en peinture : mise en valeur avant vente, personnalisation après achat, rénovation de biens anciens.",
    ],
    sections: [
      {
        heading: 'Peindre et rénover à Castanet-Tolosan',
        paragraphs: [
          "Le centre-ville de Castanet-Tolosan abrite des maisons de ville mitoyennes en brique rose, souvent sur plusieurs niveaux. La rénovation de ces habitations étroites et profondes demande une organisation rigoureuse pour travailler efficacement dans des espaces parfois exigus, avec des escaliers étroits et des plafonds hauts.",
          "Dans les quartiers résidentiels, les maisons des années 2000-2010 arrivent à l'âge de leur premier rafraîchissement intérieur. Nous proposons des rénovations complètes avec un plan couleur harmonieux pour moderniser ces intérieurs.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous jusqu\'à Castanet-Tolosan depuis Fenouillet ?',
        answer: "Oui, Castanet-Tolosan fait partie de notre zone d'intervention. Le déplacement est inclus dans nos tarifs et l'accès par la rocade est rapide (25 minutes).",
      },
      {
        question: 'Pouvez-vous peindre une cage d\'escalier à Castanet-Tolosan ?',
        answer: "Oui, nous réalisons la peinture de cages d'escalier dans les maisons de ville et les copropriétés. Ces espaces en hauteur nécessitent un équipement adapté (échafaudage d'escalier) que nous maîtrisons parfaitement.",
      },
      {
        question: 'Le devis est-il gratuit à Castanet-Tolosan ?',
        answer: "Oui, nous nous déplaçons gratuitement à Castanet-Tolosan pour évaluer vos travaux et vous remettre un devis détaillé, sans engagement de votre part.",
      },
    ],
  },
  {
    slug: 'villeneuve-tolosane',
    name: 'Villeneuve-Tolosane',
    distance: '16 km',
    travelTime: '22 minutes',
    mapQuery: 'Villeneuve-Tolosane+31270+Haute-Garonne+France',
    nearbyZones: ['cugnaux', 'tournefeuille', 'plaisance-du-touch'],
    intro: "Villeneuve-Tolosane est une commune résidentielle de 9 800 habitants au sud-ouest de Toulouse. Son tissu pavillonnaire dense et ses constructions des années 1980-2000 génèrent des besoins réguliers en rénovation et en peinture.",
    specificInfo: "Villeneuve-Tolosane s'est urbanisée rapidement dans les années 1980-90, créant un parc immobilier homogène de maisons individuelles et de petites copropriétés. Ces constructions atteignent aujourd'hui un âge où la rénovation devient nécessaire.",
    paragraphs: [
      "Villeneuve-Tolosane fait partie de notre zone d'intervention, accessible en 22 minutes par la rocade sud. Nous intervenons dans les nombreux lotissements de la commune pour des ravalements de façade et des rénovations intérieures.",
      "Les propriétaires de Villeneuve-Tolosane, souvent installés depuis l'origine de leur lotissement, souhaitent moderniser leur habitat tout en le valorisant. La peinture est le moyen le plus efficace et le plus économique pour transformer un intérieur daté.",
    ],
    sections: [
      {
        heading: 'Moderniser les intérieurs des années 80-90 à Villeneuve-Tolosane',
        paragraphs: [
          "Les maisons construites dans les années 1980-90 à Villeneuve-Tolosane présentent souvent des intérieurs datés : papiers peints, lambris, peinture jaunie. Nous proposons une rénovation complète comprenant le décollage des papiers peints, le traitement des murs et l'application de peintures modernes aux couleurs actuelles.",
          "Le passage d'un intérieur des années 90 à un style contemporain transforme radicalement le cadre de vie. Des teintes neutres et lumineuses, associées à des murs d'accent colorés, créent des espaces modernes et agréables à vivre.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Décollez-vous les vieux papiers peints à Villeneuve-Tolosane ?',
        answer: "Oui, le décollage de papiers peints fait partie de nos prestations. Nous utilisons une décolleuse vapeur professionnelle pour retirer les papiers, puis nous préparons les murs (enduit, ponçage) avant la mise en peinture.",
      },
      {
        question: 'Combien coûte la rénovation d\'une maison des années 90 à Villeneuve-Tolosane ?',
        answer: "Pour une rénovation complète de peinture d'une maison de 100 m² (toutes pièces, murs et plafonds, incluant décollage papier peint), comptez entre 8 000 et 14 000 € selon l'ampleur de la préparation. Le devis est gratuit et détaillé.",
      },
    ],
  },
  {
    slug: 'leguevin',
    name: 'Léguevin',
    distance: '16 km',
    travelTime: '22 minutes',
    mapQuery: 'Léguevin+31490+Haute-Garonne+France',
    nearbyZones: ['pibrac', 'plaisance-du-touch', 'cornebarrieu', 'colomiers'],
    intro: "Léguevin est une commune de 9 200 habitants située à l'ouest de Toulouse, dans un cadre semi-rural en plein développement. Son attractivité croissante se traduit par de nombreux programmes immobiliers neufs aux côtés d'un bourg traditionnel.",
    specificInfo: "Léguevin combine un centre-village authentique avec des lotissements en expansion constante. La commune attire de nombreuses familles grâce à son cadre de vie et ses équipements. Le bâti neuf côtoie les maisons traditionnelles du Gers voisin.",
    paragraphs: [
      "Léguevin représente la limite ouest de notre zone d'intervention, accessible en 22 minutes. Les habitants de cette commune en croissance nous sollicitent pour des travaux variés, du neuf à la rénovation.",
      "L'afflux de nouveaux résidents à Léguevin crée une demande importante en personnalisation d'intérieurs neufs et en rénovation de maisons anciennes acquises par de nouveaux propriétaires.",
    ],
    sections: [
      {
        heading: 'Peinture et décoration à Léguevin',
        paragraphs: [
          "Les programmes neufs de Léguevin livrent des maisons aux finitions standard que nos clients souhaitent rapidement améliorer. Nous proposons des prestations de personnalisation complètes : choix des couleurs pièce par pièce, finitions soignées, application de peintures de qualité supérieure.",
          "Pour les maisons anciennes du bourg, nous réalisons des rénovations respectueuses du caractère du bâti local. Les enduits traditionnels, les menuiseries en bois et les éléments décoratifs d'époque sont traités avec le plus grand soin.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Le déplacement à Léguevin est-il facturé ?',
        answer: "Non, Léguevin fait partie de notre zone d'intervention et le déplacement est inclus dans nos tarifs. Aucun supplément ne sera ajouté à votre devis.",
      },
      {
        question: 'Pouvez-vous peindre un local professionnel à Léguevin ?',
        answer: "Oui, nous intervenons dans les locaux professionnels et commerciaux de Léguevin. Nous adaptons nos horaires pour minimiser l'impact sur votre activité et utilisons des peintures professionnelles adaptées à chaque usage.",
      },
      {
        question: 'Quel type de peinture pour une cuisine à Léguevin ?',
        answer: "Pour les cuisines, nous recommandons des peintures satinées ou brillantes, lessivables et résistantes aux projections de graisse. Les peintures acryliques de nouvelle génération offrent une excellente résistance tout en séchant rapidement et sans odeur.",
      },
    ],
  },
  {
    slug: 'muret',
    name: 'Muret',
    distance: '20 km',
    travelTime: '25 minutes',
    mapQuery: 'Muret+31600+Haute-Garonne+France',
    nearbyZones: ['cugnaux', 'villeneuve-tolosane', 'plaisance-du-touch'],
    intro: "Muret est une sous-préfecture de la Haute-Garonne comptant 25 000 habitants, située au sud de Toulouse. Deuxième ville du département, elle dispose d'un important parc immobilier diversifié allant du centre historique aux zones résidentielles modernes.",
    specificInfo: "Le centre historique de Muret abrite un patrimoine bâti ancien remarquable : maisons à colombages, hôtels particuliers, façades en brique rose. Les quartiers périphériques sont composés de lotissements pavillonnaires et de résidences collectives construits depuis les années 1970.",
    paragraphs: [
      "Muret marque la limite sud de notre zone d'intervention, accessible en 25 minutes par l'A64. Malgré la distance, nous y réalisons régulièrement des chantiers grâce à la qualité de notre travail reconnue par nos clients.",
      "La taille de Muret et la diversité de son parc immobilier offrent des chantiers de toute nature : du petit rafraîchissement au ravalement de façade en passant par la rénovation complète d'un appartement en centre-ville.",
    ],
    sections: [
      {
        heading: 'Rénover dans le centre historique de Muret',
        paragraphs: [
          "Le centre-ville de Muret abrite des bâtisses de caractère avec des éléments architecturaux remarquables : moulures, corniches, encadrements en pierre de taille. La rénovation de ces éléments demande un savoir-faire artisanal que nous mettons au service de la préservation de ce patrimoine.",
          "Les appartements du centre historique, souvent en étage avec des accès étroits, nécessitent une logistique adaptée. Nous organisons le chantier en amont pour assurer un déroulement fluide : protection des parties communes, approvisionnement en matériel, planification des travaux pièce par pièce.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Intervenez-vous sur tout Muret ?',
        answer: "Oui, nous couvrons l'ensemble de la commune de Muret, du centre historique aux quartiers résidentiels périphériques. Le déplacement est inclus dans nos tarifs.",
      },
      {
        question: 'Pouvez-vous restaurer des moulures et corniches à Muret ?',
        answer: "Oui, nous réalisons la restauration et la mise en peinture de moulures, corniches et éléments décoratifs de plafond. Nous pouvons également recréer des éléments manquants avec des techniques d'enduit et de moulage.",
      },
      {
        question: 'Quel est votre tarif pour un ravalement à Muret ?',
        answer: "Le tarif dépend de la surface, de l'état des murs et du type de finition. Pour un immeuble de centre-ville (façade de 80-100 m²), comptez entre 5 000 et 12 000 €. Pour une maison individuelle en lotissement, entre 4 000 et 8 000 €. Devis gratuit sur place.",
      },
    ],
  },
];

export function getZoneBySlug(slug: string): ZoneData | undefined {
  return zones.find((z) => z.slug === slug);
}
