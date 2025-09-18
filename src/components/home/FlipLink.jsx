import styled from "styled-components";
import { useFlipLink } from "../../hook/useFlipLink";
import { scaleUpBottom } from "../../styles/animations";

const FlipLink = ({ children, fn }) => {
  const { mouseEnter, mouseLeave, dimensions, textLayerRef, hovered } = useFlipLink();
  return (
    <FlipLinkStyle
      onClick={fn}
      $right
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div ref={textLayerRef} className={` ${hovered ? "hovered" : ""}`}>
        {children.split("").map((l, i) => (
          <span className='  letter-front' key={`letter-front-${i}`} style={{ transitionDelay: `${i * 50}ms` }}>
            {l}
          </span>
        ))}
      </div>
      <div className={` ${hovered ? "hovered" : ""}`}>
        {children.split("").map((l, i) => (
          <span className='letter-back' key={`letter-back-${i}`} style={{ transitionDelay: `${i * 50}ms` }}>
            {l}
          </span>
        ))}
      </div>
    </FlipLinkStyle>
  );
};

export default FlipLink;
const FlipLinkStyle = styled.button`
  font-family: "Bebas Neue", sans-serif;
  display: inline-block;
  position: relative;
  overflow: hidden;
  font-size: 1.5rem;
  /* font-weight: bold; */
  text-transform: uppercase;
  line-height: 0.75;
  text-decoration: none;
  color: white;
  border: none;
  background: none;
  cursor: none;
  animation: ${scaleUpBottom} 0.6s ease-in-out forwards;
  @media (min-width: 500px) {
    font-size: 3rem;
  }
  div {
    margin-top: 2px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transform: translateY(0);
    transition: transform 0.25s ease-in-out;

    &.hovered {
      span.letter-back {
        transform: translateY(0);
      }
      span.letter-front {
        transform: translateY(-100%);
      }
    }
  }
  span {
    display: inline-block;
    transition: transform 0.25s ease-in-out;
    &.letter-back {
      transform: translateY(100%);
    }
    &.letter-front {
      transform: translateY(0);
      color: transparent; /* Hace el texto invisible */
      -webkit-text-stroke: 1px white; /* Define el contorno del texto */
      text-stroke: 1px white; /* Soporte adicional para navegadores */
    }
  }
`;
