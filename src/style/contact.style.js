import styled from "styled-components";
import { Style, device } from "@/style/StyleGlobal";
import { showContact } from "./animation";
// IconsEffect
export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:.5rem;
  width:100%;
  height: 100vh;
`;
export const RowIcon = styled.div`
padding:1rem;
position:relative;
display:flex;
justify-content: center;
align-items: center;
gap:1rem;
overflow: visible;
`
export const CopyBtn = styled.a`
 display: flex;
  justify-content: center;
  align-items: center;
  width:calc(2rem + 2vw);
  height: calc(2rem + 2vw);
    border-radius: 1rem;
background: #FFFFFF;
box-shadow: ${Style.boxShadow};
animation:${showContact} 1s ease-in-out;
`
export const Tooltip = styled.div`
position: absolute;
top:50%;
left:96%;
transform: translateY(-50%);
padding: 8px;
font-size: 11px;
max-width: 100%;
max-height: 100%;
background: #FFFFFF;
box-shadow: ${Style.boxShadow};
border-radius: 6px;
z-index: 200;
`
export const SocialBtnDesktop = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(5.2rem + 2vw);
  width: calc(5.2rem + 2vw);
  border-radius: 1rem;
  box-shadow: ${Style.boxShadow};
  color: #444444;
  background: #FFFFFF;
  text-align: center;
 transition: 0.4s ease-in-out;
 animation:${showContact} 1s ease-in-out;

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
  @media ${device.lg}{
&:hover{
  width:300px;
  span{
    width: calc(28em+4vw);
  }
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
    transition: all 0.3s ease-in-out ;
    z-index: 15;
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
  box-shadow: ${Style.boxShadow};
  color: #444444;
  background: #FFFFFF;
  transition: 0.4s ease-in-out;
  z-index: 20;
  animation:${showContact} 1s ease-in-out;

  span {
    opacity: ${(props) =>
    props.isActive ? "1" : " 0"};
    transform:  ${(props) => props.isActive ? "scale(1)" : "scale(0.2)"};
    max-width: ${(props) =>
    props.isActive ? "100%" : " 0px"};
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