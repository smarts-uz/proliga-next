import Image from 'next/image'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NumericFormat } from 'react-number-format'

const WalletPaymentOption = ({
  setPaymentOption,
  paymentOption,
  active,
  passive,
  toggleModal,
}) => {
  const { t } = useTranslation()
  const { userTable } = useSelector((store) => store.auth)

  return (
    <div
      onClick={() => setPaymentOption(PAYMENTOPTIONS.WALLET)}
      className={`flex size-36 cursor-pointer flex-col justify-center gap-2 rounded-xl border bg-stone-950 transition-all sm:size-44 lg:size-56 xl:size-60 ${paymentOption === PAYMENTOPTIONS.WALLET ? active : passive}`}
    >
      <Image
        src="/icons/wallet.svg"
        draggable={false}
        width={36}
        height={36}
        className="filter-neutral-50 size-9 select-none self-center sm:size-12 lg:size-14"
        alt="wallet"
      />
      <div className="w-full self-center text-center">
        <h4 className="select-none text-sm font-medium sm:text-base lg:text-lg">
          {t('Proliga hisobi')}
        </h4>
        <NumericFormat
          value={userTable?.balance}
          className="mx-1 w-full max-w-32 select-none border-none bg-transparent text-center text-sm font-bold text-neutral-50 outline-none md:max-w-40 xl:text-base"
          defaultValue={0}
          thousandSeparator
          tabIndex={-1}
          readOnly
          suffix={' ' + t("so'm")}
        />
      </div>
      <button
        onClick={toggleModal}
        className="mx-auto w-min select-none self-center text-nowrap rounded border px-3 py-1 text-xs transition-all hover:bg-primary hover:text-neutral-900 sm:text-sm lg:px-4 lg:text-base"
      >
        {t('Hisobni toldirish')}
      </button>
    </div>
  )
}

export default WalletPaymentOption
