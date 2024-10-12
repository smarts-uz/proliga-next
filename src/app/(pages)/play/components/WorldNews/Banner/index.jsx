import React from 'react'

const Banner = () => {
  return (
    <div className="aspect- relative flex h-auto min-h-[36rem] w-full max-w-[26rem] flex-col items-center justify-between overflow-hidden rounded-xl px-0 shadow shadow-neutral-600 sm:min-h-[36rem]">
      <div className="mb-2 block h-1/5 w-full rounded bg-red-400"></div>
      <div className="block h-4/5 w-full rounded bg-red-400"></div>
    </div>
    // <div className="block h-auto min-w-[10rem] rounded bg-red-400"></div>
  )
}

export default Banner
