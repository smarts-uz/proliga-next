'use client'

import Image from 'next/image'
import { SETTINGSTAB } from 'app/utils/settingsTab.util'
import { useSelector } from 'react-redux'
import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { LANGUAGE } from 'app/utils/languages.util'
import { useState, useEffect } from 'react'

const SettingsNavigation = ({ setTab, currentTab }) => {
  const { t } = useTranslation()
  const { logOut } = useLogOut()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-row justify-between gap-1 rounded-xl bg-neutral-900 bg-opacity-90 py-2 lg:w-80 lg:flex-col xl:py-4"
    >
      {Object.keys(SETTINGSTAB).map((tab) => (
        <Tab
          key={tab}
          tab={SETTINGSTAB[tab]}
          setTab={setTab}
          currentTab={currentTab}
        />
      ))}
      <button
        onClick={logOut}
        className="mx-2 mt-auto flex h-min w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 bg-opacity-25 px-2 py-2 text-neutral-200 transition-all hover:bg-opacity-35 sm:justify-start lg:w-auto lg:px-8 xl:mx-4 xl:gap-4"
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
  const { lang } = useSelector((state) => state.systemLanguage)
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (lang === LANGUAGE.ru) {
      if (tab === SETTINGSTAB.HOME) {
        return setTitle('Профиль')
      }
      if (tab === SETTINGSTAB.SETTINGS) {
        return setTitle('Настройки')
      }
      if (tab === SETTINGSTAB.LANGUAGE) {
        return setTitle('Язык')
      }
      if (tab === SETTINGSTAB.PASSWORD) {
        return setTitle('Изменить Пароль')
      }
    }
    if (lang === LANGUAGE.uz) {
      if (tab === SETTINGSTAB.HOME) {
        return setTitle('Profil')
      }
      if (tab === SETTINGSTAB.SETTINGS) {
        return setTitle('Sozlamalar')
      }
      if (tab === SETTINGSTAB.LANGUAGE) {
        return setTitle('Til')
      }
      if (tab === SETTINGSTAB.PASSWORD) {
        return setTitle('Parol Ozgartirish')
      }
    }
    return setTitle(tab)
  }, [tab, lang])

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
      <div
        className={`hidden text-xs sm:block md:text-sm xl:text-lg ${isActive ? active : passive}`}
      >
        {title}
      </div>
    </button>
  )
}

export default SettingsNavigation
