'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { PhoneInput } from 'components/PhoneInput'
import { useSendOTP } from 'app/hooks/auth/useSendOTP/useSendOTP'
import { useGetUserId } from 'app/hooks/auth/useGetUserId/useGetUserId'
import Image from 'next/image'

const SendOTPModal = ({ isModalOpen, setModalOpen }) => {
  const [phone, setPhone] = useState('')
  const [guid, setGuid] = useState('')
  const [active, setActive] = useState(false)
  const {
    getUserId,
    isLoading: tableLoading,
    error: tableError,
  } = useGetUserId()
  const { sendOTP, isLoading, error } = useSendOTP()
  const { t } = useTranslation()

  const handleConfirm = async (e) => {
    e.preventDefault()

    if (!phone) {
      toast.error(t('Email yoki Telefon kiritilmagan'), { theme: 'dark' })
      return
    }

    setActive(true)
    await getUserId({ phone, setGuid })
  }

  useEffect(() => {
    if (active && guid) {
      const fetch = async () => await sendOTP({ guid, phone })
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, guid, phone])

  useEffect(() => {
    if (error || tableError) {
      setActive(false)
    }
  }, [error, tableError])

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="max-w-[92%] rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-96 sm:max-w-[28rem] md:p-6">
        <form
          onSubmit={handleConfirm}
          className="flex w-full flex-col items-start gap-8"
        >
          <DialogTitle>{t('Parolingizni unutingizmi?')}</DialogTitle>
          <DialogDescription className="hidden">
            Send OTP Confirmation SMS
          </DialogDescription>
          <div className="relative flex w-full flex-col gap-1">
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
          <button
            type="submit"
            disabled={isLoading || tableLoading}
            className="h-10 w-full rounded border border-primary bg-neutral-900 transition-all hover:bg-black"
          >
            {isLoading || tableLoading ? (
              <Image
                src="/icons/loading.svg"
                width={24}
                height={24}
                alt="loading"
                className="mx-auto size-5 animate-spin"
              />
            ) : (
              t('Tizimga kirish_2')
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SendOTPModal
