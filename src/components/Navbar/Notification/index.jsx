'use client'

import NotificationModal from './Modal'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Image from 'next/image'

const Notification = () => {
  const { t } = useTranslation()
  const [isNotificationsOpen, setNotificationsOpen] = useState(false)
  const { systemNotifications } = useSelector(
    (state) => state.systemNotifications
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState(null)

  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const readNotificationIds = JSON.parse(localStorage.getItem('readNotificationIds') || '[]')

    if (systemNotifications?.length > 0) {

      const unreadNotifications = systemNotifications.filter(
        (notification) => !readNotificationIds.includes(notification.id)
      )
      setUnreadCount(unreadNotifications.length)
    }
  }, [systemNotifications])


  const handleOpenNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen)

    if (!isNotificationsOpen) {
      setUnreadCount(0)


      if (systemNotifications?.length > 0) {
        const notificationIds = systemNotifications.map(notification => notification.id)
        localStorage.setItem('readNotificationIds', JSON.stringify(notificationIds))
      }
    }
  }

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification)
    setIsModalOpen(true)
  }

  return (
    <Popover open={isNotificationsOpen} onOpenChange={handleOpenNotifications}>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer" onClick={handleOpenNotifications}>
          <Image
            src={'/icons/bell.svg'}
            alt="bell"
            draggable={false}
            width={24}
            height={24}
            className={`hover:filter-neutral-200 size-8 select-none ${isNotificationsOpen ? 'filter-neutral-50' : 'filter-neutral-300'}`}
          />
          {unreadCount > 0 && (
            <span className="absolute -top-0 right-0.5 size-4 text-xs rounded-full flex justify-center bg-primary text-black font-semibold">
              {unreadCount}
            </span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-2 mt-5 flex h-auto max-h-96 min-h-64 w-80 flex-col gap-2 overflow-y-scroll rounded-xl p-3 xl:w-96">
        <h3 className="font-bold">{t('Xabarnomalar')}</h3>
        <section className="flex flex-col gap-1 text-neutral-200">
          {systemNotifications?.length === 0 ? (
            <p className="text-center text-sm">{t('Hozicha habarlar yoq')}</p>
          ) : (
            systemNotifications?.length > 0 &&
            systemNotifications.map((notification, index) => (
              <div
                key={index}
                onClick={() => handleNotificationClick(notification)}
                className="flex items-center justify-between rounded-lg bg-neutral-900 p-2 transition-all duration-300 ease-in hover:bg-neutral-700"
              >
                <div className="max-w-[80%]">
                  <p className="line-clamp-2 break-words text-sm font-thin text-neutral-100">
                    {notification.name}
                  </p>
                  <p className="text-xs">{notification.created_at}</p>
                </div>
                <button className="w-auto rounded-md border border-primary p-1 text-xs font-bold transition-all hover:bg-primary hover:text-black">
                  {t("Ko'rish")}
                </button>
              </div>
            ))
          )}
        </section>
      </PopoverContent>
      <NotificationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedNotification={selectedNotification}
      />
    </Popover>
  )
}

export default Notification
