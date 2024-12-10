import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const MatchSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex items-center justify-center gap-1 px-1 py-2 xs:px-4">
        <div className="flex w-full items-center justify-end gap-2">
          <Skeleton className="h-4 w-14 md:w-20" />
          <Skeleton className="size-8 rounded-full xs:size-10" />
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-0 rounded-sm md:w-40">
          <Skeleton className="h-6 w-10 md:w-16" />
        </div>
        <div className="flex w-full items-center gap-2">
          <Skeleton className="size-8 rounded-full xs:size-10" />
          <Skeleton className="h-4 w-14 md:w-20" />
        </div>
      </CardContent>
    </Card>
  )
}

export default MatchSkeleton
