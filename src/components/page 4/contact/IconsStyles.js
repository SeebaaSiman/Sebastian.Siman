import styled from "styled-components";
export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SocialBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(5.2rem + 2vw);
  width: calc(5.2rem + 2vw);
  border-radius: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  margin: 0.8rem;
  color: #444444;
  background: #FFFFFF;
  text-align: center;
  transition: 0.4s ease-in-out;
  z-index: 20;
  &:hover {
    width: calc(14rem + 1vw);
    border-radius: 1rem;
    justify-content: space-around;
    span {
    opacity: 1;
    transform: scale(1);
    width: calc(5em + 1vw);
  }
  }
  span {
    opacity: 0;
    background-color: transparent;
    transform: scale(0.6);
    font-family: 'Bebas Neue',sans-serif;
    font-size: calc(.8em + 1.2vw);
    text-align: center;
    width: 0px;
    overflow: hidden;
    transition: 0.3s ease-in-out ;
    z-index: 20;
  }
`;
