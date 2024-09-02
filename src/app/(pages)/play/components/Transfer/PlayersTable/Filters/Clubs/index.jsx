import { useEffect, useState } from 'react'
import { useGetClubs } from 'app/hooks/transfer/useGetClubs/useGetClubs'

const ClubsFilter = ({ column, columnFilterValue }) => {
  const [data, setData] = useState([])
  const { getClubs } = useGetClubs(0)

  useEffect(() => {
    const fetchData = async () => {
      await getClubs({ setData })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <select
      className="h-8 w-full max-w-36 truncate rounded border bg-neutral-950 px-1 text-neutral-200 shadow selection:accent-primary checked:bg-red-400 active:accent-primary md:max-w-48"
      onClick={(e) => column.setFilterValue(e.target.value)}
    >
      <option
        value=""
        className="rounded-sm checked:bg-neutral-800"
        defaultChecked
      >
        Clublar
      </option>
      {data.map((club) => (
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
