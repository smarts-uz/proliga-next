'use client'
import { useState } from 'react'
import SettingsNavigation from './components/SettingsNavigation'
import Gutter from 'components/Gutter'
import CabinetGeneralTab from './components/Home'
import CabinetSettingsTab from './components/Settings'
import CabinetChangePasswordTab from './components/ChangePassword'
import CabinetLanguageTab from './components/Language'

function UserCabinet() {
  const [tab, setTab] = useState(SETTINGSTAB.HOME)

  return (
    <Gutter>
      <main className="mb-8 mt-24 flex h-full min-h-screen flex-col gap-4 lg:min-h-[85vh] lg:flex-row">
        <SettingsNavigation
          currentTab={tab}
          tabs={SETTINGSTAB}
          setTab={setTab}
        />
        {tab === SETTINGSTAB.HOME && <CabinetGeneralTab />}
        {tab === SETTINGSTAB.SETTINGS && <CabinetSettingsTab />}
        {tab === SETTINGSTAB.PASSWORD && <CabinetChangePasswordTab />}
        {tab === SETTINGSTAB.LANGUAGE && <CabinetLanguageTab />}
      </main>
    </Gutter>
  )
}

const SETTINGSTAB = {
  HOME: 'Home',
  SETTINGS: 'Settings',
  LANGUAGE: 'Language',
  PASSWORD: 'Change Password',
}

export default UserCabinet
