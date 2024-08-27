import Link from 'next/link'

import { data } from '../../../../../utils/tabs.util'

const NavigationTabs = () => {
  const active = 'bg-primary text-black bg-opacity-100'
  const passive =
    'bg-neutral-300 text-neutral-800 hover:text-neutral-950 hover:bg-opacity-60'
  const currentTab = data[0].key
  const setCurrentTab = (key) => {
    console.log(key)
  }

  return (
    <div className="flex flex-wrap items-center gap-4 pt-6 2xl:gap-6">
      {data.map((item, index) => (
        <button
          key={item.id}
          className={`rounded bg-opacity-80 px-2 py-1 text-sm font-semibold uppercase transition-all hover:bg-primary sm:px-3 md:px-4 md:py-2 md:text-base ${item.key === currentTab ? active : passive} `}
          onClick={() => setCurrentTab(item.key)}
        >
          {item.title}
        </button>
      ))}
      <Link
        href="/championships"
        className="rounded bg-opacity-80 px-2 py-1 text-sm font-semibold uppercase transition-all hover:bg-primary sm:px-3 md:px-4 md:py-2 md:text-base bg-neutral-300 text-neutral-800 hover:text-neutral-950 hover:bg-opacity-60"
      >
        Championship
      </Link>
    </div>
  )
}

export default NavigationTabs
