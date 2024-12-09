import i18n from 'i18next'
import UZ from '../../../static/locales/uz.json'
import RU from '../../../static/locales/ru.json'
import { initReactI18next } from 'react-i18next'

export default i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: RU,
    },
    uz: {
      translation: UZ,
    },
  },
  lng: 'uz',
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
})
