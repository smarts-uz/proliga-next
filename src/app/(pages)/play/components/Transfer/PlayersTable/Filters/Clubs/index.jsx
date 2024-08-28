const ClubsFilter = ({ column, columnFilterValue }) => {
  console.log(column)
  return (
    // <input
    //   className="inline-block h-8 w-full max-w-48 truncate rounded border bg-neutral-950 px-1 text-neutral-200 shadow"
    //   onChange={(e) => column.setFilterValue(e.target.value)}
    //   onClick={(e) => e.stopPropagation()}
    //   placeholder={`Club nomi...`}
    //   type="text"
    //   value={columnFilterValue ?? ''}
    // />
    <select
      className="h-8 w-full checked:bg-red-400  max-w-36 md:max-w-48 truncate active:accent-primary selection:accent-primary rounded border bg-neutral-950 px-1 text-neutral-200 shadow"
    >
      <option value="" className="checked:bg-red-400 text-black" defaultChecked>Clublar</option>

    </select>
  )
}

export default ClubsFilter
