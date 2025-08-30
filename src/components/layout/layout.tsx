import { Card } from "../ui/card/card";
import { Form } from "../form/form";
import { Header } from "../header/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Card>
        <Form />
      </Card>
    </>
  );
};
