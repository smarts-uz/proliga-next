const TransferTableBody = ({ table, flexRender, scoreStyles }) => {
  const styles = (id) => {
    if (id === 'ochko')
      return 'w-min px-1 bg-primary text-center text-black rounded bg-opacity-100'
    if (id === 'score')
      return `w-min text-center px-0.5 border-b-2 md:border-b-[3px] rounded-sm ${scoreStyles} `
    return 'w-min px-0.5 sm:min-w-8 text-center'
  }

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto max-h-20 w-full border-b border-neutral-700 
          bg-neutral-800 even:bg-neutral-800 hover:bg-neutral-800"
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
