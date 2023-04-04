import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutContainer, Subtitle, Title } from "../components/page 2/page2Styles";

gsap.registerPlugin(ScrollTrigger);

export const Page2 = () => {
  const subtitleRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    // gsap.from(subtitleRef.current, {
    //   duration: 1,
    //   opacity: 0,
    //   y: 50,
    //   ease: "bounce.out",
    //   x: -50,
    //   scrollTrigger: {
    //     trigger: aboutRef.current,
    //     // start: "top 80%",
    //     markers: true,
    //     // pin:true,
    //     // scrub: true,
    //     endTrigger: aboutRef.current,
    //     end: "bottom 20%",
    //     toggleActions: "reverse none none reset",
    //   },
    // });
    gsap.to(subtitleRef.current, {
      duration: 1000,
      opacity: 1,
      ease: "power3.out",
      // x: 50,
      // y: -50,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        // markers: true,
        scrub: 1,
        // pin: true,
        // endTrigger: aboutRef.current,
        // end: "bottom 70%",
        toggleActions: "reverse none none reset",
      },
    });
  }, []);
  return (
    <AboutContainer ref={aboutRef}>
      <Title>¡Hola a todos!</Title>
      <Subtitle ref={subtitleRef}>
        Mi nombre es Sebastián y soy desarrollador web. Desde que descubrí la
        programación, me enamoré de ella y no he parado de aprender y mejorar
        mis habilidades desde entonces. Me apasiona especialmente el desarrollo
        front-end, y disfruto especialmente trabajando con JavaScript para crear
        experiencias web interactivas y dinámicas. Además de la programación,
        tengo varios intereses y hobbies. Soy un gran aficionado del fútbol y el
        baloncesto, y disfruto ver partidos y seguir a mis equipos favoritos.
        También me interesa el mundo de las ventas y la negociación, lo que me
        ha permitido desarrollar habilidades de comunicación y liderazgo que son
        muy valiosas en mi carrera como desarrollador web. Si estás buscando un
        desarrollador web comprometido y apasionado, te cuento que estás leyendo
        su página.
      </Subtitle>
    </AboutContainer>
  );
};

//! A medida que se hace scroll el texto aparece del fondo y se scale , al hacer scroll el fondo negro va cambiando cada vez más gris. Al hacer scroll para irse , van desapareciendo, opacidad.
//! En este punto aparece el navbar para ir al home, about me o proyectos y contacto. Aparece desde arriba, con la curvatura como el modal
//! un toggle que cambie el idioma inglés / español
//! puede ser que se use el efecto de que se escribe a máquina, en vez del efecto scalado al aparecer, pero si que se vaya hacia el fondo al hacer scroll
