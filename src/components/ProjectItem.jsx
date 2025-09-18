import { useNavigate } from "react-router-dom";
import { useCustomCursorContext, useHorizontalSectionProvider } from "../hook/useContextProvider";
import { useProjectItem } from "../hook/useProjectItem";
import { LinkBoxItem, LinkBoxItemOverlay } from "../styles/list-projects-style";

const ProjectItem = ({ project }) => {
  const { handleMouseLeave, handleMouseEnter, boxRef, clipPath } = useProjectItem();
  const { handleCursorNotSize, handleCursorSmall } = useCustomCursorContext();
  const navigate = useNavigate();

  const { handleScroll } = useHorizontalSectionProvider();

  // Cuando haces click en un proyecto:
  const handleProjectClick = (project) => {
    handleScroll(50);
    navigate(`/Sebastian.Siman/projects/${project.title}`);
    // setSelectedProject(project);
  };
  return (
    <LinkBoxItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={boxRef}>
      <img src={project.img[0]} alt={project.title} />
      <LinkBoxItemOverlay
        onMouseEnter={handleCursorNotSize}
        onMouseLeave={handleCursorSmall}
        style={{
          clipPath,
          transition: "clip-path 0.3s ease",
        }}
        onClick={() => handleProjectClick(project)}
      >
        <h2>{project.title}</h2>
      </LinkBoxItemOverlay>
    </LinkBoxItem>
  );
};

export default ProjectItem;
