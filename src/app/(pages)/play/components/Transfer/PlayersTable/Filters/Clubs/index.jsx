import { useGetClubs } from 'app/hooks/transfer/useGetClubs/useGetClubs'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ClubsFilter = ({ column }) => {
  const { clubs, team } = useSelector((state) => state.game)
  const { getClubs, isLoading, error } = useGetClubs()

  useEffect(() => {
    if (team?.competition_id) {
      const fetch = async () => {
        await getClubs(team.competition_id.id)
      }
      fetch()
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [team])

  return (
    <select
      className="h-8 w-full max-w-36 truncate rounded border border-neutral-500 bg-neutral-950 px-1 text-neutral-200 shadow checked:bg-red-400  md:max-w-48"
      onClick={(e) => column.setFilterValue(e.target.value)}
    >
      <option
        value=""
        className="rounded-sm checked:bg-neutral-800"
        defaultChecked
      >
        Clublar
      </option>
      {clubs?.length > 0 &&
        clubs.map((club) => (
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
