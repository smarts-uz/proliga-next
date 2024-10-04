import { useTranslation } from 'react-i18next'

const ChampionshipsTitle = () => {
  const { t } = useTranslation()
  return <h2 className="mb-4 text-2xl font-bold">{t('Ligalar')}</h2>
}

export default ChampionshipsTitle
