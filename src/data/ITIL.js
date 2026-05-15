const questions = [

    // ─── 1. Introduction à ITIL V4.0 ──────────────────────────────────────────
    {
        id: 'q1',
        question: "Qu'est-ce qu'ITIL V4.0 met principalement en avant par rapport aux versions précédentes ?",
        options: [
            "La fourniture de services IT selon un cycle de vie en cinq phases",
            "La création de valeur plutôt que la simple fourniture de services",
            "La standardisation des contrats avec les fournisseurs externes",
            "La réduction du nombre de pratiques de gestion à moins de 20",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL 4 met l'accent sur l'importance de la création de la valeur plutôt que sur la seule fourniture de services, ce qui constitue un changement de paradigme par rapport aux versions antérieures.",
    },
    {
        id: 'q2',
        question: "Quelle nouveauté technologique a été intégrée dans ITIL V4.0 par rapport à ITIL V3.0 ?",
        options: [
            "La virtualisation et l'outsourcing",
            "Les réseaux locaux et les serveurs dédiés",
            "Le cloud computing, Agile et DevOps",
            "L'électronique embarquée et le GPS",
        ],
        correctAnswer: 2,
        explanation:
            "ITIL V4.0 intègre des approches modernes telles que le cloud computing, Agile et DevOps, tandis qu'ITIL V3.0 se focalisait sur la virtualisation et l'outsourcing.",
    },
    {
        id: 'q3',
        question: "Quel est le principal objectif d'ITSM (IT Service Management) ?",
        options: [
            "Automatiser l'ensemble des processus RH d'une organisation",
            "Contrôler les activités impliquées dans la planification, conception, délivrance et gestion des services",
            "Remplacer les équipes IT par des systèmes d'intelligence artificielle",
            "Gérer uniquement les incidents de sécurité informatique",
        ],
        correctAnswer: 1,
        explanation:
            "L'ITSM se focalise sur la manière dont une organisation maintient les services IT pour ses clients, en contrôlant des activités telles que la planification, la conception, la délivrance, le déploiement et la gestion des services.",
    },
    {
        id: 'q4',
        question: "Parmi les niveaux de certification ITIL, lequel est le plus élevé ?",
        options: [
            "Fondation",
            "Intermédiaire",
            "Praticien",
            "Master",
        ],
        correctAnswer: 3,
        explanation:
            "Les 3 niveaux de certification ITIL sont : Fondation, Intermédiaire (avec les branches MP et SL) et Master. Le niveau Master est le plus avancé.",
    },
    {
        id: 'q5',
        question: "Quelle entreprise célèbre a adopté ITIL en 2008 pour résoudre ses problèmes de maintenance des informations et de disponibilité des actifs ?",
        options: [
            "Apple",
            "Google",
            "Disney",
            "Amazon",
        ],
        correctAnswer: 2,
        explanation:
            "Disney a adopté ITIL en 2008 pour améliorer sa gestion des services, notamment la disponibilité des actifs (100 %), la rentabilité et l'engagement des clients.",
    },
    {
        id: 'q6',
        question: "Dans quelle révolution industrielle se situe actuellement l'intelligence artificielle et l'Internet des objets ?",
        options: [
            "2ème révolution industrielle",
            "3ème révolution industrielle",
            "4ème révolution industrielle",
            "5ème révolution industrielle",
        ],
        correctAnswer: 2,
        explanation:
            "L'intelligence artificielle, l'Internet des objets et la réalité augmentée font partie de la 4ème révolution industrielle, qui succède à la révolution des ordinateurs et des NTIC (3ème).",
    },
    {
        id: 'q7',
        question: "Quelle est la principale différence entre ITIL V3.0 et ITIL V4.0 concernant le modèle de service ?",
        options: [
            "ITIL V3.0 proposait un système de coproduction de valeur, tandis qu'ITIL V4.0 propose un cycle de vie complet",
            "ITIL V4.0 est un système de coproduction de la valeur avec un système de valeur de services, alors qu'ITIL V3.0 structurait un cycle de vie complet",
            "ITIL V3.0 ignorait les processus métiers, contrairement à ITIL V4.0",
            "Il n'existe aucune différence fondamentale entre ITIL V3.0 et ITIL V4.0",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL V3.0 proposait un cycle de vie complet du service. ITIL V4.0 introduit un système de coproduction de la valeur avec le Système de Valeur de Services (SVS) comme architecture centrale.",
    },
    {
        id: 'q8',
        question: "Selon Gartner en 2024, quelle tendance émergente inclut les systèmes multi-agents et les robots humanoïdes ?",
        options: [
            "L'augmentation de la productivité des développeurs",
            "L'autonomisation grâce à l'expérience totale",
            "L'IA autonome",
            "La sécurité et confidentialité centrées sur l'humain",
        ],
        correctAnswer: 2,
        explanation:
            "Selon Gartner en 2024, l'IA autonome inclut les systèmes multi-agents, les grands modèles d'action, les clients-machines, les robots humanoïdes et les agents autonomes.",
    },

    // ─── 2. Concepts Clés ─────────────────────────────────────────────────────
    {
        id: 'q9',
        question: "Quelle est la différence entre une « sortie » (output) et un « résultat » (outcome) dans ITIL V4.0 ?",
        options: [
            "La sortie est subjective, le résultat est objectif et mesurable",
            "La sortie est le livrable tangible ou intangible produit, tandis que le résultat est le changement de situation perçu par le consommateur",
            "La sortie et le résultat sont des termes interchangeables dans ITIL V4.0",
            "Le résultat est toujours financier, la sortie est toujours technique",
        ],
        correctAnswer: 1,
        explanation:
            "Par exemple, pour un service photo de mariage, la sortie est l'album photo lui-même, tandis que le résultat est la satisfaction ressentie par le client en regardant l'album. Ce sont deux notions distinctes.",
    },
    {
        id: 'q10',
        question: "Dans la co-création de valeur, qui autorise le budget pour la consommation d'un service ?",
        options: [
            "L'utilisateur",
            "Le client",
            "Le sponsor",
            "Le fournisseur de service",
        ],
        correctAnswer: 2,
        explanation:
            "Dans le modèle ITIL V4.0, le sponsor est la personne qui autorise le budget pour la consommation du service. Le client définit les exigences, et l'utilisateur utilise le service.",
    },
    {
        id: 'q11',
        question: "Qu'est-ce que l'utilité d'un service dans ITIL V4.0 ?",
        options: [
            "La garantie que le service sera disponible 24h/24",
            "Les fonctionnalités et attributs offerts par un service pour satisfaire un besoin particulier, tels que perçus par le client",
            "L'ensemble des coûts associés à la consommation du service",
            "La continuité et la sécurité assurées par le fournisseur de service",
        ],
        correctAnswer: 1,
        explanation:
            "L'utilité répond à la question 'à quoi ça sert' : il s'agit des fonctionnalités et attributs offerts par un service pour satisfaire un besoin particulier, tels que perçus par le client. C'est la dimension 'performance en plus, contraintes en moins'.",
    },
    {
        id: 'q12',
        question: "Quelle est la définition correcte de la « garantie » (warranty) dans ITIL V4.0 ?",
        options: [
            "Un livrable tangible ou intangible produit par la réalisation d'une activité",
            "La fonctionnalité offerte par un produit ou service pour répondre à un besoin particulier",
            "L'assurance qu'un produit ou service répondra aux exigences convenues",
            "Un événement possible pouvant causer des dommages ou des pertes",
        ],
        correctAnswer: 2,
        explanation:
            "La garantie est une promesse ou une assurance qu'un produit ou un service répondra à ses exigences convenues. Elle couvre la disponibilité, la capacité, la continuité et la sécurité du service.",
    },
    {
        id: 'q13',
        question: "Quels sont les deux types de coûts qu'un consommateur de services devrait évaluer selon ITIL V4.0 ?",
        options: [
            "Le coût de création du service et le coût facturé pour le service",
            "Les coûts supprimés par le service et les coûts imposés par le service",
            "Le coût d'achat du logiciel et le coût d'achat du matériel",
            "Le coût de formation et le coût de déploiement",
        ],
        correctAnswer: 1,
        explanation:
            "Un consommateur de services doit évaluer les coûts supprimés par le service (bénéfices financiers) et les coûts imposés par le service (ce que le consommateur doit payer). Ces deux dimensions permettent d'évaluer la valeur réelle.",
    },
    {
        id: 'q14',
        question: "Quelle notion d'ITIL V4.0 est définie comme « un moyen de permettre la co-création de valeur en facilitant les résultats que les clients souhaitent réaliser » ?",
        options: [
            "Un produit",
            "Un service",
            "Une pratique",
            "Un processus",
        ],
        correctAnswer: 1,
        explanation:
            "Dans ITIL V4.0, un service est défini comme un moyen de permettre la co-création de valeur en facilitant les résultats (outcomes) que les clients souhaitent réaliser, sans que ces derniers aient à gérer les coûts et risques spécifiques.",
    },
    {
        id: 'q15',
        question: "La gestion des relations de service consiste en des activités conjointes réalisées par le fournisseur et le consommateur de service. Quel est son objectif principal ?",
        options: [
            "Réduire les coûts opérationnels du fournisseur",
            "Assurer la co-création de valeur sur la base d'offres de services convenues et disponibles",
            "Contrôler les performances individuelles des employés",
            "Documenter tous les incidents et problèmes de service",
        ],
        correctAnswer: 1,
        explanation:
            "La gestion des relations de services est constituée d'activités conjointes réalisées par le fournisseur et le consommateur pour assurer la co-création de valeur, sur la base d'offres de services convenues et disponibles.",
    },
    {
        id: 'q16',
        question: "La notion de « produit » dans ITIL V4.0 est composée de plusieurs éléments. Lequel des suivants N'en fait PAS partie ?",
        options: [
            "Les ressources (personnes, composants)",
            "Les accès (classique, cloud)",
            "Les processus légaux et réglementaires externes",
            "Les applications et systèmes informatiques",
        ],
        correctAnswer: 2,
        explanation:
            "Un produit dans ITIL V4.0 est composé des ressources disponibles, des accès (classique ou cloud), des actions réalisables avec les produits, et des applications/systèmes. Les processus légaux externes ne sont pas un composant direct d'un produit.",
    },
    {
        id: 'q17',
        question: "Quelle affirmation décrit le mieux la « valeur » dans ITIL V4.0 ?",
        options: [
            "Elle est définie unilatéralement par le fournisseur de service",
            "Elle doit être clairement définie comme but de l'organisation pour créer de la valeur pour ses parties prenantes",
            "Elle se limite aux bénéfices financiers mesurables d'un service",
            "Elle est identique à la qualité technique du service fourni",
        ],
        correctAnswer: 1,
        explanation:
            "Dans ITIL V4.0, la valeur doit être clairement définie comme but de l'organisation. Elle est co-créée avec les parties prenantes et ne se limite pas aux aspects financiers ou techniques.",
    },
    {
        id: 'q18',
        question: "Un service présente à la fois de l'utilité et de la garantie. Que se passe-t-il si seulement l'un des deux éléments est présent ?",
        options: [
            "Le service est tout de même considéré comme complet si l'utilité est assurée",
            "Le service ne peut créer de valeur que si les deux, utilité ET garantie, sont présents et adaptés",
            "La garantie seule suffit à créer de la valeur pour le client",
            "Il n'existe aucune relation entre utilité et garantie dans la création de valeur",
        ],
        correctAnswer: 1,
        explanation:
            "Pour créer de la valeur, un service doit être à la fois « adapté à l'usage » (utilité) ET « adapté à l'utilisation » (garantie). L'absence de l'un ou l'autre empêche la création de valeur.",
    },

    // ─── 3. Système de Valeur de Service (SVS) ────────────────────────────────
    {
        id: 'q19',
        question: "Que décrit le Système de Valeur de Service (SVS) d'ITIL V4.0 ?",
        options: [
            "Comment les processus de gestion des incidents sont documentés",
            "Comment toutes les composantes et activités de l'organisation travaillent ensemble comme un système pour créer de la valeur",
            "La hiérarchie des niveaux de certification ITIL",
            "La liste exhaustive des 34 pratiques de management",
        ],
        correctAnswer: 1,
        explanation:
            "Le SVS décrit comment toutes les composantes et les activités de l'organisation travaillent ensemble comme un système pour permettre de créer de la valeur, en garantissant la co-création de valeur continue avec les parties prenantes.",
    },
    {
        id: 'q20',
        question: "Quelle est la différence entre une « opportunité » et une « demande » dans le contexte du SVS ?",
        options: [
            "L'opportunité représente un risque potentiel, la demande est une exigence légale",
            "L'opportunité représente la possibilité d'ajouter de la valeur ou d'améliorer l'organisation, la demande est le besoin ou le désir à un produit ou service",
            "La demande et l'opportunité sont deux termes synonymes dans le SVS",
            "L'opportunité est interne à l'organisation, la demande vient toujours de clients externes",
        ],
        correctAnswer: 1,
        explanation:
            "L'opportunité représente la possibilité d'ajouter de la valeur ou d'améliorer l'organisation, et peut déclencher des activités même sans demande explicite. La demande, elle, est le besoin ou le désir concret d'un produit ou service.",
    },
    {
        id: 'q21',
        question: "Quelles sont les cinq composantes principales du SVS dans ITIL V4.0 ?",
        options: [
            "Stratégie, Conception, Transition, Production, Amélioration continue",
            "Principes directeurs, Gouvernance, Chaîne de valeur des services, Pratiques, Amélioration continue",
            "Utilité, Garantie, Valeur, Coût, Risque",
            "Organisation, Technologie, Fournisseurs, Processus, Personnes",
        ],
        correctAnswer: 1,
        explanation:
            "Les cinq composantes du SVS sont : les principes directeurs, la gouvernance, la chaîne de valeur des services (CVS), les pratiques, et l'amélioration continue. Ces éléments interagissent pour créer de la valeur.",
    },
    {
        id: 'q22',
        question: "Pourquoi ITIL SVS a-t-il été spécialement conçu pour décourager l'organisation en silos ?",
        options: [
            "Car les silos réduisent les coûts IT mais augmentent la satisfaction client",
            "Car les silos créent de la résistance aux changements, des difficultés de communication, de collaboration et d'accès à l'expertise",
            "Car les silos permettent une spécialisation accrue qui nuit à l'automatisation",
            "Car les silos sont uniquement un problème dans les grandes organisations multinationales",
        ],
        correctAnswer: 1,
        explanation:
            "L'organisation en silos génère de la résistance aux changements, des difficultés d'accès à l'information et à l'expertise, une réduction de l'efficience augmentant coûts et risques, et des difficultés de communication et collaboration.",
    },
    {
        id: 'q23',
        question: "Comment l'opportunité peut-elle déclencher des activités dans le SVS en l'absence de demande ?",
        options: [
            "Elle ne peut pas ; seule la demande peut déclencher des activités dans le SVS",
            "L'organisation peut prioriser de nouveaux services ou modifier des services existants grâce à une opportunité identifiée",
            "L'opportunité remplace automatiquement la demande dans tous les cas",
            "Elle déclenche uniquement des activités de gouvernance, pas de création de valeur",
        ],
        correctAnswer: 1,
        explanation:
            "Une opportunité peut déclencher des activités dans le SVS même sans demande explicite : l'organisation peut identifier, prioriser de nouveaux services ou modifier des services existants pour s'améliorer et allouer correctement ses ressources.",
    },
    {
        id: 'q24',
        question: "Quel problème l'organisation en silos crée-t-il au niveau de la prise de décision ?",
        options: [
            "Elle favorise une prise de décision trop rapide et impulsive",
            "Elle rend l'organisation incapable de prendre des décisions de changement et de réagir rapidement aux opportunités",
            "Elle oblige chaque département à prendre ses décisions de façon indépendante mais cohérente",
            "Elle améliore la prise de décision locale au détriment de la vision globale, ce qui est acceptable",
        ],
        correctAnswer: 1,
        explanation:
            "L'organisation en silos empêche d'agir rapidement face aux opportunités, rend l'organisation incapable de prendre des décisions de changement et peut faire en sorte que les pratiques organisationnelles deviennent elles-mêmes des silos.",
    },

    // ─── 4. Quatre Dimensions de la Gestion des Services ─────────────────────
    {
        id: 'q25',
        question: "Quelles sont les quatre dimensions de la gestion des services dans ITIL V4.0 ?",
        options: [
            "Stratégie, Conception, Transition, Production",
            "Organisations et personnes, Information et technologie, Partenaires et fournisseurs, Flux de valeur et processus",
            "Sécurité, Disponibilité, Continuité, Capacité",
            "Clients, Fournisseurs, Processus, Technologie",
        ],
        correctAnswer: 1,
        explanation:
            "Les quatre dimensions de la gestion des services sont : (1) Organisations et personnes, (2) Information et technologie, (3) Partenaires et fournisseurs, (4) Flux de valeur et processus. Chaque dimension est tributaire de contraintes externes (PESTLE).",
    },
    {
        id: 'q26',
        question: "La dimension « Organisations et personnes » couvre plusieurs aspects. Lequel N'en fait PAS partie ?",
        options: [
            "Rôles et responsabilités",
            "Recrutement et compétences",
            "Gestion du catalogue de services",
            "Culture organisationnelle",
        ],
        correctAnswer: 2,
        explanation:
            "La dimension 'Organisations et personnes' couvre les rôles et responsabilités, l'organisation formelle de la structure, le recrutement et les compétences, et la culture. La gestion du catalogue de services est une pratique de management de service, pas une dimension.",
    },
    {
        id: 'q27',
        question: "Quelle dimension de la gestion des services est centrée sur les activités et la coordination de celles-ci pour créer de la valeur ?",
        options: [
            "Organisations et personnes",
            "Information et technologie",
            "Partenaires et fournisseurs",
            "Flux de valeur et processus",
        ],
        correctAnswer: 3,
        explanation:
            "La dimension 'Flux de valeur et processus' se concentre sur les activités de l'organisation, leur organisation, et comment la création de valeur est assurée pour toutes les parties prenantes de façon efficiente.",
    },
    {
        id: 'q28',
        question: "Quel est le rôle principal du management de l'information selon la dimension « Information et technologie » ?",
        options: [
            "Documenter uniquement les incidents et les changements",
            "Représenter le moyen primaire pour délivrer la valeur au client",
            "Remplacer les processus humains par des systèmes automatiques",
            "Gérer exclusivement les aspects de sécurité informatique",
        ],
        correctAnswer: 1,
        explanation:
            "Dans la dimension 'Information et technologie', le management de l'information représente le moyen primaire pour délivrer la valeur au client. L'information doit répondre à des critères de disponibilité, fiabilité, temporalité, précision et pertinence.",
    },
    {
        id: 'q29',
        question: "Parmi les critères de qualité de l'information dans ITIL V4.0, lequel N'est PAS mentionné ?",
        options: [
            "Disponibilité",
            "Fiabilité",
            "Pertinence",
            "Rentabilité",
        ],
        correctAnswer: 3,
        explanation:
            "Les critères de qualité de l'information dans ITIL V4.0 sont : disponibilité, fiabilité, temporalité, précision et pertinence. La rentabilité n'est pas un critère de qualité de l'information en tant que tel.",
    },
    {
        id: 'q30',
        question: "Quelle question clé une organisation doit-elle se poser avant de choisir une technologie selon la dimension « Information et technologie » ?",
        options: [
            "Est-ce que la technologie est la plus récente disponible sur le marché ?",
            "Est-ce que l'organisation dispose des compétences nécessaires pour supporter et maintenir la technologie ?",
            "Est-ce que la technologie est utilisée par la majorité des concurrents ?",
            "Est-ce que la technologie garantit une réduction de 50% des coûts opérationnels ?",
        ],
        correctAnswer: 1,
        explanation:
            "Avant de choisir une technologie, l'organisation doit notamment vérifier qu'elle dispose des compétences pour la supporter et la maintenir, qu'elle s'aligne avec la stratégie, qu'elle n'ajoute pas de risques majeurs, et qu'elle restera viable dans le futur proche.",
    },
    {
        id: 'q31',
        question: "Dans la dimension « Partenaires et fournisseurs », quelle forme de coopération implique des objectifs partagés entre le fournisseur et le client ?",
        options: [
            "La fourniture de marchandises",
            "La fourniture de service",
            "Le partenariat de service",
            "La sous-traitance standard",
        ],
        correctAnswer: 2,
        explanation:
            "Le partenariat de service implique une co-création de valeur, des objectifs partagés, et une responsabilité partagée entre le fournisseur et le client. C'est le niveau le plus étroit de collaboration, distinct de la simple fourniture de biens ou services.",
    },
    {
        id: 'q32',
        question: "Quel facteur influence la stratégie d'une organisation pour le choix de ses partenaires et fournisseurs selon ITIL V4.0 ?",
        options: [
            "Le nombre d'employés certifiés ITIL dans l'organisation fournisseur",
            "La localisation géographique des fournisseurs potentiels uniquement",
            "Les coûts, l'expertise, les contraintes externes, les ressources, la culture et la stratégie",
            "Exclusivement les prix pratiqués par les fournisseurs",
        ],
        correctAnswer: 2,
        explanation:
            "La stratégie de choix des partenaires et fournisseurs est influencée par les coûts, le sujet d'expertise, les contraintes externes, les ressources disponibles, la coopération culturelle, la focalisation sur la stratégie et les modèles de demandes.",
    },
    {
        id: 'q33',
        question: "Qu'est-ce que la méthode SIAM mentionnée dans la dimension « Partenaires et fournisseurs » ?",
        options: [
            "Une méthode de calcul des coûts de service",
            "Une méthode d'intégration et de gestion des services garantissant la coordination des relations de services entre plusieurs fournisseurs",
            "Un système d'information pour la gestion des actifs informatiques",
            "Une norme internationale de certification pour les fournisseurs IT",
        ],
        correctAnswer: 1,
        explanation:
            "SIAM (Service Integration and Management) est la méthode d'intégration et de gestion des services utilisée pour coordonner les relations entre plusieurs fournisseurs via un intégrateur qui garantit que les relations de services sont correctement coordonnées.",
    },
    {
        id: 'q34',
        question: "Quel est l'avantage principal de la cartographie des flux de valeurs selon la dimension « Flux de valeur et processus » ?",
        options: [
            "Elle remplace entièrement la gouvernance dans les organisations",
            "Elle permet d'analyser l'état actuel, d'identifier les barrières et les activités sans valeur ajoutée",
            "Elle automatise tous les processus sans intervention humaine",
            "Elle garantit la conformité légale de tous les services",
        ],
        correctAnswer: 1,
        explanation:
            "La cartographie des flux de valeurs permet d'analyser l'état actuel, d'identifier les barrières et les activités n'ajoutant pas de valeur, et d'identifier les opportunités d'amélioration. Elle peut inclure l'automatisation pour gagner en efficience.",
    },
    {
        id: 'q35',
        question: "Parmi les facteurs externes PESTLE, lequel correspond aux restrictions sur l'utilisation de technologies open source dans certaines industries (finances, sciences de la vie) ?",
        options: [
            "Facteur Social (S)",
            "Facteur Technologique (T)",
            "Facteur Légal (L)",
            "Facteur Politique (P)",
        ],
        correctAnswer: 3,
        explanation:
            "Les restrictions sur l'utilisation de l'open source dans des secteurs comme la finance et les sciences de la vie relèvent du facteur Politique (P) dans PESTLE, qui inclut les lois, réglementations et restrictions liées à la nature du métier et aux politiques sectorielles.",
    },
    {
        id: 'q36',
        question: "Quelles sont les cinq caractéristiques du cloud computing selon la dimension « Information et technologie » ?",
        options: [
            "Sécurité, Disponibilité, Fiabilité, Performance, Coût",
            "Disponibilité sur demande, Accès réseau, Service mesuré, Partage des ressources, Élasticité rapide",
            "Virtualisation, Automatisation, Scalabilité, Résilience, Portabilité",
            "Infrastructure, Plateforme, Logiciel, Données, Sécurité",
        ],
        correctAnswer: 1,
        explanation:
            "Les cinq caractéristiques essentielles du cloud computing selon ITIL V4.0 sont : disponibilité sur demande, accès réseau, service mesuré (facturation à l'usage), partage des ressources, et élasticité rapide.",
    },
    {
        id: 'q37',
        question: "Un processus dans la dimension « Flux de valeur et processus » est défini comme :",
        options: [
            "Une ressource organisationnelle pour effectuer un travail ou atteindre un objectif",
            "Un ensemble d'activités en relation qui transforment des entrées en sorties, définissant les séquences d'activités et leurs dépendances",
            "Une promesse formelle de niveau de service entre le fournisseur et le consommateur",
            "Un composant technique permettant d'automatiser les tâches répétitives",
        ],
        correctAnswer: 1,
        explanation:
            "Un processus est un ensemble d'activités en relation qui transforment des entrées en sorties. Le processus définit les séquences d'activités et leurs dépendances, permettant une création de valeur structurée.",
    },

    // ─── 5. Principes Directeurs ──────────────────────────────────────────────
    {
        id: 'q38',
        question: "Combien de principes directeurs ITIL V4.0 définit-il ?",
        options: [
            "4",
            "5",
            "7",
            "9",
        ],
        correctAnswer: 2,
        explanation:
            "ITIL V4.0 définit 7 principes directeurs : Se focaliser sur la valeur, Commencer à son niveau, Avancer par itération avec feedback, Collaborer et promouvoir la visibilité, Penser et travailler de manière holistique, Opter pour la simplicité et la pratique, Optimiser et automatiser.",
    },
    {
        id: 'q39',
        question: "Quel principe directeur recommande d'organiser le travail en sections plus petites et gérables pouvant être exécutées et achevées en temps opportun ?",
        options: [
            "Se focaliser sur la valeur",
            "Commencer à son niveau",
            "Avancer par itération avec feedback",
            "Collaborer et promouvoir la visibilité",
        ],
        correctAnswer: 2,
        explanation:
            "Le principe 'Avancer par itération avec feedback' recommande d'organiser le travail en sections plus petites et gérables. L'amélioration peut être séquentielle ou simultanée, et des retours d'information doivent être recueillis avant, pendant et après chaque itération.",
    },
    {
        id: 'q40',
        question: "Quel principe directeur nécessite une compréhension de 'bout en bout' sur la manière dont la demande est capturée et traduite en résultats ?",
        options: [
            "Opter pour la simplicité et la pratique",
            "Penser et travailler de manière holistique",
            "Optimiser et automatiser",
            "Se focaliser sur la valeur",
        ],
        correctAnswer: 1,
        explanation:
            "Le principe 'Penser et travailler de manière holistique' nécessite une visibilité de bout en bout sur la manière dont la demande est capturée et traduite en résultats, en comprenant comment toutes les parties de l'organisation fonctionnent ensemble.",
    },
    {
        id: 'q41',
        question: "Selon le principe « Collaborer et promouvoir la visibilité », qu'arrive-t-il quand une organisation cherche à rendre tout le monde heureux par consensus ?",
        options: [
            "La satisfaction des parties prenantes augmente significativement",
            "Cela conduit à ne rien faire ou à produire quelque chose qui ne suit aucun besoin réel",
            "Le consensus garantit toujours une meilleure qualité de service",
            "Cela renforce la confiance entre fournisseur et consommateur",
        ],
        correctAnswer: 1,
        explanation:
            "Selon ITIL V4.0, la collaboration ne signifie pas consensus. Des organisations qui cherchent à mettre chacun d'accord finissent soit par ne rien faire, soit par produire quelque chose qui ne répond à aucun besoin concret.",
    },
    {
        id: 'q42',
        question: "Dans le principe « Se focaliser sur la valeur », quelles sont les deux formes d'expérience du consommateur mentionnées ?",
        options: [
            "L'expérience produit (EP) et l'expérience organisationnelle (EO)",
            "L'expérience client (EC) et l'expérience de l'utilisateur (EU)",
            "L'expérience technique (ET) et l'expérience business (EB)",
            "L'expérience directe (ED) et l'expérience indirecte (EI)",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL V4.0 distingue l'expérience client (EC), qui comprend l'ensemble des interactions du client avec l'organisation, et l'expérience de l'utilisateur (EU). Ces expériences peuvent être objectives ou subjectives et influencent la perception de la valeur.",
    },
    {
        id: 'q43',
        question: "Quel est l'ordre correct des étapes pour appliquer le principe « Se focaliser sur la valeur » ?",
        options: [
            "Identifier le consommateur → Automatiser le service → Mesurer les KPIs → Améliorer",
            "Identifier le consommateur de service → Connaître ses perspectives sur la valeur → Définir la valeur pour le consommateur → Connaître l'expérience client/utilisateur",
            "Définir la valeur → Créer le service → Livrer → Mesurer → Améliorer",
            "Analyser les coûts → Évaluer les risques → Concevoir le service → Déployer",
        ],
        correctAnswer: 1,
        explanation:
            "Pour appliquer le principe 'Se focaliser sur la valeur', les 4 étapes sont : (1) Identifier le consommateur de service, (2) Connaître ses perspectives sur la valeur, (3) Définir la valeur pour le consommateur (elle change avec le temps), (4) Connaître l'expérience client (EC) et l'expérience utilisateur (EU).",
    },
    {
        id: 'q44',
        question: "Selon le principe « Avancer par itération avec feedback », qu'est-ce qu'une itération ?",
        options: [
            "Un projet IT planifié sur plusieurs années",
            "Une situation dont une partie des sorties est utilisée comme entrée d'une nouvelle itération",
            "Un processus de validation finale avant déploiement",
            "Un audit interne réalisé une fois par an",
        ],
        correctAnswer: 1,
        explanation:
            "Une itération est une situation dont une partie des sorties est utilisée comme entrée d'une nouvelle itération. Ce mécanisme facilite la compréhension de la perception des utilisateurs, de l'efficience des activités CVS, et de l'interface avec les partenaires.",
    },
    {
        id: 'q45',
        question: "Selon le principe « Opter pour la simplicité et la pratique », quelle affirmation est correcte ?",
        options: [
            "Il faut toujours commencer par une approche complète et la simplifier ensuite",
            "Chaque activité doit créer de la valeur ; il faut utiliser le minimum d'étapes pour accomplir un objectif",
            "La complexité est un signe de maturité organisationnelle et doit être valorisée",
            "Les objectifs contradictoires sont normaux et doivent être maintenus",
        ],
        correctAnswer: 1,
        explanation:
            "Le principe 'Opter pour la simplicité et la pratique' stipule que chaque activité doit créer de la valeur, qu'il faut utiliser le minimum d'étapes pour accomplir un objectif, commencer avec une approche simple et ajouter des contrôles si nécessaire, et faire attention aux objectifs contradictoires.",
    },
    {
        id: 'q46',
        question: "Dans le principe « Optimiser et automatiser », quelle est la bonne séquence pour optimiser ?",
        options: [
            "Automatiser d'abord, puis optimiser les processus automatisés",
            "Simplifier et optimiser avant d'automatiser",
            "Automatiser simultanément à l'optimisation pour gagner du temps",
            "Optimiser uniquement après avoir reçu une plainte client",
        ],
        correctAnswer: 1,
        explanation:
            "Selon ITIL V4.0, il faut d'abord simplifier et optimiser avant d'automatiser. Tenter d'automatiser quelque chose de complexe n'atteindra probablement pas le résultat souhaité. Il faut cartographier les processus standard et les rationaliser en premier.",
    },
    {
        id: 'q47',
        question: "Quelle affirmation sur les principes directeurs est INCORRECTE ?",
        options: [
            "Ils guident l'organisation dans toutes les circonstances",
            "Ils sont applicables dans toutes les initiatives",
            "Ils s'appliquent uniquement aux équipes IT et non aux équipes métiers",
            "Ils encouragent et supportent l'amélioration continue à tous les niveaux",
        ],
        correctAnswer: 2,
        explanation:
            "Les principes directeurs d'ITIL V4.0 guident l'organisation dans toutes les circonstances, sont applicables dans toutes les initiatives et à tous les niveaux de l'organisation, pas uniquement aux équipes IT.",
    },
    {
        id: 'q48',
        question: "Le principe « Penser et travailler de manière holistique » stipule que l'automatisation peut faciliter le travail holistique. Quelle autre condition est clé pour appliquer ce principe ?",
        options: [
            "Disposer d'un budget IT illimité",
            "La collaboration entre toutes les parties de l'organisation",
            "La séparation stricte des équipes par spécialité",
            "L'élimination de toute forme de gouvernance",
        ],
        correctAnswer: 1,
        explanation:
            "La collaboration est la clé du principe 'Penser et travailler de manière holistique'. Il faut reconnaître la complexité du système, découvrir les modèles dans les besoins et interactions, et l'automatisation peut faciliter ce travail global.",
    },
    {
        id: 'q49',
        question: "Comment le principe « Commencer à son niveau » s'applique-t-il concrètement ?",
        options: [
            "En créant toujours un service entièrement nouveau sans tenir compte de l'existant",
            "En reconnaissant ce qui existe, en déterminant ce qui peut être réutilisé, et en reconnaissant parfois que rien de l'état courant ne peut être réutilisé",
            "En appliquant uniquement les meilleures pratiques d'autres organisations similaires",
            "En attendant que les ressources nécessaires soient entièrement disponibles avant de démarrer",
        ],
        correctAnswer: 1,
        explanation:
            "Le principe 'Commencer à son niveau' implique de voir ce qui existe, de reconnaître si des pratiques réussies peuvent être répliquées, d'appliquer le management des risques, et de reconnaître parfois que rien de l'état courant ne peut être réutilisé.",
    },
    {
        id: 'q50',
        question: "Une mauvaise visibilité selon le principe « Collaborer et promouvoir la visibilité » affecte principalement :",
        options: [
            "La vitesse d'automatisation des processus",
            "La prise de décision et la capacité d'amélioration des capacités internes",
            "Uniquement les relations avec les fournisseurs externes",
            "La satisfaction des équipes RH de l'organisation",
        ],
        correctAnswer: 1,
        explanation:
            "Une mauvaise visibilité affecte la prise de décision et la capacité de l'organisation à améliorer ses capacités internes. Elle empêche de comprendre le déroulement des travaux, d'identifier les goulots d'étranglement et de découvrir les failles.",
    },

    // ─── 6. Chaîne de Valeur de Service (CVS) ────────────────────────────────
    {
        id: 'q51',
        question: "Quelle est la définition de la Chaîne de Valeur de Service (CVS) ?",
        options: [
            "Un outil de mesure des performances financières des services IT",
            "Un modèle opératoire décrivant les activités pour répondre à la demande et faciliter la création de valeur",
            "Une liste des pratiques de management de service dans ITIL V4.0",
            "Un processus de validation et de test des nouveaux services",
        ],
        correctAnswer: 1,
        explanation:
            "La CVS est un modèle opératoire qui décrit les activités pour répondre à la demande et faciliter la création de valeur à travers la création et la gestion de produits et services.",
    },
    {
        id: 'q52',
        question: "Quel est le but de l'activité « Planification » dans la CVS ?",
        options: [
            "Développer les composants techniques des services",
            "S'assurer de la compréhension partagée de la vision, du contexte actuel et de la direction d'amélioration",
            "Fournir un point de contact unique pour les utilisateurs",
            "Négocier les contrats avec les partenaires et fournisseurs",
        ],
        correctAnswer: 1,
        explanation:
            "L'activité 'Planification' dans la CVS vise à assurer la compréhension partagée de la vision, du contexte actuel et de la direction d'amélioration. Elle inclut la création de plans, portefeuilles, architectures, politiques, etc.",
    },
    {
        id: 'q53',
        question: "Quelle activité de la CVS crée des composants de service ?",
        options: [
            "Améliorer (Improve)",
            "S'engager (Engage)",
            "Obtenir/Construire (Obtain/Build)",
            "Délivrer et supporter (Deliver and support)",
        ],
        correctAnswer: 2,
        explanation:
            "L'activité 'Obtenir/Construire' dans la CVS vise à s'assurer que les composants de service sont disponibles quand et où ils sont nécessaires. Elle se focalise sur le développement software et la gestion des infrastructures cloud et services tiers.",
    },
    {
        id: 'q54',
        question: "Quelles compétences sont prioritairement requises pour les personnes contribuant à l'activité « Planification » de la CVS ?",
        options: [
            "Compétences en développement logiciel et intégration",
            "Compétences en négociation et communication",
            "Compétences en analyse et management",
            "Compétences en priorisation et gestion des tâches complexes",
        ],
        correctAnswer: 2,
        explanation:
            "Les personnes contribuant à l'activité 'Planification' doivent avoir de grandes compétences en analyse et management, car cette activité concerne la vision stratégique, les plans, portefeuilles, architectures et politiques de l'organisation.",
    },
    {
        id: 'q55',
        question: "Quelle activité de la CVS comprend la négociation de contrats et d'accords avec les fournisseurs et partenaires ?",
        options: [
            "Planifier",
            "S'engager (Engage)",
            "Concevoir et Transition",
            "Améliorer",
        ],
        correctAnswer: 1,
        explanation:
            "L'activité 'S'engager' dans la CVS vise à fournir une bonne compréhension des besoins, un engagement continuel et une bonne relation avec TOUTES les parties prenantes (clients, fournisseurs, utilisateurs), ce qui inclut la négociation de contrats.",
    },
    {
        id: 'q56',
        question: "Quel est le but de l'activité « Concevoir et Transition » dans la CVS ?",
        options: [
            "S'assurer que les composants de service sont disponibles selon les spécifications",
            "Assurer que les produits et services atteignent continuellement les attentes des parties prenantes en termes de coût, qualité et délai de mise sur le marché",
            "Fournir un support aux utilisateurs lors d'interruptions de service",
            "Identifier les causes profondes des incidents récurrents",
        ],
        correctAnswer: 1,
        explanation:
            "L'activité 'Concevoir et Transition' vise à assurer que les produits et services atteignent continuellement les attentes des parties prenantes au niveau coût, qualité et 'à temps sur le marché', en se focalisant sur la création et publication de services nouveaux et modifiés.",
    },
    {
        id: 'q57',
        question: "Quel est le focus principal de l'activité « Fournir et Supporter » de la CVS ?",
        options: [
            "Développer de nouveaux services en collaboration avec les équipes Agile",
            "S'assurer que les services sont fournis et supportés selon les spécifications et attentes des parties prenantes",
            "Planifier les budgets pour les futurs projets d'amélioration",
            "Gérer les relations avec les fournisseurs de composants techniques",
        ],
        correctAnswer: 1,
        explanation:
            "L'activité 'Fournir et Supporter' vise à s'assurer que les services sont fournis et supportés selon les spécifications retenues et les attentes des parties prenantes. Les personnes impliquées doivent excelleront dans la priorisation et la gestion des tâches complexes.",
    },
    {
        id: 'q58',
        question: "L'activité « Amélioration » de la CVS se focalise sur :",
        options: [
            "L'amélioration continue des produits, services et pratiques à travers toutes les activités de la CVS et les 4 dimensions",
            "Uniquement l'amélioration des processus techniques de déploiement",
            "La réduction des coûts IT sans impact sur la qualité de service",
            "L'amélioration des relations avec les fournisseurs uniquement",
        ],
        correctAnswer: 0,
        explanation:
            "L'activité 'Amélioration' vise à assurer l'amélioration continue des produits, services et pratiques à travers toutes les activités de la CVS et les 4 dimensions de la gestion des services. Elle couvre tous les niveaux : composants, intégration, services, etc.",
    },

    // ─── 7. La Gouvernance ────────────────────────────────────────────────────
    {
        id: 'q59',
        question: "Par quelles trois activités la gouvernance est-elle réalisée dans ITIL V4.0 ?",
        options: [
            "Planifier, Exécuter, Contrôler",
            "Évaluer, Diriger, Surveiller",
            "Identifier, Analyser, Améliorer",
            "Concevoir, Déployer, Supporter",
        ],
        correctAnswer: 1,
        explanation:
            "La gouvernance dans ITIL V4.0 est réalisée à travers trois activités : Évaluer (les besoins des parties prenantes et les évolutions externes), Diriger (attribuer les responsabilités et implémenter la stratégie), et Surveiller (contrôler les performances).",
    },
    {
        id: 'q60',
        question: "Quel est le rôle du corps dirigeant dans la gouvernance selon ITIL V4.0 ?",
        options: [
            "Gérer uniquement les incidents majeurs et les crises",
            "Évaluer l'organisation, diriger la stratégie et surveiller les performances, en s'assurant de l'alignement de la CVS avec la stratégie",
            "Prendre en charge le support utilisateurs de premier niveau",
            "Valider techniquement chaque déploiement de service",
        ],
        correctAnswer: 1,
        explanation:
            "Le corps dirigeant évalue l'organisation, dirige la stratégie et les politiques, surveille les performances et s'assure que la chaîne de valeur et les pratiques suivent la stratégie. Il doit avoir une visibilité sur les résultats de l'amélioration continue.",
    },
    {
        id: 'q61',
        question: "Quelle relation existe entre la gouvernance et l'amélioration continue dans le SVS ?",
        options: [
            "La gouvernance remplace l'amélioration continue dans les grandes organisations",
            "Les principes directeurs et l'amélioration continue s'appliquent à tous les composants du SVS, y compris la gouvernance",
            "La gouvernance et l'amélioration continue sont totalement indépendantes",
            "L'amélioration continue est uniquement sous la responsabilité des équipes opérationnelles, pas de la gouvernance",
        ],
        correctAnswer: 1,
        explanation:
            "Les principes directeurs et l'amélioration continue s'appliquent à tous les composants du SVS, y compris la gouvernance. Le corps dirigeant doit avoir la visibilité sur les résultats des activités d'amélioration continue.",
    },

    // ─── 8. Amélioration Continue ─────────────────────────────────────────────
    {
        id: 'q62',
        question: "Quel est l'objectif du modèle d'amélioration continue dans ITIL V4.0 ?",
        options: [
            "S'assurer que les services IT sont continuellement alignés avec les besoins métiers des parties prenantes",
            "Réduire le nombre de pratiques ITIL à celles qui sont strictement nécessaires",
            "Automatiser tous les processus d'amélioration sans intervention humaine",
            "Éliminer progressivement les fournisseurs externes peu performants",
        ],
        correctAnswer: 0,
        explanation:
            "Le modèle d'amélioration continue vise à s'assurer que les services IT sont continuellement alignés avec les besoins métiers des parties prenantes. Il offre une approche structurée et s'applique aux activités de la CVS ainsi qu'aux pratiques.",
    },
    {
        id: 'q63',
        question: "Quelle est la recommandation de la pratique « d'amélioration continue » selon ITIL V4.0 ?",
        options: [
            "Il devrait y avoir une petite équipe dédiée à la direction des efforts d'amélioration continue",
            "Toutes les améliorations devraient être gérées comme des projets en plusieurs phases",
            "L'amélioration continue doit être intégrée à tous les niveaux, et non isolée",
            "Les fournisseurs externes devraient être exclus des initiatives d'amélioration",
        ],
        correctAnswer: 2,
        explanation:
            "La pratique 'd'amélioration continue' recommande qu'elle soit intégrée à tous les niveaux de l'organisation et ne soit pas isolée. Elle doit s'établir dans la chaîne de valeur de service et être soutenue au quotidien par toute l'organisation.",
    },
    {
        id: 'q64',
        question: "Dans quel contexte le modèle d'amélioration continue s'applique-t-il ?",
        options: [
            "Uniquement lors des audits annuels de performance",
            "Dans tous les niveaux et à travers les activités de la CVS, les pratiques et les dimensions",
            "Exclusivement pour les services IT en production depuis plus de 2 ans",
            "Seulement pour les services qui ont reçu des plaintes clients",
        ],
        correctAnswer: 1,
        explanation:
            "Le modèle d'amélioration continue s'applique dans tous les niveaux : amélioration des activités de la CVS, amélioration continue des pratiques, et soutien organisationnel au jour le jour. C'est un effort transversal et permanent.",
    },

    // ─── 9. Les Pratiques ─────────────────────────────────────────────────────
    {
        id: 'q65',
        question: "Qu'est-ce qu'une « pratique » dans ITIL V4.0 ?",
        options: [
            "Un processus documenté pour gérer les incidents",
            "Un ensemble de ressources organisationnelles conçues pour effectuer un travail ou atteindre un objectif",
            "Une règle imposée par la gouvernance pour contrôler les coûts",
            "Un niveau de service convenu entre le fournisseur et le client",
        ],
        correctAnswer: 1,
        explanation:
            "Une pratique dans ITIL V4.0 est un ensemble de ressources organisationnelles conçues pour effectuer un travail ou atteindre un objectif. Elle peut comprendre des processus, procédures, compétences, technologies, informations, etc.",
    },
    {
        id: 'q66',
        question: "Combien de pratiques de management ITIL V4.0 définit-il au total ?",
        options: [
            "14",
            "26",
            "34",
            "42",
        ],
        correctAnswer: 2,
        explanation:
            "ITIL V4.0 définit 34 pratiques de management réparties en 3 catégories : pratiques de management générale (14), pratiques de management de service (17), et pratiques de management technique (3).",
    },
    {
        id: 'q67',
        question: "Quelles sont les trois catégories de pratiques dans ITIL V4.0 ?",
        options: [
            "Pratiques stratégiques, pratiques tactiques, pratiques opérationnelles",
            "Pratiques de management générale, pratiques de management de service, pratiques de management technique",
            "Pratiques IT, pratiques métiers, pratiques RH",
            "Pratiques de conception, pratiques de déploiement, pratiques de support",
        ],
        correctAnswer: 1,
        explanation:
            "Les 34 pratiques ITIL V4.0 sont réparties en 3 catégories : (1) Pratiques de management générale (applicables à toute l'organisation), (2) Pratiques de management de service (pour des services spécifiques), (3) Pratiques de management technique (gestion de la technologie).",
    },
    {
        id: 'q68',
        question: "Laquelle des pratiques suivantes appartient aux pratiques de management TECHNIQUE d'ITIL V4.0 ?",
        options: [
            "Gestion des incidents",
            "Gestion des problèmes",
            "Gestion de déploiement",
            "Bureau de service",
        ],
        correctAnswer: 2,
        explanation:
            "Les 3 pratiques de management technique sont : Gestion de déploiement, Gestion des infrastructures et des plateformes, et Développement et gestion de logiciels. Les autres options sont des pratiques de management de service.",
    },
    {
        id: 'q69',
        question: "Quelle pratique générale de management vise à assurer la protection des informations d'une organisation selon les critères de disponibilité, confidentialité et intégrité ?",
        options: [
            "Gestion des risques",
            "Gestion de la sécurité de l'information",
            "Gestion des connaissances",
            "Mesures et rapport",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la sécurité de l'information' vise à assurer la protection des informations en garantissant leur disponibilité, confidentialité et intégrité, et en les protégeant contre tout accès non autorisé et utilisation abusive.",
    },
    {
        id: 'q70',
        question: "Quelle pratique de management de service assure la disponibilité de services minimaux en cas de catastrophe ?",
        options: [
            "Gestion des incidents",
            "Contrôle des changements",
            "Gestion de la continuité de service",
            "Gestion de la disponibilité",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion de la continuité de service' vise à assurer la disponibilité de services minimaux à un niveau suffisant pour que les entreprises puissent les soutenir en cas de catastrophe, distincte de la gestion de la disponibilité qui est une gestion normale.",
    },
    {
        id: 'q71',
        question: "Quelle pratique générale de management assure que l'organisation dispose de la bonne combinaison de programmes, projets, produits et services pour exécuter sa stratégie ?",
        options: [
            "Gestion de la stratégie",
            "Gestion de portefeuille",
            "Gestion d'architecture",
            "Gestion financière",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de portefeuille' s'assure que l'organisation dispose de la bonne combinaison de programmes, projets, produits et services pour exécuter sa stratégie dans les limites de ses financements et ressources.",
    },
    {
        id: 'q72',
        question: "Quelle pratique de management de service vise à maximiser le taux de réussite des changements exécutés dans un environnement de service ?",
        options: [
            "Gestion des versions",
            "Gestion des incidents",
            "Contrôle des changements",
            "Gestion des problèmes",
        ],
        correctAnswer: 2,
        explanation:
            "Le 'Contrôle des changements' vise à maximiser le taux de réussite des changements exécutés dans un environnement de service, grâce à une évaluation, une analyse et une autorisation appropriées de tous les changements.",
    },
    {
        id: 'q73',
        question: "Quelle est la différence principale entre la pratique « Gestion des incidents » et la pratique « Gestion des problèmes » ?",
        options: [
            "La gestion des incidents traite les causes profondes, la gestion des problèmes restaure les services",
            "La gestion des incidents restaure les services rapidement pendant les perturbations, la gestion des problèmes identifie les causes potentielles et réelles des incidents pour réduire leur probabilité",
            "Il n'existe aucune différence ; les deux pratiques sont interchangeables",
            "La gestion des problèmes concerne uniquement les incidents matériels, la gestion des incidents traite les pannes logicielles",
        ],
        correctAnswer: 1,
        explanation:
            "La gestion des incidents vise le rétablissement rapide des services normaux en minimisant l'impact. La gestion des problèmes identifie les causes potentielles et réelles, crée des solutions de contournement, et vise à prévenir les incidents récurrents.",
    },
    {
        id: 'q74',
        question: "Quelle pratique de management de service fournit « la source d'information unique pour tous les services et offres de services » ?",
        options: [
            "Gestion de la configuration de service",
            "Gestion du catalogue de services",
            "Gestion des niveaux de service",
            "Conception de service",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion du catalogue de services' fournit la source d'information unique et cohérente pour tous les services et offres de services. Le catalogue capture les détails des services opérationnels et constitue la seule source d'information pour toutes les offres.",
    },
    {
        id: 'q75',
        question: "Quelle pratique assure qu'il existe un point de contact unique pour les utilisateurs des services lors d'interruptions ou de demandes ?",
        options: [
            "Gestion des demandes de service",
            "Bureau de service (Help Desk)",
            "Gestion des niveaux de service",
            "Gestion des incidents",
        ],
        correctAnswer: 1,
        explanation:
            "Le 'Bureau de service' (Service Desk / Help Desk) s'assure qu'il existe un point de contact unique pour les utilisateurs des services à contacter en cas d'interruption de service, de demandes de service, etc.",
    },
    {
        id: 'q76',
        question: "Quelle pratique générale de management assure l'établissement de relations avec toutes les parties prenantes du niveau stratégique au niveau tactique ?",
        options: [
            "Gestion des fournisseurs",
            "Gestion des relations",
            "Gestion des effectifs et des talents",
            "Gestion du changement organisationnel",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des relations' assure l'engagement et l'établissement de relations avec toutes les parties prenantes à tous les niveaux (stratégique à tactique), incluant clients, fournisseurs, partenaires et fonctions internes.",
    },
    {
        id: 'q77',
        question: "Quelle pratique de management de service vise à définir, fixer et convenir d'objectifs clairs pour les services afin de surveiller leur performance tout au long de leur cycle de vie ?",
        options: [
            "Gestion de la disponibilité",
            "Gestion des niveaux de service",
            "Gestion de la capacité et des performances",
            "Validation et test du service",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des niveaux de service' vise à définir, fixer et convenir d'objectifs clairs pour les services (SLAs), afin que la performance puisse être surveillée et gérée tout au long du cycle de vie du service.",
    },
    {
        id: 'q78',
        question: "Quelle pratique générale de management se concentre sur la compréhension de tous les éléments d'une organisation et de leurs interactions, en s'appuyant sur des principes, outils et normes permettant une gestion structurée et agile ?",
        options: [
            "Gestion de la stratégie",
            "Gestion de portefeuille",
            "Gestion d'architecture",
            "Mesures et rapport",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion d'architecture' fournit une compréhension et une vue de tous les différents éléments d'une organisation et de la manière dont chacun s'interface ou interagit. Elle s'appuie sur des principes, outils et normes permettant une gestion structurée et agile.",
    },
    {
        id: 'q79',
        question: "Quelle pratique de management de service s'assure que la capacité est suffisante et que le service fonctionne au niveau attendu de manière rentable ?",
        options: [
            "Gestion de la disponibilité",
            "Gestion de la continuité de service",
            "Gestion de la capacité et des performances",
            "Gestion des versions",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion de la capacité et des performances' s'assure que la capacité est suffisante et disponible pour les services, et que le service fonctionne au niveau attendu, atteignant les objectifs exigés de manière rentable.",
    },
    {
        id: 'q80',
        question: "Quelle pratique générale de management assure la maintenance et l'amélioration des informations et des connaissances de manière efficace et efficiente dans toute l'organisation ?",
        options: [
            "Mesures et rapport",
            "Gestion des connaissances",
            "Gestion d'architecture",
            "Gestion de la sécurité de l'information",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des connaissances' assure la maintenance et l'amélioration des informations et des connaissances de manière efficace et efficiente pour une utilisation pratique des informations dans toute l'organisation.",
    },
    {
        id: 'q81',
        question: "La pratique « Gestion des actifs informatiques » planifie et gère le cycle de vie de tous les actifs IT. Quel est son objectif principal ?",
        options: [
            "Maximiser la valeur, contrôler les coûts, gérer les risques et permettre les décisions liées à l'approvisionnement et à la mise hors service",
            "Assurer la disponibilité 24/7 de tous les équipements informatiques",
            "Gérer exclusivement les licences logicielles et les contrats de maintenance",
            "Remplacer les actifs obsolètes par les dernières technologies disponibles",
        ],
        correctAnswer: 0,
        explanation:
            "La 'Gestion des actifs informatiques' vise à maximiser la valeur, contrôler les coûts, gérer les risques, permettre les décisions liées à l'approvisionnement, l'utilisation et la mise hors service des actifs, et répondre aux exigences contractuelles et réglementaires.",
    },
    {
        id: 'q82',
        question: "Quelle pratique de management de service s'assure que les services et composants sont systématiquement observés, détectés et rapportés ?",
        options: [
            "Gestion des incidents",
            "Surveillance et gestion des évènements",
            "Gestion des problèmes",
            "Gestion de la disponibilité",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Surveillance et gestion des évènements' s'assure que les services et composants de service sont systématiquement observés, détectés, reportés et signalés, permettant une réponse proactive aux changements d'état.",
    },
    {
        id: 'q83',
        question: "Quelle pratique de management de service assure la conception de services avec une utilité adaptée à l'usage ET une garantie adaptée à l'utilisation ?",
        options: [
            "Gestion des niveaux de service",
            "Validation et test du service",
            "Conception de service",
            "Gestion de la configuration de service",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Conception de service' assure la conception de services et produits ayant une utilité (adaptée à l'usage) et une garantie (adaptée à l'utilisation), ce qui permettra au client d'atteindre le résultat requis.",
    },
    {
        id: 'q84',
        question: "Quelle pratique générale de management gère les aspects humains lors de l'introduction, de la modification ou de la suppression d'un service ou produit ?",
        options: [
            "Gestion des effectifs et des talents",
            "Gestion du changement organisationnel",
            "Gestion des relations",
            "Gestion de projet",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion du changement organisationnel' assure la gestion des aspects humains lors de l'introduction, de la gestion ou de la modification d'un service ou produit, nécessitant une gestion efficace du changement pour obtenir des avantages durables.",
    },
    {
        id: 'q85',
        question: "Quelle est la différence entre la « Gestion de la disponibilité » et la « Gestion de la continuité de service » ?",
        options: [
            "Elles sont identiques, car les deux visent à assurer la disponibilité des services",
            "La gestion de la disponibilité garantit que la disponibilité répond aux besoins normaux de l'entreprise ; la gestion de la continuité assure des services minimaux en cas de catastrophe",
            "La gestion de la continuité gère la disponibilité au quotidien ; la gestion de la disponibilité est pour les situations de crise uniquement",
            "La gestion de la disponibilité est une pratique générale, la continuité est une pratique technique",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la disponibilité' garantit que la disponibilité des services répond aux besoins normaux des clients et utilisateurs. La 'Gestion de la continuité de service' assure des services minimaux en cas de catastrophe, assurant la survie de l'entreprise.",
    },

    // ─── Questions avancées et transversales ─────────────────────────────────
    {
        id: 'q86',
        question: "Pourquoi ITIL V4.0 se focalise-t-il sur l'approche pratique pour gérer la qualité de service plutôt que sur des processus rigides ?",
        options: [
            "Parce que les processus rigides garantissent toujours une meilleure qualité",
            "Pour permettre l'implémentation dans les petites et larges organisations et s'intégrer avec Agile, Lean et DevOps",
            "Parce que les processus rigides sont moins coûteux à maintenir",
            "Pour réduire le nombre de certifications ITIL nécessaires",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL V4.0 se focalise sur une approche pratique pour permettre son implémentation dans différentes tailles d'organisations et son intégration avec des plateformes modernes comme Agile, Lean et DevOps, en réponse à la transformation digitale.",
    },
    {
        id: 'q87',
        question: "Laquelle des pratiques suivantes N'appartient PAS aux pratiques de management générale d'ITIL V4.0 ?",
        options: [
            "Gestion des risques",
            "Gestion de la stratégie",
            "Gestion des incidents",
            "Gestion des connaissances",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des incidents' est une pratique de management de SERVICE, pas de management général. Les pratiques de management générale incluent : gestion des risques, de la stratégie, des connaissances, de la sécurité de l'information, des relations, etc.",
    },
    {
        id: 'q88',
        question: "Laquelle des pratiques suivantes N'appartient PAS aux pratiques de management de SERVICE d'ITIL V4.0 ?",
        options: [
            "Contrôle des changements",
            "Gestion des versions",
            "Gestion de déploiement",
            "Bureau de service",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion de déploiement' est une pratique de management TECHNIQUE. Les pratiques de management de service incluent : contrôle des changements, gestion des versions, bureau de service, gestion des incidents, problèmes, disponibilité, etc.",
    },
    {
        id: 'q89',
        question: "Quelle affirmation sur la dimension « Organisations et personnes » est la plus précise selon ITIL V4.0 ?",
        options: [
            "Elle se concentre exclusivement sur la structure hiérarchique formelle de l'organisation",
            "Elle couvre les rôles, responsabilités, culture, compétences et inclut le fait de privilégier des valeurs leaders motivant les personnes",
            "Elle est uniquement responsable du recrutement et de la formation des équipes IT",
            "Elle exclut les fournisseurs externes et partenaires, qui relèvent d'une autre dimension",
        ],
        correctAnswer: 1,
        explanation:
            "La dimension 'Organisations et personnes' couvre les rôles, responsabilités, l'organisation formelle, la culture, les compétences, les styles de management, et vise à promouvoir des valeurs leaders motivant les personnes à travailler de manière souhaitée.",
    },
    {
        id: 'q90',
        question: "Quelle pratique générale de management assure que l'organisation dispose du bon ensemble de personnes avec les compétences et connaissances appropriées ?",
        options: [
            "Gestion du changement organisationnel",
            "Gestion de projet",
            "Gestion des effectifs et des talents",
            "Gestion des relations",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des effectifs et des talents' s'assure que l'organisation dispose du bon ensemble de personnes possédant les compétences, capacités et connaissances appropriées qui soutiennent les objectifs de l'entreprise.",
    },
    {
        id: 'q91',
        question: "Quel élément du PESTLE inclut les lois de protection des données et les droits d'auteurs ?",
        options: [
            "Facteur Social (S)",
            "Facteur Légal (L)",
            "Facteur Politique (P)",
            "Facteur Technologique (T)",
        ],
        correctAnswer: 2,
        explanation:
            "Le facteur Politique (P) dans PESTLE inclut les lois, la réglementation, les stratégies, la bureaucratie, mais aussi les lois sur la protection des données, les droits d'auteurs, brevets et propriété intellectuelle. Le facteur Légal inclut les protections des consommateurs et de l'emploi.",
    },
    {
        id: 'q92',
        question: "La pratique « Gestion de la configuration de service » assure la disponibilité de quelles informations ?",
        options: [
            "Les contrats et SLAs signés avec tous les clients",
            "Les informations relatives à la configuration du service et des éléments de configuration (CI) et leurs relations",
            "Les rapports financiers liés aux coûts des services",
            "Les plans de continuité d'activité en cas de catastrophe",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la configuration de service' assure la disponibilité des informations relatives à la configuration du service et des éléments de configuration (CI), y compris les relations entre les CI (comment ils sont configurés ensemble).",
    },
    {
        id: 'q93',
        question: "Quelle pratique de management de service maintient la satisfaction des utilisateurs via un traitement efficace et professionnel des demandes de service ?",
        options: [
            "Gestion des incidents",
            "Bureau de service",
            "Gestion des demandes de service",
            "Gestion des niveaux de service",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des demandes de service' vise à maintenir la satisfaction des utilisateurs et clients via un traitement efficace et professionnel des demandes, fournir un canal formalisé pour recevoir et traiter les demandes, et informer sur la disponibilité des services.",
    },
    {
        id: 'q94',
        question: "Quelle affirmation concernant les pratiques ITIL V4.0 est CORRECTE ?",
        options: [
            "Une pratique ne peut comprendre qu'un seul type de ressource organisationnelle",
            "Les pratiques sont applicables uniquement aux organisations IT de grande taille",
            "Une pratique peut comprendre des processus, procédures, compétences, technologies, informations, relations et accords",
            "ITIL V4.0 impose l'implémentation de toutes les 34 pratiques pour être certifié",
        ],
        correctAnswer: 2,
        explanation:
            "Une pratique ITIL V4.0 peut comprendre des résultats et objectifs définis, des processus, procédures et interfaces, des structures organisationnelles et culturelles, des compétences et connaissances, des informations, des technologies, ainsi que des relations et accords.",
    },
    {
        id: 'q95',
        question: "Quel est le but de la pratique « Mesures et rapport » dans les pratiques générales de management ?",
        options: [
            "Gérer les risques liés aux performances des fournisseurs",
            "Mesurer et rendre compte de la performance de l'entreprise ou des services pour prendre des décisions et réduire l'incertitude",
            "Assurer la conformité légale de tous les rapports financiers",
            "Remplacer les évaluations humaines par des tableaux de bord automatisés",
        ],
        correctAnswer: 1,
        explanation:
            "La pratique 'Mesures et rapport' mesure et rend compte de la performance de l'entreprise ou des services, ce qui aide à prendre des décisions, améliorer les services et les performances, et réduire le niveau d'incertitude.",
    },
    {
        id: 'q96',
        question: "Quelle pratique de management de service assure que les nouveaux services ou modifiés et leurs fonctionnalités sont disponibles pour les utilisateurs ?",
        options: [
            "Contrôle des changements",
            "Gestion des versions",
            "Conception de service",
            "Gestion de la configuration de service",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des versions' s'assure que les nouveaux services ou services modifiés et leurs fonctionnalités sont disponibles pour les utilisateurs. Elle se distingue du contrôle des changements (qui autorise les changements) et de la gestion du déploiement (pratique technique).",
    },
    {
        id: 'q97',
        question: "La pratique « Validation et test du service » appartient à quelle catégorie de pratiques dans ITIL V4.0 ?",
        options: [
            "Pratiques de management général",
            "Pratiques de management de service",
            "Pratiques de management technique",
            "Elle n'existe pas dans ITIL V4.0",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Validation et test du service' est une pratique de management de service. Elle fait partie des 17 pratiques de management de service aux côtés de la gestion des incidents, problèmes, disponibilité, capacité, etc.",
    },
    {
        id: 'q98',
        question: "Quelle pratique générale de management vise à assurer le succès de tous les projets de l'organisation via l'adoption d'une approche formelle de gestion de projet ?",
        options: [
            "Gestion du changement organisationnel",
            "Gestion de la stratégie",
            "Gestion de projet",
            "Gestion de portefeuille",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion de projet' assure le succès de tous les projets de l'organisation par l'adaptation et l'adoption d'une approche formelle de gestion de projet, en maintenant également la motivation des personnes impliquées.",
    },
    {
        id: 'q99',
        question: "Quelle pratique générale de management s'assure que les investissements financiers sont utilisés efficacement et soutiennent la stratégie de l'organisation ?",
        options: [
            "Gestion de la stratégie",
            "Gestion de portefeuille",
            "Gestion financière des services",
            "Gestion des risques",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion financière des services' s'assure qu'on ne s'engage pas sur des services qu'on n'est pas capable de produire, et que tous les ressources et investissements financiers sont utilisés efficacement pour soutenir la stratégie et les plans de l'organisation.",
    },
    {
        id: 'q100',
        question: "La pratique « Analyse commerciale » (Business Analysis) dans les pratiques de management de service vise à :",
        options: [
            "Analyser les performances financières de l'organisation",
            "Assurer l'analyse des éléments business et recommander des solutions pour résoudre les problèmes de l'entreprise",
            "Contrôler la qualité des logiciels développés en interne",
            "Évaluer les offres des fournisseurs potentiels avant contractualisation",
        ],
        correctAnswer: 1,
        explanation:
            "La pratique 'Analyse commerciale' assure l'analyse des éléments business et la recommandation de solutions qui aborderont et résoudront les problèmes de l'entreprise, faisant le lien entre les besoins métiers et les solutions IT.",
    },

    // ─── Questions supplémentaires et approfondies ───────────────────────────
    {
        id: 'q101',
        question: "Dans ITIL V4.0, quelle affirmation sur la « valeur » est INCORRECTE ?",
        options: [
            "La valeur change avec le temps et dans différentes circonstances",
            "La valeur est définie par les besoins des consommateurs",
            "La valeur est uniquement définie par le fournisseur de service",
            "La valeur est prise en charge par l'optimisation des coûts et des risques",
        ],
        correctAnswer: 2,
        explanation:
            "Dans ITIL V4.0, la valeur est définie par les besoins des consommateurs (pas unilatéralement par le fournisseur), change avec le temps, et est prise en charge par l'optimisation des coûts et des risques. Le fournisseur contribue à la valeur mais ne la définit pas seul.",
    },
    {
        id: 'q102',
        question: "Quel composant du SVS est défini comme « un ensemble récurrent d'activités effectué à tous les niveaux » ?",
        options: [
            "Les principes directeurs",
            "La gouvernance",
            "L'amélioration continue",
            "La chaîne de valeur des services",
        ],
        correctAnswer: 2,
        explanation:
            "L'amélioration continue est définie dans le SVS comme un ensemble récurrent d'activités effectué à tous les niveaux de l'organisation. C'est sa caractéristique distinctive par rapport aux autres composants du SVS.",
    },
    {
        id: 'q103',
        question: "Selon ITIL V4.0, que signifie le fait que les activités, composantes et ressources de l'organisation peuvent être « configurés et agencés en multiples combinaisons » ?",
        options: [
            "Que chaque organisation doit implémenter ITIL exactement de la même manière",
            "Que le SVS est flexible et que sa coordination est nécessaire pour être efficace",
            "Que les pratiques sont optionnelles et peuvent être ignorées selon les besoins",
            "Que la gouvernance peut être supprimée dans les petites organisations",
        ],
        correctAnswer: 1,
        explanation:
            "Le fait que les activités, composantes et ressources puissent être configurés en multiples combinaisons signifie que le SVS est flexible. Cela exige la coordination des activités et pratiques de toutes les parties pour être efficace, ce qui est précisément le rôle du SVS.",
    },
    {
        id: 'q104',
        question: "Parmi les éléments clés « personnes » dans la dimension « Organisations et personnes », lequel N'est PAS mentionné ?",
        options: [
            "Les clients",
            "Les employés des fournisseurs",
            "Les régulateurs et organismes gouvernementaux",
            "Les employés du fournisseur de service",
        ],
        correctAnswer: 2,
        explanation:
            "Les éléments clés 'personnes' dans la dimension 'Organisations et personnes' sont : les clients, les employés des fournisseurs, les employés du fournisseur de service, et les autres parties prenantes dans la relation de services. Les régulateurs ne sont pas listés dans cette catégorie (ils font partie des facteurs PESTLE externes).",
    },
    {
        id: 'q105',
        question: "Quelle affirmation sur le « facteur Environnemental (E) » du PESTLE est correcte ?",
        options: [
            "Il concerne uniquement les catastrophes naturelles affectant les data centers",
            "Il inclut les conditions météorologiques, le changement climatique, les lois antipollution et les attitudes envers les énergies renouvelables",
            "Il est le moins important des six facteurs PESTLE pour les organisations IT",
            "Il se limite aux réglementations sur la gestion des déchets électroniques",
        ],
        correctAnswer: 1,
        explanation:
            "Le facteur Environnemental (E) dans PESTLE inclut les conditions météorologiques, le changement climatique, les lois pour lutter contre la pollution et la gestion des déchets, et les attitudes des entreprises et consommateurs à l'égard des énergies renouvelables et produits respectueux de l'environnement.",
    },
    {
        id: 'q106',
        question: "Quelle est la relation entre les principes directeurs et les initiatives d'amélioration dans ITIL V4.0 ?",
        options: [
            "Les principes directeurs ne s'appliquent qu'à la gouvernance, pas aux initiatives d'amélioration",
            "Les principes directeurs s'appliquent dans toutes les initiatives et encouragent et supportent l'amélioration continue à tous les niveaux",
            "Les initiatives d'amélioration remplacent les principes directeurs lorsqu'elles sont activées",
            "Les principes directeurs sont des suggestions optionnelles pour les initiatives d'amélioration",
        ],
        correctAnswer: 1,
        explanation:
            "Les principes directeurs guident l'organisation dans toutes les circonstances et sont applicables dans toutes les initiatives. Ils encouragent et supportent l'amélioration continue dans tous les niveaux, créant une base de culture partagée qui décourage les silos.",
    },
    {
        id: 'q107',
        question: "Selon le principe « Commencer à son niveau », comment l'organisation doit-elle appliquer le management des risques ?",
        options: [
            "Elle doit ignorer les risques existants et se focaliser sur les nouveaux risques uniquement",
            "Le management des risques doit être appliqué dans le processus de prise de décision lors de la reconnaissance de ce qui existe",
            "Elle doit externaliser la gestion des risques à des consultants spécialisés",
            "Les risques ne sont évalués qu'après l'implémentation d'une nouvelle pratique",
        ],
        correctAnswer: 1,
        explanation:
            "Selon le principe 'Commencer à son niveau', le management des risques doit être appliqué dans le processus de prise de décision lors de la reconnaissance et de la détermination de ce qui peut être réutilisé ou ce qui doit être créé.",
    },
    {
        id: 'q108',
        question: "La pratique « Gestion des fournisseurs » dans les pratiques générales de management vise à :",
        options: [
            "Négocier uniquement les prix avec les fournisseurs",
            "Assurer la gestion des fournisseurs et leurs performances pour soutenir la fourniture transparente de produits et services de qualité",
            "Remplacer les fournisseurs existants par de nouveaux fournisseurs moins coûteux",
            "Gérer exclusivement les contrats d'approvisionnement matériel",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des fournisseurs' assure la gestion des fournisseurs et leurs performances pour soutenir la fourniture transparente de produits et services de qualité, couvrant l'ensemble du cycle de vie de la relation fournisseur.",
    },
    {
        id: 'q109',
        question: "Dans le contexte de la co-création de valeur, quelle est la distinction entre le « client » et l' « utilisateur » dans ITIL V4.0 ?",
        options: [
            "Le client et l'utilisateur sont toujours la même personne dans les organisations modernes",
            "Le client fournit les exigences et assume la responsabilité des résultats ; l'utilisateur utilise le service au quotidien",
            "L'utilisateur est responsable du budget, le client utilise le service",
            "Le client est interne à l'organisation, l'utilisateur est toujours externe",
        ],
        correctAnswer: 1,
        explanation:
            "Dans ITIL V4.0, le client fournit les exigences d'un service et assume la responsabilité des résultats de la consommation du service, tandis que l'utilisateur est la personne qui utilise le service au quotidien. Ces rôles peuvent être joués par des personnes différentes ou la même personne.",
    },
    {
        id: 'q110',
        question: "Quel est l'objectif principal de la « Gestion de la stratégie » dans les pratiques générales de management ?",
        options: [
            "Assurer la gestion des contrats à long terme avec les clients",
            "Établir la stratégie et les orientations pour les organisations, définir les buts et objectifs, et définir le cours des actions",
            "Optimiser les processus opérationnels quotidiens",
            "Gérer les risques liés aux changements technologiques",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la stratégie' assure l'établissement de la stratégie et des orientations pour les organisations, définit les buts et objectifs, et détermine le cours des actions pour atteindre ces objectifs.",
    },

    // ─── 50 questions supplémentaires (q111–q160) ─────────────────────────────
    {
        id: 'q111',
        question: "Laquelle des affirmations suivantes décrit le mieux le principe « Penser et travailler de manière holistique » dans ITIL V4.0 ?",
        options: [
            "Effectuer un examen des pratiques de gestion existantes et décider ce qu'il faut conserver",
            "Examiner la façon dont une initiative peut être organisée en sections plus petites",
            "Utiliser les quatre dimensions de la gestion des services pour assurer la coordination de tous les aspects d'une initiative",
            "Examiner les pratiques et éliminer toute complexité inutile",
        ],
        correctAnswer: 2,
        explanation:
            "Le principe 'Penser et travailler de manière holistique' implique d'utiliser les quatre dimensions de la gestion des services pour assurer la coordination de tous les aspects d'une initiative d'amélioration ou de création de service.",
    },
    {
        id: 'q112',
        question: "Quel facteur PESTLE concerne les revenus des consommateurs, la politique fiscale et les taux d'intérêts ?",
        options: [
            "Politique (P)",
            "Économique (E)",
            "Social (S)",
            "Technologique (T)",
        ],
        correctAnswer: 1,
        explanation:
            "Le facteur Économique (E) dans PESTLE inclut les revenus des consommateurs, la politique fiscale, les tendances boursières, les taux d'intérêts, la croissance économique et le coût du travail.",
    },
    {
        id: 'q113',
        question: "Selon ITIL V4.0, un mécanisme d'itération bien formulé peut faciliter la compréhension de quel aspect des partenaires et fournisseurs ?",
        options: [
            "Le coût des contrats signés avec chaque fournisseur",
            "L'interface entre l'organisation et ses partenaires et le réseau de fournisseurs",
            "La liste complète des fournisseurs homologués",
            "Les certifications détenues par chaque fournisseur",
        ],
        correctAnswer: 1,
        explanation:
            "Un mécanisme d'itération bien formulé facilite la compréhension de l'interface entre l'organisation et ses partenaires et le réseau de fournisseurs, entre autres aspects comme la perception des utilisateurs, l'efficience de la CVS et la demande de produits/services.",
    },
    {
        id: 'q114',
        question: "Quelle question une organisation doit-elle se poser pour créer, délivrer et améliorer un service de façon efficiente, selon la dimension « Flux de valeur et processus » ?",
        options: [
            "Quel est le budget annuel alloué à ce service ?",
            "Qui sont les concurrents proposant des services similaires ?",
            "Quel est le modèle générique délivré pour ce service et comment le service fonctionne ?",
            "Combien de temps prendra la certification ITIL de notre équipe ?",
        ],
        correctAnswer: 2,
        explanation:
            "Selon la dimension 'Flux de valeur et processus', une organisation doit répondre à : Quel est le modèle générique délivré pour ce service et comment fonctionne-t-il, quels sont les flux de valeurs générés, et qui fournit les activités du service.",
    },
    {
        id: 'q115',
        question: "Dans le principe « Optimiser et automatiser », quelle est la première étape de l'optimisation ?",
        options: [
            "Automatiser les tâches les plus répétitives immédiatement",
            "Comprendre et accepter le contexte dans lequel l'optimisation proposée existe",
            "Définir les métriques de succès de l'optimisation",
            "Obtenir le budget approuvé par la direction",
        ],
        correctAnswer: 1,
        explanation:
            "La première étape de l'optimisation selon ITIL V4.0 est de comprendre et accepter le contexte dans lequel l'optimisation proposée existe, avant d'évaluer l'état actuel, d'obtenir l'engagement des parties prenantes, d'approuver le futur état, d'exécuter et de surveiller.",
    },
    {
        id: 'q116',
        question: "Quelle affirmation sur l'automatisation est INCORRECTE selon le principe « Optimiser et automatiser » ?",
        options: [
            "L'automatisation est l'utilisation de la technologie pour effectuer des étapes avec une limitation de l'intervention humaine",
            "L'automatisation des tâches fréquentes aide les organisations à se développer",
            "L'automatisation de quelque chose de complexe atteindra probablement le résultat souhaité",
            "La forme la plus simple d'automatisation implique la standardisation des tâches manuelles",
        ],
        correctAnswer: 2,
        explanation:
            "ITIL V4.0 stipule que tenter d'automatiser quelque chose de complexe n'atteindra probablement PAS le résultat souhaité. Il faut d'abord simplifier et optimiser avant d'automatiser, en cartographiant les processus standard et en les rationalisant.",
    },
    {
        id: 'q117',
        question: "Comment ITIL V4.0 définit-il la relation entre les principes directeurs et le SVS ?",
        options: [
            "Les principes directeurs sont indépendants du SVS et s'appliquent uniquement à la gouvernance",
            "Les principes directeurs guident l'organisation dans toutes les circonstances et constituent l'un des cinq composants du SVS",
            "Le SVS remplace les principes directeurs dans les organisations matures",
            "Les principes directeurs sont créés par la gouvernance et imposés au SVS",
        ],
        correctAnswer: 1,
        explanation:
            "Les principes directeurs sont l'un des cinq composants du SVS. Ils guident l'organisation dans toutes les circonstances, sont applicables dans toutes les initiatives, et créent une base de culture partagée qui décourage les silos.",
    },
    {
        id: 'q118',
        question: "La pratique « Gestion des risques » dans ITIL V4.0 couvre :",
        options: [
            "Uniquement les risques liés à la sécurité informatique",
            "La gestion efficace et efficiente des risques tout au long de la chaîne de valeur des services et du cycle de vie des services/produits",
            "Les risques liés aux fournisseurs uniquement",
            "Exclusivement les risques financiers de l'organisation",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des risques' dans ITIL V4.0 assure la gestion efficace et efficiente des risques d'une organisation tout au long de la chaîne de valeur des services et tout au long du cycle de vie des services, produits et activités.",
    },
    {
        id: 'q119',
        question: "Selon ITIL V4.0, quel est le défi principal pour les organisations utilisant des technologies de type 'open source' dans les secteurs des finances et des sciences de la vie ?",
        options: [
            "Le coût élevé des licences open source",
            "Des restrictions liées à la nature du métier et aux politiques sectorielles qui interdisent l'usage de l'open source",
            "L'insuffisance des fonctionnalités des solutions open source pour ces secteurs",
            "Le manque de support technique pour les solutions open source",
        ],
        correctAnswer: 1,
        explanation:
            "Selon ITIL V4.0, les industries comme les finances et les sciences de la vie ne peuvent pas utiliser l'open source et les services publics en raison de restrictions liées à la nature du métier (réglementations sectorielles et politiques de conformité).",
    },
    {
        id: 'q120',
        question: "Dans la CVS, quelle activité nécessite une compréhension globale du management des services de la part des personnes y contribuant ?",
        options: [
            "Planification",
            "S'engager",
            "Concevoir et Transition",
            "Obtenir et Construire",
        ],
        correctAnswer: 2,
        explanation:
            "L'activité 'Concevoir et Transition' nécessite que les personnes y contribuant aient une compréhension globale du management des services, car cette activité assure que les produits et services atteignent continuellement les attentes des parties prenantes en termes de coût, qualité et délai.",
    },
    {
        id: 'q121',
        question: "Quelle caractéristique du cloud computing permet de fournir rapidement des ressources sans coût de management minimal ?",
        options: [
            "Service mesuré",
            "Partage des ressources",
            "Disponibilité sur demande",
            "Élasticité rapide",
        ],
        correctAnswer: 2,
        explanation:
            "La 'disponibilité sur demande' est la caractéristique du cloud computing qui permet d'accéder au réseau à la demande à un ensemble partagé de ressources informatiques pouvant être rapidement fournis avec un coût de management minimal et une interaction fournisseur optimisée.",
    },
    {
        id: 'q122',
        question: "Quelle pratique générale de management assure l'établissement de la stratégie et des orientations pour l'organisation ?",
        options: [
            "Gestion de portefeuille",
            "Gestion d'architecture",
            "Gestion de la stratégie",
            "Mesures et rapport",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion de la stratégie' assure l'établissement de la stratégie et des orientations pour les organisations, définit les buts et objectifs, et le cours des actions pour atteindre ces objectifs, en fournissant la direction générale de l'organisation.",
    },
    {
        id: 'q123',
        question: "Comment les quatre dimensions de la gestion des services sont-elles liées aux facteurs externes ?",
        options: [
            "Les quatre dimensions sont entièrement internes et ne sont pas affectées par les facteurs externes",
            "Les quatre dimensions sont tributaires d'un ensemble de contraintes externes (PESTLE) qui pèsent sur le SVS",
            "Les facteurs externes remplacent les quatre dimensions dans certaines situations",
            "Seule la dimension 'Partenaires et fournisseurs' est affectée par les facteurs externes",
        ],
        correctAnswer: 1,
        explanation:
            "Les quatre dimensions de la gestion des services sont tributaires d'un ensemble de contraintes externes qui alourdissent le SVS, représentées par le modèle PESTLE (Politique, Économique, Social, Technologique, Légal, Environnemental).",
    },
    {
        id: 'q124',
        question: "Selon ITIL V4.0, qu'est-ce que la « gestion des relations de services » ?",
        options: [
            "La gestion des contrats uniquement entre le fournisseur et ses partenaires",
            "Des activités conjointes réalisées par le fournisseur et le consommateur de service pour assurer la co-création de valeur",
            "Le processus de recrutement des responsables de comptes clients",
            "La supervision des performances des équipes IT en contact avec les clients",
        ],
        correctAnswer: 1,
        explanation:
            "La gestion des relations de services consiste en des activités conjointes réalisées par un fournisseur de services et un consommateur de service pour assurer la co-création de valeur sur la base d'offres de services convenues et disponibles.",
    },
    {
        id: 'q125',
        question: "Quel est le rôle du « service intégrateur » dans la dimension « Partenaires et fournisseurs » ?",
        options: [
            "Développer tous les services IT en interne pour éviter la dépendance aux fournisseurs",
            "Garantir que les relations de services entre plusieurs fournisseurs sont correctement coordonnées",
            "Gérer exclusivement les achats de matériel informatique",
            "Certifier les fournisseurs selon les standards ITIL",
        ],
        correctAnswer: 1,
        explanation:
            "Dans la méthode SIAM, le service intégrateur est spécialement établi pour garantir que les relations de services entre plusieurs fournisseurs sont correctement coordonnées, assurant une fourniture cohérente et intégrée des services.",
    },
    {
        id: 'q126',
        question: "Quel est le nombre de pratiques de management de SERVICE dans ITIL V4.0 ?",
        options: [
            "14",
            "17",
            "3",
            "34",
        ],
        correctAnswer: 1,
        explanation:
            "Il existe 17 pratiques de management de service dans ITIL V4.0, qui sont applicables pour des services spécifiques développés, déployés, délivrés et supportés dans l'organisation. Les pratiques générales sont au nombre de 14 et les pratiques techniques sont au nombre de 3.",
    },
    {
        id: 'q127',
        question: "Dans ITIL V4.0, quelle affirmation sur la « garantie » est INCORRECTE ?",
        options: [
            "La garantie couvre la disponibilité du service",
            "La garantie couvre la continuité du service",
            "La garantie est synonyme de l'utilité du service",
            "La garantie couvre la sécurité du service",
        ],
        correctAnswer: 2,
        explanation:
            "La garantie et l'utilité sont deux concepts distincts dans ITIL V4.0. La garantie couvre la disponibilité, la capacité, la continuité et la sécurité (comment le service fonctionne). L'utilité couvre les fonctionnalités (ce que le service fait). Elles ne sont pas synonymes.",
    },
    {
        id: 'q128',
        question: "Quelle affirmation sur les pratiques de management TECHNIQUE est correcte ?",
        options: [
            "Il existe 5 pratiques de management technique dans ITIL V4.0",
            "Les pratiques techniques sont adaptées à des domaines de gestion de la technologie à des fins de gestion des services",
            "Les pratiques techniques remplacent les pratiques de management de service dans les organisations IT",
            "Les pratiques techniques sont applicables à toute l'organisation, pas uniquement à l'IT",
        ],
        correctAnswer: 1,
        explanation:
            "Les pratiques de management technique sont adaptées à des domaines de gestion de la technologie à des fins de gestion des services, en élargissant ou déplaçant leur objectif de la solution technologique vers les services informatiques. Il en existe 3 dans ITIL V4.0.",
    },
    {
        id: 'q129',
        question: "Selon ITIL V4.0, quelle pratique vise à « Développement et gestion de logiciels » ?",
        options: [
            "Pratique de management générale",
            "Pratique de management de service",
            "Pratique de management technique",
            "Pratique de gouvernance",
        ],
        correctAnswer: 2,
        explanation:
            "Le 'Développement et gestion de logiciels' est l'une des 3 pratiques de management technique dans ITIL V4.0, aux côtés de la 'Gestion de déploiement' et de la 'Gestion des infrastructures et des plateformes'.",
    },
    {
        id: 'q130',
        question: "Dans le contexte de l'activité 'S'engager' de la CVS, quelle compétence est prioritaire pour les personnes y contribuant ?",
        options: [
            "Compétences en développement logiciel",
            "Compétences en négociation et communication",
            "Compétences en analyse financière",
            "Compétences en automatisation des processus",
        ],
        correctAnswer: 1,
        explanation:
            "L'activité 'S'engager' dans la CVS nécessite que les personnes aient des compétences en négociation et communication, car cette activité vise à maintenir une bonne compréhension des besoins et un engagement continuel avec toutes les parties prenantes.",
    },
    {
        id: 'q131',
        question: "Quel principe directeur stipule que « Rapide ne veut pas dire incomplet » et recommande d'utiliser un « minimum de produit viable » ?",
        options: [
            "Opter pour la simplicité et la pratique",
            "Avancer par itération avec feedback",
            "Optimiser et automatiser",
            "Se focaliser sur la valeur",
        ],
        correctAnswer: 1,
        explanation:
            "Le principe 'Avancer par itération avec feedback' stipule que 'Rapide ne veut pas dire incomplet' et recommande d'utiliser le minimum de produit viable, tout en comprenant la situation dans sa globalité et en avançant de façon régulière.",
    },
    {
        id: 'q132',
        question: "Comment ITIL V4.0 décrit-il le rôle des pratiques dans le SVS ?",
        options: [
            "Les pratiques sont des règles imposées par la gouvernance à toute l'organisation",
            "Les pratiques sont un ensemble de ressources organisationnelles pour effectuer un travail, constituant l'un des cinq composants du SVS",
            "Les pratiques remplacent les processus dans ITIL V4.0 et n'ont aucun lien avec le SVS",
            "Les pratiques sont facultatives et ne s'appliquent qu'aux grandes organisations",
        ],
        correctAnswer: 1,
        explanation:
            "Dans le SVS, les pratiques constituent l'un des cinq composants principaux. Ce sont des ensembles de ressources organisationnelles pour effectuer un travail, comprenant potentiellement des processus, compétences, technologies, informations, etc.",
    },
    {
        id: 'q133',
        question: "Quelle est la cible principale de la pratique « Gestion de la disponibilité » ?",
        options: [
            "Assurer la reprise d'activité en cas de catastrophe majeure",
            "Garantir que la disponibilité du service répond aux besoins des clients et utilisateurs (l'entreprise)",
            "Monitorer uniquement les serveurs et équipements critiques",
            "Gérer les accords de niveau de service avec les fournisseurs",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la disponibilité' garantit que la disponibilité du service répond aux besoins de l'entreprise, c'est-à-dire des clients et des utilisateurs, dans des conditions d'exploitation normales (distincte de la continuité de service qui gère les situations de catastrophe).",
    },
    {
        id: 'q134',
        question: "Selon ITIL V4.0, quel est l'impact d'une mauvaise visibilité sur les décisions de l'organisation ?",
        options: [
            "Elle améliore la créativité des équipes en les forçant à innover sans données",
            "Elle affecte la prise de décision et la capacité à améliorer les capacités internes, empêche de voir les goulots d'étranglement et les failles",
            "Elle n'a aucun impact tant que les équipes sont compétentes",
            "Elle réduit les coûts en simplifiant les processus de reporting",
        ],
        correctAnswer: 1,
        explanation:
            "Une mauvaise visibilité affecte la prise de décision et la capacité d'amélioration des capacités internes. Elle empêche de comprendre le déroulement des travaux, d'identifier les goulots d'étranglement et les surcapacités, et de découvrir les failles.",
    },
    {
        id: 'q135',
        question: "Quelle est la différence entre « Gestion de déploiement » (management technique) et « Gestion des versions » (management de service) ?",
        options: [
            "Ce sont deux pratiques identiques avec des noms différents",
            "La gestion de déploiement est une pratique technique qui déploie techniquement les composants ; la gestion des versions s'assure que les nouveaux services ou modifiés et leurs fonctionnalités sont disponibles pour les utilisateurs",
            "La gestion des versions s'applique uniquement aux logiciels, la gestion de déploiement à l'infrastructure",
            "La gestion de déploiement concerne uniquement le cloud, la gestion des versions est pour les systèmes on-premise",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de déploiement' (pratique technique) se concentre sur le déploiement technique des composants. La 'Gestion des versions' (pratique de service) s'assure que les nouveaux services ou modifiés et leurs fonctionnalités sont disponibles et accessibles aux utilisateurs.",
    },
    {
        id: 'q136',
        question: "Dans ITIL V4.0, qu'est-ce que les « Quick Wins » (gains rapides) permettent de réaliser selon le principe « Opter pour la simplicité et la pratique » ?",
        options: [
            "Ils permettent d'implémenter des changements complexes rapidement sans planification",
            "Ils permettent aux organisations de démontrer la progression et gérer les besoins des parties prenantes",
            "Ils remplacent les projets d'amélioration à long terme",
            "Ils sont utilisés uniquement pour réduire les coûts opérationnels immédiats",
        ],
        correctAnswer: 1,
        explanation:
            "Selon le principe 'Opter pour la simplicité et la pratique', les Quick Wins (gains rapides) permettent aux organisations de démontrer la progression et de gérer les besoins des parties prenantes. Ils s'inscrivent dans une approche itérative d'amélioration.",
    },
    {
        id: 'q137',
        question: "Quelle description correspond à la pratique « Gestion des infrastructures et des plateformes » dans ITIL V4.0 ?",
        options: [
            "Pratique de management de service gérant la disponibilité des composants",
            "Pratique de management technique adaptée à la gestion de la technologie au service de la gestion des services",
            "Pratique de management général applicable à toute l'organisation",
            "Pratique de gouvernance supervisant les investissements technologiques",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des infrastructures et des plateformes' est une pratique de management technique, adaptée à des domaines de gestion de la technologie à des fins de gestion des services, en déplaçant leur objectif de la solution technologique vers les services informatiques.",
    },
    {
        id: 'q138',
        question: "Selon ITIL V4.0, quel est l'impact de l'adoption d'ITIL par Disney en 2008 ?",
        options: [
            "Réduction de 50% des effectifs IT",
            "Amélioration du service livraison, 100% disponibilité des actifs, amélioration de la rentabilité et augmentation de l'engagement des clients",
            "Remplacement de tous les fournisseurs IT existants",
            "Migration complète de tous les services vers le cloud en 1 an",
        ],
        correctAnswer: 1,
        explanation:
            "L'adoption d'ITIL par Disney en 2008 a permis l'amélioration du service livraison et des performances, 100% disponibilité des actifs, amélioration de la rentabilité, de la maintenabilité et scalabilité des services, et l'augmentation de l'engagement des clients.",
    },
    {
        id: 'q139',
        question: "Quelle affirmation sur la « Gestion de la continuité de service » est correcte dans ITIL V4.0 ?",
        options: [
            "Elle vise à assurer la disponibilité normale du service selon les SLAs convenus",
            "Elle assure des services minimaux à un niveau suffisant pour que les entreprises puissent les soutenir en cas de catastrophe",
            "Elle est identique à la pratique de 'Gestion de la disponibilité'",
            "Elle s'applique uniquement aux environnements cloud",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la continuité de service' assure la disponibilité de services minimaux à un niveau suffisant pour que les entreprises puissent les soutenir en cas de catastrophe, ce qui la distingue de la gestion de la disponibilité (fonctionnement normal).",
    },
    {
        id: 'q140',
        question: "Comment ITIL V4.0 définit-il le facteur Social (S) dans le PESTLE ?",
        options: [
            "Les lois sociales sur l'emploi, la santé et la sécurité",
            "Les modes de vies du consommateur, les habitudes d'achats, les attentes de qualité et la composition sociale",
            "Les réseaux sociaux et leur impact sur la communication d'entreprise",
            "La culture organisationnelle interne de l'organisation",
        ],
        correctAnswer: 1,
        explanation:
            "Le facteur Social (S) dans PESTLE inclut les modes de vies du consommateur, les habitudes d'achats, les attentes de qualité des produits et de services, et la composition sociale.",
    },

    // ─── 60 dernières questions (q141–q200) ──────────────────────────────────
    {
        id: 'q141',
        question: "Quel aspect du principe « Se focaliser sur la valeur » indique que cette valeur est subjective et peut évoluer ?",
        options: [
            "La valeur est définie une fois pour toutes lors de la création du service",
            "La valeur change avec le temps et dans différentes circonstances, selon les besoins des consommateurs",
            "La valeur est toujours objective et mesurable en termes financiers",
            "La valeur est définie par le service provider de manière unilatérale",
        ],
        correctAnswer: 1,
        explanation:
            "Selon ITIL V4.0, la valeur pour le consommateur de service est définie par les besoins des consommateurs et change avec le temps et dans différentes circonstances. C'est pourquoi 'se focaliser sur la valeur' est un effort continu, pas une action ponctuelle.",
    },
    {
        id: 'q142',
        question: "Quelle distinction ITIL V4.0 fait-il entre l' « efficience » et l' « efficacité » dans le contexte de la CVS ?",
        options: [
            "L'efficience et l'efficacité sont des termes synonymes dans ITIL V4.0",
            "Le mécanisme d'itération facilite la compréhension de l'efficience ET l'efficacité des activités de la chaîne de valeur",
            "L'efficience est interne à la CVS, l'efficacité est mesurée par les clients uniquement",
            "L'efficience concerne uniquement les coûts, l'efficacité concerne uniquement la qualité",
        ],
        correctAnswer: 1,
        explanation:
            "Dans ITIL V4.0, un mécanisme d'itération bien formulé facilite la compréhension de l'efficience et l'efficacité des activités de la chaîne de valeur des services, ainsi que l'efficacité de la gouvernance du service et de la gestion du contrôle.",
    },
    {
        id: 'q143',
        question: "Quelle pratique de management de service gère les « erreurs connues » et les solutions de contournement ?",
        options: [
            "Gestion des incidents",
            "Bureau de service",
            "Gestion des problèmes",
            "Contrôle des changements",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des problèmes' identifie les causes potentielles et réelles des incidents, fournit des solutions et des contournements, incluant la création d'erreurs connues (Known Errors), pour réduire la probabilité et l'impact des incidents.",
    },
    {
        id: 'q144',
        question: "Quelle affirmation sur la « co-création de valeur » est la plus précise selon ITIL V4.0 ?",
        options: [
            "La valeur est créée exclusivement par le fournisseur de service puis livrée au consommateur",
            "La co-création de valeur est une stratégie commerciale où le fournisseur et le consommateur travaillent ensemble pour permettre au consommateur d'atteindre ses résultats",
            "La co-création de valeur ne concerne que les partenariats stratégiques entre grandes entreprises",
            "La valeur est créée uniquement lors des interactions directes avec le client, pas lors de l'utilisation du service",
        ],
        correctAnswer: 1,
        explanation:
            "La co-création de valeur est une stratégie commerciale qui aide le consommateur à recevoir le résultat en fonction de ses exigences, grâce aux activités conjointes du fournisseur et du consommateur dans la gestion des relations de services.",
    },
    {
        id: 'q145',
        question: "Comment ITIL V4.0 définit-il la « gouvernance » dans le contexte du SVS ?",
        options: [
            "L'ensemble des pratiques de management général de l'organisation",
            "Les moyens par lesquels une organisation est dirigée et contrôlée, via les activités d'évaluation, de direction et de surveillance",
            "Le processus d'audit annuel des performances IT",
            "La structure hiérarchique formelle de l'organisation IT",
        ],
        correctAnswer: 1,
        explanation:
            "Dans le SVS, la gouvernance fait référence aux moyens par lesquels une organisation est dirigée et contrôlée, à travers les activités : Évaluer, Diriger et Surveiller. C'est l'un des cinq composants principaux du SVS.",
    },
    {
        id: 'q146',
        question: "Quelle pratique générale de management d'ITIL V4.0 assure l'engagement stratégique, tactique et opérationnel avec toutes les parties prenantes (y compris fournisseurs et partenaires) ?",
        options: [
            "Gestion des fournisseurs",
            "Gestion des relations",
            "Gestion de la stratégie",
            "Amélioration continue",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des relations' assure l'engagement et l'établissement de relations avec toutes les parties prenantes à tous les niveaux, du niveau stratégique au niveau tactique. Elle couvre les clients, fournisseurs, partenaires et fonctions internes de l'organisation.",
    },
    {
        id: 'q147',
        question: "Dans ITIL V4.0, quelle est la particularité du rôle du « sponsor » par rapport aux autres rôles du consommateur de service ?",
        options: [
            "Le sponsor utilise le service quotidiennement et est le principal bénéficiaire de l'utilité",
            "Le sponsor autorise le budget pour la consommation du service, sans nécessairement utiliser ni définir les exigences du service",
            "Le sponsor est toujours un membre de la direction générale de l'organisation fournisseur",
            "Le sponsor est responsable de la qualité technique du service délivré",
        ],
        correctAnswer: 1,
        explanation:
            "Le sponsor est une personne qui autorise le budget pour la consommation du service. Ce rôle est distinct de celui du client (qui définit les exigences) et de l'utilisateur (qui utilise le service). Ces trois rôles peuvent être joués par des personnes différentes.",
    },
    {
        id: 'q148',
        question: "Selon ITIL V4.0, quelles technologies supportées par le service management sont citées dans la dimension « Information et technologie » ?",
        options: [
            "Uniquement les bases de données et les applications",
            "Workflow management, bases de connaissances, intelligence artificielle, solutions cloud, machine learning, collaboration à distance",
            "Uniquement les réseaux et les télécommunications",
            "Exclusivement les ERP et CRM d'entreprise",
        ],
        correctAnswer: 1,
        explanation:
            "Les technologies supportées par le service management incluent : Workflow management, bases de connaissances, systèmes de communication, outils analytiques, systèmes d'inventaire, collaboration à distance, plateformes mobiles, intelligence artificielle, solutions cloud et machine learning.",
    },
    {
        id: 'q149',
        question: "Quelle est la définition correcte d'un « évènement » dans le contexte de la pratique « Surveillance et gestion des évènements » ?",
        options: [
            "Tout changement planifié apporté à un service en production",
            "Tout changement d'état significatif pour la gestion d'un service ou d'un autre élément de configuration, nécessitant une observation et une réponse",
            "Tout incident affectant la disponibilité d'un service pour les utilisateurs",
            "Toute demande de service soumise via le portail self-service",
        ],
        correctAnswer: 1,
        explanation:
            "Un évènement dans ITIL est tout changement d'état significatif pour la gestion d'un service ou d'un autre élément de configuration. La pratique 'Surveillance et gestion des évènements' s'assure que ces changements sont systématiquement observés, détectés, reportés et signalés.",
    },
    {
        id: 'q150',
        question: "Quel principe directeur ITIL V4.0 est directement lié à la nécessité de « cartographier les processus standard et les rationaliser » avant d'automatiser ?",
        options: [
            "Se focaliser sur la valeur",
            "Collaborer et promouvoir la visibilité",
            "Optimiser et automatiser",
            "Commencer à son niveau",
        ],
        correctAnswer: 2,
        explanation:
            "Le principe 'Optimiser et automatiser' recommande de cartographier les processus standard et répétitifs et de les rationaliser avant d'automatiser. L'ordre est explicite : simplifier et optimiser d'abord, puis automatiser.",
    },
    {
        id: 'q151',
        question: "Selon ITIL V4.0, quelle affirmation sur la pratique « Gestion de projet » est correcte ?",
        options: [
            "Elle gère uniquement les projets de développement logiciel",
            "Elle assure le succès de tous les projets en adoptant une approche formelle, et maintient la motivation des personnes",
            "Elle remplace la gouvernance pour les projets d'investissement",
            "Elle est uniquement applicable aux pratiques de management technique",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de projet' assure le succès de tous les projets de l'organisation par l'adoption d'une approche formelle de gestion de projet et maintient la motivation des personnes, quelle que soit la nature du projet.",
    },
    {
        id: 'q152',
        question: "La pratique « Validation et test du service » dans ITIL V4.0 vise à :",
        options: [
            "Valider uniquement les composants logiciels développés en interne",
            "S'assurer que les services ou composants nouveaux ou modifiés répondent aux exigences définies avant leur déploiement",
            "Tester la performance du réseau de l'organisation",
            "Valider les contrats avec les fournisseurs avant leur signature",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Validation et test du service' s'assure que les services ou composants nouveaux ou modifiés répondent aux exigences définies avant qu'ils ne soient déployés et utilisés, contribuant ainsi à la qualité et à la fiabilité des services.",
    },
    {
        id: 'q153',
        question: "Dans ITIL V4.0, comment les principes directeurs soutiennent-ils la lutte contre les organisations en silos ?",
        options: [
            "En imposant une structure organisationnelle matricielle à toutes les entreprises utilisant ITIL",
            "En créant une base de culture partagée à travers l'organisation, décourageant le recours aux silos",
            "En établissant des comités de coordination obligatoires entre départements",
            "En réduisant le nombre de pratiques à implémenter",
        ],
        correctAnswer: 1,
        explanation:
            "Les principes directeurs ITIL créent une base de culture partagée à travers l'organisation qui décourage le recours aux silos. Le SVS lui-même a été conçu pour permettre la flexibilité et décourager les silos, car ils nuisent à l'efficience et à la co-création de valeur.",
    },
    {
        id: 'q154',
        question: "Quelle pratique ITIL V4.0 fournit un « canal formalisé pour recevoir et traiter les demandes émanant des utilisateurs et clients » ?",
        options: [
            "Bureau de service",
            "Gestion des demandes de service",
            "Gestion des incidents",
            "Gestion des niveaux de service",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des demandes de service' fournit un canal formalisé pour recevoir et traiter les demandes émanant des utilisateurs et clients, en maintenant leur satisfaction et en leur donnant accès aux informations relatives à la disponibilité des services.",
    },
    {
        id: 'q155',
        question: "Quel est le rôle des parties prenantes dans le principe « Collaborer et promouvoir la visibilité » selon ITIL V4.0 ?",
        options: [
            "Toute partie prenante est simplement un client externe de l'organisation",
            "Toute personne participant aux activités de l'organisation est une partie prenante, incluant développeurs, fournisseurs, consommateurs et chargés de communication",
            "Les parties prenantes se limitent aux membres de la direction de l'organisation",
            "Seuls les fournisseurs externes et les clients sont des parties prenantes",
        ],
        correctAnswer: 1,
        explanation:
            "La partie prenante est toute personne qui participe aux activités de l'organisation. Cela comprend les développeurs, fournisseurs collaborant avec l'organisation, consommateurs collaborant avec les autres, fournisseurs internes et externes, et les chargés de communication.",
    },
    {
        id: 'q156',
        question: "Laquelle des approches suivantes est explicitement citée dans ITIL V4.0 comme compatible avec le SVS ?",
        options: [
            "Prince2, PMBOK, COBIT",
            "Agile, Lean, DevOps",
            "ISO 9001, Six Sigma, TQM",
            "TOGAF, Zachman, FEAF",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL V4.0 met en avant sa compatibilité et son intégration avec Agile, Lean et DevOps comme 'nouvelles façons de travailler'. Le SVS supporte beaucoup d'approches avec un modèle opérationnel flexible axé sur la valeur.",
    },
    {
        id: 'q157',
        question: "Dans ITIL V4.0, quel élément du modèle d'amélioration continue offre « une approche structurée pour concrétiser l'amélioration » ?",
        options: [
            "La chaîne de valeur de service (CVS)",
            "Le modèle d'amélioration continue lui-même",
            "Les principes directeurs",
            "La pratique de gestion des risques",
        ],
        correctAnswer: 1,
        explanation:
            "Le modèle d'amélioration continue offre une approche structurée à l'organisation pour concrétiser l'amélioration, s'assurer de l'alignement continu des services IT avec les besoins métiers, et s'établir dans la chaîne de valeur de service.",
    },
    {
        id: 'q158',
        question: "Quelle est la principale raison pour laquelle ITIL V4.0 intègre Agile et DevOps dans son architecture ?",
        options: [
            "Pour remplacer toutes les pratiques ITIL V3.0",
            "Pour répondre à la transformation digitale qui impose de nouveaux modèles business",
            "Pour réduire le nombre de certifications nécessaires",
            "Pour standardiser toutes les organisations IT mondiales sur un seul modèle",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL V4.0 intègre Agile et DevOps principalement parce que la transformation digitale impose de nouveaux business models. ITIL V4.0 se focalise sur comment ITIL peut être utilisé avec ces nouvelles façons de travailler pour rester pertinent dans l'environnement digital actuel.",
    },
    {
        id: 'q159',
        question: "Dans ITIL V4.0, que représente la notion de « valeur du service » en combinant l'utilité et la garantie ?",
        options: [
            "Le coût total du service pour le consommateur",
            "La valeur perçue par le client qui résulte de la combinaison de la fonctionnalité (utilité) et de la fiabilité opérationnelle (garantie) du service",
            "Le niveau de performance technique du service",
            "Le retour sur investissement calculé par le fournisseur",
        ],
        correctAnswer: 1,
        explanation:
            "La valeur du service dans ITIL V4.0 résulte de la combinaison de l'utilité (ce dont j'ai besoin, fonctionnalités) et de la garantie (fait régulièrement et quand j'ai besoin, fiabilité opérationnelle). Les deux éléments sont nécessaires pour créer de la valeur.",
    },
    {
        id: 'q160',
        question: "Selon ITIL V4.0, quelle pratique générale de management assure l'alignement continu des services et pratiques d'une organisation en prenant en compte l'évolution des besoins métiers et du comportement des consommateurs ?",
        options: [
            "Gestion de la stratégie",
            "Gestion des relations",
            "Amélioration continue",
            "Mesures et rapport",
        ],
        correctAnswer: 2,
        explanation:
            "L'pratique 'Amélioration continue' assure un alignement continu des services et pratiques en identifiant et améliorant en permanence, en prenant en compte l'évolution des besoins de l'entreprise, du comportement des consommateurs, de l'évolution des scénarios de marché, etc.",
    },
    {
        id: 'q161',
        question: "Selon ITIL V4.0, quelle est la caractéristique principale qui distingue la « pratique » du « processus » ?",
        options: [
            "Un processus inclut uniquement des activités techniques, une pratique est limitée au management",
            "Une pratique est un ensemble complet de ressources organisationnelles (processus, personnes, technologie, informations), alors qu'un processus est un ensemble d'activités transformant des entrées en sorties",
            "Un processus est plus important qu'une pratique dans la hiérarchie ITIL V4.0",
            "Une pratique ne peut exister qu'au sein d'un processus formellement défini",
        ],
        correctAnswer: 1,
        explanation:
            "Une pratique est un ensemble complet de ressources organisationnelles (pouvant inclure processus, procédures, compétences, technologies, informations, relations). Un processus est un ensemble d'activités en relation qui transforment des entrées en sorties. Le processus peut être un composant d'une pratique.",
    },
    {
        id: 'q162',
        question: "Quel est le résultat attendu de l'application correcte du principe « Optimiser et automatiser » selon ITIL V4.0 ?",
        options: [
            "L'élimination complète de l'intervention humaine dans tous les processus IT",
            "L'amélioration de l'efficience des tâches fréquentes et répétitives, libérant les ressources humaines pour des décisions complexes",
            "La réduction du nombre de pratiques ITIL nécessaires pour chaque organisation",
            "L'augmentation systématique des dépenses IT pour des outils d'automatisation",
        ],
        correctAnswer: 1,
        explanation:
            "L'automatisation des tâches fréquentes et répétitives aide les organisations à se développer et libère les ressources humaines pour prendre des décisions complexes. La forme la plus simple d'automatisation implique la standardisation et la rationalisation des tâches manuelles.",
    },
    {
        id: 'q163',
        question: "Quel facteur PESTLE inclut les infrastrures privées et publiques disponibles ainsi que le niveau d'adoption technologique ?",
        options: [
            "Facteur Politique (P)",
            "Facteur Économique (E)",
            "Facteur Social (S)",
            "Facteur Technologique (T)",
        ],
        correctAnswer: 3,
        explanation:
            "Le facteur Technologique (T) dans PESTLE inclut les infrastructures privées et publiques disponibles, le taux de changement technologique, le niveau d'adoption technologique, la connexion internet et l'acquisition de smartphones.",
    },
    {
        id: 'q164',
        question: "Dans ITIL V4.0, quelle est la signification du principe « Commencer à son niveau » pour une organisation qui initie une transformation digitale ?",
        options: [
            "Repartir de zéro en ignorant complètement l'existant",
            "Évaluer ce qui existe déjà et potentiellement réutilisable avant de créer quelque chose de nouveau, en appliquant le management des risques",
            "Copier exactement les pratiques des organisations concurrentes les plus performantes",
            "Attendre que toutes les équipes soient formées ITIL avant de démarrer toute initiative",
        ],
        correctAnswer: 1,
        explanation:
            "Le principe 'Commencer à son niveau' implique d'évaluer ce qui existe déjà, de déterminer ce qui peut être réutilisé, et d'appliquer le management des risques. Il reconnaît aussi que parfois rien de l'état courant ne peut être réutilisé et qu'il faut repartir à neuf.",
    },
    {
        id: 'q165',
        question: "Quelle affirmation sur la pratique « Bureau de service » est la plus complète selon ITIL V4.0 ?",
        options: [
            "Le bureau de service gère uniquement les incidents et n'accepte aucune demande de service",
            "Le bureau de service est le point de contact unique pour les utilisateurs lors d'interruptions ou de demandes, fournissant un canal structuré d'interaction",
            "Le bureau de service remplace entièrement les pratiques de gestion des incidents et des problèmes",
            "Le bureau de service est une pratique de management technique responsable de l'infrastructure IT",
        ],
        correctAnswer: 1,
        explanation:
            "Le bureau de service assure un point de contact unique pour les utilisateurs en cas d'interruption de service ou de demandes. Il fournit un canal structuré d'interaction, est distinct (mais complémentaire) des pratiques de gestion des incidents et des demandes de service.",
    },
    {
        id: 'q166',
        question: "Selon ITIL V4.0, pourquoi l'organisation doit-elle « promouvoir une culture juste et transparente » dans la dimension « Organisations et personnes » ?",
        options: [
            "Pour réduire les coûts de formation des employés",
            "Pour faciliter la communication, créer des valeurs partagées et permettre aux personnes de travailler de manière convenue et motivée",
            "Pour standardiser les processus de recrutement entre tous les départements",
            "Pour assurer la conformité avec les réglementations sur le travail",
        ],
        correctAnswer: 1,
        explanation:
            "Promouvoir une culture juste et transparente dans la dimension 'Organisations et personnes' vise à faciliter la communication, créer les valeurs et attributs partagés, et privilégier des valeurs leaders qui aident et motivent les personnes à travailler d'une manière souhaitée.",
    },
    {
        id: 'q167',
        question: "La pratique « Gestion de la configuration de service » dans ITIL V4.0 maintient des informations sur :",
        options: [
            "Uniquement les serveurs et équipements réseau de l'organisation",
            "Les éléments de configuration (CI) et leurs relations qui constituent les services, rendant ces informations disponibles lorsque nécessaire",
            "Les licences logicielles uniquement, sans inclure le matériel",
            "Les informations financières liées aux actifs informatiques",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la configuration de service' assure la disponibilité des informations relatives à la configuration du service et des éléments de configuration (CI) qui forment le service, y compris la relation entre les CI (comment ils sont configurés ensemble).",
    },
    {
        id: 'q168',
        question: "Dans ITIL V4.0, quel est le principal défi de l'organisation en silos identifié pour la prise de décision ?",
        options: [
            "Les silos favorisent une prise de décision trop rapide sans concertation",
            "Les silos rendent l'organisation incapable de prendre des décisions de changement et de prendre avantage des opportunités rapidement",
            "Les silos améliorent la spécialisation mais uniquement au détriment de la vitesse",
            "Les silos créent des doublons de décision qui coûtent cher mais restent utiles",
        ],
        correctAnswer: 1,
        explanation:
            "L'organisation en silos crée une incapacité à prendre des décisions de changement et empêche d'agir rapidement aux diverses opportunités pour en prendre les avantages. Elle peut aussi faire en sorte que les pratiques organisationnelles deviennent elles-mêmes des silos.",
    },
    {
        id: 'q169',
        question: "Quelle est la signification des « Quik Wins » dans le contexte du principe « Opter pour la simplicité et la pratique » ?",
        options: [
            "Des gains rapides à court terme sans valeur à long terme",
            "Des améliorations rapides permettant de démontrer la progression et de gérer les besoins des parties prenantes tout en s'inscrivant dans une démarche itérative",
            "Des automatisations rapides ne nécessitant aucune planification préalable",
            "Des économies de coûts immédiates obtenues en réduisant la qualité de service",
        ],
        correctAnswer: 1,
        explanation:
            "Les Quick Wins (Quik Wins) permettent aux organisations de démontrer la progression et de gérer les besoins des parties prenantes. Ils s'inscrivent dans une démarche itérative et pratique, où chaque activité doit créer de la valeur.",
    },
    {
        id: 'q170',
        question: "Selon ITIL V4.0, que doit évaluer régulièrement le corps dirigeant dans le cadre de la gouvernance ?",
        options: [
            "Uniquement les performances financières de l'organisation",
            "Les besoins des parties prenantes et les évolutions externes affectant l'organisation",
            "Exclusivement les performances des fournisseurs sous contrat",
            "Seulement les incidents et problèmes IT survenus au cours de la période",
        ],
        correctAnswer: 1,
        explanation:
            "Dans le cadre de la gouvernance, le corps dirigeant évalue régulièrement l'organisation sur les besoins des parties prenantes et les évolutions externes, puis dirige la préparation et l'implémentation de la stratégie, et surveille les performances.",
    },
    {
        id: 'q171',
        question: "Quel est l'objectif de la pratique « Gestion de la disponibilité » selon ITIL V4.0 ?",
        options: [
            "Assurer la reprise d'activité après une catastrophe",
            "Garantir que la disponibilité du service répond aux besoins de l'entreprise (clients et utilisateurs)",
            "Gérer les licences logicielles pour maintenir la continuité d'utilisation",
            "Surveiller l'utilisation de la bande passante réseau de l'organisation",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la disponibilité' garantit que la disponibilité du service répond aux besoins de l'entreprise, c'est-à-dire des clients et des utilisateurs. Elle est distincte de la 'Gestion de la continuité de service' qui gère les situations catastrophiques.",
    },
    {
        id: 'q172',
        question: "Dans le contexte de la CVS, quelles compétences spécifiques sont requises pour l'activité « Obtenir et Construire » ?",
        options: [
            "Compétences en négociation et communication avec les parties prenantes",
            "Compétences en développement et/ou intégration",
            "Compétences en analyse et management stratégique",
            "Compétences en priorisation et gestion des tâches complexes",
        ],
        correctAnswer: 1,
        explanation:
            "L'activité 'Obtenir et Construire' dans la CVS nécessite des compétences en développement et/ou intégration, car elle se focalise sur le développement software, la gestion des infrastructures cloud et des services tiers.",
    },
    {
        id: 'q173',
        question: "Quelle pratique de management GÉNÉRAL est responsable de maintenir les informations et connaissances de façon efficace dans toute l'organisation ?",
        options: [
            "Gestion de la sécurité de l'information",
            "Mesures et rapport",
            "Gestion des connaissances",
            "Gestion d'architecture",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des connaissances' assure la maintenance et l'amélioration des informations et des connaissances de manière efficace et efficiente pour une utilisation pratique dans toute l'organisation.",
    },
    {
        id: 'q174',
        question: "Selon ITIL V4.0, quel est le but de la pratique « Analyse commerciale » (Business Analysis) ?",
        options: [
            "Analyser les performances financières et les profits de l'organisation",
            "Assurer l'analyse des éléments business et recommander des solutions pour résoudre les problèmes de l'entreprise",
            "Gérer les relations avec les analystes financiers externes",
            "Concevoir les processus métiers de l'organisation",
        ],
        correctAnswer: 1,
        explanation:
            "La pratique 'Analyse commerciale' vise à assurer l'analyse des éléments business et à recommander des solutions qui aborderont et résoudront les problèmes de l'entreprise, faisant le pont entre les besoins métiers et les solutions IT ou organisationnelles.",
    },
    {
        id: 'q175',
        question: "Quelle affirmation sur la relation entre la gouvernance et la CVS est correcte selon ITIL V4.0 ?",
        options: [
            "La gouvernance est entièrement séparée de la CVS et ne l'influence pas",
            "La chaîne de valeur et les pratiques de l'organisation doivent suivre la stratégie et les lignes directeurs tracés par le corps dirigeant (gouvernance)",
            "La CVS contrôle et supervise la gouvernance dans les organisations modernes",
            "La gouvernance s'applique uniquement aux processus de support IT, pas à la CVS",
        ],
        correctAnswer: 1,
        explanation:
            "Selon ITIL V4.0, la chaîne de valeur (CVS) et les pratiques de l'organisation doivent suivre la stratégie et les lignes directeurs tracés par le corps dirigeant (gouvernance). Le corps dirigeant surveille le SVS et assure l'alignement de tous les niveaux.",
    },
    {
        id: 'q176',
        question: "La « Gestion des actifs informatiques » dans ITIL V4.0 permet notamment de :",
        options: [
            "Gérer uniquement les actifs matériels (serveurs, PC, smartphones)",
            "Maximiser la valeur, contrôler les coûts, gérer les risques et prendre des décisions sur l'approvisionnement, l'utilisation et la mise hors service",
            "Remplacer les actifs obsolètes selon un calendrier fixe de 3 ans",
            "Gérer exclusivement les licences logicielles pour réduire les coûts",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des actifs informatiques' planifie et gère le cycle de vie complet des actifs IT pour maximiser leur valeur, contrôler les coûts, gérer les risques, permettre les décisions d'approvisionnement/utilisation/mise hors service, et répondre aux exigences contractuelles.",
    },
    {
        id: 'q177',
        question: "Quelle caractéristique du cloud computing correspond à la capacité de faire varier rapidement les ressources à la hausse ou à la baisse selon la demande ?",
        options: [
            "Service mesuré",
            "Partage des ressources",
            "Disponibilité sur demande",
            "Élasticité rapide",
        ],
        correctAnswer: 3,
        explanation:
            "L'élasticité rapide est la caractéristique du cloud computing qui permet de faire varier rapidement les ressources informatiques à la hausse ou à la baisse en fonction de la demande, sans délai de provisionnement important.",
    },
    {
        id: 'q178',
        question: "Dans ITIL V4.0, quelle affirmation sur la pratique « Gestion des niveaux de service » est la plus précise ?",
        options: [
            "Elle définit et monitore uniquement les temps de réponse des incidents",
            "Elle définit, fixe et convient d'objectifs clairs pour les services afin que leur performance puisse être surveillée et gérée tout au long de leur cycle de vie",
            "Elle gère les contrats avec les fournisseurs de services cloud uniquement",
            "Elle remplace entièrement la pratique de gestion de la disponibilité",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des niveaux de service' définit, fixe et convient d'objectifs clairs pour les services (via des SLAs), afin que la performance puisse être surveillée et gérée tout au long du cycle de vie du service, par rapport à ces objectifs convenus.",
    },
    {
        id: 'q179',
        question: "Quel est l'objectif de la pratique « Conception de service » dans ITIL V4.0 ?",
        options: [
            "Concevoir uniquement l'interface utilisateur des applications métiers",
            "Assurer la conception de services et produits ayant une utilité (adaptée à l'usage) et une garantie (adaptée à l'utilisation) permettant au client d'atteindre le résultat requis",
            "Gérer les versions de design graphique des portails clients",
            "Définir les architectures techniques des infrastructures cloud uniquement",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Conception de service' assure la conception de services et produits ayant une utilité (adaptée à l'usage/fit for purpose) et une garantie (adaptée à l'utilisation/fit for use), permettant au client d'atteindre le résultat requis.",
    },
    {
        id: 'q180',
        question: "Quel facteur PESTLE inclut les lois de protection des consommateurs, les droits de l'emploi, la santé et la sécurité, et la protection des données ?",
        options: [
            "Politique (P)",
            "Économique (E)",
            "Social (S)",
            "Légal (L)",
        ],
        correctAnswer: 3,
        explanation:
            "Le facteur Légal (L) dans PESTLE consiste en des lois de protection des consommateurs, de droits d'auteurs, de l'emploi, de santé et sécurité, et de protection des données.",
    },
    {
        id: 'q181',
        question: "Selon ITIL V4.0, quelle pratique générale de management vise à identifier, évaluer et classer les risques de l'organisation tout au long du cycle de vie des services ?",
        options: [
            "Gestion financière des services",
            "Gestion de la continuité de service",
            "Gestion des risques",
            "Gestion de la stratégie",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des risques' assure la gestion efficace et efficiente des risques d'une organisation tout au long de la chaîne de valeur des services et tout au long du cycle de vie des services, produits et activités.",
    },
    {
        id: 'q182',
        question: "Quel est l'impact de la pratique « Gestion des problèmes » sur les incidents selon ITIL V4.0 ?",
        options: [
            "Elle gère le rétablissement des services après chaque incident individuel",
            "Elle identifie les causes profondes des incidents pour prévenir les incidents futurs, réduire la fréquence des incidents récurrents et minimiser leur impact",
            "Elle remplace la pratique de gestion des incidents pour les incidents critiques",
            "Elle gère uniquement les problèmes liés à l'infrastructure réseau",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des problèmes' vise à : prévenir les problèmes et incidents avant qu'ils ne surviennent, diminuer le nombre et la fréquence des incidents récurrents, et minimiser l'impact des incidents et problèmes qui ne peuvent être évités.",
    },
    {
        id: 'q183',
        question: "Dans ITIL V4.0, quelle est la relation entre l'utilité et la garantie pour la création de valeur ?",
        options: [
            "Seule l'utilité est nécessaire pour créer de la valeur ; la garantie est optionnelle",
            "L'utilité ET la garantie doivent toutes deux être présentes et adaptées pour qu'un service crée de la valeur",
            "Seule la garantie est nécessaire ; si le service est fiable, l'utilité suit naturellement",
            "Utilité et garantie sont interchangeables et une seule suffit",
        ],
        correctAnswer: 1,
        explanation:
            "Dans ITIL V4.0, la valeur du service nécessite la combinaison de l'utilité (ce dont j'ai besoin, fonctionnalités) ET de la garantie (fait régulièrement et quand j'ai besoin, fiabilité). Les deux éléments sont nécessaires simultanément pour créer de la valeur.",
    },
    {
        id: 'q184',
        question: "Quelle est la cible principale de la pratique « Gestion de la capacité et des performances » dans ITIL V4.0 ?",
        options: [
            "Gérer uniquement la capacité de stockage des données de l'organisation",
            "S'assurer que la capacité est suffisante et disponible pour les services, et que le service atteint les objectifs de performance de manière rentable",
            "Mesurer et améliorer uniquement la performance des équipes IT",
            "Planifier les investissements en infrastructure pour les 5 prochaines années",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de la capacité et des performances' s'assure que la capacité est suffisante et disponible pour les services, et que le service fonctionne au niveau attendu et atteint les objectifs exigés de manière rentable.",
    },
    {
        id: 'q185',
        question: "Comment ITIL V4.0 distingue-t-il le « consommateur de service » du « fournisseur de services » dans le SVS ?",
        options: [
            "Ils jouent des rôles identiques dans le SVS",
            "Le consommateur effectue des activités pour consommer des services ; le fournisseur effectue des activités pour fournir des services ; ensemble, ils co-créent la valeur",
            "Le fournisseur gère les risques uniquement, le consommateur gère les coûts",
            "Le consommateur est toujours une entité externe, le fournisseur est toujours interne",
        ],
        correctAnswer: 1,
        explanation:
            "Le consommateur de service réalise des activités pour consommer des services, le fournisseur de services réalise des activités pour fournir des services. La gestion des relations de services combine les activités des deux pour assurer la co-création de valeur.",
    },
    {
        id: 'q186',
        question: "Quel principe directeur d'ITIL V4.0 est directement lié à la notion de « DevOps » mentionnée dans le cours ?",
        options: [
            "Opter pour la simplicité et la pratique",
            "Commencer à son niveau",
            "Collaborer et promouvoir la visibilité",
            "Optimiser et automatiser",
        ],
        correctAnswer: 2,
        explanation:
            "Le principe 'Collaborer et promouvoir la visibilité' est directement lié à DevOps. ITIL V4.0 mentionne que 'DevOps comprend les facteurs clés tels que connaître les besoins pour une collaboration efficace' et que 'Agile, Lean et autres plateformes ITSM ne fonctionneront pas sans une collaboration effective'.",
    },
    {
        id: 'q187',
        question: "Dans ITIL V4.0, qu'est-ce que le « Contrôle des changements » vise à maximiser ?",
        options: [
            "La vitesse de déploiement des nouveaux services",
            "Le taux de réussite des changements exécutés dans un environnement de service",
            "Le nombre de changements déployés par cycle d'amélioration",
            "La satisfaction des développeurs lors des déploiements",
        ],
        correctAnswer: 1,
        explanation:
            "Le 'Contrôle des changements' vise à maximiser le taux de réussite des changements exécutés dans un environnement de service, grâce à une évaluation, une analyse et une autorisation appropriées de tous les changements.",
    },
    {
        id: 'q188',
        question: "Quelle affirmation sur le « Service mesuré » (Measured Service) dans le cloud computing est correcte ?",
        options: [
            "Il signifie que les services cloud sont toujours gratuits en dessous d'un certain seuil",
            "Il permet de mesurer, contrôler et rapporter l'utilisation des ressources, fournissant une transparence pour le fournisseur et le consommateur",
            "Il impose un forfait mensuel fixe indépendamment de la consommation",
            "Il se réfère uniquement à la mesure de la disponibilité (uptime) du service",
        ],
        correctAnswer: 1,
        explanation:
            "Le 'Service mesuré' est l'une des cinq caractéristiques essentielles du cloud computing. Il permet de mesurer, contrôler et rapporter l'utilisation des ressources de manière transparente pour le fournisseur et le consommateur, permettant une facturation à l'usage.",
    },
    {
        id: 'q189',
        question: "Selon ITIL V4.0, quel est l'objectif de la pratique « Gestion des versions » (Release Management) ?",
        options: [
            "Gérer et documenter toutes les versions de logiciels en production",
            "S'assurer que les nouveaux services ou services modifiés et leurs fonctionnalités sont disponibles pour les utilisateurs",
            "Contrôler les déploiements en production pour éviter les erreurs de configuration",
            "Gérer le calendrier des mises à jour systèmes de sécurité",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion des versions' s'assure que les nouveaux services ou services modifiés et leurs fonctionnalités sont disponibles pour les utilisateurs. Elle se distingue de la 'Gestion de déploiement' (pratique technique) qui est plus orientée vers le déploiement technique.",
    },
    {
        id: 'q190',
        question: "Dans ITIL V4.0, quelle affirmation sur la pratique « Gestion des fournisseurs » est INCORRECTE ?",
        options: [
            "Elle assure la gestion des fournisseurs et leurs performances",
            "Elle soutient la fourniture transparente de produits et services de qualité",
            "Elle remplace entièrement la pratique de gestion des relations pour les fournisseurs externes",
            "Elle fait partie des pratiques générales de management",
        ],
        correctAnswer: 2,
        explanation:
            "La 'Gestion des fournisseurs' est distincte de la 'Gestion des relations'. La gestion des fournisseurs se concentre sur la gestion des performances et la fourniture transparente. La gestion des relations couvre un spectre plus large incluant tous les niveaux de parties prenantes (stratégique à opérationnel).",
    },
    {
        id: 'q191',
        question: "Selon ITIL V4.0, quel est le rôle de la pratique « Gestion de portefeuille » par rapport à la stratégie organisationnelle ?",
        options: [
            "Elle remplace la gestion de la stratégie en fournissant une vision opérationnelle",
            "Elle s'assure que l'organisation dispose de la bonne combinaison de programmes, projets, produits et services pour exécuter la stratégie, dans les limites des financements et ressources",
            "Elle gère uniquement les actifs IT en termes de valeur financière",
            "Elle contrôle les investissements marketing et commerciaux de l'organisation",
        ],
        correctAnswer: 1,
        explanation:
            "La 'Gestion de portefeuille' s'assure que l'organisation dispose de la bonne combinaison de programmes, projets, produits et services pour exécuter la stratégie de l'organisation dans les limites de ses financements et ressources.",
    },
    {
        id: 'q192',
        question: "Dans ITIL V4.0, quelle est la signification du « partage des ressources » (Resource Pooling) dans le cloud computing ?",
        options: [
            "Chaque client cloud dispose de ressources dédiées exclusivement à son usage",
            "Les ressources informatiques sont mutualisées pour servir plusieurs consommateurs, avec des ressources physiques et virtuelles dynamiquement allouées selon la demande",
            "Les ressources sont partagées uniquement entre les départements d'une même organisation",
            "Le partage des ressources signifie que la sécurité des données est moindre dans le cloud",
        ],
        correctAnswer: 1,
        explanation:
            "Le 'Partage des ressources' (Resource Pooling) est une caractéristique essentielle du cloud computing : les ressources informatiques du fournisseur sont mutualisées pour servir plusieurs consommateurs, avec des ressources physiques et virtuelles dynamiquement allouées et réallouées selon la demande.",
    },
    {
        id: 'q193',
        question: "Selon ITIL V4.0, laquelle des affirmations suivantes est VRAIE concernant l'amélioration continue dans le SVS ?",
        options: [
            "L'amélioration continue s'applique uniquement aux services déjà déployés",
            "L'amélioration continue est un ensemble récurrent d'activités effectué à tous les niveaux du SVS, incluant les activités de la CVS et les pratiques",
            "L'amélioration continue est la responsabilité exclusive des équipes d'audit interne",
            "L'amélioration continue ne peut être déclenchée que par une demande formelle du client",
        ],
        correctAnswer: 1,
        explanation:
            "L'amélioration continue dans le SVS est un ensemble récurrent d'activités effectué à tous les niveaux. Elle s'applique aux activités de la CVS, aux pratiques, et est soutenue par l'organisation au quotidien. C'est l'un des cinq composants du SVS.",
    },
    {
        id: 'q194',
        question: "Dans ITIL V4.0, comment est définie la « demande » qui déclenche les activités du SVS ?",
        options: [
            "Une exigence formelle écrite et approuvée par le comité de direction",
            "Le besoin ou le désire à un produit ou service",
            "Une commande passée via le portail self-service uniquement",
            "Un incident signalé par un utilisateur affectant le fonctionnement normal du service",
        ],
        correctAnswer: 1,
        explanation:
            "La demande est définie dans ITIL V4.0 comme le besoin ou le désir à un produit ou service. Avec l'opportunité, elle déclenche les activités du SVS qui entraînent vers la création de la valeur.",
    },
    {
        id: 'q195',
        question: "Quel principe directeur est appliqué lorsqu'une organisation décide de « comprendre l'ensemble et agir par partie » ?",
        options: [
            "Opter pour la simplicité et la pratique",
            "Avancer par itération avec feedback",
            "Collaborer et promouvoir la visibilité",
            "Se focaliser sur la valeur",
        ],
        correctAnswer: 1,
        explanation:
            "Le principe 'Avancer par itération avec feedback' inclut l'idée de 'comprendre la situation dans sa globalité et assurer l'avancement de façon régulière'. Cela correspond à la notion de comprendre l'ensemble (vision globale) et d'agir par partie (itérations).",
    },
    {
        id: 'q196',
        question: "Dans ITIL V4.0, quelle est la différence entre les pratiques de management GÉNÉRAL et les pratiques de management de SERVICE ?",
        options: [
            "Les pratiques de management général coûtent plus cher à implémenter",
            "Les pratiques de management général sont applicables à toute l'organisation pour le succès du métier, les pratiques de service sont applicables pour des services spécifiques développés, déployés et supportés",
            "Les pratiques de service s'appliquent à toute l'organisation, les pratiques générales uniquement à l'IT",
            "Il n'existe pas de distinction réelle entre les deux catégories",
        ],
        correctAnswer: 1,
        explanation:
            "Les pratiques de management général sont applicables à travers toute l'organisation pour le succès du métier. Les pratiques de management de service sont applicables pour des services spécifiques développés, déployés, délivrés et supportés dans l'organisation.",
    },
    {
        id: 'q197',
        question: "Selon ITIL V4.0, quel est l'enjeu principal de la « gestion de l'information » dans la dimension Information et technologie ?",
        options: [
            "L'information doit être conservée pendant au moins 10 ans selon la réglementation ITIL",
            "L'information représente le moyen primaire pour délivrer la valeur au client, et doit être disponible, fiable, temporelle, précise et pertinente",
            "L'information doit être centralisée dans une seule base de données accessible à tous",
            "L'information doit être systématiquement partagée avec toutes les parties prenantes sans restriction",
        ],
        correctAnswer: 1,
        explanation:
            "Dans la dimension 'Information et technologie', le management de l'information représente le moyen primaire pour délivrer la valeur au client. L'information doit répondre aux critères de disponibilité, fiabilité, temporalité, précision et pertinence. Cette dimension se concentre aussi sur les challenges de sécurité et conformité réglementaire.",
    },
    {
        id: 'q198',
        question: "Quelle affirmation résume le mieux le rôle du SVS d'ITIL V4.0 dans la création de valeur ?",
        options: [
            "Le SVS est un outil de contrôle des coûts IT qui garantit le respect des budgets",
            "Le SVS garantit à l'organisation de co-créer de la valeur de façon continue avec les parties prenantes à travers l'utilisation des produits et services",
            "Le SVS remplace les processus ITIL V3.0 par des pratiques plus modernes",
            "Le SVS est un référentiel de bonnes pratiques IT applicable uniquement aux grandes entreprises",
        ],
        correctAnswer: 1,
        explanation:
            "Le SVS garantit à l'organisation de co-créer de la valeur de façon continue avec les parties prenantes à travers l'utilisation des produits et services. Il décrit comment toutes les composantes et activités de l'organisation travaillent ensemble comme un système pour créer de la valeur.",
    },
    {
        id: 'q199',
        question: "Dans ITIL V4.0, quelle est la caractéristique principale qui distingue un « incident » d'un « problème » ?",
        options: [
            "Un incident est toujours plus grave qu'un problème",
            "Un incident est une interruption non planifiée ou une dégradation de qualité d'un service ; un problème est la cause d'un ou plusieurs incidents",
            "Un problème est toujours résolu avant l'incident qui en découle",
            "Un incident est géré par le bureau de service, un problème par les fournisseurs uniquement",
        ],
        correctAnswer: 1,
        explanation:
            "Un incident est une interruption non planifiée ou une dégradation de qualité d'un service nécessitant une restauration rapide. Un problème est la cause d'un ou plusieurs incidents, et sa gestion vise à prévenir les incidents futurs en identifiant les causes profondes.",
    },
    {
        id: 'q200',
        question: "Quelle affirmation synthétise le mieux la philosophie fondamentale d'ITIL V4.0 par rapport aux versions précédentes ?",
        options: [
            "ITIL V4.0 se concentre sur des processus stricts pour garantir la conformité des services IT",
            "ITIL V4.0 représente un glissement vers la co-création de valeur, l'intégration avec Agile/DevOps et une approche holistique centrée sur la valeur pour toutes les parties prenantes",
            "ITIL V4.0 simplifie ITIL V3.0 en réduisant le nombre de pratiques et processus",
            "ITIL V4.0 se concentre exclusivement sur l'automatisation IT pour réduire les coûts",
        ],
        correctAnswer: 1,
        explanation:
            "ITIL V4.0 représente un glissement philosophique majeur vers la co-création de valeur (plutôt que la simple fourniture de services), l'intégration avec Agile, Lean et DevOps, le Système de Valeur de Services (SVS) comme architecture centrale, et une approche holistique centrée sur la valeur pour toutes les parties prenantes.",
    },
];

export default questions;