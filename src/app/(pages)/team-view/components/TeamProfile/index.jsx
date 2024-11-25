/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import ProfilePlayersStructure from './PlayersStructure'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
const GameBrief = dynamic(() => import('./GameBrief'), {
  ssr: false,
})

const TeamProfile = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const { banners } = useSelector((store) => store.banner)
  const [leftBanner, setLeftBanner] = useState(null)
  const [rightBanner, setRightBanner] = useState(null)

  const NEXT_PUBLIC_BANNER_ONE_RENDER_WIDTH =
    process.env.NEXT_PUBLIC_BANNER_ONE_RENDER_WIDTH ?? 1280
  const NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH =
    process.env.NEXT_PUBLIC_BANNER_TWO_RENDER_WIDTH ?? 1440

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (banners?.length > 0) {
      setLeftBanner(
        banners.find((b) => b?.banner_type === BANNER.SIDE_BANNER_LEFT)
      )
      setRightBanner(
        banners.find((b) => b?.banner_type === BANNER.SIDE_BANNER_RIGHT)
      )
    }
  }, [banners])

  return (
    <main className="flex w-full flex-col justify-between gap-2 lg:flex-row">
      {windowWidth >= NEXT_PUBLIC_BANNER_ONE_RENDER_WIDTH && (
        <Link
          href={leftBanner?.link ?? ''}
          className="mb-auto hidden h-[540px] w-[120px] min-w-[120px] overflow-hidden rounded bg-neutral-500 xl:block"
        >
          <img
            src={leftBanner?.content_url ?? ''}
            alt={leftBanner?.name}
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
          href={rightBanner?.link ?? ''}
          className="mb-auto hidden h-[540px] w-[120px] min-w-[120px] overflow-hidden rounded bg-neutral-500 xl:block"
        >
          <img
            src={rightBanner?.content_url ?? ''}
            alt={rightBanner?.name}
            loading="lazy"
            className="h-full w-full"
          />
        </Link>
      )}
    </main>
  )
}

export default TeamProfile
