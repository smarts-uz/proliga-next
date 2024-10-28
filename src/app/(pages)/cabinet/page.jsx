'use client'

import { useState } from 'react'
import { SETTINGSTAB } from 'app/utils/settingsTab.util'
import SettingsNavigation from './components/SettingsNavigation'
import Gutter from 'components/Gutter'
import CabinetSettingsTab from './components/Settings'
import CabinetChangePasswordTab from './components/ChangePassword'
import dynamic from 'next/dynamic'
import CabinetTransactionsHistory from './components/TransactionsHistory'
import { useSelector } from 'react-redux'
import { useRefreshUserTable } from 'app/hooks/user/useRefreshUserTable/useRefreshUserTable'
const CabinetProfileTab = dynamic(() => import('./components/Profile'), {
  ssr: false,
})
import { useEffect } from 'react'

function UserCabinet() {
  const [tab, setTab] = useState(SETTINGSTAB.PROFILE)
  const { userTable, userAuth } = useSelector((store) => store.auth)
  const { refreshUserTable } = useRefreshUserTable()

  useEffect(() => {
    if (userTable && userAuth) {
      const fetch = async () => {
        await refreshUserTable()
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-gradient-to-tr from-red-800 to-blue-900 pb-12 pt-20 xl:pb-16 2xl:pb-24">
      <Gutter>
        <main className="flex h-full min-h-[50rem] flex-col gap-2 md:min-h-[44rem] lg:flex-row xl:min-h-[37rem] 2xl:min-h-[39rem]">
          <SettingsNavigation
            currentTab={tab}
            tabs={SETTINGSTAB}
            setTab={setTab}
          />
          {tab === SETTINGSTAB.PROFILE && (
            <CabinetProfileTab
              setSettingsTab={() => setTab(SETTINGSTAB.SETTINGS)}
            />
          )}
          {tab === SETTINGSTAB.SETTINGS && (
            <CabinetSettingsTab
              setHomeTab={() => setTab(SETTINGSTAB.PROFILE)}
            />
          )}
          {tab === SETTINGSTAB.PASSWORD && <CabinetChangePasswordTab />}
          {tab === SETTINGSTAB.TRANSACTIONHISTORY && (
            <CabinetTransactionsHistory />
          )}
        </main>
      </Gutter>
    </div>
  )
}

export default UserCabinet
