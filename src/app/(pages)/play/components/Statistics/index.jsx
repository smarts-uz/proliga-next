import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPlayerResult } from 'app/lib/features/playerResult/playerResult.thunk'
import TopTeams from '../TopTeams'
import StatisticsTable from './Table'

const Statistics = () => {
  const dispatch = useDispatch()
  const { currentCompetition } = useSelector((store) => store.competition)
  const { season } = useSelector((state) => state.season)

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
    <section className="flex w-full flex-col gap-4 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col gap-4 overflow-x-auto rounded-2xl bg-black p-4 text-neutral-200 md:p-6 lg:w-2/3">
        <StatisticsTable />
        {/* <StatisticsPagination
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          page={page}
        /> */}
      </div>
      <TopTeams />
    </section>
  )
}

export default Statistics
