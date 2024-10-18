'use client'

import CabinetTransactionsBalanceTable from './BalanceTable'
import CabinetTransactionsExpensesTable from './ExpensesTable'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { fetchPayBalance } from 'app/lib/features/payBalance/payBalance.thunk'
import { fetchPayExpenses } from 'app/lib/features/payExpense/payExpense.thunk'

const CabinetTransactionsHistory = () => {
  const { userTable } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [currentTab, setCurrentTab] = useState(TRANSACTIONTABS.BALANCE)
  const { balance } = useSelector((state) => state.payBalance)
  const { expenses } = useSelector((store) => store.payExpense)

  const active = 'bg-black text-primary opacity-100 font-bold'
  const passive = 'bg-transparent text-neutral-400'

  useEffect(() => {
    if (userTable?.id) {
      dispatch(fetchPayBalance({ user_id: userTable?.id }))
      dispatch(fetchPayExpenses({ user_id: userTable?.id }))
    }
  }, [dispatch, userTable])

  return (
    <>
      <section className="flex h-auto w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900/80 p-4 xl:p-6">
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
          <div className="flex h-full w-full flex-col">
            {balance?.length > 0 && <CabinetTransactionsBalanceTable />}
            {balance?.length === 0 && (
              <p className="fade-in-fast text-center text-neutral-300">
                {t('Balans haqida malumot topilmadi!')}
              </p>
            )}
          </div>
        )}
        {currentTab === TRANSACTIONTABS.EXPENSES && (
          <div className="flex h-full w-full flex-col justify-between">
            {expenses?.length > 0 && <CabinetTransactionsExpensesTable />}
            {expenses?.length === 0 && (
              <p className="fade-in-fast text-center text-neutral-300">
                {t('Paketlar haqida malumoti topilmadi!')}
              </p>
            )}
          </div>
        )}
      </section>
    </>
  )
}

const TRANSACTIONTABS = {
  BALANCE: 'balance',
  EXPENSES: 'expenses',
}

export default CabinetTransactionsHistory
