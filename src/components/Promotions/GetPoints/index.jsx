import React from 'react';
import Image from "next/image";

const GetPoints = () => {
  return (
    <section className="bg-[#222222] md:flex block md:px-[6rem] px-[1rem] justify-between items-center">
      <div>
        <h2>BALLARNI YIG’ING</h2>
        <p className="max-w-[651px]">
          Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari uchun
          ochko oladi yoki yo&apos;qotadi. Ballar soni o&apos;yinchining roliga qarab
          farq qilishi mumkin. Masalan, himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko
          oladi
        </p>
      </div>

      <div>
        <img src='/images/promotion-2.png' alt=''/>
      </div>
    </section>
  )
}

export default GetPoints;