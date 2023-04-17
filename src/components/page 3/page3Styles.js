import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h1 {
    margin: 2rem;
    opacity: 0;
    transform: translateY(-50%) scale(0.8);
    transition: opacity 1s ease-out, transform 1s ease-out,
      scale 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  h1.visible {
    opacity: 1;
    transform: translateY(0%) scale(1.1);
  }
`;
//títulos 2rem
export const TypingContainer = styled.div`
  margin: 3rem;
`;

export const text =
    "Mi experiencia se centra en lenguajes y frameworks como HTML, CSS,JavaScript y React. Como desarrollador web, mi objetivo a corto plazo es desafiarme a mí mismo y crear 1000 proyectos en los que pueda aplicar y mejorar mis habilidades.";
export const text2 =
    "¿Te animas a ser parte de este reto y acompañarme en este camino hacia el éxito?";
