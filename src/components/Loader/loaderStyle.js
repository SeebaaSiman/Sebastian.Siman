import styled, { keyframes } from "styled-components";
const rotate = keyframes`
      0% {
        transform: scale(1) rotate(0);
      }
      50% {
        transform: scale(1.5) rotate(360deg);
      }
      80% {
        transform: scale(1) rotate(720deg);
      }
      100% {
        /* opacity: 0; */
        transform: scale(0) rotate(1080deg);
      }
  `;
const sweep = keyframes`
     0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  33% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
  }
  `;
export const LoaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  animation: ${sweep} 3s linear forwards;
`;
export const Title = styled.h1``
export const Img = styled.img`
  animation: ${rotate} 2s ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;