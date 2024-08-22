import React from 'react';
import Gutter from '@/src/components/Gutter'
import Image from 'next/image'


const Transfers = () => {
  return (
    <div className={'w-full bg-neutral-800 py-16'}>
      <Gutter className={'bg-center   bg-cover bg-custom-image flex flex-col  align-center'}>
        <h2 className={'text-4xl font-bold uppercase text-center mx-auto'}>TRANSFERLARNI AMALGA OSHIRING</h2>
        <p className={'text-center w-[70%] mx-auto'}>
          Agar sizning jamoangizdagi o&apos;yinchilardan biri jarohat olgan
          bo&apos;lsa yoki shunchaki yomon o&apos;ynasa, har bir turda ochko
          to&apos;plamasa, tarkibni optimalroq o&apos;zgartirish uchun 2 tagacha
          transferni amalga oshirishingiz mumkin
        </p>

        <div className={'flex mx-auto items-center justify-center'}>
          <Image
            width={193}
            height={193}
            src={'/images/promotion-7.png'} alt={'transfer'}/>


          <svg width="145" height="80" viewBox="0 0 145 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M144.414 16.4142C145.195 15.6332 145.195 14.3668 144.414 13.5858L131.686 0.857853C130.905 0.0768047 129.639 0.0768048 128.858 0.857854C128.077 1.6389 128.077 2.90523 128.858 3.68628L140.172 15L128.858 26.3137C128.077 27.0947 128.077 28.3611 128.858 29.1421C129.639 29.9232 130.905 29.9232 131.686 29.1421L144.414 16.4142ZM6 17L143 17L143 13L6 13L6 17Z"
              fill="#26AC2C" />
            <path
              d="M0.585785 63.5858C-0.195267 64.3668 -0.195267 65.6332 0.585785 66.4142L13.3137 79.1421C14.0948 79.9232 15.3611 79.9232 16.1421 79.1421C16.9232 78.3611 16.9232 77.0948 16.1421 76.3137L4.82843 65L16.1421 53.6863C16.9232 52.9052 16.9232 51.6389 16.1421 50.8579C15.3611 50.0768 14.0948 50.0768 13.3137 50.8579L0.585785 63.5858ZM138 63L2 63V67L138 67V63Z"
              fill="#D62626" />
          </svg>

          <Image
            width={193}
            height={193}
            src={'/images/promotion-8.png'} alt={'transfer'} />
        </div>
      </Gutter>
    </div>

  )
}

export default Transfers;