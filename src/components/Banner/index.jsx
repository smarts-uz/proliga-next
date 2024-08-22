import Gutter from '../Gutter'

const Banner = () => {
  return (
    <section
      className="h-96 w-full bg-cover bg-center 2xl:h-[35vh]"
      style={{ backgroundImage: "url('/images/Hero-image.png')" }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 text-white xl:gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl">
            O&apos;Z FUTBOL JAMOANGIZNI
          </h2>
          <h2 className="text-3xl font-bold uppercase sm:text-4xl lg:text-5xl xl:text-6xl">
            Biz bilan yarating
          </h2>
        </div>
        <span className="block h-3 w-4/5 -skew-x-[30deg] rounded-sm bg-primary md:w-3/5 lg:w-1/2 xl:w-2/5"></span>
      </div>
    </section>
  )
}
export default Banner
