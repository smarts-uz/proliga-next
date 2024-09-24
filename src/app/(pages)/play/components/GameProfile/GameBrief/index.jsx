'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const GameBrief = () => {
  const [nextTour, setNextTour] = useState(null)
  const { tours, currentTourIndex, currentTour } = useSelector(
    (store) => store.tours
  )
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const { currentCompetition } = useSelector((store) => store.competition)
  const { teamPrice, teamBalance } = useSelector((store) => store.tourTeams)
  const { t } = useTranslation()

  useEffect(() => {
    if (tours.length > 0) {
      const nextTour = tours[currentTourIndex + 1]
      setNextTour(nextTour)
    }
  }, [tours, currentTourIndex])

  const date = new Date(nextTour?.datetime_end)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <section className="fade-in-fast mx-auto flex h-min w-full max-w-[32rem] flex-col justify-between gap-6 rounded-2xl border border-primary border-opacity-50 bg-neutral-950 px-10 py-6 transition-all hover:border-opacity-100 md:max-w-[40rem] lg:mx-0 lg:w-1/2 xl:w-[55%]">
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100"> {t('Keyingi Tur')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {nextTour?.name ??  t('Keyingi Tur')}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Tugatish Muddati')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {`${day}-${month}`} | {`${hours}:${minutes === 0 ? "00" : minutes}`}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Tur')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {currentTour?.name ?? t('Hozirgi Tur')}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Turdagi ochkolar')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {currentTour?.point ?? '00'}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Turnirdagi ochkolar')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {currentTeam?.point ?? '000'}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">
            {t("Turnirdagi o'rtacha ochkolar")}
          </p>
          <p className="text-sm uppercase text-primary md:text-base">
            {currentCompetition?.averate_team_point ?? '00.0'}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b border-neutral-700 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Chempionat')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {currentTeam?.competition_id?.title}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t("Ligadagi o'rin")}</p>
          <p className="space-x-1 text-sm uppercase text-neutral-300 md:text-base">
            <span className="text-pretty text-base font-medium text-primary md:text-lg">
              {currentTeam?.order ?? '00'}{' '}
            </span>
            / {currentCompetition?.team_count ?? '0000'}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-2">
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Jamoa narxi')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {teamPrice ?? 0}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p className="text-neutral-100">{t('Balans')}</p>
          <p className="text-sm uppercase text-primary md:text-base">
            {teamBalance ?? 100}
          </p>
        </div>
      </div>
    </section>
  )
}

export default GameBrief
