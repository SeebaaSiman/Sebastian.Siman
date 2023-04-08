import {
  Container,
  ImageWrapper,
  ContentWrapper,
  HoverImage,
} from "../components/page 4/";
import img1 from "../assets/bg-1.jpg";
import img2 from "../assets/bg-2.jpg";
import video1 from "../assets/code.mp4";
import video2 from "../assets/social-media.mp4";
// import { HoverImage } from "../components/page 4/HoverImage";
export const Page4 = () => {
  const arr = [
    { img: img1, video: video1, h2: "Projects", button: "button1" },
    { img: img2, video: video2, h2: "Contact", button: "button2" },
  ];
  return (
    <Container>
      {arr.map((item) => (
        <ImageWrapper key={item.h2}>
          <HoverImage video={item.video} image={item.img} />
          <ContentWrapper>
            <h2>{item.h2}</h2>
            <button>{item.button}</button>
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
