import Image from 'next/image'
import Gutter from '../../Gutter'

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
      // <Gutter>
      <section className="flex h-auto flex-col items-center justify-between gap-4 py-6 xl:h-[40rem] xl:flex-row xl:gap-0">
        <div className="flex w-full max-w-lg flex-col">
          <div className="-skew-x-12 rounded-sm bg-primary">
            <h3 className="text-3xl font-black capitalize text-black">
              {header}
            </h3>
          </div>
          <h2 className="text-2xl font-bold uppercase pt-5">{title}</h2>
          <p className="text-xl text-neutral-400 pt-5">{description}</p>
          <Image
            width={400}
            height={400}
            src={mainImage}
            alt={title}
            // className="h-[230px] w-[230px] sm:h-[430px] sm:w-[430px]"
          />
        </div>
        <div className="items-end">
          <Image
            src={images}
            alt="additional"
            width={500}
            height={600}
            // className="h-auto max-h-56 w-auto max-w-96 lg:max-h-[27rem] lg:max-w-[38rem] 2xl:max-h-[40rem] 2xl:max-w-[52rem]"
            className="aspect-[6/5] h-full w-full md:min-h-96"
          />
        </div>
        <button
          onClick={prevSlide}
          className="top-[50% - 32px] absolute left-8 transform bg-opacity-50 px-4 py-2 text-white xl:-left-4"
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
          className="top-[50% - 32px] absolute right-8 bg-opacity-50 px-4 py-2 text-white xl:-right-4"
        >
          <Image
            src="/icons/arrow-down.svg"
            className="-rotate-90"
            alt="arrow"
            width={32}
            height={32}
          />
        </button>
      </section>
      // </Gutter>
    )
  }
  if (type === 2 && currentIndex === index) {
    return (
      <div className="justify- flex h-[40rem] w-full items-center">
        <section className="h-auto w-full pb-10">
          <div className="flex justify-between">
            <div className="mt-2 w-[30rem] pt-2 text-start">
              <h2 className="text-5xl font-bold uppercase">{title}</h2>
              <p className="pt-5 text-xl text-neutral-400">{description}</p>
            </div>

            <div className="w-auto">
              <Image
                width={500}
                height={300}
                src={mainImage}
                alt={title}
                className="relative h-[230px] w-[230px] sm:h-[430px] sm:w-[430px]"
              />
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
        </section>
      </div>
    )
  }
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
