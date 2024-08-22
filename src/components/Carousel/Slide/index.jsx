import Image from 'next/image'

const Slide = ({
  header,
  title,
  description,
  images,
  mainImage,
  type,
  nextSlide,
  prevSlide,
  index,
  currentIndex,
}) => {
  if (type === 1 && currentIndex === index) {
    return (
      <div className="w-full flex-shrink-0">
      <section className="h-auto">
        <div className="w-auto bg-[#FFF400] pl-16 md:w-1/3">
          <h3 className="text-[31px] font-black capitalize italic text-black">
          {header}
          </h3>
        </div>
        <div className="block items-center justify-center xl:flex">
          <div className="mt-[2rem] flex flex-wrap items-center justify-center">
            <div className="flex flex-col flex-wrap items-start justify-center">
              <h2 className="text-xl font-bold uppercase">
              {title}
              </h2>

      </div>
        <p>{description}</p>
        <Image width={500} height={300} src={mainImage} alt={title} />
        <div className="flex items-center justify-center">
          <Image
            src={images}
            alt="arrow"
            width={400}
            height={400}
            className="mx-auto h-auto max-h-56 w-auto max-w-96 lg:max-h-[27rem] lg:max-w-[38rem] 2xl:max-h-[40rem] 2xl:max-w-[52rem]"
          />
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
      </div>
      </div>
      </section>
      </div>
    
    )
  }

  // if (type === 2 && currentIndex === index) {
  //   return (
  //     <div>
  //       <h1>{header}</h1>
  //       <h2>{title}</h2>
  //       <p>{description}</p>
  //       <div>
  //         {/* {images.map((image, index) => (
  //           <Image
  //             width={48}
  //             height={48}
  //             key={index}
  //             src={image}
  //             alt={`${title} ${index}`}
  //           />
  //         ))} */}
  //       </div>
  //       <button
  //         onClick={prevSlide}
  //         className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
  //       >
  //         <Image
  //           src="/icons/arrow-down.svg"
  //           alt="arrow"
  //           width={32}
  //           height={32}
  //           className="rotate-90"
  //         />
  //       </button>

  //       <button
  //         onClick={nextSlide}
  //         className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
  //       >
  //         <Image
  //           src="/icons/arrow-down.svg"
  //           className="-rotate-90"
  //           alt="arrow"
  //           width={32}
  //           height={32}
  //         />
  //       </button>
  //     </div>
  //   )
  // }
  // if (type === 3 && currentIndex === index) {
  //   return (
  //     <div>
  //       <h1>{header}</h1>
  //       <h2>{title}</h2>
  //       <p>{description}</p>

  //       <Image
  //         width={500}
  //         height={300}
  //         src={mainImage}
  //         alt={title}
  //         className=""
  //       />
  //       <button
  //         onClick={prevSlide}
  //         className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
  //       >
  //         <Image
  //           src="/icons/arrow-down.svg"
  //           alt="arrow"
  //           width={32}
  //           height={32}
  //           className="rotate-90"
  //         />
  //       </button>
  //       <button
  //         onClick={nextSlide}
  //         className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
  //       >
  //         <Image
  //           src="/icons/arrow-down.svg"
  //           className="-rotate-90"
  //           alt="arrow"
  //           width={32}
  //           height={32}
  //         />
  //       </button>
  //     </div>
  //   )
  // }
  // if (type === 2 && currentIndex === index) {
  //   return (
  //     <article>
  //       <h1>{header}</h1>
  //       <h2>{title}</h2>
  //       <p>{description}</p>
  //       <Image
  //         width={500}
  //         height={300}
  //         src={mainImage}
  //         alt={title}
  //         className=""
  //       />
  //       <button
  //         onClick={prevSlide}
  //         className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
  //       >
  //         <Image
  //           src="/icons/arrow-down.svg"
  //           alt="arrow"
  //           width={32}
  //           height={32}
  //           className="rotate-90"
  //         />
  //       </button>
  //       <button
  //         onClick={nextSlide}
  //         className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
  //       >
  //         <Image
  //           src="/icons/arrow-down.svg"
  //           className="-rotate-90"
  //           alt="arrow"
  //           width={32}
  //           height={32}
  //         />
  //       </button>
  //     </article>
  //   )
  // }
}

export default Slide
