/* eslint-disable @next/next/no-img-element */
'use client'
import { useDispatch } from 'react-redux'
import Gutter from 'components/Gutter'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import dynamic from 'next/dynamic'
import { LANGUAGE } from 'app/utils/languages.util'
import { useTranslation } from 'react-i18next'
const PrizesTitle = dynamic(() => import('./components/PrizesTitle'), {
  ssr: false,
})
import { Skeleton } from '@/components/ui/skeleton'
import { CompetitionSkeleton } from './components/PrizesSkeleton'

const Prizes = () => {
  const dispatch = useDispatch()
  const { competition, isLoading: competitionLoading } = useSelector(
    (store) => store.competition
  )
  const { lang } = useSelector((store) => store.systemLanguage)
  const { prizes, isLoading: prizesLoading } = useSelector(
    (store) => store.prizes
  )

  const isLoading = useMemo(
    () => competitionLoading || prizesLoading,
    [competitionLoading, prizesLoading]
  )

  useEffect(() => {
    dispatch(fetchCompetition())
  }, [dispatch])

  return (
    <section className="min-h-screen bg-gradient-to-tr from-red-800 to-blue-900 pb-12 pt-8">
      <Gutter>
        {isLoading ? (
          <Skeleton className="mb-8 h-12 w-48 bg-neutral-500" />
        ) : (
          <PrizesTitle />
        )}
        <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
          {isLoading
            ? [...Array(4)].map((_, index) => (
                <CompetitionSkeleton key={index} />
              ))
            : competition?.map((competition, index) => (
                <div
                  key={index}
                  className="transitiona-all group flex flex-col rounded-xl border border-neutral-100/50 bg-black/25 p-2 backdrop-blur-sm hover:border-neutral-100 hover:bg-black/50 md:p-4"
                >
                  <div className="mb-2 flex items-center gap-2 border-b border-neutral-500/80 pb-2 transition-all group-hover:border-primary">
                    <img
                      src={competition.flag}
                      loading="lazy"
                      alt={competition.title}
                      className="z-10 size-10 select-none rounded-full bg-white p-1"
                      draggable={false}
                    />
                    <h2 className="text-lg xl:text-xl">
                      {lang === LANGUAGE.uz
                        ? competition?.name
                        : competition?.name_ru}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 xl:flex-row">
                    {prizes.map(
                      (prize) =>
                        prize.competition_id.id === competition.id && (
                          <Prize prize={prize} key={prize.id} />
                        )
                    )}
                  </div>
                </div>
              ))}
        </div>
      </Gutter>
    </section>
  )
}

const Prize = ({ prize }) => {
  const { lang } = useSelector((store) => store.systemLanguage)
  const { t } = useTranslation()

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="mb-1 text-sm md:mb-2 xl:text-base">
        {lang === LANGUAGE.uz ? prize?.name : prize?.name_ru}
      </p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-1 lg:p-2">
        <img
          src={prize?.image}
          loading="lazy"
          alt={prize?.name}
          className="aspect-auto h-auto w-auto bg-cover"
        />
      </div>
      <p className="text-lg">
        <span className="text-3xl font-bold md:text-xl">{prize.order}</span>
        {'-'}
        {t("O'RIN")}
      </p>
    </div>
  )
}

export default Prizes
