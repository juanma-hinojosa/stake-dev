// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "../js/translations"; // Importamos los textos

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      es: { translation: translations.es },
      pt: { translation: translations.pt },
    },
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    supportedLngs: ["en", "es", "pt"],
    detection: {
      order: ["navigator"],
      caches: ["localStorage", "sessionStorage"],
    },
  });

export default i18n;
