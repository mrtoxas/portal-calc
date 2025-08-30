import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./styles/global.css";
import { LangProvider } from "./lang/langContent";
import { AppRouter } from "./appRouter/appRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <AppRouter />
    </LangProvider>
  </StrictMode>,
);
