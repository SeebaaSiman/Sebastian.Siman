import { createContext, useState } from "react";

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
  handleCursorNotSize: () => {},
  handleCursorSmall: () => {},
  handleCursorMedium: () => {},
  handleCursorRegular: () => {},
  handleCursorXs: () => {},
});

export const CursorProvider = ({ children }) => {
  const [size, setSize] = useState("small");
  const handleCursorNotSize = () => {
    setSize("not-size ");
  };
  const handleCursorSmall = () => {
    setSize("small");
  };
  const handleCursorMedium = () => {
    setSize("medium");
  };
  const handleCursorRegular = () => {
    setSize("regular");
  };
  const handleCursorXs = () => {
    setSize("xs");
  };
  return (
    <CursorContext.Provider
      value={{
        size,
        setSize,
        handleCursorRegular,
        handleCursorMedium,
        handleCursorSmall,
        handleCursorXs,
        handleCursorNotSize,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

//Importar en la parte más alta de la app. Es un provider

// Importar fx y efectos
