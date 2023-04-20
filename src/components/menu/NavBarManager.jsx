import { createContext } from "react";
import { useState } from "react";
//Crear contexto y sus valores default
export const NavBarContext = createContext({
  showNavBar: "false",
  activeSection: "null",
  setShowNavBar: () => {},
  inNavBar: () => {},
  outNavBar: () => {},
  handleNavigation: () => {},
});
// Crear el manager que es el provider y sus estados y funciones que quiero mandar al contexto
export const NavBarManager = ({ children }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const inNavBar = () => setShowNavBar(true);
  const outNavBar = () => setShowNavBar(false);

  const [activeSection, setActiveSection] = useState(null);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };
  return (
    <NavBarContext.Provider
      value={{
        showNavBar,
        setShowNavBar,
        inNavBar,
        outNavBar,
        activeSection,
        handleNavigation,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
// En la parte más alta de la app proveer el contexto de NavBarManager
