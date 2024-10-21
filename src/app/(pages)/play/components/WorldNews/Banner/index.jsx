/* eslint-disable @next/next/no-img-element */
'use client'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Banner = () => {
  const { banners } = useSelector((store) => store.banner)

  return (
    <div className="relative mx-auto hidden h-min flex-col items-center justify-between overflow-hidden md:flex lg:mx-0">
      <Link
        href={banners[7]?.link ?? ''}
        className="mb-2 block h-[120px] w-[360px] overflow-hidden rounded"
      >
        <img
          src={banners[7]?.content_url ?? ''}
          alt={banners[1]?.name}
          className="h-full w-full rounded"
        />
      </Link>
      <Link
        href={banners[4]?.link ?? ''}
        className="block h-[480px] w-[360px] overflow-hidden rounded"
      >
        <img
          src={banners[4]?.content_url ?? ''}
          alt={banners[4]?.name}
          className="h-full w-full rounded"
        />
      </Link>
    </div>
  )
}

export default Banner
