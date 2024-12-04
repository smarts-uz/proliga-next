import { Skeleton } from '@/components/ui/skeleton'

export function ArticleSkeleton() {
  return (
    <div className="group w-full py-1.5">
      <div className="flex items-center text-xs text-neutral-400">
        <Skeleton className="h-3 w-24" />
      </div>
      <Skeleton className="mt-1.5 h-4 w-full" />
      <Skeleton className="mt-1 h-4 w-3/4" />
      <div className="mt-1.5 flex justify-end">
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="mt-1.5 h-px w-full" />
    </div>
  )
}
