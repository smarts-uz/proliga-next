import React from 'react';
import Gutter from '@/src/components/Gutter'
import Image from 'next/image'


const Transfers = () => {
  return (
    <div className={'w-full bg-neutral-800 py-16'}>
      <Gutter className={'bg-center  bg-cover bg-custom-image flex flex-col  align-center'}>
        <h2 className={'text-4xl font-bold uppercase text-center mx-auto'}>TRANSFERLARNI AMALGA OSHIRING</h2>
        <p className={'text-center w-[70%] mt-10 text-2xl text-gray-400 mx-auto'}>
          Agar sizning jamoangizdagi o&apos;yinchilardan biri jarohat olgan
          bo&apos;lsa yoki shunchaki yomon o&apos;ynasa, har bir turda ochko
          to&apos;plamasa, tarkibni optimalroq o&apos;zgartirish uchun 2 tagacha
          transferni amalga oshirishingiz mumkin
        </p>

        <div className={'flex mx-auto items-center mt-10 justify-center'}>
          <Image
            width={536}
            height={193}
            src={'/images/promotion-transfer.png'} alt={'transfer'} />
        </div>
      </Gutter>
    </div>

  )
}

export default Transfers;