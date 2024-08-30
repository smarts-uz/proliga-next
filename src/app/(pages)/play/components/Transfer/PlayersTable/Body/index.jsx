import Image from 'next/image'
import { addPlayerToTeam } from 'app/lib/features/game/game.slice'
import { PLAYERS } from 'app/utils/playerTypes.util.'
import { useDispatch } from 'react-redux'

const TransferTableBody = ({ table, flexRender }) => {
  const dispatch = useDispatch()
  const handleAddPlayer = (player) => {
    if (player.position === PLAYERS.GOA) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.GOA }))
    }
    if (player.position === PLAYERS.DEF) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.DEF }))
    }
    if (player.position === PLAYERS.MID) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.MID }))
    }
    if (player.position === PLAYERS.STR) {
      dispatch(addPlayerToTeam({ player, type: PLAYERS.STR }))
    }
  }

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto border-b border-neutral-700 bg-neutral-950 odd:bg-neutral-900"
        >
          {row.getVisibleCells().map((cell) => (
            <td className="w-auto px-2 py-1" key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
          {row.getVisibleCells().map((cell) => {
            if (cell.column.id === 'name')
              return (
                <td
                  className="flex w-auto cursor-pointer items-center justify-center px-2 py-1"
                  key={cell.column.id}
                  onClick={() => handleAddPlayer(cell.row.original)}
                >
                  <Image
                    src="/icons/plus.svg"
                    alt="plus"
                    width={24}
                    draggable={false}
                    height={24}
                    className="filter-primary size-5 md:size-6"
                  />
                </td>
              )
          })}
        </tr>
      ))}
    </tbody>
  )
}

export default TransferTableBody
