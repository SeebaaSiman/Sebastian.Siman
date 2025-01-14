import { lazy, useState } from "react";
// import Projects from "../views/Projects";
// import About from "../views/About";
const Projects = lazy(() => import("../views/Projects"));
const About = lazy(() => import("../views/About"));
export const useHome = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSectionClick = (sectionId) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSection(sectionId);
  };
  const handleBack = () => {
    if (!isAnimating) return;
    setIsAnimating(false);
  };

  const sections = [
    { id: "about", component: About },
    { id: "project", component: Projects },
  ];

  const renderSection = () => {
    const section = sections.find((s) => s.id === activeSection);
    const SectionComponent = section ? section.component : null;

    return SectionComponent ? <SectionComponent /> : <div>Loader...</div>;
  };

  return { activeSection, isAnimating, handleSectionClick, handleBack, renderSection };
};
