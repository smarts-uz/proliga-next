'use client'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setBalanceModal } from 'app/lib/features/currentTeam/currentTeam.slice'

const AddPlayerButton = ({
  cell,
  handleAddPlayer,
  team,
  teamBalance,
  totalPlayersCount,
}) => {
  const dispatch = useDispatch()
  const condition = teamBalance >= cell.row.original.price
  const isPlayerInTeam = team.find((p) => p.name === cell.getValue())

  const handleClick = () => {
    if (condition) handleAddPlayer(cell.row.original)
    else dispatch(setBalanceModal(true))
  }

  if (isPlayerInTeam) {
    return (
      <td
        className="fade-in-fast flex h-full w-full cursor-pointer items-center justify-center p-1 md:w-auto"
        key={cell.column.id}
      >
        <Image
          src="/icons/check.svg"
          alt="plus"
          width={24}
          draggable={false}
          height={24}
          className="filter-green-500 size-5 select-none sm:size-6"
        />
      </td>
    )
  } else if (!isPlayerInTeam && totalPlayersCount < 11) {
    return (
      <td
        className="fade-in-fast flex size-4 h-full w-full cursor-pointer items-center justify-center p-1 md:w-auto"
        key={cell.column.id}
        onClick={handleClick}
      >
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={24}
          draggable={false}
          className={`${condition ? 'filter-primary' : 'filter-neutral-400'} size-5 select-none sm:size-6`}
          height={24}
        />
      </td>
    )
  } else if (!isPlayerInTeam && totalPlayersCount >= 11) {
    return (
      <td
        className="fade-in-fast flex size-4 h-full w-full cursor-pointer items-center justify-center p-1 md:w-auto"
        key={cell.column.id}
      >
        <Image
          src="/icons/close-circle.svg"
          alt="plus"
          width={24}
          draggable={false}
          className={`filter-neutral-400 size-5 select-none opacity-80 sm:size-6`}
          height={24}
        />
      </td>
    )
  }
}

export default AddPlayerButton
