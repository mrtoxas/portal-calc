import React, { createContext, useEffect, useState } from "react";
import { translations, Lang, TranslationKey } from "./translations";
import { useInitialLang } from "../hooks/useInitialLang";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(useInitialLang(translations, "en"));

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};
