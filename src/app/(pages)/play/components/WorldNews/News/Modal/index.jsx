import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'

const ArticleModal = ({ item, toggleModal, isModalOpen, date }) => {
  return (
    <Dialog onOpenChange={toggleModal} open={isModalOpen}>
      <DialogContent className="overflox-y-auto flex max-h-[96vh] min-h-[45vh] w-[96%] max-w-[64rem] flex-col gap-3 overflow-y-auto overflow-x-hidden rounded-xl border border-neutral-500 bg-neutral-900 px-2 py-4 text-neutral-200 xs:w-[96%] xs:px-4 sm:w-4/5 md:p-6 lg:max-h-[90vh] lg:w-3/4 xl:w-3/5">
        <div className="mr-6 flex flex-col gap-0.5">
          <DialogTitle className="text-lg font-semibold">
            {item.name}
          </DialogTitle>
          <p className="max-w-xs text-xs text-neutral-400 md:text-sm">{date}</p>
        </div>
        <div
          className="html-page w-auto text-sm xl:text-base"
          dangerouslySetInnerHTML={{ __html: item.desc }}
        />
        <DialogDescription className="hidden">News</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default ArticleModal
