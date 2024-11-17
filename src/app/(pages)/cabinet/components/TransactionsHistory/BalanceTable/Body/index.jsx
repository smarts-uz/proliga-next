const TransactionsTableBody = ({ table, flexRender }) => {
  const styles = (id) => {
    return 'w-min px-0.5 sm:min-w-6 text-center md:text-start'
  }

  return (
    <tbody className="h-auto">
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto w-full border-b border-neutral-700 bg-neutral-950/50 capitalize even:bg-neutral-800/50 hover:bg-neutral-950"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${styles(cell.column.id)} h-14 w-full max-w-24 break-all px-0.5 py-1 capitalize md:px-1 lg:h-11`}
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
