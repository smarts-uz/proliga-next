'use client'

import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from './PlayersStructure'
import PlayersTable from './PlayersTable'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import TransferStadiumForm from './TransferStadiumForm'

const Transfer = () => {
  const { currentTour } = useSelector((state) => state.tours)

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 md:min-h-max lg:flex-row">
        <div className="flex h-full flex-col lg:w-1/2 xl:w-[45%]">
          <div className="relative h-full w-full lg:w-full">
            <Image
              src="/icons/stadium.svg"
              alt="stadium"
              width={700}
              height={600}
              draggable={false}
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
    </Gutter>
  )
}

export default Transfer
