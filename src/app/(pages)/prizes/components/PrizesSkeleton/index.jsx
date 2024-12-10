import { Skeleton } from '@/components/ui/skeleton'

export function PrizeSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Skeleton className="mb-2 h-4 w-24 bg-neutral-500" />
      <Skeleton className="h-full min-h-56 w-full rounded-xl bg-neutral-500 md:h-40 md:min-h-max md:w-40" />
      <Skeleton className="mt-2 h-6 w-16 bg-neutral-500" />
    </div>
  )
}

export function CompetitionSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-100/50 bg-black/25 p-2 backdrop-blur-sm md:p-4">
      <div className="mb-2 flex items-center gap-2 border-b border-neutral-500/80 pb-2">
        <Skeleton className="h-10 w-10 rounded-full bg-neutral-500" />
        <Skeleton className="h-6 w-32 bg-neutral-500" />
      </div>
      <div className="flex flex-col gap-2 xl:flex-row">
        <PrizeSkeleton />
        <PrizeSkeleton />
        <PrizeSkeleton />
      </div>
    </div>
  )
}
