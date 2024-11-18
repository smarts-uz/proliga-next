import Image from 'next/image'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useTranslation } from 'react-i18next'

const PaymePaymentOption = ({
  setPaymentOption,
  paymentOption,
  active,
  passive,
}) => {
  const { t } = useTranslation()
  return (
    <div
      onClick={() => setPaymentOption(PAYMENTOPTIONS.PAYME)}
      className={`flex size-36 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 transition-all sm:size-44 lg:size-56 xl:size-60 ${paymentOption === PAYMENTOPTIONS.PAYME ? active : passive}`}
    >
      <Image
        src="/icons/payme.svg"
        width={36}
        draggable={false}
        height={36}
        className="h-auto w-20 select-none self-center lg:w-28"
        alt="payme"
      />
      <div className="w-full self-center text-center">
        <p className="mx-2 select-none text-center text-xs text-neutral-400 lg:text-sm">
          {t('Payme orqali tolov qilish')}
        </p>
      </div>
    </div>
  )
}

export default PaymePaymentOption
