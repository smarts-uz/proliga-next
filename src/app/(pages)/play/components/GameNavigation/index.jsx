import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'
import { useSelector } from 'react-redux'
import { TABS } from '../../../../utils/tabs.util'

const GameNavigation = () => {
  const { gameTab } = useSelector((state) => state.tours)

  return (
    <>
      <div className="hidden lg:block">
        <Gutter>
          {gameTab === TABS.GameProfile && <Tabs />}
          {gameTab === TABS.Transfer && <Tabs />}
        </Gutter>
      </div>
      <div className="block lg:hidden">
        {gameTab === TABS.GameProfile && <Tabs />}
        {gameTab === TABS.Transfer && <Tabs />}
      </div>
    </>
  )
}

export default GameNavigation
