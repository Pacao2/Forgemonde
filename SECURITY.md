# Sécurité

Ce dépôt est public. Les règles de sécurité suivantes s'appliquent à tous les changements et à toutes les contributions.

## Principes de sécurité

- Ne jamais stocker de secrets dans le code source.
- Utiliser des variables d'environnement ou un serveur backend pour stocker les clés API.
- Ne jamais exposer de clés de production dans le dépôt ou dans les fichiers statiques.
- Vérifier la présence de secrets avant chaque commit et avant chaque publication.
- Revoir les dépendances et appliquer les mises à jour de sécurité.
- Ne pas accepter de secrets dans les issues, discussions ou fichiers de configuration publics.

## Reporting d'une vulnérabilité

Pour signaler une vulnérabilité de sécurité :

1. Utilisez le template GitHub Security Advisory si disponible.
2. Sinon, ouvrez un rapport dans l'onglet Security, ou utilisez le template de sécurité fourni dans `.github/ISSUE_TEMPLATE/security_report.md`.
3. Ne publiez pas de preuve de vulnérabilité dans un espace public si elle peut être exploitable avant correction.

## Sécurité du frontend

Le jeu est un fichier HTML statique côté client. Le risque principal est le stockage ou l'exposition des clés API dans le navigateur. Le site ne doit pas inclure de clés d'API dans :

- le code source,
- les variables de configuration publiques,
- les fichiers HTML/JS commités,
- le localStorage ou des cookies contenant des secrets.

Si vous utilisez des modèles d'IA (Claude, Mistral, OpenAI, etc.), ils doivent idéalement passer par un backend contrôlé qui stocke la clé côté serveur.

## Sécurité du dépôt

Les protections suivantes sont recommandées et seront mises en place dans ce dépôt :

- GitHub secret scanning
- push protection
- Dependabot pour les dépendances et les actions GitHub
- CodeQL pour la détection de vulnérabilités statiques
- protection des branches et revues obligatoires (à activer dans les paramètres GitHub)

## Mises à jour et surveillance

- Vérifier régulièrement `Dependabot` et les alertes de sécurité GitHub.
- Révoquer et régénérer immédiatement les clés compromises.
- Lancer un scan de secrets avant chaque publication publique.

## Bonnes pratiques côté Netlify

- Garder les secrets dans les variables d'environnement Netlify et non dans le code source.
- Utiliser HTTPS/TLS avec HSTS.
- Vérifier les en-têtes HTTP de sécurité (`Content-Security-Policy`, `X-Frame-Options`, etc.).
- Limiter les autorisations et les endpoints exposés.
