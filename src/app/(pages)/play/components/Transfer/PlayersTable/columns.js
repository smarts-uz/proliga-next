import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper()
const columns = [
  columnHelper.accessor('name', {
    accessorKey: 'name',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: () => <span className="w-1/2">Name</span>,
  }),
  columnHelper.accessor((row) => row.position, {
    accessorFn: (row) => row.position,
    id: 'position',
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Position',
    footer: (info) => info.column.id,
    meta: {
      filterVariant: 'select',
    },
  }),
  columnHelper.accessor('price', {
    accessorKey: 'price',
    header: 'Price',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('club.name', {
    accessorKey: 'club.name',
    header: 'Club',
    footer: (info) => info.column.id,
    meta: {
      filterVariant: 'range',
    },
  }),
]
export default columns
