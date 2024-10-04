'use client'

import Image from 'next/image'
import Match from './Match'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchMatches } from 'app/lib/features/matches/mathes.thunk'
import { setMatchesTourIndex } from 'app/lib/features/matches/matches.slice'

const Matches = () => {
  const dispatch = useDispatch()
  const { currentCompetition } = useSelector((state) => state.competition)
  const { season } = useSelector((state) => state.season)
  const { tours } = useSelector((state) => state.tours)
  const { matches, tourIndex } = useSelector((state) => state.matches)
  const [currentTour, setCurrentTour] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (tours?.length > 0) {
      setCurrentTour(tours[tourIndex])
    }
  }, [tourIndex, tours])

  useEffect(() => {
    if (season?.id && currentCompetition?.id && currentTour?.id) {
      dispatch(
        fetchMatches({
          season_id: season?.id,
          competition_id: currentCompetition?.id,
          tour_id: currentTour?.id,
        })
      )
    }
  }, [season, dispatch, currentCompetition, currentTour])

  const handleIncrementTourIndex = () => {
    if (tourIndex < tours.length - 1) {
      dispatch(setMatchesTourIndex(tourIndex + 1))
    }
  }
  const handleDecrementTourIndex = () => {
    if (tourIndex > 0) {
      dispatch(setMatchesTourIndex(tourIndex - 1))
    }
  }

  return (
    <div className="mx-auto flex min-h-[40rem] w-full max-w-[40rem] flex-col gap-2 rounded-xl bg-neutral-900 p-6 shadow shadow-neutral-600 lg:mx-0 xl:w-1/3">
      <div className="flex w-full items-center justify-center gap-4">
        <button
          disabled={tourIndex === 0}
          className="disabled:opacity-50"
          onClick={handleDecrementTourIndex}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            width={24}
            className="size-7 rotate-90"
            height={24}
          />
        </button>
        <h2 className="text-xl font-semibold">{currentTour?.name}</h2>
        <button
          disabled={tourIndex === tours.length - 1}
          className="disabled:opacity-50"
          onClick={handleIncrementTourIndex}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            width={24}
            className="size-7 -rotate-90"
            height={24}
          />
        </button>
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-1 overflow-x-scroll">
        {matches?.length === 0 && (
          <p className="mt-0 flex items-center justify-center text-center font-medium text-neutral-300">
            {t('Matchlar topilmadi!')}
          </p>
        )}
        {matches?.map((match, index) => (
          <Match match={match} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Matches
