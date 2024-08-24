import Image from 'next/image'
import PlayersStructure from './PlayersStructure'
import Gutter from '../../../../../components/Gutter'

const GameProfile = () => {
  return (
    <Gutter>
      <main className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative">
          <Image
            src="/images/stadium.png"
            alt="stadium"
            width={700}
            height={600}
          />
          <PlayersStructure />
        </div>
        <div className="w-96 rounded-xl bg-black p-4">table</div>
      </main>
    </Gutter>
  )
}

export default GameProfile
