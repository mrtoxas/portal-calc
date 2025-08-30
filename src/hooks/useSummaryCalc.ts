import { useMemo } from "react";
import { CalcFormData } from "../components/form/form";
import { SummaryData } from "../components/summary/summary";
import { DataCatcher, dataCatcher, dataFloor, DataQuarter, dataQuarter } from "../data";

export const useSummaryCalc = (сalcFormData: CalcFormData): SummaryData | undefined => {
  const getFieldValue = (field: keyof CalcFormData) => Number(сalcFormData[field] || 0);

  const calcBonus = (soulPerBattle: number, level: number, data: DataCatcher[] | DataQuarter[]) => {
    if (level <= 0) return 0;
    const item = data.find((i) => i.level === level);
    return Math.round((soulPerBattle / 100) * Number(item?.value || 0));
  };

  return useMemo(() => {
    const floor = dataFloor.find((f) => f.level === Number(сalcFormData["farm-floor"]));
    if (!floor) return;

    const requiredSouls = getFieldValue("required-souls");
    const existingSouls = getFieldValue("existing-souls");
    if (!requiredSouls) return;
    if (requiredSouls <= existingSouls) return;

    const catcherLevel = getFieldValue("soul-catcher");
    const bannerLevel = getFieldValue("soul-banner");
    const quarterLevel = getFieldValue("hunters-quarter");

    const { reward: soulPerBattle, apples: appleForBattle } = floor;

    const catcherBonus = catcherLevel > 0 ? soulPerBattle * catcherLevel - soulPerBattle : 0;

    const bannerBonus = calcBonus(soulPerBattle, bannerLevel, dataCatcher);
    const quarterBonus = calcBonus(soulPerBattle, quarterLevel, dataQuarter);

    const totalSoulsPerBattle = soulPerBattle + catcherBonus + bannerBonus + quarterBonus;
    const needBattles = totalSoulsPerBattle > 0 ? Math.ceil((requiredSouls - existingSouls) / totalSoulsPerBattle) : 0;

    if (appleForBattle && isFinite(needBattles)) {
      return {
        apples: appleForBattle * needBattles,
        battles: needBattles,
      };
    }
  }, [сalcFormData]);
};
