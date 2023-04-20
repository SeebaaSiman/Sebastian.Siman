import styled, { keyframes } from "styled-components";
const showIn = keyframes`
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
  margin: 3px;
  z-index: 800;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    font-size: calc(0.8em + 1vw);
    gap: 0.8rem;
    /* mix-blend-mode: difference; */
  }

  li {
    position: relative;
    /* display: inline-block; */
    color: white;
    transition: color 0.8s;
    animation: ${showIn} 0.5s ease-in-out forwards;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #ffff;
      border-radius: 4px;
      scale: 0.1;
      transform-origin: left;
      transition: scale 0.8s;
    }
    &:hover {
      color: #ffeb;
    }
    &:hover::before {
      scale: 1;
    }
  }
`;
