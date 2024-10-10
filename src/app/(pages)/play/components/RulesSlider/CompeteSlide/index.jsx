import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const CompeteSlide = () => {
  const { t } = useTranslation()

  return (
    <section className="flex w-full flex-col-reverse justify-start gap-8 md:flex-row md:items-center md:justify-between md:gap-4">
      <div className="w-full flex-1 items-center self-center">
        <Image
          src="/images/promotion-stats.png"
          alt="competition"
          width={400}
          className="mx-auto size-72 xs:size-80 md:mx-0 md:size-[22rem] xl:size-[28rem]"
          height={400}
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-4 md:gap-8">
        <h2 className="carousel-header font-bold uppercase">
          {t('Raqobatlashing')}
        </h2>
        <p className="carousel-text max-w-lg text-neutral-400">
          {t('Boshqa foydalanuvchilar')}
        </p>
      </div>
    </section>
  )
}

export default CompeteSlide
