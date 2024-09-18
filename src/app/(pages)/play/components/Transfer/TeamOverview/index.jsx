import TeamMaxTransfers from './TeamMaxTransfers'
import TeamPrice from './TeamPrice'
import TeamBalance from './TeamBalance'
import TeamMaxClubMembers from './TeamMaxClubMembers'

const TeamOverview = () => {
  return (
    <section className="mb-2 flex flex-wrap justify-evenly gap-y-0.5 bg-neutral-950 pb-2 text-neutral-50 transition-all hover:border-opacity-100 sm:justify-between md:gap-0">
      <TeamPrice />
      <TeamBalance />
      <TeamMaxTransfers />
      <TeamMaxClubMembers />
    </section>
  )
}

export default TeamOverview
