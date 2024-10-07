const TransactionsTableBody = ({ table, flexRender }) => {
  const styles = (id) => {
    return 'w-min px-0.5 sm:min-w-6 text-center md:text-start'
  }

  return (
    <tbody className="h-auto">
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto w-full border-b border-neutral-700 bg-neutral-950 capitalize even:bg-neutral-800 hover:bg-neutral-900"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${styles(cell.column.id)} h-16 w-full px-0.5 py-1 capitalize md:px-1 lg:h-14`}
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
