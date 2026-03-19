export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  icon: string;
  sections: ServiceSection[];
  pricingHint: string;
  faqs: ServiceFAQ[];
}

export const services: ServiceData[] = [
  {
    slug: 'peinture-interieure',
    name: 'Peinture intérieure',
    shortName: 'Peinture intérieure',
    metaTitle: 'Peinture Intérieure à Fenouillet (31) | Murs, Plafonds, Boiseries - Devis Gratuit',
    metaDescription: 'Artisan peintre pour vos travaux de peinture intérieure à Fenouillet et environs (31). Murs, plafonds, boiseries. Peintures professionnelles, finitions soignées. Devis gratuit ☎ 05 17 94 83 78.',
    heroText: "Vous souhaitez rafraîchir vos intérieurs ou rénover entièrement votre logement ? Nous réalisons tous vos travaux de peinture intérieure à Fenouillet et dans un rayon de 20 km.",
    icon: 'PaintBucket',
    pricingHint: 'À partir de 25 €/m²',
    sections: [
      {
        heading: 'Peinture intérieure professionnelle à Fenouillet',
        paragraphs: [
          "La peinture intérieure est le moyen le plus efficace de transformer l'atmosphère de votre logement. Un changement de couleur, une remise en état des murs ou un rafraîchissement des plafonds suffisent à redonner vie à vos pièces. À Fenouillet et dans toute la métropole toulousaine, nous réalisons vos travaux de peinture intérieure avec le plus grand soin.",
          "Basés au 8 Rue des Mariniers à Fenouillet, nous intervenons rapidement chez les particuliers et les professionnels. Notre connaissance des habitations du secteur — maisons toulousaines en brique, pavillons des années 80, constructions récentes — nous permet d'adapter nos techniques à chaque type de support.",
        ],
      },
      {
        heading: 'Nos prestations de peinture intérieure',
        paragraphs: [
          "Nous prenons en charge l'intégralité de vos travaux de peinture intérieure, de la préparation des surfaces à la finition :",
        ],
        list: [
          'Peinture des murs (mat, satin, velours)',
          'Peinture des plafonds (mat, blanc ou couleur)',
          'Peinture des boiseries (portes, plinthes, fenêtres, volets intérieurs)',
          'Peinture de pièces humides (salle de bain, cuisine) avec peintures adaptées',
          'Remise en peinture après travaux (électricité, plomberie, rénovation)',
          "Application de sous-couche et primaire d'accrochage",
          'Mise en couleur et conseil colorimétrique',
        ],
      },
      {
        heading: 'Une préparation rigoureuse pour un résultat durable',
        paragraphs: [
          "Le secret d'une peinture réussie réside dans la préparation du support. Avant toute application, nous réalisons un diagnostic complet de vos murs et plafonds. Les fissures sont rebouchées à l'enduit, les surfaces poncées et dépoussiérées, les anciens revêtements décollés si nécessaire.",
          "Cette étape représente souvent la moitié du temps de chantier, mais elle garantit un résultat uniforme et durable. Les couches de peinture adhèrent parfaitement et le rendu final est impeccable, sans trace ni défaut.",
        ],
      },
      {
        heading: 'Des peintures professionnelles adaptées à chaque pièce',
        paragraphs: [
          "Nous sélectionnons les peintures en fonction de l'usage de chaque pièce. Une chambre nécessite une peinture mate à faible émission de COV pour un air intérieur sain. Une cuisine ou une salle de bain demande une peinture satinée, lessivable et résistante à l'humidité. Les boiseries reçoivent une peinture laquée ou satinée, résistante aux chocs et jaunissements.",
          "Nous travaillons avec des marques professionnelles reconnues (Tollens, Sikkens, Zolpan) qui offrent un excellent pouvoir couvrant et une tenue dans le temps supérieure aux peintures grand public.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Combien coûte la peinture intérieure au m² à Fenouillet ?',
        answer: "Le prix dépend de l'état des murs et de la finition souhaitée. Comptez à partir de 25 €/m² pour un rafraîchissement simple (murs en bon état) et de 35 à 45 €/m² pour une remise en état complète avec enduit et préparation. Nous établissons un devis gratuit et détaillé après visite.",
      },
      {
        question: 'Combien de temps faut-il pour peindre un appartement ?',
        answer: "Cela dépend de la surface et de l'état des murs. Pour un T3 (environ 60 m²), comptez 3 à 5 jours ouvrés en moyenne, préparation comprise. Nous vous communiquons un planning précis dans le devis.",
      },
      {
        question: 'Faut-il vider les pièces avant les travaux ?',
        answer: "Idéalement, oui. Si ce n'est pas possible, nous déplaçons les meubles au centre de la pièce et les protégeons avec des bâches. Les sols sont également protégés. Nous vous conseillons de retirer les objets fragiles et les tableaux.",
      },
      {
        question: 'Quelle peinture choisir pour une chambre d\'enfant ?',
        answer: "Nous recommandons une peinture mate ou velours, labellisée A+ en émission de COV, pour garantir un air intérieur sain. Les peintures satinées lessivables sont aussi un bon choix dans les chambres d'enfants, car elles résistent mieux aux taches et se nettoient facilement.",
      },
    ],
  },
  {
    slug: 'peinture-exterieure',
    name: 'Peinture extérieure',
    shortName: 'Peinture extérieure',
    metaTitle: 'Peinture Extérieure à Fenouillet (31) | Façade, Volets, Portails - Devis Gratuit',
    metaDescription: 'Peinture extérieure professionnelle à Fenouillet et en Haute-Garonne. Façades, volets, portails, clôtures. Peintures résistantes au climat toulousain. Devis gratuit ☎ 05 17 94 83 78.',
    heroText: "Façade défraîchie, volets écaillés, portail rouillé ? Nous réalisons tous vos travaux de peinture extérieure à Fenouillet et dans les communes voisines.",
    icon: 'Home',
    pricingHint: 'À partir de 30 €/m²',
    sections: [
      {
        heading: 'Peinture extérieure à Fenouillet et environs',
        paragraphs: [
          "La peinture extérieure protège votre habitation contre les intempéries tout en lui donnant une belle apparence. En Haute-Garonne, les façades sont exposées aux variations de température, à l'humidité hivernale et au soleil estival. Un entretien régulier de la peinture extérieure préserve la valeur de votre bien et évite des réparations plus coûteuses à terme.",
          "À Fenouillet et dans toute la métropole toulousaine, nous réalisons la peinture de vos façades, volets, portails, clôtures et tout élément extérieur nécessitant une remise en état ou une protection.",
        ],
      },
      {
        heading: 'Nos prestations de peinture extérieure',
        paragraphs: [
          "Nous intervenons sur tous les éléments extérieurs de votre habitation :",
        ],
        list: [
          'Peinture de façade (enduit, crépi, brique, parpaing)',
          'Peinture de volets (bois, PVC, aluminium)',
          'Peinture de portails et clôtures métalliques',
          'Peinture de balcons et garde-corps',
          'Peinture de sous-toiture (dessous de toit, bandeaux)',
          'Peinture de murets et murs de clôture',
          'Traitement et lasure de bardage bois',
        ],
      },
      {
        heading: 'Des peintures résistantes au climat toulousain',
        paragraphs: [
          "Le climat de la région toulousaine impose des contraintes spécifiques : chaleur estivale, pluies parfois violentes, vent d'autan. Nous sélectionnons des peintures extérieures formulées pour résister à ces conditions. Les peintures microporeuses que nous utilisons laissent respirer le support tout en le protégeant efficacement de l'humidité.",
          "Pour les éléments métalliques (portails, garde-corps), nous appliquons un traitement antirouille avant la peinture de finition. Pour le bois (volets, bardage), nous utilisons des lasures ou peintures microporeuses qui protègent le bois tout en le laissant respirer.",
        ],
      },
      {
        heading: 'Préparation et mise en œuvre',
        paragraphs: [
          "Comme pour la peinture intérieure, la préparation est déterminante. Nous commençons par un nettoyage haute pression de la façade ou du support, puis nous traitons les éventuelles fissures, décollements ou moisissures. Les surfaces sont ensuite poncées et dépoussiérées avant l'application du primaire et des couches de finition.",
          "Nous travaillons avec des échafaudages conformes aux normes de sécurité et prenons toutes les précautions nécessaires pour protéger votre jardin, vos terrasses et les abords de votre maison.",
        ],
      },
    ],
    faqs: [
      {
        question: 'À quelle fréquence faut-il repeindre une façade en Haute-Garonne ?',
        answer: "En moyenne, une façade bien entretenue doit être repeinte tous les 10 à 15 ans. Cela dépend de l'exposition (nord/sud), de la qualité de la peinture précédente et de l'environnement (proximité d'arbres, pollution). Des signes comme l'écaillage, le farinage ou les traces verdâtres indiquent qu'il est temps d'intervenir.",
      },
      {
        question: 'Peut-on peindre une façade en hiver ?',
        answer: "La peinture extérieure nécessite des conditions climatiques favorables : température supérieure à 10°C, absence de pluie et d'humidité excessive. En Haute-Garonne, nous pouvons généralement travailler de mars à novembre. Nous planifions les chantiers en fonction de la météo pour garantir un résultat optimal.",
      },
      {
        question: 'Faut-il un permis pour repeindre sa façade ?',
        answer: "En règle générale, un simple rafraîchissement dans la même teinte ne nécessite pas d'autorisation. En revanche, un changement de couleur peut nécessiter une déclaration préalable auprès de la mairie. Nous vous conseillons de vérifier le Plan Local d'Urbanisme (PLU) de votre commune avant de choisir votre coloris.",
      },
      {
        question: 'Combien coûte la peinture extérieure d\'une maison à Fenouillet ?',
        answer: "Le prix dépend de la surface, de l'état du support et de l'accessibilité (besoin d'échafaudage). Comptez à partir de 30 €/m² pour une façade en bon état. Nous établissons un devis gratuit et détaillé après visite du chantier.",
      },
    ],
  },
  {
    slug: 'ravalement-facade',
    name: 'Ravalement de façade',
    shortName: 'Ravalement',
    metaTitle: 'Ravalement de Façade à Fenouillet (31) | Nettoyage, Enduit, Peinture',
    metaDescription: 'Ravalement de façade complet à Fenouillet et environs (31). Diagnostic, nettoyage haute pression, réparation fissures, enduit et peinture de finition. Devis gratuit ☎ 05 17 94 83 78.',
    heroText: "Votre façade montre des signes de fatigue ? Fissures, décollement d'enduit, traces verdâtres ? Nous réalisons le ravalement complet de votre façade à Fenouillet et environs.",
    icon: 'Building2',
    pricingHint: 'À partir de 45 €/m²',
    sections: [
      {
        heading: 'Ravalement de façade à Fenouillet et en Haute-Garonne',
        paragraphs: [
          "Le ravalement de façade est un chantier complet qui va bien au-delà d'un simple coup de peinture. Il consiste à remettre en état l'ensemble de la façade : nettoyage en profondeur, traitement des fissures et désordres, reprise des enduits endommagés, puis application d'une finition protectrice et esthétique.",
          "À Fenouillet et dans la métropole toulousaine, les façades sont soumises aux aléas du climat occitan : soleil intense, épisodes pluvieux, vent d'autan. Avec le temps, ces éléments dégradent les revêtements et favorisent l'apparition de mousses, lichens et fissures. Un ravalement bien réalisé protège durablement votre habitation et valorise votre patrimoine.",
        ],
      },
      {
        heading: 'Les étapes de notre ravalement',
        paragraphs: [
          "Un ravalement de façade se déroule en plusieurs étapes successives, chacune indispensable au résultat final :",
        ],
        list: [
          'Diagnostic complet de la façade (état du support, fissures, humidité)',
          'Mise en place de l\'échafaudage et protections',
          'Nettoyage haute pression de la façade',
          'Traitement anti-mousse et anti-algues si nécessaire',
          'Réparation des fissures et désordres structurels',
          'Reprise ou réfection d\'enduit (enduit à la chaux, monocouche, multicouche)',
          'Application du primaire d\'accrochage',
          'Application de la peinture de finition ou de l\'enduit décoratif',
          'Nettoyage du chantier et repli de l\'échafaudage',
        ],
      },
      {
        heading: 'Réglementation et obligation de ravalement',
        paragraphs: [
          "La loi impose de maintenir les façades en bon état. Dans certaines communes de la Haute-Garonne, un arrêté municipal peut obliger les propriétaires à ravaler leur façade à intervalles réguliers (généralement tous les 10 ans). Renseignez-vous auprès de votre mairie pour connaître les obligations applicables à Fenouillet et les communes environnantes.",
          "Un ravalement est également l'occasion de réaliser une isolation thermique par l'extérieur (ITE), qui peut être éligible à des aides financières (MaPrimeRénov', CEE). Nous pouvons vous orienter sur ces dispositifs.",
        ],
      },
      {
        heading: 'Des finitions adaptées à votre maison',
        paragraphs: [
          "Nous proposons différentes finitions pour votre façade : peinture lisse, enduit gratté, enduit taloché, enduit ribbé, crépi projeté. Le choix dépend du style de votre maison, de l'aspect souhaité et des règles d'urbanisme locales. Nous vous conseillons sur la finition la plus adaptée à votre habitation et à son environnement.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Combien coûte un ravalement de façade à Fenouillet ?',
        answer: "Le prix d'un ravalement complet varie de 45 à 90 €/m² selon l'état de la façade, le type de finition et la complexité du chantier (hauteur, accès). Pour une maison individuelle de 100 m² de façade, le budget se situe généralement entre 4 500 et 9 000 €. Nous établissons un devis gratuit et détaillé.",
      },
      {
        question: 'Combien de temps dure un ravalement de façade ?',
        answer: "Pour une maison individuelle standard, comptez 1 à 3 semaines selon l'étendue des travaux et la météo. Un simple nettoyage et une mise en peinture prennent moins de temps qu'un ravalement complet avec reprise d'enduit. Nous vous communiquons un planning détaillé dans le devis.",
      },
      {
        question: 'Le ravalement de façade est-il obligatoire ?',
        answer: "Oui, la loi (article L132-1 du Code de la construction) impose aux propriétaires de maintenir leurs façades en bon état. Certaines communes prennent des arrêtés obligeant un ravalement tous les 10 ans. Nous vous recommandons de vérifier les obligations auprès de la mairie de votre commune.",
      },
      {
        question: 'Peut-on bénéficier d\'aides pour un ravalement de façade ?',
        answer: "Un ravalement simple (sans isolation) n'est généralement pas éligible aux aides. En revanche, si vous profitez du ravalement pour réaliser une isolation thermique par l'extérieur (ITE), vous pouvez bénéficier de MaPrimeRénov', des CEE (Certificats d'Économie d'Énergie) et parfois d'aides locales.",
      },
    ],
  },
  {
    slug: 'papier-peint-revetements',
    name: 'Pose de papier peint et revêtements muraux',
    shortName: 'Papier peint',
    metaTitle: 'Pose de Papier Peint à Fenouillet (31) | Intissé, Vinyle, Panoramique',
    metaDescription: 'Pose professionnelle de papier peint à Fenouillet et environs. Intissé, vinyle, panoramique, toile de verre. Dépose ancien revêtement incluse. Devis gratuit ☎ 05 17 94 83 78.',
    heroText: "Envie de papier peint ou d'un revêtement mural original ? Nous posons tous types de revêtements avec soin et précision à Fenouillet et dans les communes voisines.",
    icon: 'Wallpaper',
    pricingHint: 'À partir de 20 €/m²',
    sections: [
      {
        heading: 'Pose de papier peint à Fenouillet',
        paragraphs: [
          "Le papier peint revient en force dans la décoration intérieure. Motifs géométriques, imitation matière, panoramiques, couleurs vives ou pastel : les possibilités sont infinies pour personnaliser vos intérieurs. Mais la pose de papier peint demande un vrai savoir-faire pour obtenir un résultat impeccable, sans bulle, sans raccord visible et avec des découpes nettes.",
          "À Fenouillet et dans toute la métropole toulousaine, nous posons tous types de papier peint et revêtements muraux. Notre expérience nous permet de travailler sur tous les supports et de gérer les difficultés (angles, prises, fenêtres, pièces humides).",
        ],
      },
      {
        heading: 'Types de revêtements que nous posons',
        paragraphs: [
          "Nous maîtrisons la pose de l'ensemble des revêtements muraux disponibles sur le marché :",
        ],
        list: [
          'Papier peint intissé (le plus courant, facile d\'entretien)',
          'Papier peint vinyle (résistant à l\'humidité, idéal cuisine et salle de bain)',
          'Papier peint panoramique (fresque murale grand format)',
          'Papier peint à motifs avec raccords complexes',
          'Toile de verre (support à peindre, masque les imperfections)',
          'Fibre de verre',
          'Revêtements muraux décoratifs (liège, bambou, tissu mural)',
        ],
      },
      {
        heading: 'Préparation du mur avant la pose',
        paragraphs: [
          "La qualité de la pose dépend largement de la préparation du mur. Nous vérifions l'état du support et réalisons les travaux nécessaires : décollement de l'ancien papier peint ou revêtement, lessivage, rebouchage des trous et fissures, ponçage et application d'une sous-couche si le mur est trop poreux ou irrégulier.",
          "Un mur bien préparé garantit une adhérence parfaite du revêtement et un résultat durable. Cette étape est incontournable, même si elle ajoute du temps au chantier.",
        ],
      },
      {
        heading: 'Dépose de l\'ancien papier peint',
        paragraphs: [
          "Avant de poser un nouveau revêtement, il faut généralement retirer l'ancien. Nous utilisons des décolleuses vapeur professionnelles qui facilitent le retrait sans abîmer le support. Dans le cas de papiers peints anciens ou de multiples couches superposées, cette étape demande patience et expertise pour remettre le mur dans un état propre et lisse.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peut-on poser du papier peint dans une salle de bain ?',
        answer: "Oui, à condition de choisir un papier peint adapté. Les papiers peints vinyles ou les revêtements spécifiques pour pièces humides résistent bien à l'humidité et aux projections d'eau. Nous vous conseillons sur les produits adaptés à chaque pièce de votre logement.",
      },
      {
        question: 'Combien coûte la pose de papier peint à Fenouillet ?',
        answer: "La pose seule (sans fourniture) démarre à partir de 20 €/m². Le prix varie selon le type de papier peint (intissé, vinyle, panoramique), la complexité de la pose (raccords, découpes) et l'état du mur. La dépose de l'ancien revêtement est facturée en supplément si nécessaire.",
      },
      {
        question: 'Fournissez-vous le papier peint ?',
        answer: "Nous pouvons vous fournir le papier peint grâce à nos partenariats avec les distributeurs professionnels, souvent à des tarifs avantageux. Vous pouvez aussi fournir votre propre papier peint et nous confier uniquement la pose. Dans les deux cas, nous vérifions la quantité nécessaire (avec marge pour les raccords) avant le chantier.",
      },
      {
        question: 'Peut-on peindre sur du papier peint existant ?',
        answer: "C'est possible sur du papier peint en bon état, bien adhérent et lisse. Cependant, le résultat sera toujours meilleur sur un mur nu correctement préparé. Nous évaluons l'état du papier peint existant et vous conseillons sur la meilleure option pour votre situation.",
      },
    ],
  },
  {
    slug: 'enduit-preparation',
    name: 'Travaux d\'enduit et préparation de surfaces',
    shortName: 'Enduit & préparation',
    metaTitle: 'Enduit et Préparation de Surfaces à Fenouillet (31) | Lissage, Rebouchage',
    metaDescription: 'Travaux d\'enduit et préparation de murs à Fenouillet et environs (31). Rebouchage, lissage, ponçage, bandes à joints. Surfaces parfaites avant peinture. Devis gratuit ☎ 05 17 94 83 78.',
    heroText: "Murs abîmés, fissurés ou irréguliers ? Nous remettons vos surfaces en état avec des travaux d'enduit et de préparation avant peinture à Fenouillet et environs.",
    icon: 'Layers',
    pricingHint: 'À partir de 20 €/m²',
    sections: [
      {
        heading: 'Travaux d\'enduit et préparation de surfaces à Fenouillet',
        paragraphs: [
          "La préparation des surfaces est l'étape fondamentale de tout projet de peinture. Des murs fissurés, irréguliers ou abîmés ne peuvent pas recevoir directement une peinture de finition : le résultat serait médiocre et éphémère. Les travaux d'enduit permettent de remettre les murs et plafonds dans un état parfait avant la mise en peinture.",
          "À Fenouillet et dans les communes voisines, nous réalisons tous les travaux de préparation nécessaires : rebouchage, enduisage, ponçage, traitement des fissures et des problèmes d'humidité. Ces interventions peuvent être réalisées seules ou dans le cadre d'un chantier de peinture complet.",
        ],
      },
      {
        heading: 'Nos prestations d\'enduit et préparation',
        paragraphs: [
          "Nous proposons une gamme complète de travaux de préparation adaptés à chaque situation :",
        ],
        list: [
          'Rebouchage de trous et fissures (enduit de rebouchage)',
          'Enduit de lissage (pour obtenir une surface parfaitement plane)',
          'Enduit de finition (ratissage, talochage)',
          'Bandes à joints pour plaques de plâtre (BA13)',
          'Traitement des fissures structurelles avec calicot ou bande armée',
          'Ponçage mécanique et manuel des surfaces',
          'Application de sous-couche et primaire d\'accrochage',
          'Décapage et décollement d\'anciens revêtements',
        ],
      },
      {
        heading: 'Les différents types d\'enduit',
        paragraphs: [
          "L'enduit de rebouchage sert à combler les trous, saignées et fissures larges. L'enduit de lissage est appliqué en couche fine sur l'ensemble de la surface pour gommer les défauts et obtenir un mur parfaitement lisse. L'enduit de finition apporte la touche finale, avec un aspect satiné ou granuleux selon le rendu souhaité.",
          "Nous choisissons le type d'enduit en fonction du support (plâtre, béton, brique, placo), de la pièce (sèche ou humide) et du résultat attendu. Dans les pièces humides, nous utilisons des enduits hydrofuges qui résistent à l'humidité et préviennent les moisissures.",
        ],
      },
      {
        heading: 'Traitement des problèmes courants',
        paragraphs: [
          "Les murs des habitations de la région toulousaine présentent souvent des problèmes spécifiques : fissures dues aux mouvements de terrain argileux, traces d'humidité, enduit ancien qui s'effrite. Nous diagnostiquons l'origine du problème avant de traiter les symptômes. Si nécessaire, nous recommandons l'intervention d'un spécialiste (maçon, étanchéiste) avant de réaliser les travaux d'enduit.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Peut-on faire des travaux d\'enduit sans repeindre ensuite ?',
        answer: "Oui, les travaux d'enduit peuvent être réalisés indépendamment de la peinture. Cependant, un enduit de lissage seul n'est pas esthétique en soi : il a vocation à être recouvert de peinture, de papier peint ou d'un autre revêtement. L'enduit décoratif (stuc, béton ciré) est en revanche une finition à part entière.",
      },
      {
        question: 'Comment traiter une fissure qui revient ?',
        answer: "Une fissure récurrente est souvent le signe d'un mouvement structurel (tassement, dilatation). Nous utilisons des bandes armées (calicot) et des enduits souples qui absorbent les micro-mouvements du support. Si la fissure est importante, un diagnostic structurel peut être recommandé avant les travaux.",
      },
      {
        question: 'Combien de temps de séchage faut-il entre l\'enduit et la peinture ?',
        answer: "L'enduit de rebouchage sèche en quelques heures. L'enduit de lissage nécessite 12 à 24 heures de séchage avant ponçage, puis une nouvelle couche si nécessaire. Il faut compter au minimum 48 heures entre la dernière couche d'enduit et l'application de la peinture, davantage en conditions humides.",
      },
      {
        question: 'Réalisez-vous les bandes à joints sur du placo neuf ?',
        answer: "Oui, nous réalisons les bandes à joints sur les plaques de plâtre (BA13) neuves ou en rénovation. Cette prestation comprend la pose du calicot, l'application des couches d'enduit successives et le ponçage final pour un résultat lisse et prêt à peindre.",
      },
    ],
  },
  {
    slug: 'peinture-decorative',
    name: 'Peinture décorative et effets',
    shortName: 'Peinture décorative',
    metaTitle: 'Peinture Décorative à Fenouillet (31) | Stuc, Béton Ciré, Patine, Tadelakt',
    metaDescription: 'Peinture décorative et effets matière à Fenouillet. Stuc vénitien, béton ciré, patine, badigeon à la chaux, tadelakt. Finitions uniques sur mesure. Devis gratuit ☎ 05 17 94 83 78.',
    heroText: "Envie d'un intérieur unique ? Nous créons des ambiances personnalisées grâce à nos techniques de peinture décorative : effets matière, stuc, patine, béton ciré et bien plus.",
    icon: 'Palette',
    pricingHint: 'À partir de 40 €/m²',
    sections: [
      {
        heading: 'Peinture décorative à Fenouillet et environs',
        paragraphs: [
          "La peinture décorative offre des possibilités infinies pour personnaliser vos intérieurs et créer des ambiances uniques. Au-delà de la simple couleur, elle apporte du relief, de la texture et un caractère singulier à vos murs. C'est l'art de transformer un mur ordinaire en véritable élément de décoration.",
          "À Fenouillet et dans toute la métropole toulousaine, nous réalisons des finitions décoratives qui subliment vos espaces. Que vous souhaitiez une ambiance industrielle avec un effet béton ciré, un style provençal avec un badigeon à la chaux ou un intérieur contemporain avec un stuc vénitien, nous maîtrisons les techniques pour concrétiser votre vision.",
        ],
      },
      {
        heading: 'Nos techniques de peinture décorative',
        paragraphs: [
          "Nous proposons un large éventail de finitions décoratives pour répondre à tous les styles :",
        ],
        list: [
          'Stuc vénitien et stuc à la chaux (effet marbré, brillant et lisse)',
          'Béton ciré mural (effet industriel, contemporain)',
          'Badigeon à la chaux (aspect authentique, matière vivante)',
          'Patine et effet vieilli (pour un style campagne ou vintage)',
          'Effet tadelakt (enduit marocain imperméable, idéal salle de bain)',
          'Peinture à effets (sablé, nacré, métallisé, pailleté)',
          'Faux bois et faux marbre (trompe-l\'œil décoratif)',
          'Laque tendue (finition ultra-brillante haut de gamme)',
        ],
      },
      {
        heading: 'Un travail sur mesure',
        paragraphs: [
          "Chaque projet de peinture décorative est unique. Nous commençons par échanger sur vos envies, votre style de décoration et l'ambiance recherchée. Nous réalisons ensuite des échantillons directement sur votre mur pour vous permettre de valider la teinte et la texture avant de traiter l'ensemble de la surface.",
          "Cette approche sur mesure garantit un résultat qui vous ressemble et qui s'intègre parfaitement dans votre intérieur. Nous prenons le temps nécessaire pour obtenir l'effet souhaité, couche après couche.",
        ],
      },
      {
        heading: 'Des matériaux nobles et durables',
        paragraphs: [
          "Les enduits décoratifs que nous utilisons sont des produits professionnels de haute qualité : chaux naturelle, plâtre fin, résines minérales. Ces matériaux nobles offrent non seulement un rendu esthétique incomparable mais aussi une excellente durabilité. Certains enduits à la chaux ont des propriétés assainissantes naturelles, régulant l'humidité et purifiant l'air intérieur.",
        ],
      },
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre peinture décorative et peinture classique ?',
        answer: "La peinture classique offre un rendu uni (mat, satin ou brillant). La peinture décorative crée des effets de matière, de texture ou de relief : aspect béton, marbré, patiné, sablé, etc. Elle demande des techniques d'application spécifiques et plus de couches, d'où un coût supérieur.",
      },
      {
        question: 'Le stuc vénitien est-il adapté à la salle de bain ?',
        answer: "Oui, le stuc vénitien est naturellement imperméable grâce à la cire qui le protège. Il est parfaitement adapté aux pièces humides. Le tadelakt est encore plus résistant à l'eau et peut même être utilisé dans une douche. Nous vous conseillons la technique la mieux adaptée à chaque pièce.",
      },
      {
        question: 'Combien coûte un mur en béton ciré ?',
        answer: "L'application de béton ciré mural commence à partir de 40 €/m². Le prix varie selon la surface, la préparation nécessaire et la finition souhaitée. Les techniques plus complexes comme le stuc vénitien ou le tadelakt sont généralement plus onéreuses (60 à 100 €/m²). Nous établissons un devis précis après visite.",
      },
      {
        question: 'Peut-on appliquer un enduit décoratif sur du papier peint ?',
        answer: "Non, l'enduit décoratif doit être appliqué sur un support nu, propre, sec et lisse. Si vos murs sont actuellement recouverts de papier peint, nous devrons d'abord le retirer et préparer le support (enduit de lissage, ponçage) avant d'appliquer la finition décorative.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
