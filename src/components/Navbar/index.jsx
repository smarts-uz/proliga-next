'use client'

import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Gutter from '../Gutter'
import Notification from './Notification/Notification'
import PlayLinks from './Links'
import MobileModal from './Modal'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const path = usePathname()
  const [isDropdownOpen, toggleDropdown] = useState(false)
  const [isNotificationsOpen, toggleNotificationsOpen] = useState(false)
  const { userAuth } = useSelector((state) => state.auth)
  const [isModalOpen, toggleModal] = useState(false)
  const { i18n } = useTranslation()
  const { lang } = useSelector((state) => state.systemLanguage)

  const handleToggleDropdown = () => {
    if (isNotificationsOpen) {
      toggleNotificationsOpen(false)
    }
    toggleDropdown(!isDropdownOpen)
  }

  const handleToggleNotifications = () => {
    if (isDropdownOpen) {
      toggleDropdown(false)
    }
    toggleNotificationsOpen(!isNotificationsOpen)
  }

  const handleToggleModal = () => {
    if (isDropdownOpen) {
      toggleDropdown(false)
    }
    if (isNotificationsOpen) {
      toggleNotificationsOpen(false)
    }
    if (isModalOpen) {
      toggleModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      toggleModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-20 bg-black bg-opacity-80 py-4 backdrop-blur-md">
        <Gutter>
          <div className="relative flex w-full items-center justify-between text-white">
            <Link
              href={
                path.split('/').includes('championships')
                  ? '/'
                  : '/championships'
              }
            >
              <Image
                src="/icons/proliga-full.svg"
                alt="Proliga"
                width={180}
                height={56}
                priority={true}
                draggable={false}
                className="w-28 cursor-pointer sm:w-36"
              />
            </Link>
            <PlayLinks />
            <button onClick={handleToggleModal} className="lg:hidden">
              <Image
                width={24}
                height={24}
                draggable={false}
                src="/icons/hamburger.svg"
                alt="menu"
                className="size-6"
              />
            </button>
            <div className="hidden w-max items-center justify-center gap-4 lg:flex">
              <button onClick={handleToggleNotifications}>
                <Image
                  src={'/icons/bell.svg'}
                  alt="bell"
                  draggable={false}
                  width={24}
                  height={24}
                  className={`hover:filter-neutral-200 size-6 select-none ${isNotificationsOpen ? 'filter-neutral-50' : 'filter-neutral-300'}`}
                />
              </button>
              <span
                onClick={handleToggleDropdown}
                className="flex cursor-pointer items-center justify-center gap-2"
              >
                {userAuth && userAuth.user.email ? (
                  <span className="flex size-8 select-none items-center justify-center rounded-full bg-primary text-lg font-bold uppercase text-black">
                    {userAuth.user.email.slice(0, 1)}
                  </span>
                ) : (
                  <Image
                    src={'/icons/user.svg'}
                    alt="user"
                    width={32}
                    draggable={false}
                    height={32}
                    className="size-8 rounded-full bg-white"
                  />
                )}
                <Image
                  src={'/icons/arrow-down.svg'}
                  className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} hidden size-5 select-none transition-all sm:block`}
                  alt="arrow down"
                  width={20}
                  draggable={false}
                  height={20}
                />
              </span>
              {isDropdownOpen && <Dropdown auth={userAuth} />}
              {isNotificationsOpen && <Notification />}
            </div>
          </div>
        </Gutter>
      </nav>
      {isModalOpen && <MobileModal onCancel={handleToggleModal} />}
    </>
  )
}

export default Navbar
