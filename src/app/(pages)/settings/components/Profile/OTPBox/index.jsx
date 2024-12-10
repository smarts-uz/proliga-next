import OTPConfirmationModal from 'components/OTPConfirmationModal'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSendOTP } from 'app/hooks/auth/useSendOTP/useSendOTP'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CabinetProfileOTP = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const { t } = useTranslation()
  const { sendOTP } = useSendOTP()
  const { userTable } = useSelector((store) => store.auth)
  const [countdown, setCountdown] = useState(60)
  const [isResendEnabled, setIsResendEnabled] = useState(true)

  useEffect(() => {
    let timer
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    } else {
      setIsResendEnabled(true)
    }
    return () => clearTimeout(timer)
  }, [countdown])

  const handleClick = async () => {
    setModalOpen(true)
    if (isResendEnabled) {
      setCountdown(60)
      setIsResendEnabled(false)
      await sendOTP({ phone: userTable?.phone })
    } else {
      return toast.warning('SMS allaqachon yuborilgan', { theme: 'dark' })
    }
  }

  return (
    <>
      <div
        className={`flex h-44 w-36 flex-col justify-center gap-2 rounded-xl border border-primary bg-transparent transition-all`}
      >
        <Image
          src="/icons/call.svg"
          draggable={false}
          width={36}
          height={36}
          className="filter-neutral-50 size-8 self-center md:size-9"
          alt="sms confirm"
        />
        <div className="w-full max-w-36 cursor-default self-center text-center">
          <h4 className="text-sm font-medium">
            {t('Telefon raqam tasdiqlash')}
          </h4>
        </div>
        <button
          onClick={handleClick}
          className="w-min self-center rounded border px-2 py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900 md:px-2.5"
        >
          {t('Tasdiqlash')}
        </button>
      </div>
      <OTPConfirmationModal
        setModalOpen={setModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  )
}

export default CabinetProfileOTP
