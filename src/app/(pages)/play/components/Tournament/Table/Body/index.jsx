import Link from 'next/link'

const TransferTableBody = ({ table, flexRender }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto border-b border-neutral-700 bg-neutral-900 odd:bg-stone-950 hover:bg-neutral-800"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`h-min w-min px-0.5 capitalize md:w-auto`}
              key={cell.id}
            >
              <Link href={`/team-view/${row?.original?.team?.id ?? 0}`}>
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
