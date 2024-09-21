'use client'

import Image from 'next/image'
import { useSelector } from 'react-redux'
import Match from './Match'

const Matches = () => {
  const { currentTour } = useSelector((state) => state.tours)
  const { matches } = useSelector((state) => state.matches)

  return (
    <div className="flex min-h-[40rem] w-full flex-col gap-2 rounded-xl bg-neutral-900 p-6 shadow shadow-neutral-600 sm:max-h-[36rem] xl:w-1/3">
      <div className="flex w-full items-center justify-center gap-4">
        <button>
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            width={24}
            className="size-7 rotate-90"
            height={24}
          />
        </button>
        <h2 className="text-xl font-semibold">{currentTour?.name}</h2>
        <button>
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow"
            width={24}
            className="size-7 -rotate-90"
            height={24}
          />
        </button>
      </div>
      <div className="grid flex-1 grid-rows-8 gap-1">
        {matches?.length === 0 && (
          <p className="mt-0 flex items-center justify-center text-center font-medium text-neutral-300">
            Matchlar topilmadi!
          </p>
        )}
        {matches?.map((match) => (
          <Match match={match} key={match.id} />
        ))}
      </div>
    </div>
  )
}

export default Matches
