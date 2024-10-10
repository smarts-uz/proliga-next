const TransferTableBody = ({ table, flexRender }) => {
  const styles = (id) => {
    if (id === 'player-name') return 'w-min sm:min-w-28  md:min-w-32'
    if (id === 'player-position' || 'club' || 'played-min')
      return 'w-min px-0.5 sm:min-w-12 sm:px-1'
    return 'w-min px-0.5 sm:min-w-10 sm:px-1 bg-red-400'
    // if (id === 'played-min') return 'w-min px-0.5 sm:min-w-12 sm:px-1'
    // if (id === 'club') return 'w-min px-0.5 sm:min-w-12 sm:px-1'
  }

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto w-full border-b border-neutral-700 hover:bg-neutral-950"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${styles(cell.column.id)} h-8 w-min py-1 capitalize`}
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
