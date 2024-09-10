'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector } from 'react-redux'

const Play = ({ params }) => {
  const { gameTab } = useSelector((state) => state.tabs)

  return (
    <section className="flex flex-col gap-6 overflow-hidden bg-neutral-700 pb-6 text-neutral-700">
      <GameNavigation currentTab={gameTab} />
      <CurrentTab paramsId={params.id} currentTab={gameTab} />
    </section>
  )
}

export default Play
