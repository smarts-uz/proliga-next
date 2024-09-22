'use client'
import { useEffect, useState } from 'react'
import Gutter from '../../../../../components/Gutter'
import Slide from './Slide'
import Image from 'next/image'
import SliderPin from './Slide/pin'
import { useTranslation } from 'react-i18next'
const Carousel = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [active, setActive] = useState(false)
  const [imageAnimation, setImageAnimation] = useState('fade-in')

  const nextSlide = () => {
    setCurrentIndex((prevState) => {
      setActive(true)
      if (data.length > 1) {
        setImageAnimation('transition-right')
      }
      if (prevState === data.length - 1) {
        return 0
      } else {
        return prevState + 1
      }
    })
  }
  const prevSlide = () => {
    setActive(true)
    if (data.length > 1) {
      setImageAnimation('transition-left')
    }

    setCurrentIndex((prevState) => {
      if (prevState === 0) {
        return data.length - 1
      } else {
        return prevState - 1
      }
    })
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])
  const data = [
    {
      header: t('Umumiy qoidalar'),
      title: t("jamoa yig'ing"),
      description: t('promotion_text'),
      images: '/images/promotion-1.png',
      mainImage: '/images/footballers-tile.png',
      type: 1,
    },
    {
      title: t('Ochkolar yiging'),
      description: t("Har bir o'yinchi"),
      mainImage: '/images/promotion-2.png',
      type: 2,
    },
    {
      header: t('Umumiy qoidalar'),
      title: t('Transferlarni amalga oshiring'),
      description: t('Agar sizning jamoangizdagi'),
      images: '/images/transfer-removebg-preview.png',
      mainImage: '/images/promotion-transfer.png',
      type: 3,
    },
    {
      header: t('Raqobatlashing'),
      description: t('Boshqa foydalanuvchilar'),
      mainImage: '/images/promotion-stats.png',
      type: 4,
    },
    {
      header: t('Sovrinlarni yutib oling'),
      title: t('Eng ko‘p ball'),
      type: 5,
      images: [
        { name: 'Iphone 15 Pro Max', img: '/images/promotion-price1.png' },
        { name: 'Playstation 5', img: '/images/promotion-price2.png' },
        { name: 'TV Samsung  55', img: '/images/promotion-price3.png' },
        { name: 'Apple iPad Pro ', img: '/images/promotion-price4.png' },
      ],
    },
  ]
  return (
    <section className="overflow-hidden bg-neutral-800">
      <Gutter>
        <section className="flex flex-col gap-4 pb-4">
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
              imageAnimation={imageAnimation}
            />
          ))}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 hidden bg-opacity-50 px-4 py-2 text-white xl:block 2xl:-left-24"
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
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white xl:block 2xl:-right-24"
          >
            <Image
              src="/icons/arrow-down.svg"
              className="-rotate-90"
              alt="arrow"
              width={32}
              height={32}
            />
          </button>
          <div className="flex w-full items-center justify-center gap-2 self-center">
            {data &&
              data.map((image, i) => (
                <SliderPin
                  key={i}
                  image={image}
                  index={currentIndex}
                  currentIndex={i}
                  setImageAnimation={setImageAnimation}
                  handleClick={setCurrentIndex}
                />
              ))}
          </div>
        </section>
      </Gutter>
    </section>
  )
}

// {
//   header: 'Umumiy qoidalar',
//   title: "Jamoa yig'ing",
//   description:
//     "100 - millionlik byudjetdan foydalaning va chempionatning eng yaxshi futbolchilaridan iborat jamoani to'plang",
//   images: '/promotions-tiles.png',
//   mainImage: '/images/promotion-3.png',
//   type: 3,
// },
//   {
//     header: 'Umumiy qoidalar',
//     title: "Jamoa yig'ing",
//     description:
//       "100 - millionlik byudjetdan foydalaning va chempionatning eng yaxshi futbolchilaridan iborat jamoani to'plang",
//     images: '/promotions-tiles.png',
//     mainImage: '/images/promotion-3.png',
//     type: 1,
//   },

export default Carousel
