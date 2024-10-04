'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const Notification = () => {
  const { userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="absolute right-0 top-12 flex h-full min-h-80 w-full max-w-96 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500 sm:w-80"
    >
      <h3 className="font-bold">{t('Xabarnomalar')}</h3>
      <div className="text-neutral-200">
        <p className="text-center text-sm">{t('Hozicha habarlar yoq')}</p>
      </div>
    </motion.section>
  )
}

export default Notification
