'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import TransferTableHead from './Head'
import TransferTableBody from './Body'
import { useSelector } from 'react-redux'
import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
const columnHelper = createColumnHelper()

function TournamentTable({ currentTour }) {
  const { t } = useTranslation()
  const { allTeams } = useSelector((store) => store.teams)
  const { currentTourTeam } = useSelector((store) => store.tourTeams)
  const { tours } = useSelector((store) => store.tours)

  const registeredTour = useMemo(
    () => tours.find((t) => t.id === currentTourTeam?.tour_id),
    [tours, currentTourTeam?.tour_id]
  )

  const curTour = useMemo(
    () => tours.find((t) => t.id === currentTour),
    [currentTour, tours]
  )

  const curTourTeam = useMemo(
    () =>
      Boolean(
        allTeams.find((team) => team?.team?.id === currentTourTeam?.team?.id)
      ),
    [allTeams, currentTourTeam]
  )

  const toursCondition = useMemo(
    () => registeredTour?.order <= curTour?.order,
    [curTour?.order, registeredTour?.order]
  )

  const [sorting, setSorting] = useState([
    {
      id: 'hammasi',
      desc: true,
    },
  ])

  const columns = [
    columnHelper.accessor('', {
      accessorFn: (row) => row?.team?.order ?? '',
      header: t("O'RIN").toLocaleLowerCase(),
      id: 'Id',
    }),
    columnHelper.accessor('name', {
      accessorFn: (row) => row?.team?.name ?? '',
      cell: (info) => info.getValue(),
      header: t('Jamoa'),
    }),
    columnHelper.accessor('user', {
      accessorFn: (row) => row?.user_id?.name ?? 'Ism kiritilmagan',
      header: t('Foydalanuvchi'),
    }),
    columnHelper.accessor('point', {
      accessorFn: (row) => row?.point,
      id: 'point',
      cell: (info) => info.getValue(),
      header: t('Tur'),
    }),
    columnHelper.accessor('team-point', {
      accessorFn: (row) => row?.team?.point,
      id: 'hammasi',
      header: t('Hammasi'),
    }),
  ]

  const table = useReactTable({
    columns,
    data: allTeams ?? [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <table className="h-auto w-full min-w-72 table-auto text-xs sm:text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody
        table={table}
        flexRender={flexRender}
        showTourTeam={!curTourTeam && toursCondition}
        currentTourTeam={currentTourTeam}
      />
    </table>
  )
}

export default TournamentTable
