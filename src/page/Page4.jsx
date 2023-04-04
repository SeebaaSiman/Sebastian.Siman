import {
  Oblique,
  SkewBlockRepeat,
  MainBlockOblique,
  A,
  ObliqueInner,
  ImageWrapper,
  MainImage,
  Image,
  ObliqueCaption,
} from "../components/page 4/page4Styles";
import img1 from "../assets/bg-1.jpg";
import img2 from "../assets/bg-2.jpg";
export const Page4 = () => {
  const arr = [
    { a: "", img: img1, text: "Facial", button: "Discover", buttonText: "Discover" },
    { a: "", img: img2, text: "Cosmetics", button: "Discover", buttonText: "Discover" },
  ];
  return (
    <Oblique className="oblique">
      <MainBlockOblique className="main-block-oblique skew-block">
        {arr.map((item) => (
          <SkewBlockRepeat className="skew-block-repeat" key={item.text}>
            <A href={item.a}>
              <ObliqueInner className="oblique-inner">
                <ImageWrapper className="image-wrapper">
                  <MainImage className="main-image">
                    <Image src={item.img} className="image-img" />
                  </MainImage>
                </ImageWrapper>
              </ObliqueInner>
              <ObliqueCaption className="oblique-caption caption-top">
                <h2>{item.text}</h2>
                <button href={item.button}>{item.buttonText}</button>
              </ObliqueCaption>
            </A>
          </SkewBlockRepeat>
        ))}
      </MainBlockOblique>
    </Oblique>
  );
};
//! se llega con scroll, de manera horizontal y hacia la izquierda.
//! dos secciones en la página, una de proyectos y otra de redes sociales. Ambas al hacer click se abre un modal
//! el Modal de proyectos. El más complicado y ambicioso, cada proyecto es una card, al hacer hover, algo de la card sale de la card, dando efecto 3D, el background que es una imágen al hacer hover se pone play el video del proyecto (hay que hacer screen recorder). Al costado de la pantalla, donde debería estar el modal de redes sociales, aparece la explicación del proyecto
//! el Modal de redes sociales, es más simple, ya que aparecen los iconos de github, linkedin y mail.
//! para salir del modal hay que apretar la flecha de arriba a la izquierda, que hace efecto al hacer hover. Y el modal ocupa toda la pantalla. Al abrirse el modal sale de abajo en forma curva, hasta cubrir la pantalla.

//! en el modal de proyectos, la explicación aparece con efecto máquina de escribir
/* <Item className="individual">Individual</Item>
const Item = styled.div`
  height: 90%;
//   /* padding: 10px; */
//   margin: 2px;
//   &.individual:hover {
//     /* color: green; */
//   }
// `; */}
