// import 'server-only'

// const dictionaries = {
//   ru: () =>
//     import('../../../public/locales/ru.json').then((module) => module.default),
//   uz: () =>
//     import('../../../public/locales/uz.json').then((module) => module.default),
// }

// export const getDictionary = async (locale) => {
//   return dictionaries[locale]?.() ?? dictionaries.uz()
// }

import { useQuery } from 'react-query'

// Dictionary fetcher function
const fetchDictionary = async (locale) => {
  const dictionaries = {
    ru: () =>
      import('../../../public/locales/ru.json').then(
        (module) => module.default
      ),
    uz: () =>
      import('../../../public/locales/uz.json').then(
        (module) => module.default
      ),
  }

  return dictionaries[locale]?.() ?? dictionaries.uz()
}

// React Query Hook to fetch dictionary
export const useDictionary = (locale) => {
  return useQuery(['dictionary', locale], () => fetchDictionary(locale), {
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: false,
  })
}
