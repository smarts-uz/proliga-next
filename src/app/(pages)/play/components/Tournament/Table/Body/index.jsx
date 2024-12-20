import Link from 'next/link'
import { useSelector } from 'react-redux'
import TournamentTableCurrentTeamRow from './CurrentTeamRow'

const TransferTableBody = ({
  table,
  flexRender,
  currentTourTeam,
  showTourTeam,
}) => {
  const topThreeTeam = 'border-l-red-500 border-l-2 md:border-l-4'
  const topTenTeam = 'border-l-yellow-500 border-l-2 md:border-l-4'
  const matchingTeam = 'border-l-blue-500 border-l-2 md:border-l-4'
  const { currentCompetition } = useSelector((store) => store.competition)
  const { currentTeam } = useSelector((store) => store.currentTeam)

  const condition = (order, teamId) => {
    if (teamId === currentTeam?.id) {
      return matchingTeam
    }
    if (order > 0 && order <= 3) return topThreeTeam
    if (order > 3 && order <= 10) return topTenTeam
    return ''
  }

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className={`mx-auto border-b border-neutral-700 bg-neutral-900 text-center odd:bg-stone-950 hover:bg-neutral-800 md:text-start ${condition(row?.original?.team?.order, row?.original?.team?.id)}`}
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`h-8 w-min px-0.5 capitalize md:w-auto`}
              key={cell.id}
            >
              <Link
                href={`/team-view/${currentCompetition?.slug}/${row?.original?.team?.id ?? 0}`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Link>
            </td>
          ))}
        </tr>
      ))}
      {showTourTeam && (
        <TournamentTableCurrentTeamRow
          currentCompetition={currentCompetition}
          currentTourTeam={currentTourTeam}
        />
      )}
    </tbody>
  )
}

export default TransferTableBody
