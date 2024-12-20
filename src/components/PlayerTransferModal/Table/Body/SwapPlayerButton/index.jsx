import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { setBalanceModal } from 'app/lib/features/currentTeam/currentTeam.slice'
import { setModals } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { configKey } from 'app/utils/config.util'
import { toast } from 'react-toastify'

const SwapPlayerButton = ({
  cell,
  handleSwapPlayer,
  teamBalance,
  prevPlayer,
}) => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR } = useSelector((store) => store.teamPlayers)
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const { config } = useSelector((store) => store.systemConfig)

  const max_balance = +config[configKey.max_balance]?.value
  const transfer_show_modals =
    config[configKey.transfer_show_modals]?.value?.toLowerCase() === 'true'

  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  const condition = teamBalance + prevPlayer.price >= cell.row.original.price

  const toggleModal = () => {
    dispatch(setModals({ id: prevPlayer.id, value: false }))
  }

  const handleClick = () => {
    if (condition) {
      handleSwapPlayer(cell.row.original)
    } else {
      if (currentTeam?.balance === max_balance) {
        toggleModal()
        toast.info(t('Max balance has been reached!'), { theme: 'dark' })
      } else {
        toggleModal()
        transfer_show_modals && dispatch(setBalanceModal(true))
      }
    }
  }

  if (teamConcat.find((p) => p.name === cell.getValue())) {
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
  } else {
    return (
      <td
        className="fade-in-fast flex size-4 h-full w-full cursor-pointer items-center justify-center p-1 md:w-auto"
        key={cell.column.id}
        onClick={handleClick}
      >
        <Image
          src="/icons/swap-circle.svg"
          alt="plus"
          width={24}
          draggable={false}
          className={`${condition ? 'filter-primary' : 'filter-neutral-400'} size-5 select-none sm:size-6`}
          height={24}
        />
      </td>
    )
  }
}

export default SwapPlayerButton
