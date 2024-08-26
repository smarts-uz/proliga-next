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
import { supabase } from '../../../../../lib/supabaseClient'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('name', {
    accessorKey: 'name',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: () => <span className="w-1/2">Name</span>,
  }),
  columnHelper.accessor((row) => row.position, {
    accessorFn: row => row.position,
    id: 'position',
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Position',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('price', {
    accessorKey: 'price',
    header: 'Price',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor('visits', {
  //   header: () => <span>Visits</span>,
  //   footer: (info) => info.column.id,
  // }),
  columnHelper.accessor('club.name', {
    accessorKey: 'club.name',
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
    pageSize: 14,
  })

  const [data, _setData] = React.useState([])

  React.useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('player')
        .select('id, name, position, club(name), price')
        .limit(240)
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
    <div className="h-min text-sm w-1/2 overflow-y-auto rounded-xl bg-black p-6 text-neutral-200">
      <table className="w-full table-auto">
      <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? null}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </div>
                  </th>
                )
              })}
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
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
            className="rounded-sm border px-2 py-1"
          >
            {'<'}
          </button>
          <button
            className="rounded-sm border px-2 py-1"
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

function Filter({
  column,
  table,
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex text-black space-x-2" onClick={e => e.stopPropagation()}>
      <input
        type="number"
        value={(columnFilterValue)?.[0] ?? ''}
        onChange={e =>
          column.setFilterValue((old) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 text-black border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue )?.[1] ?? ''}
        onChange={e =>
          column.setFilterValue((old) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 text-black border shadow rounded"
      />
    </div>
  ) : (
    <input
      className="w-36 border text-black shadow rounded"
      onChange={e => column.setFilterValue(e.target.value)}
      onClick={e => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? '')}
    />
  )
}


export default TransferTable
