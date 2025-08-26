export type Lang = "ua" | "ru" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  ua: {
    description: "Калькулятор ресурсів порталу для Hustle Castle",
    requiredSouls: "Потрібно душ",
    existingSouls: "Душі в наявності",
    farmFloor: "Поверх для фарму",
    soulBanner: "Прапор душ (рівень)",
    soulCatcher: "Ловець душ (множник)",
    huntersQuarter: "Мисливський квартал (рівень)",
    summaryApples: "Яблука",
    summaryBattles: "Битви",
    portalCalculator: "Портальний калькулятор",
  },
  en: {
    description: "Portal resources calculator for Hustle Castle",
    requiredSouls: "Souls required",
    existingSouls: "Existing souls",
    farmFloor: "Farm floor",
    soulBanner: "Banner of souls (level)",
    soulCatcher: "Soul Catcher (multiplier)",
    huntersQuarter: "Hunters neighborhood (level)",
    summaryApples: "Apples",
    summaryBattles: "Battles",
    portalCalculator: "Portal Calculator",
  },
  ru: {
    description: "Калькулятор ресурсов портала для Hustle Castle",
    requiredSouls: "Требуется душ",
    existingSouls: "Души в наличии",
    farmFloor: "Этаж для фарма",
    soulBanner: "Знамя душ (уровень)",
    soulCatcher: "Ловец душ (множитель)",
    huntersQuarter: "Охотничий квартал (уровень)",
    summaryApples: "Яблоки",
    summaryBattles: "Битвы",
    portalCalculator: "Портальный калькулятор",
  },
} as const;

export type TranslationKey = keyof typeof translations["ua"];