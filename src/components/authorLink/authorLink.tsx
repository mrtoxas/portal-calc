import styles from "./authorLink.module.css";

export const AuthorLink = () => {
  const clickHandler = () => window.open("https://t.me/mrtoxas", "_blank");

  return (
    <span
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && clickHandler()}
      className={styles.link}
      onClick={clickHandler}
    >
      mrtoxas
    </span>
  );
};
