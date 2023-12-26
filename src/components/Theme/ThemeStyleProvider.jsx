import { ThemeProvider } from "styled-components";
import { useThemeMode } from "@/hook";
import { lightTheme, darkTheme } from ".";

export const ThemeStyleProvider = ({ children }) => {
  const isDarkMode = useThemeMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

//app.jsx
