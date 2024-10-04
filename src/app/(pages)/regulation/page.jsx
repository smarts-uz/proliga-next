'use client'

import Gutter from 'components/Gutter'
import { useTranslation } from 'react-i18next'
import './regulation.styles.css'

const Regulation = () => {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div
        className="mb-8 mt-24 flex min-h-screen w-full flex-col overflow-x-auto rounded-md border border-solid bg-neutral-900 p-6 text-sm xl:text-base"
        dangerouslySetInnerHTML={{ __html: t('rules') }}
      />
    </Gutter>
  )
}

export default Regulation
