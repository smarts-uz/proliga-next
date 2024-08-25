import React from 'react'
import Image from 'next/image'
import Gutter from '../../Gutter'

const Transfers = () => {
  return (
    <div className="w-full bg-neutral-800 py-8 2xl:py-16">
      <Gutter>
        <div className="bg-custom-image align-center flex flex-col bg-cover">
          <h2 className="self-center text-center text-3xl font-bold uppercase xs:justify-start xs:text-start xs:text-sm md:text-3xl lg:text-4xl">
            TRANSFERLARNI AMALGA OSHIRING
          </h2>
          <p className="mt-10 w-3/4 self-center text-center text-xl text-neutral-400 xs:text-xs lg:text-lg xl:text-xl 2xl:text-xl">
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
              alt="transfer players"
              className="h-22 w-72 md:min-h-36 md:min-w-96 2xl:h-52 2xl:w-[36rem]"
            />
          </div>
        </div>
      </Gutter>
    </div>
  )
}

export default Transfers
