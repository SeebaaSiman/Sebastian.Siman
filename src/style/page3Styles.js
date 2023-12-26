import styled from "styled-components";
import { bounceLeft } from "./animation";

export const ContainerPage3 = styled.article`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap:1rem;
  `;
export const IconContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
span{
  margin:0.2rem;
  opacity: 0;
  }
  span.visible{
    animation: ${bounceLeft} .6s linear forwards;
    &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.7s;
  }
  &:nth-child(4) {
    animation-delay: 1s;
  }
}
`