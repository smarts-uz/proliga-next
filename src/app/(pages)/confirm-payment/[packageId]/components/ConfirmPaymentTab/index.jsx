import Link from 'next/link'
import { useTranslation } from 'react-i18next'
const ConfirmPaymentTab = ({ currentPackage }) => {
  const { t } = useTranslation()
  return (
    <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-md bg-gradient-to-l from-neutral-800 to-stone-900 p-4 md:mt-24 md:h-24 md:flex-row md:items-center md:p-6">
      <div className="space-x-1 text-base font-medium md:text-lg">
        <p className="inline-block"> {t("To'lov miqdori")}</p>
        <span className="inline-block text-xl font-bold md:text-2xl">
          {currentPackage?.price}
        </span>
        <p className="inline-block font-medium">{t("so'm")}</p>
      </div>
      <div className="flex items-center gap-1 self-end font-medium md:self-auto">
        <span className="mr-4 rounded-full bg-green-700 px-4 py-0.5 text-xs md:text-sm">
          test
        </span>
        <Link
          href="/packages"
          className="flex h-10 w-32 items-center justify-center rounded border border-neutral-300 bg-neutral-950 text-center text-neutral-300 transition-all hover:border-neutral-100 hover:bg-opacity-75 hover:text-neutral-100"
        >
          {t('Qaytish')}
        </Link>
        <Link
          href="/championships"
          className="flex h-10 w-32 items-center justify-center rounded border border-primary bg-neutral-950 text-neutral-50 transition-all hover:bg-opacity-75 hover:text-primary"
        >
          {t("To'lash")}
        </Link>
      </div>
    </div>
  )
}

export default ConfirmPaymentTab
