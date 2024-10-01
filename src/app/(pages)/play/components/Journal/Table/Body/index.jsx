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
              className={`${cell.column.id === 'date' ? 'w-min min-w-24 px-1 text-[11px] xs:text-xs md:min-w-32 md:text-sm' : cell.column.id === 'name' ? 'w-max text-[11px] xs:text-xs md:text-sm' : 'w-auto'} h-8 w-full py-1 capitalize`}
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
