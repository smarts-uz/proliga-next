'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { PhoneInput } from 'components/PhoneInput'

const SendOTPModal = ({ isModalOpen, setModalOpen }) => {
  const [phone, setPhone] = useState('')

  const { t } = useTranslation()

  const handleConfirm = async (e) => {
    e.preventDefault()
  }

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
            className="h-10 w-full rounded border border-primary bg-neutral-900 transition-all hover:bg-black"
          >
            {t('Tasdiqlash')}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SendOTPModal
