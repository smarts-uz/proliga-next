import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'

export const useUpdateTeamPlayers = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const updateTeamPlayers = async ({ team_id, team }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      console.log(team)
      const { data, error } = supabase
        .from('team_player')
        .upsert([...team])
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        setData(data)
        console.log(data)
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
