'use client'

const Championship = dynamic(() => import('./components/Championship'), {
  ssr: false,
})
const ChampionshipsTitle = dynamic(() => import('./components/Title'), {
  ssr: false,
})
import Gutter from '../../../components/Gutter'
import dynamic from 'next/dynamic'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserTeams } from 'app/lib/features/teams/teams.thunk'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { selectCompetition } from 'app/lib/features/competition/competition.selector'
import { fetchSeason } from 'app/lib/features/season/season.thunk'
import { ChampionshipSkeleton } from './components/Skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import AnimatedBackground from 'components/AnimatedBackground'

const Championships = () => {
  const dispatch = useDispatch()
  const selectedCompetition = useSelector(selectCompetition)
  const { isLoading: competitionLoading } = useSelector(
    (state) => state.competition
  )
  const { userTable } = useSelector((state) => state.auth)
  const { season, isLoading: seasonLoading } = useSelector(
    (state) => state.season
  )
  const { isLoading: teamsLoading } = useSelector((state) => state.teams)

  useEffect(() => {
    dispatch(fetchCompetition())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchSeason())
  }, [dispatch])

  useEffect(() => {
    if (userTable && season?.id) {
      dispatch(
        fetchUserTeams({
          user_id: userTable.id,
          season_id: season.id,
        })
      )
    }
  }, [dispatch, userTable, season.id])

  const isLoading = useMemo(
    () => competitionLoading || seasonLoading || teamsLoading,
    [competitionLoading, seasonLoading, teamsLoading]
  )

  return (
    <>
      <AnimatedBackground />
      <Gutter>
        <section className="mb-4 mt-8 min-h-96 w-full rounded-lg bg-neutral-900 p-5 shadow shadow-neutral-400 md:mt-6 md:min-h-44">
          {isLoading ? (
            <Skeleton className="mb-4 h-8 w-48" />
          ) : (
            <ChampionshipsTitle />
          )}
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {[...Array(4)].map((_, index) => (
                <ChampionshipSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {selectedCompetition.map((game, index) => (
                <Championship key={index} game={game} />
              ))}
            </div>
          )}
        </section>
      </Gutter>
    </>
  )
}

export default Championships
