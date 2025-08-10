import { useRef, useEffect } from "react";
import { StepButton } from "./stepButton";
import { Button } from "../button/button";
import styles from "./input.module.css";
import IconPlus from "../icons/iconPlus";

interface InputProps {
  value: string;
  min?: number;
  max?: number;
  defaultValue: string;
  quicklyValues?: { name: string; value: number }[];
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { value, min, max, defaultValue, quicklyValues, label, placeholder, onChange } =
    props;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentValueRef = useRef(value);

  useEffect(() => {
    currentValueRef.current = value;
  }, [value]);

  const validateInput = (inputValue: string) => {
    if (inputValue === "") return inputValue;
    if (!/^\d*$/.test(inputValue)) return undefined;
    const num = Number(inputValue);
    if (min !== undefined && num < min) return undefined;
    if (max !== undefined && num > max) return undefined;
    return inputValue;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validated = validateInput(e.target.value);
    if (validated !== undefined) {
      onChange(validated);
    }
  };

  const step = (direction: "inc" | "dec") => {
    const current = parseInt(currentValueRef.current || "0", 10);
    const delta = direction === "inc" ? 1 : -1;
    let newValue = current + delta;

    if (min !== undefined) newValue = Math.max(min, newValue);
    if (max !== undefined) newValue = Math.min(max, newValue);

    const result = String(newValue);
    currentValueRef.current = result;
    onChange(result);
  };

  const startRepeat = (direction: "inc" | "dec") => {
    step(direction);

    let delay = 400;
    const repeat = () => {
      step(direction);
      delay = Math.max(50, delay - 25);
      timerRef.current = setTimeout(repeat, delay);
    };

    timerRef.current = setTimeout(repeat, delay);
  };

  const stopRepeat = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return stopRepeat;
  }, []);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.row}>
        <StepButton
          direction={"dec"}
          onMouseDown={() => startRepeat("dec")}
          onMouseUp={stopRepeat}
          onMouseLeave={stopRepeat}
          onTouchEnd={stopRepeat}
        />

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={handleInputChange}
            inputMode="numeric"
            autoComplete="off"
            placeholder={placeholder}
          />
          {value && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => onChange(defaultValue)}
            >
              <IconPlus />
            </button>
          )}
        </div>

        <StepButton
          direction={"inc"}
          onMouseDown={() => startRepeat("inc")}
          onMouseUp={stopRepeat}
          onMouseLeave={stopRepeat}
          onTouchEnd={stopRepeat}
        />

        {quicklyValues && quicklyValues.length > 0 && (
          <div className={styles.row}>
            {quicklyValues.map((item) => (
              <Button
                key={item.name}
                onClick={() => onChange(String(item.value))}
              >
                {item.name}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
