import Image from 'next/image'
import Gutter from '../../Gutter'

const CreateTeam = () => {
  return (
    <section className="w-full bg-neutral-800">
    <Gutter className={'bg-neutral-800 py-8'}>
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        <div className="mt-[2rem] flex flex-1 flex-col flex-wrap">
          <div className="mb-12 -skew-x-12 self-start rounded-sm bg-primary pl-12 pr-16">
            <h3 className="text-3xl font-bold capitalize text-black">
              Umumiy qoidalar
            </h3>
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-4 self-center">
            <h2 className="text-4xl font-bold uppercase">jamoa yig&apos;ing</h2>
            <p className="max-w-md">
              100 millionlik byudjetdan foydalaning va chempionatning eng
              yaxshifutbolchilaridan iborat jamoani to&apos;plang
            </p>
          </div>
          <div className="relative  sm:w-[430px] sm:h-[430px] w-[230px] h-[230px] self-center">
            <Image
              width={146}
              height={146}
              alt="image"
              className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 transform sm:h-auto sm:w-auto"
              src="/images/promotion-3.png"
            />
            <Image
              width={146}
              height={146}
              alt="image"
              className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 transform sm:h-auto sm:w-auto"
              src="/images/promotion-4.png"
            />
            <Image
              width={146}
              height={146}
              alt="image"
              className="absolute left-0 top-1/2 h-32 w-32 -translate-y-1/2 transform sm:h-auto sm:w-auto"
              src="/images/promotion-5.png"
            />
            <Image
              width={146}
              height={146}
              alt="image"
              className="absolute right-0 top-1/2 min-h-32 w-32 -translate-y-1/2 transform sm:h-auto sm:w-auto"
              src="/images/promotion-6.png"
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