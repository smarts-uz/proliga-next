import Backdrop from 'components/Backdrop'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  const { t } = useTranslation()
  return (
    <Backdrop onClick={onCancel}>
      <motion.dialog
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center max-w-[45rem] justify-between gap-2 rounded-md bg-neutral-950 p-8 text-neutral-100"
      >
        <Image
          src="/icons/close.svg"
          width={32}
          height={32}
          alt="close"
          className="filter-neutral-400 hover:filter-neutral-200 size-5 cursor-pointer self-end"
          onClick={onCancel}
        />
        <h3 className="mb-12 mt-6 cursor-default text-xl font-bold md:tracking-wide">
          {t('Ishonchingiz komilmi')}
        </h3>
        <div className="flex items-center gap-4">
          <button
            className="h-auto select-none rounded-md border-2 border-red-600 bg-red-600 px-8 py-2 font-medium text-neutral-50 transition-all hover:bg-red-800"
            onClick={onConfirm}
            tabIndex={0}
          >
            {t('Tasdiqlash')}
          </button>
          <button
            className="h-auto select-none rounded-md border-2 border-neutral-600 px-8 py-2 font-medium transition-all hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-50"
            onClick={onCancel}
          >
            {t('Qaytish')}
          </button>
        </div>
      </motion.dialog>
    </Backdrop>
  )
}

export default ConfirmationModal
