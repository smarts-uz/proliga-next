import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import Gutter from '../../../../../components/Gutter'
import GameBrief from './GameBrief'
import ChangeCaptainForm from '../ChangeCaptainForm'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import ToursHistory from '../Transfer/ToursHistory'

const GameProfile = () => {
  const { currentTour } = useSelector((store) => store.tours)

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="h-full w-full md:w-3/5">
          <div className="relative h-full w-full">
            <Image
              src="/icons/stadium.svg"
              alt="stadium"
              width={700}
              height={600}
              className="w-full rounded-sm"
            />
            <PlayersStructure allowDelete={false} />
          </div>
          {currentTour?.status === TOUR.notStartedTransfer && (
            <ChangeCaptainForm />
          )}
        </div>
        <GameBrief />
        <ToursHistory />
      </main>
    </Gutter>
  )
}

export default GameProfile
