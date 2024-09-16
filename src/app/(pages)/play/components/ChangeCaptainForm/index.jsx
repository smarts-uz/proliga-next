import { useSelector, useDispatch } from 'react-redux'
import { useUpdateTeamPlayers } from 'app/hooks/transfer/useUpdateTeamPlayers/useUpdateTeamPlayers'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { setCaptain } from 'app/lib/features/teamPlayers/teamPlayers.slice'

const ChangeCaptainForm = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR, playersCount } = useSelector(
    (state) => state.teamPlayers
  )
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )
  const { updateTeamPlayers, isLoading, error } = useUpdateTeamPlayers()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const captains = []
    teamConcat.forEach((player) => {
      if (!player.name || !player.price) {
        toast.warning(
          `identifikatori ${player.id} bo'lgan va ${player.position} holatidagi o'yinchi yaroqsiz`
        )
        return
      }
      if (player.is_captain) {
        captains.push(player.player_id)
      }
    })

    if (captains.length === 0) {
      toast.warning('Kapitan tanlanmagan')
      return
    }
    if (captains.length > 1) {
      toast.warning('Ko`p kapitan tanlangan')
      return
    }

    if (
      playersCount.GOA !== 1 &&
      playersCount.DEF < 3 &&
      playersCount.MID < 3 &&
      playersCount.STR < 2
    ) {
      toast.error('Jamoa da yetarli futbolchilar yoq')
      return
    }

    await updateTeamPlayers({ team: teamConcat, team_id: currentTeam.id })

    if (!error && !isLoading) {
      toast.success('Jamoa muvaffaqiyatli yangilandi')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex justify-between text-black"
    >
      <div className="flex items-center gap-1 text-neutral-200">
        <h3 className="mr-2 hidden text-lg font-medium text-neutral-100 sm:block">
          Kapitan:
        </h3>
        <select
          name="formation"
          id="formation"
          onChange={(e) => dispatch(setCaptain(e.target.value))}
          className="w-40 -skew-x-12 rounded-sm border border-neutral-900 bg-neutral-950 p-1.5 font-semibold text-neutral-200 outline-none md:w-48 md:p-2"
        >
          <option
            value=""
            disabled
            className="bg-neutral-950 checked:bg-neutral-700 active:bg-neutral-800"
          >
            Kapitan tanlang
          </option>
          {teamConcat.map(
            (player) =>
              player.name && (
                <option
                  className="bg-neutral-950 checked:bg-neutral-800"
                  value={player.player_id}
                  key={player.id}
                  selected={player.is_captain}
                >
                  {player.name}
                </option>
              )
          )}
        </select>
      </div>
      <button
        type="submit"
        className="-skew-x-12 rounded-sm bg-black px-6 text-lg text-white transition-all hover:bg-primary hover:bg-opacity-75 hover:text-black md:px-10"
      >
        Saqlash
      </button>
    </form>
  )
}

export default ChangeCaptainForm
