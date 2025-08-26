import React, { createContext, useState } from "react";
import { translations, Lang, TranslationKey } from "./translations";

interface LangContextType {
  lang: Lang;
  setLang: (lang: string) => void;
  t: (key: TranslationKey) => string;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ua");

  const safeSetLang = (lang: string) => {
    setLang(lang in translations ? (lang as Lang) : "en");
  };

  const t = (key: TranslationKey) => translations[lang][key];

  return <LangContext.Provider value={{ lang, setLang: safeSetLang, t }}>{children}</LangContext.Provider>;
};
