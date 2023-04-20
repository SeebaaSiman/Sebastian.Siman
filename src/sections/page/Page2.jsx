import { useContext, useEffect, useRef } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import { AboutContainer, NavBarContext, Text, Title } from "../../components";

export const Page2 = () => {
  //Creo referencias a los textos para usar el hook observer, al ser observados cambian su class css y hacen animación
  const refText = useRef();
  const refText2 = useRef();
  const refText3 = useRef();
  const options = {
    threshold: 0.5,
  };
  const isIntersecting = useIntersectionObserver(refText, options);
  const isIntersecting2 = useIntersectionObserver(refText2, options);
  const isIntersecting3 = useIntersectionObserver(refText3, options);

  //Hago visible la segunda porción del navbar con una fx inNavBar desde el context. Llamo a esa fx al ser visible en el viewport el refText3 (reutilizo la useRef) y uso el useEffect para llamar la fx
  //Traigo del contexto la referencia aboutRef para usarla con el navbar y navegar
  const { inNavBar, aboutRef } = useContext(NavBarContext);
  const isIntersecting4 = useIntersectionObserver(refText3, { threshold: 1 });
  useEffect(() => {
    if (isIntersecting4) {
      inNavBar();
    }
  }, [isIntersecting4]);

  return (
    <AboutContainer ref={aboutRef}>
      <Title ref={refText} className={`${isIntersecting && "visible"}`}>
        Mi nombre es Sebastián y soy desarrollador web. Desde que descubrí la
        programación, me enamoré de ella y no he parado de aprender y mejorar
        mis habilidades desde entonces. Me apasiona especialmente el desarrollo
        front-end, y disfruto especialmente trabajando con JavaScript para crear
        experiencias web interactivas y dinámicas.
      </Title>
      <Text ref={refText2} className={`${isIntersecting2 && "visible"}`}>
        Además de la programación, tengo varios intereses y hobbies. Soy un gran
        aficionado del fútbol y el baloncesto, y disfruto ver partidos y seguir
        a mis equipos favoritos.
      </Text>
      <Text ref={refText3} className={`${isIntersecting3 && "visible"}`}>
        También me interesa el mundo de las ventas y la negociación, lo que me
        ha permitido desarrollar habilidades de comunicación y liderazgo que son
        muy valiosas en mi carrera como desarrollador web. Si estás buscando un
        desarrollador web comprometido y apasionado, te cuento que estás leyendo
        su página.
      </Text>
    </AboutContainer>
  );
};
