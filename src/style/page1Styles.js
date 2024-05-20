import styled from "styled-components";
import { device } from "./StyleGlobal";
import { showInRight, showInLeft, showMouse, bounce, showInDown } from "./animation";

export const HomeContainer = styled.header`
  position:relative;
  height: 100vh;
  width: 100vw;
   display:flex;
   flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
//*Banner
export const ContainerBanner = styled.div`
  width:100vw;
  height: 100%;
  padding:0.5rem;
  display: flex;
  flex-direction:column-reverse;
  justify-content: space-around;
  align-items: center;
  @media ${device.lg}{
    flex-direction: row;
    padding:2rem;
  }
  img {
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
    filter:drop-shadow(1px 2px 3px ${(props) => props.theme.mouse});
    border-radius: 50%;
    opacity: 0;
    animation: ${showInRight} 0.8s ease-in-out forwards;
    @media ${device.sm}{
      max-width: 250px;
    max-height: 250px;
      filter:drop-shadow(0px 0px 0px transparent);
      &:hover{
        filter:drop-shadow(1px 2px 3px ${(props) => props.theme.mouse});
        transition: all .4s ease-in-out;
      }
    }
    @media ${device.md}{
      max-width: 300px;
    max-height: 300px;
  }
    @media ${device.lg}{
      max-width: 400px;
    max-height: 400px;
    }
  }
`;

export const ContainerText = styled.div`
  width: 100vw;
  padding: 0.2rem;
  opacity: 0;
  font-family: "Oxygen";
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${showInLeft} 0.8s ease-in-out forwards;
  animation-delay: 2s;
  @media ${device.lg} {
    width: 100%;
  }
`;
export const Prefix = styled.h1`
  color: ${(props) => props.theme.textShadow};
  text-shadow: 1px 2px 1px ${(props) => props.theme.textColor};
  display: inline-block;
  margin-right: 6px;
  font-weight: 400;
  font-size: 10vw;
  white-space: nowrap;
  font-family: "Oxygen";
  @media ${device.lg} {
    font-size: 6vw;
  }
`;
export const Suffix = styled(Prefix)`
  font-family: "Oxygen";
  color: ${(props) => props.theme.textColor};
  text-shadow: 1px 2px 1px ${(props) => props.theme.textShadow};
`;
//*Mouse
export const ContainerMouse = styled.div`
  width:100%;
  padding:1rem;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

export const Mouse = styled.div`
  position: relative;
  width: 2em;
  height: 4em;
  border: 0.15em solid ${(props) => props.theme.textColor};
  border-radius: 2em;
  animation: ${showInDown} 1s ease-in-out forwards;
`;

export const Wheel = styled.span`
  position: absolute;
  left: 50%;
  top: 15%;
  width: 0.6em;
  height: 1.5em;
  border: 0.1em solid ${(props) => props.theme.textColor};
  transform: translate(-50%, 0);
  border-radius: 0.6em;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    bottom: 0;
    background-image: linear-gradient(
      0deg,
      ${(props) => props.theme.mouse} 2px,
      transparent 1px
    );
    background-size: 100% 6px;
    opacity: 0.5;
    animation: ${showMouse} 1s ease-in-out infinite;
  }
`;
export const Arrow = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  animation: ${showInDown} 1s ease-in-out forwards;
  &::before {
    content: "╲╱";
    animation: ${bounce} 1s ease infinite;
    color: ${(props) => props.theme.textColor};
    font-size: 1rem;
    height: 4rem;
    line-height: 4rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    width: 4rem;
  }
`;