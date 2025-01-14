import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global-style.css";
import App from "./App.jsx";
import { LanguageProvider } from "./services/context/LanguageContext.jsx";
import { CursorProvider } from "./services/context/CursorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <CursorProvider>
        <App />
      </CursorProvider>
    </LanguageProvider>
  </StrictMode>
);
