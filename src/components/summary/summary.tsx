import styles from "./summary.module.css";

export interface SummaryData {
  apples: number;
  battles: number;
}

export const Summary = ({ apples, battles }: SummaryData) => {
  return (
    <div className={styles.wrapper}>
      <div>
        Apples: <span>{apples ? apples : "-"}</span>
      </div>
      <div>
        Battles: <span>{battles ? battles : "-"}</span>
      </div>
    </div>
  );
};
