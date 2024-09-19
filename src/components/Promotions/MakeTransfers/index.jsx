import React from 'react'
import Image from 'next/image'
import Gutter from '../../Gutter'

const PromotionMakeTransfers = () => {
  return (
    <div className="w-full bg-neutral-800 py-6 md:py-8 xl:py-10 2xl:py-12">
      <Gutter>
        <div className="bg-custom-image align-center flex flex-col bg-cover">
          <h2 className="promotion-header self-center text-center font-bold uppercase xs:justify-start xs:text-start">
            TRANSFERLARNI AMALGA OSHIRING
          </h2>
          <p className="promotion-text mt-6 self-center text-center text-neutral-400 md:w-3/4 xl:mt-10">
            Agar sizning jamoangizdagi o&apos;yinchilardan biri jarohat olgan
            bo&apos;lsa yoki shunchaki yomon o&apos;ynasa, har bir turda ochko
            to&apos;plamasa, tarkibni optimalroq o&apos;zgartirish uchun 4
            tagacha transferni amalga oshirishingiz mumkin
          </p>

          <div className="mx-auto mt-10 w-full flex-1 md:w-auto md:items-center md:justify-center">
            <Image
              width={536}
              height={193}
              src="/images/promotion-transfer.png"
              alt="transfer players"
              className="mx-auto h-full w-full xs:w-3/4 sm:w-96 md:mx-0 xl:w-[32rem]"
            />
          </div>
        </div>
      </Gutter>
    </div>
  )
}

export default PromotionMakeTransfers
