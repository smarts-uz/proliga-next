'use client'
import './contact.styles.css'

import Gutter from '../../../components/Gutter'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div
        className="mb-8 mt-24 flex min-h-screen w-full flex-col overflow-x-auto rounded-md border border-solid bg-neutral-900 p-6 text-sm xl:text-base"
        dangerouslySetInnerHTML={{ __html: t('about_us') }}
      />
    </Gutter>
  )
}

export default Contact
