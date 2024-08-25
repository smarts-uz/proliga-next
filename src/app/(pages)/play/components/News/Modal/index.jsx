import Image from 'next/image'
import Backdrop from '../../../../../../components/Backdrop'

const ArticleModal = ({ item, toggleModal }) => {
  return (
    <Backdrop onClick={toggleModal}>
      <dialog
        onClick={(e) => e.stopPropagation()}
        className="fade-in mx-4 flex max-h-[80vh] min-h-[50vh] flex-col gap-4 overflow-y-auto 
        rounded-2xl bg-neutral-900 p-4 md:p-6 text-neutral-200  md:mx-auto md:w-1/2 2xl:w-1/3"
      >
        <button onClick={toggleModal} type="button" className=" self-end">
          <Image
            src="/icons/close.svg"
            alt="close icon"
            draggable={false}
            width={24}
            height={24}
          />
        </button>
        <h3 className="text-lg font-semibold">{item.title}</h3>
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
