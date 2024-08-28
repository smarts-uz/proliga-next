import PriceFilter from './Price'
import DefaultFilter from './Default'
import PositionsFilter from './Positions'
import PlayerNameFilter from './Name'
import ClubsFilter from './Clubs'

function TransferTableFilters({ column }) {
  // const firstValue = table
  //   .getPreFilteredRowModel()
  //   .flatRows[0]?.getValue(column.id)
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnFilterValue = column.getFilterValue()

  return filterVariant === 'range' ? (
    <PriceFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'name' ? (
    <PlayerNameFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'club' ? (
    <ClubsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'select' ? (
    <PositionsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : (
    <DefaultFilter column={column} columnFilterValue={columnFilterValue} />
  )
}

export default TransferTableFilters
