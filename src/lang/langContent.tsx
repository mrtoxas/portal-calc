import React, { createContext, useState } from "react";
import { translations, Lang, TranslationKey, langMap } from "./translations";

interface LangContextType {
  lang: Lang;
  setLang: (lang: string) => void;
  t: (key: TranslationKey) => string;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const urlLang = window.location.pathname.split("/")[1];
    if (urlLang in translations) return urlLang as Lang;

    const browserLang = (navigator.languages?.[0] || navigator.language).split("-")[0];
    if (browserLang in translations) return browserLang as Lang;

    return "en";
  });

  const safeSetLang = (lang: string) => {
    document.documentElement.lang = lang in translations ? langMap[lang as Lang] : "en";
    setLang(lang in translations ? (lang as Lang) : "en");
  };

  const t = (key: TranslationKey) => translations[lang][key];

  return <LangContext.Provider value={{ lang, setLang: safeSetLang, t }}>{children}</LangContext.Provider>;
};
