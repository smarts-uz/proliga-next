import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPlayerButton from './AddPlayerButton'
import {
  addTeamPlayer,
  updateTeamPlayer,
} from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useTranslation } from 'react-i18next'
import { configKey } from 'app/utils/config.util'

const TransferTableBody = ({ table, flexRender }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { config } = useSelector((store) => store.systemConfig)
  const { GOA, DEF, MID, STR, playersCount } = useSelector(
    (state) => state.teamPlayers
  )
  const max_same_team_players = +config[configKey.max_same_team_players]?.value
  const transfer_show_modals =
    config[configKey.transfer_show_modals]?.value?.toLowerCase() === 'true'

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
          t,
          max_same_team_players,
          transfer_show_modals,
        })
      )
    } else {
      dispatch(
        updateTeamPlayer({
          player,
          team: currentTeam,
          teamConcat,
          t,
          max_same_team_players,
          transfer_show_modals,
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
              className={`${cell.column.id === 'name' ? 'min-w-1/4' : 'w-min sm:w-auto'} px-0 text-center text-[10px] capitalize xs:text-xs sm:text-start md:p-1 md:text-sm lg:text-xs xl:text-sm`}
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
