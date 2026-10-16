# Guide de sécurité de Forgemonde

Ce document résume les mesures de sécurité recommandées pour ce dépôt et pour le jeu.

## 1) Sécurité du dépôt GitHub

- Activer le secret scanning de GitHub.
- Activer la protection des branches sur `main`.
- Exiger au moins une revue avant merge.
- Vérifier les mises à jour de dépendances via Dependabot.
- Ajouter CodeQL et les workflows de sécurité.
- Ne jamais publier de clés dans les fichiers du dépôt.

## 2) Sécurité des clés API

Le risque principal du projet actuel est la présence de clés IA côté navigateur.

### Recommandation recommandée

Ne laissez pas les clés API du fournisseur dans le navigateur si le jeu est un site public ou partagé.

La meilleure pratique est :

- backend serveur dédié à l'appel à l'IA,
- clés stockées dans des variables d'environnement du serveur,
- le navigateur envoie seulement la requête utilisateur, pas la clé.

### Si tu reste en mode frontend pur

- demander la clé manuellement à l'utilisateur,
- ne pas la précoder dans le dépôt,
- ne pas l'enregistrer dans le code source,
- la stocker uniquement côté navigateur à la demande avec consentement explicite.

## 3) Sécurité du jeu

- Ne pas exposer de données sensibles dans les fichiers statiques.
- Valider les entrées utilisateur côté serveur ; ne pas faire confiance au client.
- Utiliser HTTPS partout.
- Ne pas autoriser les appels cross-origin non nécessaires.
- Limiter les permissions du navigateur et des services tiers.

## 4) DDoS et infrastructure

Pour une exposition publique :

- mettre le site derrière un CDN/WAF (Cloudflare, Netlify CDN, etc.),
- limiter les requêtes abusives,
- activer les taux de limite et les blocages si nécessaire,
- sécuriser les endpoints internes,
- surveiller les erreurs et les pics d'accès.

## 5) Checklist avant publication

- [ ] Pas de clé API dans le dépôt.
- [ ] Secrets scannés.
- [ ] Branch protection activée.
- [ ] Dependabot activé.
- [ ] CodeQL activé.
- [ ] HTTPS obligatoire.
- [ ] Headers de sécurité vérifiés.
- [ ] Variables envoyées à Netlify via environnement.

## 6) Réponse aux incidents

En cas de fuite de clé ou d'accès suspect :

1. Révoquer immédiatement la clé compromise.
2. Régénérer les secrets concernées.
3. Vérifier les logs et les usages suspects.
4. Corriger la cause racine et documenter le correctif dans le dépôt.
5. Informer les utilisateurs concernés si une fuite de données existait.
