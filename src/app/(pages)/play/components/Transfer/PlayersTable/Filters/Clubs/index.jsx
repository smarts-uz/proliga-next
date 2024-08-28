
const ClubsFilter = ({ column, columnFilterValue }) => {
  return (
    <input
      className="inline-block h-8 w-full max-w-48 truncate rounded border bg-neutral-950 px-1 text-neutral-200 shadow"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Club nomi...`}
      type="text"
      value={columnFilterValue ?? ''}
    />
  )
}

export default ClubsFilter
