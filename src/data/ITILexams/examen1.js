const questions = [
    // ===== SAMPLE A =====
    {
        id: 'a1',
        question: "Quels types de changements ne sont généralement PAS inclus dans le périmètre de la Gestion des Changements de service?",
        options: [
            "Les changements d'un ordinateur mainframe",
            "Les changements d'une stratégie métier",
            "Les changements d'un accord sur les niveaux de service (SLA)",
            "Le retrait d'un service"
        ],
        correctAnswer: 1,
        explanation: "Les changements de stratégie métier ne sont généralement pas inclus dans le périmètre de la Gestion des Changements IT, car ils relèvent de la gouvernance business et non de la gestion des services informatiques."
    },
    {
        id: 'a2',
        question: "Lequel des objectifs suivants n'est PAS un objectif de l'Exploitation des Services?",
        options: [
            "Tester de façon minutieuse afin de s'assurer que les services sont conçus pour répondre aux besoins business",
            "Fournir et gérer les services informatiques",
            "Gérer la technologie utilisée pour fournir les services",
            "Surveiller la performance de la technologie et des processus"
        ],
        correctAnswer: 0,
        explanation: "Les tests approfondis pour s'assurer que les services sont conçus correctement relèvent de la Transition des Services, pas de l'Exploitation des Services."
    },
    {
        id: 'a3',
        question: "Le terme « Contrôle des opérations » fait référence :",
        options: [
            "A la gestion des fonctions Gestion Technique et Gestion des Applications",
            "A s'assurer de l'exécution et de la surveillance des activités opérationnelles et des évènements",
            "Aux outils utilisés pour surveiller et afficher le statut de l'infrastructure des TI et des applications",
            "A la situation dans laquelle le Centre de Services est tenu de surveiller l'état de l'infrastructure quand les opérateurs ne sont pas disponibles"
        ],
        correctAnswer: 1,
        explanation: "Le Contrôle des opérations consiste à s'assurer que les activités opérationnelles et les événements sont exécutés et surveillés de manière appropriée."
    },
    {
        id: 'a4',
        question: "Quel processus est responsable d'enregistrer les relations entre les composants de service?",
        options: [
            "La Gestion des Niveaux de Service",
            "La Gestion du Portefeuille de Services",
            "La Gestion des Actifs de Services et des Configurations",
            "La Gestion des Incidents"
        ],
        correctAnswer: 2,
        explanation: "La Gestion des Actifs de Services et des Configurations (SACM) est responsable de l'enregistrement et de la gestion des relations entre tous les composants de service (CI)."
    },
    {
        id: 'a5',
        question: "Dans quel but le modèle RACI est-il utilisé?",
        options: [
            "Documenter les rôles et les relations des parties prenantes dans un processus ou une activité",
            "Définir les besoins pour un nouveau service ou un processus",
            "Analyser l'impact business d'un incident",
            "Créer un tableau de bord équilibré montrant le statut global de la gestion des services"
        ],
        correctAnswer: 0,
        explanation: "Le modèle RACI (Responsable, Répondant, Consulté, Informé) sert à documenter clairement les rôles et responsabilités des parties prenantes dans un processus ou une activité."
    },
    {
        id: 'a6',
        question: "Laquelle des propositions suivantes est la MEILLEURE description d'un accord sur les niveaux opérationnels (OLA)?",
        options: [
            "Un accord entre un fournisseur de services informatiques et une autre partie de la même organisation qui soutient la livraison des services",
            "Un accord écrit entre le fournisseur de services informatiques et ses clients qui spécifie les cibles clés et les responsabilités des deux parties",
            "Un accord entre deux fournisseurs de services sur les niveaux de service exigés par le client",
            "Un accord sur les délais de correction et de réponse entre un Centre de services d'une tierce partie et le client des TI"
        ],
        correctAnswer: 0,
        explanation: "Un OLA est un accord interne entre le fournisseur de services IT et une autre partie de la même organisation, destiné à soutenir la livraison des services aux clients."
    },
    {
        id: 'a7',
        question: "Quel est le but PRINCIPAL de la Gestion de la Disponibilité?",
        options: [
            "Surveiller et établir des rapports sur la disponibilité des composants",
            "Assurer que toutes les cibles dans les accords sur les niveaux de service (SLA) sont atteintes",
            "Garantir les niveaux de disponibilité pour les services et les composants",
            "Assurer que la disponibilité des services atteint ou dépasse les besoins validés du business"
        ],
        correctAnswer: 3,
        explanation: "Le but principal de la Gestion de la Disponibilité est de s'assurer que la disponibilité des services répond aux besoins convenus avec le business, voire les dépasse."
    },
    {
        id: 'a8',
        question: "La Transition des Services fournit des conseils sur lesquelles des énoncés suivants?\n1. La mise en production des services nouveaux ou modifiés\n2. Les tests et la validation\n3. Le transfert des services vers ou depuis un fournisseur de services externe",
        options: [
            "1 et 2 seulement",
            "2 seulement",
            "Tous",
            "1 et 3 seulement"
        ],
        correctAnswer: 2,
        explanation: "La Transition des Services couvre tous ces aspects : la mise en production, les tests et validation, ainsi que le transfert de services vers ou depuis des fournisseurs externes."
    },
    {
        id: 'a9',
        question: "De quelles phases suivantes du cycle de vie des services, l'apprentissage et l'amélioration sont-ils la PREMIERE préoccupation?",
        options: [
            "Stratégie des Services, Conception des Services, Transition des Services, Exploitation des Services et Amélioration Continue des Services",
            "Stratégie des Services, Transition des Services et Exploitation des Services",
            "Exploitation des Services et Amélioration Continue des Services",
            "Amélioration Continue des Services"
        ],
        correctAnswer: 3,
        explanation: "L'apprentissage et l'amélioration sont la première préoccupation de l'Amélioration Continue des Services (CSI), même si l'amélioration peut s'appliquer à toutes les phases."
    },
    {
        id: 'a10',
        question: "Parmi les propositions suivantes laquelle est une activité du processus de Gestion des Actifs de Service et des Configurations?",
        options: [
            "Rendre des comptes pour tous les actifs financiers de l'organisation",
            "Spécifier les attributs concernant chaque élément de configuration (CI)",
            "Concevoir des modèles de service pour justifier les mises en place d'ITIL",
            "Implémenter ITIL à travers l'organisation"
        ],
        correctAnswer: 1,
        explanation: "La spécification des attributs de chaque élément de configuration (CI) est une activité centrale de la Gestion des Actifs de Service et des Configurations."
    },
    {
        id: 'a11',
        question: "Lesquels des concepts de base suivants font partie de la Gestion des Accès?\n1. Vérifier l'identité des utilisateurs qui demandent l'accès à des services\n2. Attribuer les droits ou privilèges aux systèmes afin de permettre l'accès aux utilisateurs autorisés\n3. Définir les politiques de sécurité pour l'accès aux systèmes\n4. Surveiller la disponibilité de systèmes auxquels les utilisateurs devraient avoir accès",
        options: [
            "2 et 4 seulement",
            "1 et 3 seulement",
            "2 et 3 seulement",
            "1 et 2 seulement"
        ],
        correctAnswer: 3,
        explanation: "La Gestion des Accès s'occupe de vérifier l'identité des utilisateurs (1) et d'attribuer les droits appropriés (2). La définition des politiques relève de la Gestion de la Sécurité, et la surveillance de la disponibilité relève d'autres processus."
    },
    {
        id: 'a12',
        question: "Lesquels des éléments suivants seraient stockés dans la bibliothèque des supports définitifs (DML)?\n1. Des copies de logiciels achetés\n2. Des copies de logiciels développés en interne\n3. Les documents de licence pertinents\n4. Le Calendrier des changements",
        options: [
            "Toutes ces réponses",
            "1 et 2 seulement",
            "3 et 4 seulement",
            "1, 2 et 3 seulement"
        ],
        correctAnswer: 3,
        explanation: "La DML contient les copies maîtresses des logiciels achetés (1), développés en interne (2) et les documents de licence (3). Le Calendrier des changements est géré par la Gestion des Changements, pas dans la DML."
    },
    {
        id: 'a13',
        question: "Quel processus est responsable de revoir les accords sur les niveaux opérationnels (OLA) de façon régulière?",
        options: [
            "La Gestion des Fournisseurs",
            "La Gestion des Niveaux de Services",
            "La Gestion du Portefeuille de Services",
            "La Gestion de la Demande"
        ],
        correctAnswer: 1,
        explanation: "La Gestion des Niveaux de Services (SLM) est responsable de la revue régulière des OLA pour s'assurer qu'ils soutiennent correctement les SLA convenus avec les clients."
    },
    {
        id: 'a14',
        question: "Lequel des éléments suivants est sous la responsabilité d'un propriétaire de processus?",
        options: [
            "L'achat d'outils pour soutenir le processus",
            "S'assurer que les cibles spécifiées dans un accord sur les niveaux de service (SLA) sont atteintes",
            "Effectuer toutes les activités définies dans le processus",
            "S'assurer que le processus soit exécuté tel que documenté"
        ],
        correctAnswer: 3,
        explanation: "Le propriétaire de processus est responsable de s'assurer que le processus est correctement documenté et exécuté conformément à sa conception."
    },
    {
        id: 'a15',
        question: "Lesquels des éléments suivants sont des buts du processus de la Gestion des Déploiements et des Mises en Production?\n1. S'assurer qu'il existe des plans clairs de mise en production et de déploiement\n2. S'assurer que l'impact imprévu sur les services en production, les opérations et le support est minimisé\n3. Autoriser des changements soutenant le processus",
        options: [
            "1 et 2 seulement",
            "Toutes ces réponses",
            "2 et 3 seulement",
            "1 et 3 seulement"
        ],
        correctAnswer: 0,
        explanation: "Les buts principaux sont d'avoir des plans clairs (1) et de minimiser l'impact imprévu (2). L'autorisation des changements est de la responsabilité de la Gestion des Changements, pas de la Gestion des Déploiements."
    },
    {
        id: 'a16',
        question: "Lequel des termes suivants décrit des « unités organisationnelles autonomes »?",
        options: [
            "Rôles",
            "Processus",
            "Fonctions",
            "Procédures"
        ],
        correctAnswer: 2,
        explanation: "Les Fonctions sont des unités organisationnelles autonomes, dotées de leurs propres ressources, capacités et rôles pour accomplir des tâches spécifiques."
    },
    {
        id: 'a17',
        question: "S'accorder sur les besoins business et les niveaux de service pour un nouveau service font partie de:",
        options: [
            "L'Exploitation des Services",
            "La Stratégie des Services",
            "La Transition des Services",
            "La Conception des Services"
        ],
        correctAnswer: 3,
        explanation: "La Conception des Services est la phase où l'on s'accorde sur les besoins business et les niveaux de service pour les services nouveaux ou modifiés."
    },
    {
        id: 'a18',
        question: "La politique de sécurité de l'information devrait être disponible à quels groupes d'individus?",
        options: [
            "Les gestionnaires seniors du business et tout le personnel informatique seulement",
            "Les gestionnaires seniors du business, les dirigeants informatiques et le gestionnaire de la sécurité de l'Information seulement",
            "Tous les clients, les utilisateurs et le personnel informatique",
            "Le personnel de Gestion de la Sécurité de l'Information seulement"
        ],
        correctAnswer: 2,
        explanation: "La politique de sécurité de l'information doit être accessible à tous les clients, utilisateurs et membres du personnel informatique afin d'assurer une compréhension et une conformité généralisées."
    },
    {
        id: 'a19',
        question: "Parmi les propositions suivantes, lesquelles sont des éléments valides du package de conception de service (SDP)?\n1. Des exigences business validées et documentées\n2. Une définition de service pour la transition et l'exploitation du service\n3. Des exigences pour de nouveaux processus ou processus modifiés\n4. Des métriques utilisées pour la mesure du service",
        options: [
            "1 seulement",
            "2 et 3 seulement",
            "1, 2 et 4 seulement",
            "Toutes ces propositions"
        ],
        correctAnswer: 3,
        explanation: "Le SDP est un document complet qui inclut tous ces éléments : exigences business (1), définition du service (2), exigences en matière de processus (3) et métriques (4)."
    },
    {
        id: 'a20',
        question: "Lesquels des exemples d'outils suivants pourraient soutenir l'étape de Transition des Services du cycle de vie?\n1. Un outil pour stocker des versions définitives de logiciels\n2. Un outil de flux (workflow) pour gérer les changements\n3. Un outil automatisé de distribution de logiciel\n4. Les outils de test et de validation",
        options: [
            "1, 3 et 4 seulement",
            "1, 2 et 3 seulement",
            "Tous",
            "2, 3 et 4 seulement"
        ],
        correctAnswer: 2,
        explanation: "Tous ces outils soutiennent la Transition des Services : stockage des versions (DML), gestion des changements (workflow), distribution de logiciels et tests/validation."
    },
    {
        id: 'a21',
        question: "Lesquelles des propositions suivantes concernant la Gestion des Problèmes sont CORRECTES?\n1. Elle s'assure que toutes résolutions et solutions de contournement nécessitant un changement d'un CI sont soumises à la Gestion des Changements\n2. Elle fournit de l'information de gestion sur le coût de résolution et de prévention des problèmes",
        options: [
            "1 seulement",
            "2 seulement",
            "Les deux",
            "Aucune"
        ],
        correctAnswer: 2,
        explanation: "Les deux énoncés sont corrects : la Gestion des Problèmes soumet les changements nécessaires à la Gestion des Changements (1) et fournit des informations sur les coûts de résolution et prévention (2)."
    },
    {
        id: 'a22',
        question: "Quel est l'objet du processus d'Exécution des Requêtes?",
        options: [
            "Traiter les demandes de services des utilisateurs",
            "Assurer l'exécution de toutes les requêtes provenant d'une organisation informatique",
            "Assurer l'exécution des demandes de changement",
            "Assurer le respect de l'accord sur les niveaux de services (SLA)"
        ],
        correctAnswer: 0,
        explanation: "L'Exécution des Requêtes traite les demandes de services standards des utilisateurs, telles que les demandes d'informations, de conseil ou d'accès à des services."
    },
    {
        id: 'a23',
        question: "Lequel des énoncés suivants sur la création de valeur par les services est CORRECT?",
        options: [
            "La perception du client par rapport au service est un facteur important de la création de la valeur.",
            "La valeur d'un service ne peut être mesurée qu'en termes financiers",
            "L'obtention de résultats par le fournisseur de services est importante pour la valeur d'un service",
            "Les préférences du fournisseur de service façonnent la perception de la valeur d'un service"
        ],
        correctAnswer: 0,
        explanation: "La valeur est en grande partie définie par la perception du client. C'est le client qui juge si un service crée de la valeur en fonction de ses préférences et besoins."
    },
    {
        id: 'a24',
        question: "Planifier, Faire, Vérifier, Agir (PDCA) sont quatre étapes de quelle méthode d'amélioration de la qualité?",
        options: [
            "Le cadre de gestion des connaissances business",
            "La technique de benchmarking",
            "L'Amélioration Continue des Services",
            "Le cycle de Deming"
        ],
        correctAnswer: 3,
        explanation: "Le PDCA (Plan-Do-Check-Act) est le cycle de Deming, une méthode d'amélioration continue de la qualité développée par W. Edwards Deming."
    },
    {
        id: 'a25',
        question: "Lequel des éléments suivants les services informatiques devraient-ils livrer aux clients?",
        options: [
            "Des aptitudes",
            "Des coûts",
            "Des risques",
            "De la valeur"
        ],
        correctAnswer: 3,
        explanation: "L'objectif fondamental des services IT est de livrer de la valeur aux clients, en facilitant leurs résultats sans qu'ils aient à gérer eux-mêmes les coûts et risques associés."
    },
    {
        id: 'a26',
        question: "La Gestion des Niveaux de Services (SLM) comprend laquelle des activités suivantes?",
        options: [
            "Concevoir le système de Gestion des Configurations avec une perspective business",
            "Créer des métriques technologiques alignées sur les besoins du client",
            "Discuter des services rendus avec les clients",
            "Former le personnel du Centre de Services sur comment gérer les plaintes client sur le service"
        ],
        correctAnswer: 2,
        explanation: "La SLM inclut la discussion et la revue régulière des services fournis avec les clients, notamment à travers des réunions de revue de service."
    },
    {
        id: 'a27',
        question: "Lequel des énoncés ci-dessous décrit LE MIEUX l'objet de la Gestion des Évènements?",
        options: [
            "La capacité de détecter des évènements, les interpréter et déterminer l'action de contrôle appropriée",
            "La capacité de détecter des évènements, restaurer le service normal aussi rapidement que possible et minimiser l'impact négatif sur les opérations business",
            "La capacité de surveiller et de contrôler les activités du personnel technique",
            "La capacité de produire un rapport sur la fourniture réussie des services en vérifiant le temps de disponibilité des équipements d'infrastructure"
        ],
        correctAnswer: 0,
        explanation: "La Gestion des Évènements consiste à détecter, interpréter et répondre de manière appropriée aux événements dans l'infrastructure IT."
    },
    {
        id: 'a28',
        question: "Un Catalogue des services devrait contenir laquelle des propositions suivantes?",
        options: [
            "Les informations sur les versions de tous les logiciels",
            "La structure organisationnelle de l'entreprise",
            "Les informations sur les actifs",
            "Les détails de tous les services opérationnels"
        ],
        correctAnswer: 3,
        explanation: "Le Catalogue des Services contient les détails de tous les services en production (opérationnels), y compris leurs caractéristiques et les informations nécessaires aux clients."
    },
    {
        id: 'a29',
        question: "Que signifie « garantie de service »?",
        options: [
            "Le service est adapté au besoin",
            "Il n'y aura pas de défaillances au niveau des applications et de l'infrastructure associées au service",
            "Tous les problèmes liés au service sont corrigés gratuitement durant une certaine période de temps",
            "Les clients sont assurés de certains niveaux de disponibilité, de capacité, de continuité et de sécurité"
        ],
        correctAnswer: 3,
        explanation: "La garantie de service (warranty) assure aux clients des niveaux convenus de disponibilité, de capacité, de continuité et de sécurité — c'est le « comment » le service est fourni."
    },
    {
        id: 'a30',
        question: "Un technicien utilise une technique prédéfinie afin de restaurer le service, car cet Incident s'est déjà produit dans le passé. Ceci est un exemple de :",
        options: [
            "Une solution de contournement",
            "Un changement standard",
            "Une aptitude de service",
            "Une alerte"
        ],
        correctAnswer: 0,
        explanation: "Utiliser une technique prédéfinie pour restaurer le service sans résoudre la cause racine est une solution de contournement (workaround)."
    },
    {
        id: 'a31',
        question: "Laquelle des propositions suivantes est un bénéfice de l'utilisation d'un modèle d'incident?",
        options: [
            "Il rend les problèmes plus facilement identifiés et diagnostiqués",
            "Il signifie que les types d'incidents connus ne récure jamais",
            "Il établit des étapes prédéfinies pour le traitement de certains types d'incidents",
            "Il s'assure que tous les incidents sont faciles à résoudre"
        ],
        correctAnswer: 2,
        explanation: "Un modèle d'incident définit des étapes prédéfinies et convenues pour traiter efficacement certains types d'incidents récurrents."
    },
    {
        id: 'a32',
        question: "Parmi les séquences d'activités suivantes pour le traitement d'un incident, laquelle est CORRECTE?",
        options: [
            "Identification, journalisation, catégorisation, priorisation, diagnostic initial, escalade fonctionnelle, investigation et diagnostics, résolution et reprise, clôture",
            "Priorisation, identification, journalisation, catégorisation, diagnostic initial, escalade fonctionnelle, investigation et diagnostic, résolution et reprise, clôture",
            "Identification, journalisation, diagnostic initial, catégorisation, priorisation, escalade fonctionnelle, résolution et reprise, investigation et diagnostic, clôture",
            "Identification, diagnostic initial, investigation, journalisation, catégorisation, escalade fonctionnelle, priorisation, résolution et reprise, clôture"
        ],
        correctAnswer: 0,
        explanation: "La séquence correcte ITIL est : Identification → Journalisation → Catégorisation → Priorisation → Diagnostic initial → Escalade fonctionnelle → Investigation et diagnostic → Résolution et reprise → Clôture."
    },
    {
        id: 'a33',
        question: "Lesquelles des propositions suivantes sont des objectifs de l'Amélioration Continue des Services?\n1. Améliorer l'efficience et l'efficacité des processus\n2. Améliorer des services\n3. Améliorer toutes les phases du cycle de vie des services, SAUF la Stratégie des Services\n4. Améliorer des normes internationales telles que ISO/IEC 20000",
        options: [
            "1 et 2 seulement",
            "2 et 4 seulement",
            "1, 2 et 3 seulement",
            "Toutes ces propositions"
        ],
        correctAnswer: 0,
        explanation: "Les objectifs du CSI sont d'améliorer l'efficience et l'efficacité des processus (1) ainsi que les services (2). Le CSI s'applique à TOUTES les phases du cycle de vie (pas seulement certaines), et il ne vise pas à améliorer les normes ISO."
    },
    {
        id: 'a34',
        question: "Laquelle des propositions suivantes est une activité MAJEURE de la Gestion de la Demande?",
        options: [
            "L'augmentation de la valeur pour les clients",
            "La compréhension des profils d'activité business",
            "L'augmentation de la valeur des TI",
            "L'alignement du business sur les coûts des TI"
        ],
        correctAnswer: 1,
        explanation: "La compréhension des profils d'activité business (PBA) est une activité majeure de la Gestion de la Demande, permettant de prévoir et d'influencer la demande de services."
    },
    {
        id: 'a35',
        question: "Lequel des éléments suivants n'est PAS décrit par l'Amélioration Continue des Services (CSI) comme un des types de métriques?",
        options: [
            "Les métriques de processus",
            "Les métriques de services",
            "Les métriques de personnel",
            "Les métriques de technologie"
        ],
        correctAnswer: 2,
        explanation: "Le CSI définit trois types de métriques : les métriques de technologie, de processus et de services. Les métriques de personnel ne font pas partie de cette classification."
    },
    {
        id: 'a36',
        question: "Lequel des énoncés suivants sur le rapport entre le système de gestion des configurations (CMS) et le système de gestion des connaissances des services (SKMS) est CORRECT?",
        options: [
            "Le SKMS fait partie du CMS",
            "Le CMS fait partie du SKMS",
            "Le CMS et le SKMS sont identiques",
            "Il n'y a aucun rapport entre le CMS et le SKMS"
        ],
        correctAnswer: 1,
        explanation: "Le CMS est un sous-ensemble du SKMS. Le SKMS est plus large et englobe toutes les connaissances de gestion des services, dont le CMS fait partie."
    },
    {
        id: 'a37',
        question: "Quel est le rôle du comité consultatif sur les changements urgents (ECAB)?",
        options: [
            "De soutenir le gestionnaire des changements afin qu'aucun changement urgent ne soit réalisé pendant les périodes particulièrement volatiles du business",
            "De soutenir le gestionnaire des changements en implémentant les changements urgents",
            "De soutenir le gestionnaire des changements dans l'évaluation des changements urgents et de décider si ceux-ci devraient être approuvés",
            "De soutenir le gestionnaire des changements pour accélérer le processus des changements urgents afin qu'aucun retard inacceptable n'ait lieu"
        ],
        correctAnswer: 2,
        explanation: "L'ECAB (Emergency Change Advisory Board) se réunit pour évaluer les changements urgents et décider de leur approbation, en tenant compte des risques et de l'impact."
    },
    {
        id: 'a38',
        question: "Lequel des énoncés suivants à propos du Centre de Service est CORRECT?\n1. Le Centre de Service est une fonction qui fournit un canal de communication entre les TI et ses utilisateurs pour toutes les questions opérationnelles.\n2. Le Centre de Service devrait être le propriétaire du processus de Gestion des Problèmes.",
        options: [
            "2 Seulement",
            "1 seulement",
            "Les deux",
            "Aucun"
        ],
        correctAnswer: 1,
        explanation: "Seul l'énoncé 1 est correct : le Centre de Services est le point de contact unique entre IT et les utilisateurs. La propriété de la Gestion des Problèmes revient généralement au gestionnaire des problèmes, pas au Centre de Services."
    },
    {
        id: 'a39',
        question: "Lequel des énoncés suivants liste les Quatre Ps de la conception des services?",
        options: [
            "Planification, Produits, Position, Processus",
            "Planification, Perspective, Positionnement, Personnes",
            "Perspective, Partenaires, Problèmes, Personnes",
            "Personnes, Partenaires, Produits, Processus"
        ],
        correctAnswer: 3,
        explanation: "Les quatre Ps de la Conception des Services sont : Personnes, Partenaires, Produits et Processus — les quatre domaines clés à considérer pour une conception efficace."
    },
    {
        id: 'a40',
        question: "Lequel des énoncés suivants est la MEILLEURE action à entreprendre lorsqu'une solution de contournement pour un problème est trouvée?",
        options: [
            "L'enregistrement du problème est fermé",
            "L'enregistrement du problème reste ouvert et les détails de la solution de contournement y sont documentés",
            "L'enregistrement du problème reste ouvert et les détails de la solution de contournement sont documentés dans tous les enregistrements des incidents liés",
            "L'enregistrement du problème est fermé et les détails de la solution de contournement sont documentés dans une demande de changement (RFC)"
        ],
        correctAnswer: 1,
        explanation: "Lorsqu'une solution de contournement est trouvée, l'enregistrement du problème reste ouvert (la cause racine n'est pas résolue) et la solution de contournement y est documentée."
    },

    // ===== SAMPLE B =====
    {
        id: 'b1',
        question: "Lors de la négociation des accords sur les niveaux de service (SLA), la Gestion des Niveaux de Service pourrait prendre en considération de l'information venant de quels processus?",
        options: [
            "Tous les autres processus ITIL",
            "Seulement la Gestion de la Capacité et la Gestion de la Disponibilité",
            "Seulement la Gestion des Incidents et la Gestion des Problèmes",
            "Seulement la Gestion des Changements et la Gestion des Déploiements et des Mises en Production"
        ],
        correctAnswer: 0,
        explanation: "La Gestion des Niveaux de Services peut s'appuyer sur les informations provenant de tous les autres processus ITIL pour négocier des SLA réalistes et bien fondés."
    },
    {
        id: 'b2',
        question: "Lequel des énoncés suivants sur un changement standard est INCORRECT?",
        options: [
            "Un changement standard est un changement dont l'approche est pré-autorisée par la Gestion des Changements",
            "L'approbation pour chaque occurrence d'un changement standard sera donnée par l'autorité désigné pour celui-là",
            "Les changements standards sont généralement de risque faible et bien compris",
            "Les changements standards ne sont soumis que par le processus de la Gestion des Incidents"
        ],
        correctAnswer: 3,
        explanation: "Les changements standards peuvent être initiés par plusieurs processus, pas uniquement la Gestion des Incidents. Ils sont pré-autorisés et de faible risque."
    },
    {
        id: 'b3',
        question: "Lequel des énoncés suivants concernant le personnel du Centre de Services est CORRECT?",
        options: [
            "Le personnel du Centre de Services a besoin de moins de formation que les autres membres du département informatique",
            "Le personnel du Centre de Services devrait représenter le point de vue du client pendant les négociations des accords sur les niveaux de services (SLA)",
            "Le bon travail du personnel du Centre de Services exige une sensibilité à la culture et aux priorités du business",
            "Les compétences techniques sont plus importantes au Centre de Services que les compétences business ou les compétences interpersonnelles"
        ],
        correctAnswer: 2,
        explanation: "Le personnel du Centre de Services doit faire preuve d'une bonne sensibilité aux cultures et priorités business pour offrir un service de qualité à tous les utilisateurs."
    },
    {
        id: 'b4',
        question: "Lequel des énoncés suivants sur la demande pour les services informatiques est CORRECT?",
        options: [
            "Elle est liée aux profils d'activité business",
            "Son comportement est impossible à prédire",
            "Il est impossible d'influencer les profils de demande",
            "Elle est influencée par le calendrier de fourniture généré par la Gestion de la Capacité"
        ],
        correctAnswer: 0,
        explanation: "La demande de services IT est directement liée aux profils d'activité business (PBA). Comprendre ces profils permet de gérer et prévoir la demande."
    },
    {
        id: 'b5',
        question: "Quel est le rôle de la gestion des moyens généraux (Facilities Management)?",
        options: [
            "La gestion des services informatiques considérés comme étant des 'commodités', tels que les imprimantes ou l'accès au réseau",
            "Des conseils et des recommandations aux opérations informatiques sur la méthodologie et les outils pour la gestion des services informatiques",
            "La gestion de l'environnement informatique physique, tel qu'un centre de traitement de données",
            "L'approvisionnement et le maintien de l'outillage du personnel des opérations informatiques afin de maintenir l'infrastructure"
        ],
        correctAnswer: 2,
        explanation: "La Gestion des Moyens Généraux (Facilities Management) est responsable de la gestion de l'environnement physique IT, comme les centres de traitement de données."
    },
    {
        id: 'b6',
        question: "Quels sont les trois sous-processus de la Gestion de la Capacité?",
        options: [
            "La Gestion de la Capacité Business, la Gestion de la Capacité des Services, la Gestion de la Capacité des Composants",
            "La Gestion de la Capacité des Fournisseurs, la Gestion de la Capacité des Services, la Gestion de la Capacité des Composants",
            "La Gestion de la Capacité des Fournisseurs, la Gestion de la Capacité des Services, la Gestion de la Capacité de la Technologie",
            "La Gestion de la Capacité Business, la Gestion de la Capacité de la Technologie, la Gestion de la Capacité des Composants"
        ],
        correctAnswer: 0,
        explanation: "Les trois sous-processus de la Gestion de la Capacité sont : la Gestion de la Capacité Business (BCM), la Gestion de la Capacité des Services (SCM) et la Gestion de la Capacité des Composants (CCM)."
    },
    {
        id: 'b7',
        question: "Lequel des énoncés suivants sur la base de données des erreurs connues (KEDB) est LE PLUS juste?",
        options: [
            "La KEDB est la même base de données que le système de gestion des connaissances des services (SKMS)",
            "La KEDB devrait être utilisée pendant la phase de diagnostic des incidents afin d'accélérer le processus de résolution",
            "Il faut prendre soin d'éviter la duplication des enregistrements dans la KEDB en octroyant le droit de créer de nouveaux enregistrements à autant de techniciens que possible",
            "L'accès à la KEDB devrait être limité au Centre de Services"
        ],
        correctAnswer: 1,
        explanation: "La KEDB doit être consultée lors du diagnostic des incidents pour accélérer leur résolution, en s'appuyant sur des solutions de contournement déjà connues."
    },
    {
        id: 'b8',
        question: "Lesquels des énoncés sur les indicateurs clés de performance (KPIs) et les métriques sont CORRECTS?\n1. Les métriques de services mesurent un service de bout en bout\n2. Chaque KPI devrait être lié à un facteur clé de succès\n3. L'Amélioration Continue des Services (CSI) utilise des métriques de processus afin d'identifier des opportunités d'amélioration\n4. Les KPIs peuvent être qualitatifs ou quantitatifs",
        options: [
            "1 seulement",
            "2 et 3 seulement",
            "1, 2 et 4 seulement",
            "Tous les énoncés"
        ],
        correctAnswer: 3,
        explanation: "Tous les énoncés sont corrects : les métriques de services sont bout en bout (1), les KPI sont liés aux CSF (2), le CSI utilise les métriques de processus (3), et les KPI peuvent être qualitatifs ou quantitatifs (4)."
    },
    {
        id: 'b9',
        question: "Qu'est-ce qui est décrit par l'énoncé suivant ? « Il maintient les relations entre les composants de service et les éléments relatifs tels que les incidents, les problèmes, les erreurs connues, la documentation des changements et des mises en production »",
        options: [
            "Le plan de capacité",
            "La bibliothèque des supports définitifs",
            "Le système de gestion des configurations",
            "Un accord sur les niveaux de service"
        ],
        correctAnswer: 2,
        explanation: "Le Système de Gestion des Configurations (CMS) maintient les relations entre tous les composants de service et les enregistrements associés (incidents, problèmes, changements, etc.)."
    },
    {
        id: 'b10',
        question: "Lesquels des énoncés suivants sur une bibliothèque des supports définitifs (DML) sont CORRECTS?\n1. La DML peut inclure un lieu de stockage physique\n2. La DML contient des pièces de rechange définitives\n3. La DML inclut les copies maîtresses de la documentation sous contrôle",
        options: [
            "Tous les trois",
            "1 et 2 seulement",
            "2 et 3 seulement",
            "1 et 3 seulement"
        ],
        correctAnswer: 3,
        explanation: "La DML peut avoir un stockage physique (1) et contient les copies maîtresses de la documentation (3). Les pièces de rechange physiques sont gérées dans un magasin de pièces définitives séparé, pas dans la DML."
    },
    {
        id: 'b11',
        question: "Lesquels des énoncés suivants sont corrects?\n1. La Gestion des Problèmes peut soutenir le Centre de Services par la provision des erreurs connues afin d'accélérer la résolution des incidents\n2. La Gestion des Problèmes est la source unique d'informations pour la Gestion des Niveaux de Services sur l'impact des changements",
        options: [
            "1 seulement",
            "2 seulement",
            "Tous les deux",
            "Aucun"
        ],
        correctAnswer: 0,
        explanation: "Seul l'énoncé 1 est correct. La Gestion des Problèmes fournit les erreurs connues au Centre de Services (1). Cependant, elle n'est pas la source unique d'information pour la SLM sur l'impact des changements (2 est faux)."
    },
    {
        id: 'b12',
        question: "Un outil de surveillance détecte une panne dans un système. Celui-ci soutient un service informatique en production. A quel moment devrait-on soumettre un Incident?",
        options: [
            "Uniquement après que des utilisateurs aient remarqué la panne",
            "Aucun incident ne devrait être enregistré si les techniciens ont déjà constaté cette panne dans le passé et ont une solution de contournement",
            "Uniquement si la panne provoque le non respect d'un niveau de service",
            "Immédiatement afin de limiter ou de prévenir un impact sur les utilisateurs"
        ],
        correctAnswer: 3,
        explanation: "Un incident doit être soumis immédiatement dès détection d'une panne, pour limiter ou prévenir tout impact sur les utilisateurs, sans attendre qu'ils le signalent eux-mêmes."
    },
    {
        id: 'b13',
        question: "Laquelle des questions suivantes ne trouve PAS sa réponse parmi les informations dans le portefeuille de services?",
        options: [
            "Comment devrions-nous allouer nos ressources et nos aptitudes ?",
            "Quelles opportunités existent-elles sur le marché ?",
            "Pourquoi un client devrait-il acheter ces services ?",
            "Quels sont les modèles de tarification ?"
        ],
        correctAnswer: 1,
        explanation: "Le portefeuille de services répond aux questions sur les services offerts, les ressources, les raisons d'achat et la tarification. L'identification des opportunités de marché relève de la Stratégie des Services, pas du portefeuille."
    },
    {
        id: 'b14',
        question: "Un modèle de configuration documente les relations entre lesquelles des combinaisons suivantes:",
        options: [
            "Les services, les actifs et l'infrastructure",
            "Les processus, le réseau et les accords sur les niveaux opérationnels (OLA)",
            "Les procédures, l'infrastructure et les contrats",
            "Le Centre de Services, les actifs et les fournisseurs de support technique"
        ],
        correctAnswer: 0,
        explanation: "Un modèle de configuration documente les relations entre les services, les actifs IT et l'infrastructure — les éléments clés gérés dans le CMS."
    },
    {
        id: 'b15',
        question: "Lesquels des énoncés suivants sur les processus sont CORRECTS?\n1. Tous les processus doivent avoir un propriétaire\n2. Un processus prend une ou plusieurs entrées et les transforme en sorties définies",
        options: [
            "1 seulement",
            "2 seulement",
            "Les deux",
            "Aucun"
        ],
        correctAnswer: 2,
        explanation: "Les deux énoncés sont corrects : tout processus ITIL doit avoir un propriétaire de processus (1) et, par définition, un processus transforme des entrées en sorties définies (2)."
    },
    {
        id: 'b16',
        question: "Lequel des énoncés suivants est CORRECT pour TOUS les processus?",
        options: [
            "Ils définissent des fonctions comme élément de leur conception",
            "Ils devraient fournir de la valeur pour des parties prenantes",
            "Ils sont effectués par un fournisseur de services externe pour soutenir un client",
            "Ils sont des unités organisationnelles responsables de résultats spécifiques"
        ],
        correctAnswer: 1,
        explanation: "Tous les processus, qu'ils soient internes ou externes, doivent fournir de la valeur aux parties prenantes — c'est leur raison d'être fondamentale."
    },
    {
        id: 'b17',
        question: "Quel processus prend en considération les options suivantes?\n1. Big Bang vs Par phase\n2. Poussé vs Tiré\n3. Automatisé vs Manuel",
        options: [
            "La Gestion des Incidents",
            "La Gestion des Déploiements et des Mises en Production",
            "La Gestion des Actifs de Services et des Configurations",
            "La Gestion du Catalogue des Services"
        ],
        correctAnswer: 1,
        explanation: "La Gestion des Déploiements et des Mises en Production considère ces options de déploiement : big bang ou par phases, méthode push ou pull, automatisée ou manuelle."
    },
    {
        id: 'b18',
        question: "Lequel des énoncés suivants est LE MEILLEUR exemple d'une solution de contournement?",
        options: [
            "Un technicien installe un script pour rediriger l'impression sur une imprimante alternative jusqu'à ce qu'une solution permanente soit appliquée",
            "Un technicien essaie différentes approches afin de résoudre l'incident. L'une d'entre elles fonctionne, bien qu'il ne comprenne pas pourquoi",
            "Après avoir rapporté l'incident au Centre de Services, l'utilisateur travaille sur des tâches alternatives pendant que le problème est identifié et résolu",
            "Un équipement fonctionne de façon intermittente, permettant à l'utilisateur de continuer de travailler à un niveau de performance dégradé pendant que le technicien diagnostique l'incident"
        ],
        correctAnswer: 0,
        explanation: "Rediriger l'impression vers une imprimante alternative est une solution de contournement classique : elle restaure le service temporairement sans résoudre la cause racine."
    },
    {
        id: 'b19',
        question: "La technologie pourrait aider à soutenir lesquels des domaines suivants?\n1. L'auto-assistance\n2. La production des rapports\n3. Le déploiement et mise en production\n4. La conception de processus",
        options: [
            "1, 2 et 3 seulement",
            "1, 3 et 4 seulement",
            "2, 3 et 4 seulement",
            "Tous"
        ],
        correctAnswer: 3,
        explanation: "La technologie peut soutenir tous ces domaines : l'auto-assistance (portails), la production de rapports (outils BI), le déploiement (outils d'automatisation) et la conception de processus (outils de modélisation)."
    },
    {
        id: 'b20',
        question: "Quelles sont les quatre étapes du Cycle de Deming?",
        options: [
            "Planifier, Mesurer, Surveiller, Rapporter",
            "Planifier, Vérifier, Réagir, Implémenter",
            "Planifier, Faire, Agir, Auditer",
            "Planifier, Faire, Vérifier, Agir"
        ],
        correctAnswer: 3,
        explanation: "Le Cycle de Deming (PDCA) comprend quatre étapes : Planifier (Plan), Faire (Do), Vérifier (Check) et Agir (Act)."
    },
    {
        id: 'b21',
        question: "Lesquels de ces processus incluent le besoin d'effectuer une évaluation et gestion de risques encourus par des services et ses actifs de soutien?\n1. La Gestion de la Continuité des Services Informatiques\n2. La Gestion de la Sécurité de l'Information\n3. La Gestion du Catalogue des Services",
        options: [
            "Tous",
            "1 et 3 seulement",
            "2 et 3 seulement",
            "1 et 2 seulement"
        ],
        correctAnswer: 3,
        explanation: "La Gestion de la Continuité des Services IT (1) et la Gestion de la Sécurité de l'Information (2) requièrent toutes deux une évaluation des risques. La Gestion du Catalogue des Services ne l'exige pas."
    },
    {
        id: 'b22',
        question: "Quelle est LA MEILLEURE définition d'un modèle d'incident?",
        options: [
            "Le document type utilisé pour la définition du formulaire de saisie d'incident afin de soumettre des incidents",
            "Un type d'incident impliquant un type d'élément de configuration (CI) standard (ou un modèle)",
            "Un ensemble d'étapes prédéfinies à suivre lorsqu'il faut traiter un type connu d'incident",
            "Un incident facile à résoudre"
        ],
        correctAnswer: 2,
        explanation: "Un modèle d'incident est un ensemble d'étapes prédéfinies pour traiter efficacement un type connu et récurrent d'incident."
    },
    {
        id: 'b23',
        question: "Quels rôles sont définis dans le modèle RACI?",
        options: [
            "Responsable, Répondant (Accountable), Consulté, Informé",
            "Responsable, Atteignable, Consulté, Informé",
            "Réaliste, Répondant (Accountable), Consulté, Informé",
            "Responsable, Répondant (Accountable), Corrigé, Informé"
        ],
        correctAnswer: 0,
        explanation: "RACI signifie : Responsable (celui qui réalise), Répondant/Accountable (celui qui rend compte), Consulté (ceux dont l'avis est requis), et Informé (ceux qui sont tenus au courant)."
    },
    {
        id: 'b24',
        question: "Durant quelle phase dans le cycle de vie des services doit-il être décidé quels services devraient être offerts et à qui?",
        options: [
            "L'Amélioration Continue des Services",
            "L'Exploitation des Services",
            "La Conception des Services",
            "La Stratégie des Services"
        ],
        correctAnswer: 3,
        explanation: "C'est durant la Stratégie des Services que l'on décide quels services offrir, à qui, et comment se positionner sur le marché."
    },
    {
        id: 'b25',
        question: "L'Amélioration Continue des Services fournit des conseils sur lesquels des énoncés suivants?\n1. Comment améliorer l'efficacité et l'efficience des processus\n2. Comment améliorer des services\n3. L'amélioration de toutes les phases du cycle de vie des services\n4. La mesure des processus et des services",
        options: [
            "1 et 2 seulement",
            "2 seulement",
            "1, 3 et 4 seulement",
            "Tous"
        ],
        correctAnswer: 3,
        explanation: "Le CSI fournit des conseils sur tous ces aspects : amélioration des processus (1), des services (2), de toutes les phases du cycle de vie (3), et la mesure (4)."
    },
    {
        id: 'b26',
        question: "Lequel des énoncés ci-dessous est un type d'accord de niveaux de service (SLA), tel que décrit dans le livre ITIL La Conception des Services?",
        options: [
            "SLA basé sur la priorité",
            "SLA basé sur la technologie",
            "SLA basé sur la localisation",
            "SLA basé sur le client"
        ],
        correctAnswer: 3,
        explanation: "ITIL décrit trois types de SLA : basé sur le service, basé sur le client, et le SLA multi-niveaux. Le SLA basé sur le client est bien l'un d'entre eux."
    },
    {
        id: 'b27',
        question: "Lequel des énoncés suivants est la MEILLEURE définition d'un événement?",
        options: [
            "Une occurrence lors de laquelle un seuil de performance a été dépassé et un niveau de service convenu a été impacté",
            "Une occurrence qui est significative pour la gestion de l'infrastructure TI ou la livraison de services",
            "Une défaillance système connue qui génère plusieurs rapports d'incidents",
            "Une rencontre planifiée avec les clients et le personnel TI pour annoncer un nouveau service ou un programme d'amélioration"
        ],
        correctAnswer: 1,
        explanation: "Un événement est toute occurrence significative pour la gestion de l'infrastructure IT ou la livraison des services — qu'il soit normal, d'avertissement ou d'exception."
    },
    {
        id: 'b28',
        question: "Laquelle des phases du cycle de vie des services est responsable de s'assurer que les méthodes de prises de mesures fourniront les métriques requises pour de nouveaux services ou des services modifiés?",
        options: [
            "La Conception des Services",
            "L'Exploitation des Services",
            "La Stratégie des Services",
            "La Fourniture des Services"
        ],
        correctAnswer: 0,
        explanation: "La Conception des Services est responsable de s'assurer que les méthodes de mesure appropriées sont intégrées dès la conception, pour fournir les métriques nécessaires."
    },
    {
        id: 'b29',
        question: "Lequel des énoncés suivants devrait être traité en tant qu'incident?\n1. Un utilisateur ne peut pas accéder à un service pendant les heures de service\n2. Un membre du personnel TI autorisé est incapable d'accéder à un service pendant les heures de service\n3. Une partie du réseau tombe en panne et l'utilisateur n'est pas conscient d'une perturbation de service\n4. Un utilisateur contacte le Centre de Services au sujet de faibles performances d'une application",
        options: [
            "Tous",
            "1 et 4 seulement",
            "2 et 3 seulement",
            "Aucun"
        ],
        correctAnswer: 0,
        explanation: "Tous ces cas constituent des incidents : toute interruption non planifiée ou dégradation d'un service IT doit être traitée comme un incident, qu'elle soit signalée par un utilisateur ou détectée automatiquement."
    },
    {
        id: 'b30',
        question: "Lequel des énoncés suivants à propos d'un modèle de changement est CORRECT?",
        options: [
            "Il ne devrait pas être utilisé pour des changements urgents",
            "Il devrait être construit lorsqu'un changement significatif est requis",
            "Il prédéfinit les étapes qui devraient être suivies afin de traiter un changement de façon entendue",
            "Les procédures d'escalade sont exclues de la portée de celui-ci"
        ],
        correctAnswer: 2,
        explanation: "Un modèle de changement prédéfinit les étapes convenues pour traiter des types spécifiques de changements, incluant les procédures d'escalade si nécessaire."
    },
    {
        id: 'b31',
        question: "Quelle est la première activité du modèle d'Amélioration Continue des Services (CSI)?",
        options: [
            "Comprendre la vision et les objectifs du business",
            "Effectuer une évaluation de référence afin de comprendre la situation actuelle",
            "S'accorder sur les priorités pour l'amélioration",
            "Créer et vérifier un plan"
        ],
        correctAnswer: 0,
        explanation: "La première étape du modèle CSI est de comprendre la vision et les objectifs du business, car toute amélioration doit être alignée sur les buts stratégiques de l'organisation."
    },
    {
        id: 'b32',
        question: "Quels sont les processus de l'Exploitation de Services manquants dans la liste ci-dessous?\n1. La Gestion des Incidents\n2. La Gestion des Problèmes\n3. La Gestion des Accès\n4. ?\n5. ?",
        options: [
            "La Gestion des Événements et l'Exécution des Requêtes",
            "La Gestion des Évènements et le Centre de Services",
            "La Gestion des Moyens Généraux (Facilities Management) et la Gestion des Événements",
            "La Gestion des Changements et la Gestion des Niveaux de Service"
        ],
        correctAnswer: 0,
        explanation: "Les cinq processus de l'Exploitation des Services sont : Gestion des Incidents, Gestion des Problèmes, Gestion des Accès, Gestion des Événements et Exécution des Requêtes."
    },
    {
        id: 'b33',
        question: "Laquelle des phases du cycle de vie des services fournit un cadre afin d'évaluer l'aptitude de service et le profil de risque avant et pendant le déploiement du service?",
        options: [
            "La Stratégie des Services",
            "L'Amélioration Continue des Services",
            "La Transition des Services",
            "L'Exploitation des Services"
        ],
        correctAnswer: 2,
        explanation: "La Transition des Services fournit le cadre pour évaluer l'aptitude des services et les risques avant et pendant leur déploiement, via des processus comme la Gestion des Changements et la Validation des Services."
    },
    {
        id: 'b34',
        question: "Lesquelles des activités suivantes vous attendriez vous qu'un propriétaire de service effectue?\n1. Représenter un service spécifique à travers l'organisation\n2. Mettre la CMDB à jour après un changement\n3. Aider à identifier des améliorations au service\n4. Représenter un service spécifique lors des réunions du CAB",
        options: [
            "2, 3 et 4 seulement",
            "Toutes",
            "1, 2 et 3 seulement",
            "1, 3 et 4 seulement"
        ],
        correctAnswer: 3,
        explanation: "Un propriétaire de service représente le service dans l'organisation (1), aide à identifier des améliorations (3) et représente le service au CAB (4). La mise à jour de la CMDB est une responsabilité de la Gestion des Configurations, pas du propriétaire de service."
    },
    {
        id: 'b35',
        question: "Lequel des énoncés suivants n'est PAS un but de la Gestion de la Disponibilité?",
        options: [
            "Surveiller et établir des rapports sur la disponibilité de composants",
            "Assurer que la disponibilité des services correspond à ou dépasse les besoins convenus avec le business",
            "Évaluer l'impact des changements sur le plan de disponibilité",
            "Assurer que les plans de continuité business sont alignés sur les objectifs du business"
        ],
        correctAnswer: 3,
        explanation: "L'alignement des plans de continuité business sur les objectifs du business relève de la Gestion de la Continuité des Services IT (ITSCM), pas de la Gestion de la Disponibilité."
    },
    {
        id: 'b36',
        question: "Lequel des énoncés suivants est la description CORRECTE des quatre P de la Conception des Services?",
        options: [
            "Un processus de quatre étapes pour la conception d'une gestion des services efficace",
            "Une définition des personnes et produits nécessaires à la réussite de la conception",
            "Un ensemble de questions qui devraient être posées lors de la revue des spécifications de conception",
            "Les quatre principaux domaines qui nécessitent d'être considérés dans la conception d'une gestion de services efficace"
        ],
        correctAnswer: 3,
        explanation: "Les quatre P (Personnes, Partenaires, Produits, Processus) représentent les quatre principaux domaines à considérer pour une conception de services efficace."
    },
    {
        id: 'b37',
        question: "La Gestion de la Demande et la Gestion Financière sont des processus effectués principalement dans laquelle des phases du cycle de vie des services?",
        options: [
            "L'Exploitation des Services",
            "La Stratégie des Services",
            "La Transition des Services",
            "L'Amélioration Continue des Services"
        ],
        correctAnswer: 1,
        explanation: "La Gestion de la Demande et la Gestion Financière sont principalement des processus de la Stratégie des Services, car elles traitent de la planification stratégique et de l'alignement business-IT."
    },
    {
        id: 'b38',
        question: "Lequel des énoncés suivants à propos de la Gestion des Fournisseurs est INCORRECT?",
        options: [
            "La Gestion des Fournisseurs négocie les accords sur les niveaux opérationnels (OLA) avec les groupes internes pour supporter la fourniture des services",
            "La Gestion des Fournisseurs s'assure que les fournisseurs atteignent les attentes du business",
            "La Gestion des Fournisseurs maintient des informations dans une base de données de fournisseurs et de contrats (SCD)",
            "La Gestion des Fournisseurs négocie les accords externes pour soutenir la fourniture des services"
        ],
        correctAnswer: 0,
        explanation: "La Gestion des Fournisseurs traite avec des fournisseurs EXTERNES via des contrats (UC). Les OLA sont des accords internes gérés par la Gestion des Niveaux de Services, pas par la Gestion des Fournisseurs."
    },
    {
        id: 'b39',
        question: "Lequel des énoncés ci-dessous n'est PAS une des phases du cycle de vie du service?",
        options: [
            "L'Optimisation des Services",
            "La Transition des Services",
            "La Conception des Services",
            "La Stratégie des Services"
        ],
        correctAnswer: 0,
        explanation: "Les cinq phases du cycle de vie ITIL sont : Stratégie, Conception, Transition, Exploitation et Amélioration Continue des Services. L'Optimisation des Services n'est pas une phase officielle."
    },
    {
        id: 'b40',
        question: "Laquelle des situations suivantes serait le PLUS PROBABLEMENT gérée comme une demande de services en utilisant le processus de l'Exécution des Requêtes?",
        options: [
            "Un utilisateur appelle le Centre de Services afin de commander une cartouche d'encre",
            "Après une revue de service, un changement de fonctionnalité d'une application est demandée",
            "Un gestionnaire demande qu'un changement soit apporté à un profil global de sécurité existant",
            "Des utilisateurs demandent de tester un élément du plan de continuité business"
        ],
        correctAnswer: 0,
        explanation: "Commander une cartouche d'encre est une demande de service standard, de faible risque et courante — exactement le type de requête gérée par l'Exécution des Requêtes."
    }
];

export default questions;