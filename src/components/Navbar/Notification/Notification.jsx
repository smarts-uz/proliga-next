'use client'

import NotificationModal from './Modal'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Notification = () => {
  // const { userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const dispatch = useDispatch()
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
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="absolute right-0 top-12 flex h-full min-h-96 w-full max-w-96 flex-col gap-4 overflow-y-auto rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500 sm:w-80"
    >
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
              className="flex items-center justify-between rounded-lg bg-neutral-800 p-2 transition-all duration-300 ease-in hover:bg-neutral-700"
            >
              <div className="max-w-[80%]">
                <p className="line-clamp-2 break-words text-sm font-thin text-neutral-100">
                  {notification.name}
                </p>
                <p className="text-xs">{notification.created_at}</p>
              </div>
              <button className="w-auto rounded-md border border-amber-400 p-1 text-xs font-bold">
                {t("Ko'rish")}
              </button>
            </div>
          ))
        )}
      </section>
      <NotificationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedNotification={selectedNotification}
      />
    </motion.section>
  )
}

export default Notification
