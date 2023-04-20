import { useRef, createContext, useState } from "react";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

//Crear contexto y sus valores default
export const NavBarContext = createContext({
  showNavBar: "false",
  setShowNavBar: () => {},
  inNavBar: () => {},
  outNavBar: () => {},
  scrollToSection: () => {},
});

// Crear el manager que es el provider y sus estados y funciones que quiero mandar al contexto
export const NavBarManager = ({ children }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const inNavBar = () => setShowNavBar(true);
  const outNavBar = () => setShowNavBar(false);
  const page1Ref = useRef();
  useSmoothScroll(page1Ref);
  const aboutRef = useRef();
  useSmoothScroll(aboutRef);
  const page4Ref = useRef();
  useSmoothScroll(page4Ref);
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavBarContext.Provider
      value={{
        showNavBar,
        setShowNavBar,
        inNavBar,
        outNavBar,
        page1Ref,
        aboutRef,
        page4Ref,
        scrollToSection,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
// En la parte más alta de la app proveer el contexto de NavBarManager
