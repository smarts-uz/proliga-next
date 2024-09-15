import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const TeamPrice = () => {
  const { GOA, DEF, MID, STR } = useSelector((store) => store.teamPlayers)
  const [teamPrice, setTeamPrice] = useState(0)

  useEffect(() => {
    if (
      GOA?.length > 0 &&
      DEF?.length > 0 &&
      MID?.length > 0 &&
      STR?.length > 0
    ) {
      const newTeamPrice =
        GOA.reduce((acc, player) => acc + player.price, 0) +
        DEF.reduce((acc, player) => acc + player.price, 0) +
        MID.reduce((acc, player) => acc + player.price, 0) +
        STR.reduce((acc, player) => acc + player.price, 0)

      setTeamPrice(newTeamPrice)
    }
  }, [GOA, DEF, MID, STR])

  return (
    <div>
      <h3
        title="Maksimum sotib olish mumkin bolgan o'yinchilar"
        className="cursor-default text-xs capitalize text-neutral-400 xs:text-sm"
      >
        jamoa narxi
      </h3>
      <p className="cursor-default text-3xl font-bold xs:text-4xl">
        {teamPrice}
      </p>
    </div>
  )
}

export default TeamPrice
