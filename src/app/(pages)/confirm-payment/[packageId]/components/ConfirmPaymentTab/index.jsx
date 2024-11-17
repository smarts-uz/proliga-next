import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NumericFormat } from 'react-number-format'

const ConfirmPaymentTab = ({ paymentOption }) => {
  const { currentPackage } = useSelector((store) => store.packages)
  const [testingActive, setTestingActive] = useState(false)
  const { t } = useTranslation()

  const handleConfirmPayment = async () => {
    if (!testingActive) return toast.error(t('Test ni tanlang!'))
    if (!currentPackage?.id) return toast.error(t('Joriy paket yo‘q!'))
    if (!paymentOption) return toast.error(t('To‘lov varianti topilmadi!'))

    // await purchasePackage({
    //   package_id: currentPackage?.id,
    //   system: paymentOption,
    // })
  }

  return (
    <section className="mt-auto flex flex-col items-start justify-between gap-2 rounded-md bg-gradient-to-l from-neutral-800 to-stone-900 p-4 md:h-auto md:flex-row md:items-center md:p-6">
      <div className="flex items-center justify-center gap-2 text-sm font-medium xs:text-base md:text-lg">
        <p>{t("To'lov miqdori")}</p>
        <NumericFormat
          value={currentPackage?.price}
          className="text w-min select-none border-none bg-transparent text-base font-bold outline-none xs:text-lg sm:text-xl"
          defaultValue={0}
          thousandSeparator
          tabIndex={-1}
          suffix={' ' + t("so'm")}
        />
      </div>
      <div className="flex items-center gap-1 self-end font-medium md:self-auto">
        <Link
          href="/packages"
          className="flex h-10 w-24 items-center justify-center rounded border border-neutral-300 bg-neutral-950 text-center text-sm text-neutral-300 transition-all hover:border-neutral-100 hover:bg-opacity-75 hover:text-neutral-100 lg:w-32 lg:text-base"
        >
          {t('Qaytish')}
        </Link>
        <button
          onClick={handleConfirmPayment}
          className="flex h-10 w-24 items-center justify-center rounded border border-primary bg-neutral-950 text-sm text-neutral-50 transition-all hover:bg-opacity-75 hover:text-primary lg:w-32 lg:text-base"
        >
          {t("To'lash")}
        </button>
      </div>
    </section>
  )
}

export default ConfirmPaymentTab
