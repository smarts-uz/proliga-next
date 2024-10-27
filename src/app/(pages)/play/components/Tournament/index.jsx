import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchAllTeams } from 'app/lib/features/teams/teams.thunk'
import { useDispatch } from 'react-redux'
import TopTeams from '../TopTeams'
import TournamentTable from './Table'
import TournamentPagination from './Pagination'
import TournamentSelectedTour from './Filters'

const Tournament = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(13)
  const { currentCompetition } = useSelector((store) => store.competition)
  const { teamsLoading } = useSelector((store) => store.teams)
  const { season } = useSelector((state) => state.season)
  const { currentTour } = useSelector((state) => state.tours)
  const [tour, setTour] = useState(currentTour?.id || 0)

  useEffect(() => {
    if (currentCompetition?.id && season?.id && currentTour?.id) {
      dispatch(
        fetchAllTeams({
          competition_id: currentCompetition?.id,
          season_id: season?.id,
          tour_id: tour,
          page,
          perPage,
        })
      )
    }
  }, [dispatch, currentCompetition, season, page, perPage, tour, currentTour])

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const decrementPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0))
  }
  return (
    <section className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col overflow-x-auto rounded-2xl bg-black p-4 text-neutral-200 md:p-6 lg:w-2/3">
        {teamsLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="loader" />
          </div>
        ) : (
          <>
            <TournamentSelectedTour setTour={setTour} tour={tour} />
            <TournamentTable />
            <TournamentPagination
              incrementPage={incrementPage}
              decrementPage={decrementPage}
              page={page}
              perPage={perPage}
            />
          </>
        )}
      </div>
      <TopTeams />
    </section>
  )
}

export default Tournament
