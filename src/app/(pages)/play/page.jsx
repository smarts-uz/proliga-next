'use client'
import { useState } from 'react'
import News from '@/src/components/News'
import GameNavigation from '@/src/components/GameNavigation'
import GameProfile from '@/src/components/GameProfile'
import Stastics from '@/src/components/Statistics'
import Transfer from '@/src/components/Transfer'
import Tournament from '@/src/components/Tournament'
import Championship from '@/src/components/Championship'
import Journal from '@/src/components/Journal'

const Play = () => {
  const [currentTab, setCurrentTab] = useState('Championship')

  return (
    <div className="bg-neutral-200 pb-6 text-neutral-700">
      <GameNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'GameProfile' && <GameProfile />}
      {currentTab === 'Statistics' && <Stastics />}
      {currentTab === 'Transfer' && <Transfer />}
      {currentTab === 'Championship' && <Championship />}
      {currentTab === 'Journal' && <Journal />}
      {currentTab === 'Tournament' && <Tournament />}
      <News />
    </div>
  )
}

export default Play
