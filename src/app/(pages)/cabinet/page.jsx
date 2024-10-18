'use client'

import { useState } from 'react'
import SettingsNavigation from './components/SettingsNavigation'
import Gutter from 'components/Gutter'
import CabinetSettingsTab from './components/Settings'
import CabinetChangePasswordTab from './components/ChangePassword'
import CabinetLanguageTab from './components/Language'
import dynamic from 'next/dynamic'
import { SETTINGSTAB } from 'app/utils/settingsTab.util'
import CabinetTransactionsHistory from './components/TransactionsHistory'

const CabinetProfileTab = dynamic(() => import('./components/Profile'), {
  ssr: false,
})

function UserCabinet() {
  const [tab, setTab] = useState(SETTINGSTAB.PROFILE)

  return (
    <div className="bg-gradient-to-tr from-red-800 to-blue-900 pb-8 pt-20">
      <Gutter>
        <main className="flex h-full min-h-screen flex-col gap-2 md:min-h-[95vh] lg:flex-row xl:min-h-[36.5rem]">
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
