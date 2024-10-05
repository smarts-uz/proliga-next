import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

const SwapPlayerButton = ({
  cell,
  handleSwapPlayer,
  teamBalance,
  prevPlayer,
}) => {
  const { GOA, DEF, MID, STR } = useSelector((store) => store.teamPlayers)

  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  const condition = teamBalance + prevPlayer.price >= cell.row.original.price

  if (teamConcat.find((p) => p.name === cell.getValue())) {
    return (
      <motion.td
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full cursor-pointer items-center justify-center p-1 md:w-auto"
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
      </motion.td>
    )
  } else {
    return (
      <motion.td
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex size-4 h-full w-full cursor-pointer items-center justify-center p-1 md:w-auto"
        key={cell.column.id}
        onClick={condition ? () => handleSwapPlayer(cell.row.original) : null}
      >
        <Image
          src="/icons/swap-circle.svg"
          alt="plus"
          width={24}
          draggable={false}
          className={`${condition ? 'filter-primary' : 'filter-neutral-400'} size-5 select-none sm:size-6`}
          height={24}
        />
      </motion.td>
    )
  }
}

export default SwapPlayerButton
