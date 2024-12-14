import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useEffect, useMemo } from 'react'
import { useUpdateTeamPlayers } from 'app/hooks/transfer/useUpdateTeamPlayers/useUpdateTeamPlayers'
import { setCaptain } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useState } from 'react'
import { useUpdateTeam } from 'app/hooks/transfer/useUpdateTeam/useUpdateTeam'
import { setTab } from 'app/lib/features/tours/tours.slice'
import { TABS } from 'app/utils/tabs.util'
import { revertTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useTranslation } from 'react-i18next'
import { useUpdateTourTeam } from 'app/hooks/transfer/useUpdateTourTeam/useUpdateTourTeam.index'
import { useAutoGenerateTeamPlayers } from 'app/hooks/transfer/useAutoGenerateTeamPlayers/useAutoGenerateTeamPlayers'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { setTransferModal } from 'app/lib/features/currentTeam/currentTeam.slice'
import { getCorrentPlayerPosition } from 'app/utils/getCorrectPlayerPosition.utils'

const TransferStadiumForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [teamCreateBtns, toggleTeamCreateBtns] = useState(false)
  const { GOA, DEF, MID, STR, playersCount, prevTeam } = useSelector(
    (state) => state.teamPlayers
  )
  const { teamBalance, teamPrice, currentTeam } = useSelector(
    (state) => state.currentTeam
  )
  const { lang } = useSelector((state) => state.systemLanguage)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentTourTeam } = useSelector((state) => state.tourTeams)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )
  const { updateTeamPlayers, isLoading, error } = useUpdateTeamPlayers()
  const {
    updateTourTeam,
    isLoading: tourTeamLoading,
    error: tourTeamError,
  } = useUpdateTourTeam()
  const {
    generateTeamPlayers,
    isLoading: teamPlayersLoading,
    error: teamPlayersError,
  } = useAutoGenerateTeamPlayers()
  const {
    updateTeam,
    isLoading: teamLoading,
    error: teamError,
  } = useUpdateTeam()

  const handleAutoGenerateTeamPlayers = async () => {
    await generateTeamPlayers({ team_id: currentTeam.id })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const prevTeamPlayersId = []
    const curTeamPlayersId = []
    const captains = []

    prevTeam.forEach((p) => p.name && prevTeamPlayersId.push(p.player_id))

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
      player.is_captain && captains.push(player.player_id)
      player.name && curTeamPlayersId.push(player.player_id)
    })
    if (captains.length !== 1) {
      toast.warning(t('Kapitan tanlanmagan'), { theme: 'dark' })
      return
    }
    if (teamBalance < teamPrice) {
      toast.error(t('Balansingiz yetarli emas'), { theme: 'dark' })
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

    let difference = curTeamPlayersId.filter(
      (x) => !prevTeamPlayersId.includes(x)
    )
    const countOfTransfers = difference.length ?? 0

    if (
      currentTeam.is_team_created &&
      currentTeam?.transfers_from_one_team <
        countOfTransfers + currentTourTeam?.current_count_of_transfers
    ) {
      toast.error(t('Siz limitdan oshiq transfer amalga oshiraolmaysiz'), {
        theme: 'dark',
      })
      dispatch(revertTeamPlayers())
      dispatch(setTransferModal(true))
      return
    }

    await updateTeam({
      team_id: currentTeam.id,
      is_team_created: currentTeam?.is_team_created,
    })

    await updateTourTeam({
      team_id: currentTeam.id,
      tour_id: currentTour.id,
      count_of_transfers:
        countOfTransfers + currentTourTeam.current_count_of_transfers,
      is_team_created: currentTeam.is_team_created,
    })

    await updateTeamPlayers({
      team: teamConcat,
      team_id: currentTeam.id,
      tour_id: currentTour.id,
    })

    if (!error && !isLoading) {
      toast.success(t('Jamoa muvaffaqiyatli yangilandi'), { theme: 'dark' })
      dispatch(setTab(TABS.GameProfile))
    }
  }

  useEffect(() => {
    if (currentTeam.is_team_created === false) {
      toggleTeamCreateBtns(true)
    }
  }, [currentTeam])

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex justify-between gap-x-0 text-black xs:gap-x-0.5 sm:gap-x-1"
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
      <div className="flex w-full justify-center gap-0.5 xs:gap-1">
        {teamCreateBtns && (
          <Button
            onClick={handleAutoGenerateTeamPlayers}
            type="button"
            variant="default"
            title="Avto jamoa yigish"
            className="flex w-full min-w-5 max-w-10 items-center justify-center gap-1 rounded border border-neutral-400 bg-neutral-950 px-2 text-neutral-100 transition-all hover:border-primary sm:w-full sm:max-w-max"
          >
            <Image
              src="/icons/auto.svg"
              alt="auto assemble team"
              width={24}
              height={24}
              draggable={false}
              className="filter-white size-6"
            />
          </Button>
        )}
        <Button
          type="button"
          variant="default"
          onClick={() => dispatch(revertTeamPlayers())}
          title={t('orqaga qaytish')}
          className="flex w-full max-w-10 items-center justify-center gap-1 rounded border border-neutral-400 bg-neutral-950 px-2 text-neutral-100 transition-all hover:border-primary sm:w-full sm:max-w-max"
        >
          <Image
            src="/icons/revert.svg"
            alt="auto assemble team"
            width={24}
            height={24}
            draggable={false}
            className="filter-white size-6 h-auto w-auto"
          />
        </Button>
      </div>
      <Button
        type="submit"
        className="rounded border border-primary/80 bg-neutral-950 text-sm font-medium text-neutral-50 transition-all hover:border-black hover:bg-primary hover:text-black md:text-base"
      >
        {t('Saqlash')}
      </Button>
    </form>
  )
}

export default TransferStadiumForm
