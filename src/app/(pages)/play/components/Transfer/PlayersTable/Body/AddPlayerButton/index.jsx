import Image from 'next/image'
import { motion } from 'framer-motion'

const AddPlayerButton = ({ cell, handleAddPlayer, team, teamBalance }) => {
  const condition = teamBalance >= cell.row.original.price
  if (team.find((p) => p.name === cell.getValue())) {
    return (
      <motion.td
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full bg-red-400 cursor-pointer items-center justify-center px-0 py-1 sm:px-1 md:w-auto"
        key={cell.column.id}
      >
        <Image
          src="/icons/check.svg"
          alt="plus"
          width={24}
          draggable={false}
          height={24}
          className="filter-green-500 h-full w-full min-w-4 max-w-6 select-none sm:size-6"
        />
      </motion.td>
    )
  } else {
    return (
      <motion.td
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full cursor-pointer items-center justify-center px-2 py-1 md:w-auto"
        key={cell.column.id}
        onClick={condition ? () => handleAddPlayer(cell.row.original) : null}
      >
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={24}
          draggable={false}
          className={`${condition ? 'filter-primary' : 'filter-neutral-400'} h-full w-full min-w-4 max-w-6 select-none sm:size-6`}
          height={24}
        />
      </motion.td>
    )
  }
}

export default AddPlayerButton
