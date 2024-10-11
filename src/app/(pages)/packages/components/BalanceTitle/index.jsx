import { useTranslation } from 'react-i18next'

const BalanceTitle = () => {
  const { t } = useTranslation()
  return (
    <h2 className="text-lg font-medium md:text-xl">{t('Balans paketlari')}</h2>
  )
}

export default BalanceTitle
