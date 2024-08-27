function TransferTableFilters({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex flex-col md:flex-row gap-1 text-black" onClick={(e) => e.stopPropagation()}>
      <input
        type="number"
        value={columnFilterValue?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="h-8 w-full md:w-16 rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
      />
      <input
        type="number"
        value={columnFilterValue?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="h-8 w-full md:w-16 rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
      />
    </div>
  ) : filterVariant === 'select' ? (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
      className="h-8 min-w-24 w-full rounded border bg-neutral-800 px-1 text-neutral-200 shadow"
    >
      <option value="">All</option>
      <option value="GOA">GOA</option>
      <option value="DEF">DEF</option>
      <option value="MID">MID</option>
      <option value="STR">STR</option>
    </select>
  ) : (
    <input
      className="h-8 w-full rounded border bg-neutral-800 px-1 truncate text-neutral-200 shadow"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={columnFilterValue ?? ''}
    />
  )
}

export default TransferTableFilters
