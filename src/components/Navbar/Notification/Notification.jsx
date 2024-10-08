'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../app/lib/supabaseClient'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'; 
import { useState } from 'react'

const Notification = () => {
  // const { userTable } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const dispatch = useDispatch(); 
  const { systemNotifications, isLoading, error } = useSelector((state) => state.systemNotifications);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null); // Store selected notification



  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification); // Set clicked notification
    setIsModalOpen(true); // Open modal
};
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="absolute right-0 top-14 overflow-y-auto flex h-full min-h-80 w-full max-w-96 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500 sm:w-80"
    >
      <h3 className="font-bold">{t('Xabarnomalar')}</h3>
      <div className="text-neutral-200">
        {systemNotifications === null || systemNotifications.length === 0 ? (
          <p className="text-center text-sm">{t('Hozicha habarlar yoq')}</p>

        ) : (
          systemNotifications.map((notification, index) => (
            <div key={index}   onClick={() => handleNotificationClick(notification)} className="flex justify-between items-center rounded-lg bg-neutral-800 p-3 mb-2 transition duration-300 hover:bg-neutral-700 hover:shadow-lg">
            <p className="font-thin text-sm text-neutral-100 mb-1 line-clamp-1">{notification.name}</p>
            <button className="w-auto font-bold border-amber-400 border rounded-md text-xs p-1">Show</button>
          </div>
  
          ))
        ) }
      
                  {/* Shadcn Modal */}
                  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
               
                <DialogContent className="max-w-md p-6 bg-white rounded-lg shadow-lg">
                    {selectedNotification ? (
                        <>
                            <h2 className="text-lg font-bold mb-4">{selectedNotification.name}</h2>
                            <p className="text-sm mb-4">
                                {selectedNotification.desc}
                            </p>
                            <button
                                onClick={() => setIsModalOpen(false)} // Close modal
                                className="w-auto font-bold border-amber-400 border rounded-md text-xs p-1"
                            >
                                {t('Close')}
                            </button>
                        </>
                    ) : (
                        <p>{t('No notification selected')}</p>
                    )}
                </DialogContent>
            </Dialog>

      </div>
    </motion.section>
  )
}

export default Notification
