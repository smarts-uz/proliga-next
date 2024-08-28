'use client'
import TransferTableFilter from './Filters'
import { flexRender } from '@tanstack/react-table'
import Image from 'next/image'

const TransferTableHead = ({ table }) => {
  return (
    <thead className="w-full gap-4 bg-red-400">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr className="" key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                {...{
                  className: header.column.getCanSort()
                    ? 'cursor-pointer select-none bg-neutral-800 p-2 text-start'
                    : 'bg-neutral-800 p-2 text-start',
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {/* <th
                > */}
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
                {/* </th> */}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TransferTableHead
