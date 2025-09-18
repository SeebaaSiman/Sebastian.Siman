import { useContext } from "react";
import { LanguageContext } from "../services/context/LanguageContext";
import { CursorContext } from "../services/context/CursorContext";
import { ThemeContext } from "../services/context/ThemeProvider";
import { HorizontalSectionContext } from "../services/context/HorizontalSectionContext";

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
export const useThemeContext = () => {
 const context = useContext(ThemeContext);
 if (!context) {
  throw new Error("useThemeContext must be used within an ThemeContext");
 }
 return context;
};
export const useHorizontalSectionProvider = () => {
 const context = useContext(HorizontalSectionContext);
 if (!context) {
  throw new Error("useHorizontalSectionProvider must be used within an ThemeContext");
 }
 return context;
};
