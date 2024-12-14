import { Skeleton } from '@/components/ui/skeleton'
import TopTeams from '../../TopTeams'

function TableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 md:gap-4">
        <div className="w-1/4">
          <Skeleton className="h-6 max-w-16 md:max-w-24" />
        </div>
        <div className="w-3/4">
          <Skeleton className="h-6 max-w-36 md:max-w-56" />
        </div>
      </div>
      <div className="space-y-2">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="flex gap-2 md:gap-4">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-8 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function JournalSkeleton() {
  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row">
      <section className="flex h-auto min-h-[40rem] w-full flex-1 table-auto flex-col overflow-x-auto rounded-xl bg-black px-2 py-4 text-neutral-200 xs:p-4 xs:px-3 md:p-5 lg:w-2/3">
        <TableSkeleton />
        <PaginationSkeleton />
      </section>
      <TopTeams />
    </div>
  )
}

const PaginationSkeleton = () => {
  return (
    <div className="mt-auto flex items-center justify-center gap-2 pt-2 text-sm md:text-base">
      <Skeleton className="h-8 w-24 rounded" />
      <Skeleton className="h-8 w-10 rounded" />
      <Skeleton className="h-8 w-24 rounded" />
    </div>
  )
}
