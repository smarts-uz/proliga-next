import { PACKAGES } from 'app/utils/packages.util'
import { useTranslation } from 'react-i18next'

const CurrentPackage = ({ currentPackage }) => {
  const { t } = useTranslation()
  const getPackageText = (currentPackage) => {
    if (currentPackage?.type === PACKAGES.team_balance) return t('Balansni')
    if (currentPackage?.type === PACKAGES.transfer_count)
      return t('Transferla sonini')
    if (currentPackage?.type === PACKAGES.single_club_count)
      return t("Maksimum klub oyi'nchilarini")
  }
  return (
    <div className="flex flex-row items-center gap-6 rounded-md bg-neutral-800 p-4 md:h-24 md:p-6">
      <span className="hidden size-12 items-center justify-center rounded-full bg-black font-bold text-neutral-300 sm:flex">
        1
      </span>
      <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row sm:gap-0">
        <div className="space-x-2 text-lg md:text-xl">
          {getPackageText(currentPackage)}
          <span className="text-lg font-bold xs:text-xl md:text-2xl">
            {' ' + currentPackage?.amount}
          </span>{' '}
          {t('ga oshirish')}
        </div>
        <div className="text-lg font-medium text-neutral-100 xs:text-xl md:text-2xl">
          <span className="text-xl font-bold xs:text-2xl md:text-3xl">
            {currentPackage?.price + ' '}
          </span>
          {t("so'm")}
        </div>
      </div>
    </div>
  )
}

export default CurrentPackage
