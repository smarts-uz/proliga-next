'use client'

import { redirect } from 'next/navigation'
import { useState } from 'react'
import Gutter from '../../../components/Gutter'

const Phone = () => {
  const [number, setNumber] = useState('')

  if (number.length === 9) {
    redirect('/login')
  }

  return (
    <Gutter>
      <main className="my-4 min-h-[65vh] text-neutral-200">
        <form className="flex w-full flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            Kirish yoki ro&apos;yxatdan o&apos;tish
          </h2>
          <div className="relative text-xl">
            <input
              type="number"
              max={9}
              min={9}
              className="flex h-12 w-full items-center justify-center rounded-md py-1 pl-16 pr-4 text-xl text-black md:w-1/2 xl:w-1/3"
              placeholder="-- --- -- --"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <span className="absolute left-2 top-[20%] font-medium text-gray-800">
              +998
            </span>
          </div>
        </form>
      </main>
    </Gutter>
  )
}

export default Phone
