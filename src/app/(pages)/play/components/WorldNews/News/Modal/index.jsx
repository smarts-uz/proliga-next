import Image from 'next/image'
import Backdrop from '../../../../../../../components/Backdrop'
import { motion } from 'framer-motion'

const ArticleModal = ({ item, toggleModal }) => {
  return (
    <Backdrop onClick={toggleModal}>
      <motion.dialog
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 flex max-h-[90vh] w-auto max-w-[60rem] flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-2xl bg-neutral-900 p-4 text-neutral-200 xs:mx-auto xs:w-4/5 sm:w-2/3 md:w-1/2 md:p-6 xl:w-2/3"
      >
        <button onClick={toggleModal} type="button" className="self-end">
          <Image
            src="/icons/close.svg"
            alt="close icon"
            draggable={false}
            width={24}
            height={24}
          />
        </button>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <div className="flex w-full items-center justify-between text-sm text-neutral-400">
          <p className="max-w-xs">{item.date}</p>
        </div>
        <div
          className="w-full text-sm xl:text-base"
          dangerouslySetInnerHTML={{ __html: item.desc }}
        />
      </motion.dialog>
    </Backdrop>
  )
}

export default ArticleModal
