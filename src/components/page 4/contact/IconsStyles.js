import styled from "styled-components";
import { BoxStyle } from "../../../style/StyleGlobal";
export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
`;
export const SocialBtnDesktop = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(5.2rem + 2vw);
  width: calc(5.2rem + 2vw);
  border-radius: 1rem;
  box-shadow: ${BoxStyle.boxShadow};

  margin: 0.8rem;
  color: #444444;
  background: #FFFFFF;
  text-align: center;
  transition: 0.4s ease-in-out;
  z-index: 20;
  &:hover {
    width: calc(14rem + 1vw);
    justify-content: space-around;
    span {
    opacity: 1;
    transform: scale(1);
    width: calc(8em + 1vw);
  }
  }
  span {
    opacity: 0;
    background-color: transparent;
    transform: scale(0.6);
    font-family: 'Oxygen',sans-serif;
    font-size: calc(.8em + 1.2vw);
    text-align: center;
    width: 0px;
    overflow: hidden;
    transition: 0.3s ease-in-out ;
    z-index: 20;
  }
`;

export const SocialBtnMobile = styled.div`

display: flex;
  justify-content:${(props) =>
    props.isActive ? "space-around" : " center"};
  align-items: center;
   width: ${(props) =>
    props.isActive ? "calc(14rem + 1vw)" : " calc(5rem + 2vw)"};
  height: calc(5.2rem + 2vw);
  border-radius: 1rem;
  box-shadow: ${BoxStyle.boxShadow};
  margin: 0.8rem;
  color: #444444;
  background: #FFFFFF;
  transition: 0.4s ease-in-out;
  z-index: 20;



  span {
    opacity: F${(props) =>
    props.isActive ? "1" : " 0"};
    transform:  ${(props) => props.isActive ? "scale(1)" : "scale(0.2)"};
    width: ${(props) =>
    props.isActive ? "70%" : " 0px"};
    background-color: transparent;
    font-family: 'Oxygen',sans-serif;
    font-size: 1.1rem;
    text-align: center;
    overflow: hidden;
    transition: 0.3s ease-in-out ;
    z-index: 20;
    a{
      list-style: none;
      outline-style:none;
      font-style:none;
      text-decoration-style:none;
    }
  }
`