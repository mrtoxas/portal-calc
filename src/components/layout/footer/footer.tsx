import { useLang } from "../../../hooks/useLang";
import { translations } from "../../../lang/translations";
import styles from "./footer.module.css";

export const Footer = () => {
  const { setLang, lang } = useLang();

  return (
    <footer className={styles.footer}>
      <ul className={styles.lang}>
        {Object.keys(translations).map((item) => {
          const actualLang = item.toLowerCase() === lang.toLowerCase();
          return (
            <li className={actualLang ? styles.active : ""} onClick={()=>setLang(item.toLowerCase())}>
              <span>{item.toUpperCase()}</span>
            </li>
          );
        })}
      </ul>
      <div>Portal resources calculator for Hustle Castle game</div>
      <div>
        Made with &#10084;&#xFE0E; by <a href="https://github.com/mrtoxas/hc-portal-calc">mrtoxas</a>, 2025
      </div>
      <div></div>
    </footer>
  );
};
