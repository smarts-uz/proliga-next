"use client";
import React, { useState } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1",
    "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3"
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative w-full  mx-auto ">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="w-full flex-shrink-0">
            <section className="h-auto bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem] ">
              <div className="bg-[#FFF400] md:w-1/3 w-auto pl-16 transform skew-x-45">
                <h3 className='text-black capitalize text-[31px] italic font-bold'>umumiy qoidalar</h3>
              </div>

              <div className="xl:flex block items-center justify-center">
                <div className='flex flex-wrap mt-[2rem] justify-center items-center'>
                  <div className="flex flex-col flex-wrap justify-center items-center">

                    <h2 className=' uppercase'>jamoa yig&apos;ing</h2>
                    <p className=''>100 millionlik byudjetdan
                      foydalaning va chempionatning eng yaxshifutbolchilaridan iborat jamoani to&apos;plang</p>
                  </div>

                  <div className="relative sm:w-[430px] sm:h-[430px] w-[230px] h-[230px]">
                    <img
                      className="absolute left-1/2 top-0 sm:w-auto sm:h-auto w-[120px] h-[120px]  transform -translate-x-1/2"
                      src='/images/promotion-3.png' />
                    <img
                      className="absolute left-1/2 bottom-0 sm:w-auto sm:h-auto w-[120px] h-[120px] transform -translate-x-1/2"
                      src='/images/promotion-4.png' />
                    <img className="absolute top-1/2 left-0 sm:w-auto sm:h-auto w-[120px] h-[120px] transform -translate-y-1/2"
                      src='/images/promotion-5.png' />
                    <img
                      className="absolute top-1/2 right-0 sm:w-auto sm:h-auto w-[120px] h-[120px] transform -translate-y-1/2"
                      src='/images/promotion-6.png' />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    className="2xl:max-w-[865px] mx-auto 2xl:max-h-[648px] lg:max-w-[600px] lg:max-h-[448px] max-w-[400px] max-h-[248px] w-auto h-auto"
                    src="/images/promotion-1.png" />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem] ">
              <div className={"mt-24 h-full"}>
                <h2>BALLARNI YIG’ING</h2>
                <p className="max-w-[651px]">
                  Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari uchun
                  ochko oladi yoki yo&apos;qotadi. Ballar soni o&apos;yinchining roliga qarab
                  farq qilishi mumkin. Masalan, himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko
                  oladi
                </p>
              </div>
              <div className={"ml-96 mt-28"}>
                <img src="/images/promotion-2.png" alt="" />
              </div>
            </section>
          </div>

        </div>
      </div>
      <button onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 text-white px-4 py-2">
        <svg className="w-6 h-6 text-secondary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg>
      </button>
      <button onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-opacity-50 text-white px-4 py-2">
        <svg className="w-6 h-6 text-secondary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokel-linecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </button>
    </div>
  )
}
export default Carousel