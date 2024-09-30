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

function PlayerStatisticsTable() {
  const { t } = useTranslation()
  const [data, setData] = useState([])
  const { lang } = useSelector((state) => state.systemLanguage)
  const { currentPlayerResult, currentPlayer } = useSelector(
    (store) => store.players
  )
  const [styles, setStyles] = useState('border-transparent rounded-sm')
  const { clubs } = useSelector((store) => store.clubs)

  useEffect(() => {
    if (currentPlayerResult) {
      setData(currentPlayerResult)
    }
  }, [currentPlayerResult])

  const getCorrectDate = (startDate) => {
    const date = new Date(startDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  }

  const getClubInfoById = (id) => {
    return clubs.find((c) => c.id === id)
  }

  const getCorrectCompetitor = (match) => {
    if (match.home_club_id === currentPlayer.club.id) {
      return getClubInfoById(match.away_club_id)?.name
    } else if (match.away_club_id === currentPlayer.club.id) {
      return getClubInfoById(match.home_club_id)?.name
    }
  }

  const getCorrectCompetitorStatus = (match) => {
    if (match.home_club_id === currentPlayer.club.id) {
      return t('Uyda ')
    } else if (match.away_club_id === currentPlayer.club.id) {
      return t('Mehmonda')
    }
  }

  const getCorrectScore = (match) => {
    if (match.home_club_id === currentPlayer.club.id) {
      match.home_club_result > match.away_club_result
        ? setStyles('border-green-500 rounded-md')
        : setStyles('border-yellow-500 rounded-md')
      return `${match.home_club_result}-${match.away_club_result}`
    } else if (match.away_club_id === currentPlayer.club.id) {
      match.away_club_result > match.home_club_result
        ? setStyles('border-green-500 rounded-md')
        : setStyles('border-yellow-500 rounded-md')
      return `${match.away_club_result}-${match.home_club_result}`
    }
  }

  const columns = [
    columnHelper.accessor('Sana', {
      accessorFn: (row) => getCorrectDate(row.match_id.started_date),
      id: 'sana',
      header: t('Sana'),
    }),
    columnHelper.accessor('Competititor', {
      accessorFn: (row) => getCorrectCompetitor(row.match_id),
      header: t('Raqib'),
      id: 'competitor',
    }),
    columnHelper.accessor('Status', {
      header: '',
      accessorFn: (row) => getCorrectCompetitorStatus(row.match_id),
      id: 'status',
    }),
    columnHelper.accessor('score', {
      accessorFn: (row) => getCorrectScore(row.match_id),
      header: t('Hisob'),
      id: 'score',
    }),
    columnHelper.accessor('G', {
      accessorFn: (row) => row?.player_result_id?.goal,
      id: 'gol',
      cell: (info) => info.getValue(),
      header: t('G'),
    }),
    columnHelper.accessor('GA', {
      accessorFn: (row) => row?.player_result_id?.goal_asist,
      id: 'gol assist',
      cell: (info) => info.getValue(),
      header: t('GA'),
    }),
    // columnHelper.accessor((row) => row.missed_penalty, {
    //   accessorFn: (row) => row?.player_result_id?.missed_penalty,
    //   id: 'returned penalty',
    //   cell: (info) => info.getValue(),
    //   header: t('QP'),
    // }),
    columnHelper.accessor((row) => row.yellow_card, {
      accessorFn: (row) => row?.player_result_id?.yellow_card ?? 0,
      id: 'Yellow Card',
      header: t('SK'),
    }),
    columnHelper.accessor((row) => row.is_red_card, {
      accessorFn: (row) => (row?.player_result_id?.is_red_card ? 1 : 0),
      id: 'Red Card',
      cell: (info) => info.getValue(),
      header: t('QZ'),
    }),
    columnHelper.accessor('Played min', {
      accessorFn: (row) => row?.player_result_id?.played_min,
      id: 'played-min',
      cell: (info) => info.getValue(),
      header: t('MIN'),
    }),
    columnHelper.accessor('ochko', {
      accessorFn: (row) => row?.point,
      id: 'ochko',
      cell: (info) => info.getValue(),
      header: t('O'),
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
    <table className="h-full w-full table-auto text-xs md:text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody
        scoreStyles={styles}
        table={table}
        flexRender={flexRender}
      />
    </table>
  )
}

export default PlayerStatisticsTable
