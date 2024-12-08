/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'
import { useMemo, useState, useEffect, memo } from 'react'
import YandexAd from 'components/YandexAd'
import { useCreateBannerView } from 'app/hooks/system/useCreateBannerView/useCreateBannerView'

const RightSideBanner = () => {
  const { banners } = useSelector((store) => store.banner)
  const { userTable, userAuth, geo, agent } = useSelector((store) => store.auth)
  const NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH =
    process.env.NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH ?? 1440

  const [windowWidth, setWindowWidth] = useState(0)
  const { createBannerView } = useCreateBannerView()

  const banner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.SIDE_BANNER_RIGHT),
    [banners]
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (
      windowWidth >= NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH &&
      banner?.type === BANNER_SERVICE_TYPE.CUSTOM
    ) {
      if (banner?.id && userTable?.id && userAuth?.user?.id && geo && agent) {
        createBannerView({ banner_id: banner?.id })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    banner,
    NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH,
    windowWidth,
    agent,
    userTable?.id,
    userAuth?.user?.id,
    geo,
  ])

  return (
    <>
      {windowWidth >= NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH &&
        banner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
          <Link
            href={banner?.link ?? ''}
            className="mb-auto hidden h-[560px] w-[160px] min-w-[160px] overflow-hidden rounded-sm lg:block"
          >
            <img
              src={banner?.content_url ?? ''}
              alt={banner?.name}
              loading="lazy"
              className="h-full w-full"
            />
          </Link>
        )}
      {windowWidth >= NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH &&
        banner?.type === BANNER_SERVICE_TYPE.YANDEX && (
          <div className="mb-auto hidden h-[560px] w-[160px] min-w-[160px] overflow-hidden rounded-sm lg:block">
            <YandexAd blockId={banner?.service_id} />
          </div>
        )}
    </>
  )
}

export default memo(RightSideBanner)
