import { Link } from "react-router";
import { useLang } from "../../hooks/useLang";
import { Lang, translations } from "../../lang/translations";
import styles from "./footer.module.css";

export const Footer = () => {
  const { t } = useLang();
  const { lang } = useLang();

  const changeLangHandler = (item: Lang) => {
    localStorage.setItem('lang', item);
  };

  return (
    <footer className={styles.footer}>
      <ul className={styles.lang}>
        {(Object.keys(translations) as Lang[]).map((item) => {
          const actualLang = item.toLowerCase() === lang.toLowerCase();
          return (
            <li key={item} className={actualLang ? styles.active : ""} onClick={() => changeLangHandler(item)}>
              <Link to={`/${item}`}>{item.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
      <div>{t("description")}</div>
      <div>
        Made with &#10084;&#xFE0E; by <a href="https://github.com/mrtoxas/hc-portal-calc">mrtoxas</a>, 2025
      </div>
      <div></div>
    </footer>
  );
};
