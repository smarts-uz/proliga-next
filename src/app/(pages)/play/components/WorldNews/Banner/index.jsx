/* eslint-disable @next/next/no-img-element */
'use client'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useMemo } from 'react'
import { BANNER } from 'app/utils/banner.util'

const Banner = () => {
  const { banners } = useSelector((store) => store.banner)

  const miniBanner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MINI_BANNER),
    [banners]
  )
  const bigBanner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.BIG_BANNER),
    [banners]
  )

  return (
    <div className="relative mx-auto hidden h-min flex-col items-center justify-between overflow-hidden md:flex lg:mx-0">
      <Link
        href={miniBanner?.link ?? ''}
        className="mb-2 block h-[120px] w-[360px] overflow-hidden rounded"
      >
        <img
          src={miniBanner?.content_url ?? ''}
          alt={miniBanner?.name}
          loading="lazy"
          className="h-full w-full rounded"
        />
      </Link>
      <Link
        href={bigBanner?.link ?? ''}
        className="block h-[480px] w-[360px] overflow-hidden rounded"
      >
        <img
          src={bigBanner?.content_url ?? ''}
          alt={bigBanner?.name}
          loading="lazy"
          className="h-full w-full rounded"
        />
      </Link>
    </div>
  )
}

export default Banner
