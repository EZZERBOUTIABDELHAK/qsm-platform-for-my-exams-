import questions from './questions.js';

/**
 * Module 1 — Web Services & SOA (200 questions)
 *
 * Section boundaries in questions.js (0-indexed):
 *   q1  –  q10  → [0  – 9]   Concepts de base (10)
 *   q11 –  q18  → [10 – 17]  Implémentation   (8)
 *   q19 –  q40  → [18 – 39]  WSDL             (22)
 *   q41 –  q55  → [40 – 54]  SOAP             (15)
 *   q56 –  q74  → [55 – 73]  UDDI + Standards  (19)
 *   q75 –  q85  → [74 – 84]  JAX-WS           (11)
 *   q86 –  q91  → [85 – 90]  JAXB             (6)
 *   q92 –  q96  → [91 – 95]  Création client  (5)
 *   q97 –  q115 → [96 – 114] Approfondissement(19)
 *   q116 – q200 → [115 – 199] Révision complète(85)
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
  ],
};

export default quizData;
