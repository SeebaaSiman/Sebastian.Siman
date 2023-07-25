import * as Unicons from "@iconscout/react-unicons";
import styled, { keyframes } from "styled-components";
import { device } from "../../style/StyleGlobal";
const bounceLeft = keyframes`
0%{transform:scale(.5);opacity:1;transform-origin:top left}
100%{transform:scale(1);opacity:1;transform-origin:top left}`;

export const ContainerPage3 = styled.article`
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  @media ${device.sm}{
    height: 100vh;
  }
  `;
//títulos 2rem
export const TypingContainer = styled.div`
height: 50vh;
 &:nth-child(1){
  margin-top: 22px;
}
  `;
export const IconContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
span{
  margin:0.2rem;
  opacity: 0;
  }
  span.visible{
    animation: ${bounceLeft} .9s linear forwards;
    &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.9s;
  }
  &:nth-child(3) {
    animation-delay: 1.4s;
  }
  &:nth-child(4) {
    animation-delay: 1.8s;
  }
}
`
export const styleIcon = {
  filter: " drop-shadow(5px 5px 5px #222)",
  borderRadius: "16px"
};
export const iconSize = `5rem`;

export const LeftContainer = styled.div`
width:calc(100% - 6rem);
height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`