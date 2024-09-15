import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { TABSDATA, TABS } from '../../../../../utils/tabs.util'
import { toast } from 'react-toastify'
import { setTab } from 'app/lib/features/tabs/tabs.slice'

const NavigationTabs = () => {
  const dispatch = useDispatch()
  const { gameTab } = useSelector((state) => state.tabs)
  const active = 'bg-primary text-black bg-opacity-100 '
  const passive =
    'bg-gradient-to-tl from-stone-950 hover:bg-gradient-to-tr hover:border-primary to-neutral-950 text-neutral-400 hover:text-neutral-50 hover:bg-opacity-70'

  const setCurrentTab = (key) => {
    if (Object.keys(TABS).includes(key)) {
      return dispatch(setTab(key))
    }
    return toast.error('Tanlangan tab mavjud emas!')
  }

  return (
    <div className="flex flex-wrap items-center gap-1 pt-6 sm:gap-2 md:gap-4 2xl:gap-6">
      {TABSDATA.map((item) => (
        <button
          key={item.id}
          className={`rounded border border-yellow-900 px-1 py-1 text-xs font-semibold uppercase transition-all xs:px-2 sm:px-3 sm:text-sm md:px-4 md:py-2 md:text-base ${item.key === gameTab ? active : passive}`}
          onClick={() => setCurrentTab(item.key)}
        >
          {item.title}
        </button>
      ))}
      {/* <Link
        href="/championships"
        className="rounded bg-neutral-300 bg-opacity-80 px-2 py-1 text-sm font-semibold uppercase text-neutral-800 transition-all hover:bg-primary hover:bg-opacity-60 hover:text-neutral-950 sm:hidden sm:px-3 md:px-4 md:py-2 md:text-base"
      >
        Chempionat
      </Link> */}
    </div>
  )
}

export default NavigationTabs
