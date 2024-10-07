/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'
import LeagueModal from '../Modal/index'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'app/utils/languages.util'

const Championship = ({ game }) => {
  const { t } = useTranslation()
  const { lang } = useSelector((state) => state.systemLanguage)
  const { teams } = useSelector((state) => state.teams)
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentGame, setCurrentGame] = useState(null)

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
      toast.warning(t('Bu liga hozr active emas', { theme: 'dark' }))
    }
  }

  const date = new Date(game.deadline)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

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
          <h3 className="text-base font-bold capitalize md:text-lg">
            {lang === LANGUAGE.uz ? game.name : game.name_ru}
          </h3>
          <div className="flex gap-1 text-xs text-neutral-400 sm:text-sm">
            <p>{t('Deadline')}:</p>
            <span className="text-neutral-100">{`${day}/${month}/${year}-${hours}:${minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes}`}</span>
          </div>
        </div>
      </article>
      {game.can_register && isModalOpen && (
        <LeagueModal toggleModal={toggleModal} competition={game} />
      )}
    </>
  )
}

export default Championship
