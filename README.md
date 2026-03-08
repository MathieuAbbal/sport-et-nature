# Lamalou Sport & Nature

Site statique développé pour moderniser la présence en ligne du magasin Lamalou Sport & Nature.

## Structure

- `index.html` : page principale
- `styles.css` : styles globaux
- `assets/` : images (logo, flyers, etc.)

## Déploiement (GitHub Pages)

Le déploiement est **automatisé** via GitHub Actions. À chaque push sur `main`, le workflow `.github/workflows/deploy-pages.yml` déploie directement les fichiers du dépôt sur GitHub Pages.

- **Configuration Pages** : Source « GitHub Actions » (pas de dossier `docs/`).
- **Aucune action manuelle** : il suffit de modifier les fichiers à la racine et de pousser sur `main`.

### Liens

- Site : https://mathieuabbal.github.io/sport-et-nature/
- Code source : ce dépôt.

## Développement

Ouvrir `index.html` dans un navigateur. Pas de build nécessaire, tout est en HTML/CSS.

## Notes

- Les couleurs sont centralisées via la variable CSS `--primary`.
- La navigation est responsive ; le menu disparaît sous 768px.
- Pour changer l'orange du site, modifie `--primary` dans `styles.css`.

