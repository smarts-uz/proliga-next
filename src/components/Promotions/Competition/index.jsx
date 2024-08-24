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
              src="/images/promotion-table.png"
              alt="competition"
              width={400}
              height={400}
            />
          </div>
          <div className="flex max-w-xl flex-col gap-8">
            <h2 className="text-3xl font-bold uppercase">RAQOBATLASHING</h2>
            <p className="text-2xl text-neutral-300">
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
