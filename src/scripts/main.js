import {
    getSoulFloorDefault,
    getAppleForBattle,
    getSoulCatcherBonus,
    getSoulBannerBonus,
    getSoulQuarterBonus
} from './utils';

const form = document.getElementById("calc");
const resultApples = document.getElementById("resultApples");
const resultBattles = document.getElementById("resultBattles");

const {
    needSoulInp,
    availableSoulInp,
    portalFloorSel,
    soulCatcherSel,
    soulBannerSel,
    soulQuarterSel
} = form;

const formChangeHandler = () => {
    const soulPerBattle = getSoulFloorDefault(portalFloorSel);
    const appleForBattle = getAppleForBattle(portalFloorSel);
    const soulCatcherBonus = getSoulCatcherBonus(soulCatcherSel, soulPerBattle);
    const soulBannerBonus = getSoulBannerBonus(soulBannerSel, soulPerBattle);
    const soulQuarterBonus = getSoulQuarterBonus(soulQuarterSel, soulPerBattle);

    const soulPerBattleWithBonuses = soulPerBattle + soulCatcherBonus + soulBannerBonus + soulQuarterBonus;

    const needBattles  = Math.ceil((needSoulInp.value - availableSoulInp.value) / soulPerBattleWithBonuses);

    if (appleForBattle && isFinite(needBattles)) {
        resultApples.innerText = String(appleForBattle * needBattles);
        resultBattles.innerText = String(needBattles);
    }
}

const preparedFromLocalStorage = () => {
    const storageData = JSON.parse(localStorage.getItem('portalCalcFields'));
    if (!storageData) return;

    if (storageData.hasOwnProperty('soulCatcherBonus')) soulCatcherSel.value = storageData.soulCatcherBonus;
    if (storageData.hasOwnProperty('soulBannerBonus')) soulBannerSel.value = storageData.soulBannerBonus;
    if (storageData.hasOwnProperty('soulQuarterBonus')) soulQuarterSel.value = storageData.soulQuarterBonus;
}

form.addEventListener("change", formChangeHandler, false);
document.addEventListener('DOMContentLoaded', preparedFromLocalStorage, false);
