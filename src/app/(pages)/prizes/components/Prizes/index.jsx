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
import { useTranslation } from 'react-i18next'

const PrizesSection = () => {
  const { t } = useTranslation()
  const { competition, isLoading: competitionLoading } = useSelector(
    (store) => store.competition
  )
  const { isLoading: prizesLoading, prizes } = useSelector(
    (store) => store.prizes
  )

  const isLoading = useMemo(
    () => competitionLoading || prizesLoading,
    [competitionLoading, prizesLoading]
  )

  return (
    <>
      {isLoading ? (
        <PrizesSkeleton />
      ) : prizes?.length > 0 ? (
        <>
          <PrizesTitle />
          <section className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
            {competition?.map((competition, index) => (
              <PrizeCompetition competition={competition} key={index} />
            ))}
          </section>
        </>
      ) : (
        <h1 className="text-center text-2xl">{t('Hozircha yutuqlar yoq')}</h1>
      )}
    </>
  )
}

export default PrizesSection
