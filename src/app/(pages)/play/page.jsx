'use client'

import { useEffect } from 'react'
import GameNavigation from './components/GameNavigation'
import CurrentTab from './components/CurrentTab'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const Play = () => {
  const { tab } = useSelector((state) => state.game)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!userAuth || !userTable) {  
      return router.push('/login')
    }
  }, [userAuth, userTable, router])
  return (
    <section className="flex flex-col gap-6 overflow-hidden bg-neutral-700 pb-6 text-neutral-700">
      <GameNavigation currentTab={tab} />
      <CurrentTab currentTab={tab} />
    </section>
  )
}

export default Play
