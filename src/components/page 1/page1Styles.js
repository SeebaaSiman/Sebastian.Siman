import styled from "styled-components";
export const Home = styled.div`
  height: 110vh;
  width: 100vw;
`;
export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  img {
    width: calc(5.5rem +1vw);
    height: calc(5.5rem +1vw);
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const ContainerMouse = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  z-index: 5;
`;