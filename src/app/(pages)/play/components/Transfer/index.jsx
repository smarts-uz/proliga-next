import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import PlayersTable from './PlayersTable'
import ChangeCaptainForm from './ChangeCaptainForm'
import { useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import ToursHistory from './ToursHistory'

const Transfer = () => {
  const { tours, currentTour } = useSelector((state) => state.game)
  // const tour = tours[currentTour]

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 md:min-h-max lg:flex-row">
        <div className="flex h-full w-full flex-col lg:w-1/2">
          <div className="relative h-full w-full lg:w-full">
            <Image
              src="/images/stadium.png"
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
          <ChangeCaptainForm />
        </div>
        {currentTour?.status === TOUR.notStartedTransfer && <PlayersTable />}
        {currentTour?.status === TOUR.inProcess && <ToursHistory />}
        {currentTour?.status === TOUR.completed && <ToursHistory />}
      </main>
    </Gutter>
  )
}

export default Transfer
