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
          className={`rounded bg-opacity-80 px-3 py-2 font-semibold uppercase transition-all hover:bg-primary md:px-4 ${item.key === currentTab ? active : passive} `}
          onClick={() => setCurrentTab(item.key)}
        >
          {item.title}
        </button>
      ))}
      <Link
        href="/championships"
        className="rounded bg-neutral-300 bg-opacity-80 px-3 py-2 font-semibold uppercase text-neutral-800 transition-all hover:bg-primary hover:bg-opacity-60 hover:text-neutral-950 md:px-4"
      >
        Championship
      </Link>
    </div>
  )
}

export default NavigationTabs
