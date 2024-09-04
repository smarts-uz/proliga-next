import {
  addPlayerToTeam,
  updatePlayerInTeam,
} from 'app/lib/features/game/game.slice'
import { useDispatch, useSelector } from 'react-redux'
import AddPlayerButton from './AddPlayerButton'

const TransferTableBody = ({ table, flexRender }) => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR, team, tour_team } = useSelector(
    (state) => state.game
  )
  const teamConcat = GOA.concat(DEF, MID, STR)

  const handleAddPlayer = (player) => {
    dispatch(updatePlayerInTeam({ player, team, tour_team }))
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
                    team={teamConcat}
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
