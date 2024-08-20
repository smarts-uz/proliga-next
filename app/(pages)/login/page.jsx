'use client'
import Gutter from '@/app/components/Gutter/Gutter'
import { useState } from 'react'

const Login = () => {
  const [number, setNumber] = useState('')

  return (
    <main className="my-4 min-h-[50vh]">
      <Gutter>
        <form className="w-full flex flex-col gap-4">
          <h2 className='font-semibold text-2xl' >Kirish yoki ro&apos;yxatdan o&apos;tish</h2>

          <div className="relative text-xl">
            <input
              type="number"
              max={9}
              min={9}
              className="flex h-12 w-1/3 items-center justify-center rounded-md py-1 pl-16 pr-4 text-xl text-black"
              placeholder="-- --- -- --"
            />
            <span className="absolute left-2 top-[20%] font-medium text-gray-800">
              +998
            </span>
          </div>
        </form>
      </Gutter>
    </main>
  )
}

export default Login
