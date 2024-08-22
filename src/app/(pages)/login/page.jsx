'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLogIn } from '../../hooks/auth/useLogIn/useLogIn'
import { redirect } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { data, error, isLoading, logIn } = useLogIn()
  console.log(error)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await logIn({ email, password, phone })

    if (error) return

    setEmail('')
    setPassword('')
    setPhone('')

    // return setTimeout(() => redirect('/'), 500) should use useEffect
  }

  return (
    <main className="z-20 flex min-h-[70vh] items-center justify-center bg-neutral-800 py-4 text-gray-200">
      <form className="auth-container">
        <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
          Tizimga kirish
        </h2>
        <div className="relative flex flex-col gap-1">
          <label htmlFor="username" className="text-xs md:text-base">
            Telefon raqam:
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="auth-input pl-14"
            placeholder="-- --- -- --"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="absolute bottom-2 left-2 text-neutral-300">
            +998
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-xs md:text-base">
            Elektron pochta:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="auth-input"
            placeholder="example@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="********"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          className={`my-2 text-sm text-neutral-600 transition-colors hover:text-neutral-500 hover:underline`}
        >
          Akkaunt ochish?
        </Link>
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={isLoading}
          className="w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
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
