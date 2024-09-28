import Image from 'next/image'
import Gutter from '../../../../../components/Gutter'
import GameBrief from './GameBrief'
import { useDispatch, useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import ProfileStadiumForm from './ProfileStadiumForm'
import ProfilePlayersStructure from './PlayersStructure'
import { useEffect } from 'react'
import { fetchPlayerResult } from 'app/lib/features/playerResult/playerResult.thunk'

const GameProfile = () => {
  const dispatch = useDispatch()
  const { currentTour } = useSelector((store) => store.tours)
  const { currentCompetition } = useSelector((store) => store.competition)
  const { season } = useSelector((store) => store.season)
  const page = 0
  const perPage = 1000


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
