import questions from './questions.js';
import itilQuestions from './ITIL.js';
import soaQuestions from './soa.js';
import exam1 from './ITILexams/examen1.js';
import exam2 from './ITILexams/examen2.js';
import exam3 from './ITILexams/examen3.js';
import exam4 from './ITILexams/examen4.js';

/**
 * Module 1 — Web Services & SOA (200 questions)
 * Module 2 — ITIL
 * Module 3 — Architecture & Conception SOA (200 questions)
 */

const quizData = {
  modules: [
    {
      id: 'm1',
      name: 'Module 1 — Web Services & SOA',
      courses: [
        {
          id: 'c1',
          name: 'Concepts & Architecture SOA',
          description: 'Services, Web Services, triangle client-annuaire-fournisseur, implémentation',
          questions: questions.slice(0, 18),   // q1  – q18 (18 questions)
        },
        {
          id: 'c2',
          name: 'WSDL — Description de Services',
          description: 'Structure WSDL 1.1, portType, binding, service, types complexes, XSD',
          questions: questions.slice(18, 40),  // q19 – q40 (22 questions)
        },
        {
          id: 'c3',
          name: 'SOAP & UDDI',
          description: 'Messages SOAP, Envelope/Header/Body, UDDI, publication, registres, W3C & OASIS',
          questions: questions.slice(40, 74),  // q41 – q74 (34 questions)
        },
        {
          id: 'c4',
          name: 'JAX-WS & JAXB (Java EE)',
          description: 'Annotations @WebService/@WebMethod, marshalling/unmarshalling, création client',
          questions: questions.slice(74, 115), // q75 – q115 (41 questions)
        },
        {
          id: 'c5',
          name: 'Approfondissement & Révision',
          description: 'Questions transversales, scénarios pratiques, récapitulation complète',
          questions: questions.slice(115),     // q116 – q200 (85 questions)
        },
      ],
    },
    {
      id: 'm2',
      name: 'Module 2 — ITIL',
      courses: [
        {
          id: 'itil-c1',
          name: 'ITIL Foundations & Lifecycle',
          description: 'Introduction aux concepts ITIL, cycle de vie des services, processus et fonctions',
          questions: itilQuestions,
        },
      ],
    },
    {
      id: 'm3',
      name: 'Module 3 — Architecture & Conception SOA',
      courses: [
        {
          id: 'soa-c1',
          name: '1. Urbanisation des SI & Modèle Client-Serveur',
          description: 'État des lieux des SI, silos applicatifs, couches détaillées et architectures 1-tier à n-tiers',
          questions: soaQuestions.slice(0, 30), // q1 – q30 (30 questions)
        },
        {
          id: 'soa-c2',
          name: '2. Composants Distribués & Gestion des Flux',
          description: 'Composants (JavaBeans, CORBA, RMI, RPC, ORB) et flux (synchrone/asynchrone, EDI, ETL, pub-sub)',
          questions: soaQuestions.slice(30, 55), // q31 – q55 (25 questions)
        },
        {
          id: 'soa-c3',
          name: '3. Principes, Bénéfices & Risques de la SOA',
          description: 'Cible SOA, découplage technologique, bénéfices métier/IT, risques et craintes liés à la mutualisation',
          questions: soaQuestions.slice(55, 90), // q56 – q90 (35 questions)
        },
        {
          id: 'soa-c4',
          name: '4. Synthèse & Approfondissement de l\'Architecture',
          description: 'Questions transversales, analyse comparative, architecture d\'entreprise et scénarios d\'intégration',
          questions: soaQuestions.slice(90, 130), // q91 – q130 (40 questions)
        },
        {
          id: 'soa-c5',
          name: '5. Consolidation & Niveau Expert',
          description: 'Série finale de consolidation, questions de synthèse complexes et niveau expert',
          questions: soaQuestions.slice(130, 200), // q131 – q200 (70 questions)
        },
      ],
    },
    {
      id: 'itilexams',
      name: 'Module 4 — ITIL Exams',
      courses: [
        {
          id: 'exam1a',
          name: 'Examen 1 - Sample A',
          description: 'Questions ITIL de l\'examen 1, partie A',
          questions: exam1.slice(0, 40),
        },
        {
          id: 'exam1b',
          name: 'Examen 1 - Sample B',
          description: 'Questions ITIL de l\'examen 1, partie B',
          questions: exam1.slice(40),
        },
        {
          id: 'exam2',
          name: 'Examen 2',
          description: 'Questions ITIL de l\'examen 2',
          questions: exam2,
        },
        {
          id: 'exam3',
          name: 'Examen 3',
          description: 'Questions ITIL de l\'examen 3',
          questions: exam3,
        },
        {
          id: 'exam4',
          name: 'Examen 4',
          description: 'Questions ITIL de l\'examen 4',
          questions: exam4,
        },
      ],
    },
  ],
};

export default quizData;
