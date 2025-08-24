import { Card } from "../components/card/card";
import { Form } from "../components/form/form";
import { Footer } from "../components/layout/footer/footer";
import { Header } from "../components/layout/header/header";
import styles from "./App.module.css";

function App() {
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
