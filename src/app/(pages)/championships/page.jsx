'use client'

import Gutter from '../../../components/Gutter'
import Championship from './components/Championship'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeams } from 'app/lib/features/teams/teams.thunk'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { selectCompetition } from 'app/lib/features/competition/competition.selector'
import { fetchSeason } from 'app/lib/features/season/season.thunk'
import { setTab } from 'app/lib/features/tours/tours.slice'
import { TABS } from 'app/utils/tabs.util'
import { fetchNews } from 'app/lib/features/news/news.thunk'

const Championships = () => {
  const dispatch = useDispatch()
  const { userTable } = useSelector((state) => state.auth)
  const selectedCompetition = useSelector(selectCompetition)
  const { isLoading } = useSelector((state) => state.competition)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  useEffect(() => {
    dispatch(fetchCompetition())
    dispatch(fetchSeason())
  }, [dispatch])

  useEffect(() => {
    if (userTable) {
      dispatch(
        fetchTeams({
          user_id: userTable.id,
        })
      )
    }
  }, [dispatch, userTable])

  useEffect(() => {
    if (currentTeam?.is_team_created) {
      dispatch(setTab(TABS.GameProfile))
      return
    }
    dispatch(setTab(TABS.Transfer))
  }, [dispatch, currentTeam])

  return (
    <Gutter>
      <section className="my-8 w-full rounded-2xl bg-neutral-900 p-6 shadow shadow-neutral-400">
        <h2 className="mb-4 text-2xl font-bold">Ligalar</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {selectedCompetition.map((game, index) => (
              <Championship key={index} game={game} />
            ))}
          </div>
        )}
      </section>
    </Gutter>
  )
}

export default Championships
