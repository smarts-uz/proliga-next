import Gutter from '../../../../../components/Gutter'
import Tabs from './TourTabs'

const TeamTabs = () => {
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
