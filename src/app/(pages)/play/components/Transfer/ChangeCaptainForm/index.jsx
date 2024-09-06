import { useSelector, useDispatch } from 'react-redux'
import { setCapitan } from 'app/lib/features/game/game.slice'
import { useUpdateTeamPlayers } from 'app/hooks/competition/useUpdateTeamPlayers/useUpdateTeamPlayers'
import { useUpdateTeam } from 'app/hooks/transfer/useUpdateTeam/useUpdateTeam'
import { toast } from 'react-toastify'

const ChangeCaptainForm = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR, capitan, team, teamCount, playersCount } =
    useSelector((state) => state.game)
  const teamConcat = GOA.concat(DEF, MID, STR)
  const { updateTeamPlayers, isLoading, error } = useUpdateTeamPlayers()
  const {
    updateTeam,
    isLoading: teamLoading,
    error: teamError,
  } = useUpdateTeam()

  const handleSubmit = async (e) => {
    e.preventDefault()

    teamConcat.forEach((player) => {
      if (!player.name || !player.price) {
        toast.warning(
          `identifikatori ${player.id} bo'lgan va ${player.position} holatidagi o'yinchi yaroqsiz`
        )
        return
      }
    })
    if (!capitan) {
      toast.error('Kapitan tanlang')
      return
    }
    if (
      teamCount !== 11 &&
      playersCount.DEF < 3 &&
      playersCount.MID < 3 &&
      playersCount.STR < 2
    ) {
      toast.error('Jamoa da yetarli futbolchilar yoq')
      return
    }
    const formation = `${playersCount.DEF}-${playersCount.MID}-${playersCount.STR}`

    await updateTeamPlayers({ team: teamConcat, team_id: team.id })
    await updateTeam({ capitan, team_id: team.id, formation })

    if (!error && !isLoading && !teamLoading && !teamError) {
      toast.success('Team updated successfully')
    }
  }

  return (
    <form className="mt-2 flex justify-between text-black">
      <div className="flex flex-col gap-1 text-neutral-200">
        <select
          name="formation"
          id="formation"
          onClick={(e) => dispatch(setCapitan(e.target.value))}
          className="w-48 -skew-x-12 rounded-sm border border-neutral-900 bg-neutral-950 p-2 font-semibold text-neutral-200 outline-none"
        >
          <option value="" className="bg-neutral-950 checked:bg-neutral-800">
            Kapitan
          </option>
          {teamConcat.map(
            (player) =>
              player.name && (
                <option
                  className="bg-neutral-950 checked:bg-neutral-900"
                  value={player.player_id}
                  key={player.id}
                  selected={player.player_id === capitan}
                >
                  {player.name}
                </option>
              )
          )}
        </select>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="-skew-x-12 rounded-sm bg-black px-10 text-lg text-white transition-all hover:bg-primary hover:bg-opacity-75 hover:text-black"
      >
        Saqlash
      </button>
    </form>
  )
}

export default ChangeCaptainForm
