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
import Gutter from 'components/Gutter'

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
    <div>
      {/* <Gutter> */}
      {/* <div className="absolute -left-20 bottom-0 top-0 mt-24 hidden h-[600px] w-[120px] overflow-hidden rounded bg-neutral-500 2xl:block">
        <img
          src={'/images/banner.jpg'}
          alt={'banner'}
          className="h-full w-full"
        />
      </div>
      <div className="absolute -right-20 bottom-0 top-0 mt-24 hidden h-[600px] w-[120px] overflow-hidden rounded bg-neutral-500 2xl:block">
        <img
          src={'/images/banner.jpg'}
          alt={'banner'}
          className="h-full w-full"
        />
      </div> */}
      {/* </Gutter> */}
      <section className="flex flex-col gap-4 overflow-hidden bg-gradient-to-tr from-red-900 to-blue-950 pb-4 pt-20 text-neutral-700">
        <GameNavigation currentTab={gameTab} />
        <CurrentTab paramsId={params.id} currentTab={gameTab} />
      </section>
    </div>
  )
}

export default Play
