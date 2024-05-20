import { useRef, createContext } from "react";
import { useSmoothScroll } from "@/hook";

//Crear contexto y sus valores default
export const NavBarContext = createContext({
  scrollToSection: () => {},
});

// Crear el Provider que es el provider y sus estados y funciones que quiero mandar al contexto
export const NavBarProvider = ({ children }) => {
  //Referencias mandadas al hook para desplazarse a la sección que se ponga la referencia al hacer click en el navbar
  const page1Ref = useRef();
  const aboutRef = useRef();
  const page4Ref = useRef();

  useSmoothScroll(page1Ref);
  useSmoothScroll(aboutRef);
  useSmoothScroll(page4Ref);

  // Fx del navbar que disparará el desplazamiento
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contextValue = {
    page1Ref,
    aboutRef,
    page4Ref,
    scrollToSection,
  };
  return (
    <NavBarContext.Provider value={contextValue}>
      {children}
    </NavBarContext.Provider>
  );
};
