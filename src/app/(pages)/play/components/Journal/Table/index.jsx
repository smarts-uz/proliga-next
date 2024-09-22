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

function StatisticsTable() {
  const { t } = useTranslation()
  const { players } = useSelector((state) => state.playerResult)
  const [data, setData] = useState(players ?? [])

  useEffect(() => {
    if (players) {
      setData(players)
    }
  }, [players])

  const columns = [
    columnHelper.accessor('player_id.position', {
      accessorFn: (row) => row.player_id.position,
      id: 'player-position',
      header: 'Poz',
      meta: {
        title: 'blah2',
      },
    }),
    columnHelper.accessor('player_id.name', {
      accessorKey: 'player_id.name',
      cell: (info) => info.getValue(),
      header: 'Oyinchi ismi',
      id: 'player-name',
      meta: {
        title: 'oyinchini toliq ismi',
      },
    }),
    columnHelper.accessor((row) => row.goal, {
      accessorFn: (row) => row.goal,
      id: 'gol',
      cell: (info) => info.getValue(),
      header: t('G'),
      meta: {
        title: 'blah2',
      },
    }),
    columnHelper.accessor((row) => row.goal_asist, {
      accessorFn: (row) => row.goal_asist,
      id: 'gol assist',
      cell: (info) => info.getValue(),
      header: t('GA'),
      meta: {
        title: 'blah2',
      },
    }),
    columnHelper.accessor((row) => row.played_min, {
      accessorFn: (row) => row.played_min,
      id: 'played min',
      cell: (info) => info.getValue(),
      header: t('PM'),
      meta: {
        title: 'blah2',
      },
    }),
    columnHelper.accessor((row) => row.missed_penalty, {
      accessorFn: (row) => row.missed_penalty,
      id: 'missed penalty',
      cell: (info) => info.getValue(),
      header: t('MP'),
      meta: {
        title: 'blah2',
      },
    }),
    columnHelper.accessor((row) => row.yellow_card, {
      accessorFn: (row) => row.yellow_card,
      id: 'Yellow Card',
      cell: (info) => <i>{info.getValue()}</i>,
      header: t('YC'),
      meta: {
        title: 'blah2',
      },
    }),
    columnHelper.accessor((row) => row.red_card, {
      accessorFn: (row) => row.red_card,
      id: 'Red Card',
      cell: (info) => info.getValue(),
      header: t('RC'),
      meta: {
        title: 'blah2',
      },
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

export default StatisticsTable
