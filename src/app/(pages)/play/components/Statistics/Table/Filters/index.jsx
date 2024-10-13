import DefaultFilter from './Default'
import PositionsFilter from './Positions'
import PlayerNameFilter from './Name'
import ClubsFilter from './Clubs'

function StatisticsTableFilters({ column }) {
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnFilterValue = column.getFilterValue()

  return filterVariant === 'name' ? (
    <PlayerNameFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'club' ? (
    <ClubsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'position' ? (
    <PositionsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : (
    <DefaultFilter column={column} columnFilterValue={columnFilterValue} />
  )
}

export default StatisticsTableFilters
