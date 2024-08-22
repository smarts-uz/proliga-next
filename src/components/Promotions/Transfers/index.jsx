import React from 'react'
import Gutter from '@/src/components/Gutter'
import Image from 'next/image'

const Transfers = () => {
  return (
    <div className={'w-full bg-neutral-800 py-16'}>
      <Gutter>
        <div
          className={
            'bg-custom-image align-center flex flex-col bg-cover bg-center'
          }
        >
          <h2 className={'mx-auto text-center text-4xl font-bold uppercase'}>
            TRANSFERLARNI AMALGA OSHIRING
          </h2>
          <p
            className={'mx-auto mt-10 w-3/4 text-center text-2xl text-gray-400'}
          >
            Agar sizning jamoangizdagi o&apos;yinchilardan biri jarohat olgan
            bo&apos;lsa yoki shunchaki yomon o&apos;ynasa, har bir turda ochko
            to&apos;plamasa, tarkibni optimalroq o&apos;zgartirish uchun 2
            tagacha transferni amalga oshirishingiz mumkin
          </p>

          <div className={'mx-auto mt-10 flex items-center justify-center'}>
            <Image
              width={536}
              height={193}
              src={'/images/promotion-transfer.png'}
              alt={'transfer'}
            />
          </div>
        </div>
      </Gutter>
    </div>
  )
}

export default Transfers
