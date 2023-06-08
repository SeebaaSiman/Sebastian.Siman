import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";
import styled from "styled-components";

export const Projects = ({ url, title, index, setRotation, setIndex }) => {
  const { handleCursorMedium, handleCursorSmall } = useContext(CursorContext);
  const mouseEnter = () => {
    setRotation(index);
    handleCursorMedium();
  };
  const mouseLeave = () => {
    setIndex(-1);
    handleCursorSmall();
  };
  return (
    <Clone onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <a href={url} target="_blank">
        <h1 className="menu-title">{title}</h1>
        <h1 className="menu-title clone">{title}</h1>
      </a>
    </Clone>
  );
};
const Clone = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  position: relative;
  a {
    color: transparent;
  }
  h1 {
    font-size: 10vw;
    transition: transform color 0.1s ease-in-out;
  }
  &:hover h1 {
    ~ .clone {
      clip-path: inset(0 0 0 0);
    }
  }
  .menu-title {
    font-family: "Space Grotesk", sans-serif;
    font-size: 8.5vw;
    text-transform: lowercase;
    z-index: 100;
    line-height: 1.1;

    &.clone {
      position: absolute;
      top: 0;
      color: black;
      clip-path: inset(0 100% 0 0);
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:not(.clone) {
      -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
      color: transparent;
    }
  }
`;
// onMouseEnter={() => setRotation(index)}
// onMouseLeave={() => setIndex(-1)}
