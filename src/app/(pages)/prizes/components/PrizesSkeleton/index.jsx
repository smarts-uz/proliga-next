import { Skeleton } from '@/components/ui/skeleton'

export function PrizeSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Skeleton className="mb-2 h-4 w-24" />
      <Skeleton className="h-28 w-28 rounded-xl md:h-36 md:w-36" />
      <Skeleton className="mt-2 h-6 w-16" />
    </div>
  )
}

export function CompetitionSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-100/50 bg-black/25 p-2 backdrop-blur-sm md:p-4">
      <div className="mb-2 flex items-center gap-2 border-b border-neutral-500/80 pb-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="flex flex-col gap-2 xl:flex-row">
        <PrizeSkeleton />
        <PrizeSkeleton />
        <PrizeSkeleton />
      </div>
    </div>
  )
}
