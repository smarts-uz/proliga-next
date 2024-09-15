'use client'
import Image from 'next/image'
import Gutter from '../../Gutter'

const PromotionCompete = () => {
  return (
    <div className="relative h-full w-full bg-neutral-900 py-6 md:py-8 xl:py-10 2xl:py-12">
      <Gutter>
        <section className="flex w-full flex-col-reverse justify-start gap-8 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="w-full flex-1 items-center self-center">
            <Image
              src="/images/promotion-stats.png"
              alt="competition"
              width={400}
              className="mx-auto w-full xs:w-3/4 md:mx-0 md:size-80 xl:size-96"
              height={400}
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 md:gap-8">
            <h2 className="promotion-header font-bold uppercase">
              RAQOBATLASHING
            </h2>
            <p className="promotion-text max-w-lg text-neutral-400">
              Boshqa foydalanuvchilar bilan umuimiy ligada qatnashing, Ulardan
              ko&apos;proq ochko ishlashga harakat qiling va mavsum
              so&apos;ngida g&apos;olib bo&apos;ling!
            </p>
          </div>
        </section>
      </Gutter>
    </div>
  )
}

export default PromotionCompete
