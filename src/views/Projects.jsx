import "../styles/modal.css";
import "../styles/ClipPathProject-style.css";

import { useCustomCursorContext, useLanguage } from "../hook/useContextProvider";
import { dataProject } from "../services/data/dataProject";
import { useProject } from "../hook/useProject";
import ProjectItem from "../components/ProjectItem";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const { texts } = useLanguage();
  const projects = dataProject();
  const { handleCursorNotSize, handleCursorSmall } = useCustomCursorContext();

  const { currentProjects, selectedProject, closeModal, setSelectedProject } = useProject({ projects });
  const showProjectDetails = (index) => {
    setSelectedProject(currentProjects[index]);
  };
  return (
    <div className='clip-path-projects'>
      {currentProjects.map((project, index) => (
        <ProjectItem
          key={project.id}
          showProjectDetails={showProjectDetails}
          index={index}
          image={project.img[0]}
          title={project.title}
          icon={project.icon}
        />
      ))}

      <ProjectModal
        project={selectedProject}
        onClose={closeModal}
        handleCursorNotSize={handleCursorNotSize}
        handleCursorSmall={handleCursorSmall}
      />
    </div>
  );
};

export default Projects;
