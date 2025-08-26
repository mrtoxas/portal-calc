import { Lang, translations } from "../lang/translations";

export const useLanguageDetect = () => {
  const storageLang = localStorage.getItem('lang');
  if (storageLang && Object.keys(translations).includes(storageLang)) {
    return storageLang;
  }

  const browserLang = navigator.language.split('-')[0];
  const supportedLangs: Record<string, Lang> = {
    'uk': 'ua',
    'ru': 'ru',
    'en': 'en'
  };

  return supportedLangs[browserLang] || 'en';
};