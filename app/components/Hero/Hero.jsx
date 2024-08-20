import Gutter from '@/app/components/Gutter/Gutter'

const Hero = () => {
  const btnStyles =
    'border-2 border-primary transition-all px-5 xs:px-6 py-4 rounded-xl font-bold xl:text-lg w-full md:w-48 xl:w-56'

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Hero-image.png')" }}
    >
      <Gutter>
        <div className="flex h-[90vh] flex-col items-center justify-center gap-5 text-white xl:gap-6">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl">
            O&apos;Z FUTBOL JAMOANGIZNI
          </h2>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            FUTBOL JAMOANGIZNI
          </h2>
          <span className="block h-3 w-4/5 rounded-md bg-primary md:w-3/5 xl:w-2/5"></span>
          <div className="flex flex-col sm:flex-row gap-4 text-lg font-bold">
            <button
              className={`${btnStyles} bg-primary text-black hover:bg-opacity-55`}
            >
              Royxatdan otish
            </button>
            <button
              className={`${btnStyles} bg-transparent text-primary hover:bg-primary hover:bg-opacity-55 hover:text-black`}
            >
              O&apos;yinga kirish
            </button>
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default Hero
