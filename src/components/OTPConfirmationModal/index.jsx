'use client'

import Backdrop from 'components/Backdrop'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'
const OTPConfirmationModal = ({ onConfirm, onCancel }) => {
  const [code, setCode] = useState()

  useEffect(() => {
    toast.success('Sizga SMS kod jonatildi')
  }, [])

  return (
    <Backdrop>
      <dialog
        onClick={(e) => e.stopPropagation()}
        className="fade-in-fast flex flex-col items-center justify-between gap-2 rounded-md bg-neutral-950 p-8 text-neutral-100 shadow shadow-neutral-500"
      >
        <form className="flex flex-col items-start gap-6">
          <label htmlFor="" className="text-xl font-medium">
            SMS Kod Tasdiqlash
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
            Tasdiqlash
          </button>
        </form>
      </dialog>
    </Backdrop>
  )
}

export default OTPConfirmationModal
