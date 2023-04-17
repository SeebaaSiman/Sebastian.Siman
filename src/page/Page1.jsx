import { useEffect, useState } from "react";
import avatar from "../assets/perfil.jpg";
import {
  ContainerBanner,
  ContainerMouse,
  Home,
  TextChange,
  MouseScrolling,
} from "../components/page 1";
export const Page1 = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <Home>
      <ContainerBanner>
        <TextChange />
        <img src={avatar} />
      </ContainerBanner>
      <ContainerMouse>{loading ? <MouseScrolling /> : null}</ContainerMouse>
    </Home>
  );
};

//! Título con buen efecto hover, fondo negro con un video con rayos o algo así, al hacer scroll el título se va hacia adelante (scale) y abajo, haciendo efecto parallax
//! Crear un grid layout para móvil o pc responsive, El fondo un video bien oscuro con relámpagos, un título con efecto hover, y la animación del mouse scroll
