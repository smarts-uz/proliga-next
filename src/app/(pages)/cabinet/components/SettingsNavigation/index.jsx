'use client'

import dynamic from 'next/dynamic'
import { SETTINGSTABS } from 'app/utils/settingsTab.util'
const SettingsNavigationTab = dynamic(() => import('./Tab'), {
  ssr: false,
})
const SettingsSidebarLogOut = dynamic(() => import('./LogOut/LogOut'), {
  ssr: false,
})

const SettingsNavigation = ({ setTab, currentTab }) => {
  return (
    <section className="flex w-full flex-row rounded-xl bg-neutral-900/80 bg-opacity-90 px-4 py-2 fade-in lg:w-64 lg:flex-col lg:py-4 xl:gap-1">
      {SETTINGSTABS.map((tab) => (
        <SettingsNavigationTab
          key={tab.key}
          setTab={setTab}
          tab={tab}
          currentTab={currentTab}
        />
      ))}
      <SettingsSidebarLogOut />
    </section>
  )
}

export default SettingsNavigation
