'use client'
import Image from 'next/image'
import Gutter from '../../Gutter'
import { useTranslation } from 'react-i18next'

const PromotionCompete = () => {
  const { t } = useTranslation()
  return (
    <div className="relative h-full w-full bg-neutral-900 py-6 md:py-8 xl:py-10 2xl:py-12">
      <Gutter>
        <section className="flex w-full flex-col-reverse justify-start gap-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-8">
          <div className="w-full flex-1 items-center self-center">
            <Image
              src="/images/promotion-stats.png"
              alt="competition"
              className="mx-auto w-full xs:w-3/4 md:mx-0 md:size-80 xl:size-96"
              width={400}
              height={400}
              draggable={false}
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-2 sm:gap-4 md:gap-8">
            <h2 className="promotion-header font-bold uppercase">
              {t('Raqobatlashing')}
            </h2>
            <p className="promotion-text max-w-lg text-neutral-400">
              {t('Boshqa foydalanuvchilar')}
            </p>
          </div>
        </section>
      </Gutter>
    </div>
  )
}

export default PromotionCompete
