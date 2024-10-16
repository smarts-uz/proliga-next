import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'
import { useSelector } from 'react-redux'

const TeamTabs = () => {
  const { gameTab } = useSelector((state) => state.tours)

  return (
    <>
      <div className="hidden lg:block">
        <Gutter>
          <Tabs />
        </Gutter>
      </div>
      <div className="block lg:hidden">
        <Tabs />
      </div>
    </>
  )
}

export default TeamTabs
