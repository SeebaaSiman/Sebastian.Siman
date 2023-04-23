import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  height: 110vh;
  width: 100vw;
`;
const showInRight = keyframes`
from {
  transform: translateX(100%);

}
to {
  transform: translateX(0%);
  }
    `;
export const ContainerBanner = styled.div`
width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 1rem 1rem 1rem;
  img {
    width: calc(5rem +1vw);
    height: calc(5rem +1vw);
    /* width:50vw;
    height: 50vh; */
    object-fit: cover;
    border-radius: 50%;
    animation: ${showInRight} 0.8s ease-in-out;
  }
`;
export const ContainerMouse = styled.div`
  position: absolute;
  width:100%;
  height: 8rem;
  bottom:2%;
  /* top: 90%; */
  /* bottom: 2%;
  left: 50%; */
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
`;