import TeamMaxTransfers from './TeamMaxTransfers'
import TeamPrice from './TeamPrice'
import TeamBalance from './TeamBalance'
import TeamMaxClubMembers from './TeamMaxClubMembers'

const TeamOverview = () => {
  return (
    <section className="mb-2 flex flex-wrap justify-evenly sm:justify-between gap-1 rounded-xl border border-primary border-opacity-50 bg-neutral-950 px-6 py-4 text-neutral-50 transition-all hover:border-opacity-100 md:gap-0">
      <TeamPrice />
      <TeamBalance />
      <TeamMaxTransfers />
      <TeamMaxClubMembers />
    </section>
  )
}

export default TeamOverview
