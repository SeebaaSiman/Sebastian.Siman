import styled from "styled-components";
import { Style, device } from "@/style/StyleGlobal";
import { showInLeft, showInImgProject, showModalInfoLeft, showModalInfoBottom } from "./animation";

//* Project
const BtnDefault = styled.a`
width:  max-content;
opacity:0;
border: dashed 1px #001524;
align-items: center;
padding: 6px 16px;
text-decoration: none;
text-transform: uppercase;
font-family: "Oxygen", sans-serif;
font-weight: 600;
font-size: 18px;
border-radius: 100px;
z-index:800;
animation: ${showInLeft} 0.8s ease-in-out forwards;
animation-delay: ${(props) => props.index * .3}s;
span{
  display:none;
}
@media ${device.md}{
    border: 0 transparent;
    display: flex;
    gap:4px;
    margin:0;
    span{
      display:block;
    }
  }
  `
export const BtnAnimatedDesktop = styled(BtnDefault)`
  color:#4A5C6A ;
    text-shadow: 0 0 0 transparent;
  background-color: transparent;
&:hover, &:focus {
      color: #001524;
      text-shadow: 1px 1px 1px  #001524;
    background-color: #CCD0CF;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    border: 0 transparent;
    transition: .8s ease-in-out;
    span{
      opacity: 0;
    }
  }
  `
export const BtnAnimatedTouch = styled(BtnDefault)`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap:4px;
  color:${(props) => props.isLinkActive ? "#001524" : "#4A5C6A"};
    text-shadow:${(props) => props.isLinkActive ? "1px 1px 1px  #001524" : "0 0 0 transparent"};
  background-color:${(props) => props.isLinkActive ? "#CCD0CF" : "transparent"};
  outline: 0.1em solid transparent;
  outline-offset: 0.2em;
`
//* ListProjectEffect
export const ListProjectContainer = styled.div`
position:relative;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
@media ${device.md}{
flex-direction: row;
}
`
export const ContainerProject = styled.div`
  padding:2rem;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:4px;
  z-index:800;

@media ${device.md}{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: start;
  gap:1.5rem;
}
`;

export const ContainerImage = styled.div`
position:relative;
padding:2rem;
overflow: visible;
display: flex;
flex: 1 1 auto;
justify-content: center;
align-items: center;
img {
    position: absolute;
    height: 90%;
    width: auto;
    border-radius: 25px;
    transition: all 0.1s ease;
    animation: ${showInImgProject} 0.8s ease-in-out;
    box-shadow: ${Style.boxShadow};
    &.active {
      z-index: 99;
          }
  }
   @media ${device.md} {
  img{
  height: 75%;
 }
 }
`;
export const ContainerInfoProject = styled.div`
background-color: #CCD0CF;
display:flex;
flex-direction: column;
place-items: start;
position: absolute;
z-index: 499;
padding:6px;
color: #06141B;
box-shadow: ${Style.boxShadow};
opacity: 0;

min-width:20%;
max-width:25%;
min-height: 30%;
max-height: 100%;
bottom:20%;
right: 0;
border-radius:1rem 0 0 1rem;
animation: ${showModalInfoLeft} 0.4s ease-in-out forwards;

@media ${device.md}{
  border-radius:1rem 1rem 0 0;
  width:100%;
  min-height: 10%;
  max-height: 100%;
  right: 0%;
  bottom:0;
  animation: ${showModalInfoBottom} 0.4s ease-in-out forwards;
}
@media ${device.lg}{
  width:75%;
}
`
