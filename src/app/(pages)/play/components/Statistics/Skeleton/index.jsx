import { Skeleton } from '@/components/ui/skeleton'
import TopTeams from '../../TopTeams'

const StatisticsTableSkeleton = () => {
  return (
    <>
      <StatisticsTableFiltersSkeleton />
      <table className="h-auto w-full min-w-[310px] text-[10px] xs:text-xs md:text-sm">
        <StatisticsTableHeadSkeleton />
        <StatisticsTableBodySkeleton />
      </table>
      <StatisticsTablePaginationSkeleton />
    </>
  )
}

const StatisticsTableBodySkeleton = () => {
  return (
    <tbody>
      {[...Array(14)].map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="mx-auto w-full border-b border-neutral-700 hover:bg-neutral-950"
        >
          {[...Array(10)].map((_, cellIndex) => (
            <td
              key={cellIndex}
              className="h-8 w-min px-0.5 py-1 text-center sm:min-w-8 md:text-start"
            >
              <Skeleton className="h-4 w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

const StatisticsTableHeadSkeleton = () => {
  return (
    <thead>
      <tr className="relative rounded-md">
        {[...Array(10)].map((_, index) => (
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

const StatisticsTableFiltersSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-2 text-xs xs:text-sm sm:flex-row">
      <Skeleton className="h-8 w-full sm:w-80" />
      <Skeleton className="h-8 w-full sm:w-40" />
    </div>
  )
}

const StatisticsSkeleton = () => {
  return (
    <section className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col gap-4 overflow-x-auto rounded-xl bg-black px-2 py-3 text-neutral-200 xs:px-3 md:p-5 lg:w-2/3">
        <StatisticsTableSkeleton />
      </div>
      <TopTeams />
    </section>
  )
}
const StatisticsTablePaginationSkeleton = () => {
  return (
    <section className="mt-auto flex items-center justify-center gap-2 overflow-x-auto">
      {[...Array(9)].map((_, index) => (
        <Skeleton key={index} className="h-7 w-7 rounded md:h-8 md:w-8" />
      ))}
    </section>
  )
}

export default StatisticsSkeleton
