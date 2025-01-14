import { useCustomCursorContext } from "../hook/useContextProvider";
import { getStackedCardStyle } from "../utils/cardUtils";
import ProjectModal from "./ProjectModal";

const SwipeCards = ({
  currentProjects,
  selectedProject,
  cardRef,
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  closeModal,
}) => {
  const { handleCursorNotSize, handleCursorSmall } = useCustomCursorContext();
  return (
    <div className='cards-container'>
      {currentProjects.map((project, index) => (
        <div
          key={project.id}
          ref={index === 0 ? cardRef : null}
          className={`card ${index === 0 ? "active" : ""}`}
          style={getStackedCardStyle(index)}
          onMouseDown={index === 0 ? handleDragStart : undefined}
          onMouseEnter={handleCursorNotSize}
          onMouseUp={index === 0 ? handleDragEnd : undefined}
          onMouseMove={index === 0 ? handleDragMove : undefined}
          onMouseLeave={(index === 0 ? handleDragEnd : undefined, handleCursorSmall)}
          onTouchStart={index === 0 ? handleDragStart : undefined}
          onTouchMove={index === 0 ? handleDragMove : undefined}
          onTouchEnd={index === 0 ? handleDragEnd : undefined}
        >
          <img src={project.img[0]} alt={project.title} />
        </div>
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

export default SwipeCards;
