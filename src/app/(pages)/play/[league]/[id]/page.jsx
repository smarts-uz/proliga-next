'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useGetTeamPlayers } from 'app/hooks/competition/useGetTeamPlayers/useGetTeamPlayers'
import { useGetTeam } from 'app/hooks/transfer/useGetTeam/useGetTeam'
import { useGetTourTeam } from 'app/hooks/transfer/useGetTourTeam/useGetTourTeam'

const Play = ({ params }) => {
  const { tab, teamCount } = useSelector((state) => state.game)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const router = useRouter()
  const { getTeamPlayers, isLoading, error } = useGetTeamPlayers()
  const { getTeam, isLoading: teamLoading, error: teamError } = useGetTeam()
  const {
    getTourTeam,
    isLoading: tourTeamLoading,
    error: tourTeamError,
  } = useGetTourTeam()
  console.log(params.id)

  useEffect(() => {
    if (params.id && userTable && userAuth) {
      const fetch = async () => {
        await getTeamPlayers({ team_id: params.id })
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth, params.id, teamCount, userTable])

  useEffect(() => {
    if (userAuth && userTable && params.id) {
      const fetch = async () => {
        await getTeam(params.id)
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth, params.id, userTable])

  useEffect(() => {
    if (userAuth && userTable && params.id) {
      const fetch = async () => {
        await getTourTeam(params.id)
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth, params.id])

  // useEffect(() => {
  //   if (!userAuth || !userTable) {
  //     setTimeout(() => toast.warning('The user is not logged in!'), 500)
  //     return router.push('/login')
  //   }
  // }, [userAuth, userTable, router])
  return (
    <section className="flex flex-col gap-6 overflow-hidden bg-neutral-700 pb-6 text-neutral-700">
      <GameNavigation currentTab={tab} />
      <CurrentTab currentTab={tab} />
    </section>
  )
}

export default Play
