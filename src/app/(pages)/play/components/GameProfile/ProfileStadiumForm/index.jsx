import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { setCaptain } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useUpdateTeamPlayers } from 'app/hooks/transfer/useUpdateTeamPlayers/useUpdateTeamPlayers'
import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { getCorrentPlayerPosition } from 'app/utils/getCorrectPlayerPosition.utils'

const ProfileStadiumForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { GOA, DEF, MID, STR, playersCount } = useSelector(
    (state) => state.teamPlayers
  )
  const { lang } = useSelector((store) => store.systemLanguage)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )
  const { currentTour } = useSelector((state) => state.tours)
  const { updateTeamPlayers, error, isLoading } = useUpdateTeamPlayers()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const captains = []

    teamConcat.forEach((player) => {
      if (!player.name || !player.price) {
        toast.warning(
          t('identifikatori bolgan va holatida bolgan oyinchi yaroqsiz')
            .replace('$', player?.id)
            .replace('*', getCorrentPlayerPosition(player?.position, lang)),
          { theme: 'dark' }
        )
        return
      }
      if (player.is_captain) {
        captains.push(player.player_id)
      }
    })

    if (captains.length === 0) {
      toast.warning(t('Kapitan tanlanmagan'), { theme: 'dark' })
      return
    }
    if (captains.length > 1) {
      toast.warning(t('Ko`p kapitan tanlangan'), { theme: 'dark' })
      return
    }

    if (
      playersCount.GOA !== 1 ||
      playersCount.DEF < 3 ||
      playersCount.DEF > 5 ||
      playersCount.MID < 3 ||
      playersCount.MID > 5 ||
      playersCount.STR < 2 ||
      playersCount.STR > 3
    ) {
      toast.error(t('Jamoa formatsiyasi notogri'), { theme: 'dark' })
      return
    }

    await updateTeamPlayers({
      team: teamConcat,
      team_id: currentTeam.id,
      tour_id: currentTour.id,
    })

    if (!error && !isLoading) {
      toast.success(t('Kapitan yangilandi'), { theme: 'dark' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex justify-between gap-x-1 text-black"
    >
      <Select
        name="formation"
        id="formation"
        value={teamConcat.find((player) => player.is_captain)?.player_id ?? ''}
        onValueChange={(value) => dispatch(setCaptain(value))}
      >
        <SelectTrigger className="w-full min-w-36 max-w-56 rounded border-neutral-400 bg-neutral-950 px-2 text-xs text-neutral-100 hover:border-primary xs:text-sm md:text-base">
          <SelectValue placeholder={t('Kapitan tanlang')} />
        </SelectTrigger>
        <SelectContent>
          {teamConcat.map(
            (player) =>
              player.name && (
                <SelectItem
                  value={player.player_id}
                  key={player.id}
                  selected={player.is_captain}
                >
                  {player.name}
                </SelectItem>
              )
          )}
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className="rounded border border-primary/80 bg-neutral-950 text-sm font-medium text-neutral-50 transition-all hover:border-black hover:bg-primary hover:bg-opacity-75 hover:text-black md:text-base"
      >
        {t('Saqlash')}
      </Button>
    </form>
  )
}

export default ProfileStadiumForm
