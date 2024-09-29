const TransferTableBody = ({ table, flexRender }) => {
  const styles = (id) => {
    if (id === 'ochko')
      return 'w-min  px-0.5 sm:min-w-16 sm:px-1 bg-primary text-black rounded text-center bg-opacity-100'
    return 'w-min px-0.5 sm:min-w-14 sm:px-1'
  }

  return (
    <tbody>
      {table.getRowModel().rows.map(
        (row) =>
          console.log(row) && (
            <tr
              key={row.id}
              className="mx-auto w-full border-b border-neutral-700 bg-neutral-800"
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
          )
      )}
    </tbody>
  )
}

export default TransferTableBody
