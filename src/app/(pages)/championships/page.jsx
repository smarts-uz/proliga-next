'use client'

import Gutter from '../../../components/Gutter'
import Championship from './components/Championship'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeams } from 'app/lib/features/teams/teams.thunk'
import { selectTeams } from 'app/lib/features/teams/teams.selector'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { selectCompetition } from 'app/lib/features/competition/competition.selector'

const Championships = () => {
  const dispatch = useDispatch()
  const { userTable } = useSelector((state) => state.auth)
  const selectedTeams = useSelector(selectTeams)
  const selectedCompetition = useSelector(selectCompetition)
  const { isLoading } = useSelector((state) => state.competition)

  useEffect(() => {
    dispatch(fetchCompetition())
  }, [dispatch])

  useEffect(() => {
    if (userTable && selectedTeams.length === 0) {
      dispatch(
        fetchTeams({
          user_id: userTable.id,
        })
      )
    }
  }, [dispatch, userTable, selectedTeams])

  return (
    <Gutter>
      <section className="my-8 w-full rounded-2xl bg-neutral-800 p-6">
        <h2 className="mb-4 text-2xl font-bold">Leagues</h2>
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
