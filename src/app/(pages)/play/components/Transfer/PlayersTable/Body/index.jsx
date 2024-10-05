import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPlayerButton from './AddPlayerButton'
import {
  addTeamPlayer,
  updateTeamPlayer,
} from 'app/lib/features/teamPlayers/teamPlayers.slice'

const TransferTableBody = ({ table, flexRender }) => {
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { GOA, DEF, MID, STR, playersCount } = useSelector(
    (state) => state.teamPlayers
  )
  const { teamBalance } = useSelector((state) => state.tourTeams)
  const totalPlayersCount =
    playersCount?.GOA +
    playersCount?.DEF +
    playersCount?.MID +
    playersCount?.STR

  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  const handleAddPlayer = (player) => {
    if (currentTeam?.is_team_created) {
      dispatch(
        addTeamPlayer({
          player,
          team: currentTeam,
          teamConcat,
        })
      )
    } else {
      dispatch(
        updateTeamPlayer({
          player,
          team: currentTeam,
          teamConcat,
        })
      )
    }
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
              className={`${cell.column.id === 'name' ? 'min-w-1/4' : 'w-min sm:w-auto'} px-0 text-center text-[10px] capitalize xs:text-xs sm:text-start sm:text-sm md:p-1 lg:text-base`}
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
                    totalPlayersCount={totalPlayersCount}
                  />
                )
            )}
        </tr>
      ))}
    </tbody>
  )
}

export default TransferTableBody
