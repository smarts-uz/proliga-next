const TransferTableBody = ({ table, flexRender }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto w-full border-b border-neutral-700 hover:bg-neutral-950"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${cell.column.id === 'player-name' ? 'w-full md:min-w-32' : cell.column.id === 'player-position' ? 'w-min sm:min-w-16 px-0.5 sm:px-1' : 'w-auto sm:min-w-14 px-0.5 sm:px-1'} h-8 w-full py-1 capitalize`}
              key={cell.id}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TransferTableBody
