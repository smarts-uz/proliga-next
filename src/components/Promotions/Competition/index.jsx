'use client'
import Image from 'next/image'
import Gutter from '../../Gutter'

const Competition = () => {
  return (
    <div className="relative h-full w-full bg-neutral-900 py-8">
      <Gutter>
        <section className="flex w-full flex-col justify-start gap-8 md:flex-row md:items-center md:gap-4">
          <div className="flex-1 self-center w-full items-center ">
            <Image
              src="/images/promotion-stats.png"
              alt="competition"
              width={400}
              className=" w-full xs:w-3/4 mx-auto md:size-80 xl:size-96"
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

export default Competition
