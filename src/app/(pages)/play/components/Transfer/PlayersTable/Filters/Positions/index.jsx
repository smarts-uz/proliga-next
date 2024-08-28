const PositionsFilter = ({ column, columnFilterValue }) => {
  return (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
      className="h-8 w-full rounded border bg-neutral-950 px-1 text-neutral-200 shadow md:min-w-24"
    >
      <option value="">All</option>
      <option value="GOA">GOA</option>
      <option value="DEF">DEF</option>
      <option value="MID">MID</option>
      <option value="STR">STR</option>
    </select>
  )
}

export default PositionsFilter
