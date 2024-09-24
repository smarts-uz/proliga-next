import { useTranslation } from 'react-i18next'
import RankingTeams from './Teams'
import { fetchTopTeams } from 'app/lib/features/teams/teams.thunk'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RankingPlayers from './Players'

const TopTeams = () => {
  const { t } = useTranslation()
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
    }
  }, [currentCompetition, season, dispatch])

  return (
    <div className="flex h-min w-full flex-col gap-8 lg:w-1/3">
      <RankingTeams />
      <RankingPlayers />
    </div>
  )
}

export default TopTeams
