'use client'
import Backdrop from 'components/Backdrop'
import { motion } from 'framer-motion'
import PlayerTable from './PlayerTable'
import Image from 'next/image'

const PlayerTransferModal = ({ prevPlayer, handleModal, currentTeam }) => {
  return (
    <Backdrop onClick={handleModal}>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto flex max-h-[80vh] w-[96%] max-w-[45rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-black p-4 text-neutral-200 xs:w-[92%] md:w-[80%] md:p-6 lg:w-3/4 xl:w-2/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium xs:text-base xl:text-lg">
            Transfer Amalga Oshirish
          </h2>
          <button>
            <Image
              src="/icons/close.svg"
              alt="close"
              width={24}
              height={24}
              onClick={handleModal}
              className="ml-auto self-end"
            />
          </button>
        </div>
        <PlayerTable prevPlayer={prevPlayer} team={currentTeam} />
      </motion.div>
    </Backdrop>
  )
}

export default PlayerTransferModal
