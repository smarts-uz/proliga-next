const PriceFilter = ({ column, columnFilterValue }) => {
  return (
    <div className="flex w-full gap-2 items-center">
      <h3 className="text-sm hidden md:block font-semibold md:text-base">Narx</h3>
      <div  
        className="flex items-center gap-1 text-neutral-200 md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="number"
          value={columnFilterValue?.[0] ?? ''}
          onChange={(e) =>
            column.setFilterValue((old) => [e.target.value, old?.[1]])
          }
          placeholder={`Dan`}
          className="h-8 w-full max-w-32 rounded border bg-neutral-950 px-1 text-neutral-200 shadow"
        />
        <input
          type="number"
          value={columnFilterValue?.[1] ?? ''}
          onChange={(e) =>
            column.setFilterValue((old) => [old?.[0], e.target.value])
          }
          placeholder={`Gacha`}
          className="h-8 w-full max-w-32 rounded border bg-neutral-950 px-1 text-neutral-200"
        />
      </div>
    </div>
  )
}

export default PriceFilter
