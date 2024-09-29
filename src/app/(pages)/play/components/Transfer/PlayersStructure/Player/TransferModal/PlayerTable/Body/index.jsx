import { useDispatch, useSelector } from 'react-redux'
import AddPlayerButton from './AddPlayerButton'
import { swapTeamPlayer } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useTranslation } from 'react-i18next'

const TransferTableBody = ({ table, flexRender, prevPlayer, handleModal }) => {
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { teamBalance } = useSelector((state) => state.tourTeams)
  const { t } = useTranslation()

  const handleAddPlayer = (player) => {
    dispatch(
      swapTeamPlayer({
        player,
        previousPlayer: prevPlayer,
        team: currentTeam,
        handleModal,
        t,
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
                    prevPlayer={prevPlayer}
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
