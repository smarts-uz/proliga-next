/* eslint-disable @next/next/no-img-element */
'use client'
import { useSelector } from 'react-redux'

const Banner = () => {
  const { banners } = useSelector((store) => store.banner)

  return (
    <div className="relative mx-auto flex h-auto min-h-[36rem] min-w-[300px] max-w-[340px] flex-col items-center justify-between overflow-hidden sm:min-h-[36rem] lg:mx-0">
      <div className="mb-2 block h-[100px] w-[300px] overflow-hidden rounded">
        <img
          src={banners[7]?.content_url ?? ''}
          alt={banners[1]?.name}
          className="h-full w-full"
        />
      </div>
      <div className="block h-[600px] w-[300px] overflow-hidden rounded">
        <img
          src={banners[4]?.content_url ?? ''}
          alt={banners[4]?.name}
          className="h-full w-full"
        />
        {/*  */}
      </div>
    </div>
  )
}

export default Banner
