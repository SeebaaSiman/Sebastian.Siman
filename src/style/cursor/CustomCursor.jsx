import styled from "styled-components";
import { useCustomCursor } from "./useCustomCursor";

export const CustomCursor = () => {
  const { secondaryCursor, isMouseMoving } = useCustomCursor();
  //Si isMouseMoving es true, se agrega la clase css "active" , si es false no se mueve y se agrega "idle"
  return (
    <CursorWrapper className={` ${isMouseMoving ? "active" : "idle"}`}>
      <SecondaryCursor ref={secondaryCursor}></SecondaryCursor>
    </CursorWrapper>
  );
};
const CursorWrapper = styled.div`
  &.idle .secondary-cursor {
    display: none;
  }
`;
const SecondaryCursor = styled.div`
  z-index: 10000;
  border-radius: 50%;
  pointer-events: none;
  /* overflow: hidden; */
  transform: translate3d(0, 0, 0);
  position: fixed;
  background: white;
  /* border: 1px solid black; OCULTO*/
  mix-blend-mode: difference;
  transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  width: calc(2.2em + 1.8vw);
  height: calc(2.2em + 1.8vh);
`;
