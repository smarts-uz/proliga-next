'use client'
import { useState } from 'react'
import SettingsNavigation from './components/SettingsNavigation'
import Gutter from 'components/Gutter'
// import CabinetGeneralTab from './components/Home'
import CabinetSettingsTab from './components/Settings'
import CabinetChangePasswordTab from './components/ChangePassword'
import CabinetLanguageTab from './components/Language'
import dynamic from 'next/dynamic'

const CabinetHomeTab = dynamic(() => import('./components/Home'), {
  ssr: false,
})

function UserCabinet() {
  const [tab, setTab] = useState(SETTINGSTAB.HOME)

  return (
    <Gutter>
      <main className="lg:min-h-auto 2xl:min-h-auto mb-8 mt-24 flex h-full min-h-screen flex-col gap-4 md:min-h-max lg:min-h-[48rem] lg:flex-row">
        <SettingsNavigation
          currentTab={tab}
          tabs={SETTINGSTAB}
          setTab={setTab}
        />
        {tab === SETTINGSTAB.HOME && <CabinetHomeTab setSettingsTab={() => setTab(SETTINGSTAB.SETTINGS)} />}
        {tab === SETTINGSTAB.SETTINGS && <CabinetSettingsTab />}
        {tab === SETTINGSTAB.PASSWORD && <CabinetChangePasswordTab />}
        {tab === SETTINGSTAB.LANGUAGE && <CabinetLanguageTab />}
      </main>
    </Gutter>
  )
}

const SETTINGSTAB = {
  HOME: 'Profil',
  SETTINGS: 'Settings',
  LANGUAGE: 'Language',
  PASSWORD: 'Change Password',
}

export default UserCabinet
