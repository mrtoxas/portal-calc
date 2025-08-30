import { useContext } from "react";
import { LangContext } from "../lang/langContent";

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};
