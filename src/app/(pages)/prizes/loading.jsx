import Gutter from 'components/Gutter'
import { Skeleton } from '@/components/ui/skeleton'
import { CompetitionSkeleton } from './components/PrizesSkeleton'

export default function PrizesLoading() {
  return (
    <section className="bg-gradient-to-tr from-red-800 to-blue-900 pb-12 pt-8">
      <Gutter>
        <Skeleton className="mb-6 h-10 w-48 bg-neutral-500" />
        <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
          {[...Array(4)].map((_, index) => (
            <CompetitionSkeleton key={index} />
          ))}
        </div>
      </Gutter>
    </section>
  )
}
