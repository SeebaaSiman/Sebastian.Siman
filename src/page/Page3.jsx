import styled from "styled-components";

const Div = styled.div`
  height: 105vh;
  color: white;
`;
export const Page3 = () => {
  return (
    <Div>
      <div>Modal de proyectos</div>
      <div>Modal de redes sociales</div>
    </Div>
  );
};
//! se llega con scroll, de manera horizontal y hacia la izquierda.
//! dos secciones en la página, una de proyectos y otra de redes sociales. Ambas al hacer click se abre un modal
//! el Modal de proyectos. El más complicado y ambicioso, cada proyecto es una card, al hacer hover, algo de la card sale de la card, dando efecto 3D, el background que es una imágen al hacer hover se pone play el video del proyecto (hay que hacer screen recorder). Al costado de la pantalla, donde debería estar el modal de redes sociales, aparece la explicación del proyecto
//! el Modal de redes sociales, es más simple, ya que aparecen los iconos de github, linkedin y mail.
//! para salir del modal hay que apretar la flecha de arriba a la izquierda, que hace efecto al hacer hover. Y el modal ocupa toda la pantalla. Al abrirse el modal sale de abajo en forma curva, hasta cubrir la pantalla.

//! en el modal de proyectos, la explicación aparece con efecto máquina de escribir