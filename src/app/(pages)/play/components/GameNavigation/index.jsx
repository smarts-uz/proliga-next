import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'
import NavigationTabs from './NavigationTabs'
import { useSelector } from 'react-redux'
import { TABS } from '../../../../utils/tabs.util'

const GameNavigation = () => {
  const { gameTab } = useSelector((state) => state.tabs)

  return (
    <Gutter>
      <NavigationTabs />
      {gameTab === TABS.Transfer && <Tabs />}
      {gameTab === TABS.GameProfile && <Tabs />}
    </Gutter>
  )
}

export default GameNavigation
