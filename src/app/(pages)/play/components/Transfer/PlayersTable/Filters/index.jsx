import PriceFilter from './Price'
import DefaultFilter from './Default'
import PositionsFilter from './Positions'
import PlayerNameFilter from './Name'
import ClubsFilter from './Clubs'

function TransferTableFilters({ column, table }) {
  // const firstValue = table
  //   .getPreFilteredRowModel()
  //   .flatRows[0]?.getValue(column.id)
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnFilterValue = column.getFilterValue()

  return filterVariant === 'price' ? (
    <PriceFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'name' ? (
    <PlayerNameFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'club' ? (
    <ClubsFilter column={column} columnFilterValue={columnFilterValue} />
  ) : filterVariant === 'position' ? (
    <PositionsFilter
      table={table}
      column={column}
      columnFilterValue={columnFilterValue}
    />
  ) : (
    <DefaultFilter column={column} columnFilterValue={columnFilterValue} />
  )
}

export default TransferTableFilters
