import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";


export const I18N = i18n.init({
  resources: {
    en: { translation: require("../locales/en.json")},
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
  nsSeparator: ":",
  defaultNS: "common",
  load: "languageOnly",
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  react: {
    useSuspense: false,
  },
});
