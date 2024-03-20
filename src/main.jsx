import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/sections/App";
import {
  LanguageProvider,
  CursorProvider,
  NavBarProvider,
  ModalProvider,
} from "/src/context";
import { ThemeStyleProvider } from "@/Theme/ThemeStyleProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeStyleProvider>
      <LanguageProvider>
        <CursorProvider>
          <ModalProvider>
            <NavBarProvider>
              <App />
            </NavBarProvider>
          </ModalProvider>
        </CursorProvider>
      </LanguageProvider>
    </ThemeStyleProvider>
  </React.StrictMode>
);
