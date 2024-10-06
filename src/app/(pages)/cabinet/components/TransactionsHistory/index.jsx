'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const CabinetTransactionsHistory = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.section
        initial={{ opacity: 0.75 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
      >
        <h3 className='font-medium'>

        {t('Xarajatlar tarixi')}
        </h3>
      </motion.section>
    </>
  )
}

export default CabinetTransactionsHistory
