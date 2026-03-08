# Lamalou Sport & Nature

Site statique développé pour moderniser la présence en ligne du magasin Lamalou Sport & Nature.

## Structure

- `index.html` : page principale
- `styles.css` : styles globaux
- `assets/` : images (logo, flyers, etc.)

## Mise en ligne sur GitHub Pages

Deux options :

1. **Dossier `docs/` sur `main`** (option recommandée)
   - Depuis la racine de ton projet, crée un dossier `docs` :
     ```powershell
     mkdir docs
     copy index.html docs\
     copy styles.css docs\
     xcopy /E assets docs\assets\
     ```
     *(sous Linux/macOS utilise `cp -r` à la place de `copy`/`xcopy`)*
   - Vérifie que les liens relatifs fonctionnent toujours (`href="styles.css"`, `src="assets/..."`).
   - Commit et pousse ces fichiers :
     ```bash
     git add docs
     git commit -m "Ajout du dossier docs pour GitHub Pages"
     git push origin main
     ```
   - Dans le dépôt GitHub, va dans **Settings > Pages**.
     - Sous *Source*, choisis **Branch: main** et **Folder: /docs**.
     - Enregistre ; la page sera publiée quelques instants plus tard.
   - L’URL publique sera `https://<utilisateur>.github.io/<repo>/`.
   - À chaque modification, il suffira de mettre à jour les fichiers sous `docs/` et de pousser sur `main`; Pages régénère automatiquement.

2. **Branche `gh-pages`**
   - Bascule sur une nouvelle branche `gh-pages` (`git checkout --orphan gh-pages`).
   - Nettoie le contenu, copie les fichiers statiques.
   - Commit et pousse, puis configure Pages pour utiliser cette branche.

### Liens

- Site : `https://<utilisateur>.github.io/<repo>/`
- Code source : ce dépôt.

## Développement

Ouvrir `index.html` dans un navigateur. Pas de build nécessaire, tout est en HTML/CSS.

## Notes

- Les couleurs sont centralisées via la variable CSS `--primary`.
- La navigation est responsive ; le menu disparaît sous 768px.
- Pour changer l'orange du site, modifie `--primary` dans `styles.css`.

Feel free to adapt this README to your needs.