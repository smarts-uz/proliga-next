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
  const { matches, tourIndex, isLoading } = useSelector(
    (state) => state.matches
  )
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
    <div className="relative mx-auto flex h-min min-h-[38rem] w-full min-w-max max-w-[32rem] flex-1 flex-col gap-2 rounded-xl bg-neutral-900 p-4 shadow shadow-neutral-600 lg:mx-0 lg:w-auto lg:min-w-72 xl:flex-grow xl:p-5 2xl:max-w-[32rem]">
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
        {isLoading ? (
          <div className="absolute bottom-0 left-0 right-0 top-[45%] w-full text-center">
            <Image
              src="/icons/loading.svg"
              width={24}
              height={24}
              alt="loading"
              className="mx-auto size-8 animate-spin"
            />
          </div>
        ) : (
          <>
            {matches?.length === 0 && (
              <p className="mt-0 flex items-center justify-center text-center font-medium text-neutral-300">
                {t('Matchlar topilmadi!')}
              </p>
            )}
            {matches?.map((match, index) => (
              <Match match={match} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Matches
