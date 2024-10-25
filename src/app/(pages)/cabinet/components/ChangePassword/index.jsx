'use client'
import { useTranslation } from 'react-i18next'
import { useUpdatePassword } from 'app/hooks/auth/useUpdatePassword/useUpdatePassword'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useConfirmUserAuth } from 'app/hooks/auth/useConfirmUserAuth/useConfirmUserAuth'
import { toast } from 'react-toastify'
import Image from 'next/image'

const CabinetChangePasswordTab = () => {
  const { t } = useTranslation()
  const { updatePassword, isLoading, error } = useUpdatePassword()
  const {
    confirmUserAuth,
    isLoading: confirmLoading,
    error: confirmError,
  } = useConfirmUserAuth()

  const [isVerified, setIsVerified] = useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsActive(true)
    if (password !== confirmPassword) {
      toast.warning(t('Parollar mos kelmadi'), { theme: 'dark' })
      setIsActive(false)
      return
    }
    if (
      oldPassword.length < 6 ||
      password.length < 6 ||
      confirmPassword.length < 6
    ) {
      toast.warning(t("Parolar 6 ta belgidan kam bo'lmasligi kerak"), {
        theme: 'dark',
      })
      setIsActive(false)
      return
    }
    if (oldPassword === password) {
      toast.warning(
        t('Yangi parol eski parol bilan birhil bolishi mumkin emas'),
        {
          theme: 'dark',
        }
      )
      setIsActive(false)
      return
    }

    await confirmUserAuth({ password: oldPassword, setIsVerified })
  }

  useEffect(() => {
    if (isVerified && password && isActive) {
      const fetch = async () =>
        await updatePassword(password, isVerified, setIsVerified)
      fetch()
      setIsActive(false)
      setOldPassword('')
      setPassword('')
      setConfirmPassword('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerified, password, isActive, setIsActive])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full w-full flex-1 flex-col gap-2 rounded-xl bg-neutral-900/80 p-4 lg:h-auto xl:p-6"
    >
      <h3 className="lg:texl-lg text-base xl:text-xl">
        {t('Parol Yangilash')}
      </h3>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-neutral-300"
          htmlFor="oldPassword"
        >
          {t('Eski parol')}
        </label>
        <Input
          id="oldPassword"
          name="oldPassword"
          className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-500 sm:max-w-96 md:text-base"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-neutral-300"
          htmlFor="newPassword"
        >
          {t('Yangi parol')}
        </label>
        <Input
          id="newPassword"
          name="newPassword"
          className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-500 sm:max-w-96 md:text-base"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-neutral-300"
          htmlFor="confirmPassword"
        >
          {t('Yangi parolni qayta kiriting')}
        </label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          className="h-10 w-full rounded border border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-500 sm:max-w-96 md:text-base"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className="mt-2 w-full rounded border border-black bg-primary bg-opacity-75 py-2 text-sm font-semibold text-neutral-900 transition-all hover:bg-opacity-100 sm:max-w-48"
        type="submit"
        disabled={isLoading || confirmLoading}
      >
        {isLoading || confirmLoading ? (
          <Image
            src="/icons/loading.svg"
            width={24}
            height={24}
            alt="loading"
            className="filter-black mx-auto size-5 animate-spin"
          />
        ) : (
          t('Saqlash')
        )}
      </button>
    </form>
  )
}

export default CabinetChangePasswordTab
