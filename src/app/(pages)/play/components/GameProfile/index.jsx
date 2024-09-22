import Image from 'next/image'
import Gutter from '../../../../../components/Gutter'
import GameBrief from './GameBrief'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import ProfileStadiumForm from './ProfileStadiumForm'
import ProfilePlayersStructure from './PlayersStructure'

const GameProfile = () => {
  const { currentTour } = useSelector((store) => store.tours)

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
        <div className="h-full w-full lg:w-1/2 xl:w-[45%]">
          <div className="relative h-full w-full">
            <Image
              src="/icons/stadium.svg"
              alt="stadium"
              width={700}
              height={600}
              className="w-full rounded-sm"
            />
            <ProfilePlayersStructure />
          </div>
          {currentTour?.status === TOUR.notStartedTransfer && (
            <ProfileStadiumForm />
          )}
        </div>
        <GameBrief />
      </main>
    </Gutter>
  )
}

export default GameProfile
