'use client'

import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { TABS } from 'app/utils/tabs.util'
import { setTab } from 'app/lib/features/tours/tours.slice'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { TOUR } from 'app/utils/tour.util'
import { act } from 'react'

const PlayLinks = () => {
  const path = usePathname()
  const active = 'before:block before:bg-primary text-white'
  const passive = 'before:hidden hover:before:block'
  const disabled =
    'text-neutral-600 cursor-default hover:text-neutral-500 before:hidden'
  const { lastVisitedTeam } = useSelector((store) => store.currentTeam)
  const { t } = useTranslation()
  return (
    <section className="hidden items-center gap-4 text-neutral-400 sm:text-sm lg:flex lg:gap-6 lg:text-base">
      {path.includes('play') && (
        <>
          <Tab
            title={t('Profil')}
            passive={passive}
            active={active}
            disabled={disabled}
            tab={TABS.GameProfile}
          />
          <Tab
            title={t('Transferlar')}
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Transfer}
          />
          <Tab
            title={t('Turnir')}
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Tournament}
          />
          <Tab
            title={t('Jurnal')}
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Journal}
          />
          <Tab
            title={t('Statistika')}
            disabled={disabled}
            passive={passive}
            active={active}
            tab={TABS.Statistics}
          />
        </>
      )}
      {!path.includes('play') && lastVisitedTeam && (
        <>
          <TabLink
            title={t('Profil')}
            passive={passive}
            active={active}
            disabled={disabled}
            tab={TABS.GameProfile}
          />
          <TabLink
            title={t('Transferlar')}
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Transfer}
          />
          <TabLink
            title={t('Turnir')}
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Tournament}
          />
          <TabLink
            title={t('Jurnal')}
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Journal}
          />
          <TabLink
            title={t('Statistika')}
            disabled={disabled}
            passive={passive}
            active={active}
            tab={TABS.Statistics}
          />
        </>
      )}
      <Link
        className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('championships') ? active : passive}`}
        href="/championships"
      >
        {t('Chempionat')}
      </Link>
      <Link
        className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('prizes') ? active : passive}`}
        href="/prizes"
      >
        {t('Yutuqlar')}
      </Link>
      <Link
        className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('regulation') ? active : passive}`}
        href="/regulation"
      >
        {t('Qoida')}
      </Link>
    </section>
  )
}

const Tab = ({ title, tab, passive, active, disabled }) => {
  const dispatch = useDispatch()
  const { gameTab, currentTour } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  const handleClick = () => {
    if (currentTeam?.is_team_created && tab !== TABS.Transfer) {
      dispatch(setTab(tab))
    }
    if (
      tab === TABS.Transfer &&
      currentTour.status === TOUR.notStartedTransfer
    ) {
      dispatch(setTab(tab))
    }
  }

  const condition = currentTeam?.is_team_created
    ? gameTab === tab
      ? active
      : passive
    : disabled

  return (
    <button
      className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${condition}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

const TabLink = ({ title, tab, passive, active, disabled }) => {
  const dispatch = useDispatch()
  const { lastVisitedTeam } = useSelector((store) => store.currentTeam)
  const { gameTab } = useSelector((state) => state.tours)

  return (
    <Link
      className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${passive}`}
      onClick={() => dispatch(setTab(tab))}
      href={'/play/' + lastVisitedTeam}
    >
      {title}
    </Link>
  )
}
export default PlayLinks
