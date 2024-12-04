import { Skeleton } from '@/components/ui/skeleton'
import Gutter from 'components/Gutter'
import { ChampionshipSkeleton } from './components/Skeleton'

export default function ChampionshipsLoading() {
  return (
    <Gutter>
      <section className="my-6 min-h-80 w-full rounded-xl bg-neutral-900 p-6 shadow shadow-neutral-800 dark:bg-neutral-800 md:min-h-36">
        <Skeleton className="mb-6 h-8 w-48" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <ChampionshipSkeleton key={index} />
          ))}
        </div>
      </section>
    </Gutter>
  )
}
