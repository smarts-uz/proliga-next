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
      className={`flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 p-6 transition-all ${paymentOption === PAYMENTOPTIONS.PAYME ? active : passive}`}
    >
      <Image
        src="/icons/payme.svg"
        width={36}
        draggable={false}
        height={36}
        className="h-16 w-28 self-center"
        alt="payme"
      />
      <div className="w-full self-center text-center">
        <h4 className="text-lg font-medium">Payme</h4>
        <p className="text-sm text-neutral-400">{t("Payme orqali tolov qilish")}</p>
      </div>
    </div>
  )
}

export default PaymePaymentOption
