
import App from "../app/app";
import { RootRedirect } from "../components/rootRedirect/rootRedirect";

export const routes = [
  {
    path: "/",
    element: <RootRedirect />, 
  },
  {
    path: "/:lang",
    element: <App />,
  },
];