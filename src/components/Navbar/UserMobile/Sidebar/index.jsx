import Backdrop from 'components/Backdrop'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { TABS } from 'app/utils/tabs.util'
import { setTab } from 'app/lib/features/tours/tours.slice'
import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'
import { useTranslation } from 'react-i18next'

const MobileSidebar = ({ onCancel }) => {
  const path = usePathname()
  const active = 'before:block before:bg-primary text-white'
  const passive = 'before:hidden hover:before:block'
  const disabled =
    'text-neutral-600 cursor-default hover:text-neutral-500 before:hidden'
  const { userAuth } = useSelector((state) => state.auth)
  const { lastVisitedTeam } = useSelector((store) => store.currentTeam)
  const { logOut } = useLogOut()

  const handleLogOut = () => {
    logOut()
    onCancel()
  }
  const { t } = useTranslation()
  return (
    <Backdrop onClick={onCancel}>
      <motion.dialog
        initial={{ opacity: 0, x: '1rem' }}
        animate={{ opacity: 1, x: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="right-0 mr-0 flex h-full min-w-80 max-w-[45rem] flex-col gap-4 self-end overflow-y-auto overflow-x-hidden rounded-s-xl bg-neutral-950 p-4 pb-6 text-neutral-200 xs:min-w-96 sm:min-w-[32rem] sm:p-6"
      >
        <button className="self-end">
          <Image
            src="/icons/close.svg"
            alt="Close"
            width={24}
            height={24}
            className="size-6"
            onClick={onCancel}
          />
        </button>

        <div className="flex flex-col items-start justify-center gap-6 pl-14 xs:gap-8">
          {path.includes('play') && (
            <>
              <Tab
                title={t('Profil')}
                passive={passive}
                active={active}
                toggleModal={onCancel}
                disabled={disabled}
                tab={TABS.GameProfile}
              />
              <Tab
                title={t('Transferlar')}
                passive={passive}
                disabled={disabled}
                active={active}
                toggleModal={onCancel}
                tab={TABS.Transfer}
              />
              <Tab
                title={t('Turnir')}
                passive={passive}
                disabled={disabled}
                active={active}
                tab={TABS.Tournament}
                toggleModal={onCancel}
              />
              <Tab
                title={t('Jurnal')}
                passive={passive}
                disabled={disabled}
                active={active}
                toggleModal={onCancel}
                tab={TABS.Journal}
              />
              <Tab
                title={t('Statistika')}
                disabled={disabled}
                toggleModal={onCancel}
                passive={passive}
                active={active}
                tab={TABS.Statistics}
              />
            </>
          )}
          {!path.includes('play') && lastVisitedTeam && (
            <>
              <TabLink
                toggleModal={onCancel}
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
                toggleModal={onCancel}
                tab={TABS.Transfer}
              />
              <TabLink
                title={t('Turnir')}
                passive={passive}
                toggleModal={onCancel}
                disabled={disabled}
                active={active}
                tab={TABS.Tournament}
              />
              <TabLink
                title={t('Jurnal')}
                toggleModal={onCancel}
                passive={passive}
                disabled={disabled}
                active={active}
                tab={TABS.Journal}
              />
              <TabLink
                title={t('Statistika')}
                disabled={disabled}
                toggleModal={onCancel}
                passive={passive}
                active={active}
                tab={TABS.Statistics}
              />
            </>
          )}
          <Link
            className={`relative transition-all before:absolute before:-left-16 before:h-full before:w-2 before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('championships') ? active : passive}`}
            href="/championships"
            onClick={onCancel}
          >
            {t('Chempionat')}
          </Link>
          <Link
            className={`relative transition-all before:absolute before:-left-16 before:h-full before:w-2 before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('prizes') ? active : passive}`}
            onClick={onCancel}
            href="/prizes"
          >
            {t('Yutuqlar')}
          </Link>
          <Link
            className={`relative transition-all before:absolute before:-left-16 before:h-full before:w-2 before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('regulation') ? active : passive}`}
            onClick={onCancel}
            href="/regulation"
          >
            {t('Qoida')}
          </Link>
        </div>
        <section
          className={`mt-auto flex w-full flex-col justify-between gap-1 rounded-md sm:flex-row`}
        >
          {userAuth ? (
            <>
              <NavLink handleToggle={onCancel} href="/cabinet">
                <Image
                  width={24}
                  height={24}
                  alt="settings"
                  src="/icons/gear.svg"
                />
                <p>{t('Sozlamalar')}</p>
              </NavLink>
              <button
                onClick={handleLogOut}
                className="flex h-full w-full gap-2 rounded bg-neutral-900 p-2 hover:bg-neutral-700"
              >
                <Image
                  src={'/icons/logout.svg'}
                  alt="user"
                  width={24}
                  height={24}
                />
                <p>{t('Tizimdan chiqish')}</p>
              </button>
            </>
          ) : (
            <>
              <NavLink handleToggle={onCancel} href="/auth">
                <Image
                  src={'/icons/login.svg'}
                  alt="user"
                  width={24}
                  height={24}
                />
                <p>{t('Tizimga kirish_1')}</p>
              </NavLink>
            </>
          )}
        </section>
      </motion.dialog>
    </Backdrop>
  )
}

const Tab = ({ title, tab, passive, active, disabled, toggleModal }) => {
  const dispatch = useDispatch()
  const { gameTab } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  const handleClick = () => {
    if (currentTeam?.is_team_created) {
      dispatch(setTab(tab))
      toggleModal()
    }
  }

  return (
    <button
      className={`relative transition-all before:absolute before:-left-16 before:h-full before:w-2 before:rounded-md before:bg-neutral-100 hover:text-white ${currentTeam?.is_team_created ? (gameTab === tab ? active : passive) : disabled}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

const TabLink = ({ title, tab, passive, toggleModal }) => {
  const dispatch = useDispatch()
  const { lastVisitedTeam } = useSelector((state) => state.currentTeam)

  const handleClick = () => {
    dispatch(setTab(tab))
    toggleModal()
  }

  return (
    <Link
      className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${passive}`}
      onClick={handleClick}
      href={'/play/' + lastVisitedTeam}
    >
      {title}
    </Link>
  )
}

const NavLink = ({ children, href, handleToggle }) => {
  return (
    <Link
      href={href}
      onClick={handleToggle}
      className="flex h-full w-full gap-2 rounded bg-neutral-900 p-2 hover:bg-neutral-700"
    >
      {children}
    </Link>
  )
}

export default MobileSidebar
