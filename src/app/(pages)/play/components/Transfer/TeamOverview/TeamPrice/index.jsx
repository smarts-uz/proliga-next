import { useSelector } from 'react-redux'
import Image from 'next/image'

const TeamPrice = () => {
  const { currentTourTeam } = useSelector((store) => store.tourTeams)

  return (
    <div>
      <header className="group flex cursor-pointer text-neutral-400 transition-all hover:text-neutral-50 hover:underline">
        <h3
          title="Maksimum sotib olish mumkin bolgan o'yinchilar"
          className="gap-1 text-sm"
        >
          jamoa narxi
        </h3>
        <Image
          src="/icons/arrow-bold-up.svg"
          alt="arrow"
          width={16}
          height={16}
          className="filter-neutral-400 group-hover:filter-neutral-50 translate-x-0 rotate-45 transition-all group-hover:translate-x-1"
        />
      </header>
      <p className="text-4xl cursor-default font-bold">{currentTourTeam?.price ?? '00'}</p>
    </div>
  )
}

export default TeamPrice
