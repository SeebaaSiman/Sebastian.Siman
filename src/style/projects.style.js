import styled from "styled-components";
import { Style, device } from "@/style/StyleGlobal";
import { showScale, showInLeft } from "./animation";
//* Project
export const Link = styled.a`
  display: flex;
  align-items: end;
  z-index: 200;
`;
export const Clone = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  @media ${device.sm} {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  a {
    color: transparent;
  }
  h1 {
    font-size: 10vw;
    transition: transform color 0.1s ease-in-out;
  }
  &:hover h1 {
    ~ .clone {
      clip-path: inset(0 0 0 0);
    }
  }
  h1 {
    ~ .clone {
      clip-path: ${(props) =>
    props.isCloneActive ? "inset(0 0 0 0)" : "initial"};
    }
  }
  .menu-title {
    font-family: "Oxygen", sans-serif;
    font-size: 8.5vw;
    text-transform: lowercase;
    z-index: 100;
    line-height: 1.1;

    &.clone {
      position: absolute;
      top: 0;
      color: black;
      clip-path: inset(0 100% 0 0);
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:not(.clone) {
      -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
      color: transparent;
    }
  }
`;
// onMouseEnter={() => setRotation(index)}
// onMouseLeave={() => setIndex(-1)}

//* ListProjectEffect
export const ContainerProject = styled.div`
  margin-top: 2rem;
  width: 90%;
  height: 100%;
  display: block;
  z-index: 60;
  animation: ${showInLeft} 0.8s ease-in-out;

`;
export const ContainerImage = styled.div`
  position: absolute;
  top: ${(props) => props.deviceType === "desktop" ? "50%" : "90%"};
  left:${(props) => props.deviceType === "desktop" ? "75%" : "50%"} ;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.deviceType === "desktop" ? "100%" : "100%"};
  height:${(props) => props.deviceType === "desktop" ? "100vh" : "80vh"} ;

  z-index: 40;
  animation: ${showScale} 0.8s ease-in-out;
  img{
      position: absolute;
      height: ${(props) => props.deviceType === "desktop" ? "70vh" : "50vh"};
      width: auto;
      border-radius: 25px;
      transition: transform 0.1s ease-in-out;
      z-index: 98;
    box-shadow: ${Style.boxShadow};
    &.active {
      z-index: 99;
    }
  }
`;
// justify-content:${(props) => props.deviceType==="desktop" ? "" : ""};