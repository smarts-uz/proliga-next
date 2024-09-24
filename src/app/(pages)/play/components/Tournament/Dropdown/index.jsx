import React from 'react'
import { useSelector } from 'react-redux'

const TournamentSelectedTour = ({ tour, setTour }) => {
  const { tours } = useSelector((store) => store.tours)

  const handleSelectTour = (e) => {
    setTour(e.target.value)
  }

  return (
    <div className="w-full">
      <select
        className="mb-2 h-8 w-full max-w-48 rounded border border-yellow-700 bg-neutral-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-500 md:text-base"
        name="tournament-tours"
        id="tournament-tours"
        onChange={handleSelectTour}
      >
        {tours?.map((t) => (
          <option
            key={t.id}
            defaultChecked={t.id === tour}
            selected={t.id === tour}
            value={t.id}
          >
            {t.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TournamentSelectedTour
