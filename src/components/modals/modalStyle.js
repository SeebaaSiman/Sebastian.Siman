import styled, { keyframes } from "styled-components";
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${props => props.variant === 'Projects' ? '#ffff' : '#515151'};
  animation: ${props => props.variant === 'Projects' ? projectInLeft : contactInRight} 0.8s ease-in-out forwards;

  &.close{
animation: ${props => props.variant === 'Projects' ? projectOutLeft : contactOutLeft} 0.8s ease-in-out forwards;
}
  `;
export const Button = styled.button`
  position:absolute;
  left: 0;
  top:0;
  margin: 0.5rem;
  z-index: 900;
  `