import { useTranslation } from 'react-i18next'

const TransferTitle = () => {
  const { t } = useTranslation()
  return (
    <h2 className="text-lg font-medium md:text-xl">
      {t('Transfer paketlari')}
    </h2>
  )
}

export default TransferTitle
