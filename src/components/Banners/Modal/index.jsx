'use client'
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
import { useMemo, useState } from 'react'
import YandexAd from 'components/YandexAd'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'
import { BANNER } from 'app/utils/banner.util'

const ModalBanner = ({ isModalOpen, setModalOpen }) => {
  const [disabled, setDisabled] = useState(false)
  const { banners } = useSelector((store) => store.banner)

  const modalBanner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MODAL_BANNER),
    [banners]
  )
  // useEffect(() => {
  //   if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
  //     window.Ya.Context.AdvManager.render({
  //       blockId: 'R-A-13081280-1',
  //       renderTo: 'yandex_rtb_R-A-13081280-1',
  //     })
  //   }
  // }, [])
  const handleOpen = (open) => {
    if (disabled) return
    setModalOpen(open)
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpen}>
      <DialogTrigger className="hidden">Ad Trigger</DialogTrigger>
      <DialogContent
        closeButtonStyle="right-0 -top-8"
        className="max-h-max w-[96%] rounded-md p-0 md:max-w-[80%] 2xl:w-full 2xl:max-w-[1280px]"
      >
        {modalBanner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
          <Link
            href={modalBanner?.link ?? ''}
            className="block rounded md:min-w-[620px] xl:min-w-[1024px] 2xl:min-w-[1280px] 2xl:max-w-[1280px]"
          >
            <img
              src={modalBanner?.content_url ?? ''}
              alt={modalBanner?.name}
              width={128}
              height={72}
              loading="lazy"
              className="aspect-video h-full w-full rounded"
            />
          </Link>
        )}
        {modalBanner?.type === BANNER_SERVICE_TYPE.YANDEX && (
          <YandexAd blockId={modalBanner?.service_id} />
        )}
        <DialogTitle className="hidden">Ad title</DialogTitle>
        <DialogDescription className="hidden">Ad Descriptor</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default ModalBanner
