'use client'

import NotificationModal from './Modal'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Image from 'next/image'

const Notification = () => {
  const { t } = useTranslation()
  const [isNotificationsOpen, setNotificationsOpen] = useState(false)
  const { systemNotifications, isLoading, error } = useSelector(
    (state) => state.systemNotifications
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState(null)

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification)
    setIsModalOpen(true)
  }

  return (
    <Popover open={isNotificationsOpen} onOpenChange={setNotificationsOpen}>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer">
          <Image
            src={'/icons/bell.svg'}
            alt="bell"
            draggable={false}
            width={24}
            height={24}
            className={`hover:filter-neutral-200 size-6 select-none ${isNotificationsOpen ? 'filter-neutral-50' : 'filter-neutral-300'}`}
          />
          {true && (
            <span className="absolute -top-0 right-0.5 block size-2 rounded-full bg-primary" />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="relative mr-2 mt-5 flex h-auto max-h-96 min-h-64 w-80 flex-col gap-2 overflow-y-scroll rounded-xl p-3 xl:w-96">
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
