const DefaultFilter = ({ column, columnFilterValue }) => {
  return (
    <input
      className="h-8 w-full truncate rounded border bg-neutral-950 px-1 text-neutral-200 shadow"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={columnFilterValue ?? ''}
    />
  )
}

export default DefaultFilter
