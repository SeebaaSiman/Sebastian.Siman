import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { About, Subtitle, Title } from "../style";

export const Page2 = () => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const element = elementRef.current;

    gsap.set(element, { opacity: 1 });

    ScrollTrigger.create({
      trigger: container,
      start: "20% bottom",
      // end: "",
      onStart: (self) => {
        gsap.to(element, { opacity: self.progress });
      },
      onComplete: () => {
        gsap.to(element, { opacity: 0 });
      },
    });
  }, []);
  return (
    <About>
      <div ref={containerRef}>
        <Title>About me</Title>
        <Subtitle ref={elementRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt?
          Quasi harum consequuntur voluptatum tenetur aliquam eaque quibusdam,
          non officiis! Adipisci consequuntur dicta cupiditate, ducimus
          molestias delectus aspernatur cumque earum.
        </Subtitle>
      </div>
    </About>
  );
};
//! A medida que se hace scroll el texto aparece del fondo y se scale , al hacer scroll el fondo negro va cambiando cada vez más gris. Al hacer scroll para irse , van desapareciendo, opacidad.
//! En este punto aparece el navbar para ir al home, about me o proyectos y contacto. Aparece desde arriba, con la curvatura como el modal
//! un toggle que cambie el idioma inglés / español
//! puede ser que se use el efecto de que se escribe a máquina, en vez del efecto scalado al aparecer, pero si que se vaya hacia el fondo al hacer scroll
