export const useInitialLang = <T extends Record<string, Record<string, string>>>(
  translations: T,
  defaultLang: keyof T
): keyof T => {
  const storageLang = localStorage.getItem("lang");
  if (storageLang && storageLang in translations) {
    return storageLang as keyof T;
  }

  const browserLang = navigator.languages?.[0] || navigator.language;
  const formattedBrowserLang = browserLang.split("-")[0].toLowerCase();
  if (formattedBrowserLang in translations) {
    return formattedBrowserLang as keyof T;
  }

  return defaultLang;
};
