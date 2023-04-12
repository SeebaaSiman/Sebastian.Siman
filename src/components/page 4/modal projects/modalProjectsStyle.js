import styled, { keyframes } from "styled-components";

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
  `;
export const Button = styled.button`
  position:absolute;
  left: 0;
  top:0;
  margin: 0.5rem;
  `
const slideOutLeft = keyframes`   from {
    transform: translateY(0%);
  }
  to {
      transform: translateY(-100%);
    }
      `;
const slideInLeft = keyframes` from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;
export const ModalLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: #0e1197;
  animation: ${slideInLeft} 0.8s ease;
  &.close-modal {
    animation: ${slideOutLeft} 0.5s ease;
  }
`;



const slideOutRight = keyframes`  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
  `;
const slideInRight = keyframes`  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
  `;
export const ModalRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: #245f8f;
  animation: ${slideInRight} 0.8s ease;
  &.close-modal {
    animation: ${slideOutRight} 0.5s ease;
  }
`;