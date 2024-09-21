'use client'

import Gutter from '../../../components/Gutter'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div
        className="mb-8 mt-24 min-h-screen table-auto border-collapse rounded-md border border-solid bg-neutral-900 p-6"
        dangerouslySetInnerHTML={{ __html: t('about_us') }}
      />
    </Gutter>
  )
}

export default Contact
