import { useEffect, useState } from "react";
import { iconMapping } from "../styles/icon";
import ModalImage from "./ModalImage";
import { useLanguage } from "../hook/useContextProvider";

const ProjectModal = ({ project, onClose, handleCursorNotSize, handleCursorSmall }) => {
  const { texts } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <article className={`modal-overlay ${project ? "open" : "close"}`}>
      <button
        onClick={onClose}
        className='btn-neumorphism top-left'
        onMouseEnter={handleCursorNotSize}
        onMouseLeave={handleCursorSmall}
      >
        {texts.buttonModal}
      </button>

      <div className='browser-container'>
        <div className='browser-circles'>
          <div className='circles'>
            <div className='c'></div>
            <div className='c'></div>
            <div className='c'></div>
          </div>
          <div className='browser-tab'>
            <div className='chevrons'>
              <svg
                viewBox='0 0 20 20'
                height='16'
                width='16'
                xmlns='http://www.w3.org/2000/svg'
                data-name='20'
                id='_20'
              >
                <path
                  transform='translate(6.25 3.75)'
                  d='M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z'
                  id='Fill'
                ></path>
              </svg>
              <svg
                viewBox='0 0 20 20'
                height='16'
                width='16'
                xmlns='http://www.w3.org/2000/svg'
                data-name='20'
                id='_20'
              >
                <path
                  transform='translate(6.625 3.75)'
                  d='M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z'
                  id='Fill'
                ></path>
              </svg>
            </div>
            <div className='search-bar'>
              <img src={project?.icon} alt={`icon project ${project?.title}`} className='modal-icon-title' />
              <a
                href={project?.url}
                target='_blank'
                onMouseEnter={handleCursorNotSize}
                onMouseLeave={handleCursorSmall}
              >
                {texts.buttonVisit} {project?.title}
              </a>
            </div>
          </div>
        </div>
        <div className='modal-content'>
          <h2>{project?.title}</h2>

          <span>
            <p>{texts.modalDescription}:</p>
            <p>{project?.description}</p>
          </span>

          <div className='modal-tech-icons'>
            <p> {texts.modalTech}:</p>
            <>
              {project?.tech?.icon?.map((techName, index) => (
                <img key={index} src={iconMapping[techName]} />
              ))}
            </>
          </div>
          <p>{project?.tech?.text}</p>
          <div className='modal-img-container'>
            {project?.img.map((img, index) => (
              <img
                onMouseEnter={handleCursorNotSize}
                onMouseLeave={handleCursorSmall}
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <ModalImage
        images={project?.img}
        setIsModalOpen={setIsModalOpen}
        setCurrentImageIndex={setCurrentImageIndex}
        isModalOpen={isModalOpen}
        currentImageIndex={currentImageIndex}
        handleCursorNotSize={handleCursorNotSize}
        handleCursorSmall={handleCursorSmall}
      />
    </article>
  );
};

export default ProjectModal;
