import { Skeleton } from '@/components/ui/skeleton'

const CabinetTransactionsSkeleton = ({ rows = 10, cols = 4 }) => {
  return (
    <div className="flex h-full flex-col justify-between gap-1">
      <table className="h-auto w-full">
        <CabinetTransactionsSkeletonHead cols={cols} />
        <CabinetTransactionsSkeletonBody cols={cols} rows={rows} />
      </table>
      <CabinetTransactionsSkeletonPagination />
    </div>
  )
}

const CabinetTransactionsSkeletonBody = ({ cols = 5, rows = 10 }) => {
  return (
    <tbody>
      {[...Array(rows)].map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="mx-auto w-full border-b border-neutral-700 hover:bg-neutral-950"
        >
          {[...Array(cols)].map((_, cellIndex) => (
            <td
              key={cellIndex}
              className="h-8 w-min px-0.5 py-1 text-center sm:min-w-8 md:h-10 md:text-start"
            >
              <Skeleton className="h-5 w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

const CabinetTransactionsSkeletonHead = ({ cols = 5 }) => {
  return (
    <thead>
      <tr className="relative rounded-md">
        {[...Array(cols)].map((_, index) => (
          <th
            key={index}
            className="min-w-5 p-0.5 text-center md:p-1 md:text-start"
          >
            <Skeleton className="h-6 w-full" />
          </th>
        ))}
      </tr>
    </thead>
  )
}

const CabinetTransactionsSkeletonPagination = () => {
  return (
    <section className="mt-1 flex items-center justify-center gap-2 overflow-x-auto">
      {[...Array(7)].map((_, index) => (
        <Skeleton key={index} className="size-6 rounded md:size-8" />
      ))}
    </section>
  )
}

export default CabinetTransactionsSkeleton
