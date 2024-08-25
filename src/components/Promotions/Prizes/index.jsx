import React from 'react'
import Image from 'next/image'
import Gutter from '../../Gutter'

const Prizes = () => {
  return (
    <section className={'w-full bg-[#222222]'}>
      <Gutter className={''}>
        <div className={'space-y-9 py-16'}>
          <h2
            className={
              'text-2xl font-bold uppercase xs:text-sm md:text-3xl lg:text-4xl'
            }
          >
            SOVRINLARNI YUTIB OLING!
          </h2>
          <p
            className={
              'text-2xl text-neutral-300 xs:text-xs lg:text-lg xl:text-xl 2xl:text-xl'
            }
          >
            Eng ko&apos;p ball to&apos;plagan foydalanuvchilar sovg&apos;alarga
            ega bo&apos;lishadi.
          </p>
          <div className={'grid gap-4 sm:grid-cols-3 lg:grid-cols-4'}>
            <div className={'flex flex-col items-center justify-center'}>
              <p className={'mb-2 text-2xl'}>Iphone 15 Pro Max</p>
              <Image
                width={336}
                height={319}
                src={'/images/promotion-price1.png'}
                alt={'Iphone 15 Pro Max'}
              />
            </div>

            <div className={'flex flex-col items-center justify-center'}>
              <p className={'mb-2 text-2xl'}>Playstation 5</p>
              <Image
                width={336}
                height={319}
                src={'/images/promotion-price2.png'}
                alt={'Iphone 15 Pro Max'}
              />
            </div>

            <div className={'flex flex-col items-center justify-center'}>
              <p className={'mb-2 text-2xl'}>TV Samsung 55 </p>
              <Image
                width={336}
                height={319}
                src={'/images/promotion-price3.png'}
                alt={'Iphone 15 Pro Max'}
              />
            </div>

            <div className={'flex flex-col items-center justify-center'}>
              <p className={'mb-2 text-2xl'}>Apple iPad Pro</p>
              <Image
                width={336}
                height={319}
                src={'/images/promotion-price4.png'}
                alt={'Iphone 15 Pro Max'}
              />
            </div>
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default Prizes
