import Gutter from '../Gutter'
import { data } from '@/src/app/utils/tabs.util'

const GameNavigation = ({ currentTab, setCurrentTab }) => {
  const active = 'bg-primary text-black bg-opacity-100'
  const passive =
    'bg-neutral-300 text-neutral-800 hover:text-neutral-950 hover:bg-opacity-80 '

  return (
    <Gutter>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6 2xl:gap-6">
        {data.map((item, index) => (
          <button
            key={item.id}
            className={`rounded-sm bg-opacity-80 px-3 py-2 font-semibold uppercase transition-all hover:bg-primary md:px-4 ${item.key === currentTab ? active : passive} `}
            onClick={() => setCurrentTab(item.key)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </Gutter>
  )
}

export default GameNavigation
