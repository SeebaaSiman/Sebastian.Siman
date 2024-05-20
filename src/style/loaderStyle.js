import styled from "styled-components";
import { sweep, rotate } from "./animation";

export const LoaderContent = styled.div`
position: fixed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #4A5C6A;
  z-index: 1000;
  animation: ${sweep} 4s linear forwards;
  img{
    background-color: transparent;
    animation: ${rotate} 2s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;