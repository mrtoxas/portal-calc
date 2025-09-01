import { Link } from "react-router";
import { useLang } from "../../hooks/useLang";
import { Lang, translations } from "../../lang/translations";
import styles from "./footer.module.css";
import { AuthorLink } from "../authorLink/authorLink";
import { CompatibilityMode } from "../compatibilityMode/compatibilityMode";

export const Footer = () => {
  const { t } = useLang();
  const { lang } = useLang();

  return (
    <footer className={styles.footer}>
      <ul className={styles.lang}>
        {(Object.keys(translations) as Lang[]).map((item) => {
          const actualLang = item.toLowerCase() === lang.toLowerCase();
          return (
            <li key={item} className={actualLang ? styles.active : ""}>
              <Link to={`/${item}`}>{item.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <CompatibilityMode />
      </div>
      <div>{t("description")}</div>
      <div>
        Made with &#10084;&#xFE0E; by <AuthorLink /> — just for fun
      </div>
      <div></div>
    </footer>
  );
};
