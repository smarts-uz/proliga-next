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
import { useGetPlayers } from 'app/hooks/transfer/useGetPlayers/useGetPlayers'
import { columns } from './columns'
import TransferTablePagination from './Pagination'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import TransferTableFilters from './Filters'
import { useSelector } from 'react-redux'

function PlayersTable() {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const { team } = useSelector((store) => store.game)
  const { getPlayers } = useGetPlayers()

  useEffect(() => {
    if (team) {
      const fetch = async () => {
        await getPlayers({ setData, competition_id: team.competition_id.id })
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team])

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
        <TransferTableBody table={table} flexRender={flexRender} />
      </table>
      <TransferTablePagination table={table} />
    </div>
  )
}

export default PlayersTable
