import Image from 'next/image'
import Gutter from '@/src/components/Gutter'

const GetPoints = () => {
  return (
    <section className=" bg-[#222222] ">
      <Gutter className={'block items-center justify-between md:flex'}>
      <div>
        <h2>BALLARNI YIG’ING</h2>
        <p className="max-w-[651px]">
          Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari uchun
          ochko oladi yoki yo&apos;qotadi. Ballar soni o&apos;yinchining roliga
          qarab farq qilishi mumkin. Masalan, himoyachi gol uchun 6 ochko,
          hujumchi esa 4 ochko oladi
        </p>
      </div>

      <div>
        <Image
          src="/images/promotion-2.png"
          alt="football"
          width={400}
          height={400}
        />
      </div>
      </Gutter>
    </section>
  )
}

export default GetPoints
