import { useSelector } from 'react-redux'

const Overview = () => {
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { tourTeam } = useSelector((state) => state.tourTeam)

  return (
    <div className="mb-4 grid grid-cols-4 rounded-xl bg-neutral-950 p-6 capitalize text-neutral-50">
      <div className="flex flex-col">
        <h2 className="text-sm text-neutral-400">Balans</h2>
        <p className="text-4xl font-bold">{currentTeam.balance ?? '00'}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm text-neutral-400">jamoa narxi</h3>
        <p className="text-4xl font-bold">{tourTeam.price ?? '00'}</p>
      </div>
      <div className="relative flex flex-col">
        <h3
          title="Maksimum sotib olish mumkin bolgan o'yinchilar"
          className="cursor-pointer text-sm text-neutral-400"
        >
          transferlar
        </h3>
        <p className="cursor-pointer text-4xl font-bold">2/2</p>
      </div>
      <div className="relative flex flex-col">
        <h3
          title="Bir jamoadan sotib olish mumkin bolgan o'yinchilar"
          className="cursor-pointer text-sm text-neutral-400"
        >
          Bir jamoadan o&apos;yinchilar
        </h3>
        <p className="cursor-pointer text-4xl font-bold">2/2</p>
      </div>
    </div>
  )
}

export default Overview
