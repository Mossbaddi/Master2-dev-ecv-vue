# ECV Events

Projet fil rouge de la piscine Vue.js, GitHub et Copilot destinée aux étudiants de Master 2 Développement de l'ECV.

Application déployée : [ECV Events sur GitHub Pages](https://mossbaddi.github.io/Master2-dev-ecv-vue/)

Le dépôt évolue volontairement issue par issue. L'historique des pull requests permet de reconstruire la semaine de cours dans l'ordre.

## Prérequis

- Node.js LTS
- npm
- Git

## Installation

```bash
npm ci
npm run dev
```

Pour vérifier localement le build tel qu'il sera publié :

```bash
npm run build
npm run preview
```

## Vérifications

```bash
npm run typecheck
npm run test
npm run build
```

## Workflow

1. Choisir une issue dans le backlog.
2. Demander à Copilot un plan avant toute modification.
3. Créer une branche dédiée.
4. Implémenter uniquement les critères d'acceptation.
5. Vérifier localement, ouvrir une pull request et faire relire.
