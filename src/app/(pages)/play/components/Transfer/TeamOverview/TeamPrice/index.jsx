import { useSelector } from 'react-redux'

const TeamPrice = () => {
  const { teamPrice } = useSelector((store) => store.tourTeams)

  return (
    <div className="w-1/2 md:w-auto">
      <h3
        title="Maksimum sotib olish mumkin bolgan o'yinchilar"
        className="cursor-default text-xs capitalize text-neutral-400 xs:text-sm"
      >
        jamoa narxi
      </h3>
      <p className="text-2xl font-bold sm:text-3xl md:text-4xl">{teamPrice}</p>
    </div>
  )
}

export default TeamPrice
