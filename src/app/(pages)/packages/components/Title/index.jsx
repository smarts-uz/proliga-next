import { useTranslation } from 'react-i18next'

const PackagesTitle = () => {
  const { t } = useTranslation()
  return <h1 className="text-3xl font-bold">{t('Paketlar')}</h1>
}

export default PackagesTitle
