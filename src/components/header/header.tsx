import { useLang } from "../../hooks/useLang";
import styles from "./header.module.css";

export const Header = () => {
  const { t } = useLang();

  return (
    <header className={styles.head}>
      <h1>HUSTLE CASTLE</h1>
      <p>{t("portalCalculator")}</p>
    </header>
  );
};
