import { Skeleton } from '@/components/ui/skeleton'
import TopTeams from '../../TopTeams'

const TournamentSkeleton = () => {
  return (
    <section className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col overflow-x-auto rounded-xl bg-black px-2 py-4 text-neutral-200 xs:px-3 md:p-5 lg:w-2/3">
        <TournamentSelectedTourSkeleton />
        <TournamentTableSkeleton />
        <TournamentPaginationSkeleton />
      </div>
      <TopTeams />
    </section>
  )
}

const TournamentTableSkeleton = () => {
  return (
    <table className="h-auto w-full min-w-72 table-auto text-xs sm:text-sm">
      <thead>
        <tr>
          {[...Array(5)].map((_, index) => (
            <th
              key={index}
              className="p-0.5 text-center sm:min-w-16 md:p-1 md:text-start"
            >
              <Skeleton className="h-6 w-full" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(14)].map((_, rowIndex) => (
          <tr
            key={rowIndex}
            className="mx-auto border-b border-neutral-700 bg-neutral-900 text-center odd:bg-stone-950 hover:bg-neutral-800 md:text-start"
          >
            {[...Array(5)].map((_, cellIndex) => (
              <td
                key={cellIndex}
                className="h-8 w-min px-0.5 capitalize md:w-auto"
              >
                <Skeleton className="h-4 w-full" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const TournamentPaginationSkeleton = () => {
  return (
    <div className="mt-auto flex items-center justify-center gap-2 pt-2 text-sm md:text-base">
      <Skeleton className="h-8 w-24 rounded" />
      <Skeleton className="h-8 w-10 rounded" />
      <Skeleton className="h-8 w-24 rounded" />
    </div>
  )
}

const TournamentSelectedTourSkeleton = () => {
  return (
    <div className="mb-4 w-full max-w-40">
      <Skeleton className="h-8 w-full" />
    </div>
  )
}

export default TournamentSkeleton
