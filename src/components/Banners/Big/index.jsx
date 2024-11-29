'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import YandexAd from 'components/YandexAd'
import { BANNER } from 'app/utils/banner.util'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'
import { useMemo } from 'react'

const BigBanner = () => {
  const { banners } = useSelector((store) => store.banner)

  const banner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.BIG_BANNER),
    [banners]
  )
  return (
    <>
      {banner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
        <Link
          href={banner?.link ?? ''}
          className="block h-[480px] w-[360px] overflow-hidden rounded"
        >
          <img
            src={banner?.content_url ?? ''}
            alt={banner?.name}
            loading="lazy"
            className="h-full w-full rounded"
          />
        </Link>
      )}
      {banner?.type === BANNER_SERVICE_TYPE.YANDEX && (
        <div className="block h-[640px] w-[360px] overflow-hidden rounded">
          <YandexAd blockId={banner?.service_id} />
        </div>
      )}
    </>
  )
}

export default BigBanner
