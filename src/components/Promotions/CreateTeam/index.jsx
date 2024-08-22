import Image from 'next/image'
import Gutter from '../../Gutter'

const CreateTeam = () => {
  return (
    <section className="bg-neutral-800 py-8">
      <Gutter>
        <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="mt-[2rem] flex flex-1 flex-col flex-wrap">
            <div className="mb-12 -skew-x-12 self-start rounded-sm bg-primary pl-12 pr-16">
              <h3 className="text-2xl font-bold capitalize text-black lg:text-3xl">
                Umumiy qoidalar
              </h3>
            </div>
            <div className="flex flex-col flex-wrap justify-center gap-4 self-center">
              <h2 className="text-2xl font-bold uppercase lg:text-3xl">
                jamoa yig&apos;ing
              </h2>
              <p className="max-w-md text-base text-gray-400 lg:text-2xl">
                100 millionlik byudjetdan foydalaning va chempionatning eng
                yaxshifutbolchilaridan iborat jamoani to&apos;plang
              </p>
            </div>
            <div className="self-cente relative self-center">
              <Image
                width={450}
                height={405}
                alt="footballers images"
                className="min-w-80 min-h-72"
                src="/images/football-tiles.png"
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              className="h-full w-full"
              src="/images/promotion-1.png"
              width={480}
              height={480}
              alt="interactive stadium"
            />
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default CreateTeam
