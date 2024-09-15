import Image from 'next/image'
import Gutter from '../../Gutter'

const PromotionGatherPoints = () => {
  return (
    <section className="w-full bg-neutral-900 py-6 md:py-8 xl:py-10 2xl:py-12">
      <Gutter>
        <article className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="my-auto flex flex-col gap-4 xl:gap-8">
            <h2 className="promotion-header font-bold">BALLARNI YIG’ING</h2>
            <p className="promotion-text text-neutral-400 md:max-w-lg xl:max-w-xl">
              Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari
              uchun ochko oladi yoki yo&apos;qotadi. Ballar soni
              o&apos;yinchining roliga qarab farq qilishi mumkin. Masalan,
              himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko oladi
            </p>
          </div>
          <div className="h-full self-center md:self-start">
            <Image
              src="/images/promotion-2.png"
              alt="football"
              width={400}
              height={400}
              className="h-full w-full"
            />
          </div>
        </article>
      </Gutter>
    </section>
  )
}

export default PromotionGatherPoints
