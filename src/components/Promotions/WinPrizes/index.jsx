/* eslint-disable @next/next/no-img-element */
import Gutter from '../../Gutter'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { LANGUAGE } from 'app/utils/languages.util'

const PromotionWinPrizes = () => {
  const { t } = useTranslation()
  const { prizes } = useSelector((store) => store.prizes)

  const limitedData = prizes?.filter((prize) => prize?.order === 1).slice(0, 4)

  return (
    <section className="w-full bg-neutral-800 py-6 md:py-8 xl:py-10 2xl:py-12">
      <Gutter>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="promotion-header font-bold uppercase">
              {t('Sovrinlarni yutib oling')}
            </h2>
            <p className="promotion-text text-neutral-300">
              {t('Eng ko‘p ball')}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {limitedData.map(
              (prize, index) =>
                prize?.image && <Prize prize={prize} key={index} />
            )}
          </div>
        </div>
      </Gutter>
    </section>
  )
}

const Prize = ({ prize }) => {
  const { lang } = useSelector((store) => store.systemLanguage)
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-1 text-lg md:mb-2 xl:text-xl">
        {lang === LANGUAGE.uz ? prize?.name : prize?.name_ru}
      </p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-1 lg:p-2">
        <img
          src={prize?.image}
          alt={prize?.name}
          draggable={false}
          className="aspect-auto h-auto w-auto select-none bg-cover"
        />
      </div>
    </div>
  )
}

export default PromotionWinPrizes
