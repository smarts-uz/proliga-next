import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import UZ from '../../../public/locales/uz.json'
import RU from '../../../public/locales/ru.json'

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
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})
