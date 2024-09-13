import TeamMaxTransfers from './TeamMaxTransfers'
import TeamPrice from './TeamPrice'
import TeamBalance from './TeamBalance'
import TeamMaxClubMembers from './TeamMaxClubMembers'

const TeamOverview = () => {
  return (
    <section className="mb-4 grid gap-1 md:gap-0 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 rounded-xl bg-neutral-950 p-6 text-neutral-50">
      <TeamPrice />
      <TeamBalance />
      <TeamMaxTransfers />
      <TeamMaxClubMembers />
    </section>
  )
}

export default TeamOverview
