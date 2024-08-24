import Gutter from '../../../../../components/Gutter'
import { data } from '../../../../utils/tabs.util'
import Link from 'next/link'

const GameNavigation = ({ currentTab, setCurrentTab }) => {
  const active = 'bg-primary text-black bg-opacity-100'
  const passive =
    'bg-neutral-300 text-neutral-800 hover:text-neutral-950 hover:bg-opacity-60'

  return (
    <Gutter>
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
      <div className="mt-4 flex w-full overflow-x-auto rounded-sm text-black">
        {data.map((item, index) => (
          <div
            className="min-w-40 sm:min-w-64 flex-1 rounded-md border bg-black p-2 text-lg font-medium text-white lg:min-w-80"
            key={Math.random()}
          >
            Tur {index + 1}
          </div>
        ))}
      </div>
    </Gutter>
  )
}

export default GameNavigation
