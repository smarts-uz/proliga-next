import { useTranslation } from 'react-i18next'
const PositionsFilter = ({ column, columnFilterValue }) => {
  const active = 'bg-primary text-black font-bold'
  const passive = 'bg-transparent text-neutral-500 font-base'
  const { t } = useTranslation()
  const DATA = [
    {
      title: t('Barchasi'),
      key: '',
    },
    {
      title: t('Darvazabon'),
      key: 'GOA',
    },
    {
      title: t('Himoyachi'),
      key: 'DEF',
    },
    {
      title: t('Y Himoyachi'),
      key: 'MID',
    },
    {
      title: t('Hujumchi'),
      key: 'STR',
    },
  ]

  return (
    <div className="col-span-4 flex w-full gap-2 overflow-x-scroll text-xs xs:text-sm lg:gap-4 lg:text-base">
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

export default PositionsFilter
