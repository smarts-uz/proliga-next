import Player from './Player'
import { useSelector } from 'react-redux'

const PlayersStructure = () => {
  const { GOA, DEF, MID, STR } = useSelector((state) => state.game)

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0   z-10 grid grid-rows-4 sm:py-2 md:pb-8 md:pt-0">
      <div className="flex w-full justify-center">
        {GOA.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div className="mx-0 xs:mx-10 flex justify-center xs:justify-around gap-0.5 sm:gap-1 md:mx-24 md:gap-8">
        {DEF.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div className="mx-0 xs:mx-10 flex justify-around xs:justify-between gap-0.5 sm:gap-1 md:mx-24 md:gap-8">
        {MID.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div className="mx-0 flex justify-evenly gap-0 md:mx-24 md:justify-around md:gap-8">
        {STR.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}

export default PlayersStructure
