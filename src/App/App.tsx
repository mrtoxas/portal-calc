import { useParams } from "react-router";
import { Card } from "../components/ui/card/card";
import { Form } from "../components/form/form";
import styles from "./App.module.css";
import { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

function App() {
  const { lang } = useParams();
  const { setLang } = useLang();
  
  useEffect(() => {
    if (lang) {
      setLang(lang);
    }
  }, [lang, setLang]);

  return (
    <>
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