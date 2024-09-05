import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import PlayersTable from './PlayersTable'
import ChangeCaptainForm from './ChangeCaptainForm'

const Transfer = () => {
  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 lg:flex-row md:min-h-max">
        <div className="flex h-full w-full flex-col lg:w-1/2">
          <div className="relative h-full w-full lg:w-full">
            <Image
              src="/images/stadium.png"
              alt="stadium"
              width={700}
              height={600}
              draggable={false}
              className="w-full rounded-sm select-none"
            />
            <PlayersStructure />
          </div>
          <ChangeCaptainForm />
        </div>
        <PlayersTable />
      </main>
    </Gutter>
  )
}

export default Transfer
