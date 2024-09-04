import Link from 'next/link'

const Hero = () => {
  const btnStyles =
    'border-2 border-primary transition-all text-center px-5 xs:px-6 py-4 rounded-sm font-bold xl:text-lg w-full md:w-48 xl:w-56 -skew-x-12'

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Hero-image.png')" }}
    >
      <div className="flex h-screen flex-col items-center justify-center gap-6 text-white xl:gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl">
            O&apos;Z FUTBOL JAMOANGIZNI
          </h2>
          <h2 className="text-3xl font-bold uppercase md:text-3xl lg:text-5xl xl:text-6xl">
            Biz bilan yarating
          </h2>
        </div>
        <span className="block h-3 w-4/5 -skew-x-[45deg] rounded-sm bg-primary md:w-3/5 lg:w-1/2 xl:w-2/5"></span>
        <div className="flex flex-col gap-4 text-lg font-bold sm:flex-row">
          <Link
            href="/signup"
            className={`${btnStyles} bg-primary text-black hover:bg-opacity-55`}
          >
            Ro&apos;yxatdan otish
          </Link>
          <Link
            href={`/championships`}
            className={`${btnStyles} bg-transparent text-primary hover:bg-primary hover:bg-opacity-55 hover:text-black`}
          >
            O&apos;yinga kirish
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
