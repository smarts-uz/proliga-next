import RankingTeams from './Teams'
import RankingPlayers from './Players'
import { useSelector } from 'react-redux'
import TopTeamsSkeleton from './Skeleton'

const TopTeams = () => {
  const { isLoading: teamsLoading } = useSelector((store) => store.teams)
  const { isLoading: playersLoading } = useSelector((store) => store.players)

  const isLoading = teamsLoading || playersLoading

  if (isLoading) return <TopTeamsSkeleton />

  return (
    <div className="flex h-min w-full flex-col gap-2 lg:w-1/3">
      <RankingTeams />
      <RankingPlayers />
    </div>
  )
}

export default TopTeams
