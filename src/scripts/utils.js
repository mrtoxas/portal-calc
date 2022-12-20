export const getSoulFloorDefault = (elem) => {
    const selectedItem = Array.from(elem).find((item) => item.value === elem.value);
    return Number(selectedItem.dataset.reward);
}

export const getAppleForBattle = (elem) => {
    const selectedItem = Array.from(elem).find((item) => item.value === elem.value);
    return Number(selectedItem.dataset.apple);
}

export const getSoulCatcherBonus = (elem, soulPerBattle) => {
    setFieldsToLocalStorage('soulCatcherBonus', elem.value);
    if (elem.value === "0") return 0;

    const selectedItem = Array.from(elem).find((item) => item.value === elem.value);
    return soulPerBattle * selectedItem.value - soulPerBattle;
}

export const getSoulBannerBonus = (elem, soulPerBattle) => {
    setFieldsToLocalStorage('soulBannerBonus', elem.value);
    if (elem.value === "0") return 0;

    const selectedItem = Array.from(elem).find((item) => item.value === elem.value);
    return Math.round(((soulPerBattle / 100) * selectedItem.value))
}

export const getSoulQuarterBonus = (elem, soulPerBattle) => {
    setFieldsToLocalStorage('soulQuarterBonus', elem.value);
    if (elem.value === "0") return 0;

    const selectedItem = Array.from(elem).find((item) => item.value === elem.value);
    return Math.round((soulPerBattle / 100) * selectedItem.value);
}

const setFieldsToLocalStorage = (keys, value) => {
    const storageData = JSON.parse(localStorage.getItem('portalCalcFields'));
    localStorage.setItem('portalCalcFields', storageData ?
        JSON.stringify({...storageData, ...{[keys]: value}}) :
        JSON.stringify({[keys]: value}));
}