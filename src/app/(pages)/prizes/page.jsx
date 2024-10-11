/* eslint-disable @next/next/no-img-element */
'use client'
import { useDispatch } from 'react-redux'
import Gutter from 'components/Gutter'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { fetchPrizes } from 'app/lib/features/prize/prize.thunk'
import { fetchCompetition } from 'app/lib/features/competition/competition.thunk'

const Prizes = () => {
  const dispatch = useDispatch()
  const { prizes } = useSelector((store) => store.prizes)
  const { competition } = useSelector((store) => store.competition)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchPrizes())
    dispatch(fetchCompetition())
  }, [dispatch])

  return (
    <Gutter>
      <section className="mb-8 mt-4">
        <div className="mb-8 text-2xl font-semibold md:text-3xl">
          {t('Yutuqlar')}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {prizes?.map((prize, index) => (
            <Link key={index} prize={prize} />
          ))}
        </div>
      </section>
    </Gutter>
  )
}

const Link = ({ prize }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-1 text-lg md:mb-2 xl:text-xl">{prize?.name}</p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-1 lg:p-2">
        <img
          src={prize?.image}
          alt={prize?.name}
          className="aspect-auto h-auto w-auto bg-cover"
        />
      </div>
    </div>
  )
}

export default Prizes
