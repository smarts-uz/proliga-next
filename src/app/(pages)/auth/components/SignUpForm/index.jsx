'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSignUp } from 'app/hooks/auth/useSignUp/useSignUp'
import { PhoneInput } from 'components/PhoneInput'
import { useUpdateUserTable } from 'app/hooks/auth/useUpdateUserTable/useUpdateUserTable'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import {
  setUserAuth,
  setUserTempData,
  setUserTable,
} from 'app/lib/features/auth/auth.slice'
import { useCheckUserNotExists } from 'app/hooks/auth/useCheckUserNotExists/useCheckUserNotExists'

const SignUpForm = ({ onClick }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation()

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [active, setActive] = useState(false)
  const [password, setPassword] = useState('')
  const [agreement, setAgreement] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { userAuth, userTable } = useSelector((store) => store.auth)

  const { signUp, error: authError, isLoading: authLoading } = useSignUp()
  const {
    updateUserTable,
    isLoading: tableLoading,
    error: tableError,
  } = useUpdateUserTable()
  const {
    checkUserNotExists,
    isLoading: checkLoading,
    error: checkError,
    data: checkData,
  } = useCheckUserNotExists()

  const isLoading = useMemo(
    () => authLoading || tableLoading || checkLoading,
    [authLoading, tableLoading, checkLoading]
  )
  const error = useMemo(
    () => authError || checkError || tableError,
    [authError, checkError, tableError]
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!agreement) {
      toast.error(t('Iltimos qoidalarga rozilik berin'), {
        theme: 'dark',
      })
      return
    }

    if (password.length < 6) {
      toast.error(t("Parol 6 ta belgidan kam bo'lmasligi kerak"), {
        theme: 'dark',
      })
      return
    }
    if (!email || !password) {
      toast.error(t("Barcha maydonlar to'ldirilishi shart"), {
        theme: 'dark',
      })
      return
    }
    if (password !== confirmPassword) {
      toast.error(t('Parollar mos kelmadi'), { theme: 'dark' })
      return
    }
    if (phone.length !== 13) {
      toast.error(t("Telefon raqam noto'g'ri"), { theme: 'dark' })
      return
    }

    if (phone.slice(0, 4) !== '+998') {
      toast.error(t("Phone number must start with '+998'."), { theme: 'dark' })
      return
    }

    setActive(true)
    await checkUserNotExists({ phone })
  }

  useEffect(() => {
    if (active) {
      if (
        checkData &&
        !checkLoading &&
        !checkError &&
        !authLoading &&
        !userAuth
      ) {
        const fetch = async () =>
          await signUp({ email, password, confirmPassword, setActive })

        fetch()
      }
    }
  }, [
    t,
    email,
    active,
    signUp,
    userAuth,
    password,
    checkData,
    checkError,
    authLoading,
    checkLoading,
    confirmPassword,
  ])

  useEffect(() => {
    if (active) {
      if (
        userAuth?.user?.id &&
        phone &&
        !authError &&
        !checkError &&
        !authLoading &&
        !checkLoading &&
        !tableLoading
      ) {
        const fetch = async () => {
          await updateUserTable({
            id: userAuth.user.id,
            email: userAuth.user.email,
            phone,
          })
        }

        fetch()
      }
    }
  }, [
    userAuth,
    active,
    phone,
    authError,
    updateUserTable,
    checkLoading,
    tableLoading,
    authLoading,
    checkError,
  ])

  useEffect(() => {
    if (userAuth && userTable && active) {
      setActive(false)
      setPhone('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      toast.success(t('Tizimga muvaffaqiyatli kirdingiz'), { theme: 'dark' })
      router.push('/championships')
    }
  }, [active, router, userAuth, userTable, t])

  useEffect(() => {
    if (error) {
      setActive(false)
      localStorage.clear()
      dispatch(setUserAuth(null))
      dispatch(setUserTable(null))
      dispatch(setUserTempData(null))
    }
  }, [error, dispatch])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 rounded-xl bg-neutral-950 px-5 py-8 shadow shadow-neutral-500 md:px-6"
    >
      <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
        {t("Ro'yxatdan o'tish")}
      </h2>
      <div className="relative flex flex-col gap-1">
        <label
          htmlFor="phone"
          className="text-xs text-neutral-400 md:text-base"
        >
          {t('Telefon raqam')}:
        </label>
        <PhoneInput
          id="phone"
          name="phone"
          placeholder={'99-999-99-99'}
          defaultCountry="UZ"
          className="h-10 bg-neutral-950 text-white"
          value={phone}
          onChange={setPhone}
        />
      </div>
      <div className="relative flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-xs text-neutral-400 md:text-base"
        >
          {t('Elektron pochta')}:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="auth-input pl-9"
          placeholder="example@xyz.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Image
          src="/icons/mail.svg"
          alt="mail"
          width={20}
          height={20}
          className="filter-neutral-400 absolute bottom-2.5 left-2"
        />
      </div>
      <div className="relative flex flex-col gap-1">
        <label
          htmlFor="confirmPassword"
          className="text-xs text-neutral-400 md:text-base"
        >
          {t('Parol')}:
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          id="confirmPassword"
          placeholder={t('Parol')}
          className="auth-input pl-9"
          value={password}
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
        <Image
          src="/icons/lock.svg"
          alt="password"
          width={20}
          height={20}
          className="filter-neutral-400 absolute bottom-2.5 left-2 size-5"
        />
      </div>
      <div className="relative flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-xs text-neutral-400 md:text-base"
        >
          {t('Parol tasdiqlash')}:
        </label>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder={t('Parol')}
          className="auth-input pl-9"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="absolute bottom-2 right-2 cursor-pointer select-none"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          type="button"
        >
          {showConfirmPassword ? (
            <Image src="/icons/eye.svg" alt="eye" width={24} height={24} />
          ) : (
            <Image
              src="/icons/eye-hidden.svg"
              alt="eye"
              width={24}
              height={24}
              className="size-6"
            />
          )}
        </button>
        <Image
          src="/icons/lock.svg"
          alt="password"
          width={20}
          height={20}
          className="filter-neutral-400 absolute bottom-2.5 left-2 size-5"
        />
      </div>
      <button
        type="button"
        onClick={onClick}
        className={`self-start text-sm text-neutral-300 transition-colors hover:text-neutral-100 hover:underline`}
      >
        {t('Akkauntingiz bormi ?')}
      </button>
      <div className="mb-2 flex items-center text-xs text-neutral-100 sm:text-sm">
        <input
          type="checkbox"
          className="mr-1.5 inline size-4 cursor-pointer accent-primary"
          id="agreement"
          name="agreement"
          value={agreement}
          onChange={() => setAgreement(!agreement)}
        />
        <label htmlFor="agreement" className="inline select-none">
          {t('Men')}{' '}
          <Link href="/user-agreement" className="underline">
            {t('qoidalar')}
          </Link>{' '}
          {t('bilan tanishib chiqdim va ularga roziman')}
        </label>
      </div>
      <button
        type="submit"
        disabled={isLoading || tableLoading}
        className="w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
      >
        {isLoading || tableLoading ? (
          <Image
            src="/icons/loading.svg"
            width={24}
            height={24}
            alt="loading"
            className="mx-auto size-6 animate-spin"
          />
        ) : (
          t('Akkaunt Ochish')
        )}
      </button>
    </form>
  )
}

export default SignUpForm
