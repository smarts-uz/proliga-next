'use client'

import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'app/utils/languages.util'

const Prize = ({ prize }) => {
  const { lang } = useSelector((store) => store.systemLanguage)
  const { t } = useTranslation()

  return (
    <div className="flex h-full w-full flex-col items-center justify-center transition-all hover:scale-[1.025]">
      <p className="mb-1 text-sm md:mb-2 xl:text-base">
        {lang === LANGUAGE.uz ? prize?.name : prize?.name_ru}
      </p>
      <div className="flex aspect-square max-w-56 items-center justify-center overflow-hidden rounded-lg bg-white p-1 lg:p-2 2xl:max-w-64">
        <img
          src={prize?.image}
          loading="lazy"
          alt={prize?.name}
          className="aspect-auto h-auto w-auto bg-cover"
        />
      </div>
      <p className="text-lg">
        <span className="text-3xl font-bold md:text-xl">{prize.order}</span>
        {'-'}
        {t("O'RIN")}
      </p>
    </div>
  )
}

export default Prize
