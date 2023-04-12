import {
  Container,
  ImageWrapper,
  ContentWrapper,
  HoverVideo,
  ModalProjectItems,
  ModalContactItems,
} from "../components/page 4/";
import video1 from "../assets/code.mp4";
import video2 from "../assets/social-media.mp4";
export const Page4 = () => {
  const dataBase = [
    {
      backgroundVideo: video1,
      description: "Projects",
      modal: <ModalProjectItems />,
    },
    {
      backgroundVideo: video2,
      description: "Contact",
      modal: <ModalContactItems />,
    },
  ];
  return (
    <Container>
      {dataBase.map((item, index) => (
        <ImageWrapper key={index}>
          <HoverVideo src={item.backgroundVideo} />
          <ContentWrapper>
            <h2>{item.description}</h2>
            {item.modal}
          </ContentWrapper>
        </ImageWrapper>
      ))}
    </Container>
  );
};
//! el Modal de proyectos. El más complicado y ambicioso, cada proyecto es una card, al hacer hover, algo de la card sale de la card, dando efecto 3D, el background que es una imágen al hacer hover se pone play el video del proyecto (hay que hacer screen recorder). Al costado de la pantalla, donde debería estar el modal de redes sociales, aparece la explicación del proyecto
//! el Modal de redes sociales, es más simple, ya que aparecen los iconos de github, linkedin y mail.
//! para salir del modal hay que apretar la flecha de arriba a la izquierda, que hace efecto al hacer hover. Y el modal ocupa toda la pantalla. Al abrirse el modal sale de abajo en forma curva, hasta cubrir la pantalla.

//! en el modal de proyectos, la explicación aparece con efecto máquina de escribir
// let components = collectionVariable.map((item, index) =>
//   <Component data={item} index={index} key={uniqueKey} />);
// ...
// <div>{components}</div>
