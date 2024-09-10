'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector } from 'react-redux'

const Play = ({ params }) => {
  const { tab } = useSelector((state) => state.game)
  
  return (
    <section className="flex flex-col gap-6 overflow-hidden bg-neutral-700 pb-6 text-neutral-700">
      <GameNavigation currentTab={tab} />
      <CurrentTab paramsId={params.id} currentTab={tab} />
    </section>
  )
}

export default Play
