'use client'
import TeamProfile from '../../components/TeamProfile'
import TeamTabs from '../../components/GameNavigation'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedTeam } from 'app/lib/features/currentTeam/currentTeam.thunk'
import Gutter from 'components/Gutter'
import { fetchTeamViewTours } from 'app/lib/features/tours/tours.thunk'
import { fetchTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.thunk'
import { fetchPlayerPoint } from 'app/lib/features/playerPoint/playerPoint.thunk'
import { fetchPlayers } from 'app/lib/features/players/players.thunk'
import { fetchSeason } from 'app/lib/features/season/season.thunk'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { setCurrentCompetition } from 'app/lib/features/competition/competition.slice'
import { fetchTourTeams } from 'app/lib/features/tourTeams/tourTeams.thunk'

const Play = ({ params }) => {
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const { currentTour } = useSelector((store) => store.tours)
  const { GOA, DEF, MID, STR } = useSelector((store) => store.teamPlayers)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )
  const { competition } = useSelector((store) => store.competition)

  useEffect(() => {
    if (params?.id) {
      dispatch(fetchSelectedTeam({ id: params.id }))
    }
  }, [dispatch, params])

  useEffect(() => {
    if (currentTeam && +currentTeam?.id === +params.id) {
      const fetch = async () => {
        dispatch(
          fetchTeamViewTours({
            competition_id: currentTeam.competition_id.id,
            registered_tour_id: currentTeam.registered_tour_id,
          })
        )
      }
      fetch()
    }
  }, [currentTeam, dispatch, params])

  useEffect(() => {
    if (params?.id && currentTour?.id) {
      const fetch = async () => {
        dispatch(
          fetchTeamPlayers({
            team_id: params?.id,
            tour_id: currentTour.id,
          })
        )
      }
      fetch()
    }
  }, [params, currentTour, dispatch])

  useEffect(() => {
    const teamPlayersId = []
    teamConcat.forEach((player) => {
      player.name && teamPlayersId.push(player.player_id)
    })

    if (
      currentTour?.id &&
      currentTeam?.competition_id?.id &&
      teamPlayersId?.length > 0 &&
      currentTeam?.id === +params.id
    ) {
      dispatch(
        fetchPlayerPoint({
          competition_id: currentTeam.competition_id.id,
          tour_id: currentTour.id,
          playerIds: teamPlayersId,
        })
      )
    }
  }, [dispatch, currentTour, currentTeam, teamConcat, params])

  useEffect(() => {
    if (currentTeam?.competition_id?.id && currentTeam?.id === +params.id) {
      dispatch(
        fetchPlayers({
          competition_id: currentTeam.competition_id.id,
        })
      )
    }
  }, [dispatch, currentTeam, params])

  useEffect(() => {
    dispatch(fetchCompetition())
    dispatch(fetchSeason())
  }, [dispatch])

  useEffect(() => {
    if (competition?.length > 0) {
      dispatch(setCurrentCompetition(params.league))
    }
  }, [dispatch, params.league, competition])

  useEffect(() => {
    if (params.id) {
      const fetch = async () => {
        dispatch(
          fetchTourTeams({
            team_id: params.id,
          })
        )
      }
      fetch()
    }
  }, [params.id, currentTour, dispatch, currentTeam])

  return (
    <div
      className={`flex min-h-screen flex-col gap-4 overflow-hidden bg-gradient-to-tr from-red-800 to-blue-900 pb-6 pt-20 text-neutral-700`}
    >
      <Gutter>
        <section className={`flex flex-col gap-4 overflow-hidden`}>
          <TeamTabs />
          <TeamProfile />
        </section>
      </Gutter>
    </div>
  )
}

export default Play
