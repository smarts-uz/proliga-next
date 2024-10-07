'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import { useSelector } from 'react-redux'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import PlayerInfoTablePagination from './Pagination'

const columnHelper = createColumnHelper()

function PlayerStatisticsTable({ matches }) {
  const { t } = useTranslation()
  const { currentPlayer } = useSelector((store) => store.players)
  const [styles, setStyles] = useState('border-neutral-400  rounded-sm')
  const { clubs } = useSelector((store) => store.clubs)
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const getCorrectDate = (startDate) => {
    const date = new Date(startDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  }

  const getClubInfoById = (id) => {
    return clubs.find((c) => c.id === id)
  }

  const getCorrectCompetitor = (match) => {
    if (match.home_club_id === currentPlayer?.club?.id) {
      return getClubInfoById(match.away_club_id)?.name
    } else if (match.away_club_id === currentPlayer?.club?.id) {
      return getClubInfoById(match.home_club_id)?.name
    }
  }

  const getCorrectScore = (match) => {
    if (match.home_club_id === currentPlayer?.club?.id) {
      match.home_club_result > match.away_club_result
        ? setStyles('border-green-500 rounded-md')
        : setStyles('border-red-500 rounded-md')
      return `${match.home_club_result ?? 0}-${match.away_club_result ?? 0}`
    } else if (match.away_club_id === currentPlayer?.club?.id) {
      match.away_club_result > match.home_club_result
        ? setStyles('border-green-500 rounded-md')
        : setStyles('border-red-500 rounded-md')
      return `${match.away_club_result ?? 0}-${match.home_club_result ?? 0}`
    }
  }

  const columns = [
    columnHelper.accessor('Sana', {
      accessorFn: (row) =>
        getCorrectDate(row?.match_id?.started_date ?? Date.now()),
      id: 'sana',
      header: t('Sana'),
    }),
    columnHelper.accessor('Competititor', {
      accessorFn: (row) => getCorrectCompetitor(row.match_id),
      header: t('Raqib'),
      id: 'competitor',
    }),
    columnHelper.accessor('Score', {
      accessorFn: (row) => getCorrectScore(row.match_id) ?? '0-0',
      header: t('Hisob'),
      id: 'score',
    }),
    columnHelper.accessor('Quriq Oyin', {
      accessorFn: (row) => (row?.player_result_id?.is_shutout ? 'ha' : 'yoq'),
      header: t('QO’'),
      id: 'QO’',
      meta: {
        title: 'quriq oyin',
      },
    }),
    columnHelper.accessor('Qaytarilagian Penalti', {
      accessorFn: (row) => row?.player_result_id?.blocked_penalty ?? 0,
      header: t('QP'),
      id: 'QP',
    }),
    columnHelper.accessor('Avto Gol', {
      accessorFn: (row) => row?.player_result_id?.autogoal ?? 0,
      header: t('AG'),
      id: 'AG',
    }),
    columnHelper.accessor('Otkazib yuborilgan har 2 top farqi', {
      accessorFn: (row) => row?.player_result_id?.every_2_missed_goals ?? 0,
      header: t('O’2'),
      id: 'O’2',
    }),
    columnHelper.accessor('G', {
      accessorFn: (row) => row?.player_result_id?.goal ?? 0,
      id: 'gol',
      cell: (info) => info.getValue(),
      header: t('G'),
    }),
    columnHelper.accessor('GA', {
      accessorFn: (row) => row?.player_result_id?.goal_asist ?? 0,
      id: 'gol assist',
      cell: (info) => info.getValue(),
      header: t('GA'),
    }),
    columnHelper.accessor('Yellow Card', {
      accessorFn: (row) => row?.player_result_id?.yellow_card ?? 0,
      id: 'Yellow Card',
      header: t('SK'),
    }),
    columnHelper.accessor('Red Card', {
      accessorFn: (row) => (row?.player_result_id?.is_red_card ? 1 : 0),
      id: 'Red Card',
      cell: (info) => info.getValue(),
      header: t('QZ'),
    }),
    columnHelper.accessor('Played min', {
      accessorFn: (row) => row?.player_result_id?.played_min ?? '00',
      id: 'played-min',
      cell: (info) => info.getValue(),
      header: t('MIN'),
    }),
    columnHelper.accessor('ochko', {
      accessorFn: (row) => row?.point ?? 0,
      id: 'ochko',
      cell: (info) => info.getValue(),
      header: t('O'),
    }),
  ]

  const table = useReactTable({
    columns,
    data: matches ?? [],
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
    <section className="h-auto">
      <table className="h-full w-full table-auto text-[10px] 2xs:text-[11px] md:text-xs xl:text-sm">
        <TransferTableHead table={table} />
        <TransferTableBody
          scoreStyles={styles}
          table={table}
          flexRender={flexRender}
        />
      </table>
      {matches?.length > 9 && <PlayerInfoTablePagination table={table} />}
    </section>
  )
}

export default PlayerStatisticsTable
