import { Irish_Grover } from 'next/font/google'
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
      <div>
        <section className="flex h-auto flex-col items-center justify-between gap-4 py-6 xl:h-[40rem] xl:flex-row xl:gap-0">
          <div className="flex w-full max-w-lg flex-col">
            <div className="-skew-x-12 rounded-sm bg-primary">
              <h3 className="text-center text-3xl font-black capitalize text-black">
                {header}
              </h3>
            </div>
            <h2 className="pt-5 text-2xl font-bold uppercase">{title}</h2>
            <p className="pt-5 text-xl text-neutral-400">{description}</p>
            <Image width={400} height={400} src={mainImage} alt={title} />
          </div>
          <div className="items-end">
            <Image
              src={images}
              alt="additional"
              width={500}
              height={600}
              className="aspect-[6/5] h-full w-full md:min-h-96"
            />
          </div>
        </section>
      </div>
    )
  }
  if (type === 2 && currentIndex === index) {
    return (
      <section className="flex h-[40rem] w-full items-center">
        <div className="xl:felx-col flex w-full justify-between gap-8">
          <div className="mt-2 max-w-md pt-2">
            <h2 className="text-3xl font-bold uppercase">{title}</h2>
            <p className="text-lg text-neutral-400">{description}</p>
          </div>
          <div>
            <Image
              width={500}
              height={300}
              src={mainImage}
              alt={title}
              className="relative h-[230px] w-[230px] sm:h-[430px] sm:w-[430px]"
            />
          </div>
        </div>
      </section>
    )
  }

  if (type === 3 && currentIndex === index) {
    return (
      <div className="flex h-[40rem] w-full items-center justify-center">
        <section className="flex h-auto w-full flex-col items-center pb-10">
          <div className="mx-auto mt-2 flex w-full flex-col items-center pt-2 text-center">
            <h2 className="pt-7 text-5xl font-bold uppercase">{title}</h2>
            <p className="pt-5 text-2xl text-neutral-400">{description}</p>
            <Image
              width={550}
              height={400}
              src={mainImage}
              alt={title}
              className="relative mx-auto pt-12"
            />
          </div>
        </section>
      </div>
    )
  }
  if (type === 4 && currentIndex === index) {
    return (
      <section className="flex h-full bg-neutral-800 py-12">
        <div className="ml-28 flex flex-col-reverse gap-8 xl:flex-row">
          <Image src={mainImage} width={500} height={100} alt="img" />
          <div>
            <h1 className="mt-28 text-3xl">{header}</h1>
            <h3 className="text-md max-w-sm md:max-w-lg">{description}</h3>
          </div>
        </div>
      </section>
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
