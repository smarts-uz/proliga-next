'use client'
import { Skeleton } from '@/components/ui/skeleton'
import dynamic from 'next/dynamic'
import { CompetitionSkeleton } from '../PrizesSkeleton'
const PrizesTitle = dynamic(() => import('../PrizesTitle'), {
  ssr: false,
  loading: () => <Skeleton className="mb-8 h-12 w-48 bg-neutral-500" />,
})
const PrizeCompetition = dynamic(() => import('../Competition'), {
  ssr: false,
  loading: () => <CompetitionSkeleton />,
})
import { PrizesSkeleton } from '../PrizesSkeleton'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

const PrizesSection = () => {
  const { competition, isLoading: competitionLoading } = useSelector(
    (store) => store.competition
  )
  const { isLoading: prizesLoading } = useSelector((store) => store.prizes)

  const isLoading = useMemo(
    () => competitionLoading || prizesLoading,
    [competitionLoading, prizesLoading]
  )

  return (
    <div>
      <PrizesTitle />
      <section className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
        {competition?.map((competition, index) => (
          <PrizeCompetition competition={competition} key={index} />
        ))}
      </section>
    </div>
  )
}

export default PrizesSection
