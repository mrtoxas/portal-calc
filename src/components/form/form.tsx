import { useEffect, useState } from "react";
import { Input } from "../input/input";
import { Summary } from "../summary/summary";
import { useSummaryCalc } from "../../hooks/useSummaryCalc";

export interface CalcFormData {
  "required-souls": string;
  "existing-souls": string;
  "farm-floor": string;
  "soul-catcher": string;
  "soul-banner": string;
  "hunters-quarter": string;
}

const defaultFormData: CalcFormData = {
  "required-souls": "",
  "existing-souls": "",
  "farm-floor": "",
  "soul-catcher": "",
  "soul-banner": "",
  "hunters-quarter": "",
};

export const Form = () => {
  const [сalcFormData, setCalcFormData] = useState<CalcFormData>(defaultFormData);

  useEffect(() => {
    const storage = localStorage.getItem("calcFormData");
    if (storage) {
      setCalcFormData(JSON.parse(storage));
    }
  }, []);

  const updateField = (fieldName: keyof CalcFormData) => (value: string) => {
    setCalcFormData((prev) => {
      const newFormData = { ...prev, [fieldName]: value };
      localStorage.setItem("calcFormData", JSON.stringify({
        ...newFormData, 
        "required-souls": "",
        "existing-souls": "",
      }));
      return newFormData;
    });
  };

  const { apples, battles } = useSummaryCalc(сalcFormData) ?? { apples: 0, battles: 0 };

  return (
    <div>
      <Input
        label="Souls required"
        value={сalcFormData["required-souls"] ?? ""}
        onChange={updateField("required-souls")}
        defaultValue={defaultFormData["required-souls"]}
        min={1}
      />
      <Input
        label="Existing souls"
        value={сalcFormData["existing-souls"] ?? ""}
        onChange={updateField("existing-souls")}
        defaultValue={defaultFormData["existing-souls"]}
        min={0}
      />
      <Input
        label="Farm floor"
        value={сalcFormData["farm-floor"] ?? ""}
        onChange={updateField("farm-floor")}
        defaultValue={defaultFormData["farm-floor"]}
        min={1}
        max={135}
        quicklyValues={[
          { name: "80", value: 80 },
          { name: "135", value: 135 },
        ]}
      />
      <Input
        label="Banner of souls (lvl)"
        value={сalcFormData["soul-banner"] ?? ""}
        onChange={updateField("soul-banner")}
        defaultValue={defaultFormData["soul-banner"]}
        min={1}
        max={11}
        quicklyValues={[{ name: "11", value: 11 }]}
        placeholder="Нет"
      />

      <Input
        label="Soul Catcher (multiplier)"
        value={сalcFormData["soul-catcher"] ?? ""}
        onChange={updateField("soul-catcher")}
        defaultValue={defaultFormData["soul-catcher"]}
        min={2}
        max={3}
        quicklyValues={[
          { name: "x2", value: 2 },
          { name: "x3", value: 3 },
        ]}
        placeholder="Нет"
      />

      <Input
        label="Hunters neighborhood (lvl)"
        value={сalcFormData["hunters-quarter"] ?? ""}
        onChange={updateField("hunters-quarter")}
        defaultValue={defaultFormData["hunters-quarter"]}
        min={1}
        max={7}
        quicklyValues={[{ name: "7", value: 7 }]}
        placeholder="Нет"
      />

      <Summary apples={apples} battles={battles} />
    </div>
  );
};
