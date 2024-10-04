import i18n from 'i18next'
import UZ from '../../../public/locales/uz.json'
import RU from '../../../public/locales/ru.json'
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
