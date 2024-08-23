'use client'
import { useState } from 'react'
import GameNavigation from '@/src/components/GameNavigation'
import { tabs } from '../../utils/tabs.util'
import CurrentTab from '@/src/components/CurrentTab'

const Play = () => {
  const [currentTab, setCurrentTab] = useState(tabs.GameProfile)

  return (
    <section className="flex flex-col gap-6 bg-neutral-200 pb-6 text-neutral-700">
      <GameNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <CurrentTab currentTab={currentTab} />
    </section>
  )
}

export default Play
