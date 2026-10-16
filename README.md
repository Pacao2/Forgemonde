# 🌍 Forgemonde — un monde qui se souvient de vos choix

<p align="center">
  <img src="docs/miniature-reddit.svg" alt="Forgemonde — miniature du jeu" width="640">
</p>

<p align="center">
  <a href="https://pacao2.github.io/Forgemonde/"><strong>▶ JOUER MAINTENANT — en 30 secondes</strong></a>
  &nbsp;·&nbsp;
  <a href="#-comment-jouer">Comment jouer</a>
  &nbsp;·&nbsp;
  <a href="#-journal-des-versions">Versions</a>
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-v17oct-d2a24c">
  <img alt="Sans inscription" src="https://img.shields.io/badge/sans%20inscription-oui-4c9a6a">
  <img alt="100% local" src="https://img.shields.io/badge/donn%C3%A9es-100%25%20locales-4c7a9a">
  <img alt="PWA" src="https://img.shields.io/badge/installable-PWA-8d6fb3">
  <img alt="Licence" src="https://img.shields.io/badge/licence-MIT-c05248">
</p>

> Projet solo développé sur mon temps libre, inspiré de [Pax Historia](https://www.paxhistoria.co/).

**Forgemonde** est un jeu narratif de stratégie qui tourne dans votre navigateur — un seul fichier HTML, aucune installation. Vous dirigez une faction, vous écrivez vos actions en langage naturel, et le monde réagit. Sa particularité : **le monde tient une bible vivante**. Chaque trahison, alliance ou famine laisse une trace durable qui revient vous hanter des dizaines de tours plus tard.

## 🎮 Comment jouer

1. Ouvrez [pacao2.github.io/Forgemonde](https://pacao2.github.io/Forgemonde/) (miroir : [forge-des-mondes.netlify.app](https://forge-des-mondes.netlify.app/))
2. Choisissez un **monde vedette** en un clic, ou « Découvrir en 30 secondes »
3. **Choisissez qui vous incarnerez** : une faction du scénario, **votre propre entité** (faction ou personnage), une nation déjà présente dans le scénario, ou « le monde entier »
4. Écrivez ce que fait votre camp — des exemples cliquables vous guident

Aucune inscription. Rien n'est envoyé. Votre partie reste dans votre navigateur.

## ⚙️ Deux moteurs, zéro obligation

| Mode | IA requise | Coût |
|---|---|---|
| **Moteur de règles** | ❌ Aucune | Gratuit, 100 % local |
| **IA générative** | ✅ Votre clé (Claude, Mistral, Gemini, OpenAI, OpenRouter, Ollama) | Selon votre fournisseur |
| **Hybride** | Optionnel | Combine les deux |

La clé IA (si vous en branchez une) est stockée **uniquement dans votre navigateur**. Le jeu fonctionne intégralement sans IA ni compte.

## ✨ Fonctionnalités

- 🎭 **Choisissez qui vous diriges** — les factions du scénario, ou créez votre propre entité (faction ou personnage) intégrée au monde comme une puissance à part entière, ou incarnez une nation déjà présente dans le scénario, ou mode « monde entier »
- 📖 **Bible du monde** — canon des faits établis, arcs narratifs, pistes de Chekhov : le monde n'oublie pas
- 🎭 **Rebonds de Chekhov** — les promesses posées il y a plus de 6 tours explosent enfin, même sans IA
- 🧠 **Chronique interactive** — gravez n'importe quel tour au canon d'un clic (« le monde s'en souvient »)
- 🏁 **Épilogue** — clôturez la partie avec le bilan mémorable de vos trahisons et alliances
- 🎯 **Objectifs de partie** — 2 à 3 objectifs suivis dans l'interface
- ⚖️ **Dilemmes mémorisés** — des décisions à 3 choix gravées au canon, consultation de vos conseillers possible avant de trancher
- 🗺️ **Carte vivante** — saisons, front de guerre animé, routes commerciales, anneaux d'événements, zooms cinématiques, lueurs de relief et infobulle au survol
- 🎨 **Interface vivante** — palette qui suit les saisons, éclat doré sur les événements marquants, lettrine enluminée, transition « page tournée », jauges circulaires, pastille d'alerte, parallaxe de l'accueil, ambiance « livre ancien » optionnelle
- 📍 **Lieux explorables** — chaque lieu du monde propose une expédition
- 🤝 **Diplomatie vivante** — alliances, guerres, dettes, espionnage, commerce
- 🌙 **Monde autonome** — le monde continue d'évoluer pendant votre absence
- 👥 **Multijoueur local** — jusqu'à 5 factions + mode spectateur
- 📤 **Partage** — livre de campagne, replay, image de carte, post Reddit/Discord, **semence FM-XXXXXX** importable
- ⬇️ **Téléchargeable** — l'onglet Télécharger emporte le jeu complet en un fichier HTML jouable hors ligne
- 📲 **PWA** — le site s'installe sur l'écran d'accueil et joue hors ligne
- 📰 **Journal relié au dépôt** — l'onglet Journal affiche l'activité GitHub du projet en plus du journal local
- 🌍 **6 langues** (fr, en, es, de, it, pt), mode sombre/clair avec bascule lune/soleil, accessibilité (animations réduites, contraste élevé, tailles de texte)

## 🔐 Sécurité

- **Content-Security-Policy** stricte : aucun script externe, workers et frames verrouillés
- **Zéro injection** : toute l'interface est construite en DOM natif (textContent), jamais en HTML interpolé
- **Clé IA locale** : stockée uniquement dans votre navigateur, jamais exportée ni loggée
- **Adresses IA validées** (https:// ou localhost uniquement) et **appels protégés par délai d'attente** (60 s / 120 s)
- **Exports échappés** (livre HTML) et **données importables systématiquement validées et tronquées**

## 📜 Journal des versions

Une version par jour, du plus récent au plus ancien.

### Vendredi 17 octobre 2026
- **v17oct — l'atlas s'illumine, et tu choisis qui tu diriges** : écran « Qui dirigeras-tu ? » (factions du scénario en cartes avec emblème et but, « Ma propre entité » — faction ou personnage intégrée au monde, ou incarnation d'une nation déjà présente dans le scénario — ou « Le monde entier »), choix mémorisé partout et modifiable à tout moment ; les nations ne s'inventent plus : elles se choisissent parmi celles du scénario ; polish visuel : éclat doré et pulsation de récompense, lettrine enluminée, transition « page tournée », lueurs de relief animées et infobulle de territoire sur la carte, palette saisonnière, jauges circulaires, badge d'alerte, squelettes de chargement, parallaxe de l'accueil, bouton lune/soleil, option « ambiance livre ancien » — le tout désactivé si les animations sont réglées sur réduit

### Jeudi 16 octobre 2026
- **v16oct — la mémoire qui paie** : mondes vedettes, rebonds de Chekhov, épilogue, chronique interactive, négociation à deux voix pendant les dilemmes, saisons et routes commerciales sur la carte, lieux explorables, semences FM-XXXXXX importables, fichiers .monde, test fantôme 20 tours, PWA ; journal relié au dépôt GitHub ; sécurité : délais d'attente sur les appels IA (60 s / 120 s), CSP renforcée ; correctifs de partage (lien et aperçu social vers le site principal, cache service worker renommé à chaque version)

### Mercredi 15 octobre 2026
- **v15oct** — objectifs de partie, dilemmes mémorisés, front de guerre animé, semences partageables, onglet Télécharger

### Mardi 14 octobre 2026
- **v14oct** — carte vivante, zooms cinématiques, refonte mobile, partage intégré

### Lundi 13 octobre 2026
- **v13oct** — monde autonome, accompagnement testeur, guide IA élargi

### Dimanche 12 octobre 2026
- **v12oct** — bible du monde, canon, arcs narratifs, PNJ, exports

### Samedi 11 octobre 2026
- **v11oct** — fondation : moteur, carte procédurale, multijoueur, i18n

## 🤝 Contribuer

Projet en **test public** — chaque retour compte :

- 🐛 Bug ou idée : ouvrez une [issue](https://github.com/Pacao2/Forgemonde/issues) (des templates sont fournis)
- 💬 Ou utilisez l'onglet **Retours** du jeu : il génère un rapport structuré prêt à coller
- 🧪 Le mode fantôme (Outils) teste automatiquement le moteur sur 20 tours

## 📄 Licence

Distribué sous licence [MIT](LICENSE). © Pacôme A., 2026.
