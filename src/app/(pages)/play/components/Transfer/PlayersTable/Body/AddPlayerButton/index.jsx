import Image from 'next/image'

const AddPlayerButton = ({ cell, handleAddPlayer, team }) => {
  if (team.find((p) => p.name === cell.getValue())) {
    return (
      <td
        className="fade-in-fast flex w-auto cursor-pointer items-center justify-center px-2 py-1"
        key={cell.column.id}
      >
        <Image
          src="/icons/check.svg"
          alt="plus"
          width={24}
          draggable={false}
          height={24}
          className="filter-neutral-400 size-5 select-none md:size-6"
        />
      </td>
    )
  } else {
    return (
      <td
        className="flex w-auto cursor-pointer items-center justify-center px-2 py-1"
        key={cell.column.id}
        onClick={() => handleAddPlayer(cell.row.original)}
      >
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={24}
          draggable={false}
          className="filter-primary size-5 select-none md:size-6"
          height={24}
        />
      </td>
    )
  }
}

export default AddPlayerButton
