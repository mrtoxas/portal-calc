import { useEffect, useState } from "react";
import styles from "./form.module.css";
import { InputNumber } from "../inputNumber/inputNumber";
import { Summary } from "../summary/summary";

interface FormData {
  "required-souls": number;
  "existing-souls": number;
  "farm-floor": number;
  "soul-catcher": number | null;
  "soul-banner": number | null;
  "hunters-quarter": number | null;
}

const defaultFormData: FormData = {
  "required-souls": 0,
  "existing-souls": 0,
  "farm-floor": 1,
  "soul-catcher": null,
  "soul-banner": null,
  "hunters-quarter": null,
};

export const Form = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  useEffect(() => {
    const storage = localStorage.getItem("calcFormData");
    if (storage) setFormData(JSON.parse(storage));
  }, []);

  const updateField =
    (fieldName: keyof FormData) => (newValue: number | null) => {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: newValue,
      }));
    };

  const resetField = (fieldName: keyof FormData) => () => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: defaultFormData[fieldName],
    }));
  };

  return (
    <form className={styles.form} autoComplete="off">
      <InputNumber
        name="required-souls"
        value={formData["required-souls"] ?? 0}
        onChange={updateField("required-souls")}
        onReset={resetField("required-souls")}
        min={0}
        label="Souls required"
      />

      <InputNumber
        name="existing-souls"
        value={formData["existing-souls"] ?? 0}
        onChange={updateField("existing-souls")}
        onReset={resetField("existing-souls")}
        min={0}
        label="Existing souls"
      />

      <InputNumber
        name="farm-floor"
        value={formData["farm-floor"] ?? 0}
        onChange={updateField("farm-floor")}
        onReset={resetField("farm-floor")}
        min={1}
        max={135}
        label="Farm floor"
        quicklyValues={[
          { name: "80", value: 80 },
          { name: "135", value: 135 },
        ]}
      />

      <InputNumber
        name="soul-banner"
        value={formData["soul-banner"] ?? 0}
        onChange={updateField("soul-banner")}
        onReset={resetField("soul-banner")}
        max={11}
        min={1}
        label="Banner of souls (lvl)"
        quicklyValues={[{ name: "11", value: 11 }]}
        placeholder="No"
      />

      <InputNumber
        name="soul-catcher"
        value={formData["soul-catcher"] ?? 0}
        onChange={updateField("soul-catcher")}
        onReset={resetField("soul-catcher")}
        min={2}
        max={3}
        label="Soul Catcher (multiplier)"
        quicklyValues={[
          { name: "x2", value: 2 },
          { name: "x3", value: 3 },
        ]}
        placeholder="Нет"
      />

      <InputNumber
        name="hunters-quarter"
        value={formData["hunters-quarter"] ?? 0}
        onChange={updateField("hunters-quarter")}
        onReset={resetField("hunters-quarter")}
        min={1}
        max={11}
        label="Hunters neighborhood (lvl)"
        quicklyValues={[{ name: "7", value: 7 }]}
        placeholder="No"
      />

      <Summary apples={2300000000} battles={300000} />
    </form>
  );
};
