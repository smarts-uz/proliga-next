'use client'
import { flexRender } from '@tanstack/react-table'
import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const TransferTableHead = ({ table }) => {
  return (
    <thead className="">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="relative rounded-md">
          {headerGroup.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                {...{
                  className: header.column.getCanSort()
                    ? ' group relative select-none p-0.5 md:p-1 text-start '
                    : ' px-0.5 md:p-1 relative group text-start ',
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
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