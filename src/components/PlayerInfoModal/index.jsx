'use client'

import Backdrop from 'components/Backdrop'
import { motion } from 'framer-motion'

const PlayerInfoModal = () => {
  return (
    <Backdrop onClick={() => toggleModal(false)}>
      <motion.dialog
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-4/5 max-w-[45rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-6 text-neutral-200 xs:mx-auto sm:w-2/3 md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      ></motion.dialog>
    </Backdrop>
  )
}

export default PlayerInfoModal
