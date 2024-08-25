'use client'
import Image from 'next/image'
import Gutter from '../../Gutter'

const Competition = () => {
  return (
    <div className="relative w-full bg-neutral-900 py-8">
      <Gutter>
        <section className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
            <Image
              src="/images/promotion-stats.png"
              alt="competition"
              width={400}
              height={400}
            />
          </div>
          <div className="flex max-w-xl flex-col gap-8">
            <h2 className="text-3xl font-bold uppercase xs:text-sm md:text-3xl lg:text-4xl">
              RAQOBATLASHING
            </h2>
            <p className="text-2xl text-neutral-400 xs:text-xs lg:text-lg xl:text-xl 2xl:text-xl">
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
