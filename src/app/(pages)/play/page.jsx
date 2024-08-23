'use client'
import { useState } from 'react'
import News from '@/src/components/News'
import GameNavigation from '@/src/components/GameNavigation'
import GameProfile from '@/src/components/GameProfile'
import Statistics from '@/src/components/Statistics'
import Transfer from '@/src/components/Transfer'
import Tournament from '@/src/components/Tournament'
import Championship from '@/src/components/Championship'
import Journal from '@/src/components/Journal'
import { tabs } from '../../utils/tabs.util'

const Play = () => {
  const [currentTab, setCurrentTab] = useState(tabs.GameProfile)

  return (
    <div className="bg-neutral-200 pb-6 text-neutral-700">
      <GameNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === tabs.GameProfile && <GameProfile />}
      {currentTab === tabs.Statistics && <Statistics />}
      {currentTab === tabs.Transfer && <Transfer />}
      {currentTab === tabs.Championship && <Championship />}
      {currentTab === tabs.Journal && <Journal />}
      {currentTab === tabs.Tournament && <Tournament />}
      <News />
    </div>
  )
}

export default Play
