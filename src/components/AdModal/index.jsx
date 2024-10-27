/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const AdModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger className="hidden">Ad Trigger</DialogTrigger>
      <DialogContent
        closeButtonStyle="right-0 -top-8"
        className="w-[96%] max-w-max rounded-sm p-0 2xl:w-full"
      >
        <div className="block rounded-sm border border-blue-900 2xl:h-[720px] 2xl:w-[1280px]">
          <img
            src="/images/banner-desktop.jpg"
            alt="banner"
            width={128}
            height={72}
            className="h-full w-full bg-cover"
          />
        </div>
        <DialogTitle className="hidden">Ad title</DialogTitle>
        <DialogDescription className="hidden">Ad Descriptor</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AdModal
