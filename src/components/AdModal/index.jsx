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
import { BANNER } from 'app/utils/banner.util'
import { useMemo, useEffect } from 'react'
import Script from 'next/script'

const AdModal = ({ isModalOpen, setModalOpen }) => {
  const { banners } = useSelector((store) => store.banner)

  const modalBanner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MODAL_BANNER),
    [banners]
  )
  useEffect(() => {
    // Check if Ya is defined and the script has loaded
    if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
      // Render the ad only when the Ya object is available
      window.Ya.Context.AdvManager.render({
        blockId: 'R-A-13081280-1',
        renderTo: 'yandex_rtb_R-A-13081280-1',
      })
    }
  }, [])
  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger className="hidden">Ad Trigger</DialogTrigger>
      <DialogContent
        closeButtonStyle="right-0 -top-8"
        className="max-h-max w-[96%] rounded-md p-0 md:max-w-[80%] 2xl:w-full 2xl:max-w-[1280px]"
      >
        <Link
          href={modalBanner?.link ?? ''}
          className="hidden rounded md:min-w-[620px] xl:min-w-[1024px] 2xl:min-w-[1280px] 2xl:max-w-[1280px]"
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
        <div id="yandex_rtb_R-A-13081280-1"></div>
        <Script
          id="random"
          strategy="afterInteractive"
          src="https://an.yandex.ru/system/context.js"
          onLoad={() => {
            if (
              window.Ya &&
              window.Ya.Context &&
              window.Ya.Context.AdvManager
            ) {
              window.Ya.Context.AdvManager.render({
                blockId: 'R-A-13081280-1',
                renderTo: 'yandex_rtb_R-A-13081280-1',
              })
            } else {
              console.error(
                'Yandex ad script failed to load or Ya is not defined.'
              )
            }
          }}
          onError={(e) => {
            console.error('Failed to load Yandex script:', e)
          }}
        />
        <DialogTitle className="hidden">Ad title</DialogTitle>
        <DialogDescription className="hidden">Ad Descriptor</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AdModal
