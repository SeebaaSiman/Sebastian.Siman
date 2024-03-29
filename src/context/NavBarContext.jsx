import { useRef, createContext, useState } from "react";
import { useSmoothScroll } from "@/hook";

//Crear contexto y sus valores default
export const NavBarContext = createContext({
  showNavBar: "false",
  setShowNavBar: () => {},
  inNavBar: () => {},
  outNavBar: () => {},
  scrollToSection: () => {},
});

// Crear el Provider que es el provider y sus estados y funciones que quiero mandar al contexto
export const NavBarProvider = ({ children }) => {
  //Estado para mostrar o no la segunda parte del navbar
  const [showNavBar, setShowNavBar] = useState(false);
  const inNavBar = () => setShowNavBar(true);
  const outNavBar = () => setShowNavBar(false);
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
    showNavBar,
    setShowNavBar,
    inNavBar,
    outNavBar,
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
