import { useState, useEffect, useMemo } from 'react'

const PriceFilter = ({ column, columnFilterValue }) => {
  console.log(columnFilterValue)

  return (
    <div className="flex w-full items-center gap-2">
      <h3 className="hidden text-sm font-semibold md:block md:text-base">
        Narx
      </h3>
      {/* <div
        className="flex items-center gap-1 text-neutral-200 md:flex-row"
        onClick={(e) => e.stopPropagation()}
      > */}
      <select
        onClick={(e) => column.setFilterValue(e.target.value)}
        // value={columnFilterValue?.[0] ?? ''}
      >
        <option defaultChecked value={1}>
          All
        </option>
        <option value={8}>complicated</option>
        <option value={10}>relationship</option>
        <option value={12}>single</option>
      </select>
      {/* <DebouncedInput
          type="number"
          // value={columnFilterValue?.[0] ?? ''}
          value={4}
          // onChange={(value) =>
          //   column.setFilterValue((old) => [value, old?.[0]])
          // }
          placeholder={`Min`}
          className="w-24 rounded border shadow"
        /> */}
      {/* <input
          type="number"
          value={columnFilterValue?.[1] ?? ''}
          onChange={(e) =>
            column.setFilterValue((old) => [old?.[0], e.target.value])
          }
          placeholder={`Gacha`}
          className="h-8 w-full max-w-32 rounded border bg-neutral-950 px-1 text-neutral-200"
        /> */}
      {/* </div> */}
    </div>
  )
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

const MIN = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] // create objects from 4.5 to 16 by increment of .5
const MAX = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]

export default PriceFilter
