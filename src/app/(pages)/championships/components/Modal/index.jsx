import Backdrop from '../../../../../components/Backdrop'
import Image from 'next/image'
import { useCreateTeam } from 'app/hooks/competition/useCreateTeam/useCreateTeam'
import { useState } from 'react'
import { FORMATIONS } from 'app/utils/formations.util'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { selectTeams } from 'app/lib/features/teams/teams.selector'

const CompetitionModal = ({ toggleModal, game }) => {
  const [title, setTitle] = useState('')
  const [formation, setFormation] = useState(FORMATIONS['4-3-3'])
  const router = useRouter()
  const selectedTeams = useSelector(selectTeams)

  const { createTeam, isLoading, error, data } = useCreateTeam()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const currentGame = selectedTeams.find(
      (game) => game.competition_id === game.id
    )

    await createTeam({ title, formation, competition_id: game.id })
    if (!error && !isLoading) {
      setTitle('')
      setFormation(FORMATIONS['4-3-3'])
    }
    // if (currentGame) {
    //   router.push(`/play/${game.slug}/${currentGame.id}`)
    // }
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
            <label htmlFor="name">Jamoa Ismi</label>
            <input
              type="text"
              id="team-title"
              value={title}
              autoFocus
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
                value={FORMATIONS['4-3-3']}
              >
                4-3-3
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={FORMATIONS['4-4-2']}
              >
                4-4-2
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={FORMATIONS['3-4-3']}
              >
                3-4-3
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={FORMATIONS['5-3-2']}
              >
                5-3-2
              </option>
              <option
                className="bg-neutral-800 checked:bg-neutral-700"
                value={FORMATIONS['3-5-2']}
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

export default CompetitionModal
