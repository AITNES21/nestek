import type { Dictionary } from './types';

/**
 * ⚠️ PENDIENTE DE REVISIÓN NATIVA antes de usarlo comercialmente.
 * Francés redactado para el mercado suizo (CHF, "offre" en lugar de "devis"
 * en contexto comercial suizo, vouvoiement sistemático).
 * Dirigido a la Suiza romanda y a la parte francesa de la región trinacional.
 */
export const fr: Dictionary = {
  meta: {
    tagline: 'Nous construisons le système dont votre entreprise a besoin',
    description:
      'Logiciels sur mesure, CRM et infogérance pour les entreprises. Nous construisons le système, gérons le parc informatique et maintenons le tout en état de marche.',
    aboutDesc:
      'Ingénierie informatique appliquée : nous construisons des systèmes de gestion sur mesure et exploitons l’infrastructure qui les héberge.',
    servicesDesc:
      'Logiciels sur mesure, CRM, infogérance, automatisation et applications web pour les entreprises.',
    workDesc: 'Projets de logiciels, de systèmes et d’applications réalisés par NESTEK.',
    contactDesc:
      'Dites-nous quel processus est devenu trop étroit. Le premier entretien ne vous est pas facturé.',
  },
  nav: {
    services: 'Services',
    work: 'Réalisations',
    about: 'À propos',
    contact: 'Contact',
    cta: 'Prenons contact',
    menu: 'Ouvrir le menu',
    home: 'accueil',
    language: 'Langue',
    skip: 'Aller au contenu',
  },
  common: {
    seeDetail: 'En savoir plus',
    seeAll: 'Toutes les réalisations',
    visit: 'Visiter',
    talk: 'Prenons contact',
    tellUs: 'Parlez-nous de votre cas',
    seeServices: 'Voir les services',
  },
  home: {
    eyebrow: 'Logiciels sur mesure · CRM · Infogérance',
    h1: 'Nous construisons le système dont votre entreprise a besoin',
    lead: 'Et nous restons pour l’entretenir. Logiciels, CRM et parc informatique gérés par une seule équipe, à prix fixe.',
    facts: [
      { t: 'Développement', d: 'Logiciels sur mesure, CRM et interfaces' },
      { t: 'Systèmes', d: 'Postes de travail, réseau et serveurs' },
      { t: 'Un seul contrat', d: 'Les deux, la même équipe' },
    ],
    vs: {
      eyebrow: 'Pourquoi nous',
      h2: 'Un prestataire, pas trois',
      lead: 'L’usage veut une société pour le logiciel, une autre pour les ordinateurs et une troisième pour le site. Quand quelque chose tombe en panne, chacune désigne les deux autres.',
      badTag: 'L’habitude',
      goodTag: 'Avec NESTEK',
      bad: [
        'Une société écrit le logiciel',
        'Une autre gère les ordinateurs',
        'Une troisième détient le site',
      ],
      good: [
        'Développement et systèmes, même équipe',
        'Un contrat, un numéro de téléphone',
        'Le logiciel et la machine qui l’exécute',
      ],
      badEnd: 'Personne n’assume l’ensemble',
      goodEnd: 'Quand quelque chose tombe en panne, c’est notre problème',
    },
    signals: {
      eyebrow: 'Quand nous appeler a du sens',
      h2: 'Si cela vous parle, le problème n’est pas votre équipe. C’est l’outil.',
      items: [
        'Votre processus vit dans des tableurs partagés',
        'Quelqu’un passe des heures à recopier des données d’un système à l’autre',
        'Personne ne sait combien de machines existent ni dans quel état',
        'Le logiciel acheté n’est presque pas utilisé',
        'Vous ne trouvez personne à engager pour y remédier',
        'Votre prestataire précédent ne répond plus',
      ],
      foot: 'Rien de tout cela ne se règle en travaillant davantage. Cela se règle avec un système adapté à votre façon de travailler, et quelqu’un qui le maintient.',
    },
    services: {
      eyebrow: 'Services',
      h2: 'Ce que nous faisons',
      more: 'Automatisation, maintenance logicielle et portails web',
    },
    pricing: {
      eyebrow: 'Infogérance',
      h2: 'Prix par poste, sans surprise',
      lead: 'Tout le parc informatique géré. Vous savez ce que vous payez chaque mois dès le premier jour.',
      seats: 'postes',
      perSeat: 'par poste',
      month: 'CHF/mois',
      inclTitle: 'Inclus dans toutes les formules',
      included: [
        'Inventaire et suivi du parc',
        'Mises à jour et sécurité',
        'Sauvegardes vérifiées',
        'Arrivées et départs de collaborateurs',
        'Réseau, wifi et imprimantes',
        'Serveurs et cloud',
        'Rapport mensuel',
        'Assistance aux utilisateurs',
      ],
      note: 'Prix indicatifs pour des prestations fournies en Suisse, avec interlocuteur, hébergement et droit contractuel suisses. L’offre définitive dépend des serveurs, des sites et du niveau de service.',
      noteLink: 'Voir le détail',
    },
    steps: {
      eyebrow: 'Notre façon de travailler',
      h2: 'Le projet est le début, pas la fin',
      lead: 'La plupart des prestataires livrent puis disparaissent. Nous vendons le système et la maintenance ensemble, parce qu’un système sans maintenance se dégrade.',
      items: [
        {
          t: 'Nous comprenons le processus',
          d: 'Avant toute proposition, nous observons comment vous travaillez réellement : les étapes, les exceptions et où le temps se perd. Sans diagnostic, pas d’offre.',
        },
        {
          t: 'Prix fixe',
          d: 'Un prix, un périmètre, une date. Ce qui est inclus et ce qui ne l’est pas, par écrit. Pas de facturation horaire ni de surprise en cours de route.',
        },
        {
          t: 'Nous construisons et intégrons',
          d: 'Une livraison toutes les deux semaines et un environnement où vous le voyez fonctionner dès le début. Pas de disparition pendant un mois.',
        },
        {
          t: 'Nous restons',
          d: 'Maintenance du logiciel et du parc informatique, avec rapport mensuel. Le système continue de progresser après la livraison.',
        },
      ],
    },
    work: { eyebrow: 'Réalisations', h2: 'Quelques projets' },
    cta: {
      h2: 'Un processus est devenu trop étroit ?',
      lead: 'Dites-nous comment vous travaillez aujourd’hui. Si nous pouvons aider, nous vous le disons avec une offre à prix fixe. Sinon, nous vous le disons aussi.',
    },
  },
  services: {
    h1: 'Ce que nous construisons',
    lead: 'Tout part du même endroit : comprendre comment votre entreprise travaille et construire l’outil qui manque. Ensuite nous restons pour l’entretenir.',
    unsureH2: 'Vous ne savez pas lequel correspond ?',
    unsureLead:
      'C’est normal. Presque personne n’arrive en sachant ce dont il a besoin — on sait ce qui fait mal. Exposez-nous le problème et nous vous dirons si nous pouvons aider.',
    includesH2: 'Ce qui est inclus',
    signalsH2: 'Les signes que vous en avez besoin',
    startH2: 'Comment cela commence',
    startLead:
      'Un entretien pour comprendre le processus. Si nous pouvons aider, vous recevez une offre avec un périmètre défini et un prix fixe. Sans engagement, et l’entretien n’est pas facturé.',
    others: 'Autres services',
    breadcrumb: 'Fil d’Ariane',
  },
  work: {
    h1: 'Projets',
    lead: 'Chaque projet commence par un problème concret dans une entreprise concrète. En voici quelques-uns, et ce qu’ils ont résolu.',
    empty: 'Cette section est en préparation.',
    ctaH2: 'Votre cas ressemble à l’un d’eux ?',
    ctaLead:
      'Dites-nous quel processus est devenu trop étroit et nous vous dirons si nous pouvons aider.',
  },
  about: {
    h1: 'Développement et systèmes, un seul interlocuteur',
    lead: 'NESTEK est une société d’ingénierie informatique. Nous construisons le logiciel dont une entreprise a besoin pour travailler et nous exploitons l’infrastructure sur laquelle il tourne.',
    p2: 'Dans la plupart des cas, ce sont deux prestataires différents : l’un qui programme et l’autre qui gère les ordinateurs. Quand quelque chose ne va pas, chacun désigne l’autre. Ici, c’est le même contrat et le même numéro.',
    p3: 'Nous travaillons avec des entreprises qui ont grandi plus vite que leurs outils : des processus dans des tableurs, des logiciels que personne n’utilise, de l’information éparpillée entre les services et un parc informatique que personne ne maîtrise. Nous construisons le système manquant et restons pour l’entretenir.',
    capsEyebrow: 'Compétences',
    capsH2: 'Les deux moitiés du problème',
    capsFoot:
      'Un système qui fonctionne a besoin des deux. Les séparer est ce qui laisse les projets à moitié faits.',
    capabilities: [
      {
        area: 'Développement',
        items: [
          'Logiciels de gestion sur mesure',
          'CRM et processus commerciaux',
          'Interfaces et automatisation',
          'Applications et portails web',
        ],
      },
      {
        area: 'Systèmes',
        items: [
          'Parc informatique et utilisateurs',
          'Réseaux, serveurs et cloud',
          'Sauvegardes et reprise',
          'Sécurité et contrôle des accès',
        ],
      },
    ],
    howEyebrow: 'Notre façon de travailler',
    howH2: 'Quatre choses que nous ne négocions pas',
    principles: [
      {
        t: 'Prix fixe',
        d: 'Un périmètre, un prix, une date, par écrit avant de commencer. S’il faut changer quelque chose, nous en annonçons le coût avant de le faire.',
      },
      {
        t: 'Aucune dépendance cachée',
        d: 'Le code et les données vous appartiennent. Si vous décidez de partir, vous les emportez avec leur documentation. Nous ne retenons pas nos clients.',
      },
      {
        t: 'Un seul interlocuteur',
        d: 'Développement et systèmes sont pris en charge au même endroit. Quand quelque chose ne va pas, personne ne se renvoie la balle.',
      },
      {
        t: 'La technologie selon le problème',
        d: 'Nous n’avons pas d’outil favori à vendre. Nous choisissons selon ce que coûtera la maintenance dans cinq ans.',
      },
    ],
    ctaH2: 'On en parle ?',
    ctaLead: 'Le premier entretien sert à comprendre le problème. Nous ne le facturons pas.',
  },
  contact: {
    h1: 'Parlez-nous de votre cas',
    lead: 'Le plus efficace est de nous expliquer comment vous travaillez aujourd’hui et ce qui vous gêne le plus. Cela nous suffit pour dire si la discussion vaut la peine d’être poursuivie.',
    fields: {
      name: 'Nom',
      company: 'Entreprise',
      email: 'E-mail',
      phone: 'Téléphone',
      optional: '(facultatif)',
      message: 'Quel processus est devenu trop étroit ?',
      placeholder:
        'Par exemple : nous suivons les commandes dans un tableur partagé, et chaque nouvelle commande doit être ressaisie à la main dans le logiciel de facturation.',
      privacy: 'J’ai lu et j’accepte la',
      privacyLink: 'politique de confidentialité',
      submit: 'Envoyer',
      note: 'Nous répondons sous un jour ouvrable.',
    },
    directH: 'Direct',
    nextH: 'La suite',
    next: [
      'Nous répondons sous un jour ouvrable.',
      'Un entretien de 20 à 30 minutes pour comprendre le processus.',
      'Si nous pouvons aider, une offre avec un périmètre défini et un prix fixe.',
      'Sinon, nous vous le disons et vous orientons vers quelqu’un qui le peut.',
    ],
    whoH: 'Avec qui nous travaillons',
    who: 'Des entreprises avec une équipe et des processus devenus trop étroits. Projets à partir de CHF 4’500.',
    fallbackH2: 'Écrivez-nous directement',
    fallbackP:
      'Expliquez-nous en deux lignes comment vous travaillez aujourd’hui et ce qui vous gêne le plus. Nous répondons sous un jour ouvrable.',
  },
  footer: {
    servicesH: 'Services',
    companyH: 'Entreprise',
    contactH: 'Contact',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
  },
  services_data: {
    'software-a-medida': {
      title: 'Logiciel sur mesure',
      short: 'Des applications qui épousent votre façon de travailler, et non l’inverse.',
      pain: '« Nous avons un programme, mais la moitié du travail finit quand même dans Excel. »',
      intro:
        'Le logiciel standard oblige votre équipe à se plier à un processus qui n’est pas le sien. Nous construisons des applications qui partent de votre façon réelle de travailler : les étapes, les exceptions et les personnes concernées.',
      includes: [
        'Analyse du processus réel, pas de celui du manuel',
        'Conception fonctionnelle et validation avant toute ligne de code',
        'Développement, tests et mise en production',
        'Migration des données existantes',
        'Intégration avec les systèmes en place',
        'Formation de l’équipe et documentation',
      ],
      signals: [
        'Votre processus vit dans des tableurs partagés',
        'Chaque service tient sa propre version de l’information',
        'Du temps se perd à recopier des données',
        'Le logiciel acheté n’est presque pas utilisé',
      ],
      from: 'Dès CHF 12’000',
    },
    crm: {
      title: 'CRM sur mesure',
      short: 'La gestion des clients construite autour de votre façon de vendre.',
      pain: '« Nous avons acheté un CRM et nous notons toujours l’essentiel dans un carnet. »',
      intro:
        'Les CRM génériques échouent parce qu’ils imposent un entonnoir qui n’est pas le vôtre. Nous partons de votre processus commercial réel et construisons l’outil par-dessus, relié à ce que vous utilisez déjà.',
      includes: [
        'Modélisation de votre processus commercial',
        'Clients, opportunités et relances',
        'Automatisation des tâches répétitives',
        'Rapports et tableaux de bord réellement utiles',
        'Intégration avec la messagerie, la facturation et le site',
        'Migration depuis le CRM ou le tableur actuel',
      ],
      signals: [
        'Le CRM est plein de champs vides',
        'L’équipe commerciale le contourne',
        'Vous ne savez pas avec certitude combien d’affaires sont ouvertes',
        'L’information se perd entre le commercial et l’administration',
      ],
      from: 'Dès CHF 12’000',
    },
    'soporte-informatico': {
      title: 'Infogérance et maintenance informatique',
      short: 'Votre parc informatique, réseau et serveurs pris en charge par un seul prestataire.',
      pain: '« Quand quelque chose casse, on appelle une connaissance et on croise les doigts. »',
      intro:
        'Une entreprise de 30, 50 ou 100 postes a besoin de quelqu’un qui s’occupe des machines, des comptes, des sauvegardes, du réseau et des serveurs — avant la panne, pas après. Nous gérons l’ensemble du parc à un prix par poste, sans surprise.',
      includes: [
        'Inventaire et suivi de toutes les machines',
        'Mises à jour système et sécurité centralisées',
        'Antivirus et protection des postes',
        'Sauvegardes vérifiées des postes et des serveurs',
        'Arrivées, départs et changements d’utilisateurs',
        'Réseau, wifi, imprimantes et périphériques',
        'Serveurs et environnements cloud',
        'Rapport mensuel sur l’état du parc',
      ],
      signals: [
        'Personne ne sait combien de machines existent ni dans quel état',
        'Les ordinateurs sont mis à jour quand quelqu’un y pense',
        'Préparer le poste d’un nouveau collaborateur relève du parcours du combattant',
        'Le serveur a été monté par quelqu’un qui ne travaille plus ici',
        'Il n’existe aucun plan si une machine tombe demain',
        'Vous payez plusieurs prestataires et aucun n’assume',
      ],
      from: 'Dès CHF 40 par poste et par mois',
    },
    'mantenimiento-software': {
      title: 'Maintenance logicielle',
      short: 'Le système que nous avons construit, surveillé et amélioré chaque mois.',
      pain: '« On nous l’a livré, il a marché un an, et plus personne ne répond. »',
      intro:
        'Un système sans maintenance se dégrade : les dépendances vieillissent, les sauvegardes ne sont plus vérifiées et les améliorations sont repoussées. Nous restons après la livraison, avec un engagement mensuel et des heures incluses pour que le système ne s’immobilise pas.',
      includes: [
        'Surveillance avec alertes automatiques',
        'Sauvegardes quotidiennes et vérification de la restauration',
        'Mises à jour de sécurité et des dépendances',
        'Correction des anomalies sans coût supplémentaire',
        'Heures incluses chaque mois pour les évolutions',
        'Rapport mensuel d’état',
      ],
      signals: [
        'Personne n’a jamais vérifié que vos sauvegardes se restaurent',
        'Vous apprenez une panne quand quelqu’un appelle',
        'Les petites évolutions s’accumulent faute de devis',
        'Votre prestataire précédent ne répond plus',
      ],
      from: 'Dès CHF 300/mois',
    },
    automatizacion: {
      title: 'Automatisation et interfaces',
      short: 'Relier ce qui ne communique pas et supprimer le travail manuel répété.',
      pain: '« Quelqu’un passe une demi-journée à transférer des données d’un endroit à l’autre. »',
      intro:
        'Beaucoup d’entreprises ont de bons outils qui ne communiquent pas entre eux, et une personne qui fait le pont. Nous relions les systèmes et automatisons le transfert. C’est souvent le projet le plus vite rentabilisé.',
      includes: [
        'Repérage des endroits où le temps se perd',
        'Intégration entre systèmes via API',
        'Automatisation des tâches administratives et commerciales',
        'Traitement automatique des documents',
        'Alertes et notifications selon vos propres règles',
      ],
      signals: [
        'Quelqu’un recopie l’information d’un système à l’autre',
        'Les mêmes données sont saisies deux ou trois fois',
        'Les rapports sont montés à la main chaque mois',
        'Certaines erreurs viennent toujours du même transfert',
      ],
      from: 'Dès CHF 4’500',
    },
    'aplicaciones-web': {
      title: 'Applications et portails web',
      short: 'Portails clients, espaces privés et applications dans le navigateur.',
      pain: '« Nos clients nous demandent par e-mail des choses qu’ils pourraient consulter seuls. »',
      intro:
        'Une fois le système interne en place, l’étape suivante consiste souvent à l’ouvrir : le client consulte son statut, télécharge ses documents ou passe commande sans appeler. Nous le construisons sur le même système, pas à côté.',
      includes: [
        'Portails clients et espaces privés',
        'Applications web reliées à votre système',
        'Sites d’entreprise lorsqu’ils font partie du projet',
        'Performance, accessibilité et référencement technique',
      ],
      signals: [
        'Vous répondez au téléphone à des questions que le client pourrait résoudre seul',
        'Vous envoyez les documents un par un',
        'Votre site et votre système ne communiquent pas',
      ],
      from: null,
    },
  },
  projects_data: {
    unero: {
      client: 'Unero — Construction et rénovation · Ibiza et Formentera',
      summary:
        'Plateforme avec catalogue de projets, de biens et d’atelier, en deux langues et avec son propre backend. Pas une vitrine : un système qui gère leur information et grandit avec le chantier.',
      sector: 'Construction · Immobilier',
    },
    'tri-infinity': {
      client: 'Tri Infinity — Club sportif',
      summary:
        'Panneau de gestion propre permettant au club de publier ses actualités sans dépendre de personne. Plus besoin d’un développeur pour chaque modification.',
      sector: 'Sport · Club',
    },
    'distrito-44': {
      client: 'Distrito 44 — Agence immobilière',
      summary:
        'Portail de biens avec formulaires de contact intégrés, pour centraliser les demandes au lieu de les répartir entre téléphone et e-mail.',
      sector: 'Immobilier',
    },
    fastrecord: {
      client: 'FastRecord — Gestion immobilière, Ibiza',
      summary:
        'Collecte des demandes de location et d’entretien de biens depuis le mobile, avec des formulaires reliés à leur processus de travail.',
      sector: 'Immobilier',
    },
  },
};
