/* eslint-disable @next/next/no-img-element */
import { fetchPrizes } from 'app/lib/features/prize/prize.thunk'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

const WinPrizesSlide = () => {
  const { prizes } = useSelector((store) => store.prizes)
  const { currentCompetition } = useSelector((store) => store.competition)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchPrizes())
  }, [dispatch])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="carousel-header font-bold uppercase">
          {t('Sovrinlarni yutib oling')}
        </h2>
        <p className="carousel-text text-neutral-300">{t('Eng ko‘p ball')}</p>
      </div>
      <div className="grid items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {prizes.map(
          (prize, index) =>
            prize?.competition_id.id === currentCompetition.id && (
              <Prize prize={prize} key={index} />
            )
        )}
      </div>
    </div>
  )
}

const Prize = ({ prize }) => {
  return (
    <div className="flex h-full w-full max-w-80 flex-col items-center justify-center">
      <p className="mb-1 text-lg md:mb-2 xl:text-xl">{prize?.name}</p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-1 lg:p-2">
        <img
          src={prize?.image}
          alt={prize?.name}
          className="aspect-auto h-auto w-auto bg-cover"
        />
      </div>
      <p>
        <span className="font-bold md:text-xl">{prize.order}</span> O&apos;rin
      </p>
    </div>
  )
}

export default WinPrizesSlide
