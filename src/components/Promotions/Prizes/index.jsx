import React from 'react';
import Image from 'next/image'
import Gutter from '../../Gutter';

const Prizes = () => {
  return (
    <section className={'w-full bg-[#222222]'}>
      <Gutter className={''}>
        <div className={'space-y-9 py-16'}>
        <h2 className={'md:text-3xl text-2xl font-bold uppercase'}>SOVRINLARNI YUTIB OLING!</h2>
        <p className={'text-2xl text-gray-400'}>Eng ko&apos;p ball to&apos;plagan foydalanuvchilar sovg&apos;alarga ega bo&apos;lishadi.</p>
        <div className={'grid lg:grid-cols-4 sm:grid-cols-3 gap-4'}>
          <div className={'flex flex-col justify-center items-center'}>
            <p className={'text-2xl'}>Iphone 15 Pro Max</p>
            <Image
              width={336}
              height={319}
              src={'/images/promotion-price1.png'} alt={'Iphone 15 Pro Max'} />
          </div>

          <div className={'flex flex-col justify-center items-center'}>
            <p className={'text-2xl'}>Playstation 5</p>
            <Image
              width={336}
              height={319}
              src={'/images/promotion-price2.png'} alt={'Iphone 15 Pro Max'} />
          </div>

          <div className={'flex flex-col justify-center items-center'}>
            <p className={'text-2xl'}>TV Samsung 55”</p>
            <Image
              width={336}
              height={319}
              src={'/images/promotion-price3.png'} alt={'Iphone 15 Pro Max'} />
          </div>

          <div className={'flex flex-col justify-center items-center'}>
            <p className={'text-2xl'}>Apple iPad Pro</p>
            <Image
              width={336}
              height={319}
              src={'/images/promotion-price4.png'} alt={'Iphone 15 Pro Max'} />
          </div>
        </div>
        </div>
      </Gutter>
    </section>
  )
}

export default Prizes;