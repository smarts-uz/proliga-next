import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPlayerButton from './AddPlayerButton'
import { addTeamPlayer } from 'app/lib/features/teamPlayers/teamPlayers.slice'

const TransferTableBody = ({ table, flexRender }) => {
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { GOA, DEF, MID, STR } = useSelector((state) => state.teamPlayers)
  const { teamBalance } = useSelector((state) => state.tourTeams)

  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  const handleAddPlayer = (player) => {
    dispatch(
      addTeamPlayer({
        player,
        team: currentTeam,
        teamConcat,
      })
    )
  }
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto border-b border-neutral-700 bg-neutral-950 odd:bg-neutral-900 hover:bg-black"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${cell.column.id === 'name' ? 'min-w-1/3' : 'w-min sm:w-auto'} text-center sm:text-start text-[10px] xs:text-xs sm:text-sm lg:text-base px-0 capitalize md:p-1`}
              key={cell.id}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
          {row
            .getVisibleCells()
            .map(
              (cell) =>
                cell.column.id === 'name' && (
                  <AddPlayerButton
                    teamBalance={teamBalance}
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
