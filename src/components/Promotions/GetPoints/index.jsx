import Image from 'next/image'
import Gutter from '../../Gutter'

const GetPoints = () => {
  return (
    <section className="w-full bg-neutral-900 py-8">
      <Gutter>
        <article className="flex w-full flex-col items-center justify-between gap-4 md:gap-0 md:flex-row">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="promotion-header font-bold">BALLARNI YIG’ING</h2>
            <p className="promotion-text max-w-xl text-neutral-400 xs:my-auto">
              Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari
              uchun ochko oladi yoki yo&apos;qotadi. Ballar soni
              o&apos;yinchining roliga qarab farq qilishi mumkin. Masalan,
              himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko oladi
            </p>
          </div>
          <div>
            <Image
              src="/images/promotion-2.png"
              alt="football"
              width={400}
              height={400}
              className="h-72 w-72 md:size-96"
            />
          </div>
        </article>
      </Gutter>
    </section>
  )
}

export default GetPoints
