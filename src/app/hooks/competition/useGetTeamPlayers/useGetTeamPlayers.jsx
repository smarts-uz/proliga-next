import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setTeam } from 'app/lib/features/game/game.slice'

export const useGetTeamPlayers = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { teamCount } = useSelector((state) => state.game)

  const getTeamPlayers = async ({ team_id }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('team_player')
        .select('*')
        .eq('team_id', team_id)
        .limit(11)

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        setData(data)
        teamCount === 0 && dispatch(setTeam(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getTeamPlayers, isLoading, error, data }
}
