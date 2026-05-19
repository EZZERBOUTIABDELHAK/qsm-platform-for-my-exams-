const questions = [
    {
        id: 'q1',
        question: "Quels types de changements ne sont généralement PAS inclus dans le périmètre de la gestion des changements ?",
        options: [
            "Les changements d'un ordinateur mainframe",
            "Les changements d'une stratégie business",
            "Les changements d'un accord sur les niveaux de service (SLA)",
            "Le retrait d'un service"
        ],
        correctAnswer: 1,
        explanation: "Les changements de stratégie métier (business) relèvent de la direction et de la gouvernance globale de l'entreprise, et non du processus de gestion des changements des services informatiques."
    },
    {
        id: 'q2',
        question: "Parmi les éléments suivants, lequel n'est PAS un objet de l'exploitation des services?",
        options: [
            "Entreprendre des tests afin de s'assurer que les services sont conçus pour répondre aux besoins business",
            "Fournir et gérer les services informatiques",
            "Gérer la technologie utilisée pour fournir les services",
            "Surveiller la performance de la technologie et des processus"
        ],
        correctAnswer: 0,
        explanation: "Entreprendre des tests relève de l'étape de Transition des Services (Validation et tests des services), et non de l'Exploitation des Services dont le but est de livrer et gérer les services au quotidien."
    },
    {
        id: 'q3',
        question: "Parmi les éléments suivants, auquel fait référence le terme « contrôle des opérations informatiques » ?:",
        options: [
            "La gestion des fonctions gestion technique et gestion des applications",
            "Superviser l'exécution et la surveillance des activités et des évènements opérationnels",
            "Un ensemble d'outils utilisés pour surveiller et afficher l'état de l'infrastructure et des applications informatiques",
            "Un centre de services surveillant l'état de l'infrastructure quand les opérateurs ne sont pas disponibles"
        ],
        correctAnswer: 1,
        explanation: "Le contrôle des opérations informatiques (IT Operations Control) est la fonction chargée de superviser l'exécution et la surveillance des activités et des événements opérationnels quotidiens."
    },
    {
        id: 'q4',
        question: "Quel processus est responsable d'enregistrer les relations entre les composants des services?",
        options: [
            "La gestion des niveaux de service",
            "La gestion du portefeuille des services",
            "La gestion des actifs de services et des configurations (SACM)",
            "La gestion des incidents"
        ],
        correctAnswer: 2,
        explanation: "La Gestion des actifs de services et des configurations (SACM) maintient les informations sur les Éléments de Configuration (CI) et les relations entre eux dans le CMS."
    },
    {
        id: 'q5',
        question: "Dans quel but le modèle RACI est-il utilisé ?",
        options: [
            "Documenter les rôles et responsabilités des parties prenantes dans un processus ou une activité",
            "Définir les besoins pour un nouveau service ou un processus",
            "Analyser l'impact business d'un incident",
            "Créer un tableau de bord équilibré montrant le statut global de la gestion des services"
        ],
        correctAnswer: 0,
        explanation: "Le modèle RACI (Responsible, Accountable, Consulted, Informed) est une matrice utilisée pour définir et documenter les rôles et responsabilités au sein des processus et activités."
    },
    {
        id: 'q6',
        question: "Laquelle des propositions suivantes est la MEILLEURE description d'un accord sur les niveaux opérationnels (OLA)?",
        options: [
            "Un accord entre un fournisseur de services informatiques et une autre partie de la même organisation qui soutient la livraison des services",
            "Un accord écrit entre le fournisseur de services informatiques et ses clients qui spécifie les cibles clés et les responsabilités des deux parties",
            "Un accord entre deux fournisseurs de services sur les niveaux de service exigés par le client",
            "Un accord sur les délais de correction et de réponse entre un centre de services d'une tierce partie et le client des TI"
        ],
        correctAnswer: 0,
        explanation: "Un OLA (Operational Level Agreement) est un accord interne entre le fournisseur de services IT et un autre département de la même organisation qui fournit un soutien."
    },
    {
        id: 'q7',
        question: "Quel est l'objet PRINCIPAL de la gestion de la disponibilité ?",
        options: [
            "Surveiller et établir des rapports sur la disponibilité des composants",
            "Assurer que toutes les cibles dans les accords sur les niveaux de service (SLA) sont atteintes",
            "Garantir les niveaux de disponibilité pour les services et les composants",
            "Assurer que la disponibilité des services répond aux besoins convenus du business"
        ],
        correctAnswer: 3,
        explanation: "Le but principal de la gestion de la disponibilité est de s'assurer que le niveau de disponibilité des services livrés correspond ou dépasse les besoins actuels et futurs convenus avec le business."
    },
    {
        id: 'q8',
        question: "La transition des services fournit des conseils sur lesquel(s) des énoncés suivants ?\n1. L'introduction de nouveaux services\n2. Le retrait opérationnel des services\n3. Le transfert des services entre les fournisseurs",
        options: [
            "1 et 2 seulement",
            "2 seulement",
            "Tous",
            "1 et 3 seulement"
        ],
        correctAnswer: 2,
        explanation: "La Transition des Services gère les changements (introduction de nouveaux services), le retrait de services obsolètes, ainsi que le transfert de services (par exemple lors d'une externalisation)."
    },
    {
        id: 'q9',
        question: "Lequel des éléments suivants n'est PAS une phase du cycle de vie des services?",
        options: [
            "Optimisation des services",
            "Transition des services",
            "Conception des services",
            "Stratégie des services"
        ],
        correctAnswer: 0,
        explanation: "L'« Optimisation des services » n'est pas une phase. La phase correspondante s'appelle l'Amélioration Continue des Services (CSI - Continual Service Improvement)."
    },
    {
        id: 'q10',
        question: "Laquelle des propositions suivantes concernant un système de gestion des configurations (CMS) est CORRECTE ?",
        options: [
            "Le CMS ne devrait pas contenir des données corporatives sur les clients et les utilisateurs",
            "Il se peut qu'il y ait plus d'un seul CMS",
            "On ne doit pas avoir plus d'une base de données pour la gestion des configurations (CMDB)",
            "Une organisation externalisant ses services informatiques a tout de même besoin d'un CMS"
        ],
        correctAnswer: 3,
        explanation: "Même si les services sont externalisés, l'organisation cliente a besoin d'un CMS pour conserver le contrôle et la visibilité sur les services fournis par le tiers."
    },
    {
        id: 'q11',
        question: "Quels sont les trois sous-processus de la gestion de la capacité ?",
        options: [
            "Gestion de la capacité business, gestion de la capacité des services et gestion de la capacité des composants",
            "Gestion de la capacité des fournisseurs, gestion de la capacité des services et gestion de la capacité des composants",
            "Gestion de la capacité des fournisseurs, gestion de la capacité des services et gestion de la capacité technologique",
            "Gestion de la capacité business, gestion de la capacité technologique et gestion de la capacité des composants"
        ],
        correctAnswer: 0,
        explanation: "La gestion de la capacité se divise en trois sous-processus : Business Capacity Management (Business), Service Capacity Management (Services) et Component Capacity Management (Composants)."
    },
    {
        id: 'q12',
        question: "Lesquels des éléments suivants seraient stockés dans la bibliothèque des supports définitifs (DML) ?\n1. Des copies de logiciels achetés\n2. Des copies de logiciels développés en interne\n3. Les documents de licence pertinents\n4. Le calendrier des changements",
        options: [
            "Toutes ces réponses",
            "1 et 2 seulement",
            "3 et 4 seulement",
            "1, 2 et 3 seulement"
        ],
        correctAnswer: 3,
        explanation: "La DML (Definitive Media Library) stocke les copies définitives et approuvées de tous les logiciels (internes ou achetés) ainsi que les licences associées. Le calendrier des changements n'y est pas stocké."
    },
    {
        id: 'q13',
        question: "Quel processus est responsable de revoir les accords sur les niveaux opérationnels (OLA) de façon régulière ?",
        options: [
            "La gestion des fournisseurs",
            "La gestion des niveaux de services",
            "La gestion du portefeuille des services",
            "La gestion de la demande"
        ],
        correctAnswer: 1,
        explanation: "La gestion des niveaux de services (SLM) est chargée de négocier, convenir et revoir les SLA et les OLA pour s'assurer qu'ils sont alignés et à jour."
    },
    {
        id: 'q14',
        question: "Quel rôle doit s'assurer que la documentation associée au processus est à jour et disponible ?",
        options: [
            "Le propriétaire du service",
            "Le directeur de l'information",
            "La gestion des connaissances",
            "Le propriétaire du processus"
        ],
        correctAnswer: 3,
        explanation: "Le propriétaire du processus (Process Owner) est responsable de la conception, de la documentation, et de l'amélioration de son processus."
    },
    {
        id: 'q15',
        question: "Lesquels des éléments suivants le processus de la gestion des déploiements et des mises en production traite-t-il?\n1. Définir et convenir de plans de mise en production et de déploiement\n2. S'assurer que les packages de mise en production peuvent être suivis\n3. Autoriser des changements soutenant le processus",
        options: [
            "1 et 2 seulement",
            "Toutes ces réponses",
            "2 et 3 seulement",
            "1 et 3 seulement"
        ],
        correctAnswer: 0,
        explanation: "Autoriser des changements est la responsabilité de la Gestion des Changements. La gestion des déploiements planifie et suit les mises en production."
    },
    {
        id: 'q16',
        question: "Parmi les éléments suivants, lesquels caractérisent chaque processus ?\n1. Il est mesurable\n2. Il délivre un résultat précis\n3. Il délivre ses résultats principaux à un client ou à une partie prenante",
        options: [
            "1 et 3 seulement",
            "1 et 2 seulement",
            "2 et 3 seulement",
            "Tous les éléments"
        ],
        correctAnswer: 3,
        explanation: "Les 4 caractéristiques d'un processus sont : il est mesurable, il a des résultats spécifiques (précis), il délivre des résultats aux clients/parties prenantes, et il répond à un événement déclencheur."
    },
    {
        id: 'q17',
        question: "Parmi les caractéristiques suivantes, laquelle ou lesquelles sont des caractéristiques d'ITIL contribuant à sa réussite ?\n1. Il est neutre vis-à-vis des fournisseurs\n2. Il n'est pas prescriptif\n3. Il s'agit des meilleures pratiques\n4. C'est une norme",
        options: [
            "3 seulement",
            "1, 2 et 3 seulement",
            "Toutes les caractéristiques",
            "2, 3 et 4 seulement"
        ],
        correctAnswer: 1,
        explanation: "ITIL est neutre vis-à-vis des fournisseurs, non prescriptif et basé sur les meilleures pratiques. Ce n'est pas une norme certifiable pour une entreprise (c'est ISO/IEC 20000 qui est la norme)."
    },
    {
        id: 'q18',
        question: "Qui doit avoir accès à la politique de sécurité de l'information?",
        options: [
            "Les gestionnaires seniors du business et le personnel informatique",
            "Les gestionnaires seniors du business, les dirigeants informatiques et le gestionnaire de la sécurité de l'information",
            "Tous les clients, les utilisateurs et le personnel informatique",
            "Le personnel de gestion de la sécurité de l'information seulement"
        ],
        correctAnswer: 2,
        explanation: "La politique de sécurité de l'information doit être connue, accessible et respectée par tous (clients, utilisateurs et équipes IT) pour être efficace."
    },
    {
        id: 'q19',
        question: "Parmi les propositions suivantes, lesquelles sont des éléments valides du package de conception de service (SDP)?\n1. Des exigences business convenues et documentées\n2. Un plan de transition du service\n3. Des exigences pour de nouveaux processus ou processus modifiés\n4. Des métriques utilisées pour la mesure du service",
        options: [
            "1 seulement",
            "2 et 3 seulement",
            "1, 2 et 4 seulement",
            "Toutes ces propositions"
        ],
        correctAnswer: 3,
        explanation: "Le SDP (Service Design Package) contient tous les aspects d'un service (exigences, plans de transition, processus associés, métriques, architecture, etc.) pour le passer à la phase de transition."
    },
    {
        id: 'q20',
        question: "Lesquels des exemples d'outils suivants pourraient soutenir l'étape de transition des services du cycle de vie des services ?\n1. Un outil pour stocker des versions définitives de logiciels\n2. Un outil de flux (workflow) pour gérer les changements\n3. Un outil de distribution automatisée de logiciel\n4. Les outils de test et de validation",
        options: [
            "1, 3 et 4 seulement",
            "1, 2 et 3 seulement",
            "Tous",
            "2, 3 et 4 seulement"
        ],
        correctAnswer: 2,
        explanation: "Tous ces outils sont utilisés pendant la Transition des Services (DML, Gestion des changements, Gestion des déploiements, Validation et tests)."
    },
    {
        id: 'q21',
        question: "Laquelle ou lesquelles des propositions suivantes concernant la gestion des problèmes sont CORRECTES?\n1. Elle s'assure que toutes résolutions et solutions de contournement nécessitant un changement d'un élément de configuration (CI) sont soumises à la gestion des changements\n2. Elle fournit de l'information de gestion sur le coût de résolution et de prévention des problèmes",
        options: [
            "1 seulement",
            "2 seulement",
            "Les deux",
            "Aucune"
        ],
        correctAnswer: 2,
        explanation: "La Gestion des Problèmes doit lever une RFC (Request For Change) pour tout changement structurel, et elle génère des informations de gestion sur les coûts associés à la résolution et à la prévention (erreurs connues)."
    },
    {
        id: 'q22',
        question: "Quel est l'objet du processus d'exécution des requêtes (Request Fulfillment) ?",
        options: [
            "Traiter les demandes de services des utilisateurs",
            "Assurer l'exécution de toutes les requêtes provenant d'une organisation informatique",
            "Assurer l'exécution des demandes de changement",
            "Assurer le respect de l'accord sur les niveaux de services (SLA)"
        ],
        correctAnswer: 0,
        explanation: "Le but de l'exécution des requêtes est de traiter et répondre aux demandes de services standard (Service Requests) formulées par les utilisateurs."
    },
    {
        id: 'q23',
        question: "Lequel des énoncés suivants sur la création de valeur par les services est CORRECT?",
        options: [
            "La perception du client par rapport au service est un facteur important de la création de la valeur.",
            "La valeur d'un service ne peut être mesurée qu'en termes financiers",
            "L'obtention de résultats par le fournisseur de services est importante pour la valeur d'un service",
            "Les préférences du fournisseur de service façonnent la perception de la valeur d'un service"
        ],
        correctAnswer: 0,
        explanation: "La valeur est définie par le client, et dépend fortement des résultats business attendus, des préférences du client et de sa perception du service reçu."
    },
    {
        id: 'q24',
        question: "Parmi les affirmations suivantes concernant les clients internes et externes, laquelle est la PLUS correcte ?",
        options: [
            "Les clients externes devraient bénéficier d'un meilleur service client car ils paient pour leurs services informatiques",
            "Les clients internes devraient bénéficier d'un meilleur service client car ils paient les salaires des employés",
            "Le meilleur service client devrait être délivré au client qui paie le plus",
            "Les clients internes et externes devraient bénéficier du niveau de service client convenu"
        ],
        correctAnswer: 3,
        explanation: "Les services informatiques doivent fournir exactement le niveau de service qui a été convenu (dans les SLA) avec le client, qu'il soit interne ou externe."
    },
    {
        id: 'q25',
        question: "Lequel des éléments suivants les services informatiques devraient-ils livrer aux clients?",
        options: [
            "Des aptitudes",
            "Des coûts",
            "Des risques",
            "De la valeur"
        ],
        correctAnswer: 3,
        explanation: "Le but de tout service informatique (et de l'ITSM en général) est de fournir et faciliter la création de valeur pour les clients en favorisant les résultats qu'ils veulent atteindre."
    },
    {
        id: 'q26',
        question: "Parmi les activités suivantes, laquelle la gestion des niveaux de services (SLM) inclut-elle ?",
        options: [
            "Concevoir le système de gestion des configurations avec une perspective business",
            "Créer des métriques technologiques alignées sur les besoins du client",
            "Surveiller la performance du service par rapport aux accords sur les niveaux de service (SLA)",
            "Former le personnel du centre de services sur comment gérer les plaintes des clients sur le service"
        ],
        correctAnswer: 2,
        explanation: "L'une des activités principales de la gestion des niveaux de service est de mesurer et surveiller la performance réelle des services et de la comparer aux cibles définies dans le SLA."
    },
    {
        id: 'q27',
        question: "Lequel des énoncés suivants résume LE MIEUX l'objet de la gestion des événements ?",
        options: [
            "La capacité de détecter des événements, les interpréter et déterminer l'action de contrôle appropriée",
            "La capacité de détecter des événements, restaurer le service normal aussi rapidement que possible et minimiser l'impact négatif sur les opérations business",
            "La capacité de surveiller et de contrôler les activités du personnel technique",
            "La capacité de produire des rapports sur la fourniture réussite des services en vérifiant le temps de disponibilité des équipements d'infrastructure"
        ],
        correctAnswer: 0,
        explanation: "La gestion des événements sert à détecter les événements d'infrastructure ou de service, à les filtrer/interpréter, et à déclencher l'action ou le processus de contrôle approprié."
    },
    {
        id: 'q28',
        question: "Un catalogue des services devrait contenir laquelle des propositions suivantes?",
        options: [
            "Les informations sur les versions de tous les logiciels",
            "La structure organisationnelle de l'entreprise",
            "Les informations sur les actifs",
            "Les détails de tous les services opérationnels"
        ],
        correctAnswer: 3,
        explanation: "Le catalogue des services contient les détails de tous les services qui sont actuellement en production (opérationnels) ou prêts à l'être."
    },
    {
        id: 'q29',
        question: "Que signifie « garantie de service » (Warranty) ?",
        options: [
            "Le service est adapté au besoin",
            "Il n'y aura pas de défaillances au niveau des applications et de l'infrastructure associées au service",
            "Tous les problèmes liés au service sont corrigés gratuitement durant une certaine période de temps",
            "Les clients sont assurés de certains niveaux de disponibilité, de capacité, de continuité et de sécurité"
        ],
        correctAnswer: 3,
        explanation: "Dans ITIL, la Garantie (Warranty) s'assure que le service est « adapté à l'utilisation », c'est-à-dire qu'il offre la disponibilité, la capacité, la continuité et la sécurité promises."
    },
    {
        id: 'q30',
        question: "Quelle est la première activité de l'approche amélioration continue des services (CSI)?",
        options: [
            "Comprendre la vision et les objectifs du business",
            "Réaliser une evaluation de reference pour comprendre la situation actuelle",
            "Convenir de priorités pour l'amélioration",
            "Créer et vérifier un plan"
        ],
        correctAnswer: 0,
        explanation: "L'approche CSI (Amélioration Continue des Services) commence toujours par la question : « Quelle est la vision ? », ce qui implique de comprendre la vision et les objectifs du business."
    },
    {
        id: 'q31',
        question: "Laquelle des propositions suivantes est un bénéfice de l'utilisation d'un modèle d'incident?",
        options: [
            "Il rend les problèmes plus facilement identifiés et diagnostiqués",
            "Il signifie que les types d'incidents connus ne se reproduira jamais",
            "Il établie des étapes prédéfinies pour le traitement de certains types d'incidents",
            "Il s'assure que tous les incidents sont faciles à résoudre"
        ],
        correctAnswer: 2,
        explanation: "Un modèle d'incident standardise le processus de résolution pour un type d'incident courant, en définissant à l'avance les étapes, responsabilités et délais."
    },
    {
        id: 'q32',
        question: "Parmi les séquences d'activités suivantes pour le traitement d'un incident, laquelle est CORRECTE ?",
        options: [
            "Identification, journalisation, catégorisation, priorisation, diagnostic initial, escalade, investigation et diagnostics, résolution et reprise, clôture",
            "Priorisation, identification, journalisation, catégorisation, diagnostic initial, escalade, investigation et diagnostic, résolution et reprise, clôture",
            "Identification, journalisation, diagnostic initial, catégorisation, priorisation, escalade, résolution et reprise, investigation et diagnostic, clôture",
            "Identification, diagnostic initial, investigation, journalisation, catégorisation, escalade, priorisation, résolution et reprise, clôture"
        ],
        correctAnswer: 0,
        explanation: "Le flux ITIL standard de gestion des incidents commence par l'identification, suivie de la journalisation (enregistrement), puis catégorisation, priorisation, diagnostic initial, etc."
    },
    {
        id: 'q33',
        question: "Quelle étape du cycle de vie des services garantit que les méthodes de mesure fourniront les métriques requises pour des services nouveaux ou modifiés ?",
        options: [
            "La conception des services",
            "L'exploitation des services",
            "La stratégie des services",
            "La fourniture des services"
        ],
        correctAnswer: 0,
        explanation: "C'est la Conception des Services (Service Design) qui définit les architectures, processus, et méthodes de mesure (métriques) nécessaires pour les services."
    },
    {
        id: 'q34',
        question: "Parmi les processus suivants, lesquels s'intéressent à la gestion des risques auxquels les services sont exposés ?\n1. La gestion de la continuité des services informatiques\n2. La gestion de la sécurité de l'information\n3. La gestion du catalogue des services",
        options: [
            "Tous ces processus",
            "1 et 3 seulement",
            "2 et 3 seulement",
            "1 et 2 seulement"
        ],
        correctAnswer: 3,
        explanation: "La Continuité des Services IT et la Sécurité de l'Information impliquent directement l'évaluation et la gestion des risques. Le catalogue des services ne gère pas les risques."
    },
    {
        id: 'q35',
        question: "Lequel des éléments suivants n'est PAS un des types de métriques décrit par l'amélioration continue des services (CSI)?",
        options: [
            "Les métriques de processus",
            "Les métriques de services",
            "Les métriques de personnel",
            "Les métriques de technologie"
        ],
        correctAnswer: 2,
        explanation: "ITIL définit trois types de métriques : métriques technologiques (composants), métriques de processus (qualité/performance du processus) et métriques de services (service de bout en bout)."
    },
    {
        id: 'q36',
        question: "Lequel des énoncés suivants sur le rapport entre le système de gestion des configurations (CMS) et le système de gestion des connaissances des services (SKMS) est CORRECT ?",
        options: [
            "Le SKMS fait partie du CMS",
            "Le CMS fait partie du SKMS",
            "Le CMS et le SKMS sont identiques",
            "Il n'y a aucun rapport entre le CMS et le SKMS"
        ],
        correctAnswer: 1,
        explanation: "Le SKMS (Service Knowledge Management System) est l'ensemble global des connaissances. Le CMS (Configuration Management System) est une base de données faisant partie intégrante du SKMS."
    },
    {
        id: 'q37',
        question: "Quel est le rôle du comité consultatif sur les changements urgents (ECAB) ?",
        options: [
            "De soutenir le gestionnaire des changements afin qu'aucun changement urgent ne soit réalisé pendant les périodes particulièrement volatiles du business",
            "De soutenir le gestionnaire des changements en implémentant les changements urgents",
            "De soutenir le gestionnaire des changements dans l'évaluation des changements urgents et de décider si ceux-ci devraient être autorisés",
            "De soutenir le gestionnaire des changements pour accélérer le processus des changements urgents afin qu'aucun retard inacceptable n'ait lieu"
        ],
        correctAnswer: 2,
        explanation: "L'ECAB (Emergency Change Advisory Board) est un sous-groupe du CAB convoqué en urgence pour évaluer et autoriser rapidement des changements urgents de haute priorité."
    },
    {
        id: 'q38',
        question: "Lequel ou lesquels des énoncés suivants à propos du centre de service sont CORRECTS?\n1. Le centre de services est une fonction qui fournit un canal de communication entre les Tl et ses utilisateurs pour toutes les questions opérationnelles.\n2. Le centre de services devrait être le propriétaire du processus de gestion des problèmes.",
        options: [
            "2 Seulement",
            "1 seulement",
            "Les deux",
            "Aucun"
        ],
        correctAnswer: 1,
        explanation: "Le Centre de services est une fonction (point de contact unique). Toutefois, le propriétaire du processus de gestion des problèmes est le Problem Manager, non pas le Service Desk."
    },
    {
        id: 'q39',
        question: "Parmi les énoncés suivants, lequel correspond à la liste CORRECTE des Quatre Ps de la conception des services?",
        options: [
            "Planification, Produits, Position, Processus",
            "Planification, Perspective, Positionnement, Personnes",
            "Perspective, Partenaires, Problèmes, Personnes",
            "Personnes, Partenaires, Produits, Processus"
        ],
        correctAnswer: 3,
        explanation: "Les 4 P de la Conception des Services (Service Design) sont : Personnes (People), Processus (Processes), Produits/Technologies (Products) et Partenaires/Fournisseurs (Partners)."
    },
    {
        id: 'q40',
        question: "Lequel des énoncés suivants est la MEILLEURE action à entreprendre lorsqu'une solution de contournement pour un problème est trouvée ?",
        options: [
            "L'enregistrement du problème est fermé",
            "L'enregistrement du problème reste ouvert et les détails de la solution de contournement y sont documentés",
            "L'enregistrement du problème reste ouvert et les détails de la solution de contournement sont documentés dans tous les enregistrements des incidents liés",
            "L'enregistrement du problème est fermé et les détails de la solution de contournement sont documentés dans une demande de changement (RFC)"
        ],
        correctAnswer: 1,
        explanation: "L'enregistrement du problème (Problem Record) reste ouvert tant que la cause racine n'a pas été éliminée (solution définitive). La solution de contournement (Workaround) y est documentée."
    }
];

export default questions;