import { useLang } from "../../hooks/useLang";
import styles from "./summary.module.css";

export interface SummaryData {
  apples: number;
  battles: number;
}

export const Summary = ({ apples, battles }: SummaryData) => {
  const { t } = useLang();
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {t('summaryApples')}: <span>{apples ? apples.toLocaleString("ru") : "-"}</span>
      </div>
      <div className={styles.row}>
        {t('summaryBattles')}: <span>{battles ? battles.toLocaleString("ru") : "-"}</span>
      </div>
    </div>
  );
};
