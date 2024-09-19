import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { setCaptain } from 'app/lib/features/teamPlayers/teamPlayers.slice'

const ProfileStadiumForm = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR } = useSelector((state) => state.teamPlayers)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    const captains = []
    teamConcat.forEach((player) => {
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
    // await updateTeamPlayers({ team: teamConcat, team_id: currentTeam.id })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex justify-between gap-x-1 text-black"
    >
      <select
        name="formation"
        id="formation"
        onChange={(e) => dispatch(setCaptain(e.target.value))}
        className="w-full max-w-56 rounded-sm border border-neutral-400 bg-neutral-950 p-1.5 font-semibold text-neutral-50 outline-none"
      >
        <option
          value=""
          className="checked:bg-neutral-700 active:bg-neutral-800"
        >
          Kapitan
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
      <button
        type="submit"
        className="rounded-sm border bg-black px-4 text-lg text-white transition-all hover:bg-primary hover:bg-opacity-75 hover:text-black 2xs:px-6 md:px-10"
      >
        Saqlash
      </button>
    </form>
  )
}

export default ProfileStadiumForm
