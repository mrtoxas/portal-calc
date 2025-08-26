import { Navigate } from "react-router";
import { useLanguageDetect } from "../../hooks/useLanguageDetect";

export const RootRedirect = () => {
  const detectedLang = useLanguageDetect();

  return <Navigate to={`/${detectedLang}`} replace />;
};
