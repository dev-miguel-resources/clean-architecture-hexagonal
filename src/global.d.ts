import 'react-i18next'
import global from './features/achiviements/i18n/en.json'
import achievements from './features/achiviements/i18n/en.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      global: typeof global
      achievements: typeof achievements
    }
  }
}
