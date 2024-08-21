'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { supabase } from '../../lib/supabaseClient'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || !phone)
      return toast.error("Barcha maydonlar to'ldirilishi shart")
    if (password.length < 6)
      return toast.error("Parol 6 ta belgidan kam bo'lmasligi kerak")
    if (phone.length !== 9) return toast.error('Telefon raqam xato')

    const { data, error } = await supabase.auth.signInWithPassword({
      email: "dilb2dek1@gmail.com",
      password: "root123"
    })

    if (error) {
      toast.error(error.message)
    }
    if (data) {
      toast.success('Tizimga muvaffaqiyatli kirildi')
    }
    console.log(data, error)
  }

  return (
    <div className="z-20 flex min-h-[70vh] items-center justify-center bg-neutral-800 py-4 text-gray-200">
      <form className="auth-container">
        <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
          Tizimga kirish
        </h2>
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
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="absolute bottom-2 left-2 text-neutral-300">
            +998
          </span>
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
          <span
            className="absolute bottom-2 right-2 cursor-pointer select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <EyeHiddenIcon />}
          </span>
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
          className="w-full rounded-md border border-primary bg-neutral-800 py-3 font-semibold transition-all hover:bg-neutral-900 hover:bg-opacity-50"
        >
          Kirish
        </button>
      </form>
    </div>
  )
}

const EyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        fill="#cacaca"
        d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
      />
    </svg>
  )
}

const EyeHiddenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        fill="#cacaca"
        d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
      />
    </svg>
  )
}

export default Login
