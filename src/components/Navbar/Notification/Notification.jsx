'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { supabase } from '../../../app/lib/supabaseClient'
import { useEffect, useState } from 'react'

const Notification = () => {
  const { userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const [notification, setNotification] = useState(null)

  const channel = supabase
    .channel('public:system_notification')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'system_notification' }, (payload) => {
      console.log(payload, 'notification received')

      const { name, desc, is_broadcast, user_id } = payload.new

      // If it's a broadcast or the notification is for the current user
      if (is_broadcast || user_id === userTable.id) {
        setNotification({ name, desc })
        console.log(desc, 'notification content')
      }
    })
    .subscribe()
  console.log(notification, 'ddddddddd')

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="absolute right-0 top-12 flex h-full min-h-80 w-full max-w-96 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500 sm:w-80"
    >
      <h3 className="font-bold">{t('Xabarnomalar')}</h3>
      <div className="text-neutral-200">
        <div className="flex justify-between items-center rounded-lg bg-neutral-800 p-3 mb-2 transition duration-300 hover:bg-neutral-700 hover:shadow-lg">
          <p className="font-thin text-sm text-neutral-100 mb-1 line-clamp-1">Вам пришло новое уведомление</p>
          <button className="w-auto font-bold border-amber-400 border rounded-md text-xs p-1">Show</button>
        </div>

        <div className="flex justify-between items-center rounded-lg bg-neutral-800 p-3 mb-2 transition duration-300 hover:bg-neutral-700 hover:shadow-lg">
          <p className="font-thin text-sm text-neutral-100 mb-1 line-clamp-1">Вам пришло новое уведомление</p>
          <button className="w-auto font-bold border-amber-400 border rounded-md text-xs p-1">Show</button>
        </div>
        {/* <p className="text-center text-sm">{t('Hozicha habarlar yoq')}</p> */}
      </div>
    </motion.section>
  )
}

export default Notification
