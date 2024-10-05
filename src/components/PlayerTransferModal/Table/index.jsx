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
import { useSelector } from 'react-redux'
import { selectPlayers } from 'app/lib/features/players/players.selector'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'app/utils/languages.util'
import { PLAYERS } from 'app/utils/players.util'
import TransferTablePagination from './Pagination'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import TransferTableFilters from './Filters'

const columnHelper = createColumnHelper()

function PlayerTable({ prevPlayer, handleModal }) {
  const { t } = useTranslation()
  const { lang } = useSelector((state) => state.systemLanguage)
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

  const getCorrentPlayerPosition = (position) => {
    if (lang === LANGUAGE.ru) {
      if (position === PLAYERS.GOA) {
        return 'ВР'
      }
      if (position === PLAYERS.DEF) {
        return 'ЗЩ'
      }
      if (position === PLAYERS.MID) {
        return 'ПЗ'
      }
      if (position === PLAYERS.STR) {
        return 'НП'
      }
    }
    if (lang === LANGUAGE.uz) {
      if (position === PLAYERS.GOA) {
        return 'DR'
      }
      if (position === PLAYERS.DEF) {
        return 'HM'
      }
      if (position === PLAYERS.MID) {
        return 'YH'
      }
      if (position === PLAYERS.STR) {
        return 'HJ'
      }
    }
    return position
  }

  const columns = [
    columnHelper.accessor('name', {
      accessorKey: 'name',
      cell: (info) => info.getValue(),
      header: t('Ism'),
      meta: {
        filterVariant: 'name',
      },
    }),
    columnHelper.accessor('club.name', {
      accessorKey: 'club.name',
      header: t('Klub'),
      meta: {
        filterVariant: 'club',
      },
    }),
    columnHelper.accessor('price', {
      accessorKey: 'price',
      header: t('Narx'),
      cell: (info) => info.renderValue(),
      filterFn: (row, id, filterValues) => {
        const price = row.getValue(id)
        const { min, max } = filterValues

        if (min !== undefined && price < min) {
          return false
        }
        if (max !== undefined && price > max) {
          return false
        }
        return true
      },
      meta: {
        filterVariant: 'price',
      },
    }),
    columnHelper.accessor((row) => row.point, {
      accessorFn: (row) => row.point,
      id: 'point',
      cell: (info) => info.getValue(),
      header: t('Ochko'),
    }),
    columnHelper.accessor('position', {
      accessorFn: (row) => getCorrentPlayerPosition(row.position),
      id: 'position',
      cell: (info) => <i>{info.getValue()}</i>,
      header: t('Poz'),
    }),
  ]

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
    initialState: {
      columnFilters: [
        {
          id: 'position',
          value: getCorrentPlayerPosition(prevPlayer?.position ?? 'STR'),
        },
      ],
    },
  })

  return (
    <div className="h-full border-collapse overflow-x-auto text-neutral-200 md:text-sm">
      <div className="relative m-1 flex w-auto flex-col gap-x-0.5 gap-y-2 text-sm xs:text-xs sm:grid sm:grid-cols-4 md:gap-2 md:text-sm lg:text-base xl:gap-y-4">
        {table
          .getHeaderGroups()
          .map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TransferTableFilters key={header.id} column={header.column} />
            ))
          )}
      </div>
      <table className="mt-2 w-full min-w-80 table-auto text-sm">
        <TransferTableHead table={table} />
        <TransferTableBody
          prevPlayer={prevPlayer}
          table={table}
          flexRender={flexRender}
          handleModal={handleModal}
        />
      </table>
      <TransferTablePagination table={table} />
    </div>
  )
}

export default PlayerTable
