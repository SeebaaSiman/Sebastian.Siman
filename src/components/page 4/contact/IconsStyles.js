import styled from "styled-components";
export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SocialBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(5rem + 2vw);
  width: calc(5rem + 2vw);
  border-radius: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  margin: 0.4rem;
  color: #444444;
  background: #FFFFFF;
  /* text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC; */
  text-align: center;
  transition: 0.3s ease-in-out;
  z-index: 20;
  &:hover {
    width: calc(14rem + 1vw);
    border-radius: 1rem;
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
  &:hover span {
    opacity: 1;
    transform: scale(1);
    width: calc(5em + 1vw);
  }
  a{
    z-index: 100;
  }
`;
