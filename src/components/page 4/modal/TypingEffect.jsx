import React from "react";
import styled, { keyframes } from "styled-components";

export const TypingEffect = () => {
  const typingg = "Aquí va el texto que recibe el componente";
  const stepss = typingg.length;
  console.log(stepss);
  return (
    <Wrapper>
      <Effect>{typingg}</Effect>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;
const show = keyframes`
from{width:0}
`;
const blink = keyframes`
50%{border-color:transparent;}
`;
const Effect = styled.div`
  width: 100%;
  animation: ${show} 2s steps(${(props) => props.stepss}),
    //corregir el poder pasar stepss como prop y funciona todo el componente
    ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2rem;
`;
