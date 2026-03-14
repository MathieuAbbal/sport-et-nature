# Lamalou Sport & Nature

Site vitrine pour le magasin **Lamalou Sport & Nature** de Cyril ABBAL à Lamalou-les-Bains (34).

## Structure

- `index.html` : page principale
- `styles.css` : styles globaux
- `script.js` : burger menu, lightbox, scroll-to-top, animations
- `assets/` : images (logo, flyers, photos, marquage)
- `CNAME` : domaine personnalisé
- `robots.txt` / `sitemap.xml` : SEO

## Déploiement (GitHub Pages)

Le déploiement est **automatisé** via GitHub Actions. À chaque push sur `main`, le workflow `.github/workflows/deploy-pages.yml` déploie directement les fichiers du dépôt sur GitHub Pages.

- **Domaine** : https://lamalousportetnature.fr
- **Source** : GitHub Actions (pas de dossier `docs/`).
- **DNS** : OVH (enregistrements A + CNAME vers GitHub Pages).
- **Aucune action manuelle** : il suffit de modifier les fichiers à la racine et de pousser sur `main`.

## Fonctionnalités

- Navigation responsive avec burger menu mobile
- Galeries photos avec lightbox (navigation par flèches)
- Bouton d'appel flottant (mobile, visible en bas de page)
- Bouton scroll-to-top
- Animations fade-in au scroll
- Google Maps intégré dans le footer
- SEO : meta tags, Open Graph, Twitter Card, Schema.org, sitemap

## Développement

Ouvrir `index.html` dans un navigateur. Pas de build nécessaire, tout est en HTML/CSS/JS.

## Mise à jour en production

Après chaque modification du CSS (`styles.css`), il faut **incrémenter la version du cache busting** dans `index.html` pour que les visiteurs voient les changements sans avoir à vider leur cache :

```html
<link rel="stylesheet" href="styles.css?v=2.1">
<!--                                     ^^^ incrémenter ici (2.2, 2.3, etc.) -->
```

Sans cette étape, les navigateurs des visiteurs peuvent garder l'ancien CSS en cache.

## Notes

- Les couleurs sont centralisées via la variable CSS `--primary`.
- La navigation est responsive ; le menu disparaît sous 768px.
- Pour changer l'orange du site, modifie `--primary` dans `styles.css`.
