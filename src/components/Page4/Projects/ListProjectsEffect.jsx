import { Fragment } from "react";
import {
  ContainerImage,
  ContainerProject,
  ListProjectContainer,
} from "@/style/projects.style";
import { dataProjects } from "@/data/dataProjects";
import { useProjectAnimation } from "@/hook/useProjectAnimation";
import { ImageProjects } from "./ImageProjects";
import { InfoProject } from "./InfoProject";
import { Projects } from ".";

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

  // creo un array que excluye el último elemento de dataProjects. De esta manera muestro los links y la info, excepto del úlimo elemento que será la "portada" de containerImage (que si hace el mapeo de dataProject) cuando no hay un enlace hover o seleccionado
  const depurDataProject = dataProjects.slice(0, -1);
  return (
    <ListProjectContainer>
      <ContainerProject>
        {depurDataProject.map(({ title, url }, index) => (
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
            index={index}
            active={activeIndex === index}
            rotationPosition={rotationPosition[index]}
            loading="lazy"
          />
        ))}

        <>
          {depurDataProject.map(({ tech }, index) => (
            <Fragment key={index}>
              {activeIndex === index && <InfoProject tech={tech} />}
            </Fragment>
          ))}
        </>
      </ContainerImage>
    </ListProjectContainer>
  );
};
