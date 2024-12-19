'use client'

import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import dynamic from 'next/dynamic'
import { PrizeSkeleton } from '../PrizesSkeleton'
const Prize = dynamic(() => import('../Prize'), {
  loading: () => <PrizeSkeleton />,
  ssr: false,
})

const PrizeCompetition = ({ competition }) => {
  const { lang } = useSelector((store) => store.systemLanguage)
  const { prizes, isLoading } = useSelector((store) => store.prizes)

  const hasPrize = prizes.some(
    (prize) => prize.competition_id.id === competition.id
  )

  if (!hasPrize) return <></>

  return (
    <article className="transitiona-all group flex flex-col rounded-xl border border-neutral-100/50 bg-black/25 p-2 backdrop-blur-sm hover:border-neutral-100 hover:bg-black/40 md:p-4">
      <div className="mb-2 flex items-center gap-2 border-b border-neutral-500/80 pb-2 transition-all group-hover:border-primary">
        <img
          src={competition.flag}
          loading="lazy"
          alt={competition.title}
          className="z-10 size-10 select-none rounded-full bg-white p-1"
          draggable={false}
        />
        <h2 className="text-lg xl:text-xl">
          {lang === LANGUAGE.uz ? competition?.name : competition?.name_ru}
        </h2>
      </div>
      {isLoading ? (
        <div className="flex flex-col gap-2 xl:flex-row">
          <PrizeSkeleton />
          <PrizeSkeleton />
          <PrizeSkeleton />
        </div>
      ) : (
        <div className="flex flex-col gap-2 xl:flex-row">
          {prizes.map(
            (prize) =>
              prize.competition_id.id === competition.id && (
                <Prize prize={prize} key={prize.id} />
              )
          )}
        </div>
      )}
    </article>
  )
}

export default PrizeCompetition
