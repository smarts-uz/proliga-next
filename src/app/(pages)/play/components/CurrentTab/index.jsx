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
import { fetchTours } from 'app/lib/features/tours/tours.thunk'

const CurrentTab = ({ currentTab, paramsId }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  useEffect(() => {
    if (userAuth && userTable && paramsId) {
      const fetch = async () => {
        dispatch(fetchCurrentTeam({ id: paramsId }))
      }
      fetch()
    }
  }, [userAuth, paramsId, userTable, dispatch])

  useEffect(() => {
    if (userAuth && userTable && paramsId && currentTour?.id) {
      const fetch = async () => {
        dispatch(
          fetchTeamPlayers({ team_id: paramsId, tour_id: currentTour.id })
        )
        dispatch(fetchTourTeams({ team_id: paramsId }))
      }
      fetch()
    }
  }, [userAuth, paramsId, userTable, dispatch, currentTour])

  useEffect(() => {
    if (currentTeam?.competition_id) {
      const fetch = async () => {
        dispatch(fetchTours({ competition_id: currentTeam.competition_id.id }))
      }
      fetch()
    }
  }, [currentTeam, dispatch])

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
