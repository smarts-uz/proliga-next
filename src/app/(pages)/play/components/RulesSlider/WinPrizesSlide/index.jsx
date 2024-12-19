/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { LANGUAGE } from 'app/utils/languages.util'

const WinPrizesSlide = () => {
  const { t } = useTranslation()
  const { prizes } = useSelector((store) => store.prizes)
  const { currentCompetition } = useSelector((store) => store.competition)

  return (
    <div className="flex h-auto flex-col space-y-4 md:space-y-6">
      <div className="space-y-2">
        <h2 className="carousel-header font-bold uppercase">
          {t('Sovrinlarni yutib oling')}
        </h2>
        <p className="carousel-text text-neutral-300">{t('Eng ko‘p ball')}</p>
      </div>
      <div className="z grid grid-cols-2 grid-rows-2 justify-center gap-2 sm:flex sm:grid-rows-1 md:gap-4 xl:gap-8">
        {prizes.map(
          (prize, index) =>
            prize?.competition_id.id === currentCompetition.id &&
            prize?.is_active && <Prize prize={prize} key={index} />
        )}
      </div>
    </div>
  )
}

const Prize = ({ prize }) => {
  const { t } = useTranslation()
  const { lang } = useSelector((store) => store.systemLanguage)
  return (
    <div
      className={`flex min-w-24 ${prize.order === 3 && 'col-span-2 mx-auto max-w-[50%] sm:col-span-1 sm:mx-0 sm:max-w-max'} flex-1 flex-col items-center justify-center md:max-w-80`}
    >
      <p className="mb-1 text-xs sm:text-sm md:mb-2 md:text-lg xl:text-xl">
        {lang === LANGUAGE.uz ? prize?.name : prize?.name_ru}
      </p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-1 lg:p-2">
        <img
          src={prize?.image}
          alt={prize?.name}
          loading="lazy"
          className="aspect-auto h-auto w-auto bg-cover"
        />
      </div>
      <p>
        <span className="font-bold md:text-xl">{prize.order} </span>
        {t("O'RIN")}
      </p>
    </div>
  )
}

export default WinPrizesSlide
