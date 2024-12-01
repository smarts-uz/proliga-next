import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NumericFormat } from 'react-number-format'

const RefillBalanceBox = ({ setBalanceModal }) => {
  const { t } = useTranslation()
  const { userTable } = useSelector((store) => store.auth)

  return (
    <div className="flex h-48 w-36 flex-col justify-center gap-2 rounded-xl border border-neutral-400 bg-transparent transition-all sm:w-44">
      <Image
        src="/icons/wallet.svg"
        draggable={false}
        width={36}
        height={36}
        className="filter-neutral-50 size-9 self-center sm:size-10"
        alt="wallet"
      />
      <div className="w-full cursor-default self-center text-center">
        <h4 className="text-sm font-medium sm:text-base">
          {t('Proliga hisobi')}
        </h4>
        <div className="mx-1 text-xs text-neutral-400 sm:text-sm">
          <p>{t('Hisobda')}</p>
          <NumericFormat
            value={userTable?.balance}
            className="w-min select-none border-none bg-transparent text-center font-bold text-neutral-50 outline-none"
            defaultValue={0}
            thousandSeparator
            tabIndex={-1}
            suffix={' ' + t("so'm")}
          />
        </div>
      </div>
      <button
        onClick={() => setBalanceModal(true)}
        className="w-min self-center text-nowrap rounded border px-2 py-1 text-sm transition-all hover:bg-primary hover:text-neutral-900 md:px-4"
      >
        {t('Hisobni toldirish')}
      </button>
    </div>
  )
}

export default RefillBalanceBox
