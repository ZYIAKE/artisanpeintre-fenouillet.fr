# Guide de Configuration - Site Artisan Peintre Fenouillet

Ce site est le site professionnel d'un artisan peintre en bâtiment à Fenouillet (31).

## Démarrage rapide

1. **Dupliquer le projet**
2. **Modifier la configuration** (voir ci-dessous)
3. **`npm install && npm run build`** → site prêt à déployer

---

## Fichiers à modifier

### 1. `src/data/business.ts` — Configuration principale

C'est le **fichier central**. Toutes les informations du site en dépendent.

| Champ | Description | Exemple |
|-------|-------------|---------|
| `name` | Nom commercial affiché | `"Artisan Peintre 31"` |
| `legalName` | Raison sociale | `"Artisan Peintre 31"` |
| `phone` | Numéro affiché | `"05 17 94 83 78"` |
| `phoneE164` | Format international | `"+33517948378"` |
| `phoneTel` | Lien tel: | `"tel:0517948378"` |
| `email` | Email de contact | `"contact@artisanpeintre-fenouillet.fr"` |
| `address` | Adresse complète (street, postalCode, city, region, department, country, full) | — |
| `domain` | URL du site | `"https://artisanpeintre-fenouillet.fr"` |
| `radius` | Rayon d'intervention | `"20 km"` |
| **`trade`** | Métier en minuscule | `"peintre"` |
| **`tradeName`** | Métier capitalisé | `"Peintre"` |
| **`tradeDomain`** | Domaine d'activité | `"peinture en bâtiment"` |
| **`schemaType`** | Type schema.org | `"HomeAndConstructionBusiness"` |
| `heroTagline` | Tagline du hero | `"Peintre en bâtiment à Fenouillet et environs"` |
| `heroDescription` | Description du hero | Texte libre |
| `ctaTitle` | Titre des bannières CTA | `"Besoin d'un peintre en bâtiment ?"` |
| `ctaSubtitle` | Sous-titre CTA | Texte libre |
| `footerDescription` | Description du footer | Texte libre |
| `contactFormServices` | Options du formulaire | `[{ value: 'peinture-interieure', label: 'Peinture intérieure' }, ...]` |
| `homeFaqs` | FAQs page d'accueil | `[{ question: '...', answer: '...' }, ...]` |
| `servicesHubFaqs` | FAQs page services | idem |
| `zonesHubFaqs` | FAQs page zones | idem |
| `aboutHeroText` | Texte hero page À Propos | Texte libre |
| `aboutSections` | Contenu page À Propos | Engagements, étapes, points forts |

#### Type schema.org

| Métier | schemaType |
|--------|-----------|
| Peintre | `HomeAndConstructionBusiness` |

### 2. `src/data/services.ts` — Liste des services

Modifier la liste des services proposés. Chaque service contient :
- `slug` : URL du service
- `name` / `shortName` : Noms affichés
- `metaTitle` / `metaDescription` : SEO
- `heroText` : Texte d'introduction
- `icon` : Nom de l'icône Lucide
- `sections` : Contenu détaillé (headings, paragraphs, lists)
- `pricingHint` : Indication de prix
- `faqs` : Questions fréquentes spécifiques

### 3. `src/data/zones.ts` — Communes d'intervention

Modifier la liste des communes. Chaque zone contient :
- `slug` / `name` : Identifiant et nom
- `distance` / `travelTime` : Distance et temps de trajet
- `mapQuery` : Requête Google Maps
- `nearbyZones` : Slugs des communes voisines
- `intro` / `specificInfo` / `paragraphs` : Contenu textuel
- `faqs` : Questions fréquentes spécifiques

### 4. Images

| Fichier | Usage |
|---------|-------|
| `src/assets/mascotte-peintre.jpg` | Logo/mascotte |
| `public/og-image.jpg` | Image Open Graph (1200×630) |
| `public/mascotte.png` | Image schema.org |
| `public/favicon.ico` | Favicon |

### 5. `tailwind.config.js` — Couleurs

Modifier les couleurs `primary` et `accent` pour correspondre à l'identité visuelle souhaitée.

### 6. Variables d'environnement (`.env`)

```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
```

---

## Génération automatique

### Sitemap & Robots.txt

Le sitemap et le robots.txt sont générés automatiquement avant chaque build :

```bash
npm run build          # Génère sitemap puis build
npm run generate-sitemap  # Génère sitemap uniquement
```

Le script lit `BUSINESS.domain`, les slugs des services et des zones pour construire les URLs.

---

## Vérification

Après configuration :

1. `npm run build` — vérifier que la compilation passe
2. `npm run preview` — vérifier visuellement le rendu
3. Vérifier les balises `<title>` et `<meta description>` de chaque page
4. Vérifier les schemas JSON-LD dans le code source (chercher `application/ld+json`)
5. Vérifier le fichier `public/sitemap.xml` généré
6. Tester le formulaire de contact (nécessite Supabase configuré)
