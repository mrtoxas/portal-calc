import styles from "./summary.module.css";

export interface SummaryData {
  apples: number;
  battles: number;
}

export const Summary = ({ apples, battles }: SummaryData) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        Apples: <span>{apples ? apples : "-"}</span>
      </div>
      <div className={styles.row}>
        Battles: <span>{battles ? battles : "-"}</span>
      </div>
    </div>
  );
};
