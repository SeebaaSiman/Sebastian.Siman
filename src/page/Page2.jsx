import { AboutContainer, Text, Title } from "../components/page 2/page2Styles";
import { Navbar3 } from "../components/navBar/Navbar3/Navbar3";
import useIntersectionObserver from "../hook/useIntersectionObserver";
import { useRef } from "react";
export const Page2 = () => {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const options = {
    threshold: 0.5,
  };
  const isIntersecting = useIntersectionObserver(ref, options);
  const isIntersecting2 = useIntersectionObserver(ref2, options);
  const isIntersecting3 = useIntersectionObserver(ref3, options);
  return (
    <AboutContainer>
      {/* <Navbar3 /> */}
      <Title ref={ref} className={`${isIntersecting && "visible"}`}>
        Mi nombre es Sebastián y soy desarrollador web. Desde que descubrí la
        programación, me enamoré de ella y no he parado de aprender y mejorar
        mis habilidades desde entonces. Me apasiona especialmente el desarrollo
        front-end, y disfruto especialmente trabajando con JavaScript para crear
        experiencias web interactivas y dinámicas.
      </Title>
      <Text ref={ref2} className={`${isIntersecting2 && "visible"}`}>
        Además de la programación, tengo varios intereses y hobbies. Soy un gran
        aficionado del fútbol y el baloncesto, y disfruto ver partidos y seguir
        a mis equipos favoritos.
      </Text>
      <Text ref={ref3} className={`${isIntersecting3 && "visible"}`}>
        También me interesa el mundo de las ventas y la negociación, lo que me
        ha permitido desarrollar habilidades de comunicación y liderazgo que son
        muy valiosas en mi carrera como desarrollador web. Si estás buscando un
        desarrollador web comprometido y apasionado, te cuento que estás leyendo
        su página.
      </Text>
    </AboutContainer>
  );
};

//! En este punto aparece el navbar para ir al home, about me o proyectos y contacto. Aparece desde arriba, con la curvatura como el modal
//! un toggle que cambie el idioma inglés / español
