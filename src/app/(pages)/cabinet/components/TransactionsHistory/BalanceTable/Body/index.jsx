const TransactionsTableBody = ({ table, flexRender }) => {
  const styles = (id) => {
    if (id === 'date' || id === 'code') {
      return 'w-min max-w-16 text-center md:text-start  h-min'
    }
    if (id === 'title') {
      return 'min-w-20 w-max  text-center md:text-start'
    }
    return 'w-min px-0.5 sm:min-w-6 text-center md:text-start'
  }

  return (
    <tbody className="h-auto">
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto h-min max-h-20 w-full border-b border-neutral-700 bg-neutral-800 even:bg-neutral-800 hover:bg-neutral-800"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${styles(cell.column.id)} h-12 w-full bg-gray-900 px-0.5 py-1 capitalize md:px-1`}
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

export default TransactionsTableBody
