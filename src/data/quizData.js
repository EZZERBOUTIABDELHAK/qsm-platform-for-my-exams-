import questions from './questions.js';
import itilQuestions from './ITIL.js';

/**
 * Module 1 — Web Services & SOA (200 questions)
 * ...
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
  ],
};

export default quizData;
