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
                title={header.column.columnDef?.meta?.title}
                colSpan={header.colSpan}
                {...{
                  className: header.column.getCanSort()
                    ? 'cursor-pointer select-none px-0.5 md:p-1 text-start  '
                    : ' px-0.5 md:p-1 text-start ',
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
                      src="/icons/arrow-active-top.svg"
                      alt="triangle arrow"
                      width={12}
                      height={12}
                      className={`${header.column.columnDef.header ? 'hidden sm:inline-block' : 'hidden'} size-4 rotate-180 xs:size-4 md:size-5`}
                    />
                  ),
                  desc: (
                    <Image
                      src="/icons/arrow-active-top.svg"
                      alt="triangle arrow"
                      width={12}
                      height={12}
                      className={`${header.column.columnDef.header ? 'hidden sm:inline-block' : 'hidden'} size-4 xs:size-4 md:size-5`}
                    />
                  ),
                }[header.column.getIsSorted()] ?? (
                  <Image
                    src="/icons/arrow-inactive.svg"
                    alt="triangle arrow"
                    width={12}
                    height={12}
                    className={`${header.column.columnDef.header ? 'hidden sm:inline-block' : 'hidden'} size-4 xs:size-4 md:size-5`}
                  />
                )}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TransferTableHead
