import styled, { keyframes } from "styled-components";
import { BoxStyle } from "../../../style/StyleGlobal";
const showInLeft = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0%);
  }
`
const showScale = keyframes`
from {
  transform: scale(0);

}
to {
  transform: scale(1);
  }
  `
export const ContainerProject = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 60;
  animation: ${showInLeft} 0.8s ease-in-out;
`;
export const ContainerImage = styled.div`
  position: absolute;
  top: ${(props) => props.deviceType === "desktop" ? "50%" : "70%"};
  left:${(props) => props.deviceType === "desktop" ? "75%" : "50%"} ;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.deviceType === "desktop" ? "100%" : "100%"};
  height:${(props) => props.deviceType === "desktop" ? "100vh" : "80vh"} ;

  z-index: 40;
  animation: ${showScale} 0.8s ease-in-out;
  img {
    position: absolute;
    height: ${(props) => props.deviceType === "desktop" ? "70vh" : "50vh"};
    width: auto;
    border-radius: 25px;
    transition: transform 0.1s ease-in-out;
    z-index: 98;
    box-shadow: ${BoxStyle};
    &.active {
      z-index: 99;
    }
  }
`;
// justify-content:${(props) => props.deviceType==="desktop" ? "" : ""};