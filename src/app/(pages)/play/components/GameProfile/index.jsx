import Image from 'next/image'
import ProfileStadiumForm from './ProfileStadiumForm'
import ProfilePlayersStructure from './PlayersStructure'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import dynamic from 'next/dynamic'
const GameBrief = dynamic(() => import('./GameBrief'), {
  ssr: false,
})

const GameProfile = () => {
  const { currentTour } = useSelector((store) => store.tours)

  return (
    <main className="flex w-full flex-col justify-between gap-2 lg:flex-row">
      <div className="h-full w-full lg:w-1/2">
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
        {currentTour?.status === TOUR.notStartedTransfer && (
          <ProfileStadiumForm />
        )}
      </div>
      <GameBrief />
    </main>
  )
}

export default GameProfile
