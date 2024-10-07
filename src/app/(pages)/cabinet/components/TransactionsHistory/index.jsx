'use client'

import CabinetTransactionsBalanceTable from './BalanceTable'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { fetchPayBalance } from 'app/lib/features/payBalance/payBalance.thunk'
import { fetchPayExpense } from 'app/lib/features/payExpense/payExpense.thunk'

const CabinetTransactionsHistory = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [currentTab, setCurrentTab] = useState(TRANSACTIONTABS.BALANCE)

  const active = 'bg-black text-primary opacity-100 font-bold'
  const passive = 'bg-transparent text-neutral-400'

  useEffect(() => {
    dispatch(fetchPayBalance())
    dispatch(fetchPayExpense())
  }, [])

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
        <div className="flex max-w-96 rounded border border-neutral-700 p-0.5">
          <button
            className={`fade-in-fast delay-50 flex-1 select-none rounded py-1.5 text-sm font-medium capitalize transition-all ${currentTab === TRANSACTIONTABS.BALANCE ? active : passive}`}
            onClick={() => setCurrentTab(TRANSACTIONTABS.BALANCE)}
          >
            {t('Balans')}
          </button>
          <button
            className={`fade-in-fast flex-1 select-none rounded py-1.5 text-sm font-medium transition-all delay-100 ${currentTab === TRANSACTIONTABS.EXPENSES ? active : passive}`}
            onClick={() => setCurrentTab(TRANSACTIONTABS.EXPENSES)}
          >
            {t('Paketlar')}
          </button>
        </div>
        {currentTab === TRANSACTIONTABS.BALANCE && (
          <div className="flex w-full flex-col">
            <CabinetTransactionsBalanceTable />
          </div>
        )}
      </motion.section>
    </>
  )
}

const TRANSACTIONTABS = {
  BALANCE: 'balance',
  EXPENSES: 'expenses',
}

export default CabinetTransactionsHistory
