import { useRef, Fragment } from "react";
import useDeviceType from "/src/hook/useDeviceType";
import { useMousePosition, useContainerHeight } from "/src/hook";
import {
  ItemContainer,
  Title,
  ImgProyect,
  ArrowContainer,
} from "/src/style/projects.style";

export const ProjectItem = (props) => {
  const ref = useRef(null);

  const deviceType = useDeviceType();
  const { x, y } = useMousePosition(ref);
  const { containerHeight } = useContainerHeight(ref);

  const onInfoProject = () => {
    props.toggleSectionsHorizontal();
    props.setInfoActive(props.project);
    props.handleCursorSmall();
  };

  return (
    <ItemContainer ref={ref} isDesktop={deviceType === "desktop"}>
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
        isDesktop={deviceType === "desktop"}
        style={{
          transform:
            deviceType === "desktop" ? `translate(${x}px, ${y}px) ` : "",
          height: containerHeight,
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
