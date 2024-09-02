const PositionsFilter = ({ column, columnFilterValue }) => {
  const active = 'bg-primary text-black font-bold'
  const passive = 'bg-transparent text-neutral-500 font-base'
  console.log(column.getFilterValue())

  return (
    <div className="col-span-2 mt-2 flex w-full gap-2 overflow-x-auto lg:gap-4">
      {DATA.map((obj, index) => (
        <button
          key={index}
          className={`rounded px-2 py-1 font-medium transition-all md:px-4 md:text-sm 
          ${obj.key === '' && typeof columnFilterValue === 'undefined' ? active : obj.key === columnFilterValue ? active : passive}`}
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
    title: 'ALL',
    key: '',
  },
  {
    title: 'GOA',
    key: 'GOA',
  },
  {
    title: 'DEF',
    key: 'DEF',
  },
  {
    title: 'MID',
    key: 'MID',
  },
  {
    title: 'STR',
    key: 'STR',
  },
]

export default PositionsFilter
