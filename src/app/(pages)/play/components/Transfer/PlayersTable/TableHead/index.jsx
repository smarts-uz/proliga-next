'use client'
import { flexRender } from '@tanstack/react-table'
import Image from 'next/image'

const TransferTableHead = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                {...{
                  className: header.column.getCanSort()
                    ? 'cursor-pointer select-none p-2 text-start'
                    : ' p-2 text-start',
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
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TransferTableHead
