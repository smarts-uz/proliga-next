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
  const [sorting, setSorting] = useState([
    {
      id: 'hammasi',
      desc: true,
    },
  ])

  useEffect(() => {
    if (allTeams) {
      setData(allTeams)
    }
  }, [allTeams])

  const columns = [
    columnHelper.accessor('name', {
      accessorFn: (row) => row?.team?.name ?? '',
      cell: (info) => info.getValue(),
      header: t('Jamoa'),
    }),
    columnHelper.accessor('user', {
      accessorFn: (row) => row?.user_id?.name ?? 'Ism kiritilmagan',
      header: t('Foydalanuvchi'),
    }),
    columnHelper.accessor((row) => row.point, {
      accessorFn: (row) => row.point,
      id: 'point',
      cell: (info) => info.getValue(),
      header: t('Tur'),
    }),
    columnHelper.accessor((row) => row.point, {
      accessorFn: (row) => row.team.point,
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
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <table className="] h-full w-full min-w-80 table-auto text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody table={table} flexRender={flexRender} />
    </table>
  )
}

export default TournamentTable
