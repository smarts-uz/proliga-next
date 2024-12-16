import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'

export const useUpdateTeamPlayers = () => {
  const { userTable } = useSelector((state) => state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const updateTeamPlayers = async ({ team, team_id, tour_id }) => {
    setIsLoading(false)
    setError(null)
    const condition = Boolean(
      process.env.NEXT_PUBLIC_TRANSFER_SAVE_BUTTON_USE_RPC
    )

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

      const { error } = condition
        ? await supabase.rpc('update__team_player', {
            players: newTeam,
          })
        : await supabase.from('team_player').upsert(newTeam)

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }

  return { updateTeamPlayers, isLoading, error }
}
