'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSignUp } from '../../hooks/auth/useSignUp/useSignUp'

const SignUp = () => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { signUp, data, error, isLoading } = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signUp({ email, password, confirmPassword, phone })

    if (error) return

    setPhone('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  // useEffect(() => {
  //   state.user && setTimeout(() => redirect('/'), 500)
  // }, [state.user])

  return (
    <main className="z-10 flex min-h-svh items-center justify-center bg-neutral-800 py-4 text-neutral-200 lg:min-h-[45rem] 2xl:min-h-[100vh]">
      <form className="auth-container">
        <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
          Ro&apos;yxatdan o&apos;tish
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
            min={9}
            max={9}
            required
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
            name="confirmPassword"
            id="confirmPassword"
            placeholder="********"
            className="auth-input"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute bottom-2 right-2 cursor-pointer select-none"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? (
              <Image src="/icons/eye.svg" alt="eye" width={24} height={24} />
            ) : (
              <Image
                src="/icons/eye-hidden.svg"
                alt="eye"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
        <div className="relative flex flex-col gap-1">
          <label htmlFor="password" className="text-xs md:text-base">
            Parol tasdiqlash:
          </label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="********"
            className="auth-input"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="absolute bottom-2 right-2 cursor-pointer select-none"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <Image src="/icons/eye.svg" alt="eye" width={24} height={24} />
            ) : (
              <Image
                src="/icons/eye-hidden.svg"
                alt="eye"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
        <Link
          href="/login"
          className={`my-2 text-sm text-neutral-600 transition-colors hover:text-neutral-500 hover:underline`}
        >
          Akkauntingiz bormi?
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

export default SignUp
