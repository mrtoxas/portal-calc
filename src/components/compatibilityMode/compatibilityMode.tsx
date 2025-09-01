import { useEffect, useState } from "react";
import styles from "./compatibilityMode.module.css";
import { useLang } from "../../hooks/useLang";

export const CompatibilityMode = () => {
  const { t } = useLang();
  
  const [mode, setMode] = useState<boolean | null>(() => {
    const stored = localStorage.getItem("CompatibilityMode");
    return stored !== null ? stored === "true" : null; // null = пользователь ещё не выбирал
  });

  // эффект для html-класса при загрузке и изменении
  useEffect(() => {
    if (mode !== null) {
      const html = document.documentElement;
      if (mode) html.classList.add("compatibility-mode");
      else html.classList.remove("compatibility-mode");
    }
  }, [mode]);

  const changeModeHandler = () => {
    setMode((prev) => {
      const newMode = !prev; // если prev был null, станет true
      localStorage.setItem("CompatibilityMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <button onClick={changeModeHandler} className={styles.button} aria-label="Change compatibility mode">
      {mode && <span className={styles.icon}>&#10003;&#xFE0E;</span>}{" "}
      <span className={styles.text}>{t('compatibilityMode')}</span>
    </button>
  );
};
