'use client'
import { useState } from 'react'
import Image from 'next/image'
import Gutter from '../Gutter'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [{}, {}, {}, {}]

const obj = {
  header: "",
  title: "",
  description: "",
  images: [""],
  banner: "",
  type: 1

}

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
  }

  const increment = () => {
    setCurrentIndex((prevState) => {
      if (prevState === slides.length - 1) {
        return 0
      } else {
        return prevState + 1
      }
    })
  }

  return (
    <section className="relative bg-neutral-800">
      <Gutter>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="w-full flex-shrink-0">
              <section className="h-auto">
                <div className="w-auto bg-[#FFF400] pl-16 md:w-1/3">
                  <h3 className="text-[31px] font-black capitalize italic text-black">
                    umumiy qoidalar
                  </h3>
                </div>
                <div className="block items-center justify-center xl:flex">
                  <div className="mt-[2rem] flex flex-wrap items-center justify-center">
                    <div className="flex flex-col flex-wrap items-start justify-center">
                      <h2 className=" text-xl font-bold uppercase">
                        jamoa yig&apos;ing
                      </h2>
                      <p className="size-2/3 pt-[20px] text-gray-400">
                        100 - millionlik byudjetdan foydalaning va
                        chempionatning eng yaxshi futbolchilaridan iborat
                        jamoani to&apos;plang
                      </p>
                    </div>
                    <div className="relative h-[230px] w-[230px] sm:h-[430px] sm:w-[430px]">
                      <Image
                        src="/images/promotion-3.png"
                        alt="arrow"
                        width={150}
                        height={150}
                        className="absolute left-1/2 top-0 -translate-x-1/2 transform sm:h-auto sm:w-auto"
                      />
                      <Image
                        src="/images/promotion-4.png"
                        alt="arrow"
                        width={150}
                        height={150}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform sm:h-auto sm:w-auto"
                      />{' '}
                      <Image
                        src="/images/promotion-5.png"
                        alt="arrow"
                        width={150}
                        height={150}
                        className="absolute left-0 top-1/2 -translate-y-1/2 transform sm:h-auto sm:w-auto"
                      />{' '}
                      <Image
                        src="/images/promotion-6.png"
                        alt="arrow"
                        width={150}
                        height={150}
                        className="absolute right-0 top-1/2 -translate-y-1/2 transform sm:h-auto sm:w-auto"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/promotion-1.png"
                      alt="arrow"
                      width={400}
                      height={400}
                      className="mx-auto h-auto max-h-56 w-auto max-w-96 lg:max-h-[27rem] lg:max-w-[38rem] 2xl:max-h-[40rem] 2xl:max-w-[52rem]"
                    />
                    {/* <img
                      className="mx-auto h-auto max-h-[248px] w-auto max-w-[400px] lg:max-h-[448px] lg:max-w-[600px] 2xl:max-h-[648px] 2xl:max-w-[865px]"
                      src="/images/promotion-1.png"
                    /> */}
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full flex-shrink-0">
              <section className="flex h-full bg-[#222222] px-[1rem] py-[3rem] md:px-[6rem]">
                <div className={'mt-24 h-full'}>
                  <h2>BALLARNI YIG’ING</h2>
                  <p className="max-w-[651px]">
                    Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan
                    harakatlari uchun ochko oladi yoki yo&apos;qotadi. Ballar
                    soni o&apos;yinchining roliga qarab farq qilishi mumkin.
                    Masalan, himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko
                    oladi
                  </p>
                </div>
                <div className={'ml-96 mt-28'}>
                  <img src="/images/promotion-2.png" alt="" />
                </div>
              </section>
            </div>
            <div className="w-full flex-shrink-0">
              <section className="h-auto">
                <div className="w-auto bg-[#FFF400] pl-16 md:w-1/3">
                  <h3 className="text-[31px] font-black capitalize italic text-black">
                    umumiy qoidalar
                  </h3>
                </div>
                <div className="block items-center justify-center xl:flex">
                  <div className="mt-[2rem] flex flex-wrap items-center justify-center">
                    <div className="flex flex-col flex-wrap items-center justify-center">
                      <h2 className="text-5xl font-bold uppercase">
                        TRANSFERLARNI AMALGA OSHIRING
                      </h2>
                      <p className="size-1/2 pb-7 pt-8 text-center text-2xl text-gray-400">
                        Agar sizning jamoangizdagi o&apos;yinchilardan biri
                        jarohat olgan bo&apos;lsa yoki shunchaki yomon
                        o&apos;ynasa, har bir turda ochko to&apos;plamasa,
                        tarkibni optimalroq o&apos;zgartirish uchun 2 tagacha
                        transferni amalga oshirishingiz mumkin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="justify-cente flex items-center">
                  <img
                    className="mx-auto h-auto max-h-[248px] w-auto max-w-[400px] lg:max-h-[448px] lg:max-w-[600px] 2xl:max-h-[648px] 2xl:max-w-[865px]"
                    src="/images/transfer-removebg-preview.png"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            width={32}
            height={32}
            className="rotate-90"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
        >
          <Image
            src="/icons/arrow-down.svg"
            className="-rotate-90"
            alt="arrow"
            width={32}
            height={32}
          />
        </button>
      </Gutter>
    </section>
  )
}
export default Carousel
