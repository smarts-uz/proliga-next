const PositionsFilter = ({ column, columnFilterValue }) => {
  const active = 'bg-primary text-black font-bold'
  const passive = 'bg-transparent text-neutral-500 font-base'

  return (
    <div className="col-span-3 flex w-full gap-2 overflow-x-scroll lg:gap-4">
      {DATA.map((obj, index) => (
        <button
          key={index}
          className={`text-nowrap rounded px-1 py-1 font-medium uppercase transition-all md:px-4 md:text-sm 2xl:px-2 ${obj.key === '' && typeof columnFilterValue === 'undefined' ? active : obj.key === columnFilterValue ? active : passive}`}
          onClick={() => column.setFilterValue(obj.key)}
        >
          {obj.title}
        </button>
      ))}
    </div>
  )
}

const DATA = [
  {
    title: 'BRCHS',
    key: '',
  },
  {
    title: 'DRVZB',
    key: 'GOA',
  },
  {
    title: 'HMCH',
    key: 'DEF',
  },
  {
    title: 'YHMCH',
    key: 'MID',
  },
  {
    title: 'HJMCH',
    key: 'STR',
  },
]

export default PositionsFilter
