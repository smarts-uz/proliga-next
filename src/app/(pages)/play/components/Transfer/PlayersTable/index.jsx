'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { columns } from './columns'
import TransferTablePagination from './Pagination'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import TransferTableFilters from './Filters'
import { useSelector } from 'react-redux'
import { selectPlayers } from 'app/lib/features/players/players.selector'

function PlayersTable() {
  const [data, setData] = useState([
  
  ])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const selectedPlayers = useSelector(selectPlayers)

  // useEffect(() => {
  //   if (selectedPlayers?.length > 0) {
  //     setData(selectedPlayers)
  //   }
  // }, [selectedPlayers])
  console.log(data, 'blah')

  const table = useReactTable({
    columns,
    data,
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
    <div className="h-min min-h-[30rem] border-collapse overflow-x-auto rounded-xl border border-primary border-opacity-50 bg-black p-4 text-neutral-200 shadow-md shadow-neutral-600 transition-all hover:border-opacity-100 md:p-6 md:text-sm lg:w-1/2 xl:text-base">
      <div className="grid w-full grid-cols-3 gap-x-1 gap-y-2 text-xs md:gap-2 md:text-sm">
        {table
          .getHeaderGroups()
          .map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TransferTableFilters key={header.id} column={header.column} />
            ))
          )}
      </div>
      <table className="w-full min-w-80 table-auto text-sm md:min-w-[25rem]">
        <TransferTableHead table={table} />
        <TransferTableBody table={table} flexRender={flexRender} />
      </table>
      <TransferTablePagination table={table} />
    </div>
  )
}

export default PlayersTable
