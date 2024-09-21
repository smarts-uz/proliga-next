'use client'
import Gutter from 'components/Gutter'
import { useTranslation } from 'react-i18next'
const Regulation = () => {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div className="mt-8 text-3xl">{t('Qoidalar')}</div>
    </Gutter>
  )
}

export default Regulation
