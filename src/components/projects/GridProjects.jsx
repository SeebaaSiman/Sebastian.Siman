import { dataProject } from "../../services/data/dataProject";
import { GridProjectsStyle } from "../../styles/list-projects-style";
import ProjectItem from "../ProjectItem";

export const GridProjects = () => {
  const projects = dataProject();

  return (
    <GridProjectsStyle>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </GridProjectsStyle>
  );
};
