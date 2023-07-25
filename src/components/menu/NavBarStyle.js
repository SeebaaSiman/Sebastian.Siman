import styled, { keyframes } from "styled-components";
import { device } from "../../style/StyleGlobal";
export const showIn = keyframes`
  0% {
transform:scale(0.8);
opacity: 0;
}
100% {
    transform:scale(1);
    opacity: 1;
  }
`;
export const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  width: 98%;
  align-items: center;
  margin: 5px;
  z-index: 800;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    gap: 0.8rem;
    font-size: 1.1rem;
    @media ${device.sm}{
font-size: 1.3rem;
    }
    @media ${device.lg}{
font-size: 1.5rem;
    }
  }

  li {
    position: relative;
    font-family: 'Bebas Neue',sans-serif;
    color: #000;
    filter:drop-shadow(1px 1px 1px #e2dfdd);
    transition: color 0.8s;
    animation: ${showIn} 0.5s ease-in-out forwards;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      border-radius: 4px;
      scale: 0.1;
      transform-origin: left;
      transition: scale 0.8s;
    }
    &:hover {
      color: #0005;
    }
    &:hover::before {
      scale: 1;
    }
  }
`;
