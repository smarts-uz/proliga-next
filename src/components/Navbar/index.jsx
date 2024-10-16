'use client'

import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Gutter from '../Gutter'
import Notification from './Notification/Notification'
import PlayLinks from './Links'
import MobileModal from './Modal'
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import ChangeLanguageDropdown from './Language'

const Navbar = () => {
  const path = usePathname()
  const [isDropdownOpen, toggleDropdown] = useState(false)
  const [isNotificationsOpen, toggleNotificationsOpen] = useState(false)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const [isModalOpen, toggleModal] = useState(false)
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [initialNotificationCount, setInitialNotificationCount] = useState(null);

  const { systemNotifications } = useSelector(
    (state) => state.systemNotifications
  )

  useEffect(() => {
    // When notifications come in, check if any are unread
    const readNotifications = JSON.parse(localStorage.getItem('readNotifications')) || [];
    const unreadExists = systemNotifications?.some(notification => !readNotifications.includes(notification.id));
  
    setHasUnreadNotifications(unreadExists);
  }, [systemNotifications]);




  const handleToggleDropdown = () => {
    if (isNotificationsOpen) {
      toggleNotificationsOpen(false)
    }
    toggleDropdown(!isDropdownOpen)
  }

  const handleToggleNotifications = () => {
    if (isDropdownOpen) {
      toggleDropdown(false);
    }
    toggleNotificationsOpen(!isNotificationsOpen);
  
    // If the user opens notifications and there are unread notifications, mark them as read
    if (!isNotificationsOpen && hasUnreadNotifications) {
      const readNotifications = JSON.parse(localStorage.getItem('readNotifications')) || [];
  
      // Add the IDs of new unread notifications to the readNotifications array
      const updatedReadNotifications = [
        ...readNotifications,
        ...systemNotifications.map(notification => notification.id)
      ];
  
      // Update localStorage with the newly read notifications
      localStorage.setItem('readNotifications', JSON.stringify(updatedReadNotifications));
  
      // Hide the span now that notifications have been read
      setHasUnreadNotifications(false);
    }
  };

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

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-20 w-screen bg-black bg-opacity-80 py-4 backdrop-blur-md">
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
            <MobileProfile
              handleToggleModal={handleToggleModal}
              handleToggleNotifications={handleToggleNotifications}
              isNotificationsOpen={isNotificationsOpen}
              userAuth={userAuth}
              userTable={userTable}
              isModalOpen={isModalOpen}
              hasUnreadNotifications={hasUnreadNotifications}
            />
            <DesktopProfile
              handleToggleDropdown={handleToggleDropdown}
              handleToggleNotifications={handleToggleNotifications}
              isDropdownOpen={isDropdownOpen}
              isNotificationsOpen={isNotificationsOpen}
              userAuth={userAuth}
              userTable={userTable}
              hasUnreadNotifications={hasUnreadNotifications}
            />
          </div>
        </Gutter>
      </nav>
      {isModalOpen && <MobileModal onCancel={handleToggleModal} />}
    </>
  )
}

const MobileProfile = ({
  handleToggleNotifications,
  handleToggleModal,
  isNotificationsOpen,
  userAuth,
  userTable,
  hasUnreadNotifications
}) => {
  return (
    <div className="flex w-max items-center justify-center gap-4 lg:hidden">
      <ChangeLanguageDropdown />
      <button onClick={handleToggleNotifications} className="relative">
        <Image
          src={'/icons/bell.svg'}
          alt="bell"
          draggable={false}
          width={24}
          height={24}
          className={`hover:filter-neutral-200 size-6 select-none ${isNotificationsOpen ? 'filter-neutral-50' : 'filter-neutral-300'}`}
        />
        {hasUnreadNotifications && (
          <span className="absolute -top-0 right-0.5 block size-2 rounded-full bg-primary" />

        )}
      </button>
      <span
        onClick={handleToggleModal}
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
      </span>
      {isNotificationsOpen && <Notification />}
    </div>
  )
}

const DesktopProfile = ({
  handleToggleDropdown,
  handleToggleNotifications,
  isNotificationsOpen,
  isDropdownOpen,
  userAuth,
  userTable,
  hasUnreadNotifications
}) => {
  return (
    <div className="hidden w-max items-center justify-center gap-4 lg:flex">
      <ChangeLanguageDropdown />
      <button onClick={handleToggleNotifications} className="relative">
        <Image
          src={'/icons/bell.svg'}
          alt="bell"
          draggable={false}
          width={24}
          height={24}
          className={`hover:filter-neutral-200 size-6 select-none ${isNotificationsOpen ? 'filter-neutral-50' : 'filter-neutral-300'}`}
        />
        {hasUnreadNotifications && (
          <span className="absolute -top-0 right-0.5 block size-2 rounded-full bg-primary" />
        )}
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
            key={userAuth?.user.email}
            className="size-8 rounded-full bg-white"
          />
        )}
        <Image
          src={'/icons/arrow-down.svg'}
          className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} hidden size-5 select-none transition-all sm:block lg:hidden xl:block`}
          alt="arrow down"
          width={20}
          draggable={false}
          height={20}
        />
      </span>
      {isDropdownOpen && <Dropdown auth={userAuth} />}
      {isNotificationsOpen && <Notification />}
    </div>
  )
}

export default Navbar
