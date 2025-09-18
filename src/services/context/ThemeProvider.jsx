import { createContext } from "react";
import { ThemeProvider } from "styled-components";
 import { darkTheme, lightTheme } from "../../styles/theme-style";
import GlobalStyle from "../../styles/GlobalStyle";
import { useThemeMode } from "../../hook/useThemeMode";

export const ThemeContext = createContext();

export const ThemeStyleProvider = ({ children }) => {
  const themeMode = useThemeMode();
  const theme = themeMode.isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
