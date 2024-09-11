import Image from 'next/image'

const PlayerNameFilter = ({ column, columnFilterValue }) => {
  return (
    <div className="relative col-span-2 w-full">
      <input
        className="h-8 w-full rounded border border-neutral-500 bg-neutral-950 px-2 text-sm text-neutral-200 shadow placeholder:text-neutral-300"
        onChange={(e) => column.setFilterValue(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        placeholder={`O'yinchi Ismi...`}
        type="text"
        value={columnFilterValue ?? ''}
      />
      <Image
        src="/icons/search.svg"
        className="absolute right-2 top-2"
        alt="search"
        width={16}
        height={16}
      />
    </div>
  )
}

export default PlayerNameFilter
