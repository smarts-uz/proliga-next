import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'

export const useUpdateTeamPlayers = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)

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

      console.log(data, error)

      if (error) {
        setError(error.message)
        toast.error(error.message)
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
