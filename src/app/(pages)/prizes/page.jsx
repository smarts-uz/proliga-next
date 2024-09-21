'use client'
import Gutter from 'components/Gutter'
import { useTranslation } from 'react-i18next'
const Prizes = () => {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div className="mt-8 text-2xl">{t('Yutuqlar')}</div>
    </Gutter>
  )
}

export default Prizes
