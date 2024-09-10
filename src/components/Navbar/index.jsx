'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Gutter from '../Gutter'
import { useSelector } from 'react-redux'
import Notification from './Notification/Notification'

const Navbar = () => {
  const [isDropdownOpen, toggleDropdown] = useState(false)
  const [isNotificationsOpen, toggleNotificationsOpen] = useState(false)
  const { userAuth } = useSelector((state) => state.auth)

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

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 bg-black bg-opacity-80 shadow shadow-neutral-500 backdrop-blur-sm">
      <Gutter>
        <div className="relative flex w-full items-center justify-between py-4 text-white">
          <Link href="/">
            <Image
              src="/images/proliga.png"
              alt="Proliga"
              width={180}
              height={56}
              priority={true}
              draggable={false}
              className="h-6 w-32 cursor-pointer md:h-8 md:w-40"
            />
          </Link>
          <section className="hidden items-center gap-4 text-neutral-300 sm:flex sm:text-sm lg:gap-6 lg:text-base">
            <Link
              className="transition-all hover:text-white hover:underline"
              href="/championships"
            >
              Chempionat
            </Link>
            <Link
              className="transition-all hover:text-white hover:underline"
              href={'/'}
            >
              Yutuqlar
            </Link>
            <Link
              className="transition-all hover:text-white hover:underline"
              href={'/'}
            >
              Qoida
            </Link>
          </section>
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
