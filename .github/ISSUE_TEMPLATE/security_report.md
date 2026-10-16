name: Security report
about: Report a vulnerability or security issue privately
title: ""
labels: ["security"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Merci d'utiliser ce formulaire uniquement pour signaler une vulnéabilité de sécurité ou un problème de confidentialité.
        Pour les rapports non critiques, vous pouvez utiliser ce formulaire. Pour les vulnérabilités critiques, privilégiez GitHub Security Advisories si disponibles.

  - type: textarea
    id: summary
    attributes:
      label: Résumé
      description: Décrivez brièvement la vulnérabilité.
      placeholder: Exemple : fuite de données, abus d'API, accès non autorisé, etc.
    validations:
      required: true

  - type: textarea
    id: impact
    attributes:
      label: Impact
      description: Décrivez l'impact sur les utilisateurs, les données ou l'application.
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Étapes de reproduction
      description: Indiquez les étapes pour reproduire le problème, si disponibles.
    validations:
      required: true

  - type: textarea
    id: references
    attributes:
      label: Références / captures / logs
      description: Ajoutez tout élément utile (URLs, captures, journaux, payloads, etc.).
