import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import UZ from "../../../public/locales/uz.json"

console.log(UZ)
export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
      ru: {
        translation: {
          'Welcome to React': 'Добро пожаловать в React и react-i18next',
        },
      },
      uz: UZ,
    },
    lng: 'uz', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })
