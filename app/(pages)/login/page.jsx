'use client'
import { useState, MouseEvent, useEffect } from 'react'
import Link from 'next/link'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [settingsStatus, setSettingsStatus] = useState(null)

  const handleSubmit = async (e) => {}

  useEffect(() => {}, [])

  return (
    <div className="z-20 flex min-h-[60vh] items-center justify-center bg-neutral-800 text-gray-200">
      <form className="auth-container">
        <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
          Tizimga kirish
        </h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-xs md:text-base">
            Foydalanuvchi ismi:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="auth-input"
            placeholder="Sizning ismingiz"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            placeholder="Sizning parolingiz"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute bottom-2 right-2 cursor-pointer select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="#f0f0f0"
                  d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="#f0f0f0"
                  d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
                />
              </svg>
            )}
          </span>
        </div>
        <Link
          href="/signup"
          className={`my-2 text-sm text-neutral-600 transition-colors hover:text-neutral-500 hover:underline `}
        >
          Akkaunt ochish?
        </Link>
        <button className="w-full rounded-md border border-primary bg-neutral-800 py-3 font-semibold transition-all hover:bg-neutral-900 hover:bg-opacity-50">
          Kirish
        </button>
      </form>
    </div>
  )
}

export default Login
