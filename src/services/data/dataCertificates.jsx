import { useLanguage } from "../../hook/useContextProvider";
import frontend from "../../assets/certificates/front end js certificacion.jpg";
import reactjs from "../../assets/certificates/React JS certificacion.jpg";
import iia from "../../assets/certificates/IIA.jpg";
export const dataCertificates = () => {
  const { texts } = useLanguage();

  const arrCertificates = [
    {
      id: "1",
      title: "Front-End JS Developer Certification",
      issuer: "Ministerio de Educación Buenos Aires",
      date: "2024",
      description: "Certificación profesional que valida la experiencia en el diseño de aplicaciones con Javascript.",
      skills: ["HTML", "CSS ", "Javascript", "Apis Rest", "DOM", "CRUD", "GIT"],
      credentialUrl: "#",
      image: frontend,
    },
    {
      id: "2",
      title: "React JS Developer Certification",
      issuer: "Ministerio de Educación Buenos Aires",
      date: "2025",
      description:
        "Certificación que demuestra habilidades avanzadas en desarrollo de aplicaciones en React JS, incluyendo hooks, routing y gestión de estado.",
      skills: [
        "hooks",
        "react router",
        "context api",
        "CRUD",
        "autenticacion de usuarios",
        "estilos responsive",
        "GIT",
      ],
      credentialUrl: "#",
      image: reactjs,
    },
    {
      id: "3",
      title: "Introducción a la IA y sus Aplicaciones",
      issuer: "Ministerio de Educación Buenos Aires",
      date: "2025",
      description:
        "Certificación que avala conocimientos básicos sobre inteligencia artificial y sus aplicaciones prácticas en el desarrollo de software.",
      skills: [
        "Conceptos básicos de IA",
        "Aplicaciones prácticas",
        "Ética en IA",
        "Herramientas y tecnologías",
        "Tipos de IA",
      ],
      credentialUrl: "#",
      image: iia,
    },
  ];
  return arrCertificates;
};
