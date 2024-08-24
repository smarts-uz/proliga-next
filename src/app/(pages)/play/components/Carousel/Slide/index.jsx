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
      <section className="flex min-h-[46rem] flex-col items-center justify-between gap-4 py-6 xl:h-[40rem] xl:flex-row xl:gap-0">
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
    )
  }
  if (type === 2 && currentIndex === index) {
    return (
      <section className="flex min-h-[46rem] w-full flex-col items-center justify-between py-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-2xl font-bold uppercase lg:items-start lg:text-3xl">
            {title}
          </h2>
          <p className="max-w-md text-center text-lg text-neutral-400 lg:text-start">
            {description}
          </p>
        </div>
        <div>
          <Image
            width={500}
            height={300}
            src={mainImage}
            alt={title}
            className="relative size-72 xs:size-80 md:size-96"
          />
        </div>
      </section>
    )
  }

  if (type === 3 && currentIndex === index) {
    return (
      <div className="flex min-h-[46rem] w-full items-center justify-center md:min-h-[36rem]">
        <section className="flex h-auto w-full flex-col items-center">
          <div className="mx-auto flex w-full flex-col items-center text-center">
            <h2 className="text-3xl font-bold uppercase">{title}</h2>
            <p className="text-2xl text-neutral-400">{description}</p>
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
  if (type === 5 && currentIndex === index) {
    return (
      <section className="block h-full min-h-[46rem] w-full justify-between bg-neutral-800">
        <div className="gap-4 py-12 text-center xl:text-start">
          <h1 className="text-3xl uppercase">{header}</h1>
          <h3 className="py-3 text-xl text-neutral-400">{title}</h3>
        </div>
        <div className="grid grid-rows-2 items-center justify-center gap-4 text-neutral-400 xl:flex">
          {images.map((item) => (
            <div className="w-full">
              <h3 className="text-start text-xl xl:text-center">{item.name}</h3>
              <Image src={item.img} width={300} height={100} alt="img" />
            </div>
          ))}
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
