import Gutter from '../Gutter'
import Image from 'next/image'

const GameProfile = () => {
  return (
    <Gutter>
      <main className="flex gap-4 justify-between">
        <div className=''>
          <Image src="/images/stadium.png" alt="stadium" width={700} height={600} />
        </div>
        <div className=' bg-black w-96 rounded-xl p-4'>
        table
        </div>
      </main>
    </Gutter>
  )
}

export default GameProfile
