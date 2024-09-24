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
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import { useSelector } from 'react-redux'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
const columnHelper = createColumnHelper()

function TournamentTable() {
  const { t } = useTranslation()
  const { allTeams } = useSelector((store) => store.teams)
  const [data, setData] = useState(allTeams ?? [])

  useEffect(() => {
    if (allTeams) {
      setData(allTeams)
    }
  }, [allTeams])

  const columns = [
    columnHelper.accessor('name', {
      accessorKey: 'name',
      cell: (info) => info.getValue(),
      header: t('Jamoa'),
    }),
    columnHelper.accessor('user', {
      accessorFn: (row) =>
        row.user_id.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, '$1***@$2'),
      header: t('Foydalanuvchi'),
    }),
    columnHelper.accessor((row) => row.point, {
      accessorFn: (row) => row.point,
      id: 'point',
      cell: (info) => info.getValue(),
      header: t('Tur'),
    }),
    columnHelper.accessor((row) => row.point, {
      accessorFn: (row) => row.point,
      id: 'hammasi',
      cell: (info) => <i>{info.getValue()}</i>,
      header: t('Hammasi'),
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
    <table className="] h-full w-full min-w-80 table-auto text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody table={table} flexRender={flexRender} />
    </table>
  )
}

export default TournamentTable
