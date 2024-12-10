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
import CabinetTablePagination from '../Pagination'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import { useState } from 'react'

const columnHelper = createColumnHelper()

function CabinetTransactionsExpensesTable() {
  const { t } = useTranslation()
  const { expenses } = useSelector((store) => store.payExpense)
  const { lang } = useSelector((store) => store.systemLanguage)
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 9,
  })
  const [sorting, setSorting] = useState([
    {
      id: 'date',
      desc: true,
    },
  ])

  const getCorrectDate = (startDate) => {
    const date = new Date(startDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${day}.${month}.${year} \n
    | ${hours}:${minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes}`
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
    columnHelper.accessor('Team', {
      accessorFn: (row) => row?.team_id?.name,
      id: 'team',
      header: t('Jamoa'),
    }),
    columnHelper.accessor('Title', {
      accessorFn: (row) =>
        lang === LANGUAGE.uz
          ? row?.pay_package_id?.name_uz
          : row?.pay_package_id?.name_ru,
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
    data: expenses ?? [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      pagination,
      sorting,
    },
  })

  return (
    <section className="flex h-full w-full flex-1 flex-col justify-between overflow-x-auto">
      <table className="w-full min-w-96 table-auto rounded text-[11px] xs:text-xs md:text-sm">
        <TransactionsTableHead table={table} />
        <TransactionsTableBody table={table} flexRender={flexRender} />
      </table>
      {expenses?.length > 9 && <CabinetTablePagination table={table} />}
    </section>
  )
}

export default CabinetTransactionsExpensesTable
