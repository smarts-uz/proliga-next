// 'use server'
import Link from 'next/link'
// import { getDictionary } from 'app/utils/getDictionary'
import { useDictionary } from 'app/utils/getDictionary'
import { useTranslation } from 'react-i18next'

const Hero = async () => {
  const { i18n } = useTranslation()
  const lang = i18n.language
  console.log(lang)
  const { data: d, isLoading, error } = useDictionary(lang)

  console.log(d?.["O'z futbol jamoangizni"])
  return (
    <section
      className="w-full bg-cover bg-center"
      suppressHydrationWarning
      style={{ backgroundImage: "url('/images/Hero-image.png')" }}
    >
      {/* <div className="flex h-screen flex-col items-center justify-center gap-6 text-white xl:gap-6">
        <div className="flex flex-col gap-0 text-center xs:gap-1 md:gap-2">
          <h2 className="mx-1 text-[22px] font-semibold uppercase xs:text-2xl sm:text-2xl md:text-3xl xl:text-4xl">
            {d["O'z futbol jamoangizni"]}
          </h2>
          <h2 className="mx-1 text-[34px] font-bold uppercase xs:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            {d['Biz bilan yarating']}
          </h2>
        </div>
        <span className="block h-3 w-4/5 -skew-x-[45deg] rounded-sm bg-primary md:w-3/5 lg:w-1/2 xl:w-2/5" />
        <div className="flex w-full flex-col items-center justify-center gap-4 text-lg font-bold sm:flex-row">
          <Link
            href="/auth"
            className={`w-full max-w-64 -skew-x-12 rounded-sm border-2 border-primary bg-primary px-5 py-4 text-center font-bold uppercase text-black transition-all hover:bg-opacity-55 xs:px-5 xl:text-lg`}
          >
            {d["Ro'yxatdan otish"]}
          </Link>
          <Link
            href={`/championships`}
            className={`w-full max-w-64 -skew-x-12 rounded-sm border-2 border-primary bg-transparent px-5 py-4 text-center font-bold uppercase text-primary transition-all hover:bg-primary hover:bg-opacity-55 hover:text-black xs:px-5 xl:text-lg`}
          >
            {d["O'yinga kirish"]}
          </Link>
        </div>
      </div> */}
    </section>
  )
}

export default Hero
