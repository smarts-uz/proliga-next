import Tabs from './TourTabs'

const TeamTabs = () => {
  return (
    <>
      <div className="relative mx-auto hidden w-full max-w-screen-2xl flex-1 lg:block">
        <Tabs />
      </div>
      <div className="block w-full lg:hidden">
        <Tabs />
      </div>
    </>
  )
}

export default TeamTabs
