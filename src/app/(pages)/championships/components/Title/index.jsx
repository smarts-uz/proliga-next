import { useTranslation } from 'react-i18next'

const ChampionshipsTitle = () => {
  const { t } = useTranslation()

  return (
    <h2 className="mb-6 text-2xl font-bold text-neutral-50">
      <span className="mr-2 text-yellow-400">{t('Available')}</span>
      {t('Ligalar')}
    </h2>
  )
}

export default ChampionshipsTitle
