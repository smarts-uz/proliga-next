import Image from 'next/image'

const PlayerNameFilter = ({ column, columnFilterValue }) => {
  return (
    <div className="col-span-2 relative w-full max-w-96">
      <input
        className="mb-2 h-8 w-full rounded-md bg-neutral-800 px-2 text-sm text-neutral-200 shadow"
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
