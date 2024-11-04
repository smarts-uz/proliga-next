'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { useLogIn } from 'app/hooks/auth/useLogIn/useLogIn'
import { useGetUserTable } from 'app/hooks/auth/useGetUserTable/useGetUserTable'
import { PhoneInput } from 'components/PhoneInput'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import SendOTPModal from 'components/SendOTPModal'

const LoginForm = ({ onClick }) => {
  const { t } = useTranslation()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { isLoading, logIn, error } = useLogIn()
  const { userTable, userAuth } = useSelector((state) => state.auth)
  const [active, setActive] = useState(false)
  const {
    isLoading: tableIsLoading,
    getUserTable,
    error: tableError,
  } = useGetUserTable()
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      toast.error(t("Parol 6 ta belgidan kam bo'lmasligi kerak"), {
        theme: 'dark',
      })
      return
    }

    setActive(true)
    await getUserTable({ phone })
  }

  useEffect(() => {
    if (userTable && active && password.length > 5) {
      const fetch = async () =>
        await logIn({ email: userTable?.email, password })
      fetch()

      setPassword('')
      setPhone('')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTable, active, password])

  useEffect(() => {
    if (userTable && userAuth && active) {
      router.push('/championships')
      setActive(false)
    }
  }, [active, router, userAuth, userTable])

  useEffect(() => {
    if (error || tableError) {
      setActive(false)
    }
  }, [error, tableError])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 rounded-xl bg-neutral-950 px-5 py-8 shadow shadow-neutral-500 md:px-6"
    >
      <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
        {t('Tizimga kirish_1')}
      </h2>
      <div className="relative flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs md:text-base">
          {t('Login')}:
        </label>
        <PhoneInput
          id="phone"
          name="phone"
          placeholder={t('Telefon raqam')}
          defaultCountry="UZ"
          className="h-10 bg-neutral-950 text-neutral-200 placeholder:text-neutral-500"
          value={phone}
          onChange={setPhone}
        />
      </div>
      <div className="relative flex flex-col gap-1">
        <label htmlFor="password" className="text-xs md:text-base">
          {t('Parol')}:
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder={t('Parol')}
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
      <div className="my-2 flex justify-between">
        <button
          type="button"
          onClick={onClick}
          className={`self-start text-sm text-neutral-300 transition-colors hover:text-neutral-100 hover:underline`}
        >
          {t("Ro'yxatdan o'tish")}
        </button>
        <buttton
          className={`self-start text-sm text-neutral-300 transition-colors hover:text-neutral-100 hover:underline`}
          onClick={() => setModalOpen(true)}
        >
          {t('Parolni unutdingizmi?')}
        </buttton>
      </div>
      <button
        type="submit"
        disabled={isLoading || tableIsLoading}
        className="mx-auto w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
      >
        {isLoading || tableIsLoading ? (
          <Image
            src="/icons/loading.svg"
            width={24}
            height={24}
            alt="loading"
            className="mx-auto size-6 animate-spin"
          />
        ) : (
          t('Tizimga kirish_2')
        )}
      </button>
      <SendOTPModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </form>
  )
}

export default LoginForm
