import { useContext } from "react";
import styled from "styled-components";
import { CursorContext } from "./CustomManager";
import { useCustomCursor } from "./useCustomCursor";

export const CustomCursor = () => {
  const { size } = useContext(CursorContext);
  const { secondaryCursor, isMouseMoving } = useCustomCursor();
  //Si isMouseMoving es true, se agrega la clase css "active" , si es false no se mueve y se agrega "idle"
  return (
    <CursorWrapper className={`  ${isMouseMoving ? "active" : "idle"}`}>
      <SecondaryCursor
        className={` ${size}`}
        ref={secondaryCursor}
      ></SecondaryCursor>
    </CursorWrapper>
  );
};
const CursorWrapper = styled.div`
  &.idle {
    display: none;
  }
`;
const SecondaryCursor = styled.div`
  z-index: 1000;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  background: white;
  mix-blend-mode: difference;
  /* border: 3px solid black; OCULTO*/
  transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  /* transform-origin: center; */
  &.small {
    /* width: calc(2.2em + 1.8vw); */
    width: 1.8rem;
    height: 1.8rem;
  }
  &.medium {
    width: 6rem;
    height: 6rem;
  }
  &.regular {
    width: 12rem;
    height: 12rem;
  }
  /* @media screen {
display:none;
  } */
`;
