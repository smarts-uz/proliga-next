import { useSelector } from 'react-redux'
import Image from 'next/image'

const TeamPrice = () => {
  const { currentTourTeam } = useSelector((store) => store.tourTeams)

  return (
    <div>
      <h3
        title="Maksimum sotib olish mumkin bolgan o'yinchilar"
        className="cursor-default text-xs xs:text-sm capitalize text-neutral-400"
      >
        jamoa narxi
      </h3>

      <p className="cursor-default text-3xl font-bold xs:text-4xl">
        {currentTourTeam?.price ?? '00'}
      </p>
    </div>
  )
}

export default TeamPrice
