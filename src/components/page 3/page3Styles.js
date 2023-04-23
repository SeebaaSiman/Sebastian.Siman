import styled, { keyframes } from "styled-components";
const bounceLeft = keyframes`
0%{transform:scale(.5);opacity:1;transform-origin:top left}
100%{transform:scale(1);opacity:1;transform-origin:top left}`;

export const ContainerPage3 = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  `;
//títulos 2rem
export const TypingContainer = styled.div`
  margin: 1rem 3rem;
  `;
export const IconContainer = styled.div`
display:flex;
span{
  margin:0.3rem;
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
};
export const iconSize = "calc(5rem + 3vw)";