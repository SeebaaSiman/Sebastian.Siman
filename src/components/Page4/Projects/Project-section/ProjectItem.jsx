import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "/src/style";
import useDeviceType from "/src/hook/useDeviceType";

export const ProjectItem = ({
  heading,
  imgSrc,
  href,
  project,
  setInfoActive,
  toggleSectionsHorizontal,
  handleCursorXs,
  handleCursorSmall,
}) => {
  const ref = useRef(null);
  const [onHover, setOnHover] = useState(false);
  const [imagePosition, setImagePosition] = useState(0);

  const handleMouseMove = (e) => {};

  const [containerHeight, setContainerHeight] = useState(null);
  const updateDimensions = () => {
    const height = ref.current.getBoundingClientRect().height;
    setContainerHeight(height);
  };
  useEffect(() => {
    // Ejecutar la función de actualización al montar el componente
    updateDimensions();

    // Agregar un listener para actualizar cuando cambie el ancho de la ventana
    window.addEventListener("resize", updateDimensions);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  const onInfoProject = () => {
    toggleSectionsHorizontal();
    setInfoActive(project);
    handleCursorSmall();
  };
  const deviceType = useDeviceType();
  return (
    <ItemContainer href={href} ref={ref} onMouseMove={handleMouseMove}>
      <TextContainer>
        <Title>
          {heading.split("").map((l, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {l}
            </span>
          ))}
        </Title>
      </TextContainer>

      <ImgProyect
        src={imgSrc}
        style={{
          // height: `${containerHeight / 2}px`,
          transform: `translateY(${imagePosition}px)`,
        }}
        alt={`Image representing a link for ${heading}`}
      />
      <ArrowContainer
        onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
        onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
        onClick={onInfoProject}
      >
        &#10140;
      </ArrowContainer>
    </ItemContainer>
  );
};
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-16px);
  }
  60% {
    transform: translateX(-8px);
  }
`;
const ShakeVertical = keyframes`
0%{transform:scale3d(1,1,1)}
30%{transform:scale3d(.75,1.25,1)}
40%{transform:scale3d(1.25,.75,1)}
50%{transform:scale3d(.85,1.15,1)}
65%{transform:scale3d(1.05,.95,1)}
75%{transform:scale3d(.95,1.05,1)}
100%{transform:scale3d(1,1,1)}`;
const ImgShowIn = keyframes`
from{  scale: 1;
      rotate: 12.5deg;
    }
to{  scale: 1;
      rotate: -12.5deg;
      }
`;
const ArrowContainer = styled.div`
  position: relative;
  opacity: 0;
  font-size: 2.5rem;
  transform: translateX(25%);
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s ease;
`;
const ImgProyect = styled.img`
  z-index: 800;
  position: absolute;
  top: 0%;
  left: 52%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  /* width: 6rem; */
  height: 100%;
  box-shadow: 1px 2px 3px black;
  object-fit: cover;
  scale: 0;
  rotate: -12.5deg;
  transition: all 0.5s ease-in-out;
`;
const Title = styled.span`
  position: relative;
  font-size: 2rem;
  padding: 18px;
  transform: translateX(0%);
  transition: all 0.5s ease-in-out;
  z-index: 2;
  span {
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.textShadow};
  }
`;

const ItemContainer = styled.a`
  position: relative;
  list-style: none;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px ${(props) => props.theme.textShadow};
  padding: 8px 4px;
  transition: color 500ms;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 2;
  overflow: hidden;
  &:hover {
    border-bottom: solid 3px ${(props) => props.theme.textColor};
    ${Title} {
      color: ${(props) => props.theme.textColor};
      transform: translateX(16px);
    }
    ${Title} span {
      /* transform: translateX(-16px); */
      color: ${(props) => props.theme.textColor};

      /* animation: ${bounceAnimation} 1s ease-in-out; */
      animation: ${ShakeVertical} 0.8s linear both;
    }
    ${ImgProyect} {
      scale: 1;
      rotate: 12.5deg;
      /* animation: ${ImgShowIn} 0.6s ease-in-out forwards; */
    }
    ${ArrowContainer} {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @media ${device.md} {
    padding: 12px 4px;
  }
`;
const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 50%; */
  z-index: 2;
`;
