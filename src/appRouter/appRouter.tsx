import { createBrowserRouter } from "react-router";
import { routes } from "./routes";
import { RouterProvider } from "react-router/dom";

export const AppRouter = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};