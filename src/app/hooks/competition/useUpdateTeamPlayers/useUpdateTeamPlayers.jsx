import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'

export const useUpdateTeamPlayers = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const updateTeamPlayers = async ({ team, team_id }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const newTeam = team.map((player) => ({
        ...player,
        club_id: player.club_id.id,
      }))

      console.log(newTeam)
      newTeam.map(async (player) => {
        const { data, error } = await supabase
          .from('team_player')
          .update(player)
          .eq('id', player.id)
          .select()

        if (error) {
          setError(error.message)
          toast.error(error.message)
        }
      })

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateTeamPlayers, isLoading, error, data }
}
