'use client'

import { useTranslation } from 'react-i18next'

const PrizesTitle = () => {
  const { t } = useTranslation()

  return (
    <h1 className="mb-8 text-2xl font-semibold md:text-3xl">{t('Yutuqlar')}</h1>
  )
}

export default PrizesTitle
