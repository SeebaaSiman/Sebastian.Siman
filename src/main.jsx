import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { LanguageProvider } from "./language/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);