'use client'

import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from './PlayersStructure'
import PlayersTable from './PlayersTable'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import TransferStadiumForm from './TransferStadiumForm'
import { useEffect } from 'react'
import { setTeamBalance } from 'app/lib/features/tourTeams/tourTeams.slice'
import { useDispatch } from 'react-redux'

const Transfer = () => {
  const dispatch = useDispatch()
  const { currentTour } = useSelector((state) => state.tours)
  const { teamPrice } = useSelector((store) => store.teamPlayers)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  useEffect(() => {
    if (teamPrice) {
      dispatch(
        setTeamBalance({
          price: teamPrice,
          balance: currentTeam?.balance ?? 100,
        })
      )
    }
  }, [teamPrice, dispatch, currentTeam])

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 md:min-h-max lg:flex-row">
        <div className="flex h-full flex-col lg:w-1/2">
          <div className="relative h-full w-full lg:w-full">
            <Image
              src="/icons/stadium.svg"
              alt="stadium"
              width={700}
              height={600}
              draggable={false}
              className="w-full select-none rounded-sm"
            />
            {currentTour?.status === TOUR.notStartedTransfer && (
              <PlayersStructure />
            )}
            {currentTour?.status === TOUR.completed && (
              <PlayersStructure allowDelete={false} />
            )}
            {currentTour?.status === TOUR.inProcess && (
              <PlayersStructure allowDelete={false} />
            )}
          </div>
          <TransferStadiumForm />
        </div>
        <PlayersTable />
      </main>
    </Gutter>
  )
}

export default Transfer
