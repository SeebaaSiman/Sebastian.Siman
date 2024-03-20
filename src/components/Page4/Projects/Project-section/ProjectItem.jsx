import { useRef, Fragment } from "react";
import useDeviceType from "/src/hook/useDeviceType";
import { useContainerHeight } from "/src/hook";
import {
  ItemContainer,
  Title,
  ImgProyect,
  ArrowContainer,
} from "/src/style/projects.style";

export const ProjectItem = (props) => {
  const deviceType = useDeviceType();
  const ref = useRef(null);
  const { containerHeight } = useContainerHeight(ref);

  const onInfoProject = () => {
    props.toggleSectionsHorizontal();
    props.setInfoActive(props.project);
    props.handleCursorSmall();
  };

  return (
    <ItemContainer ref={ref}>
      <Title>
        <img src={props.project.icon} />
        {props.project?.title?.split("").map((char, index) => (
          <Fragment key={index}>
            {char !== " " ? ( // Verifica si el carácter actual no es un espacio en blanco
              <p style={{ animationDelay: `${index * 0.1}s` }}>{char}</p>
            ) : (
              " " // Agrega un espacio en blanco si el carácter es un espacio en blanco
            )}
          </Fragment>
        ))}
      </Title>
      <ImgProyect
        src={props.project.img[0]}
        alt={`Image representing a link for ${props.project?.title}`}
        style={{
          height: `${containerHeight + 10}px`,
        }}
      />
      <ArrowContainer
        onMouseEnter={deviceType === "desktop" ? props.handleCursorXs : null}
        onMouseLeave={deviceType === "desktop" ? props.handleCursorSmall : null}
        onClick={onInfoProject}
      >
        &#10140;
      </ArrowContainer>
    </ItemContainer>
  );
};
