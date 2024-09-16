import { useSelector } from 'react-redux'

const TeamPrice = () => {
  const { teamPrice } = useSelector((store) => store.tourTeams)

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
