import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const GatherPointsSlide = () => {
  const { t } = useTranslation()

  return (
    <article className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
      <div className="flex flex-col gap-2 md:gap-4 xl:gap-8">
        <h2 className="carousel-header font-bold uppercase">
          {t('Ochkolar yiging')}
        </h2>
        <p className="carousel-text text-neutral-400 md:max-w-lg xl:max-w-xl">
          {t("Har bir o'yinchi")}
        </p>
      </div>
      <div className="h-full self-center md:self-start">
        <Image
          src="/images/promotion-2.png"
          alt="football"
          width={360}
          height={360}
          unoptimized
          className="h-full w-80 sm:w-96 md:w-[28rem] xl:w-[32rem]"
        />
      </div>
    </article>
  )
}

export default GatherPointsSlide
