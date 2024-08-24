import Image from 'next/image'
import Backdrop from '../../../../../../components/Backdrop'

const ArticleModal = ({ item, toggleModal }) => {
  return (
    <Backdrop onClick={toggleModal}>
      <dialog
        onClick={(e) => e.stopPropagation()}
        className="fade-in flex min-h-[50vh] max-h-[80vh] w-full flex-col gap-4 overflow-y-auto rounded-2xl bg-white px-4 py-2 shadow-lg md:mx-auto md:w-1/2"
      >
        <button
          onClick={toggleModal}
          type="button"
          className="h-8 rounded-md bg-gray-700 px-2 text-sm text-white"
        >
          Close
        </button>
        <div className="flex w-full items-center justify-between text-sm text-neutral-400">
          <p className="max-w-xs">{item.date}</p>
          <div className="flex gap-1">
            <Image src="/icons/eye.svg" width={20} height={20} alt="eye" />
            <p className="pt-0.5">{item.views}</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.news }} />
      </dialog>
    </Backdrop>
  )
}

export default ArticleModal
