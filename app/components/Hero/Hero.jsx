import Gutter from '@/app/components/Gutter/Gutter'

const Hero = () => {
  const btnStyles = 'border-2 border-primary transition-all px-6 py-4 rounded-xl font-bold text-lg'

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: 'url(\'/images/Hero-image.png\')' }}
    >
      <Gutter>
        <div className=" flex h-[90vh] flex-col items-center justify-center gap-4 text-white ">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold"> O&apos;Z FUTBOL JAMOANGIZNI</h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"> FUTBOL JAMOANGIZNI</h2>
          <span className="bg-primary block h-3 w-4/5 md:w-3/5 xl:w-2/5 rounded-md"></span>
          <div className="flex gap-4 font-bold text-lg">
            <button
              className={`${btnStyles} bg-primary text-black hover:bg-transparent hover:text-primary`}>Royxatdan
              otish
            </button>
            <button
              className={`${btnStyles} bg-transparent hover:bg-primary text-primary hover:text-black`}>O&apos;yinga
              kirish
            </button>
          </div>
        </div>

      </Gutter>

    </section>
  )
}

export default Hero
