import RankingTeams from './Teams'
import RankingPlayers from './Players'
import { fetchTopTeams } from 'app/lib/features/teams/teams.thunk'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopPlayers } from 'app/lib/features/players/players.thunk'

const TopTeams = () => {
  const dispatch = useDispatch()
  const { currentCompetition } = useSelector((state) => state.competition)
  const { season } = useSelector((state) => state.season)

  useEffect(() => {
    if (currentCompetition?.id && season?.id) {
      dispatch(
        fetchTopTeams({
          competition_id: currentCompetition?.id,
          season_id: season?.id,
        })
      )
      dispatch(
        fetchTopPlayers({
          competition_id: currentCompetition?.id,
        })
      )
    }
  }, [currentCompetition, season, dispatch])

  return (
    <div className="flex h-min w-full flex-col gap-4 lg:w-1/3">
      <RankingTeams />
      <RankingPlayers />
    </div>
  )
}

export default TopTeams
