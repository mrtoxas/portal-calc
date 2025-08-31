import { useParams } from "react-router";
import { Card } from "../components/ui/card/card";
import { Form } from "../components/form/form";
import styles from "./App.module.css";
import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Lang } from "../lang/translations";

function App() {
  const { lang } = useParams();
  const { setLang } = useLang();
  const { t } = useLang();

  useEffect(() => {
    if (lang) {
      setLang(lang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      const supportedLangs: Record<string, Lang> = {
        uk: "ua",
        ru: "ru",
        en: "en",
      };
      setLang(supportedLangs[browserLang] || "en");
    }
  }, [lang, setLang]);

  return (
    <>
      <title>{`${t("portalCalculator")} - Hustle Castle`}</title>
      <meta name="description" content={`${t("description")}`} />

      <Header />
      <main className={styles.main}>
        <Card>
          <Form />
        </Card>
      </main>
      <Footer />
    </>
  );
}

export default App;
