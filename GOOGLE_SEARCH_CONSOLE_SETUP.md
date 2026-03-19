# Configuration Google Search Console

Ce guide explique comment connecter votre site à Google Search Console pour suivre les performances SEO.

## Étape 1 : Accéder à Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console/)
2. Connectez-vous avec votre compte Google
3. Cliquez sur "Ajouter une propriété"

## Étape 2 : Choisir le type de propriété

Sélectionnez **"Préfixe de l'URL"** et entrez :
```
https://plombier-saintquentin.fr
```

## Étape 3 : Vérification du site

Google vous proposera plusieurs méthodes de vérification. Voici les 2 méthodes recommandées :

### Méthode 1 : Balise meta HTML (Recommandé)

1. Google vous donnera un code de vérification qui ressemble à :
   ```
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXX" />
   ```

2. Copiez uniquement la partie `XXXXXXXXXXXXXXXXXXXXXX` (le code entre les guillemets après `content=`)

3. Dans le fichier `index.html`, remplacez `YOUR_GOOGLE_VERIFICATION_CODE` par votre code :
   ```html
   <meta name="google-site-verification" content="VOTRE_CODE_ICI" />
   ```

4. Déployez le site avec vos modifications

5. Retournez sur Google Search Console et cliquez sur "Vérifier"

### Méthode 2 : Fichier HTML

1. Google vous proposera de télécharger un fichier HTML (ex: `googleXXXXXXXXXXXXXXXX.html`)

2. Placez ce fichier dans le dossier `public/` de votre projet

3. Déployez le site

4. Retournez sur Google Search Console et cliquez sur "Vérifier"

## Étape 4 : Soumettre le sitemap

Une fois votre site vérifié :

1. Dans Google Search Console, allez dans **"Sitemaps"** (dans le menu de gauche)

2. Ajoutez l'URL de votre sitemap :
   ```
   https://plombier-saintquentin.fr/sitemap.xml
   ```

3. Cliquez sur "Envoyer"

## Fichiers SEO déjà configurés

Votre site dispose déjà de :

✅ **robots.txt** - Indique aux moteurs de recherche quelles pages indexer
   - Fichier : `/public/robots.txt`
   - URL : https://plombier-saintquentin.fr/robots.txt

✅ **sitemap.xml** - Liste toutes les pages du site pour l'indexation
   - Fichier : `/public/sitemap.xml`
   - URL : https://plombier-saintquentin.fr/sitemap.xml

✅ **Schema.org** - Données structurées pour les résultats enrichis Google
   - Type : LocalBusiness (Plombier)
   - FAQ Schema sur la page d'accueil

## Vérifier que tout fonctionne

Après configuration, vous pouvez vérifier :

1. **robots.txt** : Visitez https://plombier-saintquentin.fr/robots.txt
2. **sitemap.xml** : Visitez https://plombier-saintquentin.fr/sitemap.xml
3. **Balise meta** : Faites un clic droit > "Afficher le code source" sur votre site et cherchez `google-site-verification`

## Délais d'indexation

- La vérification est instantanée une fois le code en place
- L'indexation des pages peut prendre de quelques heures à quelques jours
- Les données dans Google Search Console apparaissent après 24-48h

## Suivi des performances

Une fois configuré, vous pourrez voir dans Google Search Console :

- Les requêtes de recherche qui amènent du trafic
- Les pages les plus performantes
- Les erreurs d'indexation
- Les performances mobile
- Les Core Web Vitals
- Le taux de clics (CTR)

## Support

Si vous rencontrez des difficultés, consultez :
- [Guide officiel Google Search Console](https://support.google.com/webmasters/answer/9008080)
