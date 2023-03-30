import styled from "styled-components";
import { Title } from "../components/page 1/Title";

export const Page1 = () => {
  return (
    <Back>
      <Title />
    </Back>
  );
};
const Back = styled.div`
  height: 200vh;
`;

//! Título con buen efecto hover, fondo negro con un video con rayos o algo así, al hacer scroll el título se va hacia adelante (scale) y abajo, haciendo efecto parallax

//! "Soy Sebastián Siman" ó "I'm Sebastián Siman" , según el toggle de idioma. Abajo chiquito "developer"
