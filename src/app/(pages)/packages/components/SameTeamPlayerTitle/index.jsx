import { useTranslation } from 'react-i18next'

const SameTeamPlayerTitle = () => {
  const { t } = useTranslation()
  return (
    <h2 className="text-lg font-semibold">
      {t('Bitta jamoadan oyinchisi paketlari')}
    </h2>
  )
}

export default SameTeamPlayerTitle
