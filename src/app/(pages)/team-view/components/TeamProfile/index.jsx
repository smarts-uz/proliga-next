import Image from 'next/image'
import ProfilePlayersStructure from './PlayersStructure'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
const GameBrief = dynamic(() => import('./GameBrief'), {
  ssr: false,
})

const TeamProfile = () => {
  const { currentTour } = useSelector((store) => store.tours)

  return (
    <main className="flex w-full flex-col justify-between gap-2 lg:flex-row">
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
    </main>
  )
}

export default TeamProfile
