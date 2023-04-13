import styled from "styled-components";
export const ContainerProject = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  z-index: 60;
`;
export const ContainerImage = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 40;
  img {
    position: absolute;
    height: 60vh;
    width: auto;
    transition: transform 0.1s ease-in-out;
    filter: grayscale(1);
    z-index: 98;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04),
      0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04),
      0 16px 32px rgba(0, 0, 0, 0.04), 0 32px 64px rgba(0, 0, 0, 0.04);
    &.active {
      z-index: 99;
    }
  }
`;
