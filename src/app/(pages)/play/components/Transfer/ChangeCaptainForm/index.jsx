import { useSelector, useDispatch } from 'react-redux'
import { useUpdateTeamPlayers } from 'app/hooks/transfer/useUpdateTeamPlayers/useUpdateTeamPlayers'
import { useUpdateTeam } from 'app/hooks/transfer/useUpdateTeam/useUpdateTeam'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { setCaptain } from 'app/lib/features/tourTeams/tourTeams.slice'

const ChangeCaptainForm = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR, playersCount } = useSelector(
    (state) => state.teamPlayers
  )
  const { currentTeam } = useSelector((state) => state.currentTeam)
  // const { tourTeam } = useSelector((state) => state.tourTeam)
  const { currentTour } = useSelector((state) => state.tours)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )
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
    // if (!tourTeam.captain_id) {
    //   toast.error('Kapitan tanlang')
    //   return
    // }
    if (playersCount.DEF < 3 && playersCount.MID < 3 && playersCount.STR < 2) {
      toast.error('Jamoa da yetarli futbolchilar yoq')
      return
    }

    await updateTeamPlayers({ team: teamConcat, team_id: currentTeam.id })
    await updateTeam({
      // captain_id: tourTeam.captain_id,
      team_id: currentTeam.id,
      tour_id: currentTour.id,
    })

    if (!error && !isLoading && !teamLoading && !teamError) {
      toast.success('Team updated successfully')
    }
  }

  return (
    <form className="mt-2 flex justify-between text-black">
      <div className="flex items-center gap-1 text-neutral-200">
        <h3 className="mr-2 text-lg font-medium text-neutral-100">Kapitan:</h3>
        <select
          name="formation"
          id="formation"
          onClick={(e) => dispatch(setCaptain(e.target.value))}
          className="w-48 -skew-x-12 rounded-sm border border-neutral-900 bg-neutral-950 p-2 font-semibold text-neutral-200 outline-none"
        >
          <option
            value=""
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
                  // selected={player.player_id === tourTeam.captain_id}
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
