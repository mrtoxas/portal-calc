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

      <meta property="og:title" content={`${t("portalCalculator")}`} />
      <meta property="og:description" content={`${t("description")}`} />
      <meta property="og:image" content="https://portal-calc.web.app/ogg.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content="https://portal-calc.web.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${t("portalCalculator")}`} />
      <meta name="twitter:description" content={`${t("description")}`} />
      <meta name="twitter:image" content="https://portal-calc.web.app/ogg.jpg" />

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
