import { useRef } from "react";
import { NavBar, NavBarManager } from "../components";
import { SectionHorizontal, SectionVertical } from "./";
import { useSmoothScroll } from "../hook/useSmoothScroll";
export const TotalSections = () => {
  //Creo las referencias que luego se las paso al hook useSmoothScroll. Estas referencias irán hasta el componente nieto que tenga que usarla, también las recibe el navbar para usarlas en la fx de scrollTo
  const page1Ref = useRef();
  useSmoothScroll(page1Ref);
  const aboutRef = useRef();
  useSmoothScroll(aboutRef);
  const projectRef = useRef();
  useSmoothScroll(projectRef);
  const contactRef = useRef();
  useSmoothScroll(contactRef);

  // window.scrollTo({
  //   top: ref.current.offsetTop,
  //   behavior: 'smooth'
  //fx que usará en el navbar para hacer scrollTo según la referencia con su sección que quiero navegar
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <NavBarManager>
      <NavBar
        scrollToSection={scrollToSection}
        page1Ref={page1Ref}
        aboutRef={aboutRef}
      />
      <SectionVertical page1Ref={page1Ref} aboutRef={aboutRef} />
      <SectionHorizontal />
    </NavBarManager>
  );
};

// projectRef={projectRef} contactRef={contactRef}
