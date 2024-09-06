import GameProfile from '../GameProfile'
import Statistics from '../Statistics'
import Transfer from '../Transfer'
import Journal from '../Journal'
import Tournament from '../Tournament'
import { TABS } from '../../../../utils/tabs.util'

const CurrentTab = ({ currentTab }) => {
  return (
    <>
      {currentTab === TABS.GameProfile && <GameProfile />}
      {currentTab === TABS.Transfer && <Transfer />}
      {currentTab === TABS.Statistics && <Statistics />}
      {currentTab === TABS.Journal && <Journal />}
      {currentTab === TABS.Tournament && <Tournament />}
    </>
  )
}

export default CurrentTab
