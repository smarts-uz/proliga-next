'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Gutter from '../Gutter'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import Notification from './Notification/Notification'
import DefaultLinks from './DefaultLinks'
import PlayLinks from './PlayLinks'

const Navbar = () => {
  const path = usePathname()
  const [isDropdownOpen, toggleDropdown] = useState(false)
  const [isNotificationsOpen, toggleNotificationsOpen] = useState(false)
  const { userAuth } = useSelector((state) => state.auth)
  const linksCondition = path.split('/').includes('play')

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
  console.log(path.split('/').includes('play'))

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 bg-black bg-opacity-80 py-4 backdrop-blur-md">
      <Gutter>
        <div className="relative flex w-full items-center justify-between text-white">
          <Link href="/">
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
          {linksCondition ? <PlayLinks /> : <DefaultLinks />}
          <div className="flex w-max items-center justify-center gap-4">
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
  )
}

export default Navbar
