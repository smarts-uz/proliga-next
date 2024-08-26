import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import PlayersTable from './PlayersTable'
import ChangeCaptainForm from './ChangeCaptainForm'

const Transfer = () => {
  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col md:w-3/5">
          <div className="relative h-full w-full md:w-full">
            <Image
              src="/images/stadium.png"
              alt="stadium"
              width={700}
              height={600}
              className="w-full rounded-sm"
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
