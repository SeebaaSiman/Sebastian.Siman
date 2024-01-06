import { Fragment } from "react";
import {
  ContainerImage,
  ContainerProject,
  ListProjectContainer,
  ContainerInfoProject,
} from "@/style/projects.style";
import { dataProjects } from "@/data/dataProjects";
import { ImageProjects } from "./ImageProjects";
import { Projects } from ".";
import { useProjectAnimation } from "@/hook/useProjectAnimation";

export const ListProjectsEffect = () => {
  const {
    handleSetRotation,
    activeIndex,
    setActiveIndex,
    handleActiveLink,
    isLinkActive,
    rotationPosition,
    handleDesactiveLink,
  } = useProjectAnimation(dataProjects);

  return (
    <ListProjectContainer>
      <ContainerProject>
        {dataProjects.map(({ title, url }, index) => (
          <Projects
            key={index}
            title={title}
            url={url}
            index={index}
            setRotation={handleSetRotation}
            setIndex={setActiveIndex}
            activeIndex={activeIndex}
            handleActiveLink={handleActiveLink}
            isLinkActive={isLinkActive}
          />
        ))}
      </ContainerProject>

      <ContainerImage onClick={handleDesactiveLink}>
        {dataProjects.map(({ img }, index) => (
          <ImageProjects
            key={index}
            img={img}
            active={activeIndex === index}
            rotationPosition={rotationPosition[index]}
          />
        ))}

        {/* <>
          {dataProjects.map(({ tech }, index) => (
            <Fragment key={index}>
              {activeIndex === index && (
                <ContainerInfoProject>
                  <p>{tech}</p>
                </ContainerInfoProject>
              )}
            </Fragment>
          ))}
        </> */}
      </ContainerImage>
    </ListProjectContainer>
  );
};
