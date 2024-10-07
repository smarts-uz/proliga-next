'use client'
import CabinetTransactionsTable from './Table'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const CabinetTransactionsHistory = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.section
        initial={{ opacity: 0.75 }}
        animate={{ opacity: 1 }}
        className="h-full w-full space-y-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
      >
        <h3 className="lg:texl-lg text-base xl:text-xl">
          {t('Xarajatlar tarixi')}
        </h3>
        <div className="flex w-full flex-col">
          <CabinetTransactionsTable />
        </div>
      </motion.section>
    </>
  )
}

export default CabinetTransactionsHistory
