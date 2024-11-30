'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
import { useMemo } from 'react'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'

const MiniBanner = () => {
  const { banners } = useSelector((store) => store.banner)

  const banner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MINI_BANNER),
    [banners]
  )

  return (
    <>
      {banner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
        <Link
          href={banner?.link ?? ''}
          className="mb-2 block h-[120px] w-[360px] overflow-hidden rounded"
        >
          <img
            src={banner?.content_url ?? ''}
            alt={banner?.name}
            loading="lazy"
            className="h-full w-full rounded"
          />
        </Link>
      )}
    </>
  )
}

export default MiniBanner
