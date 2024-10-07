'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../app/lib/supabaseClient'
import { useEffect, useMemo, useState } from 'react'
import { fetchSystemNotification, setupNotificationListener } from 'app/lib/features/systemNotification/systemNotification.thunk'

const Notification = () => {
  const { userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const dispatch = useDispatch(); 
  const { systemNotifications, isLoading, error, isLoaded } = useSelector((state) => state.systemNotifications);

  useEffect(() => {
    if (userTable?.id) {
      // Dispatch fetch notifications if not already loaded
      dispatch(fetchSystemNotification({ userId: userTable.id, isLoaded }));
      // Dispatch setup real-time listener if not already set up
      dispatch(setupNotificationListener(userTable.id));
    }
  }, [dispatch, userTable, isLoaded]);

  // Memoize notifications to prevent unnecessary re-renders
  const memoizedNotifications = useMemo(() => systemNotifications, [systemNotifications]);
  console.log(systemNotifications, 'sssss00')
  console.log(memoizedNotifications, 'mmmmm')
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="absolute right-0 top-14 flex h-full min-h-80 w-full max-w-96 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500 sm:w-80"
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
