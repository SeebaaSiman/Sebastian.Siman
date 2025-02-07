import { useState } from "react";

export const useProject = ({ projects }) => {
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => {
    setSelectedProject(null);
  };
  return { currentProjects, selectedProject, closeModal, setSelectedProject };
};
