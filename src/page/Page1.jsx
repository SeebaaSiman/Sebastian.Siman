import { useEffect, useState } from "react";
import styled from "styled-components";
import { MouseScrolling } from "../components/page 1/MouseScrolling";
import { Title } from "../components/page 1/Title";
import { TitleTyping } from "../components/page 1/TitleTyping";

export const Page1 = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <Home>
      <Title />
      {/* <TitleTyping /> */}
      {/* <TitleStyle /> */}
      {/*
      <ContainerMouse>{loading ? <MouseScrolling /> : null}</ContainerMouse> */}
    </Home>
  );
};
const Home = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
//! Crear un grid layout para móvil o pc responsive, El fondo un video bien oscuro con relámpagos, un título con efecto hover, y la animación del mouse scroll
