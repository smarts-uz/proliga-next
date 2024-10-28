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
        className="max-h-max w-[96%] max-w-max rounded-sm p-0 2xl:w-full"
      >
        <div className="block md:min-w-[620px] lg:min-w-[960px] xl:min-w-[1024px] 2xl:min-w-[1280px]">
          <img
            src="/images/banner-desktop.jpg"
            alt="banner"
            width={128}
            height={72}
            loading="lazy"
            className="aspect-video h-full w-full rounded-sm"
          />
        </div>
        <DialogTitle className="hidden">Ad title</DialogTitle>
        <DialogDescription className="hidden">Ad Descriptor</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AdModal
