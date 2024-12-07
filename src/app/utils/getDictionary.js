// import 'server-only'

const dictionaries = {
  ru: () =>
    import('../../../public/locales/ru.json').then((module) => module.default),
  uz: () =>
    import('../../../public/locales/uz.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  return dictionaries[locale]?.() ?? dictionaries.uz()
}
