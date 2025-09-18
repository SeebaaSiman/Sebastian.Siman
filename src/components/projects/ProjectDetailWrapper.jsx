import { useParams } from "react-router-dom";
import ProjectDetail from "../../views/ProjectDetail";
import { dataProject } from "../../services/data/dataProject";

const ProjectDetailWrapper = () => {
  const { projectName } = useParams();
  const projects = dataProject();
  const project = projects.find((p) => p.title === projectName);

  if (!project) return null;

  return <ProjectDetail project={project} />;
};

export default ProjectDetailWrapper;
