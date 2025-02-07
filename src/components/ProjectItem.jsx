import { useProjectItem } from "../hook/useProjectItem";

const ProjectItem = ({ showProjectDetails, index, icon, title, image }) => {
  const { handleMouseLeave, handleMouseEnter, boxRef, clipPath } = useProjectItem();

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='link-box-item ' ref={boxRef}>
      <img src={image} alt={title} />
      <div
        style={{
          clipPath,
          transition: "clip-path 0.3s ease",
        }}
        className='link-box-item-overlay'
        onClick={() => showProjectDetails(index)}
      >
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ProjectItem;
