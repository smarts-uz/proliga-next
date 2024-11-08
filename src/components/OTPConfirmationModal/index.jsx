'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { useConfirmOTP } from 'app/hooks/auth/useConfirmOTP/useConfirmOTP'
import { useSelector } from 'react-redux'
import ResendOTP from './ResendOTP'
import { useRefreshUserTable } from 'app/hooks/user/useRefreshUserTable/useRefreshUserTable'

const OTPConfirmationModal = ({ isModalOpen, setModalOpen }) => {
  const [code, setCode] = useState()
  const { t } = useTranslation()
  const { confirmOTP, isLoading, error, data } = useConfirmOTP()
  const { userTable } = useSelector((store) => store.auth)
  const { refreshUserTable } = useRefreshUserTable()

  const handleConfirm = async (e) => {
    e.preventDefault()

    if (code.length !== 6) {
      toast.warning('Kod 6 ta harf bolishi shart!')
      return
    }

    await confirmOTP({ code, guid: userTable?.guid, phone: userTable?.phone })

    if (!isLoading && !error && data !== 'code expire') {
      setCode('')
      setModalOpen(false)
      await refreshUserTable()
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="flex w-min min-w-80 flex-col items-center justify-between gap-2 rounded-md bg-neutral-950 p-6 text-neutral-100 shadow shadow-neutral-500">
        <form
          onSubmit={handleConfirm}
          className="flex flex-col items-start gap-6"
        >
          <DialogTitle className="mb-0">{t('SMS Kod Tasdiqlash')}</DialogTitle>
          <div className="flex flex-col gap-4">
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
            <ResendOTP />
          </div>
          <button
            type="submit"
            className="w-full rounded border border-primary bg-neutral-900 py-1.5 transition-all hover:bg-black"
          >
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
