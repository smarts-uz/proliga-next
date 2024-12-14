'use client'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { SETTINGSTAB } from 'app/utils/settingsTab.util'
import { useRefreshUserTable } from 'app/hooks/user/useRefreshUserTable/useRefreshUserTable'
import TransactionsHistory from './components/TransactionsHistory'
import ChangePassword from './components/ChangePassword'
import SettingsTab from './components/Settings'
import Gutter from 'components/Gutter'
import dynamic from 'next/dynamic'
import SettingsSkeleton, {
  ProfileSkeleton,
  NavigationSkeleton,
} from './components/SettingsSkeleton'
const Profile = dynamic(() => import('./components/Profile'), {
  ssr: false,
  loading: () => <ProfileSkeleton />,
})
const Navigation = dynamic(() => import('./components/SettingsNavigation'), {
  ssr: false,
  loading: () => <NavigationSkeleton />,
})

function Settings() {
  const [tab, setTab] = useState(SETTINGSTAB.PROFILE)
  const { userTable, userAuth, isLoading } = useSelector((store) => store.auth)
  const { refreshUserTable, isLoading: isRefreshLoading } =
    useRefreshUserTable()

  useEffect(() => {
    if (userTable && userAuth) {
      const fetch = async () => {
        await refreshUserTable()
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading || isRefreshLoading) {
    return <SettingsSkeleton />
  }

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
