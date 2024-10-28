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

function TournamentTable() {
  const { t } = useTranslation()
  const { allTeams } = useSelector((store) => store.teams)
  const { currentTourTeam } = useSelector((store) => store.tourTeams)
  const curTourTeam = useMemo(
    () => Boolean(allTeams.find((team) => team?.id === currentTourTeam?.id)),
    [allTeams, currentTourTeam]
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
    <table className="h-auto w-full min-w-80 table-auto text-xs xs:text-sm">
      <TransferTableHead table={table} />
      <TransferTableBody
        table={table}
        flexRender={flexRender}
        tableCurrentTourTeam={curTourTeam}
        currentTourTeam={currentTourTeam}
      />
    </table>
  )
}

export default TournamentTable
