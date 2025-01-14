import { useContext } from "react";
import { LanguageContext } from "../services/context/LanguageContext";
import { CursorContext } from "../services/context/CursorContext";

export const useLanguage = () => {
 const context = useContext(LanguageContext);
 if (!context) {
  throw new Error("useLanguage must be used within a LanguageProvider");
 }
 return context;
};

export const useCustomCursorContext = () => {
 const context = useContext(CursorContext);
 if (!context) {
  throw new Error("useCustomCursor must be used within a CursorContext.Provider");
 }
 return context;
};
