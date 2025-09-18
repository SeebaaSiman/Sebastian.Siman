import useDeviceType from "../../hook/useDeviceType.js";
import { ThemeStyleProvider } from "./ThemeProvider.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";
import { CursorProvider } from "./CursorContext.jsx";
import { usePageVisibility } from "../../hook/usePageVisibility.js";
import CustomCursor from "../../components/CustomCursor.jsx";
import { HorizontalSectionProvider } from "./HorizontalSectionContext.jsx";

const AppProviders = ({ children }) => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  const deviceType = useDeviceType();
  return (
    <ThemeStyleProvider>
      <LanguageProvider>
        <CursorProvider>
          <HorizontalSectionProvider>
            {deviceType === "desktop" && <CustomCursor />}
            {children}
          </HorizontalSectionProvider>
        </CursorProvider>
      </LanguageProvider>
    </ThemeStyleProvider>
  );
};

export default AppProviders;
