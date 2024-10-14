import RankingTeams from './Teams'
import RankingPlayers from './Players'

const TopTeams = () => {
  return (
    <div className="flex h-min w-full flex-col gap-4 lg:w-1/3">
      <RankingTeams />
      <RankingPlayers />
    </div>
  )
}

export default TopTeams
