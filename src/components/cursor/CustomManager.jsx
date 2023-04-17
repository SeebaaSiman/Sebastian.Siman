import { createContext, useState } from "react";

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
});
export default function CursorManager(props) {
  const [size, setSize] = useState("small");
  const handleMouseEnter = () => {
    setSize("medium");
  };
  const handleMouseLeave = () => {
    setSize("small");
  };
  return (
    <CursorContext.Provider value={{ size, setSize ,handleMouseLeave,handleMouseEnter}}>
      {props.children}
    </CursorContext.Provider>
  );
}

//Importar en la parte más alta de la app. Es un provider

// Importar fx y efectos
// const { handleMouseLeave, handleMouseEnter } = useContext(CursorContext);