export const translations = {
  ua: {
    requiredSouls: "Потрібно душ",
    existingSouls: "Душі в наявності",
    farmFloor: "Поверх для фарму",
    soulBanner: "Прапор душ",
    soulCatcher: "Ловець душ (множник)",
    huntersQuarter: "Мисливський квартал",
    summaryApples: "Яблука",
    summaryBattles: "Битви",
    portalCalculator: "Портальний калькулятор"
  },
  en: {
    requiredSouls: "Souls required",
    existingSouls: "Existing souls",
    farmFloor: "Farm floor",
    soulBanner: "Banner of souls",
    soulCatcher: "Soul Catcher (multiplier)",
    huntersQuarter: "Hunters neighborhood",
    summaryApples: "Apples",
    summaryBattles: "Battles",
    portalCalculator: "Portal Calculator"
  },
  ru: {
    requiredSouls: "Требуется душ",
    existingSouls: "Души в наличии",
    farmFloor: "Этаж для фарма",
    soulBanner: "Знамя душ",
    soulCatcher: "Ловец душ (множитель)",
    huntersQuarter: "Охотничий квартал",
    summaryApples: "Яблоки",
    summaryBattles: "Битвы",
    portalCalculator: "Портальный калькулятор"
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations["ua"];