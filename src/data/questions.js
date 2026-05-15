const questions = [
  // ─── Web Service : concepts de base ───────────────────────────────────────
  {
    id: 'q1',
    question: "Qu'est-ce qu'un Service dans le contexte des architectures orientées services ?",
    options: [
      "Une fonctionnalité mise à disposition et exécutée par un fournisseur lorsqu'elle est invoquée par un consommateur",
      'Un composant matériel permettant de relier deux réseaux locaux',
      "Un système d'exploitation conçu spécifiquement pour les serveurs web",
      'Une base de données relationnelle accessible uniquement en local',
    ],
    correctAnswer: 0,
    explanation:
      "Un service est défini comme une fonctionnalité mise à disposition et exécutée par un fournisseur lorsqu'elle est invoquée par un consommateur.",
  },
  {
    id: 'q2',
    question: "Quel est le rôle principal de l'interface d'un service ?",
    options: [
      'Exposer le code source complet du service au client',
      "Masquer l'implémentation du service pour garantir un couplage faible entre le consommateur et le fournisseur",
      'Augmenter la taille des messages échangés sur le réseau',
      "Empêcher la réutilisation du service par d'autres applications",
    ],
    correctAnswer: 1,
    explanation:
      "L'interface définit l'usage du service (contrat) et masque son implémentation, ce qui permet un couplage faible.",
  },
  {
    id: 'q3',
    question: 'Parmi les caractéristiques suivantes, lesquelles décrivent un service ? (choisissez la meilleure réponse)',
    options: [
      'Monolithique, dépendant, non réutilisable',
      'Réutilisable, composable, indépendant, granularité variable',
      'Statique, centralisé, couplage fort',
      'Binaire, propriétaire, non interopérable',
    ],
    correctAnswer: 1,
    explanation:
      'Un service est réutilisable, composable, indépendant et possède une granularité variable.',
  },
  {
    id: 'q4',
    question: "Qu'est-ce qu'un Web Service ?",
    options: [
      'Un service mis à disposition exclusivement sur un réseau local (LAN)',
      'Un service mis à disposition sur Internet, accessible via des protocoles internet standard',
      'Un logiciel de gestion de base de données accessible en ligne',
      'Un navigateur web permettant de consulter des pages HTML',
    ],
    correctAnswer: 1,
    explanation:
      "Un Web Service est un service mis à disposition sur Internet, associé à une URL, accessible via des protocoles internet standard (HTTP) et indépendant des technologies d'implémentation.",
  },
  {
    id: 'q5',
    question: 'Quel protocole est principalement utilisé pour transporter les Web Services ?',
    options: ['FTP', 'SMTP', 'HTTP', 'Telnet'],
    correctAnswer: 2,
    explanation:
      'Les Web Services sont accessibles via des protocoles internet standard, notamment HTTP.',
  },
  {
    id: 'q6',
    question: 'Quel langage sert de format pivot pour décrire et échanger des données dans les Web Services ?',
    options: ['JSON', 'HTML', 'XML', 'CSV'],
    correctAnswer: 2,
    explanation:
      'XML est le format pivot (langage commun) utilisé pour décrire et échanger les données dans les Web Services. Les Web Services sont auto-descriptifs grâce à XML.',
  },
  {
    id: 'q7',
    question: "Quelle propriété des Web Services signifie qu'ils peuvent être utilisés quelle que soit la technologie d'implémentation du client ?",
    options: [
      'Couplage fort',
      "Indépendance des technologies d'implémentation",
      'Dépendance au langage Java',
      'Propriétaire',
    ],
    correctAnswer: 1,
    explanation:
      "Les Web Services sont accessibles indépendamment des technologies d'implémentation du client (Java, .NET, PHP, etc.).",
  },
  {
    id: 'q8',
    question: "Dans le principe des Web Services, qui publie le service dans l'annuaire ?",
    options: ['Le client', "L'annuaire lui-même", 'Le fournisseur', 'Le consommateur'],
    correctAnswer: 2,
    explanation:
      "Le fournisseur publie (enregistre) le service dans l'annuaire de services.",
  },
  {
    id: 'q9',
    question: "Dans le principe des Web Services, qui effectue la découverte du service dans l'annuaire ?",
    options: ['Le fournisseur', 'Le routeur réseau', 'Le client (consommateur)', "L'administrateur système"],
    correctAnswer: 2,
    explanation:
      "Le client (consommateur) effectue la découverte du service dans l'annuaire, puis l'utilise directement auprès du fournisseur.",
  },
  {
    id: 'q10',
    question: "Quels sont les trois acteurs du triangle des Web Services ?",
    options: [
      'Développeur, testeur, déployeur',
      'Client, Annuaire de services, Fournisseur',
      'Navigateur, Serveur, Base de données',
      'Proxy, Firewall, DMZ',
    ],
    correctAnswer: 1,
    explanation:
      "Le triangle des Web Services implique trois acteurs : le Client (consommateur), l'Annuaire de services et le Fournisseur.",
  },

  // ─── Implémentation ───────────────────────────────────────────────────────
  {
    id: 'q11',
    question: 'Quelles sont les deux grandes familles de technologies pour implémenter les Web Services ?',
    options: [
      'Famille TCP et famille UDP',
      'Famille WS-* et famille RESTful',
      'Famille Java et famille .NET',
      'Famille CORBA et famille DCOM',
    ],
    correctAnswer: 1,
    explanation:
      'Les traitements liés au protocole se basent sur HTTP/XML et se déclinent en deux grandes familles : la famille WS-* et la famille RESTful.',
  },
  {
    id: 'q12',
    question: "Pour créer un Web Service (côté fournisseur), quelle est la première étape ?",
    options: [
      "Déployer sur le serveur",
      "Définir le contrat du service",
      "Publier dans l'annuaire",
      "Développer la couche de traitement XML",
    ],
    correctAnswer: 1,
    explanation:
      "La première étape côté fournisseur est de définir le contrat du service, avant de le développer, de développer la couche XML, de le déployer puis de le publier.",
  },
  {
    id: 'q13',
    question: "Côté fournisseur, dans quel ordre sont réalisées les étapes de création d'un Web Service ?",
    options: [
      'Déployer → Définir le contrat → Développer le service → Publier → Traitement XML',
      'Définir le contrat → Développer le service → Développer la couche XML → Déployer → Publier',
      'Développer le service → Définir le contrat → Déployer → Publier → Traitement XML',
      'Publier → Définir le contrat → Développer → Déployer → Traitement XML',
    ],
    correctAnswer: 1,
    explanation:
      'Côté fournisseur : 1) Définir le contrat, 2) Développer le service, 3) Développer la couche de traitement XML, 4) Déployer sur le serveur, 5) Publier dans l\'annuaire.',
  },
  {
    id: 'q14',
    question: "Côté client, quelle est la première étape pour créer une application qui consomme un Web Service ?",
    options: [
      "Créer un stub/proxy",
      "Développer la couche de traitement XML",
      "Rechercher le service dans l'annuaire",
      "Utiliser le service et présenter les résultats",
    ],
    correctAnswer: 2,
    explanation:
      "Côté client, la première étape est de rechercher le service dans l'annuaire.",
  },
  {
    id: 'q15',
    question: "Qu'est-ce qu'un stub/proxy côté client dans le contexte des Web Services ?",
    options: [
      "Un serveur mandataire qui bloque les requêtes non autorisées",
      "Un objet local généré automatiquement qui représente le Web Service et permet d'appeler ses méthodes comme si elles étaient locales",
      "Un fichier de configuration du serveur d'application",
      "Un annuaire de services en ligne",
    ],
    correctAnswer: 1,
    explanation:
      "Le stub/proxy est un objet côté client qui représente le Web Service, permettant d'en appeler les méthodes comme des appels locaux, tout en gérant le transport SOAP/HTTP en arrière-plan.",
  },
  {
    id: 'q16',
    question: "Quelle technologie Java est utilisée pour l'implémentation WS-* côté fournisseur et côté client ?",
    options: ['JDBC + JPA', 'JAX-RS + Jersey', 'JAX-WS + JAXB', 'EJB + JMS'],
    correctAnswer: 2,
    explanation:
      "L'implémentation WS-* avec Java utilise JAX-WS (Java API for XML Web Services) et JAXB (Java Architecture for XML Binding) côté fournisseur et côté client.",
  },
  {
    id: 'q17',
    question: "Sur quel protocole repose l'échange de messages dans l'implémentation WS-* avec Java ?",
    options: ['RMI/IIOP', 'SOAP/HTTP', 'REST/JSON', 'CORBA/GIOP'],
    correctAnswer: 1,
    explanation:
      "L'implémentation WS-* avec Java repose sur SOAP/HTTP pour le transport des messages.",
  },
  {
    id: 'q18',
    question: "Quel type de serveur est requis pour exécuter les opérations JAX-WS côté fournisseur ?",
    options: [
      "Un serveur FTP",
      "Un serveur d'application Java EE",
      "Un serveur de messagerie",
      "Un serveur DNS",
    ],
    correctAnswer: 1,
    explanation:
      "Côté fournisseur, le serveur d'application Java EE exécute les opérations JAX-WS.",
  },

  // ─── WSDL ─────────────────────────────────────────────────────────────────
  {
    id: 'q19',
    question: 'Que signifie l\'acronyme WSDL ?',
    options: [
      'Web Service Data Language',
      'Web Service Description Language',
      'Wide System Definition Language',
      'Web Standard Document Layer',
    ],
    correctAnswer: 1,
    explanation:
      "WSDL signifie Web Service Description Language.",
  },
  {
    id: 'q20',
    question: "Quel organisme a standardisé WSDL ?",
    options: ['OASIS', 'ISO', 'W3C', 'IETF'],
    correctAnswer: 2,
    explanation:
      "WSDL est un standard du W3C (World Wide Web Consortium).",
  },
  {
    id: 'q21',
    question: "Quelle est la version la plus connue et la plus supportée de WSDL ?",
    options: ['WSDL 3.0 (2010)', 'WSDL 2.0 (2007)', 'WSDL 1.1 (2001)', 'WSDL 0.9 (1999)'],
    correctAnswer: 2,
    explanation:
      "WSDL 1.1 (2001) est la version la plus largement utilisée. WSDL 2.0 (2007) est encore peu supportée par les outils.",
  },
  {
    id: 'q22',
    question: "Quel est l'objectif principal de WSDL ?",
    options: [
      "Transporter les requêtes HTTP",
      "Décrire l'interface publique d'un Web Service (contrat de service)",
      "Stocker les données dans une base de données XML",
      "Sécuriser les échanges entre client et serveur",
    ],
    correctAnswer: 1,
    explanation:
      "WSDL a pour objectif de décrire l'interface publique d'un Web Service, constituant ainsi le contrat de service.",
  },
  {
    id: 'q23',
    question: "WSDL est dérivé de quel langage ?",
    options: ['HTML', 'JSON', 'XML', 'YAML'],
    correctAnswer: 2,
    explanation:
      "WSDL utilise une grammaire dérivée de XML.",
  },
  {
    id: 'q24',
    question: "Dans WSDL 1.1, comment est défini un Web Service ?",
    options: [
      "Comme un ensemble de threads qui partagent des ressources communes",
      "Comme un ensemble de ports de connexions mettant à disposition des opérations qui reçoivent et envoient des messages",
      "Comme une base de données de procédures stockées accessibles à distance",
      "Comme un fichier de configuration JSON décrivant des endpoints",
    ],
    correctAnswer: 1,
    explanation:
      "Dans WSDL, un Web Service est un ensemble de ports de connexions mettant à disposition des opérations qui reçoivent et envoient des messages.",
  },
  {
    id: 'q25',
    question: "Quels sont les deux types d'informations contenus dans un fichier WSDL ?",
    options: [
      "Informations de sécurité et informations de déploiement",
      "Informations fonctionnelles (interface du service) et informations techniques (URL, protocole)",
      "Informations sur le client et informations sur le serveur",
      "Informations de logging et informations de monitoring",
    ],
    correctAnswer: 1,
    explanation:
      "Un fichier WSDL contient des informations fonctionnelles (interface du service : signature des méthodes) et des informations techniques (URL, protocole).",
  },
  {
    id: 'q26',
    question: "Dans la structure d'un fichier WSDL 1.1, quel élément représente l'interface fonctionnelle du service (opérations disponibles) ?",
    options: ['<binding>', '<service>', '<portType>', '<port>'],
    correctAnswer: 2,
    explanation:
      "L'élément <portType> définit l'interface fonctionnelle du service, regroupant les opérations disponibles avec leurs messages d'entrée/sortie.",
  },
  {
    id: 'q27',
    question: "Dans WSDL 1.1, quel élément définit le protocole de transport et le format des messages ?",
    options: ['<portType>', '<message>', '<types>', '<binding>'],
    correctAnswer: 3,
    explanation:
      "L'élément <binding> spécifie le protocole de transport et le format des messages pour un portType donné.",
  },
  {
    id: 'q28',
    question: "Dans WSDL 1.1, quel élément fournit le nom et l'adresse (URL) du service ?",
    options: ['<binding>', '<portType>', '<message>', '<service>'],
    correctAnswer: 3,
    explanation:
      "L'élément <service> fournit le nom et l'adresse (URL) du service, via ses éléments <port> enfants.",
  },
  {
    id: 'q29',
    question: "Dans WSDL 1.1, quel élément décrit les noms, types et ordre des paramètres d'une opération ?",
    options: ['<binding>', '<portType>', '<message>', '<service>'],
    correctAnswer: 2,
    explanation:
      "L'élément <message> décrit les noms, types et ordre des paramètres (via des éléments <part>).",
  },
  {
    id: 'q30',
    question: "Dans la structure d'un fichier WSDL, quel est l'élément racine ?",
    options: ['<wsdl>', '<portType>', '<definitions>', '<service>'],
    correctAnswer: 2,
    explanation:
      "L'élément racine d'un fichier WSDL 1.1 est <definitions>.",
  },
  {
    id: 'q31',
    question: "Dans un fichier WSDL 1.1, où sont définis les types de données complexes ?",
    options: [
      "Dans l'élément <message>",
      "Dans l'élément <types> (ou dans un fichier XSD séparé)",
      "Dans l'élément <binding>",
      "Dans l'élément <port>",
    ],
    correctAnswer: 1,
    explanation:
      "Les types complexes sont déclarés dans l'élément <types> du fichier WSDL, ou dans un fichier XSD (XMLSchema) séparé.",
  },
  {
    id: 'q32',
    question: "Quel espace de noms identifie le schéma WSDL 1.1 ?",
    options: [
      'http://www.w3.org/2001/XMLSchema',
      'http://schemas.xmlsoap.org/wsdl/',
      'http://schemas.xmlsoap.org/soap/http',
      'http://www.oasis-open.org/wsdl',
    ],
    correctAnswer: 1,
    explanation:
      "L'espace de noms du schéma WSDL 1.1 est http://schemas.xmlsoap.org/wsdl/.",
  },
  {
    id: 'q33',
    question: "Dans un fichier WSDL, qu'est-ce qu'un <part> dans un <message> ?",
    options: [
      "Un sous-service exposé indépendamment",
      "Un paramètre individuel du message (nom + type)",
      "Une partie du protocole de transport",
      "Un fragment de l'URL du service",
    ],
    correctAnswer: 1,
    explanation:
      "Un <part> dans un <message> représente un paramètre individuel du message, défini par un nom et un type de données.",
  },
  {
    id: 'q34',
    question: "Quelle est la différence entre un <port> et un <portType> dans WSDL ?",
    options: [
      "Ce sont deux noms différents pour le même concept",
      "<port> est une information technique (URL + binding) ; <portType> est l'interface fonctionnelle (opérations)",
      "<portType> est l'adresse physique du service ; <port> est l'interface abstraite",
      "<port> définit les types de données ; <portType> définit le protocole",
    ],
    correctAnswer: 1,
    explanation:
      "<portType> définit l'interface abstraite fonctionnelle (les opérations). <port> est un élément technique qui lie un <portType> à une adresse concrète via un <binding>.",
  },
  {
    id: 'q35',
    question: "Un fichier WSDL peut-il être utilisé par des outils pour générer du code automatiquement ?",
    options: [
      "Non, il est uniquement destiné à la documentation",
      "Oui, il est utilisable par des outils de génération de code (stubs, squelettes)",
      "Uniquement pour générer du code en C++",
      "Non, la génération de code n'est pas supportée",
    ],
    correctAnswer: 1,
    explanation:
      "Un fichier WSDL est utilisable par des outils de génération de code pour créer automatiquement des stubs côté client et des squelettes côté fournisseur.",
  },
  {
    id: 'q36',
    question: "Dans l'exemple WSDL du cours, quel est le nom de l'opération exposée ?",
    options: ['addNumbers', 'sayHello', 'getService', 'invokeMethod'],
    correctAnswer: 1,
    explanation:
      "L'opération exposée dans l'exemple du cours s'appelle sayHello.",
  },
  {
    id: 'q37',
    question: "Dans l'exemple WSDL avec types simples, quel est le type du paramètre 'n' de l'opération sayHello ?",
    options: ['xsd:int', 'xsd:boolean', 'xsd:string', 'xsd:float'],
    correctAnswer: 2,
    explanation:
      "Le paramètre 'n' de sayHello est de type xsd:string.",
  },
  {
    id: 'q38',
    question: "Dans un WSDL avec types complexes, comment est référencé le type complexe dans un <part> ?",
    options: [
      "Avec l'attribut 'type'",
      "Avec l'attribut 'element'",
      "Avec l'attribut 'class'",
      "Avec l'attribut 'schema'",
    ],
    correctAnswer: 1,
    explanation:
      "Pour des types complexes, le <part> utilise l'attribut 'element' pour référencer un élément XSD défini dans le schéma.",
  },
  {
    id: 'q39',
    question: "Quel style de binding SOAP est spécifié dans l'exemple du cours ?",
    options: ['rpc', 'document', 'literal', 'encoded'],
    correctAnswer: 1,
    explanation:
      "Le style spécifié dans l'exemple du cours est 'document' (style=\"document\" dans <soap:binding>).",
  },
  {
    id: 'q40',
    question: "Quel use est spécifié pour le <soap:body> dans l'exemple WSDL du cours ?",
    options: ['encoded', 'rpc', 'document', 'literal'],
    correctAnswer: 3,
    explanation:
      "L'attribut use=\"literal\" est spécifié pour le <soap:body> dans les sections <input> et <output>.",
  },

  // ─── SOAP ─────────────────────────────────────────────────────────────────
  {
    id: 'q41',
    question: "Que signifie l'acronyme SOAP ?",
    options: [
      'Structured Object Application Protocol',
      'Simple Object Access Protocol',
      'Standard Object API Protocol',
      'Service Oriented Application Protocol',
    ],
    correctAnswer: 1,
    explanation:
      "SOAP signifie Simple Object Access Protocol.",
  },
  {
    id: 'q42',
    question: "Quel organisme a standardisé SOAP ?",
    options: ['OASIS', 'IETF', 'W3C', 'IEEE'],
    correctAnswer: 2,
    explanation:
      "SOAP est un standard du W3C.",
  },
  {
    id: 'q43',
    question: "Quelle est la version de SOAP standardisée en 2003 ?",
    options: ['SOAP 1.0', 'SOAP 1.1', 'SOAP 1.2', 'SOAP 2.0'],
    correctAnswer: 2,
    explanation:
      "SOAP version 1.2 a été standardisée en 2003.",
  },
  {
    id: 'q44',
    question: "Quel est l'objectif principal de SOAP ?",
    options: [
      "Décrire l'interface d'un Web Service",
      "Formater les requêtes et les réponses échangées entre client et Web Service pour le transport",
      "Publier des services dans un annuaire UDDI",
      "Gérer la sécurité des échanges entre les services",
    ],
    correctAnswer: 1,
    explanation:
      "SOAP a pour objectif de formater les requêtes et les réponses échangées entre client et Web Service pour le transport, notamment sur HTTP.",
  },
  {
    id: 'q45',
    question: "SOAP est dérivé de quel langage ?",
    options: ['HTML', 'JSON', 'YAML', 'XML'],
    correctAnswer: 3,
    explanation:
      "SOAP utilise une grammaire dérivée de XML.",
  },
  {
    id: 'q46',
    question: "Quels sont les deux éléments principaux définis par SOAP ?",
    options: [
      "Un langage de requêtes et un langage de réponses",
      "Un modèle de structure pour les messages et un modèle de traitement des messages",
      "Un protocole de sécurité et un protocole de compression",
      "Un format de données et un format d'adressage",
    ],
    correctAnswer: 1,
    explanation:
      "SOAP définit principalement un modèle de structure pour les requêtes/réponses (messages) et un modèle de traitement des messages.",
  },
  {
    id: 'q47',
    question: "Quel élément est obligatoire dans un message SOAP et définit qu'il s'agit d'un message SOAP ?",
    options: ['<Header>', '<Body>', '<Envelope>', '<Fault>'],
    correctAnswer: 2,
    explanation:
      "L'élément <Envelope> est obligatoire dans un message SOAP et définit qu'il s'agit bien d'un message SOAP.",
  },
  {
    id: 'q48',
    question: "Quel élément SOAP est optionnel et peut contenir des informations non applicatives (sécurité, transaction) ?",
    options: ['<Envelope>', '<Body>', '<Fault>', '<Header>'],
    correctAnswer: 3,
    explanation:
      "Le <Header> est optionnel et peut contenir des informations non applicatives (sécurité, transaction) ou destinées aux intermédiaires.",
  },
  {
    id: 'q49',
    question: "Quel élément SOAP décrit la requête ou la réponse applicative ?",
    options: ['<Envelope>', '<Header>', '<Body>', '<Attachment>'],
    correctAnswer: 2,
    explanation:
      "L'élément <Body> contient la requête ou la réponse applicative.",
  },
  {
    id: 'q50',
    question: "Dans l'exemple SOAP du cours, quelle est la valeur de l'argument passé à sayHello ?",
    options: ['Hello', 'World', 'Robert', 'Test'],
    correctAnswer: 2,
    explanation:
      "Dans l'exemple du cours, la requête sayHello passe la valeur 'Robert' dans l'élément <n>.",
  },
  {
    id: 'q51',
    question: "Dans l'exemple SOAP du cours, quelle est la réponse retournée par sayHello('Robert') ?",
    options: [
      '"Bonjour Robert !"',
      '"Hello dear Robert !"',
      '"Hi Robert"',
      '"Welcome Robert"',
    ],
    correctAnswer: 1,
    explanation:
      "La réponse est 'Hello dear Robert !' retournée dans l'élément <return>.",
  },
  {
    id: 'q52',
    question: "Les messages SOAP sont-ils précédés d'un message HTTP ?",
    options: [
      "Non, SOAP est indépendant de HTTP",
      "Oui, les messages SOAP sont précédés d'un message HTTP",
      "Seulement pour les requêtes, pas pour les réponses",
      "Seulement dans la version SOAP 2.0",
    ],
    correctAnswer: 1,
    explanation:
      "Les messages SOAP sont précédés d'un message HTTP (SOAP sur HTTP).",
  },
  {
    id: 'q53',
    question: "Quel espace de noms identifie l'enveloppe SOAP dans l'exemple du cours ?",
    options: [
      'http://www.w3.org/2003/05/soap-envelope',
      'http://schemas.xmlsoap.org/soap/envelope/',
      'http://soap.w3c.org/envelope',
      'http://www.oasis-open.org/soap',
    ],
    correctAnswer: 1,
    explanation:
      "L'espace de noms de l'enveloppe SOAP utilisé dans l'exemple est http://schemas.xmlsoap.org/soap/envelope/.",
  },
  {
    id: 'q54',
    question: "Dans un message SOAP, où est placée l'opération à invoquer et ses paramètres ?",
    options: ['Dans le <Header>', 'Dans le <Envelope>', 'Dans le <Body>', "Dans l'en-tête HTTP"],
    correctAnswer: 2,
    explanation:
      "L'opération à invoquer et ses paramètres se trouvent dans le <Body> du message SOAP.",
  },
  {
    id: 'q55',
    question: "Quel attribut de l'encodage XML est typiquement utilisé dans les messages SOAP de l'exemple ?",
    options: ['encoding=\"ISO-8859-1\"', 'encoding=\"UTF-16\"', 'encoding=\"UTF-8\"', 'encoding=\"ASCII\"'],
    correctAnswer: 2,
    explanation:
      "L'encodage UTF-8 est utilisé dans les messages SOAP de l'exemple (<?xml version=\"1.0\" encoding=\"UTF-8\"?>).",
  },

  // ─── UDDI ─────────────────────────────────────────────────────────────────
  {
    id: 'q56',
    question: "Que signifie l'acronyme UDDI ?",
    options: [
      'Universal Data Definition Interface',
      'Universal Discovery Description and Integration',
      'Unified Dynamic Description Index',
      'Universal Deployment Description Interface',
    ],
    correctAnswer: 1,
    explanation:
      "UDDI signifie Universal Discovery Description and Integration.",
  },
  {
    id: 'q57',
    question: "Quelle est la version la plus récente d'UDDI mentionnée dans le cours ?",
    options: ['Version 1 (2001)', 'Version 2 (2003)', 'Version 3 (2005)', 'Version 4 (2010)'],
    correctAnswer: 2,
    explanation:
      "La version 3 d'UDDI a été publiée en 2005.",
  },
  {
    id: 'q58',
    question: "Quel est l'objectif d'UDDI ?",
    options: [
      "Formater les messages SOAP",
      "Publication et découverte de Web Services sur un réseau",
      "Décrire l'interface d'un Web Service",
      "Sécuriser les échanges entre services",
    ],
    correctAnswer: 1,
    explanation:
      "UDDI a pour objectif la publication et la découverte de Web Services sur un réseau.",
  },
  {
    id: 'q59',
    question: "Qu'est-ce que l'UDDI Business Registry (UBR) ?",
    options: [
      "Un protocole de sécurité pour les Web Services",
      "Un annuaire orienté 'business' permettant d'automatiser les communications entre prestataires et clients",
      "Un format de fichier pour les descriptions de services",
      "Un serveur d'application Java EE",
    ],
    correctAnswer: 1,
    explanation:
      "L'UBR est un annuaire orienté 'business' permettant d'automatiser les communications entre prestataires, clients, etc.",
  },
  {
    id: 'q60',
    question: "Les méthodes de publication et de consultation dans UDDI sont basées sur quel protocole ?",
    options: ['REST', 'CORBA', 'SOAP', 'FTP'],
    correctAnswer: 2,
    explanation:
      "Les méthodes de publication et de consultation dans UDDI sont basées sur SOAP.",
  },
  {
    id: 'q61',
    question: "Les 'Pages blanches' dans UDDI contiennent quel type d'informations ?",
    options: [
      "Procédures e-business et descriptions techniques des services",
      "Nom de la société, informations de contact, identification (DUNS, SIRET)",
      "Index des services et produits, taxonomie",
      "Paramètres des services et opérations disponibles",
    ],
    correctAnswer: 1,
    explanation:
      "Les pages blanches contiennent le nom de la société, les informations sur les contacts, la description et les identifications (DUNS, SIRET, etc.).",
  },
  {
    id: 'q62',
    question: "Les 'Pages jaunes' dans UDDI contiennent quel type d'informations ?",
    options: [
      "Nom de la société et coordonnées",
      "Procédures e-business et descriptions techniques",
      "Index des services et produits, code d'industrie, index géographique, taxonomie",
      "Paramètres des services Web",
    ],
    correctAnswer: 2,
    explanation:
      "Les pages jaunes contiennent l'index des services et produits, le code d'industrie (APE, etc.), l'index géographique et la taxonomie.",
  },
  {
    id: 'q63',
    question: "Les 'Pages vertes' dans UDDI contiennent quel type d'informations ?",
    options: [
      "Nom de la société et identifications",
      "Index des services et taxonomie",
      "Procédures e-business, descriptions techniques des services, paramètres des services",
      "Coordonnées des fournisseurs de services",
    ],
    correctAnswer: 2,
    explanation:
      "Les pages vertes contiennent les procédures e-business, les descriptions techniques des services et les paramètres des services.",
  },
  {
    id: 'q64',
    question: "Dans le cadre des Web Services SOAP, dans quel sens se fait la communication entre SOAP et UDDI pour la découverte ?",
    options: [
      "Le fournisseur interroge UDDI pour trouver les clients",
      "Le client interroge UDDI (via SOAP/UDDI) pour trouver le service, puis utilise le service via SOAP",
      "UDDI interroge automatiquement les fournisseurs",
      "Le client contacte directement le fournisseur sans passer par UDDI",
    ],
    correctAnswer: 1,
    explanation:
      "Le client utilise SOAP/UDDI pour la découverte (interroger l'annuaire), puis utilise SOAP directement pour invoquer le service chez le fournisseur.",
  },
  {
    id: 'q65',
    question: "Quel standard porte par qui est UDDI ?",
    options: [
      "Un standard du W3C",
      "Un standard de l'IETF",
      "Un standard porté par un consortium d'industriels",
      "Un standard ISO",
    ],
    correctAnswer: 2,
    explanation:
      "UDDI est un standard porté par un consortium d'industriels (et non par un organisme de standardisation comme le W3C ou l'IETF).",
  },

  // ─── Publication d'un service ─────────────────────────────────────────────
  {
    id: 'q66',
    question: "Quels sont les trois types de registres pour la publication d'un service ?",
    options: [
      "Registre public, registre de branche, registre privé",
      "Registre SOAP, registre WSDL, registre UDDI",
      "Registre local, registre régional, registre mondial",
      "Registre XML, registre JSON, registre binaire",
    ],
    correctAnswer: 0,
    explanation:
      "Il existe trois types de registres : public (ex : seekda.com, xmethods.net), de branche et privé.",
  },
  {
    id: 'q67',
    question: "À l'heure actuelle, quel type de registre est majoritairement utilisé ?",
    options: [
      "Les registres publics (accessibles sur Internet)",
      "Les registres de branche (sectoriels)",
      "Les registres privés (internes aux entreprises)",
      "Les registres hybrides publics-privés",
    ],
    correctAnswer: 2,
    explanation:
      "Actuellement, les registres sont majoritairement privés, internes aux entreprises.",
  },
  {
    id: 'q68',
    question: "Comment un service est-il indexé dans un registre UDDI ?",
    options: [
      "Par son adresse IP uniquement",
      "Par une ou plusieurs catégories dans la taxonomie du registre",
      "Par le nom du développeur",
      "Par la date de déploiement",
    ],
    correctAnswer: 1,
    explanation:
      "Un service est indexé par une ou plusieurs catégories dans la taxonomie du registre UDDI.",
  },

  // ─── W3C & OASIS ──────────────────────────────────────────────────────────
  {
    id: 'q69',
    question: "Quand le W3C a-t-il été fondé ?",
    options: ['1989', '1991', '1994', '1998'],
    correctAnswer: 2,
    explanation:
      "Le W3C (World Wide Web Consortium) a été fondé en 1994.",
  },
  {
    id: 'q70',
    question: "Quel est le mécanisme utilisé par le W3C pour publier ses standards ?",
    options: ['Directives', 'Recommandations', 'Décrets', 'Conventions'],
    correctAnswer: 1,
    explanation:
      "Le W3C utilise un mécanisme de recommandations pour publier ses standards.",
  },
  {
    id: 'q71',
    question: "Quels standards liés aux Web Services ont été définis par le W3C ?",
    options: ['UDDI, BPEL, WS-Security', 'SOAP, WSDL', 'REST, JSON', 'CORBA, DCOM'],
    correctAnswer: 1,
    explanation:
      "Le W3C est à l'origine de SOAP et WSDL, les technologies de base des Web Services WS-*.",
  },
  {
    id: 'q72',
    question: "Que signifie OASIS dans le contexte des Web Services ?",
    options: [
      'Open Application Service Interface Standard',
      'Organization for the Advancement of Structured Information Standards',
      'Object and API Standard Integration Service',
      'Online Application Service Interoperability System',
    ],
    correctAnswer: 1,
    explanation:
      "OASIS signifie Organization for the Advancement of Structured Information Standards.",
  },
  {
    id: 'q73',
    question: "Quel est l'objectif principal d'OASIS ?",
    options: [
      "Développer des navigateurs web open-source",
      "Développement, convergence et adoption de standards e-business",
      "Réglementer l'accès à Internet",
      "Certifier les développeurs de Web Services",
    ],
    correctAnswer: 1,
    explanation:
      "L'objectif d'OASIS est le développement, la convergence et l'adoption de standards e-business.",
  },
  {
    id: 'q74',
    question: "Quels standards Web Services sont portés par OASIS ?",
    options: [
      'SOAP, WSDL, HTTP',
      'UDDI, BPEL, WSRP, WS-Security, SAML, WS-Transactions',
      'REST, JSON, OAuth',
      'XML, XSD, XSLT',
    ],
    correctAnswer: 1,
    explanation:
      "OASIS porte UDDI, BPEL, WSRP, WS-Security, SAML, WS-Transactions, entre autres.",
  },

  // ─── JAX-WS ───────────────────────────────────────────────────────────────
  {
    id: 'q75',
    question: "Que signifie JAX-WS ?",
    options: [
      'Java Application for eXtensible Web Services',
      'Java API for XML Web Services',
      'Java Architecture for eXternal Web Services',
      'Java Access for XML Web Services',
    ],
    correctAnswer: 1,
    explanation:
      "JAX-WS signifie Java API for XML Web Services.",
  },
  {
    id: 'q76',
    question: "Quel est l'objectif de JAX-WS ?",
    options: [
      "Gérer les connexions JDBC vers les bases de données",
      "Assurer la conversion WSDL ↔ Java et SOAP ↔ Java",
      "Gérer les transactions distribuées en Java EE",
      "Fournir un ORM pour mapper les objets Java vers XML",
    ],
    correctAnswer: 1,
    explanation:
      "JAX-WS a pour objectif la conversion WSDL ↔ Java et SOAP ↔ Java.",
  },
  {
    id: 'q77',
    question: "JAX-WS permet la correspondance automatique dans quel sens (côté fournisseur) ?",
    options: [
      "WSDL → Java uniquement",
      "Java → WSDL uniquement",
      "Classe Java → WSDL (génération de contrat) et WSDL → Java (génération de squelette)",
      "SOAP → REST uniquement",
    ],
    correctAnswer: 2,
    explanation:
      "JAX-WS supporte la correspondance automatique Classe Java → WSDL (génération de contrat côté fournisseur ou client) et WSDL → Java (génération d'un squelette de service).",
  },
  {
    id: 'q78',
    question: "Que génère JAX-WS à partir d'un fichier WSDL côté client ?",
    options: [
      "Un fichier de configuration XML",
      "Un stub côté client",
      "Un fichier WAR déployable",
      "Un schéma de base de données",
    ],
    correctAnswer: 1,
    explanation:
      "JAX-WS génère un stub côté client à partir d'un fichier WSDL.",
  },
  {
    id: 'q79',
    question: "Quelle transformation automatique JAX-WS effectue lors d'un appel de méthode côté client ?",
    options: [
      "Appel de méthode Java → message REST/JSON",
      "Appel de méthode Java → message SOAP",
      "Appel de méthode Java → requête SQL",
      "Appel de méthode Java → appel RMI",
    ],
    correctAnswer: 1,
    explanation:
      "JAX-WS transforme automatiquement un appel de méthode Java en message SOAP (et vice-versa).",
  },
  {
    id: 'q80',
    question: "Sur quelle technologie Java s'appuie JAX-WS pour le traitement du XML ?",
    options: ['JAXP', 'JAXR', 'JAXB', 'JAX-RS'],
    correctAnswer: 2,
    explanation:
      "JAX-WS s'appuie sur JAXB (Java Architecture for XML Binding) pour le traitement du XML.",
  },
  {
    id: 'q81',
    question: "Quelle annotation Java EE est utilisée pour déclarer une classe comme Web Service ?",
    options: ['@Service', '@Component', '@WebService', '@Endpoint'],
    correctAnswer: 2,
    explanation:
      "L'annotation @WebService est utilisée pour déclarer une classe Java comme Web Service.",
  },
  {
    id: 'q82',
    question: "Quelle annotation est utilisée pour exposer une méthode Java comme opération d'un Web Service ?",
    options: ['@Expose', '@Operation', '@WebMethod', '@ServiceMethod'],
    correctAnswer: 2,
    explanation:
      "L'annotation @WebMethod est utilisée pour exposer une méthode Java comme opération d'un Web Service.",
  },
  {
    id: 'q83',
    question: "Quelle annotation permet de nommer un paramètre dans une opération de Web Service Java ?",
    options: ['@Param', '@Parameter', '@WebParam', '@ArgName'],
    correctAnswer: 2,
    explanation:
      "L'annotation @WebParam(name=\"...\") permet de nommer un paramètre dans une opération de Web Service.",
  },
  {
    id: 'q84',
    question: "Dans l'exemple du cours, comment s'appelle la classe du Web Service Java ?",
    options: ['WebServiceImpl', 'SayHelloService', 'HelloService', 'ServiceHello'],
    correctAnswer: 2,
    explanation:
      "La classe du Web Service dans l'exemple s'appelle HelloService.",
  },
  {
    id: 'q85',
    question: "Que retourne la méthode sayHello(String n) dans l'exemple Java du cours ?",
    options: [
      '"Bonjour " + n',
      '"Hello dear " + n + " !"',
      '"Hi " + n',
      '"Welcome " + n',
    ],
    correctAnswer: 1,
    explanation:
      "La méthode retourne la chaîne \"Hello dear \" + n + \" !\".",
  },

  // ─── JAXB ─────────────────────────────────────────────────────────────────
  {
    id: 'q86',
    question: "Que signifie JAXB ?",
    options: [
      'Java API for eXtensible Binding',
      'Java Architecture for XML Binding',
      'Java Application for XML-Based services',
      'Java Access for XML Binding',
    ],
    correctAnswer: 1,
    explanation:
      "JAXB signifie Java Architecture for XML Binding.",
  },
  {
    id: 'q87',
    question: "Quel est l'objectif de JAXB ?",
    options: [
      "Générer automatiquement des interfaces utilisateur à partir de schémas XML",
      "Assurer la conversion XML ↔ Java (objets Java ↔ représentation XML)",
      "Valider les messages SOAP selon un schéma de sécurité",
      "Gérer les transactions distribuées entre services Web",
    ],
    correctAnswer: 1,
    explanation:
      "JAXB a pour objectif la conversion XML ↔ Java : objet Java ↔ représentation XML (marshalling/unmarshalling).",
  },
  {
    id: 'q88',
    question: "Quelles sont les deux données nécessaires à JAXB pour effectuer la conversion ?",
    options: [
      "Un fichier de configuration et une base de données",
      "Un schéma XML (XML Schema / XSD) et/ou des classes Java annotées",
      "Un fichier WSDL et un fichier SOAP",
      "Un fichier WAR et un fichier EAR",
    ],
    correctAnswer: 1,
    explanation:
      "JAXB nécessite un schéma XML (XML Schema) et/ou des classes Java annotées pour effectuer la conversion.",
  },
  {
    id: 'q89',
    question: "Dans JAXB, qu'est-ce que le marshalling ?",
    options: [
      "La conversion d'un document XML en objet Java",
      "La conversion d'un objet Java en représentation XML",
      "La validation d'un schéma XML",
      "La compilation d'un schéma XSD en classe Java",
    ],
    correctAnswer: 1,
    explanation:
      "Le marshalling est la conversion d'un objet Java en représentation XML.",
  },
  {
    id: 'q90',
    question: "Dans JAXB, qu'est-ce que l'unmarshalling ?",
    options: [
      "La conversion d'un objet Java en représentation XML",
      "La validation d'un message SOAP",
      "La conversion d'un document XML en objet Java",
      "La génération d'un schéma XSD à partir d'une classe Java",
    ],
    correctAnswer: 2,
    explanation:
      "L'unmarshalling est la conversion d'un document XML en objet Java.",
  },
  {
    id: 'q91',
    question: "Quelles sont les trois opérations supportées par JAXB ?",
    options: [
      "Sérialisation, déserialisation, compression",
      "Compilation (XSD ↔ classe Java annotée), Exécution (marshalling/unmarshalling), Validation",
      "Encodage, décodage, chiffrement",
      "Parsing, génération, transformation",
    ],
    correctAnswer: 1,
    explanation:
      "JAXB supporte la Compilation (XML Schéma ↔ classe Java annotée), l'Exécution (marshalling/unmarshalling) et la Validation.",
  },

  // ─── Création client Java ─────────────────────────────────────────────────
  {
    id: 'q92',
    question: "Pour créer un client Web Service Java avec JAX-WS, quelle est la première étape ?",
    options: [
      "Créer directement un objet JAX-WS Service",
      "Créer ou récupérer une interface Java représentant le service",
      "Développer la couche de traitement XML",
      "Déployer le service sur le serveur",
    ],
    correctAnswer: 1,
    explanation:
      "La première étape est de créer ou récupérer une interface Java (annotée @WebService et @WebMethod) représentant le service.",
  },
  {
    id: 'q93',
    question: "Quel objet JAX-WS est utilisé pour se connecter au service côté client ?",
    options: ['JAXBContext', 'Service', 'Marshaller', 'WebServiceContext'],
    correctAnswer: 1,
    explanation:
      "L'objet javax.xml.ws.Service est utilisé pour se connecter au service (Service.create(wsdlURL, serviceName)).",
  },
  {
    id: 'q94',
    question: "Que représente la classe QName dans la création d'un client JAX-WS ?",
    options: [
      "Un nom qualifié XML composé d'un espace de noms et d'un nom local",
      "Une file de messages SOAP",
      "Un protocole de transport alternatif à HTTP",
      "Une clé de chiffrement pour sécuriser les échanges",
    ],
    correctAnswer: 0,
    explanation:
      "QName représente un nom qualifié XML (Qualified Name) composé d'un espace de noms et d'un nom local, utilisé pour identifier le service et le port.",
  },
  {
    id: 'q95',
    question: "Quelle méthode de l'objet Service permet d'obtenir le stub/proxy côté client ?",
    options: ['getService()', 'getStub()', 'getPort()', 'getProxy()'],
    correctAnswer: 2,
    explanation:
      "La méthode getPort(portName, serviceInterface.class) de l'objet Service retourne le stub/proxy côté client.",
  },
  {
    id: 'q96',
    question: "Est-il possible de générer automatiquement le code client JAX-WS à partir d'un WSDL ?",
    options: [
      "Non, le client doit être codé entièrement à la main",
      "Oui, des outils permettent de générer automatiquement le stub client à partir du WSDL",
      "Seulement si le service est en Java EE",
      "Seulement pour les types simples, pas pour les types complexes",
    ],
    correctAnswer: 1,
    explanation:
      "Il est possible de générer automatiquement un client JAX-WS à partir du WSDL grâce à des outils (wsimport, etc.).",
  },

  // ─── Questions d'approfondissement ─────────────────────────────────────────
  {
    id: 'q97',
    question: "Quelle est la différence entre le 'format pivot' et l'interface dans un Web Service ?",
    options: [
      "Ce sont deux termes désignant le même concept",
      "Le format pivot est le langage commun pour les données (XML) ; l'interface est le contrat définissant l'usage du service",
      "L'interface est le format des données ; le format pivot est l'adresse du service",
      "Le format pivot est le protocole de transport ; l'interface est la couche de sécurité",
    ],
    correctAnswer: 1,
    explanation:
      "Le format pivot (XML) est le langage commun pour décrire et échanger les données ; l'interface est le contrat qui définit l'usage du service (syntaxe, sémantique, qualité).",
  },
  {
    id: 'q98',
    question: "Pourquoi le couplage consommateur/fournisseur est-il dit 'faible' dans les Web Services ?",
    options: [
      "Parce que la connexion réseau est peu fiable",
      "Parce que l'interface masque l'implémentation interne, permettant de changer l'implémentation sans impacter le consommateur",
      "Parce que les Web Services n'utilisent pas de protocole standard",
      "Parce que les échanges sont non sécurisés",
    ],
    correctAnswer: 1,
    explanation:
      "Le couplage est faible car l'interface masque l'implémentation ; le consommateur ne dépend que du contrat (interface), pas de l'implémentation interne du fournisseur.",
  },
  {
    id: 'q99',
    question: "Dans quel sens va la 'Publication' dans le triangle des Web Services ?",
    options: [
      "Du client vers l'annuaire",
      "De l'annuaire vers le client",
      "Du fournisseur vers l'annuaire",
      "Du client vers le fournisseur",
    ],
    correctAnswer: 2,
    explanation:
      "La publication va du fournisseur vers l'annuaire : le fournisseur enregistre son service dans l'annuaire.",
  },
  {
    id: 'q100',
    question: "Dans quel sens va l''Utilisation' dans le triangle des Web Services ?",
    options: [
      "Du fournisseur vers l'annuaire",
      "Du client vers l'annuaire",
      "De l'annuaire vers le fournisseur",
      "Du client vers le fournisseur (directement)",
    ],
    correctAnswer: 3,
    explanation:
      "L'utilisation va du client vers le fournisseur directement, sans passer par l'annuaire.",
  },

  // ─── Questions mixtes / transversales ─────────────────────────────────────
  {
    id: 'q101',
    question: "Quelle technologie joue le rôle d'interface (contrat) dans l'architecture Web Services WS-* ?",
    options: ['SOAP', 'UDDI', 'WSDL', 'JAX-WS'],
    correctAnswer: 2,
    explanation:
      "WSDL joue le rôle d'interface (contrat de service) dans l'architecture WS-*.",
  },
  {
    id: 'q102',
    question: "Quelle technologie joue le rôle de protocole de communication (utilisation) dans WS-* ?",
    options: ['WSDL', 'UDDI', 'SOAP', 'JAXB'],
    correctAnswer: 2,
    explanation:
      "SOAP joue le rôle du protocole de communication entre le client et le Web Service.",
  },
  {
    id: 'q103',
    question: "Quelle technologie joue le rôle d'annuaire (découverte et publication) dans WS-* ?",
    options: ['SOAP', 'WSDL', 'JAXB', 'UDDI'],
    correctAnswer: 3,
    explanation:
      "UDDI joue le rôle d'annuaire permettant la découverte et la publication des Web Services.",
  },
  {
    id: 'q104',
    question: "Laquelle de ces affirmations est FAUSSE concernant les Web Services ?",
    options: [
      "Les Web Services sont associés à une URL sur le web",
      "Les Web Services sont auto-descriptifs grâce à XML",
      "Les Web Services nécessitent que le client utilise le même langage de programmation que le fournisseur",
      "Les Web Services sont accessibles via des protocoles internet standard",
    ],
    correctAnswer: 2,
    explanation:
      "C'est FAUX : les Web Services sont accessibles indépendamment des technologies d'implémentation. Le client n'a pas à utiliser le même langage que le fournisseur.",
  },
  {
    id: 'q105',
    question: "Qu'est-ce que la 'granularité variable' d'un service signifie ?",
    options: [
      "La vitesse de réponse du service peut varier",
      "Un service peut être très simple (opération unique) ou très complexe (processus métier complet)",
      "Le service peut s'adapter à différents formats de données",
      "Le service peut fonctionner à différentes fréquences",
    ],
    correctAnswer: 1,
    explanation:
      "La granularité variable signifie qu'un service peut avoir différents niveaux de complexité, d'une simple opération à un processus métier complet.",
  },
  {
    id: 'q106',
    question: "Le registre UDDI est-il toujours public de nos jours ?",
    options: [
      "Oui, il est toujours accessible publiquement sur Internet",
      "Non, les registres sont majoritairement privés aujourd'hui",
      "Il n'existe plus du tout",
      "Il est partiellement public, partiellement privé",
    ],
    correctAnswer: 1,
    explanation:
      "Bien que les registres publics existent (seekda.com, xmethods.net), les registres sont majoritairement privés (internes aux entreprises) à l'heure actuelle.",
  },
  {
    id: 'q107',
    question: "Quelle est la relation entre JAX-WS et JAXB ?",
    options: [
      "JAX-WS et JAXB sont des technologies concurrentes et indépendantes",
      "JAX-WS s'appuie sur JAXB pour le traitement XML (conversion objet Java ↔ XML)",
      "JAXB s'appuie sur JAX-WS pour la communication réseau",
      "JAX-WS remplace JAXB dans Java EE 7",
    ],
    correctAnswer: 1,
    explanation:
      "JAX-WS s'appuie sur JAXB pour le traitement du XML : JAXB gère le marshalling/unmarshalling des objets Java en XML.",
  },
  {
    id: 'q108',
    question: "Dans quel fichier WSDL trouve-t-on l'élément <soap:address location=\"...\"> ?",
    options: [
      "Dans l'élément <portType>",
      "Dans l'élément <binding>",
      "Dans l'élément <port> (sous <service>)",
      "Dans l'élément <message>",
    ],
    correctAnswer: 2,
    explanation:
      "L'élément <soap:address location=\"...\"> se trouve dans l'élément <port>, lui-même enfant de <service>.",
  },
  {
    id: 'q109',
    question: "Dans un binding SOAP, que spécifie l'attribut 'transport' de <soap:binding> ?",
    options: [
      "Le format de sérialisation des données",
      "Le protocole de transport utilisé (ex : HTTP)",
      "Le nom du service Web",
      "La version de SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "L'attribut 'transport' de <soap:binding> spécifie le protocole de transport, typiquement http://schemas.xmlsoap.org/soap/http pour HTTP.",
  },
  {
    id: 'q110',
    question: "Qu'est-ce qu'une 'soapAction' dans un binding WSDL/SOAP ?",
    options: [
      "Un identifiant unique de la transaction SOAP",
      "Un en-tête HTTP qui indique l'intention du message SOAP",
      "Le nom du port utilisé pour la communication",
      "Un attribut de sécurité SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "La soapAction est un en-tête HTTP qui indique l'intention (l'opération cible) du message SOAP. Elle peut être vide ou contenir une URI.",
  },
  {
    id: 'q111',
    question: "Quel est l'avantage principal de l'architecture orientée services (SOA) par rapport aux architectures monolithiques ?",
    options: [
      "Les performances sont toujours meilleures en SOA",
      "Les services sont réutilisables, composables et indépendants, favorisant la flexibilité",
      "SOA élimine totalement le besoin de réseau",
      "SOA n'utilise pas de protocoles standard",
    ],
    correctAnswer: 1,
    explanation:
      "SOA favorise la réutilisabilité, la composabilité et l'indépendance des services, offrant une grande flexibilité par rapport aux architectures monolithiques.",
  },
  {
    id: 'q112',
    question: "Dans l'exemple de création d'un client Java, quel est l'URL du WSDL utilisé ?",
    options: [
      'http://localhost:8080/HelloWebService/HelloService',
      'http://localhost:8080/HelloWebService/HelloService?WSDL',
      'http://localhost:8080/wsdl/HelloService.wsdl',
      'http://hello/HelloService?wsdl=true',
    ],
    correctAnswer: 1,
    explanation:
      "L'URL du WSDL est http://localhost:8080/HelloWebService/HelloService?WSDL.",
  },
  {
    id: 'q113',
    question: "Dans l'exemple client Java, quel est le nom qualifié (QName) du service ?",
    options: [
      'new QName("http://hello/", "HelloPort")',
      'new QName("http://hello/", "HelloService")',
      'new QName("http://localhost/", "HelloService")',
      'new QName("http://wsdl/", "HelloServiceBinding")',
    ],
    correctAnswer: 1,
    explanation:
      "Le QName du service est new QName(\"http://hello/\", \"HelloService\").",
  },
  {
    id: 'q114',
    question: "Après avoir obtenu le portStub, comment invoque-t-on l'opération sayHello côté client Java ?",
    options: [
      'portStub.invoke("sayHello", "tutu tata")',
      'portStub.call("sayHello", args)',
      'portStub.sayHello("tutu tata")',
      'SOAP.send(portStub, "sayHello", "tutu tata")',
    ],
    correctAnswer: 2,
    explanation:
      "Après avoir obtenu le portStub, on appelle directement portStub.sayHello(\"tutu tata\") comme une méthode Java normale.",
  },
  {
    id: 'q115',
    question: "Quel est l'espace de noms du service Hello dans l'exemple Java du cours ?",
    options: [
      'http://localhost/',
      'http://helloservice/',
      'http://hello/',
      'http://www.hello.com/',
    ],
    correctAnswer: 2,
    explanation:
      "L'espace de noms du service Hello dans l'exemple est http://hello/.",
  },

  // ─── Questions supplémentaires sur les concepts ────────────────────────────
  {
    id: 'q116',
    question: "Quelle est la différence entre la famille WS-* et la famille RESTful ?",
    options: [
      "WS-* utilise SOAP/XML ; RESTful utilise HTTP directement avec des architectures plus simples",
      "WS-* est plus récent que RESTful",
      "RESTful utilise SOAP ; WS-* utilise REST",
      "Il n'y a aucune différence technique entre les deux",
    ],
    correctAnswer: 0,
    explanation:
      "La famille WS-* utilise SOAP/XML avec des standards comme WSDL, UDDI. La famille RESTful utilise HTTP directement avec une architecture plus simple (sans SOAP).",
  },
  {
    id: 'q117',
    question: "Pourquoi WSDL 2.0 est-il encore peu utilisé malgré sa publication en 2007 ?",
    options: [
      "Parce qu'il est moins expressif que WSDL 1.1",
      "Parce qu'il est encore peu supporté par les outils",
      "Parce qu'il a été abandonné par le W3C",
      "Parce qu'il n'est pas compatible avec SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "WSDL 2.0 est encore peu utilisé car peu d'outils le supportent, contrairement à WSDL 1.1 qui est très largement supporté.",
  },
  {
    id: 'q118',
    question: "Dans un schéma XSD complexe dans WSDL, quel élément XSD sert à définir une séquence de champs ?",
    options: ['<xsd:choice>', '<xsd:all>', '<xsd:sequence>', '<xsd:group>'],
    correctAnswer: 2,
    explanation:
      "L'élément <xsd:sequence> définit une séquence ordonnée de champs dans un type complexe XSD.",
  },
  {
    id: 'q119',
    question: "Dans l'exemple WSDL avec type complexe, que représente minOccurs=\"0\" sur un élément XSD ?",
    options: [
      "L'élément peut apparaître au maximum 0 fois (interdit)",
      "L'élément est obligatoire",
      "L'élément est optionnel (peut ne pas apparaître)",
      "L'élément doit apparaître exactement 0 fois",
    ],
    correctAnswer: 2,
    explanation:
      "minOccurs=\"0\" signifie que l'élément est optionnel : il peut ne pas apparaître dans le message.",
  },
  {
    id: 'q120',
    question: "Qu'est-ce que l'interopérabilité dans le contexte des Web Services ?",
    options: [
      "La capacité d'un service à fonctionner sans connexion réseau",
      "La capacité de services développés avec des technologies différentes à communiquer entre eux",
      "La performance maximale d'un service Web",
      "La sécurité des échanges entre services",
    ],
    correctAnswer: 1,
    explanation:
      "L'interopérabilité est la capacité de services développés avec des technologies différentes (Java, .NET, PHP, etc.) à communiquer entre eux via des standards communs (SOAP, WSDL).",
  },
  {
    id: 'q121',
    question: "Quel problème résout principalement le format pivot XML dans les Web Services ?",
    options: [
      "La compression des données pour optimiser la bande passante",
      "La nécessité d'un langage commun pour décrire et échanger des données entre systèmes hétérogènes",
      "La sécurisation des communications",
      "La gestion des sessions utilisateurs",
    ],
    correctAnswer: 1,
    explanation:
      "XML comme format pivot résout le problème de la communication entre systèmes hétérogènes en fournissant un langage commun pour décrire et échanger les données.",
  },
  {
    id: 'q122',
    question: "Dans la séquence d'utilisation d'un Web Service, qu'est-ce que le client reçoit après la 'Recherche du service A' ?",
    options: [
      "Directement la réponse du service",
      "L'adresse du serveur qui héberge le service A",
      "Le contrat de service (WSDL)",
      "Un code d'authentification",
    ],
    correctAnswer: 1,
    explanation:
      "Après la recherche du service A dans l'annuaire, le client reçoit l'adresse du serveur qui héberge le service A.",
  },
  {
    id: 'q123',
    question: "Dans la séquence d'utilisation d'un Web Service, que récupère le client auprès du fournisseur avant d'envoyer une requête ?",
    options: [
      "Un token de sécurité",
      "Le code source du service",
      "Le contrat de service (WSDL)",
      "La configuration du serveur",
    ],
    correctAnswer: 2,
    explanation:
      "Le client récupère le contrat de service (WSDL) auprès du fournisseur pour savoir comment formater ses requêtes.",
  },
  {
    id: 'q124',
    question: "Lors du déploiement d'un service (côté fournisseur), quelle est l'action qui permet à d'autres d'y accéder via l'annuaire ?",
    options: [
      "Le déploiement sur le serveur uniquement",
      "La définition du contrat",
      "L'enregistrement (publication) du service dans l'annuaire",
      "Le développement du service",
    ],
    correctAnswer: 2,
    explanation:
      "C'est l'enregistrement (publication) du service dans l'annuaire qui permet aux autres de le découvrir.",
  },
  {
    id: 'q125',
    question: "Qu'est-ce que la 'composabilité' d'un service ?",
    options: [
      "La capacité du service à être réparti sur plusieurs serveurs",
      "La capacité du service à être combiné avec d'autres services pour créer des services plus complexes",
      "La capacité du service à s'adapter à différents formats de données",
      "La capacité du service à fonctionner sans état",
    ],
    correctAnswer: 1,
    explanation:
      "La composabilité est la capacité d'un service à être combiné avec d'autres services pour créer des services ou des processus métier plus complexes.",
  },
  {
    id: 'q126',
    question: "Quel est le rôle du serveur d'applications Java EE dans l'implémentation WS-* ?",
    options: [
      "Stocker les fichiers WSDL uniquement",
      "Exécuter les opérations JAX-WS côté fournisseur",
      "Agir comme un annuaire UDDI",
      "Convertir les messages SOAP en REST",
    ],
    correctAnswer: 1,
    explanation:
      "Le serveur d'applications Java EE exécute les opérations JAX-WS côté fournisseur.",
  },
  {
    id: 'q127',
    question: "Dans un fichier WSDL, l'élément <portType> contient quels sous-éléments ?",
    options: [
      "<service> et <port>",
      "<binding> et <transport>",
      "<operation> (avec <input> et <output>)",
      "<message> et <part>",
    ],
    correctAnswer: 2,
    explanation:
      "L'élément <portType> contient des éléments <operation>, chacun contenant des éléments <input> et/ou <output>.",
  },
  {
    id: 'q128',
    question: "Comment les technologies côté client et côté fournisseur peuvent-elles différer dans les Web Services ?",
    options: [
      "Elles ne peuvent pas différer : les deux doivent utiliser Java",
      "Côté fournisseur doit être Java, côté client peut être n'importe quoi",
      "Les deux peuvent utiliser n'importe quelle technologie (Java, .NET, PHP, etc.) grâce à l'interopérabilité",
      "Côté client doit être .NET, côté fournisseur peut être n'importe quoi",
    ],
    correctAnswer: 2,
    explanation:
      "Grâce à l'interopérabilité, les technologies côté client et côté fournisseur peuvent être complètement différentes (Java, .NET, PHP, etc.).",
  },
  {
    id: 'q129',
    question: "Qu'est-ce que la 'couche de traitement XML' dans le contexte des Web Services ?",
    options: [
      "Une couche logicielle chargée de stocker les données XML",
      "La couche chargée de sérialiser/désérialiser les messages SOAP et de gérer les protocoles HTTP/XML",
      "Un éditeur XML intégré au serveur d'application",
      "Une base de données XML native",
    ],
    correctAnswer: 1,
    explanation:
      "La couche de traitement XML est la couche logicielle chargée de sérialiser/désérialiser les messages (marshalling/unmarshalling SOAP) et de gérer les aspects protocolaires HTTP/XML.",
  },
  {
    id: 'q130',
    question: "Dans un message SOAP avec Header, où sont placées les informations de transaction ou de sécurité ?",
    options: [
      "Dans le <Body>",
      "Dans le <Envelope> directement",
      "Dans le <Header>",
      "Dans un attribut de l'<Envelope>",
    ],
    correctAnswer: 2,
    explanation:
      "Les informations non applicatives comme la sécurité ou les identifiants de transaction sont placées dans le <Header> du message SOAP.",
  },
  {
    id: 'q131',
    question: "Dans l'exemple SOAP du cours, quel est l'identifiant de transaction mentionné dans le Header ?",
    options: ['5678', '9999', '1234', '0001'],
    correctAnswer: 2,
    explanation:
      "Dans l'exemple du cours, le Header contient <transId>1234</transId>.",
  },
  {
    id: 'q132',
    question: "Dans l'exemple SOAP du cours, quels sont les deux paramètres de l'opération 'add' dans le Body ?",
    options: [
      'varx=1, varY=2',
      'varx=3, varY=4',
      'varx=5, varY=6',
      'varx=10, varY=20',
    ],
    correctAnswer: 1,
    explanation:
      "Dans l'exemple, le Body contient <varx>3</varx> et <varY>4</varY> pour l'opération 'add'.",
  },
  {
    id: 'q133',
    question: "Pourquoi dit-on que les Web Services sont 'auto-descriptifs' ?",
    options: [
      "Parce que le service peut s'installer automatiquement sur le client",
      "Parce que le service expose sa description (WSDL) accessible automatiquement, souvent via l'URL + ?WSDL",
      "Parce que le service génère automatiquement sa documentation PDF",
      "Parce que le service envoie automatiquement son code source au client",
    ],
    correctAnswer: 1,
    explanation:
      "Les Web Services sont auto-descriptifs grâce à XML/WSDL : leur description (interface, contrat) est accessible et lisible, souvent via l'URL du service + ?WSDL.",
  },
  {
    id: 'q134',
    question: "Qu'est-ce que le 'contrat de service' dans les Web Services ?",
    options: [
      "Un accord juridique entre le client et le fournisseur",
      "Le fichier WSDL qui décrit l'interface publique du service (opérations, paramètres, protocole)",
      "Le code source du service partagé entre client et fournisseur",
      "La facture de l'utilisation du service",
    ],
    correctAnswer: 1,
    explanation:
      "Le contrat de service est le fichier WSDL qui décrit l'interface publique du service : les opérations disponibles, les paramètres, les protocoles et les adresses.",
  },
  {
    id: 'q135',
    question: "Dans la technologie WS-*, que signifie le '*' dans 'WS-*' ?",
    options: [
      "Un multiplicateur de performances",
      "La famille de standards complémentaires à SOAP/WSDL (WS-Security, WS-Transaction, etc.)",
      "Un wildcard signifiant que n'importe quel protocole peut être utilisé",
      "La version 'universelle' de Web Services",
    ],
    correctAnswer: 1,
    explanation:
      "WS-* désigne la famille de standards complémentaires aux Web Services SOAP/WSDL de base : WS-Security, WS-Transaction, WS-ReliableMessaging, etc.",
  },
  {
    id: 'q136',
    question: "Quel est l'avantage de générer automatiquement le stub client à partir du WSDL ?",
    options: [
      "On évite d'avoir à écrire manuellement tout le code de sérialisation SOAP, ce qui réduit les erreurs",
      "Le service devient plus rapide",
      "La sécurité est automatiquement configurée",
      "On n'a plus besoin de déployer le service sur un serveur",
    ],
    correctAnswer: 0,
    explanation:
      "La génération automatique du stub évite d'écrire manuellement tout le code de sérialisation/désérialisation SOAP, réduisant les erreurs et le temps de développement.",
  },
  {
    id: 'q137',
    question: "Quelle propriété XSD permet de définir le nombre minimum d'occurrences d'un élément dans un message ?",
    options: ['maxOccurs', 'required', 'minOccurs', 'nillable'],
    correctAnswer: 2,
    explanation:
      "L'attribut minOccurs définit le nombre minimum d'occurrences d'un élément dans un schéma XSD.",
  },
  {
    id: 'q138',
    question: "Quelle est la valeur par défaut de minOccurs dans un schéma XSD si non spécifié ?",
    options: ['0', '1', '-1', 'unbounded'],
    correctAnswer: 1,
    explanation:
      "La valeur par défaut de minOccurs est 1, ce qui signifie que l'élément est obligatoire.",
  },
  {
    id: 'q139',
    question: "Que désigne le terme 'endpoint' dans le contexte des Web Services ?",
    options: [
      "La fin d'une transaction SOAP",
      "L'URL concrète à laquelle un service est accessible",
      "Le dernier champ d'un message WSDL",
      "Le serveur de base de données du fournisseur",
    ],
    correctAnswer: 1,
    explanation:
      "Un endpoint est l'URL concrète (adresse réseau) à laquelle un Web Service est accessible.",
  },
  {
    id: 'q140',
    question: "Comment un client peut-il découvrir l'interface d'un Web Service sans passer par un annuaire UDDI ?",
    options: [
      "Il ne peut pas, UDDI est obligatoire",
      "En accédant directement à l'URL du WSDL du service (ex : http://server/service?WSDL)",
      "En devinant les opérations disponibles",
      "En lisant le code source du service",
    ],
    correctAnswer: 1,
    explanation:
      "Un client peut accéder directement à l'URL WSDL du service (ex: http://server/service?WSDL) sans passer par UDDI, surtout dans un contexte hors annuaire.",
  },
  {
    id: 'q141',
    question: "Dans le modèle 'hors annuaire', comment le client connaît-il l'adresse du fournisseur ?",
    options: [
      "Par l'annuaire UDDI",
      "Par une communication directe, email, documentation, etc.",
      "Par le protocole SOAP automatiquement",
      "Par un DNS spécial pour les Web Services",
    ],
    correctAnswer: 1,
    explanation:
      "Dans le modèle hors annuaire, le client connaît l'adresse du fournisseur par des moyens directs (documentation, email, etc.) sans passer par UDDI.",
  },
  {
    id: 'q142',
    question: "Quel type de couplage WS-Security introduit dans les Web Services ?",
    options: [
      "Un couplage fort",
      "Un mécanisme de sécurité (authentification, chiffrement) au niveau message",
      "Un protocole de compression",
      "Un système de cache",
    ],
    correctAnswer: 1,
    explanation:
      "WS-Security (standard OASIS) introduit des mécanismes de sécurité (authentification, chiffrement, signature) au niveau du message SOAP.",
  },
  {
    id: 'q143',
    question: "BPEL (Business Process Execution Language) est un standard de quelle organisation ?",
    options: ['W3C', 'ISO', 'OASIS', 'IETF'],
    correctAnswer: 2,
    explanation:
      "BPEL est un standard OASIS, utilisé pour orchestrer des Web Services dans des processus métier.",
  },
  {
    id: 'q144',
    question: "Qu'est-ce que WSRP (Web Services for Remote Portlets) ?",
    options: [
      "Un protocole de sécurité pour Web Services",
      "Un standard OASIS pour exposer des portlets (composants UI) en tant que Web Services",
      "Un format de description de services alternatif à WSDL",
      "Un registre de services concurrent à UDDI",
    ],
    correctAnswer: 1,
    explanation:
      "WSRP est un standard OASIS permettant d'exposer des portlets (composants d'interface utilisateur) en tant que Web Services.",
  },
  {
    id: 'q145',
    question: "Qu'est-ce que SAML dans le contexte des Web Services ?",
    options: [
      "Un langage de balisage pour les services",
      "Security Assertion Markup Language : un standard pour échanger des informations d'authentification",
      "Service Access Management Language : un protocole de contrôle d'accès",
      "Simple API for Messaging Language : un format alternatif à SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "SAML (Security Assertion Markup Language) est un standard OASIS pour échanger des informations d'authentification et d'autorisation entre services.",
  },
  {
    id: 'q146',
    question: "Dans un fichier WSDL, l'attribut 'name' de l'élément <operation> correspond à quoi ?",
    options: [
      "Au nom de la méthode Java annotée @WebMethod côté fournisseur",
      "Au nom du port exposé par le service",
      "Au nom du message de réponse",
      "Au nom du type de données retourné",
    ],
    correctAnswer: 0,
    explanation:
      "L'attribut 'name' de l'élément <operation> correspond au nom de l'opération (méthode) exposée, qui correspond à la méthode Java annotée @WebMethod.",
  },
  {
    id: 'q147',
    question: "Que se passe-t-il si l'implémentation d'un Web Service change mais que l'interface WSDL reste identique ?",
    options: [
      "Tous les clients doivent être recompilés",
      "Les clients existants continuent de fonctionner sans modification",
      "Le service doit être republié avec un nouveau nom",
      "L'annuaire UDDI doit être vidé et recréé",
    ],
    correctAnswer: 1,
    explanation:
      "C'est l'un des avantages fondamentaux : si le contrat (WSDL) ne change pas, les clients existants continuent de fonctionner sans modification, grâce au couplage faible.",
  },
  {
    id: 'q148',
    question: "Quel est le rôle de l'attribut 'operationName' dans l'annotation @WebMethod ?",
    options: [
      "Il définit le nom de la classe exposée comme service",
      "Il définit le nom de l'opération tel qu'il apparaît dans le WSDL (peut différer du nom de la méthode Java)",
      "Il définit le protocole utilisé pour l'opération",
      "Il définit le type de retour de l'opération",
    ],
    correctAnswer: 1,
    explanation:
      "L'attribut operationName de @WebMethod définit le nom de l'opération dans le WSDL, qui peut différer du nom de la méthode Java.",
  },
  {
    id: 'q149',
    question: "Quel est le rôle de l'attribut 'serviceName' dans l'annotation @WebService ?",
    options: [
      "Il définit l'URL du service",
      "Il définit le nom du service tel qu'il apparaît dans le WSDL",
      "Il définit le protocole de transport",
      "Il définit le type de sécurité",
    ],
    correctAnswer: 1,
    explanation:
      "L'attribut serviceName de @WebService définit le nom du service tel qu'il apparaît dans le WSDL (élément <service name=\"...\">).",
  },
  {
    id: 'q150',
    question: "Dans le contexte WS-*, que signifie 'WS-Transactions' ?",
    options: [
      "Un protocole de paiement en ligne",
      "Un standard OASIS pour gérer les transactions distribuées entre Web Services",
      "Un format de log des transactions SOAP",
      "Un outil de monitoring des échanges SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "WS-Transactions est un standard OASIS pour gérer les transactions distribuées entre Web Services, garantissant l'atomicité et la cohérence des opérations.",
  },

  // ─── Questions avancées ────────────────────────────────────────────────────
  {
    id: 'q151',
    question: "Quelle est la différence entre les styles 'document' et 'rpc' dans le binding WSDL/SOAP ?",
    options: [
      "Il n'y a aucune différence fonctionnelle",
      "'rpc' encapsule les paramètres dans un élément wrapper nommé comme l'opération ; 'document' envoie directement les éléments XML définis dans le schéma",
      "'document' utilise HTTP GET ; 'rpc' utilise HTTP POST",
      "'rpc' est plus sécurisé que 'document'",
    ],
    correctAnswer: 1,
    explanation:
      "En style 'rpc', les paramètres sont encapsulés dans un wrapper nommé d'après l'opération. En style 'document', les éléments XML définis dans le schéma sont envoyés directement dans le Body.",
  },
  {
    id: 'q152',
    question: "Que signifie 'encoded' vs 'literal' pour l'attribut 'use' dans le binding SOAP ?",
    options: [
      "'encoded' = données chiffrées ; 'literal' = données en clair",
      "'literal' = les données sont sérialisées selon le schéma XSD défini ; 'encoded' = des règles d'encodage SOAP spécifiques sont appliquées",
      "'encoded' = UTF-8 ; 'literal' = ASCII",
      "'literal' = données compressées ; 'encoded' = données non compressées",
    ],
    correctAnswer: 1,
    explanation:
      "'literal' signifie que les données sont sérialisées conformément au schéma XSD défini. 'encoded' signifie que des règles d'encodage SOAP propres sont appliquées (section 5 de SOAP 1.1). Le style document/literal est recommandé.",
  },
  {
    id: 'q153',
    question: "Qu'est-ce qu'un Fault dans un message SOAP ?",
    options: [
      "Une erreur de configuration du serveur d'application",
      "Un élément spécial du <Body> SOAP permettant de retourner des informations d'erreur au client",
      "Un mécanisme de compression des messages SOAP",
      "Un type de binding WSDL pour la gestion des erreurs",
    ],
    correctAnswer: 1,
    explanation:
      "Un Fault SOAP est un élément spécial pouvant être placé dans le <Body> d'un message de réponse SOAP pour indiquer une erreur de traitement au client.",
  },
  {
    id: 'q154',
    question: "Dans WSDL, peut-on définir une opération qui n'a que des paramètres en entrée (one-way) ?",
    options: [
      "Non, toute opération doit avoir un input et un output",
      "Oui, WSDL supporte les opérations one-way (uniquement <input>), request-response, solicit-response et notification",
      "Seulement en WSDL 2.0",
      "Seulement si on utilise le style 'rpc'",
    ],
    correctAnswer: 1,
    explanation:
      "WSDL supporte plusieurs modèles d'échange de messages : one-way (entrée seulement), request-response (entrée + sortie), solicit-response (sortie + entrée), et notification (sortie seulement).",
  },
  {
    id: 'q155',
    question: "Quel est le lien entre les annotations Java JAX-WS et le fichier WSDL généré ?",
    options: [
      "Il n'y a aucun lien, le WSDL est écrit manuellement",
      "Les annotations JAX-WS (@WebService, @WebMethod, @WebParam) correspondent directement aux éléments WSDL générés",
      "Les annotations JAX-WS génèrent uniquement le code client",
      "Les annotations JAX-WS sont utilisées uniquement pour la sécurité",
    ],
    correctAnswer: 1,
    explanation:
      "Il existe une correspondance directe (JAX-WS) entre les annotations Java et les éléments WSDL : @WebService → <service>/<portType>, @WebMethod → <operation>, @WebParam → <part>.",
  },
  {
    id: 'q156',
    question: "Qu'est-ce que l'espace de noms cible (targetNamespace) dans un fichier WSDL ?",
    options: [
      "L'URL du serveur où est déployé le service",
      "L'espace de noms XML qui identifie de manière unique ce fichier WSDL et ses éléments",
      "La version du protocole SOAP utilisé",
      "L'espace disque requis pour le déploiement",
    ],
    correctAnswer: 1,
    explanation:
      "Le targetNamespace est l'espace de noms XML qui identifie de manière unique le fichier WSDL et ses éléments définis (portType, message, etc.).",
  },
  {
    id: 'q157',
    question: "Quel préfixe 'tns' dans les références WSDL (ex: tns:Hello) désigne-t-il ?",
    options: [
      "Transport Network Service",
      "this namespace (l'espace de noms cible du fichier WSDL lui-même)",
      "Type Name System",
      "Target Node Service",
    ],
    correctAnswer: 1,
    explanation:
      "Le préfixe 'tns' (this namespace) désigne l'espace de noms cible (targetNamespace) du fichier WSDL lui-même.",
  },
  {
    id: 'q158',
    question: "Comment JAX-WS gère-t-il le déploiement d'un Web Service sur un serveur d'application Java EE ?",
    options: [
      "En packagant le service dans un fichier JAR simple",
      "En packagant le service dans un fichier WAR ou EAR, déployé sur le serveur d'application qui exécute les opérations JAX-WS",
      "En téléchargeant le service directement depuis UDDI",
      "En utilisant un fichier de configuration XML séparé uniquement",
    ],
    correctAnswer: 1,
    explanation:
      "Le service JAX-WS est packagé dans un fichier WAR (ou EAR) et déployé sur le serveur d'application Java EE qui exécute les opérations JAX-WS.",
  },
  {
    id: 'q159',
    question: "Pourquoi est-il important de bien définir les espaces de noms dans un fichier WSDL ?",
    options: [
      "Pour réduire la taille du fichier",
      "Pour éviter les conflits de noms entre éléments de différentes sources et garantir l'unicité des identifiants",
      "Pour améliorer les performances du service",
      "Pour la compatibilité avec les vieux navigateurs",
    ],
    correctAnswer: 1,
    explanation:
      "Les espaces de noms XML permettent d'éviter les conflits de noms entre éléments provenant de différentes sources et garantissent l'unicité des identifiants dans un fichier WSDL.",
  },
  {
    id: 'q160',
    question: "Dans le contexte JAXB, qu'est-ce que la 'compilation' ?",
    options: [
      "La compilation du code Java source en bytecode",
      "La correspondance entre un XML Schema et une classe Java annotée (génération de classes à partir du schéma)",
      "La transformation d'un fichier WSDL en code Java",
      "La génération d'un fichier WAR déployable",
    ],
    correctAnswer: 1,
    explanation:
      "Dans JAXB, la compilation désigne la correspondance/génération entre un XML Schema (XSD) et des classes Java annotées.",
  },

  // ─── Scénarios pratiques ───────────────────────────────────────────────────
  {
    id: 'q161',
    question: "Un développeur veut créer un Web Service Java exposant une méthode 'calculerTotal(int quantite, double prix)'. Quelle annotation doit-il utiliser sur la méthode ?",
    options: [
      "@Expose(name=\"calculerTotal\")",
      "@WebMethod(operationName=\"calculerTotal\")",
      "@ServiceOperation(\"calculerTotal\")",
      "@PublicMethod(\"calculerTotal\")",
    ],
    correctAnswer: 1,
    explanation:
      "L'annotation @WebMethod(operationName=\"calculerTotal\") est utilisée pour exposer la méthode Java comme opération d'un Web Service.",
  },
  {
    id: 'q162',
    question: "Un client veut utiliser un Web Service dont il connaît l'URL du WSDL. Quelle est la première classe JAX-WS à instancier ?",
    options: ['JAXBContext', 'WebServiceClient', 'javax.xml.ws.Service', 'SOAPConnection'],
    correctAnswer: 2,
    explanation:
      "La première classe à instancier est javax.xml.ws.Service, créée avec Service.create(wsdlURL, serviceName).",
  },
  {
    id: 'q163',
    question: "Dans quel cas utilise-t-on l'approche 'WSDL first' (contrat d'abord) dans WS-* ?",
    options: [
      "Quand on veut créer rapidement un prototype",
      "Quand l'interface du service doit être définie indépendamment de son implémentation, pour favoriser l'interopérabilité",
      "Uniquement pour les services RESTful",
      "Quand on utilise uniquement des types de données simples",
    ],
    correctAnswer: 1,
    explanation:
      "L'approche 'WSDL first' est utilisée quand l'interface doit être définie indépendamment de l'implémentation, favorisant l'interopérabilité et le design par contrat.",
  },
  {
    id: 'q164',
    question: "Dans quel cas utilise-t-on l'approche 'Java first' (code d'abord) dans WS-* ?",
    options: [
      "Quand l'interopérabilité multi-plateforme est critique",
      "Quand on développe rapidement un service à partir d'une implémentation Java existante, avec génération automatique du WSDL",
      "Uniquement pour les grands projets d'entreprise",
      "Quand le client impose le format des messages",
    ],
    correctAnswer: 1,
    explanation:
      "L'approche 'Java first' est utilisée quand on veut développer rapidement à partir d'une implémentation Java existante, JAX-WS générant automatiquement le WSDL à partir des annotations.",
  },
  {
    id: 'q165',
    question: "Comment appelle-t-on la capacité d'un Web Service à être découvert automatiquement sur le réseau grâce à UDDI ?",
    options: [
      "Auto-complétion",
      "Découverte dynamique de services",
      "Déploiement automatique",
      "Intégration continue",
    ],
    correctAnswer: 1,
    explanation:
      "La capacité à être découvert automatiquement sur le réseau grâce à l'annuaire s'appelle la découverte dynamique de services.",
  },
  {
    id: 'q166',
    question: "Quel problème de la composition peut survenir lors de l'utilisation de plusieurs Web Services dans un processus métier ?",
    options: [
      "Les services ne peuvent pas communiquer entre eux",
      "La gestion des transactions distribuées et la cohérence des données entre services",
      "Les services ne supportent pas XML",
      "SOAP n'est pas extensible",
    ],
    correctAnswer: 1,
    explanation:
      "Lors de la composition de services, la gestion des transactions distribuées (atomicité, cohérence) est un problème clé, adressé par des standards comme WS-Transactions.",
  },
  {
    id: 'q167',
    question: "Pourquoi les Web Services peuvent-ils être qualifiés d''indépendants' ?",
    options: [
      "Parce qu'ils ne nécessitent pas de réseau pour fonctionner",
      "Parce que leur implémentation interne peut changer sans affecter les consommateurs, tant que le contrat reste le même",
      "Parce qu'ils fonctionnent sans serveur d'application",
      "Parce qu'ils ne dépendent d'aucun standard",
    ],
    correctAnswer: 1,
    explanation:
      "Les services sont indépendants car leur implémentation peut évoluer sans impacter les consommateurs, grâce au contrat (interface) stable.",
  },
  {
    id: 'q168',
    question: "Quelle est la signification du préfixe 'xsd:' dans les types de données WSDL comme 'xsd:string' ?",
    options: [
      "External Service Definition",
      "Il désigne l'espace de noms XML Schema (http://www.w3.org/2001/XMLSchema)",
      "eXtensible Service Data",
      "XML Schema Domain",
    ],
    correctAnswer: 1,
    explanation:
      "Le préfixe 'xsd:' désigne l'espace de noms XML Schema Definition (http://www.w3.org/2001/XMLSchema), et 'xsd:string' est le type chaîne de caractères de XML Schema.",
  },
  {
    id: 'q169',
    question: "Quel avantage offre l'utilisation de HTTP comme protocole de transport pour les Web Services SOAP ?",
    options: [
      "HTTP garantit la livraison des messages",
      "HTTP traverse facilement les firewalls et proxies (port 80/443), facilitant le déploiement en entreprise",
      "HTTP chiffre automatiquement les messages",
      "HTTP compresse automatiquement les messages SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "L'utilisation de HTTP comme transport est avantageuse car HTTP traverse facilement les firewalls et proxies d'entreprise (port 80/443), contrairement à d'autres protocoles.",
  },
  {
    id: 'q170',
    question: "Qu'est-ce que BPEL permet de faire avec les Web Services ?",
    options: [
      "Sécuriser les échanges SOAP",
      "Orchestrer et composer plusieurs Web Services en processus métier complexes",
      "Remplacer WSDL comme langage de description",
      "Gérer les registres UDDI",
    ],
    correctAnswer: 1,
    explanation:
      "BPEL (Business Process Execution Language) permet d'orchestrer et de composer plusieurs Web Services pour créer des processus métier complexes.",
  },
  {
    id: 'q171',
    question: "Dans le contexte des Web Services, qu'est-ce que la 'réutilisabilité' ?",
    options: [
      "La capacité à recycler le matériel serveur",
      "La capacité d'un service à être utilisé par plusieurs applications ou processus différents sans modification",
      "La capacité à réutiliser le code source d'un service dans un autre service",
      "La possibilité de copier le WSDL dans d'autres projets",
    ],
    correctAnswer: 1,
    explanation:
      "La réutilisabilité signifie qu'un service peut être utilisé par plusieurs applications ou processus différents sans modification, maximisant le retour sur investissement.",
  },
  {
    id: 'q172',
    question: "Pourquoi le cours mentionne-t-il 'Attention aux espaces de noms !' lors de la définition de types complexes dans WSDL ?",
    options: [
      "Parce que les espaces de noms augmentent la taille du fichier WSDL",
      "Parce que des erreurs de référencement entre les espaces de noms du WSDL et du XSD peuvent causer des erreurs lors de la génération et de l'exécution",
      "Parce que les espaces de noms ralentissent le parsing XML",
      "Parce que les espaces de noms ne sont pas supportés dans WSDL 1.1",
    ],
    correctAnswer: 1,
    explanation:
      "Des erreurs d'espaces de noms (mauvaises références entre le WSDL et les schémas XSD) sont une source fréquente d'erreurs lors de la génération de code et de l'exécution du service.",
  },
  {
    id: 'q173',
    question: "Quel rôle joue le serveur d'application Java EE dans l'architecture WS-* côté fournisseur ?",
    options: [
      "Il stocke uniquement les fichiers WSDL",
      "Il exécute les opérations JAX-WS, gère le cycle de vie du service, parse les messages SOAP et route les appels",
      "Il agit comme un registre UDDI",
      "Il génère automatiquement le code client",
    ],
    correctAnswer: 1,
    explanation:
      "Le serveur d'application Java EE exécute les opérations JAX-WS, gère le cycle de vie du service, parse les messages SOAP entrants et route les appels vers les méthodes Java correspondantes.",
  },
  {
    id: 'q174',
    question: "Quelle est la relation entre SOAP et HTTP dans les Web Services ?",
    options: [
      "SOAP remplace HTTP comme protocole de transport",
      "SOAP est un protocole de messagerie transporté sur HTTP (SOAP enveloppé dans HTTP)",
      "HTTP est une partie du standard SOAP",
      "SOAP et HTTP sont deux alternatives pour le même rôle",
    ],
    correctAnswer: 1,
    explanation:
      "SOAP est un protocole de messagerie XML qui est transporté sur HTTP : le message SOAP constitue le corps (body) d'une requête ou réponse HTTP.",
  },
  {
    id: 'q175',
    question: "Qu'est-ce qu'un 'Web Service auto-descriptif' signifie concrètement ?",
    options: [
      "Le service peut s'installer lui-même sur le client",
      "Le service expose via WSDL toutes les informations nécessaires à son utilisation (opérations, paramètres, protocole, adresse)",
      "Le service génère automatiquement une interface graphique",
      "Le service se documente lui-même dans un annuaire public",
    ],
    correctAnswer: 1,
    explanation:
      "Un service auto-descriptif expose via WSDL toutes les informations nécessaires à son utilisation : opérations disponibles, paramètres, protocole de transport et adresse de déploiement.",
  },

  // ─── Questions de récapitulation ───────────────────────────────────────────
  {
    id: 'q176',
    question: "Résumé : Quelle est la pile technologique complète WS-* avec Java (du bas vers le haut) ?",
    options: [
      "JSON → REST → Spring → Tomcat",
      "HTTP → SOAP (XML) → WSDL → UDDI, avec Java EE + JAX-WS + JAXB pour l'implémentation",
      "TCP → RMI → CORBA → DCOM",
      "FTP → XML-RPC → WSDL → JAX-RS",
    ],
    correctAnswer: 1,
    explanation:
      "La pile WS-* complète est : HTTP comme transport, SOAP/XML pour les messages, WSDL pour le contrat, UDDI pour l'annuaire, implémentés en Java avec JAX-WS et JAXB.",
  },
  {
    id: 'q177',
    question: "Quel acteur dans l'architecture Web Services doit connaître à la fois SOAP et WSDL ?",
    options: [
      "Uniquement le fournisseur",
      "Uniquement l'annuaire",
      "Le client et le fournisseur (les deux utilisent SOAP ; le fournisseur génère le WSDL, le client le consomme)",
      "Uniquement l'administrateur réseau",
    ],
    correctAnswer: 2,
    explanation:
      "Le client et le fournisseur doivent tous deux connaître SOAP (pour la communication) et WSDL (le fournisseur le génère/expose, le client le consulte pour savoir comment communiquer).",
  },
  {
    id: 'q178',
    question: "Quelle est la principale limitation de SOAP par rapport aux architectures RESTful ?",
    options: [
      "SOAP ne supporte pas HTTP",
      "SOAP est plus verbeux et plus complexe que REST grâce à l'enveloppe XML et les standards WS-*",
      "SOAP n'est pas interopérable",
      "SOAP ne peut pas transporter des données structurées",
    ],
    correctAnswer: 1,
    explanation:
      "SOAP est plus verbeux (enveloppe XML obligatoire, namespaces, etc.) et plus complexe que REST, ce qui peut être un inconvénient pour des services simples.",
  },
  {
    id: 'q179',
    question: "Dans quel cas préfère-t-on WS-* à RESTful ?",
    options: [
      "Pour des APIs web publiques simples",
      "Pour des environnements d'entreprise nécessitant des fonctionnalités avancées (sécurité, transactions, orchestration) via les standards WS-*",
      "Pour les applications mobiles légères",
      "Pour remplacer les bases de données",
    ],
    correctAnswer: 1,
    explanation:
      "WS-* est préféré dans des environnements d'entreprise nécessitant des fonctionnalités avancées : sécurité (WS-Security), transactions (WS-Transactions), orchestration (BPEL), etc.",
  },
  {
    id: 'q180',
    question: "Que représente le triangle 'Découverte - Publication - Utilisation' dans les Web Services ?",
    options: [
      "Les trois phases du développement d'un Web Service",
      "Les trois interactions fondamentales entre les acteurs (client, annuaire, fournisseur) dans l'écosystème Web Services",
      "Les trois versions du protocole SOAP",
      "Les trois types de registres UDDI",
    ],
    correctAnswer: 1,
    explanation:
      "Le triangle représente les trois interactions fondamentales : le fournisseur Publie dans l'annuaire, le client Découvre dans l'annuaire, puis le client Utilise directement le fournisseur.",
  },

  // ─── Questions complémentaires finales ─────────────────────────────────────
  {
    id: 'q181',
    question: "Quel est l'apport de JAXB dans la chaîne JAX-WS lors d'un appel de service ?",
    options: [
      "JAXB gère la connexion réseau HTTP",
      "JAXB convertit automatiquement les paramètres Java en éléments XML pour le corps SOAP (marshalling) et inversement pour la réponse (unmarshalling)",
      "JAXB génère le fichier WSDL",
      "JAXB gère l'enregistrement dans UDDI",
    ],
    correctAnswer: 1,
    explanation:
      "JAXB intervient pour convertir les objets Java en XML (marshalling) lors de l'envoi, et reconvertir le XML en objets Java (unmarshalling) lors de la réception de la réponse.",
  },
  {
    id: 'q182',
    question: "Dans l'exemple WSDL du cours, quel est le nom du PortType (interface fonctionnelle) ?",
    options: ['HelloPort', 'SayHello', 'HelloPortBinding', 'Hello'],
    correctAnswer: 3,
    explanation:
      "Le PortType s'appelle 'Hello' (<portType name=\"Hello\">).",
  },
  {
    id: 'q183',
    question: "Dans l'exemple WSDL du cours, quel est le nom du Binding ?",
    options: ['HelloPort', 'HelloBinding', 'HelloPortBinding', 'HelloServiceBinding'],
    correctAnswer: 2,
    explanation:
      "Le Binding s'appelle 'HelloPortBinding' (<binding name=\"HelloPortBinding\" type=\"tns:Hello\">).",
  },
  {
    id: 'q184',
    question: "Dans l'exemple WSDL du cours, quel est le nom du Service ?",
    options: ['HelloPort', 'HelloService', 'HelloWebService', 'SayHelloService'],
    correctAnswer: 1,
    explanation:
      "Le Service s'appelle 'HelloService' (<service name=\"HelloService\">).",
  },
  {
    id: 'q185',
    question: "Dans l'exemple WSDL du cours, quel est le nom du Port ?",
    options: ['HelloPortBinding', 'HelloServicePort', 'HelloPort', 'SayHelloPort'],
    correctAnswer: 2,
    explanation:
      "Le Port s'appelle 'HelloPort' (<port name=\"HelloPort\" binding=\"tns:HelloPortBinding\">).",
  },
  {
    id: 'q186',
    question: "Quelle est la valeur que l'on doit remplacer dans le WSDL généré pour spécifier l'URL réelle du service déployé ?",
    options: [
      'REPLACE_WITH_SERVICE_URL',
      'YOUR_URL_HERE',
      'REPLACE_WITH_ACTUAL_URL',
      'SERVICE_ENDPOINT_URL',
    ],
    correctAnswer: 2,
    explanation:
      "Dans le WSDL généré, la valeur 'REPLACE_WITH_ACTUAL_URL' dans <soap:address location=\"REPLACE_WITH_ACTUAL_URL\"/> doit être remplacée par l'URL réelle du service.",
  },
  {
    id: 'q187',
    question: "Quel est le rôle de l'élément <xsd:complexType> dans un schéma WSDL ?",
    options: [
      "Définir un type de données simple (chaîne, entier, etc.)",
      "Définir un type de données complexe composé de plusieurs éléments (structure)",
      "Définir le protocole de transport",
      "Définir le nom du service",
    ],
    correctAnswer: 1,
    explanation:
      "<xsd:complexType> définit un type de données complexe composé de plusieurs éléments, permettant de passer des structures de données riches dans les messages SOAP.",
  },
  {
    id: 'q188',
    question: "Qu'est-ce que le 'déploiement' d'un service dans le contexte des Web Services ?",
    options: [
      "L'action de publier le service dans l'annuaire UDDI",
      "L'action d'installer et de rendre opérationnel le service sur un serveur d'application",
      "L'action de générer le code à partir du WSDL",
      "L'action de définir le contrat du service",
    ],
    correctAnswer: 1,
    explanation:
      "Le déploiement consiste à installer et rendre opérationnel le service sur un serveur d'application, le rendant accessible via son URL.",
  },
  {
    id: 'q189',
    question: "Dans quel cas certaines étapes de création d'un Web Service ou d'un client peuvent-elles être automatisées ?",
    options: [
      "Uniquement pour les services REST",
      "Suivant les technologies utilisées, certaines tâches comme la génération du WSDL ou du stub client peuvent être automatisées par les outils",
      "Jamais, toutes les étapes doivent être réalisées manuellement",
      "Seulement pour les types de données simples",
    ],
    correctAnswer: 1,
    explanation:
      "Selon les technologies (JAX-WS, .NET WCF, etc.), de nombreuses tâches peuvent être automatisées : génération du WSDL à partir du code Java, génération du stub client à partir du WSDL, etc.",
  },
  {
    id: 'q190',
    question: "Qu'est-ce qui distingue un Web Service d'une API web classique ?",
    options: [
      "Un Web Service utilise uniquement HTTP GET",
      "Un Web Service est basé sur des standards ouverts (SOAP, WSDL, UDDI) garantissant l'interopérabilité, tandis qu'une API peut être propriétaire",
      "Un Web Service ne peut pas retourner de données JSON",
      "Un Web Service est toujours moins performant qu'une API classique",
    ],
    correctAnswer: 1,
    explanation:
      "Un Web Service (au sens WS-*) est basé sur des standards ouverts garantissant l'interopérabilité (SOAP, WSDL, UDDI). Une API web peut être propriétaire ou utiliser d'autres conventions.",
  },
  {
    id: 'q191',
    question: "Pourquoi l'interopérabilité est-elle un critère fondamental des Web Services ?",
    options: [
      "Pour réduire les coûts de matériel serveur",
      "Pour permettre l'intégration de systèmes hétérogènes (différents langages, plateformes, systèmes d'exploitation) dans les entreprises",
      "Pour améliorer la vitesse de traitement des requêtes",
      "Pour simplifier la conception des bases de données",
    ],
    correctAnswer: 1,
    explanation:
      "L'interopérabilité est fondamentale car les entreprises disposent souvent de systèmes hétérogènes (legacy, différentes plateformes) qu'il faut faire communiquer.",
  },
  {
    id: 'q192',
    question: "Dans un fichier WSDL, quelle est la hiérarchie correcte des éléments pour les informations techniques ?",
    options: [
      "<portType> → <binding> → <port> → <service>",
      "<service> → <port> → <binding> → <portType>",
      "<binding> → <service> → <port> → <portType>",
      "<port> → <portType> → <binding> → <service>",
    ],
    correctAnswer: 1,
    explanation:
      "La hiérarchie est : <service> contient des <port> qui référencent un <binding> qui référence un <portType>.",
  },
  {
    id: 'q193',
    question: "Quel mécanisme permet à JAX-WS de savoir quelle méthode Java appeler lorsqu'un message SOAP arrive ?",
    options: [
      "Le nom de la méthode Java doit être identique à l'URL du service",
      "La correspondance entre le nom de l'opération SOAP (dans le Body) et l'annotation @WebMethod(operationName=...)",
      "Le numéro de port TCP indique quelle méthode appeler",
      "L'en-tête HTTP Content-Type indique la méthode à appeler",
    ],
    correctAnswer: 1,
    explanation:
      "JAX-WS utilise la correspondance entre le nom de l'opération dans le message SOAP et les annotations @WebMethod pour router l'appel vers la bonne méthode Java.",
  },
  {
    id: 'q194',
    question: "Dans le contexte des Web Services, qu'est-ce qu'un 'Annuaire de services' (Service Registry) ?",
    options: [
      "Un outil de monitoring des performances des services",
      "Un répertoire centralisé permettant aux fournisseurs de publier leurs services et aux clients de les découvrir",
      "Un serveur de base de données XML",
      "Un outil de débogage pour les messages SOAP",
    ],
    correctAnswer: 1,
    explanation:
      "Un annuaire de services est un répertoire centralisé où les fournisseurs publient leurs services et où les clients peuvent les découvrir et obtenir les informations nécessaires pour les utiliser.",
  },
  {
    id: 'q195',
    question: "Quel problème adressent principalement les Web Services dans les systèmes d'information d'entreprise ?",
    options: [
      "Le stockage de données massives",
      "L'intégration de systèmes hétérogènes et la mise en place d'architectures orientées services (SOA)",
      "La création d'interfaces utilisateur web",
      "La gestion des droits d'accès utilisateurs",
    ],
    correctAnswer: 1,
    explanation:
      "Les Web Services adressent principalement l'intégration de systèmes hétérogènes et facilitent la mise en place d'architectures orientées services (SOA) dans les entreprises.",
  },
  {
    id: 'q196',
    question: "Comment se nomme le processus dans WSDL où la définition de l'interface fonctionnelle (portType) est séparée de l'implémentation technique (binding) ?",
    options: [
      "Abstraction de service",
      "Séparation des préoccupations (separation of concerns)",
      "Couplage fort",
      "Encapsulation de données",
    ],
    correctAnswer: 1,
    explanation:
      "La séparation entre le portType (interface fonctionnelle abstraite) et le binding (informations techniques concrètes) illustre la séparation des préoccupations (separation of concerns) dans WSDL.",
  },
  {
    id: 'q197',
    question: "Quel est l'avantage de cette séparation portType/binding dans WSDL ?",
    options: [
      "Cela réduit la taille du fichier WSDL",
      "Le même portType peut être exposé via différents bindings (SOAP, HTTP, etc.) sans modifier l'interface fonctionnelle",
      "Cela améliore les performances du service",
      "Cela élimine le besoin d'un annuaire UDDI",
    ],
    correctAnswer: 1,
    explanation:
      "La séparation portType/binding permet d'exposer le même portType (interface fonctionnelle) via différents bindings (ex : SOAP sur HTTP, SOAP sur SMTP) sans modifier l'interface.",
  },
  {
    id: 'q198',
    question: "Dans le contexte de JAX-WS, que signifie 'génération d'un squelette de service à partir de son contrat' ?",
    options: [
      "La génération d'un fichier WSDL à partir des annotations Java",
      "La génération automatique du code Java de base (classes, interfaces, méthodes vides) à partir d'un fichier WSDL",
      "La génération d'un stub côté client",
      "La génération d'un fichier de déploiement WAR",
    ],
    correctAnswer: 1,
    explanation:
      "La génération d'un squelette consiste à créer automatiquement le code Java de base (classes, interfaces avec méthodes vides) à partir d'un fichier WSDL existant, que le développeur devra ensuite implémenter.",
  },
  {
    id: 'q199',
    question: "Quelle est la principale différence entre un 'registre public' et un 'registre privé' UDDI ?",
    options: [
      "Le registre public est gratuit, le privé est payant",
      "Le registre public est accessible sur Internet par tous ; le registre privé est interne à une organisation",
      "Le registre public supporte SOAP ; le privé ne le supporte pas",
      "Le registre privé stocke plus d'informations que le public",
    ],
    correctAnswer: 1,
    explanation:
      "Un registre public est accessible sur Internet (ex: seekda.com) ; un registre privé est interne à une organisation, accessible uniquement par ses partenaires ou ses systèmes internes.",
  },
  {
    id: 'q200',
    question: "En résumé, quels sont les trois standards fondamentaux de la famille WS-* qui forment la base des Web Services SOAP ?",
    options: [
      "XML, HTTP, TCP/IP",
      "REST, JSON, OAuth",
      "SOAP (communication), WSDL (description), UDDI (découverte)",
      "JAX-WS, JAXB, Java EE",
    ],
    correctAnswer: 2,
    explanation:
      "Les trois standards fondamentaux des Web Services WS-* sont : SOAP pour la communication (format des messages), WSDL pour la description (contrat de service) et UDDI pour la découverte (annuaire de services).",
  },
];

export default questions;