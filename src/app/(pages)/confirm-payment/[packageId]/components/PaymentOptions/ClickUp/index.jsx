import Image from 'next/image'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useTranslation } from 'react-i18next'

const ClickUpPaymentOption = ({
  setPaymentOption,
  paymentOption,
  active,
  passive,
}) => {
  const { t } = useTranslation()
  return (
    <div
      onClick={() => setPaymentOption(PAYMENTOPTIONS.CLICKUP)}
      className={`flex size-36 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 transition-all sm:size-44 lg:size-56 ${paymentOption === PAYMENTOPTIONS.CLICKUP ? active : passive}`}
    >
      <Image
        src="/icons/click-up.svg"
        width={36}
        draggable={false}
        height={36}
        className="h-auto w-20 self-center lg:w-28"
        alt="click up"
      />
      <div className="w-full self-center text-center">
        <h4 className="hidden font-medium sm:block sm:text-base lg:text-lg">
          Click Up
        </h4>
        <p className="mx-2 text-xs text-neutral-400 lg:text-sm">
          {t('Click up orqali tolov qilish')}
        </p>
      </div>
    </div>
  )
}

export default ClickUpPaymentOption
