/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import ProfilePlayersStructure from './PlayersStructure'
import dynamic from 'next/dynamic'
const GameBrief = dynamic(() => import('./GameBrief'), {
  ssr: false,
})
import Link from 'next/link'
import { useState, useEffect } from 'react'

const TeamProfile = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const NEXT_PUBLIC_BANNER_ONE_RENDER_WIDTH =
    process.env.NEXT_PUBLIC_BANNER_ONE_RENDER_WIDTH ?? 1280
  const NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH =
    process.env.NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH ?? 1440
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <main className="flex w-full flex-col justify-between gap-2 lg:flex-row">
      {windowWidth >= NEXT_PUBLIC_BANNER_ONE_RENDER_WIDTH && (
        <Link
          href="https://www.youtube.com"
          className="mb-auto hidden h-[500px] w-[100px] min-w-[120px] overflow-hidden rounded bg-neutral-500 xl:block"
        >
          <img
            src={'/images/banner.jpg'}
            alt={'banner'}
            loading="lazy"
            className="h-full w-full"
          />
        </Link>
      )}
      <div className="mt-0.5 h-full w-full lg:w-1/2">
        <div className="relative h-auto w-full">
          <Image
            src="/icons/stadium.svg"
            alt="stadium"
            width={700}
            height={600}
            className="w-full rounded-sm"
            priority
          />
          <ProfilePlayersStructure />
        </div>
      </div>
      <GameBrief />
      {windowWidth >= NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH && (
        <Link
          href="https://instagram.com"
          className="mb-auto hidden h-[500px] w-[100px] min-w-[120px] overflow-hidden rounded bg-neutral-500 xl:block"
        >
          <img
            src={'/images/banner.jpg'}
            alt={'banner'}
            loading="lazy"
            className="h-full w-full"
          />
        </Link>
      )}
    </main>
  )
}

export default TeamProfile
