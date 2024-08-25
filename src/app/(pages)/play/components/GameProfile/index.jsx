import Image from 'next/image'
import PlayersStructure from '../PlayersStructure'
import Gutter from '../../../../../components/Gutter'
import GameBrief from './GameBrief'

const GameProfile = () => {
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
        <GameBrief />
      </main>
    </Gutter>
  )
}

export default GameProfile
