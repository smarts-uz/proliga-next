import { Skeleton } from '@/components/ui/skeleton'

const PlayersTableSkeleton = () => {
  return (
    <div className="fade-in-fast min-h-auto mx-auto h-min w-full max-w-[40rem] border-collapse overflow-x-auto rounded-xl border border-primary border-opacity-50 bg-black px-2 py-4 text-neutral-200 shadow-md shadow-neutral-600 transition-all hover:border-opacity-100 xs:px-3 sm:px-4 md:text-sm lg:w-1/2 lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[36rem]">
      <TeamOverviewSkeleton />
      <TransferTableFiltersSkeleton />
      <table className="w-full min-w-80 table-auto text-xs xl:text-sm">
        <TransferTableHeadSkeleton />
        <TransferTableBodySkeleton />
      </table>
      <TransferTablePaginationSkeleton />
    </div>
  )
}

const TeamOverviewSkeleton = () => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <Skeleton className="h-6 w-3/4" />
      <div className="flex justify-between">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  )
}

const TransferTableBodySkeleton = () => {
  return (
    <tbody>
      {[...Array(7)].map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="w-full border-b border-neutral-700 odd:bg-neutral-900"
        >
          {[...Array(5)].map((_, cellIndex) => (
            <td key={cellIndex} className="p-1">
              <Skeleton className="h-4 w-full min-w-8 2xl:min-w-10" />
            </td>
          ))}
          <td className="p-2">
            <Skeleton className="h-6 w-6 rounded-full" />
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const TransferTableFiltersSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-4 grid-rows-2 gap-x-0.5 gap-y-2 text-sm xs:text-xs sm:grid-rows-1 md:gap-1 lg:grid-rows-2 xl:grid-rows-1 xl:gap-y-1.5 2xl:text-sm">
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} className="h-8 w-full" />
      ))}
    </div>
  )
}

const TransferTableHeadSkeleton = () => {
  return (
    <thead>
      <tr>
        {[...Array(5)].map((_, index) => (
          <th key={index} className="p-2">
            <Skeleton className="h-6 w-full" />
          </th>
        ))}
      </tr>
    </thead>
  )
}

const TransferTablePaginationSkeleton = () => {
  return (
    <section className="mt-2 flex items-center justify-center gap-2 overflow-x-auto">
      {[...Array(7)].map((_, index) => (
        <Skeleton key={index} className="h-8 w-8 rounded" />
      ))}
    </section>
  )
}

export default PlayersTableSkeleton
