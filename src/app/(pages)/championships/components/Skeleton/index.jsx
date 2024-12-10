import { Skeleton } from '@/components/ui/skeleton'

export function ChampionshipSkeleton() {
  return (
    <div className="flex items-center space-x-4 rounded-sm border border-neutral-800 bg-neutral-900 p-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  )
}
