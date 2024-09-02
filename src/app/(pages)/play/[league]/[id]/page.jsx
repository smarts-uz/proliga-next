'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useGetTeamPlayers } from 'app/hooks/competition/useGetTeamPlayers/useGetTeamPlayers'

const Play = ({ params }) => {
  const { tab } = useSelector((state) => state.game)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const router = useRouter()
  const { getTeamPlayers, isLoading, error } = useGetTeamPlayers()

  useEffect(() => {
    if (userAuth && userTable && params.id) {
      const fetch = async () => {
        await getTeamPlayers({ team_id: params.id })
      }
      fetch()
    }
  }, [userAuth])

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
