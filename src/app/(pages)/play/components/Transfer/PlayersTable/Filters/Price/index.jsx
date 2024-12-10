import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const PriceFilter = ({ column, columnFilterValue }) => {
  return (
    <div className="col-span-2 flex w-full items-center justify-between gap-1 text-sm sm:col-span-1 md:text-base lg:col-span-2 xl:col-span-1">
      <Select
        onValueChange={(value) =>
          column.setFilterValue(() => ({
            min: value,
            max: columnFilterValue?.max ?? MAX[0],
          }))
        }
        defaultValue={MIN[0]}
      >
        <SelectTrigger className="h-8 w-full min-w-10 rounded border border-neutral-500 bg-neutral-950 px-2 text-neutral-200 sm:max-w-28 md:min-w-max">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {MIN.map((item, index) => (
            <SelectItem
              className="bg-neutral-950 checked:bg-neutral-700"
              key={index}
              value={item}
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) =>
          column.setFilterValue(() => ({
            min: columnFilterValue?.min ?? MIN[0],
            max: value,
          }))
        }
        defaultValue={MAX[0]}
      >
        <SelectTrigger className="h-8 w-full min-w-10 rounded border border-neutral-500 bg-neutral-950 text-neutral-200 sm:max-w-28 md:min-w-max">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {MAX.map((item, index) => (
            <SelectItem
              className="bg-neutral-950 checked:bg-neutral-800"
              key={index}
              value={item}
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

const MIN = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const MAX = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]

export default PriceFilter
