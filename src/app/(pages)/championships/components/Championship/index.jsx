/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'
import LeagueModal from '../Modal/index'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTeams } from 'app/lib/features/teams/teams.selector'
import { fetchCompetitionStats } from 'app/lib/features/competition/competition.thunk'

const Championship = ({ game }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentGame, setCurrentGame] = useState(null)
  const teams = useSelector(selectTeams)
  const router = useRouter()
  const { season } = useSelector((state) => state.season)

  const toggleModal = () => {
    if (isModalOpen) {
      setModalOpen(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setModalOpen(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const currentGame = teams?.find((team) => team.competition_id === game.id)
    setCurrentGame(currentGame)
  }, [teams, game.id])

  const handleClick = () => {
    if (currentGame) {
      router.push(`/play/${game.slug}/${currentGame.id}`)
    } else {
      toggleModal(true)
    }
  }

  return (
    <>
      <article
        className="relative flex cursor-pointer items-center gap-4 rounded-sm border border-neutral-500 bg-neutral-800 p-4 transition-all hover:bg-neutral-700"
        onClick={handleClick}
      >
        <img
          src={game.flag}
          alt={game.title}
          className="z-10 size-12 select-none rounded-full bg-white p-1"
          draggable={false}
        />
        <span
          className={`absolute bottom-0 left-0 top-0 h-full w-10 ${currentGame ? 'bg-primary' : 'bg-neutral-800'}`}
        />
        <div>
          <h3 className="text-base font-bold capitalize xs:text-lg md:text-xl">
            {game.title}
          </h3>
        </div>
      </article>
      {isModalOpen && <LeagueModal toggleModal={toggleModal} game={game} />}
    </>
  )
}

export default Championship
