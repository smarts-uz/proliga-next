'use client'
import { useState } from 'react'
import Image from 'next/image'
import Gutter from '../Gutter'
import Slide from './Slide'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevState) => {
      if (prevState === data.length - 1) {
        return 0
      } else {
        return prevState + 1
      }
    })
  }
  const prevSlide = () => {
    setCurrentIndex((prevState) => {
      if (prevState === 0) {
        return data.length - 1
      } else {
        return prevState - 1
      }
    })
  }

  return (
    <section className="bg-neutral-800">
      <Gutter>
        {data.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            header={slide.header}
            description={slide.description}
            images={slide.images}
            mainImage={slide.mainImage}
            type={slide.type}
            index={index}
            currentIndex={currentIndex}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        ))}
      </Gutter>
    </section>
  )
}

const data = [
  {
    header: 'Umumiy qoidalar',
    title: "Jamoa yig'ing",
    description:
      "100 - millionlik byudjetdan foydalaning va chempionatning eng yaxshi futbolchilaridan iborat jamoani to'plang",
    images: '/images/promotion-1.png',
    mainImage: '/images/Group 219.png',
    type: 1,
  },
  {
    title: 'BALLARNI YEG’ING',
    description:
      "Har bir o'yinchi haqiqiy o'yinlarda qilgan harakatlari uchun ochko oladi yoki yo'qotadi. Ballar soni o'yinchining roliga qarab farq qilishi mumkin. Masalan, himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko oladi",
    mainImage: '/images/promotion-2.png',
    type: 2,
  },
  {
    header: 'Umumiy qoidalar',
    title: "Jamoa yig'ing",
    description:
      ' Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari uchun ochko oladi yoki yo&apos;qotadi. Ballar soni o&apos;yinchining roliga qarab farq qilishi mumkin. Masalan, himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko oladi',
    images: '/promotions-tiles.png',
    mainImage: '/images/promotion-1.png',
    type: 3,
  },
  {
    header: 'Umumiy qoidalar',
    title: "Jamoa yig'ing",
    description:
      "100 - millionlik byudjetdan foydalaning va chempionatning eng yaxshi futbolchilaridan iborat jamoani to'plang",
    images: '/promotions-tiles.png',
    mainImage: '/images/promotion-3.png',
    type: 3,
  },
  {
    header: 'Umumiy qoidalar',
    title: "Jamoa yig'ing",
    description:
      "100 - millionlik byudjetdan foydalaning va chempionatning eng yaxshi futbolchilaridan iborat jamoani to'plang",
    images: '/promotions-tiles.png',
    mainImage: '/images/promotion-3.png',
    type: 1,
  },
]

export default Carousel
