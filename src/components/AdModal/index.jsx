/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
import { useMemo } from 'react'

const AdModal = ({ isModalOpen, setModalOpen }) => {
  const { banners } = useSelector((store) => store.banner)

  const modalBanner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MODAL_BANNER),
    [banners]
  )

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger className="hidden">Ad Trigger</DialogTrigger>
      <DialogContent
        closeButtonStyle="right-0 -top-8"
        className="max-h-max w-[96%] max-w-max rounded-md p-0 2xl:w-full"
      >
        <Link
          href={modalBanner?.link ?? ''}
          className="block rounded-sm md:min-w-[620px] lg:min-w-[960px] xl:min-w-[1024px] 2xl:min-w-[1280px]"
        >
          <img
            src={modalBanner?.content_url ?? ''}
            alt={modalBanner?.name}
            width={128}
            height={72}
            loading="lazy"
            className="aspect-video h-full w-full rounded-sm"
          />
        </Link>
        <DialogTitle className="hidden">Ad title</DialogTitle>
        <DialogDescription className="hidden">Ad Descriptor</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AdModal
