'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import TransactionsTableHead from './Head'
import TransactionsTableBody from './Body'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'

const columnHelper = createColumnHelper()

function CabinetTransactionsTable() {
  const { t } = useTranslation()

  const columns = [
    columnHelper.accessor('Date', {
      accessorFn: (row) => row.date,
      id: 'date',
      header: t('Date'),
    }),
    columnHelper.accessor('Kod', {
      accessorFn: (row) => row.code,
      id: 'code',
      header: t('Code'),
    }),
    columnHelper.accessor('Ismi', {
      accessorFn: (row) => row.title,
      id: 'title',
      header: t('Title'),
    }),
    columnHelper.accessor('sum', {
      accessorFn: (row) => row.sum,
      id: 'sum',
      header: t('Sum'),
    }),
  ]

  const table = useReactTable({
    columns,
    data: [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <table className="flex-1 table-auto text-xs md:text-sm lg:text-base">
      <TransactionsTableHead table={table} />
      {/* <TransactionsTableBody table={table} flexRender={flexRender} /> */}
    </table>
  )
}

export default CabinetTransactionsTable
