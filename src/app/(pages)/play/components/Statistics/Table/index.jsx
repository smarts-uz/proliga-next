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
import { getCorrentPlayerPosition } from 'app/utils/getCorrectPlayerPosition.utils'

const columnHelper = createColumnHelper()

function StatisticsTable() {
  const { t } = useTranslation()
  const { players } = useSelector((state) => state.playerResult)
  const [data, setData] = useState(players ?? [])
  const { lang } = useSelector((state) => state.systemLanguage)

  useEffect(() => {
    if (players) {
      setData(players)
    }
  }, [players])

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
      cell: (info) => info.getValue(),
      header: t("O'yinchi ismi"),
      id: 'player-name',
      meta: {
        title: t("O'yinchini toliq ismi"),
      },
    }),
    columnHelper.accessor('club_id.name', {
      accessorKey: 'club_id.name',
      cell: (info) => info.getValue(),
      header: t('Klub'),
      id: 'club',
      meta: {
        title: t('Clubni nomi'),
      },
    }),
    columnHelper.accessor('ochko', {
      accessorFn: (row) => row?.player_id?.point,
      id: 'ochko',
      cell: (info) => info.getValue(),
      header: t('O'),
      meta: {
        title: t('Ochko'),
      },
    }),
    columnHelper.accessor((row) => row.goal, {
      accessorFn: (row) => row.goal,
      id: 'gol',
      cell: (info) => info.getValue(),
      header: t('G'),
      meta: {
        title: t('Gol'),
      },
    }),
    columnHelper.accessor('GA', {
      accessorFn: (row) => row.goal_asist,
      id: 'gol assist',
      cell: (info) => info.getValue(),
      header: t('GA'),
      meta: {
        title: t('Assist'),
      },
    }),
    columnHelper.accessor((row) => row.missed_penalty, {
      accessorFn: (row) => row.missed_penalty,
      id: 'returned penalty',
      cell: (info) => info.getValue(),
      header: t('QP'),
      meta: {
        title: t('Qaytarilgan penalti'),
      },
    }),
    columnHelper.accessor((row) => row.yellow_card, {
      accessorFn: (row) => row.yellow_card,
      id: 'Yellow Card',
      cell: (info) => <i>{info.getValue()}</i>,
      header: t('SK'),
      meta: {
        title: t('Sariq kartochka'),
      },
    }),
    columnHelper.accessor((row) => row.red_card, {
      accessorFn: (row) => row.red_card,
      id: 'Red Card',
      cell: (info) => info.getValue(),
      header: t('QZ'),
      meta: {
        title: t('Qizil kartochka'),
      },
    }),
    columnHelper.accessor((row) => row.played_min, {
      accessorFn: (row) => row.played_min,
      id: 'played-min',
      cell: (info) => info.getValue(),
      header: t('MIN'),
      meta: {
        title: t('O‘ynagan vaqti'),
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
    <table className="h-full w-full min-w-[18rem] text-[10px] xs:text-xs md:text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody table={table} flexRender={flexRender} />
    </table>
  )
}

export default StatisticsTable
