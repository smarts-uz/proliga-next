/* eslint-disable @next/next/no-img-element */
'use client'
import { useDispatch } from 'react-redux'
import Gutter from 'components/Gutter'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchPrizes } from 'app/lib/features/prize/prize.thunk'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'
import dynamic from 'next/dynamic'
import { LANGUAGE } from 'app/utils/languages.util'
const PrizesTitle = dynamic(() => import('./components/PrizesTitle'), {
  ssr: false,
})

const Prizes = () => {
  const dispatch = useDispatch()
  const { competition } = useSelector((store) => store.competition)
  const { lang } = useSelector((store) => store.systemLanguage)
  const { prizes } = useSelector((store) => store.prizes)

  useEffect(() => {
    dispatch(fetchPrizes())
    dispatch(fetchCompetition())
  }, [dispatch])

  return (
    <Gutter>
      <section className="mt-4 pb-12">
        <PrizesTitle />
        <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
          {competition?.map((competition, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border bg-neutral-800 p-2"
            >
              <div className="mb-2 flex items-center gap-2 border-b border-neutral-600 pb-4">
                <img
                  src={competition.flag}
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
      </section>
    </Gutter>
  )
}

const Prize = ({ prize }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="mb-1 text-sm md:mb-2 xl:text-base">{prize?.name}</p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-1 lg:p-2">
        <img
          src={prize?.image}
          alt={prize?.name}
          className="aspect-auto h-auto w-auto bg-cover"
        />
      </div>
      <p className="text-lg">
        <span className="text-3xl font-bold md:text-xl">{prize.order}</span>{' '}
        O&apos;rin
      </p>
    </div>
  )
}

export default Prizes
