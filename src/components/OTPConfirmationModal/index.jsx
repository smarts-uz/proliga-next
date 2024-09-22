'use client'

import Backdrop from 'components/Backdrop'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const OTPConfirmationModal = ({ onConfirm, onCancel }) => {
  const [code, setCode] = useState()
  const { t } = useTranslation()
  useEffect(() => {
    toast.success(t("Sizga SMS kod jonatildi"))
  }, [])

  return (
    <Backdrop>
      <motion.dialog
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-between gap-2 rounded-md bg-neutral-950 p-8 text-neutral-100 shadow shadow-neutral-500"
      >
        <form className="flex flex-col items-start gap-6">
          <label htmlFor="" className="text-xl font-medium">
            {t('SMS Kod Tasdiqlash')}
          </label>
          <InputOTP
            maxLength={6}
            value={code}
            onChange={(value) => setCode(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <button className="w-full rounded border border-primary bg-neutral-900 py-1.5 transition-all hover:bg-black">
            {t('Tasdiqlash')}
          </button>
        </form>
      </motion.dialog>
    </Backdrop>
  )
}

export default OTPConfirmationModal
