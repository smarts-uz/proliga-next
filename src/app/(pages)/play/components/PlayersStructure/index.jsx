import Player from './Player'
import { useSelector, useDispatch } from 'react-redux'
import { PLAYERS } from 'app/utils/playerTypes.util.'
import {
  setDraggablePlayer,
  deletePlayerById,
} from 'app/lib/features/game/game.slice'

const PlayersStructure = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR } = useSelector((state) => state.game)

  const handleOnDrop = (e) => {
    e.stopPropagation()

    const position = e.target.getAttribute('data-type')
    const player_id = e.dataTransfer.getData('player_id')
    dispatch(setDraggablePlayer({ player_id, position }))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-rows-4 sm:py-2 md:pb-8 md:pt-0">
      <div className={`flex w-full items-center justify-center`}>
        {GOA.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div
        className={`flex items-center justify-evenly gap-0.5 px-4 sm:gap-0.5 md:px-6 xl:gap-0`}
      >
        {DEF.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div
        className="flex items-center justify-evenly gap-0.5 px-0 sm:gap-1 md:gap-4 md:px-4 xl:gap-0"
      >
        {MID.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div
        className="flex items-center justify-evenly gap-0 px-0 md:px-4"
      >
        {STR.map((player) => (
          <Player
            key={player.id}
            player={player}
            DEF={DEF}
            MID={MID}
            STR={STR}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayersStructure
