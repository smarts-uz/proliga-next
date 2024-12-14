'use client'

import Image from 'next/image'
import SendOTPModal from 'components/SendOTPModal'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLogIn } from 'app/hooks/auth/useLogIn/useLogIn'
import { useGetUserTable } from 'app/hooks/auth/useGetUserTable/useGetUserTable'
import { PhoneInput } from 'components/PhoneInput'
import { useTranslation } from 'react-i18next'
import {
  setUserAuth,
  setUserTable,
  setUserTempData,
} from 'app/lib/features/auth/auth.slice'
import { useCheckUserTable } from 'app/hooks/auth/useCheckUserTable/useCheckUserTable'

const LoginForm = ({ onClick }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [canSendSMS, setCanSendSMS] = useState(true)
  const [password, setPassword] = useState('')
  const [active, setActive] = useState(false)
  const [phone, setPhone] = useState('')
  const { logIn, isLoading: authLoading, error: authError } = useLogIn()
  const {
    checkUserTable,
    isLoading: checkLoading,
    error: checkError,
  } = useCheckUserTable()

  const {
    isLoading: tableLoading,
    error: tableError,
    getUserTable,
  } = useGetUserTable()
  const { userTable, userAuth, temp } = useSelector((state) => state.auth)
  const { config } = useSelector((store) => store.systemConfig)

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

    if (password.length < 6) {
      toast.error(t("Parol 6 ta belgidan kam bo'lmasligi kerak"), {
        theme: 'dark',
      })
      return
    }

    if (!phone) {
      toast.error(t('Telefon raqam kiritilmagan'), { theme: 'dark' })
      setError(t('Telefon raqam kiritilmagan'))
      return
    }

    setActive(true)
    await checkUserTable({ phone })
  }

  useEffect(() => {
    if (active) {
      if (temp?.email && temp?.phone && password.length > 5 && !authLoading) {
        const handleLogin = async () => {
          await logIn({
            email: temp?.email,
            password,
            setActive,
          })
        }
        handleLogin()
      }
    }
  }, [active, password, temp, logIn, authLoading])

  useEffect(() => {
    if (active) {
      if (
        userAuth?.user?.id &&
        temp?.phone &&
        !authError &&
        !authLoading &&
        !checkLoading
      ) {
        const handleLogin = async () => {
          await getUserTable({ phone: temp?.phone })
        }

        handleLogin()
        setActive(false)
        setPassword('')
        setPhone('')
        toast.success(t('Tizimga muvaffaqiyatli kirdingiz'), {
          theme: 'dark',
        })
      }
    }
  }, [
    active,
    userAuth,
    authError,
    temp?.phone,
    authLoading,
    getUserTable,
    t,
    checkLoading,
  ])

  useEffect(() => {
    if (userAuth?.user?.id && userTable?.id && !active)
      router.push('/championships')
  }, [userAuth, router, userTable, active])

  useEffect(() => {
    if (error) {
      setActive(false)
      localStorage.clear()
      dispatch(setUserAuth(null))
      dispatch(setUserTable(null))
      dispatch(setUserTempData(null))
    }
  }, [error, dispatch])

  useEffect(() => {
    if (config?.length > 0) {
      setCanSendSMS(
        Boolean(
          config?.find((i) => i.key === 'can_send_sms').value.toLowerCase() ===
            'true'
        )
      )
    }
  }, [config])

  return (
    <>
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
          {canSendSMS && (
            <button
              type="button"
              className={`cursor-pointer self-start text-sm text-neutral-300 transition-colors hover:text-neutral-100 hover:underline`}
              onClick={() => setModalOpen(true)}
            >
              {t('Parolingizni unutingizmi?')}
            </button>
          )}
        </div>
        <button
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
            t('Tizimga kirish_2')
          )}
        </button>
        <SendOTPModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      </form>
    </>
  )
}

export default LoginForm
