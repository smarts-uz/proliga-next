import { useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import { fetchAllTeams } from 'app/lib/features/teams/teams.thunk'
import { useDispatch } from 'react-redux'
import TopTeams from '../TopTeams'
import TournamentTable from './Table'
import TournamentPagination from './Pagination'
import TournamentSelectedTour from './Filters'
import TournamentSkeleton from './Skeleton'

const Tournament = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(12)
  const { currentCompetition, isLoading: competitionLoading } = useSelector(
    (store) => store.competition
  )
  const { teamsLoading } = useSelector((store) => store.teams)
  const { season, isLoading: seasonLoading } = useSelector(
    (state) => state.season
  )
  const { currentTour, isLoading: tourLoading } = useSelector(
    (state) => state.tours
  )
  const [tour, setTour] = useState(currentTour?.id || 0)

  const isLoading = useMemo(
    () => teamsLoading || tourLoading || competitionLoading || seasonLoading,
    [teamsLoading, tourLoading, competitionLoading, seasonLoading]
  )

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

  if (isLoading) return <TournamentSkeleton />

  return (
    <section className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col overflow-x-auto rounded-xl bg-black px-2 py-4 text-neutral-200 xs:px-3 md:p-5 lg:w-2/3">
        <TournamentSelectedTour setTour={setTour} tour={tour} />
        <TournamentTable />
        <TournamentPagination
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          page={page}
          perPage={perPage}
        />
      </div>
      <TopTeams />
    </section>
  )
}

export default Tournament
