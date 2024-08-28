'use client'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState, useEffect, Suspense } from 'react'
import { supabase } from '../../../../../lib/supabaseClient'
import columns from './columns'
import TransferTablePagination from './Pagination'
import TransferTableHead from './TableHead'
import Image from 'next/image'
import TransferTableFilters from './Filters'

function PlayersTable() {
  const [data, _setData] = useState([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('player')
        .select('id, name, position, club(name), price')
        .limit(300)

      if (error) return toast.error(error.message)
      if (data?.length > 0) _setData(data)
    }
    fetch()
  }, [])

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  return (
    <div className="h-min w-full border-collapse overflow-x-auto rounded-xl bg-black p-6 text-neutral-200 md:text-sm lg:w-1/2 xl:text-base">
      <div className="grid w-full grid-cols-2 gap-1 text-sm">
        {table
          .getHeaderGroups()
          .map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TransferTableFilters key={header.id} column={header.column} />
            ))
          )}
      </div>
      <table className="font-sm w-full min-w-[25rem] table-auto">
        <TransferTableHead table={table} />
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
      </table>
      <TransferTablePagination table={table} />
    </div>
  )
}

export default PlayersTable
