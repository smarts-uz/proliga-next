import PriceFilter from './Price'
import DefaultFilter from './Default'
import PositionsFilter from './Positions'
import PlayerNameFilter from './Name'
import ClubsFilter from './Clubs'

function TransferTableFilters({ column }) {
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnFilterValue = column.getFilterValue()

  return filterVariant === 'name' ? (
    <PlayerNameFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'club' ? (
    <ClubsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'price' ? (
    <PriceFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'position' ? (
    <PositionsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : (
    <DefaultFilter column={column} columnFilterValue={columnFilterValue} />
  )
}

export default TransferTableFilters
