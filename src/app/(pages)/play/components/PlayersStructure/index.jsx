import Player from './Player'
import { useSelector, useDispatch } from 'react-redux'
import { PLAYERS } from 'app/utils/playerTypes.util.'
import { setDraggablePlayer } from 'app/lib/features/game/game.slice'

const PlayersStructure = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR } = useSelector((state) => state.game)

  const handleOnDrop = (e) => {
    e.stopPropagation()

    const position = e.target.getAttribute('data-type')
    const player_id = e.dataTransfer.getData('player_id')
    console.log(player_id, position)
    dispatch(setDraggablePlayer({ player_id, position }))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-rows-4 sm:py-2 md:pb-8 md:pt-0">
      <div className={`flex w-full justify-center`}>
        {GOA.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div
        data-type={PLAYERS.DEF}
        onDrop={handleOnDrop}
        onDragOver={(e) => handleDragOver(e)}
        className={`flex justify-center gap-0.5 px-0 xs:justify-around xs:px-10 sm:gap-1 md:gap-8 md:px-16 lg:px-24`}
      >
        {DEF.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div
        data-type={PLAYERS.MID}
        onDrop={handleOnDrop}
        onDragOver={(e) => handleDragOver(e)}
        className="flex justify-around gap-0.5 px-0 xs:justify-between xs:px-10 sm:gap-1 md:gap-8 md:px-24"
      >
        {MID.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <div
        data-type={PLAYERS.STR}
        onDrop={handleOnDrop}
        onDragOver={(e) => handleDragOver(e)}
        className="flex justify-evenly gap-0 px-0 md:justify-around md:gap-8 md:px-24"
      >
        {STR.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}

export default PlayersStructure
