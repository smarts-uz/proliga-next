import Backdrop from 'components/Backdrop'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { TABS } from 'app/utils/tabs.util'
import Link from 'next/link'
import { setTab } from 'app/lib/features/tours/tours.slice'

const MobileModal = ({ onCancel }) => {
  const path = usePathname()
  const active = 'before:block before:bg-primary text-white'
  const passive = 'before:hidden hover:before:block'
  const disabled =
    'text-neutral-600 cursor-default hover:text-neutral-500 before:hidden'

  return (
    <Backdrop onClick={onCancel}>
      <motion.dialog
        initial={{ opacity: 0, x: '1rem' }}
        animate={{ opacity: 1, x: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="right-0 mr-0 flex h-full min-w-96 flex-col gap-4 self-end overflow-y-auto overflow-x-hidden rounded-s-xl bg-neutral-950 p-4 text-neutral-200 sm:min-w-[32rem] md:p-6"
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
        <div className="flex flex-col gap-8">
          <Tab
            title="Profil"
            passive={passive}
            active={active}
            disabled={disabled}
            tab={TABS.GameProfile}
          />
          <Tab
            title="Transfer"
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Transfer}
          />
          <Tab
            title="Turnir"
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Tournament}
          />
          <Tab
            title="Jurnal"
            passive={passive}
            disabled={disabled}
            active={active}
            tab={TABS.Journal}
          />
          <Tab
            title="Statistika"
            disabled={disabled}
            passive={passive}
            active={active}
            tab={TABS.Statistics}
          />
          <Link
            className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('championships') ? active : passive}`}
            href="/championships"
          >
            Chempionat
          </Link>
          <Link
            className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('prizes') ? active : passive}`}
            href="/prizes"
          >
            Yutuqlar
          </Link>
          <Link
            className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${path.includes('regulation') ? active : passive}`}
            href="/regulation"
          >
            Qoida
          </Link>
        </div>
      </motion.dialog>
    </Backdrop>
  )
}

const Tab = ({ title, tab, passive, active, disabled }) => {
  const dispatch = useDispatch()
  const { gameTab } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  return (
    <button
      className={`relative transition-all before:absolute before:-bottom-4 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 hover:text-white ${currentTeam?.is_team_created ? (gameTab === tab ? active : passive) : disabled}`}
      onClick={() => currentTeam?.is_team_created && dispatch(setTab(tab))}
    >
      {title}
    </button>
  )
}

export default MobileModal
