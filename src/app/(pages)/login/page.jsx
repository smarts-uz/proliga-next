'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLogIn } from '../../hooks/auth/useLogIn/useLogIn'
import { useRouter } from 'next/navigation'
import { PhoneInput } from '../../../components/PhoneInput'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { data, error, isLoading, logIn } = useLogIn()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    

    if (!email) {
      await logIn({ email, password })
    }

    setEmail('')
    setPassword('')
    setPhone('')

    if (!isLoading && !error && data) {
      return setTimeout(() => router.push('/championships'), 250)
    }
  }

  return (
    <main className="z-10 flex min-h-svh items-center justify-center bg-neutral-800 py-4 text-gray-200 lg:min-h-[45rem] 2xl:min-h-[100vh]">
      <form className="auth-container">
        <h2 className="mb-2 text-center text-xl font-bold md:mb-4 md:text-2xl">
          Tizimga kirish
        </h2>
        <div className="relative flex flex-col gap-1">
          <label htmlFor="username" className="text-xs md:text-base">
            Login:
          </label>
          <PhoneInput
            placeholder="Telefon raqam"
            defaultCountry="UZ"
            className="h-10 bg-neutral-950 text-white"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className="relative flex flex-col gap-1">
          <label htmlFor="password" className="text-xs md:text-base">
            Parol:
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Parol"
            className="auth-input pl-9"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Image
            src="/icons/lock.svg"
            alt="password"
            width={20}
            height={20}
            className="filter-neutral-400 absolute bottom-2.5 left-2"
          />
          <button
            type="button"
            className="absolute bottom-2 right-2 cursor-pointer select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Image src="/icons/eye.svg" width={24} height={24} alt="eye" />
            ) : (
              <Image
                src="/icons/eye-hidden.svg"
                width={24}
                height={24}
                alt="eye hidden"
              />
            )}
          </button>
        </div>
        <Link
          href="/signup"
          className={`my-2 text-sm text-neutral-500 transition-colors hover:text-neutral-400 hover:underline`}
        >
          Akkaunt ochish?
        </Link>
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={isLoading}
          className="mx-auto w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
        >
          {isLoading ? (
            <Image
              src="/icons/loading.svg"
              width={24}
              height={24}
              alt="loading"
              className="mx-auto size-6 animate-spin"
            />
          ) : (
            'Kirish'
          )}
        </button>
      </form>
    </main>
  )
}

export default Login
