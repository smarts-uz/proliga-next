import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import PlayersTable from './PlayersTable'
import ChangeCaptainForm from '../ChangeCaptainForm'
import { useDispatch, useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import { useEffect } from 'react'
import ToursHistory from './ToursHistory'
import { fetchPlayers } from 'app/lib/features/players/players.thunk'
import { fetchClubs } from 'app/lib/features/clubs/clubs.thunk'
import Overview from './TeamOverview'

const Transfer = ({ paramsId }) => {
  const dispatch = useDispatch()
  const { currentTour } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  useEffect(() => {
    if (currentTeam?.competition_id?.id && paramsId) {
      dispatch(
        fetchPlayers({
          competition_id: currentTeam.competition_id.id,
        })
      )
      dispatch(fetchClubs({ competition_id: currentTeam.competition_id.id }))
    }
  }, [dispatch, currentTeam, paramsId, currentTour])

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 md:min-h-max lg:flex-row">
        <div className="flex h-full flex-col lg:w-3/5">
          <Overview />
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
          {currentTour?.status === TOUR.notStartedTransfer && (
            <ChangeCaptainForm />
          )}
        </div>
        {<PlayersTable />}
        {currentTour?.status === TOUR.inProcess && <ToursHistory />}
        {currentTour?.status === TOUR.completed && <ToursHistory />}
      </main>
    </Gutter>
  )
}

export default Transfer
