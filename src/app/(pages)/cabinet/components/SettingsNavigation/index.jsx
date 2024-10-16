'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { SETTINGSTAB } from 'app/utils/settingsTab.util'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { LANGUAGE } from 'app/utils/languages.util'
import { useState, useEffect } from 'react'
const SettingsSidebarLogOut = dynamic(() => import('./LogOut/LogOut'), {
  ssr: false,
})

const SettingsNavigation = ({ setTab, currentTab }) => {
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-row justify-between rounded-xl bg-neutral-900/80 bg-opacity-90 px-4 py-2 lg:w-72 lg:flex-col lg:py-4 xl:gap-1"
    >
      {Object.keys(SETTINGSTAB).map((tab) => (
        <Tab
          key={tab}
          tab={SETTINGSTAB[tab]}
          setTab={setTab}
          currentTab={currentTab}
        />
      ))}
      <SettingsSidebarLogOut />
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
  const { lang } = useSelector((state) => state.systemLanguage)
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (lang === LANGUAGE.ru) {
      if (tab === SETTINGSTAB.PROFILE) {
        return setTitle('Профиль')
      }
      if (tab === SETTINGSTAB.SETTINGS) {
        return setTitle('Настройки')
      }
      if (tab === SETTINGSTAB.LANGUAGE) {
        return setTitle('Язык')
      }
      if (tab === SETTINGSTAB.PASSWORD) {
        return setTitle('Пароль')
      }
      if (tab === SETTINGSTAB.TRANSACTIONHISTORY) {
        return setTitle('Платежи')
      }
    }
    if (lang === LANGUAGE.uz) {
      if (tab === SETTINGSTAB.PROFILE) {
        return setTitle('Profil')
      }
      if (tab === SETTINGSTAB.SETTINGS) {
        return setTitle('Sozlamalar')
      }
      if (tab === SETTINGSTAB.LANGUAGE) {
        return setTitle('Til')
      }
      if (tab === SETTINGSTAB.PASSWORD) {
        return setTitle('Parol')
      }
      if (tab === SETTINGSTAB.TRANSACTIONHISTORY) {
        return setTitle('Xarajatlar')
      }
    }
    return setTitle(tab)
  }, [tab, lang])

  const getCorrectIcon = (tab) => {
    if (tab === SETTINGSTAB.PROFILE) {
      return 'user'
    }
    if (tab === SETTINGSTAB.SETTINGS) {
      return 'gear'
    }
    if (tab === SETTINGSTAB.LANGUAGE) {
      return 'globe'
    }
    if (tab === SETTINGSTAB.PASSWORD) {
      return 'lock'
    }
    if (tab === SETTINGSTAB.TRANSACTIONHISTORY) {
      return 'transaction-history'
    }
    return 'home'
  }

  return (
    <button
      key={tab}
      onClick={() => setTab(tab)}
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-2 transition-all hover:bg-neutral-800 lg:w-auto lg:justify-start lg:px-8 xl:gap-4 ${isActive ? containerActive : containerPassive}`}
    >
      <Image
        src={`/icons/${getCorrectIcon(tab)}.svg`}
        width={24}
        height={24}
        alt={tab}
        className={`size-6 ${isActive ? activeIcon : passiveIcon}`}
      />
      <div
        className={`hidden lg:block lg:text-sm xl:text-base ${isActive ? active : passive}`}
      >
        {title}
      </div>
    </button>
  )
}

export default SettingsNavigation
