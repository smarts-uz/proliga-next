import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import Gutter from '../../../../../components/Gutter'
import GameBrief from './GameBrief'
import ChangeCaptainForm from '../Transfer/ChangeCaptainForm'

const GameProfile = () => {
  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="h-full w-full md:w-3/5">
          <div className="relative h-full w-full">
            <Image
              src="/icons/stadium.svg"
              alt="stadium"
              width={700}
              height={600}
              className="w-full rounded-sm"
            />
            <PlayersStructure allowDelete={false} />
          </div>
          <ChangeCaptainForm />
        </div>
        <GameBrief />
      </main>
    </Gutter>
  )
}

export default GameProfile
