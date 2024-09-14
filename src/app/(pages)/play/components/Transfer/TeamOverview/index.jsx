import TeamMaxTransfers from './TeamMaxTransfers'
import TeamPrice from './TeamPrice'
import TeamBalance from './TeamBalance'
import TeamMaxClubMembers from './TeamMaxClubMembers'

const TeamOverview = () => {
  return (
    <section className="mb-4 grid grid-cols-2 gap-1 rounded-xl border border-primary border-opacity-50 bg-neutral-950 p-6 text-neutral-50 transition-all hover:border-opacity-100 md:grid-cols-3 md:gap-0 xl:grid-cols-4">
      <TeamPrice />
      <TeamBalance />
      <TeamMaxTransfers />
      <TeamMaxClubMembers />
    </section>
  )
}

export default TeamOverview
