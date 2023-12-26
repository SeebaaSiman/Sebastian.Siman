import styled, { keyframes } from "styled-components";
import { device } from "./StyleGlobal";
import { bounceIn } from "./animation";

export const ContainerPage4 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  height: auto;
  @media ${device.md} {
    flex-direction: row;
    overflow: hidden;
    //Corrección para que no se vean triángulos del fondo, compenza la inclinación
    &:first-child {
      margin-left: -70px;
    }
    &:last-child {
      margin-right: -70px;
    }
  }
`;
export const ImageWrapperDesktop = styled.div`
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  height: 50vh;
  transform: none;
  opacity: 0.4;

  @media ${device.md} {
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    transform: skew(-8deg);
  }
  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
    &:hover {
      opacity: 1;
      width: 100%;
      filter: contrast(120%);
      @media ${device.md} {
        width: 40%;
      }
    }

    h2 {
    font-family: sans-serif;
    font-size: calc(3rem + 2vw);
    text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
    text-transform: uppercase;
    transform: scale(0.5);
    opacity: 0.5;
    color: black;
  }
    &:hover h2 {
      animation: ${bounceIn} 1200ms;
      transform: scale(1.1);
      color: #fff;
      opacity: 1;
    }

    button {
    font-family: sans-serif;
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
    &:hover button {
      animation: ${bounceIn} 1200ms;
      transform: scale(1.1);
      opacity: 0.8;
      background: #fff;
      color: #000;

    }

`;
export const ImageWrapperMobile = styled.div`
overflow: hidden;
  flex-grow: 1;
  position: relative;
  height: 50vh;
  width: 100%;
  opacity: 1;

  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  h2 {
    font-family: sans-serif;
    font-size: 3rem;
    text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
    text-transform: uppercase;
    color: #fff;
    opacity: 1;

    animation: ${bounceIn} 1200ms;
    transform: scale(1.1);
  }

  button {
    font-family: sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    background: #000;
    color: #fff;
    border: 2px solid #fff;
    padding: 0.8rem 4rem;
    margin: 1rem;
    opacity: 0.8;
    cursor: none;
    -webkit-transition: all 800ms;
    -moz-transition: all 800ms;
    -ms-transition: all 800ms;
    -o-transition: all 800ms;
    transition: all 800ms;
    animation: ${bounceIn} 1200ms;
    transform: scale(1);

  }
  `
export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
`;