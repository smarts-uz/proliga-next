/* eslint-disable @next/next/no-img-element */
'use client'
import { useSelector } from 'react-redux'

const Banner = () => {
  const { banners } = useSelector((store) => store.banner)

  return (
    <div className="relative mx-auto hidden h-min flex-col items-center justify-between overflow-hidden md:flex lg:mx-0">
      <div className="mb-2 block h-[120px] w-[360px] overflow-hidden rounded">
        <img
          src={banners[7]?.content_url ?? ''}
          alt={banners[1]?.name}
          className="h-full w-full rounded"
        />
      </div>
      <div className="block h-[480px] w-[360px] overflow-hidden rounded">
        <img
          src={banners[4]?.content_url ?? ''}
          alt={banners[4]?.name}
          className="h-full w-full rounded"
        />
      </div>
    </div>
  )
}

export default Banner
