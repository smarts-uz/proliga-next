import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

const NotificationModal = ({
  isModalOpen,
  setIsModalOpen,
  selectedNotification,
}) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="mx-auto flex max-h-[90vh] w-[90%] max-w-[60rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 xs:w-5/6 sm:w-4/5 md:w-3/4 md:p-6 xl:w-2/3">
        <DialogTitle>{selectedNotification?.name}</DialogTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: selectedNotification?.desc,
          }}
        />
        <DialogDescription className="hidden">
          This is a description of the notification.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default NotificationModal
