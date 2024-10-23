import OTPConfirmationModal from 'components/OTPConfirmationModal'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSendOTP } from 'app/hooks/auth/useSendOTP/useSendOTP'

const CabinetProfileOTP = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const { t } = useTranslation()
  const { sendOTP } = useSendOTP()

  const handleClick = () => {
    setModalOpen(true)
    sendOTP()
  }

  return (
    <>
      <div
        className={`flex size-36 cursor-pointer flex-col justify-center gap-2 rounded-xl border border-primary bg-transparent transition-all sm:size-44`}
      >
        <Image
          src="/icons/call.svg"
          draggable={false}
          width={36}
          height={36}
          className="filter-neutral-50 size-9 self-center sm:size-10"
          alt="sms confirm"
        />
        <div className="w-full max-w-36 self-center text-center">
          <h4 className="text-sm font-medium sm:text-base">
            {t('Telefon raqam tasdiqlash')}
          </h4>
        </div>
        <button
          onClick={handleClick}
          className="w-min self-center rounded border px-2 py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900 md:px-4"
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
