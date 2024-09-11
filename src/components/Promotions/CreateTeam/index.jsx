import Image from 'next/image'
import Gutter from '../../Gutter'

const CreateTeam = () => {
  return (
    <section className="bg-neutral-800 py-8">
      <Gutter>
        <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="mt-8 flex flex-1 flex-col flex-wrap">
            <div className="mb-12 w-5/6 max-w-[32rem] -skew-x-12 self-start rounded-sm bg-primary pl-12 pr-16">
              <h3 className="promotion-header text-center font-bold capitalize text-black">
                Umumiy qoidalar
              </h3>
            </div>
            <div className="flex flex-col flex-wrap justify-center gap-4 self-start lg:pl-8">
              <h2 className="promotion-header font-bold uppercase">
                jamoa yig&apos;ing
              </h2>
              <p className="max-w-xl text-sm text-neutral-300 xs:text-base lg:text-lg xl:text-xl">
                100 millionlik byudjetdan foydalaning va chempionatning eng
                yaxshifutbolchilaridan iborat jamoani to&apos;plang
              </p>
              <div className="relative self-start xs:px-8">
                <Image
                  width={400}
                  height={400}
                  alt="footballers images"
                  className="aspect-[1.12/1] w-full"
                  src="/images/football-tiles.png"
                />
              </div>
            </div>
          </div>
          <div className="items-end self-end">
            <Image
              src="/images/promotion-1.png"
              width={600}
              height={600}
              className="aspect-[1/1.025] h-full w-full min-w-full"
              alt="interactive stadium"
            />
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default CreateTeam
