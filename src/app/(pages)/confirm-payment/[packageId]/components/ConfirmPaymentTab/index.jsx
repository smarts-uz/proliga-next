import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NumericFormat } from 'react-number-format'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useRefreshUserTable } from 'app/hooks/user/useRefreshUserTable/useRefreshUserTable'
import { useBuyPackageWithWallet } from 'app/hooks/payment/useBuyPackageWithWallet/useBuyPackageWithWallet'
import { useBuyPackageWithPayme } from 'app/hooks/payment/useBuyPackageWithPayme/useBuyPackageWithPayme'
import { useBuyPackageWithClick } from 'app/hooks/payment/useBuyPackageWithClick/useBuyPackageWithClick'

const ConfirmPaymentTab = ({ paymentOption }) => {
  const { currentPackage } = useSelector((store) => store.packages)
  const { userTable } = useSelector((store) => store.auth)
  const { currentTeam, lastVisitedTeam } = useSelector(
    (store) => store.currentTeam
  )

  const { t } = useTranslation()
  const { buyPackageWithWallet, isLoading } = useBuyPackageWithWallet()
  const { buyPackageWithPayme, isLoading: isPaymeLoading } =
    useBuyPackageWithPayme()
  const { buyPackageWithClick, isLoading: isClickLoading } =
    useBuyPackageWithClick()
  const { refreshUserTable } = useRefreshUserTable()

  const handleConfirmPayment = async () => {
    if (!currentPackage?.id)
      return toast.error(t('Joriy paket yo‘q!'), { theme: 'dark' })
    if (!paymentOption)
      return toast.error(t('To‘lov varianti topilmadi!'), { theme: 'dark' })

    if (userTable.balance < currentPackage?.price) {
      toast.error(t('Mablag‘ yetarli emas!'), { theme: 'dark' })
      return
    }
    if (paymentOption === PAYMENTOPTIONS.WALLET) {
      await buyPackageWithWallet({
        package_id: currentPackage?.id,
        team_id: currentTeam?.id,
      })
    }
    if (paymentOption === PAYMENTOPTIONS.PAYME) {
      buyPackageWithPayme({
        package_id: currentPackage?.id,
        team_id: currentTeam?.id,
      })
    }
    if (paymentOption === PAYMENTOPTIONS.CLICKUP) {
      buyPackageWithClick({})
    }
    await refreshUserTable()
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
          readOnly
          suffix={' ' + t("so'm")}
        />
      </div>
      <div className="flex items-center gap-1 self-end font-medium md:self-auto">
        <Link
          href={'/play/' + lastVisitedTeam}
          className="flex h-10 w-24 items-center justify-center rounded border border-neutral-300 bg-neutral-950 text-center text-sm text-neutral-300 transition-all hover:border-neutral-100 hover:bg-opacity-75 hover:text-neutral-100 lg:w-32 lg:text-base"
        >
          {t('Qaytish')}
        </Link>
        <button
          onClick={handleConfirmPayment}
          disabled={isLoading || isClickLoading || isPaymeLoading}
          className="flex h-10 w-24 items-center justify-center rounded border border-primary bg-neutral-950 text-sm text-neutral-50 transition-all hover:bg-opacity-75 hover:text-primary lg:w-32 lg:text-base"
        >
          {isLoading || isClickLoading || isPaymeLoading ? (
            <Image
              src="/icons/loading.svg"
              width={24}
              height={24}
              alt="loading"
              className="filter-white mx-auto size-5 animate-spin"
            />
          ) : (
            t("To'lash")
          )}
        </button>
      </div>
    </section>
  )
}

export default ConfirmPaymentTab
