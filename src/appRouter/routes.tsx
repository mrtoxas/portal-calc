import App from "../App/App";

export const routes = [
  {
    path: "/",   
    element: <App />,
  },
  {
    path: "/:lang",
    element: <App />,
  },
];