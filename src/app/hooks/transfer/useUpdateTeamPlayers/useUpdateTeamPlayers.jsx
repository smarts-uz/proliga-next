import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { fetchTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.thunk'

export const useUpdateTeamPlayers = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { currentTour } = useSelector((state) => state.tours)

  const updateTeamPlayers = async ({ team, team_id, tour_id }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const newTeam = team.map((player) => ({
        id: player.id,
        player_id: player.player_id,
        team_id,
        tour_id,
        user_id: userTable.id,
        is_captain: player.is_captain,
      }))

      const { data, error } = await supabase
        .from('team_player')
        .upsert(newTeam)
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        dispatch(
          fetchTeamPlayers({
            team_id: currentTeam?.id,
            tour_id: currentTour.id,
          })
        )
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateTeamPlayers, isLoading, error }
}
