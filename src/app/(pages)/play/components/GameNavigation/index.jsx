import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'
import { useSelector } from 'react-redux'
import { TABS } from '../../../../utils/tabs.util'

const GameNavigation = () => {
  const { gameTab } = useSelector((state) => state.tours)

  return (
    <>
      {gameTab === TABS.GameProfile && <Tabs />}
      {gameTab === TABS.Transfer && <Tabs />}
    </>
  )
}

export default GameNavigation
