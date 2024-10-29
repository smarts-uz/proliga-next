'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { getCorrentPlayerPosition } from 'app/utils/getCorrectPlayerPosition.utils'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import StatisticsTableFilters from '../Filters'
import StatisticsTablePagination from './Pagination'

const columnHelper = createColumnHelper()

function StatisticsTable() {
  const { t } = useTranslation()
  const { players } = useSelector((state) => state.playerResult)
  const { lang } = useSelector((state) => state.systemLanguage)
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 14,
  })

  const columns = [
    columnHelper.accessor('player_id.position', {
      accessorFn: (row) =>
        getCorrentPlayerPosition(row?.player_id?.position, lang),
      id: 'player-position',
      header: t('POZ'),
      meta: {
        title: t('O‘yinchining pozitsiyasi'),
      },
    }),
    columnHelper.accessor('player_id.name', {
      accessorKey: 'player_id.name',
      header: t("O'yinchi ismi"),
      id: 'player-name',
      meta: {
        title: t("O'yinchini toliq ismi"),
        filterVariant: 'name',
      },
    }),
    columnHelper.accessor('club_id.name', {
      accessorKey: 'club_id.name',
      header: t('Klub'),
      id: 'club',
      meta: {
        title: t('Clubni nomi'),
        filterVariant: 'club',
      },
    }),
    columnHelper.accessor('ochko', {
      accessorFn: (row) => row?.player_id?.point,
      id: 'ochko',
      header: t('O'),
      meta: {
        title: t('Ochko'),
      },
    }),
    columnHelper.accessor((row) => row.goal, {
      accessorFn: (row) => row?.goal,
      id: 'gol',
      cell: (info) => info.getValue(),
      header: t('G') + ' ',
      meta: {
        title: t('Gol'),
      },
    }),
    columnHelper.accessor('GA', {
      accessorFn: (row) => row?.goal_asist,
      id: 'gol assist',
      header: t('GA'),
      meta: {
        title: t('Assist'),
      },
    }),
    columnHelper.accessor((row) => row?.missed_penalty, {
      accessorFn: (row) => row?.missed_penalty,
      id: 'returned penalty',
      header: t('QP'),
      meta: {
        title: t('Qaytarilgan penalti'),
      },
    }),
    columnHelper.accessor('yellow_card', {
      accessorFn: (row) => row?.yellow_card,
      id: 'Yellow Card',
      header: t('SK'),
      meta: {
        title: t('Sariq kartochka'),
      },
    }),
    columnHelper.accessor('red_card', {
      accessorFn: (row) => (row?.is_red_card ? 1 : 0),
      id: 'Red Card',
      header: t('QZ'),
      meta: {
        title: t('Qizil kartochka'),
      },
    }),
    columnHelper.accessor((row) => row.played_min, {
      accessorFn: (row) => row?.played_min,
      id: 'played-min',
      header: t('MIN'),
      meta: {
        title: t('O‘ynagan vaqti'),
      },
    }),
  ]

  const table = useReactTable({
    columns,
    data: players ?? [],
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
    <>
      <div className="relative flex flex-col gap-2 text-xs xs:text-sm sm:flex-row">
        {table
          .getHeaderGroups()
          .map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <StatisticsTableFilters key={header.id} column={header.column} />
            ))
          )}
      </div>
      <table className="h-auto w-full min-w-[310px] text-[10px] xs:text-xs md:text-sm">
        <TransferTableHead table={table} />
        <TransferTableBody table={table} flexRender={flexRender} />
      </table>
      <StatisticsTablePagination table={table} />
    </>
  )
}

export default StatisticsTable
