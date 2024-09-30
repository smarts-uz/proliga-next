import Image from 'next/image'
import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const SettingsNavigation = ({ tabs, setTab, currentTab }) => {
  const { t } = useTranslation()
  const { logOut } = useLogOut()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-row justify-between gap-1 rounded-xl bg-neutral-900 bg-opacity-90 py-2 lg:w-80 lg:flex-col xl:py-4"
    >
      {Object.keys(tabs).map((tab) => (
        <Tab
          key={tab}
          tab={tabs[tab]}
          setTab={setTab}
          currentTab={currentTab}
        />
      ))}
      <button
        onClick={logOut}
        className="mx-2 mt-auto flex h-min w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 bg-opacity-15 px-2 py-2 text-neutral-200 transition-all hover:bg-opacity-30 sm:justify-start lg:w-auto lg:px-8 xl:mx-4 xl:gap-4"
      >
        <Image src={'/icons/logout.svg'} alt="user" width={24} height={24} />
        <p className="hidden text-xs sm:block md:text-sm xl:text-lg">
          {t('Tizimdan chiqish')}
        </p>
      </button>
    </motion.section>
  )
}

const Tab = ({ tab, setTab, currentTab }) => {
  const isActive = tab === currentTab
  const active = 'text-primary'
  const passive = 'text-neutral-300 '
  const activeIcon = 'filter-primary'
  const passiveIcon = 'filter-neutral-300'
  const containerActive = 'bg-neutral-800'
  const containerPassive = 'bg-transparent'

  const getCorrectIcon = (tab) => {
    if (tab === 'Profil') {
      return 'user'
    }
    if (tab === 'Settings') {
      return 'gear'
    }
    if (tab === 'Language') {
      return 'globe'
    }
    if (tab === 'Change Password') {
      return 'lock'
    }
    return 'home'
  }

  return (
    <button
      key={tab}
      onClick={() => setTab(tab)}
      className={`mx-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-2 transition-all hover:bg-neutral-800 sm:justify-start lg:mx-4 lg:w-auto lg:px-8 xl:mx-4 xl:gap-4 ${isActive ? containerActive : containerPassive}`}
    >
      <Image
        src={`/icons/${getCorrectIcon(tab)}.svg`}
        width={24}
        height={24}
        alt={tab}
        className={`size-6 ${isActive ? activeIcon : passiveIcon}`}
      />
      <p
        className={`hidden text-xs sm:block md:text-sm xl:text-lg ${isActive ? active : passive}`}
      >
        {tab}
      </p>
    </button>
  )
}

export default SettingsNavigation
