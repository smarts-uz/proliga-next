'use client'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { SETTINGSTAB } from 'app/utils/settingsTab.util'
import { useRefreshUserTable } from 'app/hooks/user/useRefreshUserTable/useRefreshUserTable'
import TransactionsHistory from './components/TransactionsHistory'
import ChangePassword from './components/ChangePassword'
import Navigation from './components/SettingsNavigation'
import SettingsTab from './components/Settings'
import Gutter from 'components/Gutter'
import dynamic from 'next/dynamic'
const Profile = dynamic(() => import('./components/Profile'), {
  ssr: false,
})

function Settings() {
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
    <Gutter>
      <main className="flex h-full flex-col gap-2 md:min-h-[44rem] lg:flex-row xl:min-h-[37rem] 2xl:min-h-[39rem]">
        <Navigation currentTab={tab} tabs={SETTINGSTAB} setTab={setTab} />
        {tab === SETTINGSTAB.PROFILE && (
          <Profile setSettingsTab={() => setTab(SETTINGSTAB.SETTINGS)} />
        )}
        {tab === SETTINGSTAB.SETTINGS && (
          <SettingsTab setHomeTab={() => setTab(SETTINGSTAB.PROFILE)} />
        )}
        {tab === SETTINGSTAB.PASSWORD && <ChangePassword />}
        {tab === SETTINGSTAB.TRANSACTIONHISTORY && <TransactionsHistory />}
      </main>
    </Gutter>
  )
}

export default Settings
