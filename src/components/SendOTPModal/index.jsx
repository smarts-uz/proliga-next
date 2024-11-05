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
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setUserTempData } from 'app/lib/features/auth/auth.slice'

const SendOTPModal = ({ isModalOpen, setModalOpen }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const { temp } = useSelector((store) => store.auth)

  const { t } = useTranslation()
  const { sendOTP, isLoading, error, data } = useSendOTP()

  const handleConfirm = async (e) => {
    e.preventDefault()

    if (!phone) {
      toast.error(t('Email yoki Telefon kiritilmagan'), { theme: 'dark' })
      return
    }

    await sendOTP({ phone })
  }

  useEffect(() => {
    if (temp?.phone && !temp?.code) {
      router.push('/confirm-otp')
    }
  }, [temp, router])

  useEffect(() => {
    if (data?.status === 200) {
      dispatch(setUserTempData({ phone }))
    }
  }, [data, dispatch, phone])

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
            disabled={isLoading}
            className="h-10 w-full rounded border border-primary bg-neutral-900 transition-all hover:bg-black"
          >
            {isLoading ? (
              <Image
                src="/icons/loading.svg"
                width={24}
                height={24}
                alt="loading"
                className="mx-auto size-5 animate-spin"
              />
            ) : (
              t('Parolni tiklash')
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SendOTPModal
