import { useState, createContext } from "react";
import { enTexts, esTexts } from "/src/language/text";

// Crea el contexto
export const LanguageContext = createContext();

// Crea un proveedor para el contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Establece el idioma inicial

  // Determina los textos según el idioma seleccionado
  const texts = language === "en" ? enTexts : esTexts;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
