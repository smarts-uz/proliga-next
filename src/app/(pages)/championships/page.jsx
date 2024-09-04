'use client'

import Gutter from '../../../components/Gutter'
import Championship from './components/Championship'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetCompetition } from 'app/hooks/competition/useGetCompetition/useGetCompetition'
import { useGetTeams } from 'app/hooks/competition/useGetTeams/useGetTeams'

const Championships = () => {
  const { competition } = useSelector((state) => state.competition)
  const { userTable, userAuth } = useSelector((state) => state.auth)
  const { getCompetition, isLoading, error } = useGetCompetition()
  const { getTeams, isLoading: teamIsLoading, error: teamError } = useGetTeams()

  useEffect(() => {
    const fetch = async () => {
      await getCompetition()
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (userTable) {
      const fetch = async () => {
        await getTeams()
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTable])

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
            {userAuth &&
              userTable &&
              competition.map((item, index) => (
                <Championship key={index} item={item} />
              ))}
          </div>
        )}
      </section>
    </Gutter>
  )
}

export default Championships
