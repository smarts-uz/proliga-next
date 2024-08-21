import Image from 'next/image'

const GetPoints = () => {
  return (
    <section className="block items-center justify-between bg-[#222222] px-[1rem] md:flex md:px-[6rem]">
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
    </section>
  )
}

export default GetPoints
