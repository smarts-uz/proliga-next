import Image from 'next/image'

const TransferTableBody = ({ table, flexRender }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="mx-auto border-b border-neutral-700 bg-neutral-950 odd:bg-neutral-900"
        >
          {row.getVisibleCells().map((cell) => (
            <td className="w-auto px-2 py-1" key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
          {row.getVisibleCells().map((cell) => {
            if (cell.column.id === 'name')
              return (
                <td
                  className="flex w-auto cursor-pointer items-center justify-center px-2 py-1"
                  key={cell.column.id}
                >
                  <Image
                    src="/icons/plus.svg"
                    alt="plus"
                    width={24}
                    draggable={false}
                    height={24}
                    className="filter-primary size-5 md:size-6"
                  />
                </td>
              )
          })}
        </tr>
      ))}
    </tbody>
  )
}

export default TransferTableBody
