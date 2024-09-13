import Image from 'next/image'
import Gutter from '../../Gutter'

const GetPoints = () => {
  return (
    <section className="w-full bg-neutral-900 py-6 md:py-8">
      <Gutter>
        <article className="flex w-full flex-col-reverse justify-between gap-4 md:gap-0 md:flex-row">
          <div className="flex flex-col gap-4 xl:gap-8 my-auto">
            <h2 className="promotion-header font-bold">BALLARNI YIG’ING</h2>
            <p className="promotion-text md:max-w-md 2xl:max-w-lg text-neutral-400 ">
              Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari
              uchun ochko oladi yoki yo&apos;qotadi. Ballar soni
              o&apos;yinchining roliga qarab farq qilishi mumkin. Masalan,
              himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko oladi
            </p>
          </div>
          <div className='self-center md:self-start md:w-1/3 h-full'>
            <Image
              src="/images/promotion-2.png"
              alt="football"
              width={400}
              height={400}
              className=" w-96 aspect-[1/1.05]"
            />
          </div>
        </article>
      </Gutter>
    </section>
  )
}

export default GetPoints
