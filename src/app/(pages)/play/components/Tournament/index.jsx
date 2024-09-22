import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchAllTeams } from 'app/lib/features/teams/teams.thunk'
import { useDispatch } from 'react-redux'
import Gutter from '../../../../../components/Gutter'
import TopTeams from '../TopTeams'
import TournamentTable from './Table'
import TournamentPagination from './Pagination'

const Tournament = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(16)
  const { currentCompetition } = useSelector((store) => store.competition)
  const { season } = useSelector((state) => state.season)

  useEffect(() => {
    if (currentCompetition?.id && season?.id) {
      dispatch(
        fetchAllTeams({
          competition_id: currentCompetition?.id,
          season_id: season?.id,
          page,
          perPage,
        })
      )
    }
  }, [dispatch, currentCompetition, season, page, perPage])

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const decrementPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  return (
    <Gutter>
      <section className="flex flex-col gap-4 lg:flex-row">
        <div className="flex h-full max-h-[40rem] min-h-[40rem] w-full table-auto flex-col overflow-x-auto rounded-2xl bg-black p-6 text-neutral-200 lg:w-2/3">
          <TournamentTable />
          <TournamentPagination
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            page={page}
          />
        </div>
        <TopTeams />
      </section>
    </Gutter>
  )
}

export default Tournament
