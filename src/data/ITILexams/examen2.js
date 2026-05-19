const questions = [
    {
        id: 'c1',
        question: "Lequel des énoncés suivants à propos du Centre de Service est CORRECT ?\n1. Le Centre de Service est une fonction qui permet la communication entre les TI et ses utilisateurs pour toutes les questions opérationnelles\n2. Le Centre de Service est toujours le propriétaire du processus de Gestion des Incidents",
        options: [
            "2 Seulement",
            "1 seulement",
            "Les deux",
            "Aucun"
        ],
        correctAnswer: 1,
        explanation: "Le Centre de Services est bien une fonction de communication entre IT et les utilisateurs (1). Cependant, il n'est pas nécessairement le propriétaire du processus de Gestion des Incidents (2) — ce rôle peut appartenir à un gestionnaire des incidents distinct."
    },
    {
        id: 'c2',
        question: "Lesquelles des suivantes sont des caractéristiques de tout processus ?\n1. Il est mesurable\n2. Il est à propos\n3. Il livre un résultat spécifique\n4. Il livre ses principaux résultats à un client ou à une partie prenante",
        options: [
            "1, 2 et 3 seulement",
            "1, 2 et 4 seulement",
            "1, 3 et 4 seulement",
            "Toutes"
        ],
        correctAnswer: 2,
        explanation: "Les caractéristiques fondamentales d'un processus sont : il est mesurable (1), il livre un résultat spécifique (3), et il livre ses résultats à un client ou partie prenante (4). 'Il est à propos' (2) n'est pas une caractéristique standard d'un processus ITIL."
    },
    {
        id: 'c3',
        question: "Lesquels des éléments suivants ne seront PAS stockés dans la bibliothèque des supports définitifs (DML) ?",
        options: [
            "Les copies de référence des logiciels",
            "Les sauvegardes des données applicatives",
            "Les licences logiciels",
            "Les copies de référence de la documentation contrôlée"
        ],
        correctAnswer: 1,
        explanation: "La DML stocke les copies maîtresses des logiciels, les licences et la documentation contrôlée. Les sauvegardes des données applicatives sont gérées séparément dans le cadre de la Gestion de la Continuité, pas dans la DML."
    },
    {
        id: 'c4',
        question: "Établir des politiques et des objectifs est la PRINCIPALE préoccupation de quels éléments suivants du cycle de vie des services ?",
        options: [
            "La Stratégie de Services",
            "La Stratégie de Services et l'Amélioration Continue de Services",
            "La Stratégie de Services, la Transition de Services et l'Exploitation de Services",
            "La Stratégie de Services, la Conception de Services, la Transition de Services, l'Exploitation de Services et l'Amélioration Continue de Services"
        ],
        correctAnswer: 0,
        explanation: "L'établissement des politiques et des objectifs est la principale préoccupation de la Stratégie des Services, qui définit la direction stratégique de la gestion des services."
    },
    {
        id: 'c5',
        question: "Le but PRINCIPAL de la Gestion de la Disponibilité est ?",
        options: [
            "De surveiller et de produire des rapports sur la disponibilité des services et des composants",
            "De s'assurer que toutes les cibles des Accords sur les niveaux de service sont atteints",
            "De garantir les niveaux de disponibilité des services et des composants",
            "De s'assurer que la disponibilité des services corresponde ou dépasse les besoins entendus avec le business"
        ],
        correctAnswer: 3,
        explanation: "Le but principal de la Gestion de la Disponibilité est de s'assurer que la disponibilité des services correspond ou dépasse les besoins convenus avec le business — pas seulement de surveiller ou de garantir des niveaux fixes."
    },
    {
        id: 'c6',
        question: "Quel est la meilleure définition d'un modèle d'Incident ?",
        options: [
            "Un gabarit utilisé pour définir le formulaire utilisé pour la consignation de l'Incident",
            "Un type d'Incident impliquant un élément de configuration (CI) standard (ou modèle)",
            "Un ensemble d'étapes prédéfinies qui doivent être suivies lors du traitement d'un type d'Incident connu",
            "Un Incident qui est facile à résoudre"
        ],
        correctAnswer: 2,
        explanation: "Un modèle d'incident est un ensemble d'étapes prédéfinies et convenues pour traiter efficacement un type d'incident connu et récurrent."
    },
    {
        id: 'c7',
        question: "La priorité d'un Incident est MIEUX décrit comme ?",
        options: [
            "L'importance relative d'un Incident basée sur l'impact et l'urgence",
            "La vitesse avec laquelle l'Incident nécessite d'être résolu",
            "Le nombre de membres du personnel qui sera assigné à travailler sur l'Incident afin qu'il soit résolu dans les temps voulus",
            "Le chemin d'escalade qui sera suivi pour assurer la résolution de l'Incident"
        ],
        correctAnswer: 0,
        explanation: "La priorité d'un incident est déterminée par la combinaison de son impact (étendue de l'effet sur le business) et de son urgence (vitesse à laquelle une résolution est nécessaire)."
    },
    {
        id: 'c8',
        question: "Quels sont les processus de l'Exploitation de Services manquants dans la liste ci-dessous ?\n1. La Gestion des Incidents\n2. La Gestion des Problèmes\n3. La Gestion des Accès\n4. ?\n5. ?",
        options: [
            "La Gestion des Evènements et l'Exécution des Requêtes",
            "La Gestion des Evènements et le Centre de Services",
            "La Gestion des Installations et la Gestion des Evènements",
            "La Gestion des Changements et la Gestion des Niveaux de Service"
        ],
        correctAnswer: 0,
        explanation: "Les cinq processus de l'Exploitation des Services sont : Gestion des Incidents, Gestion des Problèmes, Gestion des Accès, Gestion des Événements et Exécution des Requêtes."
    },
    {
        id: 'c9',
        question: "Quel est l'ordre CORRECT des quatre premières activités du processus d'Amélioration en 7 étapes ?",
        options: [
            "Définir ce que vous devriez mesurer, définir ce que vous pouvez mesurer, rassembler les données et traiter les données",
            "Rassembler les données, traiter les données, analyser les données et présenter les données",
            "Quelle est la vision, où sommes-nous maintenant, où voulons-nous être, comment y arriverons-nous ?",
            "Rassembler les données, traiter les données, définir ce que vous devriez mesurer et définir ce que vous pouvez mesurer"
        ],
        correctAnswer: 0,
        explanation: "Le processus d'amélioration en 7 étapes commence par : 1) Définir ce que vous devriez mesurer, 2) Définir ce que vous pouvez mesurer, 3) Rassembler les données, 4) Traiter les données."
    },
    {
        id: 'c10',
        question: "Laquelle des suivantes n'est pas une des publications centrales de ITIL ?",
        options: [
            "Optimisation de Services",
            "Transition de Services",
            "Conception de Services",
            "Stratégie de Services"
        ],
        correctAnswer: 0,
        explanation: "Les cinq publications centrales d'ITIL v3 sont : Stratégie des Services, Conception des Services, Transition des Services, Exploitation des Services et Amélioration Continue des Services. 'Optimisation de Services' n'en fait pas partie."
    },
    {
        id: 'c11',
        question: "Laquelle des affirmations suivantes à propos de la Gestion des Fournisseurs est INCORRECTE ?",
        options: [
            "La Gestion des Fournisseurs négocie les Accords sur les niveaux opérationnels (OLA) avec les groupes internes pour supporter la fourniture des services",
            "La Gestion des Fournisseurs s'assure que les fournisseurs atteignent les attentes du business",
            "La Gestion des Fournisseurs maintient des informations dans une base de données de Fournisseurs et de Contrats (SCD)",
            "La Gestion des Fournisseurs négocie les accords externes pour supporter la fourniture des services"
        ],
        correctAnswer: 0,
        explanation: "La Gestion des Fournisseurs traite uniquement avec des fournisseurs EXTERNES via des Contrats de Sous-traitance (UC). Les OLA sont des accords internes négociés par la Gestion des Niveaux de Services, pas par la Gestion des Fournisseurs."
    },
    {
        id: 'c12',
        question: "Quel est le rôle du Comité Consultatif sur les Changements Urgents (ECAB) ?",
        options: [
            "D'assister le Gestionnaire des Changements afin qu'aucun Changement urgent ne soit réalisé pendant les périodes où le business est particulièrement volatile",
            "D'assister le Gestionnaire des Changements en implémentant les Changements urgents",
            "D'assister le Gestionnaire des Changements dans l'évaluation des Changements urgents et de décider si le Changement devrait être approuvé",
            "D'assister le Gestionnaire des Changements pour accélérer le processus des Changements urgents afin qu'aucun retard inacceptable n'ait lieu"
        ],
        correctAnswer: 2,
        explanation: "L'ECAB (Emergency Change Advisory Board) a pour rôle d'évaluer les changements urgents et de décider de leur approbation, en tenant compte des risques et de l'impact sur le business."
    },
    {
        id: 'c13',
        question: "Lequel des énoncés suivants donne la MEILLEURE définition d'une structure de Centre de Services Local ?",
        options: [
            "Un Centre de Services qui fournit aussi du support technique sur site à ses utilisateurs",
            "Un Centre de Services dont les analystes parlent seulement un langage",
            "Un Centre de Services qui est situé au même endroit que les utilisateurs qu'il sert",
            "Un Centre de Services qui pourrait être dans n'importe quel endroit mais qui utilise les systèmes informatiques et de télécommunications afin de donner l'illusion qu'ils sont tous au même endroit"
        ],
        correctAnswer: 2,
        explanation: "Un Centre de Services Local est physiquement situé au même endroit (même site) que les utilisateurs qu'il sert. L'option D décrit un Centre de Services Virtuel."
    },
    {
        id: 'c14',
        question: "Lequel des énoncés suivants est CORRECT ?\n1. L'Amélioration Continue des Services (CSI) fournit des orientations sur comment améliorer l'efficacité et l'efficience des processus\n2. CSI fournit des orientations sur comment améliorer les services\n3. CSI fournit des orientations sur l'amélioration de toutes les phases du cycle de vie des services\n4. CSI fournit des orientations sur les mesures face aux processus et aux services",
        options: [
            "1 et 2 seulement",
            "2 seulement",
            "1, 2 et 3 seulement",
            "Toutes ces réponses"
        ],
        correctAnswer: 3,
        explanation: "Le CSI couvre tous ces domaines : amélioration des processus (1), amélioration des services (2), amélioration de toutes les phases du cycle de vie (3), et la mesure des processus et services (4)."
    },
    {
        id: 'c15',
        question: "Lequel des énoncés ci-dessous est la CORRECTE description des 'opérations normales de service' ?",
        options: [
            "Le temps de réponse du service correspond aux attentes de l'utilisateur",
            "Le service fournit toutes les fonctionnalités et la performance que le business exige",
            "Le service fonctionne dans les limites définies dans l'Accord sur les niveaux de service (SLA)",
            "Tous les utilisateurs peuvent se connecter au service et l'utiliser"
        ],
        correctAnswer: 2,
        explanation: "Les 'opérations normales de service' signifient que le service fonctionne dans les limites convenues et définies dans le SLA — c'est la référence contractuelle qui définit ce qu'est la normalité."
    },
    {
        id: 'c16',
        question: "Le Propriétaire de Service est responsable de laquelle des affirmations suivantes ?",
        options: [
            "L'amélioration continue du service",
            "La conception et la documentation d'un service",
            "L'exécution des activités de l'Exploitation de Services nécessaires au support d'un service",
            "La production d'un Tableau de bord équilibré montrant l'ensemble des statuts de tous les services"
        ],
        correctAnswer: 0,
        explanation: "Le Propriétaire de Service est responsable de l'amélioration continue du service tout au long de son cycle de vie, en veillant à ce qu'il réponde aux besoins du business."
    },
    {
        id: 'c17',
        question: "Que représente le 'cycle en V des services' ?",
        options: [
            "Une stratégie pour l'achèvement réussi de tous les projets de gestion des services",
            "Le chemin vers la Fourniture des Services et le Support des Services pour l'utilisation efficace et efficiente des ressources",
            "Des niveaux de tests nécessaires pour délivrer une Aptitude de Service",
            "La perspective business telle que perçue par les clients et les utilisateurs d'un service"
        ],
        correctAnswer: 2,
        explanation: "Le cycle en V des services représente les différents niveaux de tests requis pour valider et vérifier une Aptitude de Service (Service Capability), en alignant les exigences de conception avec les activités de validation."
    },
    {
        id: 'c18',
        question: "La MEILLEURE définition d'un événement est ?",
        options: [
            "Une occurrence lors de laquelle un seuil de performance a été dépassé et un niveau de service accordé a déjà été impacté",
            "Une occurrence qui est significative pour la gestion de l'infrastructure TI ou la livraison de services",
            "Une défaillance système connue qui génère plusieurs rapports d'incidents",
            "Une rencontre planifiée de clients et de personnel TI pour annoncer un nouveau service ou programme d'amélioration"
        ],
        correctAnswer: 1,
        explanation: "Un événement est toute occurrence significative pour la gestion de l'infrastructure IT ou la livraison de services — qu'il soit normal, d'avertissement ou d'exception."
    },
    {
        id: 'c19',
        question: "Dans quel but est utilisé le modèle RACI ?",
        options: [
            "Documenter les rôles et les relations des parties prenantes d'un processus ou d'une activité",
            "Définir les besoins d'un nouveau service ou processus",
            "Analyser l'impact business d'un Incident",
            "Créer un Tableau de bord équilibré montrant l'ensemble des statuts de la gestion des services"
        ],
        correctAnswer: 0,
        explanation: "Le modèle RACI (Responsable, Répondant, Consulté, Informé) est utilisé pour documenter clairement les rôles et responsabilités des parties prenantes dans un processus ou une activité."
    },
    {
        id: 'c20',
        question: "Lequel des énoncés suivants concernant tous les services TI est CORRECT?",
        options: [
            "Ils livrent des ressources et des aptitudes aux clients",
            "Ils livrent des coûts et des risques aux clients",
            "Ils livrent des solutions business aux clients",
            "Ils livrent de la valeur aux clients"
        ],
        correctAnswer: 3,
        explanation: "L'objectif fondamental de tout service IT est de livrer de la valeur aux clients, en facilitant leurs résultats sans qu'ils aient à supporter eux-mêmes les coûts et risques spécifiques."
    },
    {
        id: 'c21',
        question: "La définition des besoins fonctionnels d'un nouveau service fait partie de :",
        options: [
            "L'Exploitation de Services : La Gestion des Applications",
            "La Stratégie de Services : La Gestion du Portefeuille des Services",
            "La Conception de Services : La Conception de l'architecture des technologies",
            "La Conception de Services : La Conception des solutions de services"
        ],
        correctAnswer: 3,
        explanation: "La définition des besoins fonctionnels d'un nouveau service fait partie de la Conception des Services, plus précisément de la Conception des solutions de services."
    },
    {
        id: 'c22',
        question: "Les quatre étapes du Cycle de Deming sont ?",
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
        id: 'c23',
        question: "Laquelle des définitions suivantes décrit LE MIEUX une solution de contournement?",
        options: [
            "Un technicien utilise une technique prédéfinie afin de restaurer le service car cet Incident s'est déjà produit dans le passé",
            "Un technicien essaie différentes approches afin de résoudre l'Incident. L'une d'entre elles fonctionne, bien qu'il ne comprenne pas pourquoi",
            "Après avoir rapporté l'Incident au Centre de Services, l'utilisateur travaille sur des tâches alternatives pendant que le problème est identifié et résolu",
            "Un équipement fonctionne de façon intermittente, permettant à l'utilisateur de continuer de travailler à un niveau de performance dégradé pendant que le technicien pose un diagnostic sur l'Incident"
        ],
        correctAnswer: 0,
        explanation: "Une solution de contournement consiste à utiliser une technique connue et prédéfinie pour restaurer temporairement le service sans résoudre la cause racine du problème."
    },
    {
        id: 'c24',
        question: "Le Contrôle des opérations fait référence :",
        options: [
            "Aux gestionnaires des fonctions Gestion Technique et Gestion des Applications",
            "A s'assurer de l'exécution et de la surveillance des activités opérationnelles et des évènements",
            "Aux outils utilisés pour surveiller et afficher le statut de l'infrastructure TI et des Applications",
            "A la situation dans laquelle le Centre de Services est tenu de surveiller le statut de l'infrastructure quand les Exploitants ne sont pas disponibles"
        ],
        correctAnswer: 1,
        explanation: "Le Contrôle des Opérations désigne la fonction qui s'assure que les activités opérationnelles et les événements sont correctement exécutés et surveillés au quotidien."
    },
    {
        id: 'c25',
        question: "Laquelle des propositions suivantes est la description CORRECTE des quatre P de la Conception de Services ?",
        options: [
            "Un processus de quatre étapes pour la conception d'une gestion des services efficace",
            "Une définition des personnes et produits nécessaires à la réussite de la conception",
            "Un ensemble de questions qui devraient être posées lors de la revue des spécifications de conception",
            "Les quatre principaux domaines qui nécessitent d'être considérés dans la conception d'une gestion de services efficace"
        ],
        correctAnswer: 3,
        explanation: "Les quatre P (Personnes, Partenaires, Produits, Processus) représentent les quatre principaux domaines à prendre en compte pour une Conception des Services efficace."
    },
    {
        id: 'c26',
        question: "Quelle est la raison principale pour établir une base de référence ?",
        options: [
            "Pour standardiser l'exploitation",
            "Pour connaître les coûts des services fournis",
            "Pour clarifier les rôles et responsabilités",
            "Pour des comparaisons futures"
        ],
        correctAnswer: 3,
        explanation: "Une base de référence (baseline) est établie principalement pour permettre des comparaisons futures, afin de mesurer les progrès et les améliorations réalisées au fil du temps."
    },
    {
        id: 'c27',
        question: "Laquelle des affirmations suivantes est CORRECTE ?\n1. Seulement une personne peut être responsable d'une activité\n2. Seulement une personne peut être imputable (accountable) d'une activité",
        options: [
            "Les deux",
            "1 seulement",
            "2 seulement",
            "Aucune"
        ],
        correctAnswer: 2,
        explanation: "Dans le modèle RACI, plusieurs personnes peuvent être 'Responsables' (R) d'une activité, mais une seule peut être 'Imputable/Accountable' (A). Seul l'énoncé 2 est donc correct."
    },
    {
        id: 'c28',
        question: "L'objectif de la Gestion des Actifs de Services et des Configurations (SACM) est le plus précisément décrit comme :",
        options: [
            "Comprendre les caractéristiques de performance des actifs et des éléments de configurations (CI) afin de maximiser leur contribution aux niveaux de service",
            "Gérer les Actifs de Services et les CI avec une perspective opérationnelle",
            "S'assurer que les actifs et CI produisent les résultats business pour lesquels ils ont été conçus",
            "Définir et contrôler les composants des services et d'infrastructure, ainsi que maintenir les enregistrements de configuration à jour"
        ],
        correctAnswer: 3,
        explanation: "L'objectif principal de la SACM est de définir et contrôler les composants des services et de l'infrastructure, et de maintenir des enregistrements de configuration précis et à jour."
    },
    {
        id: 'c29',
        question: "Un incident survient quand :\n1. Un utilisateur est incapable d'accéder à un service pendant les heures de service\n2. Un membre du personnel TI autorisé est incapable d'accéder à un service pendant les heures de service\n3. Une partie du réseau faillit et l'utilisateur n'est pas conscient d'une perturbation de service\n4. Un utilisateur contacte le Centre de Services au sujet de faibles performances d'une application\nLesquelles des affirmations ci-dessus sont CORRECTES?",
        options: [
            "Toutes",
            "1 et 4 seulement",
            "2 et 3 seulement",
            "Aucune"
        ],
        correctAnswer: 0,
        explanation: "Toutes ces situations constituent des incidents : une interruption ou dégradation non planifiée d'un service IT, qu'elle soit signalée par un utilisateur ou détectée automatiquement, doit être traitée comme un incident."
    },
    {
        id: 'c30',
        question: "Lequel des énoncés ci-dessous décrit LE MIEUX le but de la Gestion des Evénements ?",
        options: [
            "L'abilité de détecter des événements, les interpréter et déterminer les actions de contrôle appropriées",
            "L'abilité d'implémenter les outils de surveillance",
            "L'abilité de surveiller et de contrôler les activités du personnel technique",
            "L'abilité de produire un rapport sur la fourniture avec succès des services en vérifiant le temps de fonctionnement des équipements d'infrastructure"
        ],
        correctAnswer: 0,
        explanation: "La Gestion des Événements consiste à détecter les événements, les interpréter et déterminer les actions de contrôle appropriées — c'est son objectif fondamental."
    },
    {
        id: 'c31',
        question: "Qu'est-ce que 'garantie de service' veut dire?",
        options: [
            "Le service est adapté au besoin",
            "Il n'y aura pas de défaillances au niveau des applications et de l'infrastructure associées au service",
            "Tous les problèmes reliés au service sont corrigés gratuitement pour une certaine période de temps",
            "Les clients sont assurés de certains niveaux de disponibilité, de capacité, de continuité et de sécurité"
        ],
        correctAnswer: 3,
        explanation: "La garantie de service (warranty) assure aux clients des niveaux convenus de disponibilité, de capacité, de continuité et de sécurité. C'est le 'comment' le service est fourni, par opposition à l'utilité qui est le 'quoi'."
    },
    {
        id: 'c32',
        question: "Lequel des énoncés suivants est CORRECT?\n1. La Transition de Services fournit des orientations afin de mettre en production des services nouveaux et modifiés\n2. La Transition de Services fournit des orientations face aux tests\n3. La Transition de Services fournit des orientations face au transfert de services vers ou en provenance d'un fournisseur de services externe",
        options: [
            "1 et 2 seulement",
            "1 seulement",
            "Tous",
            "1 et 3 seulement"
        ],
        correctAnswer: 2,
        explanation: "La Transition des Services couvre les trois aspects : la mise en production de services nouveaux ou modifiés (1), les tests et la validation (2), ainsi que le transfert de services vers ou depuis des fournisseurs externes (3)."
    },
    {
        id: 'c33',
        question: "Lequel des énoncés suivants est un bénéfice d'utiliser des outils de Conception des Services?",
        options: [
            "Aider à garantir que les normes et conventions sont respectées",
            "Aider à garantir que les événements sont détectés aussi rapidement que possible",
            "Aider à permettre aux applications différentes de fonctionner ensemble",
            "Aider à implémenter des architectures qui supportent la stratégie du business"
        ],
        correctAnswer: 0,
        explanation: "Les outils de Conception des Services aident à garantir que les normes et conventions de conception sont respectées de manière cohérente tout au long du processus de conception."
    },
    {
        id: 'c34',
        question: "Lequel des types ci-dessous n'est PAS un type de Changement ?",
        options: [
            "Changement standard",
            "Changement normal",
            "Changement critique",
            "Changement urgent"
        ],
        correctAnswer: 2,
        explanation: "ITIL v3 définit trois types de changements : Standard, Normal et Urgent. Le 'Changement critique' n'est pas un type de changement officiel dans le cadre ITIL."
    },
    {
        id: 'c35',
        question: "Lequel des objectifs suivants n'est PAS un objectif de l'Exploitation de Services?",
        options: [
            "Tester de façon minutieuse afin de s'assurer que les services sont conçus afin de rencontrer les besoins business",
            "De fournir et gérer les services TI",
            "De gérer la technologie utilisée afin de fournir les services",
            "De surveiller la performance de la technologie et des processus"
        ],
        correctAnswer: 0,
        explanation: "Les tests pour s'assurer que les services sont bien conçus relèvent de la Transition des Services, pas de l'Exploitation des Services. L'Exploitation se concentre sur la fourniture et la gestion des services en production."
    },
    {
        id: 'c36',
        question: "La Gestion des Incidents produit de la valeur au business en :",
        options: [
            "Aidant à contrôler les coûts d'infrastructure associés à l'ajout de nouvelle technologie",
            "Permettant aux utilisateurs de résoudre des Problèmes",
            "Aidant l'alignement des personnes et processus pour la fourniture du service",
            "Contribuant à la réduction de l'impact des interruptions de service"
        ],
        correctAnswer: 3,
        explanation: "La Gestion des Incidents crée de la valeur pour le business en réduisant l'impact des interruptions de service, permettant ainsi aux utilisateurs de reprendre leurs activités le plus rapidement possible."
    },
    {
        id: 'c37',
        question: "Lesquels des domaines ci-dessous est-ce que la technologie permettrait de soutenir pendant l'étape de cycle de vie de Conception de Services?\n1. La conception du matériel\n2. La conception de l'environnement\n3. La conception du processus\n4. La conception du logiciel",
        options: [
            "1, 3 et 4 seulement",
            "1, 2 et 3 seulement",
            "Tous",
            "2, 3 et 4 seulement"
        ],
        correctAnswer: 2,
        explanation: "La technologie peut soutenir tous ces domaines lors de la Conception des Services : conception du matériel (1), de l'environnement (2), des processus (3) et des logiciels (4)."
    },
    {
        id: 'c38',
        question: "Pour laquelle des activités ci-dessous la Gestion des Niveaux de Service (SLM) est-elle responsable?",
        options: [
            "Concevoir le système de Gestion des Configurations avec une perspective business",
            "Créer des métriques technologiques afin de les aligner sur les besoins client",
            "Discuter des services rendus avec les clients",
            "Former le personnel du Centre de Services sur comment gérer les plaintes client sur le service"
        ],
        correctAnswer: 2,
        explanation: "La Gestion des Niveaux de Services est responsable de la discussion et de la revue régulière des services rendus avec les clients, notamment à travers des réunions de revue de service."
    },
    {
        id: 'c39',
        question: "Les options suivantes sont considérées dans quel processus ?\n1. Big Bang ou par phase\n2. Poussé et tiré\n3. Automatisé ou Manuel",
        options: [
            "La Gestion des Incidents",
            "La Gestion des Déploiements et des Mises en Production",
            "La Gestion des Actifs de Services et des Configurations",
            "La Gestion du Catalogue de Services"
        ],
        correctAnswer: 1,
        explanation: "Ces options (big bang vs par phase, push vs pull, automatisé vs manuel) sont des approches de déploiement considérées dans la Gestion des Déploiements et des Mises en Production."
    },
    {
        id: 'c40',
        question: "Lesquels des éléments ci-dessous sont les trois types principaux de métriques tels que définis dans l'Amélioration Continue des Services (CSI) ?\n1. Métriques de processus\n2. Métriques de fournisseurs\n3. Métriques de services\n4. Métriques de technologie\n5. Métriques de business",
        options: [
            "1, 2 et 3",
            "2, 4 et 5",
            "1, 3 et 4",
            "1, 2 et 4"
        ],
        correctAnswer: 2,
        explanation: "Le CSI définit trois types de métriques : les métriques de processus (1), les métriques de services (3) et les métriques de technologie (4). Les métriques de fournisseurs et de business ne font pas partie de cette classification officielle."
    }
];

export default questions;