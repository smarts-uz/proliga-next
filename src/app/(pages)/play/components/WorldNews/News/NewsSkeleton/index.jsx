import { Skeleton } from '@/components/ui/skeleton'
import { ArticleSkeleton } from '../ArticleSkeleton'

export function NewsSkeleton({ count = 5 }) {
  return (
    <div className="relative mx-auto flex h-max min-h-[38rem] w-full min-w-max max-w-[32rem] flex-col items-center justify-between rounded-xl bg-neutral-950 p-4 shadow shadow-neutral-600 lg:mx-0 lg:w-auto lg:min-w-72 lg:flex-1 xl:p-5">
      <Skeleton className="h-5 w-32 self-start" />
      <div className="mt-1 w-full flex-1">
        {[...Array(count)].map((_, index) => (
          <ArticleSkeleton key={index} />
        ))}
      </div>
      <div className="mt-1 flex justify-center space-x-1">
        <Skeleton className="h-7 w-20" />
        <Skeleton className="h-7 w-10" />
        <Skeleton className="h-7 w-20" />
      </div>
    </div>
  )
}
