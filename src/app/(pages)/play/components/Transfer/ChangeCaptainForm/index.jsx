import { useSelector, useDispatch } from 'react-redux'
import { setCapitan } from 'app/lib/features/game/game.slice'
import { useUpdateTeamPlayers } from 'app/hooks/competition/useUpdateTeamPlayers/useUpdateTeamPlayers'
import { useUpdateTeam } from 'app/hooks/transfer/useUpdateTeam/useUpdateTeam'
import { toast } from 'react-toastify'

const ChangeCaptainForm = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR, capitan, team } = useSelector(
    (state) => state.game
  )
  const teamConcat = GOA.concat(DEF, MID, STR)
  const { updateTeamPlayers, isLoading, error, data } = useUpdateTeamPlayers()
  const {
    updateTeam,
    isLoading: teamLoading,
    error: teamError,
  } = useUpdateTeam()

  const handleSubmit = async (e) => {
    e.preventDefault()

    teamConcat.forEach((player) => {
      if (!player.name || !player.price) {
        toast.error('The player or players are missing')
        return
      }
    })
    if (!capitan) {
      toast.error('Kapitan tanlang')
      return
    }

    await updateTeamPlayers({ team: teamConcat, team_id: team.id })
    await updateTeam({ capitan, team_id: team.id })

    if (!error && !isLoading && data) {
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
          value={team.captain_id ?? null}
          className="w-48 -skew-x-12 rounded-sm border border-neutral-900 bg-neutral-950 p-2 font-semibold text-neutral-200 outline-none"
        >
          <option
            value=""
            className="bg-neutral-950 checked:bg-neutral-900"
            defaultChecked
          >
            Kapitan
          </option>
          {teamConcat.map(
            (player) =>
              player.name && (
                <option
                  className="bg-neutral-950 checked:bg-neutral-900"
                  value={player.id}
                  key={player.id}
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
