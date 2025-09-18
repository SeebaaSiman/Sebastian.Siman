import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "./services/context/AppProviders";
import AppRoutes from "./services/routes/AppRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </StrictMode>
);
