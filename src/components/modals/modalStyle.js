import styled, { keyframes } from "styled-components";
import { BoxStyle } from "../../style/StyleGlobal";
const projectOutLeft = keyframes`
from {
    transform: translateY(0%);
  }
  to {
      transform: translateY(-100%);
    }
      `;
const projectInLeft = keyframes`
from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;
const contactOutLeft = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(-100%);
}
`;
const contactInRight = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0%);
}
  `;
export const ModalContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  box-shadow: ${BoxStyle.boxShadow};

  background-color: ${props =>
    props.variant === 'Projects' || props.variant === 'Proyectos'
      ? '#fff'
      : props.variant === 'Contact' || props.variant === 'Contacto'
        ? '#1e1e1e'
        : ''};
animation: ${props =>
    props.variant === 'Projects' || props.variant === 'Proyectos'
      ? projectInLeft
      : props.variant === 'Contact' || props.variant === 'Contacto'
        ? contactInRight
        : ''} 0.8s ease-in-out forwards;


  &.close{
    animation: ${props =>
    props.variant === 'Projects' || props.variant === 'Proyectos'
      ? projectOutLeft
      : props.variant === 'Contact' || props.variant === 'Contacto'
        ? contactOutLeft
        : ''} 0.8s ease-in-out forwards;
}
`;
