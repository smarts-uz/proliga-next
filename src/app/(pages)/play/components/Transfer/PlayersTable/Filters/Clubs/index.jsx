const ClubsFilter = ({ column, columnFilterValue }) => {
  return (
    <select
      onClick={(e) => e.stopPropagation()}
      className="h-8 w-full max-w-36 truncate rounded border bg-neutral-950 px-1 text-neutral-200 shadow selection:accent-primary checked:bg-red-400 active:accent-primary md:max-w-48"
    >
      <option value="" className="text-black checked:bg-red-400" defaultChecked>
        Clublar
      </option>
    </select>
  )
}

export default ClubsFilter
