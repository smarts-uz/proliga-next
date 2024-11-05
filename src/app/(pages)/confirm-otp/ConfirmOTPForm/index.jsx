'use client'
import { useState, useEffect } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import ResendOTPBox from '../ResendOTPBox'
import { useTranslation } from 'react-i18next'
import { useConfirmOTP } from 'app/hooks/auth/useConfirmOTP/useConfirmOTP'
import { useDispatch, useSelector } from 'react-redux'
import { setUserTempData } from 'app/lib/features/auth/auth.slice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ConfirmOTPForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation()
  const [code, setCode] = useState('')
  const { confirmOTP, isLoading, error, data } = useConfirmOTP()
  const { temp } = useSelector((store) => store.auth)

  const handleConfirm = async (e) => {
    e.preventDefault()

    if (code.length !== 6) {
      toast.warning('Kod 6 ta harf bolishi shart!')
      return
    }

    await confirmOTP({ code, guid: temp?.guid, phone: temp?.phone })
  }

  useEffect(() => {
    if (data?.status === 200 && code) {
      dispatch(setUserTempData({ phone: temp.phone, code }))
      setCode('')
      router.push('/reset-password')
    }
  }, [data, dispatch, code, temp?.phone, router])

  return (
    <form
      onSubmit={handleConfirm}
      className="flex w-full flex-col gap-8 rounded-xl bg-neutral-950 px-5 py-8 shadow shadow-neutral-500 md:px-6"
    >
      <h1 className="text-lg font-bold md:text-xl">
        {t('SMS Kod Tasdiqlash')}
      </h1>
      <div className="flex w-full flex-col gap-4">
        <InputOTP
          maxLength={6}
          value={code}
          onChange={(value) => setCode(value)}
        >
          <InputOTPGroup className="w-full justify-between">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <ResendOTPBox />
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
          t('Tasdiqlash')
        )}
      </button>
    </form>
  )
}

export default ConfirmOTPForm
