import { useSelector } from 'react-redux'
import { selectClubs } from 'app/lib/features/clubs/clubs.selector'

const ClubsFilter = ({ column }) => {
  const selectedClubs = useSelector(selectClubs)

  return (
    <select
      className="col-span-1 h-8 w-full max-w-36 truncate rounded border border-neutral-500 bg-neutral-950 px-1 text-neutral-200 shadow md:max-w-48"
      onClick={(e) => column.setFilterValue(e.target.value)}
    >
      <option
        value=""
        className="rounded-sm checked:bg-neutral-800"
        defaultChecked
      >
        Hamma Clublar
      </option>
      {selectedClubs?.length > 0 &&
        selectedClubs.map((club) => (
          <option
            key={club.id}
            value={club.name}
            className="capitalize text-neutral-200 checked:bg-neutral-800"
          >
            {club.name}
          </option>
        ))}
    </select>
  )
}

export default ClubsFilter
