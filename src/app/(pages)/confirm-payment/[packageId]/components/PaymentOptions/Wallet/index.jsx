import Image from 'next/image'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useTranslation } from 'react-i18next'
const WalletPaymentOption = ({
  setPaymentOption,
  paymentOption,
  active,
  passive,
  toggleModal,
}) => {
  const { t } = useTranslation()
  return (
    <div
      onClick={() => setPaymentOption(PAYMENTOPTIONS.WALLET)}
      className={`flex size-64 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 p-6 transition-all ${paymentOption === PAYMENTOPTIONS.WALLET ? active : passive}`}
    >
      <Image
        src="/icons/wallet.svg"
        draggable={false}
        width={36}
        height={36}
        className="filter-neutral-50 size-16 self-center"
        alt="wallet"
      />
      <div className="w-full self-center text-center">
        <h4 className="text-lg font-medium">{t("Proliga hisobi")}</h4>
        <p className="text-sm text-neutral-400">
          {t("Hisobda")}: <span className="font-bold text-neutral-50">4000 </span>
          {t("so'm")}
        </p>
      </div>
      <button
        onClick={toggleModal}
        className="rounded border py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900"
      >
        {t("Hisobni toldirish")}
      </button>
    </div>
  )
}

export default WalletPaymentOption
