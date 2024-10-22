import Link from 'next/link'
import { useSelector } from 'react-redux'

const TransferTableBody = ({ table, flexRender }) => {
  const { currentCompetition } = useSelector((store) => store.competition)
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const topThreeTeam = 'border-l-red-600 border-l-2 md:border-l-4'
  const topTenTeam = 'border-l-yellow-600 border-l-2 md:border-l-4'
  const matchingTeam = 'border-l-blue-600 border-l-2 md:border-l-4'

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
          className={`mx-auto border-b border-neutral-700 bg-neutral-900 odd:bg-stone-950 hover:bg-neutral-800 ${condition(row?.original?.team?.order, row?.original?.team?.id)}`}
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`h-min w-min px-0.5 capitalize md:w-auto`}
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
    </tbody>
  )
}

export default TransferTableBody
