import { useEffect, useState } from "react";
import styled from "styled-components";
import { MouseScrolling } from "../components/page 1/MouseScrolling";
import { Title } from "../components/page 1/Title";

export const Page1 = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <Home>
      <Title />

      <ContainerMouse>{loading ? <MouseScrolling /> : null}</ContainerMouse>
    </Home>
  );
};
const Home = styled.div`
  height: 100vh;
  width: 100vw;
`;
const ContainerMouse = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 5;
  /* display: flex;
	justify-content: center;
	align-items: center; */
`;



//! Título con buen efecto hover, fondo negro con un video con rayos o algo así, al hacer scroll el título se va hacia adelante (scale) y abajo, haciendo efecto parallax

//! "Soy Sebastián Siman" ó "I'm Sebastián Siman" , según el toggle de idioma. Abajo chiquito "developer"
//! Crear símbolo de scroll.
