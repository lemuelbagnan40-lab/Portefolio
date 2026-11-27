# Portfolio — Bagnan Lemuel

Portfolio personnel de Bagnan Lemuel, développeur frontend basé au Burkina Faso. Site d'une seule page, en français, présentant le parcours, les projets, les services, les compétences et les moyens de contact.

## Stack

- React 19 + Vite 8
- CSS natif (variables, grid, media queries) et Tailwind CSS importé via le plugin Vite
- Déploiement automatique sur GitHub Pages via `.github/workflows/deploy.yml`

## Démarrage

```bash
npm install
npm run dev
```

Le serveur de développement est disponible sur `http://localhost:5173`.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement avec rechargement à chaud |
| `npm run build` | Génère le site de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure

```
src/
├── App.jsx                  # Point d'entrée de l'application
├── main.jsx                 # Montage React
├── index.css                # Styles globaux, variables et animations de révélation
├── pages/Home.jsx           # Assemblage des sections et observation du scroll
├── composants/              # Header, About, Projects, Services, Skills, Footer, Formulaire, ThemeToggle
├── styles/                  # Feuilles de style par composant
├── data/projects.js         # Contenu des projets présentés
└── assets/                  # Portraits, icônes et CV
public/                      # Favicon, image Open Graph, robots.txt, sitemap.xml
```

## Personnalisation

- **Projets** : modifier `src/data/projects.js`. Chaque projet peut définir `name`, `type`, `role`, `description`, `context`, `highlights`, `technologies`, `liveUrl` et `logoUrl`.
- **Services** : modifier le tableau `services` dans `src/composants/Services.jsx`.
- **Compétences** : modifier le tableau `skills` dans `src/composants/Skills.jsx`.
- **Contact** : mettre à jour `emailAddress` dans `src/composants/Footer.jsx` et l'adresse `mailto:` dans `src/composants/Formulaire.jsx`, puis les liens dans `index.html`.
- **Couleurs** : ajuster les variables CSS dans `src/index.css` (`--accent`, `--bg`, `--surface`, etc.). L’accent actuel est un bleu cobalt légèrement assourdi (`#2f6ad0`, texte `#1d4fa8`) décliné en bleu ciel (`#7ea9e8`) pour le thème sombre. Les teintes translucides suivent `--accent-rgb`. Le thème sombre est défini dans le bloc `:root[data-theme="dark"]` et les mêmes variables sont utilisées par les deux thèmes.
- **Thème** : la bascule du header mémorise le choix dans `localStorage`. Sans choix enregistré, le site suit la préférence système (`prefers-color-scheme`) et réagit à ses changements. Le script dans `index.html` applique le thème avant le premier rendu pour éviter un flash de page claire.
- **URL de publication** : la base Vite est définie dans `vite.config.js` (`/Portefolio/`). Pensez à synchroniser les URL canoniques dans `index.html`, `public/robots.txt` et `public/sitemap.xml` si le nom du dépôt change.

## Accessibilité et performances

- Navigation clavier, lien d'évitement, indicateurs de focus visibles et focus enfermé dans le menu mobile ouvert.
- Menu mobile fermé au clic extérieur et avec Échap.
- Contrastés renforcés et libellés accessibles alignés sur le texte visible (audit Lighthouse : 100 % en accessibilité, SEO et bonnes pratiques).
- Animations respectant `prefers-reduced-motion`.
- Portrait principal converti en WebP avec transparence (≈ 150 Ko au lieu de 1,5 Mo).
- Métadonnées Open Graph et Twitter, image de partage dédiée, sitemap et robots.txt.
