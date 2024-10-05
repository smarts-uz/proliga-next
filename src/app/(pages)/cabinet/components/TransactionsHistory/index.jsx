'use client'

import { motion } from 'framer-motion'

const CabinetTransactionsHistory = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0.75 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
      >
        Harajatlar
      </motion.section>
    </>
  )
}

export default CabinetTransactionsHistory
