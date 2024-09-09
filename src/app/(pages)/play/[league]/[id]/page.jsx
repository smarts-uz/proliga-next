'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useGetTourTeam } from 'app/hooks/transfer/useGetTourTeam/useGetTourTeam'

const Play = ({ params }) => {
  const router = useRouter()
  const { tab } = useSelector((state) => state.game)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const {
    getTourTeam,
    isLoading: tourTeamLoading,
    error: tourTeamError,
  } = useGetTourTeam()

  useEffect(() => {
    if (params.id && userTable && userAuth) {
      const fetch = async () => {
        await getTourTeam(params.id)
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth, params.id, userTable])

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   if (!userAuth || !userTable) {
  //     setTimeout(() => toast.warning('The user is not logged in!'), 500)
  //     return router.push('/login')
  //   }
  // }, [userAuth, userTable, router])
  return (
    <section className="flex flex-col gap-6 overflow-hidden bg-neutral-700 pb-6 text-neutral-700">
      <GameNavigation currentTab={tab} />
      <CurrentTab paramsId={params.id} currentTab={tab} />
    </section>
  )
}

export default Play
