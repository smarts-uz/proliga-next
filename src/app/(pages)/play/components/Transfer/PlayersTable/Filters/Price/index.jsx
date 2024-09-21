const PriceFilter = ({ column, columnFilterValue }) => {
  return (
    <div className="flex w-full items-center gap-0.5 text-sm sm:col-span-1 md:gap-1 md:text-base">
      <select
        className="h-8 w-full min-w-12 rounded border border-neutral-500 bg-neutral-950 px-0.5 text-neutral-200 md:min-w-max md:px-1"
        onChange={(e) =>
          column.setFilterValue(() => ({
            min: e.target.value,
            max: columnFilterValue?.max ?? MAX[0],
          }))
        }
      >
        {MIN.map((item, index) => (
          <option
            className="bg-neutral-950 checked:bg-neutral-700"
            defaultChecked={index === 0 && true}
            key={index}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
      <select
        className="h-8 w-full min-w-12 rounded border border-neutral-500 bg-neutral-950 px-0.5 text-neutral-200 md:min-w-max md:px-1"
        onChange={(e) =>
          column.setFilterValue(() => ({
            min: columnFilterValue?.min ?? MIN[0],
            max: e.target.value,
          }))
        }
      >
        {MAX.map((item, index) => (
          <option
            className="bg-neutral-950 checked:bg-neutral-800"
            defaultChecked={index === 0 && true}
            key={index}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

const MIN = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const MAX = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]

export default PriceFilter
