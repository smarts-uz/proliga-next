import Gutter from '../Gutter'

const GameNavigation = () => {
  return (
    <Gutter>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6 2xl:gap-6">
        {data.map((item) => (
          <button
            key={item.id}
            className="rounded-sm bg-neutral-300 px-3 py-2 font-semibold uppercase text-neutral-900 transition-all hover:bg-primary md:px-4"
          >
            {item.title}
          </button>
        ))}
      </div>
    </Gutter>
  )
}

const data = [
  {
    id: 2,
    title: 'Profil',
    key: 'GameProfile',
  },
  {
    id: 1,
    title: 'Transfer',
    key: 'Transfer',
  },
  {
    id: 4,
    title: 'Turnir',
    key: 'Tournament',
  },
  {
    id: 5,
    title: 'Jurnal',
    key: 'Journal',
  },
  {
    id: 3,
    title: 'Stastics',
    key: 'Statistics',
  },
  {
    id: 6,
    title: 'Chempionat',
    key: 'Championship',
  },
]

export default GameNavigation
