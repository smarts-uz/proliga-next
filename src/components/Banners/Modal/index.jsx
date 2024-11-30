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

  const banner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MODAL_BANNER),
    [banners]
  )

  const handleOpen = (open) => {
    if (disabled) return
    setModalOpen(open)
  }

  return (
    <>
      {banner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
        <Dialog open={isModalOpen} onOpenChange={handleOpen}>
          <DialogTrigger className="hidden">Ad Trigger</DialogTrigger>
          <DialogContent
            closeButtonStyle="right-0 -top-8"
            className="max-h-max w-[96%] rounded-md p-0 md:max-w-[80%] 2xl:w-full 2xl:max-w-[1280px]"
          >
            <Link
              href={banner?.link ?? ''}
              className="block rounded md:min-w-[620px] xl:min-w-[1024px] 2xl:min-w-[1280px] 2xl:max-w-[1280px]"
            >
              <img
                src={banner?.content_url ?? ''}
                alt={banner?.name}
                width={128}
                height={72}
                loading="lazy"
                className="aspect-video h-full w-full rounded"
              />
            </Link>
            <DialogTitle className="hidden">Ad title</DialogTitle>
            <DialogDescription className="hidden">
              Ad Descriptor
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
      {banner?.type === BANNER_SERVICE_TYPE.YANDEX && (
        <YandexAd type="fullscreen" blockId={banner?.service_id} />
      )}
    </>
  )
}

export default ModalBanner
