import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'
import NavigationTabs from './NavigationTabs'

const GameNavigation = ({ currentTab, setCurrentTab }) => {
  return (
    <Gutter>
      <NavigationTabs />
      <Tabs />
    </Gutter>
  )
}

export default GameNavigation
