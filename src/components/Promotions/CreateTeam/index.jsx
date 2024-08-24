import Image from 'next/image'
import Gutter from '../../Gutter'

const CreateTeam = () => {
  return (
    <section className="bg-neutral-800 py-8">
      <Gutter>
        <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="mt-[2rem] flex flex-1 flex-col flex-wrap">
            <div className="mb-12 w-5/6 -skew-x-12 self-start rounded-sm bg-primary pl-12 pr-16">
              <h3 className="text-center text-2xl font-bold capitalize text-black md:text-3xl lg:text-4xl">
                Umumiy qoidalar
              </h3>
            </div>
            <div className="flex flex-col flex-wrap justify-center gap-4 self-center">
              <h2 className="pl-8 font-bold uppercase md:text-3xl">
                jamoa yig&apos;ing
              </h2>
              <p className="min-w-xl pl-8 text-base text-gray-400 lg:text-2xl">
                100 millionlik byudjetdan foydalaning va chempionatning eng
                yaxshifutbolchilaridan iborat jamoani to&apos;plang
              </p>
            </div>
            <div className="self-cente relative self-center">
              <Image
                width={450}
                height={505}
                alt="footballers images"
                className="min-h-72 min-w-80"
                src="/images/football-tiles.png"
              />
            </div>
          </div>
          <div className="flex">
            <Image
              src="/images/promotion-1.png"
              width={840}
              height={600}
              alt="interactive stadium"
            />
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default CreateTeam
