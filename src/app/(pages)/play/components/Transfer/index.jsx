import Gutter from '../../../../../components/Gutter'
import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import PlayersTable from './PlayersTable'

const Transfer = () => {
  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="relative md:w-3/5">
          <Image
            src="/images/stadium.png"
            alt="stadium"
            width={700}
            height={600}
            className="w-full rounded-sm"
          />
          <PlayersStructure />
        </div>
        <PlayersTable />
      </main>
    </Gutter>
  )
}

export default Transfer
