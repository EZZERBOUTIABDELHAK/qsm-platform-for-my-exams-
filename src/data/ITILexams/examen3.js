const questions = [
    {
        id: 'd1',
        question: "Laquelle des propositions suivantes définit CORRECTEMENT les possibilités de modèles de fournitures d'Internalisation et d'Externalisation ?",
        options: [
            "L'Internalisation repose sur des ressources internes; l'Externalisation repose sur des ressources d'organisation(s) externes",
            "L'Internalisation repose sur des ressources d'organisation(s) externes; l'Externalisation repose sur des ressources internes",
            "L'Internalisation repose sur du co-sourcing, l'Externalisation repose sur des partenariats",
            "L'Internalisation repose sur l'externalisation du processus de connaissance; l'Externalisation repose sur l'acquisition de service d'application"
        ],
        correctAnswer: 0,
        explanation: "L'Internalisation (insourcing) utilise des ressources internes à l'organisation, tandis que l'Externalisation (outsourcing) fait appel à des ressources d'organisations externes."
    },
    {
        id: 'd2',
        question: "Apprendre et s'améliorer est la préoccupation PRINCIPALE de quelles phases du Cycle de vie des services ?",
        options: [
            "Stratégie de services, Conception de services, Transition de services, Exploitation de services et Amélioration continue de services",
            "Stratégie de services, Transition de services et Exploitation des services",
            "Exploitation des services et Amélioration continue de services",
            "Amélioration continue de services"
        ],
        correctAnswer: 3,
        explanation: "L'apprentissage et l'amélioration sont la préoccupation principale de l'Amélioration Continue des Services (CSI), bien que l'amélioration puisse s'appliquer à toutes les phases."
    },
    {
        id: 'd3',
        question: "Quelle est la première activité du modèle de l'Amélioration Continue des Services (CSI) ?",
        options: [
            "Evaluer la situation actuelle du business",
            "Procéder à une première évaluation pour comprendre la situation actuelle",
            "S'accorder sur les priorités pour l'amélioration",
            "Créer et vérifier un plan"
        ],
        correctAnswer: 0,
        explanation: "La première activité du modèle CSI est de comprendre la vision et les objectifs du business (évaluer la vision stratégique), ce qui sert de point de départ à toute initiative d'amélioration."
    },
    {
        id: 'd4',
        question: "Un Catalogue des services devrait contenir lequel des suivants ?",
        options: [
            "Les informations sur les versions de tous les logiciels",
            "La structure organisationnelle de l'entreprise",
            "Les informations sur les actifs",
            "Les détails de tous les services opérationnels"
        ],
        correctAnswer: 3,
        explanation: "Le Catalogue des Services contient les détails de tous les services en production (opérationnels), y compris leurs caractéristiques et les informations utiles aux clients."
    },
    {
        id: 'd5',
        question: "Quel est le but du Processus d'Exécution des requêtes ?",
        options: [
            "Se charger des Demandes de service en provenance des utilisateurs",
            "S'assurer que toutes les demandes au sein d'une organisation TI soient remplies",
            "S'assurer que les Demandes de changement soient accomplies",
            "S'assurer que l'Accord sur les Niveaux de Service (SLA) soit tenu"
        ],
        correctAnswer: 0,
        explanation: "Le processus d'Exécution des Requêtes a pour but de traiter les demandes de services standards des utilisateurs, comme les demandes d'information, d'accès ou de petits changements pré-approuvés."
    },
    {
        id: 'd6',
        question: "Lesquels des énoncés suivants concernant le Centre de Services sont CORRECT ?\n1. Un Centre de Services local soutient l'organisation entière à partir d'un endroit spécifique\n2. Un Centre de Services centralisé soutient un seul endroit ou service",
        options: [
            "2 seulement",
            "1 seulement",
            "Les deux",
            "Aucun"
        ],
        correctAnswer: 3,
        explanation: "Aucun des deux énoncés n'est correct. Un Centre de Services Local sert les utilisateurs d'un même site (pas toute l'organisation), et un Centre de Services Centralisé sert l'ensemble de l'organisation depuis un seul endroit."
    },
    {
        id: 'd7',
        question: "Laquelle des suivantes est la séquence d'activités CORRECTE pour traiter un Incident ?",
        options: [
            "Identification, Enregistrement, Catégorisation, Priorisation, Diagnostic Initial, Escalade fonctionnelle, Diagnostic d'Investigation, Reprise après Résolution, Clôture",
            "Identification, Priorisation, Enregistrement, Catégorisation, Diagnostic Initial, Escalade fonctionnelle, Diagnostic d'Investigation, Reprise après Résolution, Clôture",
            "Identification, Enregistrement, Diagnostic Initial, Catégorisation, Priorisation, Escalade fonctionnelle, Diagnostic d'Investigation, Reprise après Résolution, Clôture",
            "Identification, Diagnostic d'Investigation, Enregistrement, Catégorisation, Escalade fonctionnelle, Priorisation, Diagnostic Initial, Reprise après Résolution, Clôture"
        ],
        correctAnswer: 0,
        explanation: "La séquence correcte ITIL est : Identification → Enregistrement → Catégorisation → Priorisation → Diagnostic Initial → Escalade fonctionnelle → Investigation et Diagnostic → Résolution et Reprise → Clôture."
    },
    {
        id: 'd8',
        question: "Laquelle des propositions suivantes n'est PAS un exemple de Demande de Services ?",
        options: [
            "Un utilisateur appelle le Centre de Services pour commander une cartouche d'encre",
            "Un utilisateur appelle le Centre de Services car il aimerait changer la fonctionnalité d'une application",
            "Un Gestionnaire soumet une demande pour que soit donné accès à une application pour un nouvel employé",
            "Un utilisateur se connecte sur un site web interne pour télécharger une copie de logiciel avec licence depuis une liste d'options approuvées"
        ],
        correctAnswer: 1,
        explanation: "Demander un changement de fonctionnalité d'une application est une Demande de Changement (RFC), pas une Demande de Service. Les demandes de services sont des requêtes standards et pré-approuvées comme les commandes de matériel ou les accès."
    },
    {
        id: 'd9',
        question: "Lesquels des rôles suivants sont responsables d'identifier les opportunités d'amélioration ?\n1. Le Propriétaire de Services\n2. Le Gestionnaire de l'Amélioration Continue des Services (CSI)\n3. Le Propriétaire de processus",
        options: [
            "1 et 2 seulement",
            "1 et 3 seulement",
            "Tous",
            "2 et 3 seulement"
        ],
        correctAnswer: 2,
        explanation: "Les trois rôles sont responsables d'identifier des opportunités d'amélioration : le Propriétaire de Services (pour son service), le Gestionnaire CSI (globalement) et le Propriétaire de Processus (pour son processus)."
    },
    {
        id: 'd10',
        question: "Lequel des suivants n'est PAS défini comme un des types principaux de métriques par l'Amélioration Continue des Services (CSI) ?",
        options: [
            "Les métriques de processus",
            "Les métriques de service",
            "Les métriques de personnel",
            "Les métriques de technologie"
        ],
        correctAnswer: 2,
        explanation: "Le CSI définit trois types de métriques : technologie (1), processus (2) et services (3). Les métriques de personnel ne font pas partie de cette classification officielle ITIL."
    },
    {
        id: 'd11',
        question: "On s'attendrait à ce qu'un Propriétaire de service entreprenne quelles activités parmi les suivantes ?\n1. Représenter un service spécifique à travers l'organisation\n2. Mettre à jour la Base de Données de Gestion des Configurations (CMDB) suite à un changement\n3. Aider à identifier les améliorations aux services\n4. Représenter un service spécifique lors des réunions du Comité consultatif sur les changements (CAB)",
        options: [
            "1, 2 et 4 seulement",
            "Toutes",
            "1 et 4 seulement",
            "1, 3 et 4 seulement"
        ],
        correctAnswer: 3,
        explanation: "Un Propriétaire de Service représente le service dans l'organisation (1), aide à identifier des améliorations (3) et représente le service au CAB (4). La mise à jour de la CMDB est de la responsabilité de la Gestion des Configurations, pas du Propriétaire de Service."
    },
    {
        id: 'd12',
        question: "Le Processus d'Amélioration en 7 Étapes peut être décrit le mieux comme :",
        options: [
            "Les sept P de l'Amélioration Continue des Services (CSI)",
            "Une méthodologie d'amélioration de services basée sur le Cycle de Deming",
            "Un jeu de rôles et responsabilités pour la gestion d'améliorations aux services",
            "Un processus destiné à définir ce qui est à mesurer, rassembler les données, traiter les données et les exploiter afin d'effectuer des actions correctives"
        ],
        correctAnswer: 3,
        explanation: "Le Processus d'Amélioration en 7 Étapes est un processus structuré qui définit quoi mesurer, rassemble et traite les données, puis les exploite pour identifier et mettre en œuvre des actions correctives."
    },
    {
        id: 'd13',
        question: "Lequel des suivants est un bénéfice d'utiliser un Modèle d'Incident ?",
        options: [
            "Les Problèmes seront plus faciles à identifier et diagnoser",
            "Il empêchera la récurrence de types connus d'Incidents",
            "Il fournit des étapes prédéfinies pour traiter des types particuliers d'Incidents",
            "Il s'assure que tous les Incidents sont faciles à résoudre"
        ],
        correctAnswer: 2,
        explanation: "Un Modèle d'Incident fournit des étapes prédéfinies et convenues pour traiter efficacement certains types d'incidents connus, réduisant ainsi le temps de résolution."
    },
    {
        id: 'd14',
        question: "Qu'est-ce que concerne la Gestion des Installations ?",
        options: [
            "La gestion des services informatiques vus comme des 'commodités', comme par exemple les imprimantes ou l'accès au réseau",
            "Les conseils et la guidance aux Opérations informatiques sur la méthodologie et les outils pour la gestion des services informatiques",
            "La gestion de l'environnement informatique physique, comme par exemple un centre de données",
            "L'acquisition et le maintien des outils qui sont utilisés par le personnel des Opérations informatiques afin de maintenir l'infrastructure"
        ],
        correctAnswer: 2,
        explanation: "La Gestion des Installations (Facilities Management) concerne la gestion de l'environnement physique IT, tel que les centres de données, les salles de serveurs et l'alimentation électrique."
    },
    {
        id: 'd15',
        question: "Lesquels des énoncés suivants sont CORRECTS ?\n1. Un processus répond à des événements spécifiques\n2. Un processus est axé vers la performance et peut être mesuré",
        options: [
            "1 seulement",
            "Les deux",
            "Aucun",
            "2 seulement"
        ],
        correctAnswer: 1,
        explanation: "Les deux énoncés sont corrects : un processus est déclenché par des événements spécifiques (1) et il est orienté vers la performance et peut être mesuré (2), ce sont deux caractéristiques fondamentales des processus ITIL."
    },
    {
        id: 'd16',
        question: "La Politique de sécurité informatique devrait être disponible à quels groupes d'individus ?",
        options: [
            "Les Gestionnaires Business Senior et tout le personnel informatique",
            "Les Gestionnaires Business Senior, les Cadres Informatiques et le Gestionnaire de Sécurité",
            "Tous les clients, utilisateurs et le personnel informatique",
            "Le personnel de Gestion de la Sécurité de l'Information (ISM) seulement"
        ],
        correctAnswer: 2,
        explanation: "La politique de sécurité de l'information doit être accessible à tous les clients, utilisateurs et membres du personnel informatique pour garantir une compréhension et une conformité généralisées."
    },
    {
        id: 'd17',
        question: "Autour de quoi le noyau de ITIL est-il structuré ?",
        options: [
            "Un cycle de vie des opérations",
            "Un cycle de vie de la gestion des TI",
            "Un cycle de vie des Services",
            "Un cycle de vie de l'Infrastructure"
        ],
        correctAnswer: 2,
        explanation: "Le noyau d'ITIL v3 est structuré autour du Cycle de Vie des Services, qui comprend cinq phases : Stratégie, Conception, Transition, Exploitation et Amélioration Continue des Services."
    },
    {
        id: 'd18',
        question: "Quelle étape du Cycle de vie des Services fournit un système d'évaluer l'aptitude de service et le profil de risque avant qu'un service ne soit déployé ?",
        options: [
            "La Stratégie de Services",
            "La Conception de Services",
            "La Transition de Services",
            "L'Exploitation de Services"
        ],
        correctAnswer: 2,
        explanation: "La Transition des Services fournit le cadre pour évaluer l'aptitude de service et le profil de risque avant et pendant le déploiement, notamment via la Validation et les Tests des Services."
    },
    {
        id: 'd19',
        question: "Lesquels des énoncés suivants concernant les fonctions sont CORRECTS ?\n1. Elles fournissent de la structure et de la stabilité aux organisations\n2. Elles sont contenues à l'intérieur de leurs propres aptitudes et ressources\n3. Elles s'appuient sur des processus pour la coordination et le contrôle inter fonctionnel\n4. Elles sont plus coûteuses à implémenter en comparaison aux processus",
        options: [
            "1, 2 et 3 seulement",
            "1, 2 et 4 seulement",
            "Toutes ces réponses",
            "Aucune de ces réponses"
        ],
        correctAnswer: 0,
        explanation: "Les fonctions fournissent structure et stabilité (1), disposent de leurs propres ressources et aptitudes (2), et s'appuient sur des processus pour la coordination inter-fonctionnelle (3). L'affirmation sur les coûts (4) n'est pas une caractéristique définie d'ITIL."
    },
    {
        id: 'd20',
        question: "Lesquels des suivants sont des objectifs de l'Amélioration Continue des Services (CSI) ?\n1. Améliorer l'efficacité et l'efficience des processus\n2. Améliorer les services\n3. Améliorer toutes les étapes du Cycle de vie des services, sauf la Stratégie de Services\n4. Améliorer les normes comme par exemple la ISO/IEC 20000",
        options: [
            "1 et 2 seulement",
            "2 seulement",
            "1, 2 et 3 seulement",
            "Toutes ces réponses"
        ],
        correctAnswer: 0,
        explanation: "Le CSI vise à améliorer l'efficacité et l'efficience des processus (1) et à améliorer les services (2). Il s'applique à TOUTES les phases du cycle de vie (pas seulement certaines), et son objectif n'est pas d'améliorer les normes ISO."
    },
    {
        id: 'd21',
        question: "Lequel des suivants décrit les Quatre P de la Conception de Services ?",
        options: [
            "Un processus pour la conception de services efficaces",
            "Les aspects Planifier, Perspective, Position et Personnes faisant partie de la Conception de Services",
            "Les questions qu'on devrait poser lors de la révision de spécifications de conception",
            "Les éléments Personnes, Partenaires, Produits et Processus à prendre en considération lors de la conception de services"
        ],
        correctAnswer: 3,
        explanation: "Les quatre P de la Conception des Services sont : Personnes, Partenaires, Produits et Processus — les quatre domaines clés à considérer pour une conception de services efficace."
    },
    {
        id: 'd22',
        question: "Lequel des énoncés suivants concernant le personnel du Centre de Services est CORRECT ?",
        options: [
            "Le Centre de Services devrait essayer d'avoir un taux élevé de renouvellement du personnel à cause des exigences basses en matière de formation",
            "Le personnel du Centre de Services devrait être découragé de postuler d'autres emplois puisqu'il est plus économique de les retenir dans les rôles pour lesquels ils ont été formés",
            "Le Centre de Services peut souvent servir de tremplin pour les membres du personnel qui prennent des rôles plus techniques ou de supervision",
            "Les aptitudes techniques sont plus importantes au Centre de Services que les aptitudes business ou interpersonnelles"
        ],
        correctAnswer: 2,
        explanation: "Le Centre de Services peut servir de tremplin pour les membres du personnel vers des rôles plus techniques ou de supervision. ITIL encourage le développement de carrière du personnel du Centre de Services."
    },
    {
        id: 'd23',
        question: "Les effets positifs sur les résultats du business d'un client proviennent :",
        options: [
            "Des Aptitudes qui fournissent l'effet positif du service et des Ressources qui fournissent l'assurance de cet effet",
            "De la Garantie de Service qui fournit l'effet positif du service et de l'Utilité du Service qui fournit la garantie de cet effet",
            "Des Ressources qui fournissent l'effet positif du service et des Capacités qui fournissent la garantie de cet effet",
            "De l'Utilité de Service qui fournit l'effet positif du service et de la Garantie de Service qui fournit l'assurance de cet effet"
        ],
        correctAnswer: 3,
        explanation: "L'Utilité de Service (fitness for purpose) fournit l'effet positif recherché, et la Garantie de Service (fitness for use) assure que le service sera disponible de manière fiable. Les deux ensemble créent de la valeur."
    },
    {
        id: 'd24',
        question: "Lesquels des suivants sont des objectifs du processus de Gestion des Mises en Production et de Déploiement ?\n1. S'assurer que les plans de Mises en Production et de Déploiement sont bien définis\n2. S'assurer que les aptitudes et connaissances sont transmissibles aux personnel des Opérations et de soutien\n3. S'assurer que les conséquences imprévues pour les services, opérations et soutien de production sont réduites au minimum\n4. Fournir de la capacité informatique à coûts justifiables qui est alignée sur les besoins du business",
        options: [
            "1, 2 et 3 seulement",
            "Toutes ces réponses",
            "1 et 3 seulement",
            "1, 3 et 4 seulement"
        ],
        correctAnswer: 0,
        explanation: "Les objectifs de la Gestion des Mises en Production et de Déploiement incluent des plans clairs (1), le transfert des connaissances (2) et la minimisation des impacts imprévus (3). La fourniture de capacité IT est un objectif de la Gestion de la Capacité, pas de ce processus."
    },
    {
        id: 'd25',
        question: "Lesquels des suivants seraient stockés dans la Bibliothèque des supports définitifs (DML) ?\n1. Des copies de logiciels achetés\n2. Des copies de logiciels développés en interne\n3. Les documents de licence pertinents\n4. Le Calendrier des changements",
        options: [
            "Tous",
            "1 et 2 seulement",
            "2, 3 et 4 seulement",
            "1, 2 et 3 seulement"
        ],
        correctAnswer: 3,
        explanation: "La DML contient les copies maîtresses des logiciels achetés (1), développés en interne (2) et les documents de licence (3). Le Calendrier des Changements est géré par la Gestion des Changements, pas dans la DML."
    },
    {
        id: 'd26',
        question: "Lequel des suivants est sous la responsabilité du Propriétaire de Processus ?",
        options: [
            "L'achat des outils pour soutenir le processus",
            "S'assurer que les objectifs spécifiés dans un Accord de Niveau de Service (SLA) sont respectés",
            "Effectuer des activités définies dans le processus",
            "S'assurer que le processus soit exécuté tel que documenté"
        ],
        correctAnswer: 3,
        explanation: "Le Propriétaire de Processus est responsable de s'assurer que le processus est correctement documenté et exécuté conformément à sa conception, et qu'il atteint ses objectifs."
    },
    {
        id: 'd27',
        question: "Le libellé d'un Accord de Niveau de Service (SLA) devrait être :",
        options: [
            "De nature technique afin d'assurer qu'il reflète de manière complète les détails du service à fournir",
            "De nature légale afin d'assurer que tous les énoncés soient bien définis et non ambigus",
            "Clair et concis afin d'éviter toute ambiguïté pour que tout le monde puisse le comprendre",
            "De nature technique et légale afin de subvenir aux besoins du business et du fournisseur de services"
        ],
        correctAnswer: 2,
        explanation: "Un SLA doit être rédigé en langage clair et concis, compréhensible par toutes les parties (clients et fournisseurs), en évitant le jargon technique ou juridique excessif."
    },
    {
        id: 'd28',
        question: "Laquelle des suivantes est une activité MAJEURE de la Gestion de la Demande ?",
        options: [
            "L'augmentation de la valeur pour les clients",
            "La compréhension des schémas d'activité business",
            "L'augmentation de la valeur des TI",
            "L'alignement du business sur les coûts des TI"
        ],
        correctAnswer: 1,
        explanation: "La compréhension des schémas (profils) d'activité business (PBA) est l'activité majeure de la Gestion de la Demande, permettant de prévoir et d'influencer la demande de services IT."
    },
    {
        id: 'd29',
        question: "Quel est le but de la Gestion des Actifs de Services et des Configurations (SACM) ?",
        options: [
            "Rendre compte de tous les actifs financiers de l'organisation",
            "Fournir un modèle logique de l'Infrastructure informatique, en faisant une corrélation entre les services informatiques et les différents composants TI nécessaires afin de livrer les services",
            "Etablir des modèles de service afin de justifier les implémentations d'ITIL",
            "Implémenter ITIL à travers l'organisation"
        ],
        correctAnswer: 1,
        explanation: "La SACM vise à fournir un modèle logique de l'infrastructure IT, en corrélant les services IT avec les composants nécessaires à leur livraison, pour soutenir une gestion efficace de la configuration."
    },
    {
        id: 'd30',
        question: "Un technicien restaure un service en utilisant une technique prédéfinie, puisque le même Incident est survenu autrefois. Ceci est un exemple de :",
        options: [
            "Une Solution de contournement",
            "Un Changement standard",
            "Une Aptitude de service",
            "Une Alerte"
        ],
        correctAnswer: 0,
        explanation: "Utiliser une technique prédéfinie pour restaurer le service sans résoudre la cause racine est une solution de contournement (workaround) — une action temporaire pour rétablir le service."
    },
    {
        id: 'd31',
        question: "Quelle est la combinaison des rôles suivants dont l'assignation aux processus est assurée par le modèle RACI ?",
        options: [
            "Responsable, Accountable (Imputable), Consulté, Informé",
            "Responsable, Accomplissable, Consulté, Informé",
            "Réaliste, Accountable (Imputable), Consulté, Informé",
            "Responsable, Accountable (Imputable), Corrigé, Informé"
        ],
        correctAnswer: 0,
        explanation: "RACI signifie : Responsible (Responsable), Accountable (Imputable/Répondant), Consulted (Consulté) et Informed (Informé). Ce sont les quatre rôles officiels du modèle RACI."
    },
    {
        id: 'd32',
        question: "Lequel des suivants est la MEILLEURE description d'un Accord sur les niveaux opérationnels (OLA) ?",
        options: [
            "Un accord entre un Fournisseur des services informatiques et une autre partie de la même organisation qui aide à la fourniture de services",
            "Un accord écrit entre le Fournisseur des services informatiques et le(s) Client(s) TI qui définit les objectifs clés et responsabilités des deux parties",
            "Un accord entre deux Fournisseurs des services sur les niveaux de service exigés par le client",
            "Un accord entre un Centre de services d'un tiers et le client TI sur les durées de dépannage et de réponse"
        ],
        correctAnswer: 0,
        explanation: "Un OLA est un accord interne entre le fournisseur de services IT et une autre partie de la même organisation (département interne), destiné à soutenir la livraison des services aux clients."
    },
    {
        id: 'd33',
        question: "Le Package de conception de service (SDP) devrait exposer en détail tous les aspects du service. Lesquels des suivants sont des éléments valides ?\n1. Les Besoins business convenus et documentés\n2. Une définition de service pour les opérations\n3. Les Besoins pour les nouveaux processus ou processus modifiés\n4. Les Métriques pour mesurer le service",
        options: [
            "1 seulement",
            "2 et 3 seulement",
            "1, 2 et 4 seulement",
            "Tous"
        ],
        correctAnswer: 3,
        explanation: "Le SDP est un document complet qui inclut tous ces éléments : les besoins business (1), la définition de service (2), les exigences de processus (3) et les métriques de mesure (4)."
    },
    {
        id: 'd34',
        question: "Quel processus effectue des révisions des Accords sur les niveaux opérationnels (OLA) régulièrement ?",
        options: [
            "La Gestion des Fournisseurs",
            "La Gestion des Niveaux de Service (SLM)",
            "La Gestion du Portefeuille des Services (SPM)",
            "La Gestion de la Demande"
        ],
        correctAnswer: 1,
        explanation: "La Gestion des Niveaux de Services (SLM) est responsable de la revue régulière des OLA pour s'assurer qu'ils soutiennent correctement la livraison des SLA convenus avec les clients."
    },
    {
        id: 'd35',
        question: "Lequel des suivants est le MEILLEUR exemple d'un bénéfice qu'on pourrait obtenir en utilisant des outils d'Exploitation de Services ?",
        options: [
            "Aider à concevoir des services, en s'assurant que les normes et conventions sont respectées",
            "Aider à s'assurer que les Incidents sont enregistrés le plus tôt possible",
            "Aider à permettre que les différents scénarios puissent être modélisés",
            "Aider à implémenter des Architectures d'Entreprise"
        ],
        correctAnswer: 1,
        explanation: "Les outils d'Exploitation des Services aident à s'assurer que les incidents sont enregistrés le plus tôt possible, ce qui est un bénéfice direct et concret pour la gestion opérationnelle."
    },
    {
        id: 'd36',
        question: "Le Gestionnaire des Niveaux de Service n'est PAS responsable de :",
        options: [
            "Négocier et conclure des Accords sur les niveaux opérationnels (OLA)",
            "S'assurer que tous les services non opérationnels sont enregistrés dans le Catalogue des services",
            "Négocier et conclure des Accords sur les niveaux de service (SLA)",
            "Aider à produire et maintenir un Catalogue des services exact"
        ],
        correctAnswer: 1,
        explanation: "Le Catalogue des Services contient uniquement les services opérationnels (en production). S'assurer que les services non opérationnels y figurent n'est pas de la responsabilité du Gestionnaire des Niveaux de Service."
    },
    {
        id: 'd37',
        question: "Lesquelles des activités suivantes font partie de la Gestion des Accès ?\n1. Vérifier l'identité des utilisateurs qui demandent de l'accès aux services\n2. Régler les droits ou privilèges de systèmes afin de permettre l'accès aux utilisateurs autorisés\n3. Définir les politiques de sécurité gouvernant l'accès aux systèmes\n4. Surveiller la disponibilité de systèmes auxquels les utilisateurs devraient avoir accès",
        options: [
            "2 et 4 seulement",
            "1 et 3 seulement",
            "2 et 3 seulement",
            "1 et 2 seulement"
        ],
        correctAnswer: 3,
        explanation: "La Gestion des Accès vérifie l'identité des utilisateurs (1) et attribue les droits appropriés (2). La définition des politiques relève de la Gestion de la Sécurité, et la surveillance de la disponibilité d'autres processus."
    },
    {
        id: 'd38',
        question: "Laquelle des propositions suivantes est l'approche la plus appropriée pour mener à bien l'Exploitation de Services ?",
        options: [
            "La vision interne IT est la plus importante puisque l'Exploitation de Services doit surveiller et gérer l'infrastructure",
            "L'Exploitation de Services devrait maintenir un équilibre entre une vision IT interne et une vision business",
            "La vision externe business est la plus importante puisque l'Exploitation de Services est le centre de création de valeur",
            "Les Opérations informatiques ne prennent pas en compte une vision interne ou externe puisqu'elles exécutent des processus définis par la Conception de Services"
        ],
        correctAnswer: 1,
        explanation: "L'Exploitation des Services doit maintenir un équilibre entre la vision IT interne (gestion de l'infrastructure) et la vision business externe (livraison de valeur aux clients et utilisateurs)."
    },
    {
        id: 'd39',
        question: "Lesquels des suivants sont des exemples d'outils qui pourraient soutenir l'étape de Transition de Services du Cycle de vie ?\n1. Un outil pour sauvegarder des versions définitives de logiciels\n2. Un outil de flux de travail pour gérer les changements\n3. Un outil automatisé de distribution de logiciel\n4. Les outils d'essai et de validation",
        options: [
            "1, 3 et 4 seulement",
            "1, 2 et 3 seulement",
            "Tous",
            "2, 3 et 4 seulement"
        ],
        correctAnswer: 2,
        explanation: "Tous ces outils soutiennent la Transition des Services : stockage des versions définitives (DML), gestion des changements par workflow, distribution automatisée de logiciels et outils de tests/validation."
    },
    {
        id: 'd40',
        question: "Lequel des cinq aspects majeurs de la Conception des Services manque dans la liste ci-dessous ?\n1. La Conception des Services\n2. La Conception des outils et systèmes de gestion des services\n3. La Conception de l'architecture technologique et des systèmes de gestion\n4. La Conception des processus requis\n5. ?",
        options: [
            "La conception des fonctions",
            "La conception des Accords de Niveau de Service (SLA)",
            "La conception des applications",
            "La conception de systèmes de mesure, méthodes et métriques"
        ],
        correctAnswer: 3,
        explanation: "Les cinq aspects de la Conception des Services sont : conception des solutions de service, des outils et systèmes de gestion, de l'architecture technologique, des processus requis, et des systèmes de mesure/méthodes/métriques."
    }
];

export default questions;