import CompetitionModal from '../Modal/index'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'app/utils/languages.util'
import { formatDate } from 'app/utils/formatDate.util'

const Championship = ({ game }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { teams } = useSelector((state) => state.teams)
  const { lang } = useSelector((state) => state.systemLanguage)
  const [isModalOpen, setModalOpen] = useState(false)
  const currentGame = useMemo(
    () => teams?.find((team) => team.competition_id === game.id),
    [game?.id, teams]
  )

  const handleClick = () => {
    if (!game?.is_active) {
      toast.info(t('This league is not active.'), { theme: 'dark' })
      return
    }

    if (currentGame?.is_team_created) {
      router.push(`/play/${game.slug}/${currentGame.id}`)
    } else {
      if (game.can_register) {
        if (currentGame) {
          router.push(`/play/${game.slug}/${currentGame.id}`)
        } else {
          setModalOpen(true)
        }
      } else {
        toast.info(t('You cannot register in this league'), {
          theme: 'dark',
        })
      }
    }
  }

  const condition = useMemo(() => {
    if (!game?.is_active) return 'bg-neutral-700'
    if (currentGame) return 'bg-primary'
    return game.can_register ? 'bg-primary/20' : 'bg-neutral-700'
  }, [currentGame, game?.can_register, game?.is_active])

  const conditionBorder = useMemo(() => {
    if (!game?.is_active) return 'border-red-500/50 cursor-default'
    if (currentGame)
      return 'border-primary/70 hover:shadow-white/15 hover:bg-neutral-700 cursor-pointer hover:border-primary'
    return game.can_register
      ? 'border-primary/20 hover:shadow-white/15 hover:border-primary hover:bg-neutral-700 cursor-pointer'
      : 'border-yellow-500/50 cursor-default'
  }, [currentGame, game?.can_register, game?.is_active])

  return (
    <>
      <article
        className={`relative flex items-center gap-4 overflow-hidden rounded border bg-neutral-800 p-4 shadow-lg transition-all ${conditionBorder} active:shadow-md`}
        onClick={handleClick}
      >
        <img
          src={game.flag}
          alt={game.title}
          className="z-10 size-12 select-none rounded-full bg-neutral-100 p-1"
          draggable={false}
          loading="lazy"
        />
        <span
          className={`absolute bottom-0 left-0 top-0 h-full w-10 ${condition}`}
        />
        <div>
          <h3 className="text-base font-bold capitalize md:text-lg">
            {lang === LANGUAGE.uz ? game.name : game.name_ru}
          </h3>
          {renderGameStatus(game, currentGame, t)}
        </div>
      </article>
      {game.can_register && (
        <CompetitionModal
          toggleModal={setModalOpen}
          isModalOpen={isModalOpen}
          competition={game}
        />
      )}
    </>
  )
}

const renderGameStatus = (game, currentGame, t) => {
  if (!game?.is_active) {
    return (
      <div className="flex gap-1 text-xs text-neutral-400 sm:text-sm">
        <p>{t('Deadline')}:</p>
        <div className="rounded-sm bg-yellow-500 px-1.5 py-0.5 text-xs font-semibold text-black">
          {t('Tez Kunda')}
        </div>
      </div>
    )
  }

  if (currentGame || game?.can_register) {
    return (
      <div className="flex gap-1 text-xs text-neutral-400 sm:text-sm">
        <p>{t('Deadline')}:</p>
        <span className="text-neutral-100">{formatDate(game?.deadline)}</span>
      </div>
    )
  }

  return (
    <div className="absolute right-0 top-0 rounded-sm bg-red-500 px-2 py-1 text-xs font-semibold text-black">
      {t('This league is not active.')}
    </div>
  )
}

export default Championship
