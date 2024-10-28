import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPlayerResult } from 'app/lib/features/playerResult/playerResult.thunk'
import TopTeams from '../TopTeams'
import StatisticsTable from './Table'
import Spinner from 'components/Spinner'

const Statistics = () => {
  const dispatch = useDispatch()
  const { currentCompetition } = useSelector((store) => store.competition)
  const { season } = useSelector((state) => state.season)
  const { isLoading } = useSelector((state) => state.playerResult)

  useEffect(() => {
    if (currentCompetition?.id && season?.id) {
      dispatch(
        fetchPlayerResult({
          competition_id: currentCompetition?.id,
          season_id: season?.id,
        })
      )
    }
  }, [dispatch, currentCompetition, season])

  return (
    <section className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col gap-4 overflow-x-auto rounded-2xl bg-black px-2 py-4 text-neutral-200 xs:px-3 md:p-5 lg:w-2/3">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="loader" />
          </div>
        ) : (
          <StatisticsTable />
        )}
      </div>
      <TopTeams />
    </section>
  )
}

export default Statistics
