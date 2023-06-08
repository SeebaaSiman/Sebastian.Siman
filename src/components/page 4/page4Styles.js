import styled, { keyframes } from "styled-components";
export const ContainerPage4 = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
  //Corrección para que no se vean triángulos del fondo, compenza la inclinación
  &:first-child {
    margin-left: -70px;
  }
  &:last-child {
    margin-right: -70px;
  }
`;
const bounceIn = keyframes`
0% {
  transform: scale(0.8);
 opacity: 0;
}
60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
  `;
export const ImageWrapper = styled.div`
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  height: 100vh;
  opacity: 0.5;
  transition: transform 0.3s ease-in-out;
  transform: skew(-8deg);
  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  &:hover {
    width: 40%;
    opacity: 1;
    filter: contrast(120%);
  }
  &:hover h2 {
    animation: ${bounceIn} 1200ms;
    color: white;
    transform: scale(1.1);
    opacity: 1;
  }
  &:hover button {
    opacity: 0.8;
    background: #fff;
    color: #000;
   
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  color: #fff;
  z-index: 1;
  width: 100%;
  bottom: auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;

  h2 {
    font-family: "poppins", sans-serif;
    font-size: calc(3rem + 2vw);
    color: #ffff;
    text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
    /* margin: 0;
    padding: 0; */
    text-transform: uppercase;
    transform: scale(0.5);
    opacity: 0.5;
    color: black;
  }
  button {
    font-family: "poppins", sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    padding: 0.8rem 4rem;
    margin: 1rem;
    opacity: 0.5;
    cursor: none;
    -webkit-transition: all 800ms;
    -moz-transition: all 800ms;
    -ms-transition: all 800ms;
    -o-transition: all 800ms;
    transition: all 800ms;
  }
`;