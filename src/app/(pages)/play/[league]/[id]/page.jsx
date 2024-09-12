'use client'

import GameNavigation from '../../components/GameNavigation'
import CurrentTab from '../../components/CurrentTab'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCurrentCompetition } from 'app/lib/features/competition/competition.slice'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import { fetchSeason } from 'app/lib/features/season/season.thunk'

const Play = ({ params }) => {
  const dispatch = useDispatch()
  const { gameTab } = useSelector((state) => state.tabs)
  const { competition } = useSelector((state) => state.competition)

  useEffect(() => {
    dispatch(fetchCompetition())
    dispatch(fetchSeason())
  }, [dispatch])

  useEffect(() => {
    if (competition?.length > 0) {
      dispatch(setCurrentCompetition(params.league))
    }
  }, [dispatch, params.league, competition])

  return (
    <section className="flex flex-col gap-6 overflow-hidden bg-neutral-700 pb-6 text-neutral-700">
      <GameNavigation currentTab={gameTab} />
      <CurrentTab paramsId={params.id} currentTab={gameTab} />
    </section>
  )
}

export default Play
