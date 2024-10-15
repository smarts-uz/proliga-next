/* eslint-disable @next/next/no-img-element */
'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLastVisitedTeam } from 'app/lib/features/currentTeam/currentTeam.slice'
import { setCurrentCompetition } from 'app/lib/features/competition/competition.slice'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { fetchSeason } from 'app/lib/features/season/season.thunk'
import { fetchPlayers } from 'app/lib/features/players/players.thunk'
import { fetchClubs } from 'app/lib/features/clubs/clubs.thunk'
import { fetchPackages } from 'app/lib/features/packages/packages.thunk'
import { fetchBanners } from 'app/lib/features/banner/banner.thunk'
import { TABS } from 'app/utils/tabs.util'

const Play = ({ params }) => {
  const dispatch = useDispatch()
  const { gameTab, isLoading: tourLoading } = useSelector(
    (state) => state.tours
  )
  const { competition, isLoading } = useSelector((state) => state.competition)
  const { currentTeam, isLoading: teamLoading } = useSelector(
    (state) => state.currentTeam
  )

  useEffect(() => {
    dispatch(fetchCompetition())
    dispatch(fetchSeason())
    dispatch(fetchPackages())
    dispatch(fetchBanners())
  }, [dispatch])

  useEffect(() => {
    if (competition?.length > 0) {
      dispatch(setCurrentCompetition(params.league))
    }
  }, [dispatch, params.league, competition])

  useEffect(() => {
    dispatch(setLastVisitedTeam(`${params.league}/${params.id}`))
  }, [currentTeam, dispatch, params])

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

  return (
    <>
      <section
        className={`flex flex-col gap-4 overflow-hidden bg-gradient-to-tr from-red-800 to-blue-900 pb-4 ${
          gameTab === TABS.GameProfile || gameTab === TABS.Transfer
            ? 'pt-20'
            : 'pt-16'
        } text-neutral-700`}
      >
        <GameNavigation currentTab={gameTab} />
        <CurrentTab paramsId={params.id} currentTab={gameTab} />
      </section>
    </>
  )
}

export default Play
