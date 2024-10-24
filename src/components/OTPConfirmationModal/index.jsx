'use client'

import Backdrop from 'components/Backdrop'
import { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { useTranslation } from 'react-i18next'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'

const OTPConfirmationModal = ({ isModalOpen, setModalOpen }) => {
  const [code, setCode] = useState()
  const { t } = useTranslation()
  // useEffect(() => {
  //   toast.success(t("Sizga SMS kod jonatildi"), { theme: 'dark' })
  // }, [])

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="flex max-w-[45rem] flex-col items-center justify-between gap-2 rounded-md bg-neutral-950 p-8 text-neutral-100 shadow shadow-neutral-500">
        <form className="flex flex-col items-start gap-6">
          <DialogTitle className="text-xl font-medium">
            {t('SMS Kod Tasdiqlash')}
          </DialogTitle>
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
        <DialogDescription className="hidden">
          SMS confirmation
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default OTPConfirmationModal
