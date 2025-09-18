import styled from "styled-components";

export const CursorWrapperStyle = styled.div`
div {
  z-index: 1000;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  background: white;
  mix-blend-mode: difference;
   transform-origin: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.8);
  transition: all 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15);

  &.idle {
     width: 0;
    height: 0;
  }
  /* Estilos cuando NO tiene la clase 'idle' y SÍ tiene la clase 'medium' */
  &:not(.idle).regular {
    width: 8rem;
    height: 8rem;
  }
  &:not(.idle).medium {
    width: 6rem;
    height: 6rem;
  }
  &:not(.idle).small {
    width: 1.8rem;
    height: 1.8rem;
  }
  &:not(.idle).xs {
   width: 0.5rem;
    height: 0.5rem;
  }
  &:not(.idle).not-size {
    width: 0rem;
    height: 0rem;
  }
}
`