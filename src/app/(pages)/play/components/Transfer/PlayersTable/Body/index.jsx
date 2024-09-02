import {
  addPlayerToTeam,
  updatePlayerInTeam,
} from 'app/lib/features/game/game.slice'
import { PLAYERS } from 'app/utils/playerTypes.util.'
import { useDispatch, useSelector } from 'react-redux'
import AddPlayerButton from './AddPlayerButton'

const TransferTableBody = ({ table, flexRender }) => {
  const dispatch = useDispatch()
  const { team } = useSelector((state) => state.game)

  const handleAddPlayer = (player) => {
    if (player.position === PLAYERS.GOA || player.name) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.GOA }))
    }
    if (player.position === PLAYERS.GOA || !player.name) {
      dispatch(updatePlayerInTeam({ player, type: PLAYERS.GOA }))
    }

    if (player.position === PLAYERS.DEF || player.name) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.DEF }))
    }
    if (player.position === PLAYERS.DEF || !player.name) {
      dispatch(updatePlayerInTeam({ player, type: PLAYERS.DEF }))
    }
    if (player.position === PLAYERS.MID || player.name) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.MID }))
    }
    if (player.position === PLAYERS.MID || !player.name) {
      dispatch(updatePlayerInTeam({ player, type: PLAYERS.MID }))
    }
    if (player.position === PLAYERS.STR || player.name) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.STR }))
    }
    if (player.position === PLAYERS.STR || !player.name) {
      dispatch(updatePlayerInTeam({ player, type: PLAYERS.STR }))
    }
  }

  const playerExists = (cell) => {
    team.find((player) => player.name === cell.getValue())
  }

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto border-b border-neutral-700 bg-neutral-950 odd:bg-neutral-900"
        >
          {row.getVisibleCells().map((cell) => (
            <td className="w-auto px-2 py-1 capitalize" key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
          {row
            .getVisibleCells()
            .map(
              (cell) =>
                cell.column.id === 'name' && (
                  <AddPlayerButton
                    key={cell.id}
                    cell={cell}
                    team={team}
                    handleAddPlayer={handleAddPlayer}
                  />
                )
            )}
        </tr>
      ))}
    </tbody>
  )
}

export default TransferTableBody
