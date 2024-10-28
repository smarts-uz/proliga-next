'use client'
import { flexRender } from '@tanstack/react-table'
import Image from 'next/image'

const TransferTableHead = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="relative rounded-md">
          {headerGroup.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                {...{
                  className: header.column.getCanSort()
                    ? 'cursor-pointer group relative select-none p-0.5 min-w-5 md:p-1 text-center md:text-start'
                    : ' px-0.5 md:p-1 relative group text-start ',
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
                      className={`${header.column.columnDef.header ? 'hidden lg:inline-block' : 'hidden'} size-4 rotate-180 xs:size-4 md:size-5`}
                    />
                  ),
                  desc: (
                    <Image
                      src="/icons/arrow-active-top.svg"
                      alt="triangle arrow"
                      width={12}
                      height={12}
                      className={`${header.column.columnDef.header ? 'hidden lg:inline-block' : 'hidden'} size-4 xs:size-4 md:size-5`}
                    />
                  ),
                }[header.column.getIsSorted()] ?? (
                  <Image
                    src="/icons/arrow-inactive.svg"
                    alt="triangle arrow"
                    width={12}
                    height={12}
                    className={`${header.column.columnDef.header ? 'hidden lg:inline-block' : 'hidden'} size-4 xs:size-4 md:size-5`}
                  />
                )}
                <span className="-left-0 top-8 z-40 hidden h-auto w-min rounded-md border border-neutral-200 bg-neutral-950 p-1 shadow-md outline-none group-hover:absolute group-hover:block data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                  {header.column.columnDef?.meta?.title}
                </span>
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TransferTableHead
