/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'
import LeagueModal from '../Modal/index'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTeams } from 'app/lib/features/teams/teams.selector'
import { fetchTeams } from 'app/lib/features/teams/teams.thunk'

const Championship = ({ game }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentGame, setCurrentGame] = useState(null)
  const { userTable } = useSelector((state) => state.auth)
  const teams = useSelector(selectTeams)
  const router = useRouter()

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

  useEffect(() => {
    dispatch(
      fetchTeams({
        user_id: userTable.id,
      })
    )
  }, [dispatch, userTable])
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const currentGame = teams?.find((team) => team.competition_id === game.id)
    setCurrentGame(currentGame)
  }, [teams, game.id])

  const handleClick = () => {
    if (currentGame) {
      router.push(`/play/${item.slug}/${currentGame.id}`)
    } else {
      toggleModal(true)
    }
  }

  return (
    <>
      <article
        className="relative flex cursor-pointer items-center gap-4 rounded-sm border border-neutral-500 bg-neutral-700 p-4"
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
          {/* <p className="text-xs text-neutral-400 xs:text-sm md:text-base">
            Description of League
          </p> */}
        </div>
      </article>
      {isModalOpen && <LeagueModal toggleModal={toggleModal} league={item} />}
    </>
  )
}

export default Championship
