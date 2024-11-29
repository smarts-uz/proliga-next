/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import ProfilePlayersStructure from './PlayersStructure'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
const GameBrief = dynamic(() => import('./GameBrief'), {
  ssr: false,
})
import LeftSideBanner from 'components/Banners/LeftSide'
import RightSideBanner from 'components/Banners/RightSide'

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
    <main className="flex w-full flex-col justify-between gap-1.5 lg:flex-row">
      <LeftSideBanner />
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
      <RightSideBanner />
    </main>
  )
}

export default TeamProfile
