/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'
import LeagueModal from '../Modal/index'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Championship = ({ game }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentGame, setCurrentGame] = useState(null)
  const router = useRouter()
  const { teams } = useSelector((state) => state.teams)

  const toggleModal = useCallback(() => {
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
  }, [isModalOpen])

  useEffect(() => {
    const currentGame = teams?.find((team) => team.competition_id === game.id)
    setCurrentGame(currentGame)
  }, [teams, game.id])

  const handleClick = () => {
    if (game.can_register) {
      if (currentGame) {
        router.push(`/play/${game.slug}/${currentGame.id}`)
      } else {
        toggleModal(true)
      }
    } else {
      toast.warning('Bu liga hozr active emas')
    }
  }

  return (
    <>
      <article
        className={`relative flex cursor-pointer items-center gap-4 rounded-sm border border-neutral-500 bg-neutral-800 p-4 transition-all hover:bg-neutral-700`}
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
      {game.can_register && isModalOpen && (
        <LeagueModal toggleModal={toggleModal} competition={game} />
      )}
    </>
  )
}

export default Championship
