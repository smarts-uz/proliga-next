import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

const ConfirmPaymentTab = ({ currentPackage }) => {
  const [testingActive, setTestingActive] = useState(false)
  const { t } = useTranslation()

  const handleConfirmPayment = () => {
    console.log('clicked')
  }

  return (
    <section className="mt-auto flex flex-col items-start justify-between gap-2 rounded-md bg-gradient-to-l from-neutral-800 to-stone-900 p-4 md:h-auto md:flex-row md:items-center md:p-6">
      <div className="space-x-1 text-sm font-medium xs:text-base md:text-lg">
        <p className="inline-block"> {t("To'lov miqdori")}</p>
        <span className="inline-block text-base font-bold xs:text-lg sm:text-xl lg:text-2xl">
          {currentPackage?.price}
        </span>
        <p className="inline-block font-medium">{t("so'm")}</p>
      </div>
      <div className="flex items-center gap-2 text-xs md:text-sm">
        <label htmlFor="testing" className="select-none">
          Test
        </label>
        <Switch
          id="testing"
          checked={testingActive}
          onCheckedChange={setTestingActive}
          className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-green-900"
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
