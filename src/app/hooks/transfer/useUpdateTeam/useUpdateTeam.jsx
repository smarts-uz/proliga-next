import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'

export const useUpdateTeam = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const updateTeam = async ({ captain_id, team_id, tour_id }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('tour_team')
        .update({ captain_id })
        .eq('id', team_id)
        .eq('tour_id', tour_id)
        .select()

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
  return { updateTeam, isLoading, error, data }
}
