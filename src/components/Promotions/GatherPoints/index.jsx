import Image from 'next/image'
import Gutter from '../../Gutter'
import { useTranslation } from 'react-i18next'

const PromotionGatherPoints = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-neutral-900 py-6 md:py-8 xl:py-10 2xl:py-12">
      <Gutter>
        <article className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="my-auto flex flex-col gap-4 xl:gap-8">
            <h2 className="promotion-header font-bold">
              {t('Ochkolar yiging')}
            </h2>
            <p className="promotion-text text-neutral-400 md:max-w-lg xl:max-w-xl">
              {t("Har bir o'yinchi")}
            </p>
          </div>
          <div className="h-full self-center md:self-start">
            <Image
              src="/images/promotion-2.png"
              alt="football"
              width={400}
              height={400}
              draggable={false}
              className="h-full w-full min-w-80 lg:min-w-96"
            />
          </div>
        </article>
      </Gutter>
    </section>
  )
}

export default PromotionGatherPoints
