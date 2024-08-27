import TransferTableFilter from './Filters'
import { flexRender } from '@tanstack/react-table'
import Image from 'next/image'

const TransferTableHead = ({ table }) => {
  return (
    <thead className=" w-full gap-4 bg-red-400">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr className="" key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                className="bg-neutral-800  px-4 py-2 text-start"
                key={header.id}
                colSpan={header.colSpan}
              >
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : '',
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: (
                      <Image
                        src="/icons/arrow-triangle.svg"
                        alt="triangle arrow"
                        width={12}
                        height={12}
                        className="ml-1 inline-block size-4 md:size-5"
                      />
                    ),
                    desc: (
                      <Image
                        src="/icons/arrow-triangle.svg"
                        alt="triangle arrow"
                        width={12}
                        height={12}
                        className="ml-1 inline-block size-4 rotate-180 md:size-5"
                      />
                    ),
                  }[header.column.getIsSorted()] ?? null}
                  {/* {header.column.getCanFilter() ? (
                    <div>
                      <TransferTableFilter
                        column={header.column}
                        table={table}
                      />
                    </div>
                  ) : null} */}
                </div>
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TransferTableHead
