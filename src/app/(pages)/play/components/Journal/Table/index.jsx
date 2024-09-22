'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import { useSelector } from 'react-redux'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
const columnHelper = createColumnHelper()

function JournalTable() {
  const { t } = useTranslation()
  const { players } = useSelector((state) => state.playerResult)
  const [data, setData] = useState(players ?? [])

  useEffect(() => {
    if (players) {
      setData(players)
    }
  }, [players])

  const columns = [
    columnHelper.accessor('created_at', {
      accessorFn: (row) => row.player_id.position,
      id: 'date',
      header: 'date',
    }),
    columnHelper.accessor('name', {
      accessorKey: 'name',
      cell: (info) => info.getValue(),
      header: 'Oyinchi ismi',
      id: 'name',
    }),
  ]

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <table className="h-full w-full text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody table={table} flexRender={flexRender} />
    </table>
  )
}

export default JournalTable
