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
import { useDispatch, useSelector } from 'react-redux'
import { selectPlayers } from 'app/lib/features/players/players.selector'

function PlayersTable() {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const selectedPlayers = useSelector(selectPlayers)

  useEffect(() => {
    if (selectedPlayers?.length > 0) {
      setData(selectedPlayers)
    }
  }, [selectedPlayers])

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
    <div className="h-min min-h-[30rem] border-collapse overflow-x-auto rounded-xl bg-black p-6 text-neutral-200 md:text-sm lg:w-1/2 xl:text-base">
      <div className="mb-4 grid grid-cols-3 capitalize">
        <div className="flex flex-col">
          <h2 className="text-sm text-neutral-400">Balans</h2>
          <p className="text-4xl font-bold">77.5</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm capitalize text-neutral-400">jamoa narxi</h3>
          <p className="text-4xl font-bold">22.5</p>
        </div>
        <div className="relative flex flex-col">
          <h3 className="cursor-pointer text-sm text-neutral-400">
            transferlar
          </h3>
          <p className="cursor-pointer text-4xl font-bold">2/2</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-1 text-sm">
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
        <TransferTableBody table={table} flexRender={flexRender} />
      </table>
      <TransferTablePagination table={table} />
    </div>
  )
}

export default PlayersTable
