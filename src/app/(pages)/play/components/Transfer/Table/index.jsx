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
import Image from 'next/image'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('name', {
    accessorKey: 'name',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: () => <span className="w-1/2">Name</span>,
  }),
  columnHelper.accessor((row) => row.position, {
    accessorFn: (row) => row.position,
    id: 'position',
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Position',
    footer: (info) => info.column.id,
    meta: {
      filterVariant: 'select',
    },
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
    <div className="h-min w-1/2 overflow-auto rounded-xl bg-black p-6 text-neutral-200">
      <table className="w-full table-auto">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="text-start"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
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
        <tbody className="mt-4 space-y-2">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className={cell.column.id === 'name' ? 'w-[30%]' : 'w-1/6'}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {row.getVisibleCells().map((cell) => {
                if (cell.column.id === 'name')
                  return (
                    <td
                      className="block size-5 cursor-pointer"
                      key={cell.column.id}
                    >
                      <Image
                        src="/icons/plus.svg"
                        alt="plus"
                        width={20}
                        height={20}
                        className="filter-primary"
                      />
                    </td>
                  )
              })}
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
        <div className="mb-2 mt-8">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded-sm border px-2 py-1"
          >
            {'<'}
          </button>
          <button
            className="rounded-sm border px-2 py-1"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            {'>'}
          </button>
        </div>
      </table>
    </div>
  )
}

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex gap-1 text-black" onClick={(e) => e.stopPropagation()}>
      <input
        type="number"
        value={columnFilterValue?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-16 rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
      />
      <input
        type="number"
        value={columnFilterValue?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-16 rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
      />
    </div>
  ) : filterVariant === 'select' ? (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
      className="w-20 rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
    >
      <option value="">All</option>
      <option value="GOA">GOA</option>
      <option value="DEF">DEF</option>
      <option value="MID">MID</option>
      <option value="STR">STR</option>
    </select>
  ) : (
    <input
      className="w-32 rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={columnFilterValue ?? ''}
    />
  )
}

export default TransferTable
