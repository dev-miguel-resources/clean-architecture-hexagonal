import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import globalEn from "./translations/en.json"
import globalEs from "./translations/es.json"
import achievementsEn from "../../features/achiviements/i18n/en.json"
import achievementEs from "../../features/achiviements/i18n/es.json"

const resources = {
  en: {
    global: globalEn,
    achievements: achievementsEn,
  },
  es: {
    global: globalEs,
    achievements: achievementEs,
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  ns: ["global", "achievements"],
  lng: "en",
})

export { i18n }
