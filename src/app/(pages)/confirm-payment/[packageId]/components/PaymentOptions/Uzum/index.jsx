import Image from 'next/image'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useTranslation } from 'react-i18next'

const UzumPaymentOption = ({
  setPaymentOption,
  paymentOption,
  active,
  passive,
}) => {
  const { t } = useTranslation()
  return (
    <div
      onClick={() => setPaymentOption(PAYMENTOPTIONS.UZUM)}
      className={`flex size-36 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 transition-all sm:size-44 lg:size-56 ${paymentOption === PAYMENTOPTIONS.UZUM ? active : passive}`}
    >
      <Image
        src="/icons/uzum.svg"
        width={36}
        draggable={false}
        height={36}
        className="h-auto w-20 select-none self-center lg:w-28"
        alt="payme"
      />
      <div className="w-full self-center text-center">
        <h4 className="hidden select-none font-medium sm:block sm:text-base lg:text-lg">
          Uzum
        </h4>
        <p className="mx-2 select-none text-center text-xs text-neutral-400 lg:text-sm">
          {t('Uzum orqali tolov qilish')}
        </p>
      </div>
    </div>
  )
}

export default UzumPaymentOption
