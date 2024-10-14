'use client'

import Image from 'next/image'
import PlayersStructure from './PlayersStructure'
import PlayersTable from './PlayersTable'
import TransferStadiumForm from './TransferStadiumForm'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'

const Transfer = () => {
  const { currentTour } = useSelector((state) => state.tours)

  return (
    <main className="flex w-full flex-col justify-between gap-2 pb-0 md:min-h-max lg:flex-row">
      <div className="flex h-auto flex-col lg:w-1/2">
        <div className="relative h-auto w-full lg:w-full">
          <Image
            src="/icons/stadium.svg"
            alt="stadium"
            width={700}
            height={600}
            draggable={false}
            priority
            className="w-full select-none rounded-sm"
          />
          {currentTour?.status === TOUR.notStartedTransfer && (
            <PlayersStructure />
          )}
        </div>
        <TransferStadiumForm />
      </div>
      <PlayersTable />
    </main>
  )
}

export default Transfer
