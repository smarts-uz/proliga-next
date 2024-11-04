'use client'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useState } from 'react'
import { useResetUserPassword } from 'app/hooks/auth/useResetUserPassword/useResetUserPassword'

const ResetPasswordForm = () => {
  const { t } = useTranslation()
  const [isVerified, setIsVerified] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [active, setActive] = useState(false)
  const { resetUserPassword, isLoading, error } = useResetUserPassword()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return
    }

    await resetUserPassword(password)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-8 rounded-xl bg-neutral-950 px-5 py-8 shadow shadow-neutral-500 md:px-6"
    >
      <h1 className="text-lg font-bold md:text-xl">{t('Parol Yangilash')}</h1>
      <section className="w-full space-y-4">
        <div className="relative">
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="newPassword"
          >
            {t('Yangi parol')}
          </label>
          <Input
            id="newPassword"
            name="newPassword"
            className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 py-2 pl-2 pr-10 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
            type={showPassword ? 'text' : 'password'}
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
        <div className="relative">
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="confirmPassword"
          >
            {t('Yangi parolni qayta kiriting')}
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 py-2 pl-2 pr-10 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute bottom-2 right-2 cursor-pointer select-none"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
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
      </section>
      <button
        type="submit"
        disabled={false}
        className="h-10 w-full rounded border border-primary bg-neutral-900 transition-all hover:bg-black"
      >
        {false ? (
          <Image
            src="/icons/loading.svg"
            width={24}
            height={24}
            alt="loading"
            className="mx-auto size-5 animate-spin"
          />
        ) : (
          t('Tasdiqlash')
        )}
      </button>
    </form>
  )
}

export default ResetPasswordForm
