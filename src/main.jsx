import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/sections/App";
import { LanguageProvider } from "@/language/LanguageContext";
import { ThemeStyleProvider } from "@/components/Theme/ThemeStyleProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeStyleProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeStyleProvider>
  </React.StrictMode>
);
