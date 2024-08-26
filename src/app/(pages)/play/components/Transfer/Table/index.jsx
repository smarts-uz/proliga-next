import {
  Column,
  ColumnDef,
  PaginationState,
  Table,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
} from '@tanstack/react-table'
import React from 'react'
import { superData } from './playersData'
import { supabase } from '../../../../../lib/supabaseClient'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: () => <span className="w-1/2">Name</span>,
  }),
  columnHelper.accessor((row) => row.position, {
    id: 'position',
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Position',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor('visits', {
  //   header: () => <span>Visits</span>,
  //   footer: (info) => info.column.id,
  // }),
  columnHelper.accessor('club.name', {
    header: 'Club',
    footer: (info) => info.column.id,
    meta: {
      filterVariant: 'range',
    },
  }),
  // columnHelper.accessor('progress', {
  //   header: 'Profile Progress',
  //   footer: (info) => info.column.id,
  // }),
]

function TransferTable() {
  const [players, setPlayers] = React.useState([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const [data, _setData] = React.useState([])

  React.useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('player')
        .select('id, name, position, club(name), price')
        .limit(220)
      if (error) return toast.error(error.message)
      if (data?.length > 0) _setData(data)
    }
    fetch()
  }, [])

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
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
    <div className="max-h-[40rem] w-1/2 overflow-y-auto rounded-xl bg-black p-6 text-neutral-200">
      <table className="h-96 table-fixed">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="w" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-center">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className={cell.column.id === 'name' ? 'w-1/3' : 'w-1/5'}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        <div mb={2}>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className='flex gap-4'>
          <button
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
            className='border rounded-sm py-1 px-2'
          >
            {'<'}
          </button>
          <button
            isDisabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            {'>'}
          </button>
        </div>
      </table>
    </div>
  )
}

export default TransferTable
