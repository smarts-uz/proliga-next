import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'
import NavigationTabs from './NavigationTabs'
import { useSelector } from 'react-redux'
import { TABS } from '../../../../utils/tabs.util'

const GameNavigation = () => {
  const { tab } = useSelector((state) => state.game)

  return (
    <Gutter>
      <NavigationTabs />
      {tab === TABS.Transfer && <Tabs />}
    </Gutter>
  )
}

export default GameNavigation
