import GameProfile from '../GameProfile'
import Statistics from '../Statistics'
import Transfer from '../Transfer'
import Journal from '../Journal'
import Tournament from '../Tournament'
import { tabs } from '../../../../utils/tabs.util'

const CurrentTab = ({ currentTab }) => {
  return (
    <>
      {currentTab === tabs.GameProfile && <GameProfile />}
      {currentTab === tabs.Statistics && <Statistics />}
      {currentTab === tabs.Transfer && <Transfer />}
      {currentTab === tabs.Journal && <Journal />}
      {currentTab === tabs.Tournament && <Tournament />}
    </>
  )
}

export default CurrentTab
