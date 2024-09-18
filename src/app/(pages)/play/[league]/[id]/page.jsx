'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCurrentCompetition } from 'app/lib/features/competition/competition.slice'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { fetchSeason } from 'app/lib/features/season/season.thunk'
import { fetchPlayers } from 'app/lib/features/players/players.thunk'
import { fetchClubs } from 'app/lib/features/clubs/clubs.thunk'
import { setTeamBalance } from 'app/lib/features/tourTeams/tourTeams.slice'

const Play = ({ params }) => {
  const dispatch = useDispatch()
  const { gameTab, isLoading: tourLoading } = useSelector(
    (state) => state.tours
  )
  const { competition, isLoading } = useSelector((state) => state.competition)
  const { currentTeam, isLoading: teamLoading } = useSelector(
    (state) => state.currentTeam
  )
  const { GOA, DEF, MID, STR } = useSelector((store) => store.teamPlayers)

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
    if (currentTeam?.competition_id?.id) {
      dispatch(
        fetchPlayers({
          competition_id: currentTeam.competition_id.id,
        })
      )
      dispatch(fetchClubs({ competition_id: currentTeam.competition_id.id }))
    }
  }, [dispatch, currentTeam])

  useEffect(() => {
    if (
      GOA?.length > 0 &&
      DEF?.length > 0 &&
      MID?.length > 0 &&
      STR?.length > 0
    ) {
      const newTeamPrice =
        GOA.reduce((acc, player) => acc + player.price, 0) +
        DEF.reduce((acc, player) => acc + player.price, 0) +
        MID.reduce((acc, player) => acc + player.price, 0) +
        STR.reduce((acc, player) => acc + player.price, 0)

      dispatch(
        setTeamBalance({
          price: newTeamPrice,
          balance: currentTeam?.balance ?? 100,
        })
      )
    }
  }, [GOA, DEF, MID, STR, dispatch, currentTeam])

  return (
    <section className="flex flex-col gap-4 overflow-hidden bg-gradient-to-tr from-red-900 to-blue-950 pb-4 text-neutral-700">
      <GameNavigation currentTab={gameTab} />
      <CurrentTab paramsId={params.id} currentTab={gameTab} />
    </section>
  )
}

export default Play
