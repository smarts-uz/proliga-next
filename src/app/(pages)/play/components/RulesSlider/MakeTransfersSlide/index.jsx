import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const MakeTransfersSlide = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-custom-image align-center flex flex-col bg-cover">
      <h2 className="carousel-header self-center text-center font-bold uppercase xs:justify-start xs:text-start">
        {t('Transferlarni amalga oshiring')}
      </h2>
      <p className="carousel-text mt-4 self-center text-center text-neutral-400 md:w-3/4 xl:mt-8">
        {t('Agar sizning jamoangizdagi')}
      </p>
      <div className="mx-auto mt-10 w-full flex-1 md:w-auto md:items-center md:justify-center">
        <Image
          width={536}
          height={193}
          src="/images/promotion-transfer.png"
          alt="transfer players"
          className="mx-auto w-full md:mx-0 md:h-48 xl:h-64"
          unoptimized
        />
      </div>
    </div>
  )
}

export default MakeTransfersSlide
