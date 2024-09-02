import Backdrop from '../../../../../components/Backdrop'
import Image from 'next/image'
import { useCreateTeam } from 'app/hooks/competition/useCreateTeam/useCreateTeam'
import { useState } from 'react'
import { formations } from 'app/utils/formations.utils'

const LeagueModal = ({ toggleModal, league }) => {
  const [title, setTitle] = useState('')
  const [formation, setFormation] = useState(formations['4-3-3'])

  const { createTeam, isLoading, error, data } = useCreateTeam()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createTeam({ title, formation, competition_id: league.id })
    if (!error && !isLoading) {
      setTitle('')
      setFormation(formations['4-3-3'])
    }
    toggleModal()
  }

  return (
    <Backdrop onClick={() => toggleModal(false)}>
      <dialog
        className="flex min-w-96 flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 fade-in md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4">
          <h3 className="text-2xl font-semibold">Jamoa yarating</h3>
          <button onClick={() => toggleModal(false)}>
            <Image
              src="/icons/close.svg"
              className="filter-neutral-50"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Ism</label>
            <input
              type="text"
              id="team-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Jamoangizni nomi"
              className="h-12 w-full rounded-lg border border-neutral-700 bg-transparent p-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Taktika</label>
            <select
              name=""
              id=""
              value={formation['4-3-3']}
              onChange={(e) => setFormation(e.target.value)}
              className="h-12 w-full rounded-lg border border-neutral-700 bg-neutral-800 bg-transparent p-2 outline-none"
            >
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={formations['4-3-3']}
              >
                4-3-3
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={formations['4-4-2']}
              >
                4-4-2
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={formations['3-4-3']}
              >
                3-4-3
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={formations['5-3-2']}
              >
                5-3-2
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={formations['3-5-2']}
              >
                3-5-2
              </option>
            </select>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            disabled={isLoading}
            className="rounded border border-primary bg-black py-2 text-white hover:bg-opacity-80 hover:text-primary"
          >
            {isLoading ? (
              <Image
                src="/icons/loading.svg"
                width={24}
                height={24}
                alt="loading"
                className="filter-neutral-50 mx-auto size-6 animate-spin"
              />
            ) : (
              'Saqlash'
            )}
          </button>
        </form>
      </dialog>
    </Backdrop>
  )
}

export default LeagueModal
