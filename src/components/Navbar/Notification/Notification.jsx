'use client'
import { motion } from 'framer-motion'

const Notification = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="absolute right-0 top-12 flex h-full min-h-80 w-80 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500"
    >
      <h3 className="font-bold">Xabarnomalar</h3>
      <div className="text-neutral-200">
        <p className="text-center text-sm">Hozicha habarlar yoq!</p>
      </div>
    </motion.section>
  )
}

export default Notification
