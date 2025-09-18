import { BrowserLayout } from "../components/projects/BrowserLayout";
import { useCustomCursorContext, useLanguage } from "../hook/useContextProvider";
import { iconMapping } from "../styles/icon";
import {
  ProjectDetailStyle,
  ProjectDetailTitle,
  SliderStyle,
  TechUsedStyle,
  SliderBtn,
  SliderMainImg,
  SliderThumbs,
  SliderContainerMainImg,
} from "../styles/product-detail-style";
import { useState } from "react";

const ProjectDetail = ({ project }) => {
  const { texts } = useLanguage();
  const { handleCursorNotSize, handleCursorSmall } = useCustomCursorContext();
  return (
    <ProjectDetailStyle>
      <ProjectDetailTitle>
        {project.icon && <img src={project?.icon} alt={`icon project ${project?.title}`} />}
        <h2>{project?.title}</h2>
      </ProjectDetailTitle>

      <TechUsedStyle>
        <h3>{texts.modalDescription}:</h3>
        <p>{project?.description}</p>
      </TechUsedStyle>

      <TechUsedStyle>
        <h3> {texts.modalTech}:</h3>
        <div>
          {project?.tech?.icon?.map((techName, index) => (
            <span key={index}>
              <p>{techName}</p>
              <img src={iconMapping[techName]} />
            </span>
          ))}
        </div>
      </TechUsedStyle>
      <TechUsedStyle>
        <h3>Hooks:</h3>
        <p>{project?.tech?.text}</p>
      </TechUsedStyle>
      <BrowserLayout projectUrl={project.url} projectTitle={project.title}>
        <BrowserSlider sliderImg={project.img} {...{ handleCursorNotSize, handleCursorSmall }} />
      </BrowserLayout>
    </ProjectDetailStyle>
  );
};

export default ProjectDetail;

export const BrowserSlider = ({ sliderImg, handleCursorNotSize, handleCursorSmall }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? sliderImg.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === sliderImg.length - 1 ? 0 : prev + 1));
  const selectImg = (idx) => setCurrentIndex(idx);
  const boxShadowStyle = ` rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.3) 0px -3px 0px inset`;
  return (
    <SliderStyle>
      <SliderContainerMainImg>
        <SliderBtn onClick={goToPrev} onMouseEnter={handleCursorNotSize} onMouseLeave={handleCursorSmall}>
          {/* &lt; */}
          <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z'
              fill='#000'
            />
          </svg>
        </SliderBtn>
        <SliderMainImg>
          <img src={sliderImg[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
        </SliderMainImg>
        <SliderBtn onClick={goToNext} onMouseEnter={handleCursorNotSize} onMouseLeave={handleCursorSmall}>
          {/* &gt; */}
          <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z'
              fill='#000'
            />
          </svg>
        </SliderBtn>
      </SliderContainerMainImg>
      <SliderThumbs>
        {sliderImg.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Miniatura ${idx + 1}`}
            onMouseEnter={idx === currentIndex ? "" : handleCursorNotSize}
            onMouseLeave={handleCursorSmall}
            onClick={() => selectImg(idx)}
            style={{
              transform: idx === currentIndex ? "rotate(0deg)" : "rotate(270deg)",
              boxShadow: idx === currentIndex ? boxShadowStyle : "",
              scale: idx === currentIndex ? "1" : "0.95",
              opacity: idx === currentIndex ? 1 : 0.75,
            }}
          />
        ))}
      </SliderThumbs>
    </SliderStyle>
  );
};
