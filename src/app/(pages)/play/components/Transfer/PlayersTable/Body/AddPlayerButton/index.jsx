import Image from 'next/image'

const AddPlayerButton = ({ cell, handleAddPlayer, team }) => {
  if (team.find((p) => p.name === cell.getValue())) {
    return (
      <td
        className="fade-in-fast flex h-full w-full cursor-pointer items-center justify-center px-2 py-1 md:w-auto"
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
      </td>
    )
  } else {
    return (
      <td
        className="flex h-full w-full cursor-pointer items-center justify-center px-2 py-1 md:w-auto"
        key={cell.column.id}
        onClick={() => handleAddPlayer(cell.row.original)}
      >
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={24}
          draggable={false}
          className="filter-primary h-full w-full min-w-4 max-w-6 select-none sm:size-6"
          height={24}
        />
      </td>
    )
  }
}

export default AddPlayerButton
