const TransferTableBody = ({ table, flexRender, scoreStyles }) => {
  const styles = (id) => {
    if (id === 'ochko')
      return 'w-min px-1 sm:min-w-12 bg-primary text-center text-black rounded bg-opacity-100'
    if (id === 'score')
      return `w-min text-center px-0.5 border md:border-2 rounded-md ${scoreStyles} `
    return 'w-min px-0.5 sm:min-w-5 text-center'
  }

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto w-full border-b border-neutral-700 bg-neutral-800 hover:bg-neutral-800"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              className={`${styles(cell.column.id)} h-8 w-full py-1 capitalize`}
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
