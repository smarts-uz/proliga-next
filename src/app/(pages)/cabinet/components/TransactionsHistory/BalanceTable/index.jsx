'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table'
import TransactionsTableHead from './Head'
import TransactionsTableBody from './Body'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CabinetTablePagination from '../Pagination'

const columnHelper = createColumnHelper()

function CabinetTransactionsBalanceTable() {
  const { t } = useTranslation()
  const { balance } = useSelector((store) => store.payBalance)
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  })
  const getCorrectDate = (startDate) => {
    const date = new Date(startDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${day}.${month}.${year} | ${hours}:${minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes}`
  }

  const columns = [
    columnHelper.accessor('Date', {
      accessorFn: (row) => getCorrectDate(row.created_at ?? new Date()),
      id: 'date',
      header: t('Sana'),
    }),
    columnHelper.accessor('Kod', {
      accessorFn: (row) => row?.transaction_id ?? '',
      id: 'code',
      header: t('Code'),
    }),
    columnHelper.accessor('System', {
      accessorFn: (row) => row?.system,
      id: 'title',
      header: t('System'),
    }),
    columnHelper.accessor('sum', {
      accessorFn: (row) => row?.price,
      id: 'sum',
      header: t('Narx'),
    }),
  ]

  const table = useReactTable({
    columns,
    data: balance ?? [],
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
    <section className="w-full flex-1">
      <table className="w-full table-auto rounded text-[11px] xs:text-xs md:text-sm lg:text-base">
        <TransactionsTableHead table={table} />
        <TransactionsTableBody table={table} flexRender={flexRender} />
      </table>
      {balance?.length > 9 && <CabinetTablePagination table={table} />}
    </section>
  )
}

export default CabinetTransactionsBalanceTable
