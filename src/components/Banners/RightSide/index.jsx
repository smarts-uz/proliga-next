/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'
import { useMemo, useState, useEffect } from 'react'
import YandexAd from 'components/YandexAd'

const RightSideBanner = () => {
  const { banners } = useSelector((store) => store.banner)
  const NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH =
    process.env.NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH ?? 1440

  const [windowWidth, setWindowWidth] = useState(0)

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

  return (
    <>
      {windowWidth >= NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH &&
        banner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
          <Link
            href={banner?.link ?? ''}
            className="mb-auto hidden h-[540px] w-[120px] min-w-[120px] overflow-hidden rounded lg:block"
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
          <div className="mb-auto hidden h-[540px] w-[120px] min-w-[120px] overflow-hidden rounded lg:block">
            <YandexAd blockId={banner?.service_id} />
          </div>
        )}
    </>
  )
}

export default RightSideBanner
