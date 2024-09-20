import GameProfile from '../GameProfile'
import Statistics from '../Statistics'
import Transfer from '../Transfer'
import Journal from '../Journal'
import Tournament from '../Tournament'
import { TABS } from '../../../../utils/tabs.util'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentTeam } from 'app/lib/features/currentTeam/currentTeam.thunk'
import { fetchTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.thunk'
import { fetchTourTeams } from 'app/lib/features/tourTeams/tourTeams.thunk'
import { useEffect } from 'react'
import { fetchMatches } from 'app/lib/features/matches/mathes.thunk'
import { fetchTours } from 'app/lib/features/tours/tours.thunk'
import { setTeamBalance } from 'app/lib/features/tourTeams/tourTeams.slice'
import { fetchNews } from 'app/lib/features/news/news.thunk'
import { setTab } from 'app/lib/features/tours/tours.slice'

const CurrentTab = ({ currentTab, paramsId }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { season } = useSelector((state) => state.season)
  const { teamPrice } = useSelector((store) => store.teamPlayers)

  useEffect(() => {
    if (currentTeam?.is_team_created) {
      dispatch(setTab(TABS.GameProfile))
    } else {
      dispatch(setTab(TABS.Transfer))
    }
  }, [dispatch, currentTeam])

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  useEffect(() => {
    if (userAuth && userTable && paramsId) {
      const fetch = async () => {
        dispatch(fetchCurrentTeam({ id: paramsId }))
      }
      fetch()
    }
  }, [userAuth, paramsId, userTable, dispatch])

  useEffect(() => {
    if (userTable && paramsId && currentTour?.id) {
      const fetch = async () => {
        dispatch(
          fetchTeamPlayers({ team_id: paramsId, tour_id: currentTour.id })
        )
        dispatch(fetchTourTeams({ team_id: paramsId }))
      }
      fetch()
    }
  }, [paramsId, userTable, currentTour, dispatch])

  useEffect(() => {
    if (currentTeam?.competition_id) {
      const fetch = async () => {
        dispatch(fetchTours({ competition_id: currentTeam.competition_id.id }))
      }
      fetch()
    }
  }, [currentTeam, dispatch])

  useEffect(() => {
    if (season?.id) {
      dispatch(fetchMatches({ season_id: season.id }))
    }
  }, [season, dispatch])

  useEffect(() => {
    dispatch(
      setTeamBalance({
        price: teamPrice ?? 0,
        balance: currentTeam?.balance ?? 100,
      })
    )
  }, [teamPrice, dispatch, currentTeam])

  return (
    <>
      {currentTab === TABS.GameProfile && <GameProfile />}
      {currentTab === TABS.Transfer && <Transfer paramsId={paramsId} />}
      {currentTab === TABS.Statistics && <Statistics />}
      {currentTab === TABS.Journal && <Journal />}
      {currentTab === TABS.Tournament && <Tournament />}
    </>
  )
}

export default CurrentTab
