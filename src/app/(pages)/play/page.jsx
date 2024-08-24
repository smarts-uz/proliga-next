'use client'
import { useState } from 'react'
import GameNavigation from './components/GameNavigation'
import { tabs } from '../../utils/tabs.util'
import CurrentTab from './components/CurrentTab'

const Play = () => {
  const [currentTab, setCurrentTab] = useState(tabs.Transfer)

  return (
    <section className="flex flex-col gap-6 bg-neutral-100 pb-6 text-neutral-700">
      <GameNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <CurrentTab currentTab={currentTab} />
    </section>
  )
}

export default Play
