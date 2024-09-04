import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setTeam } from 'app/lib/features/game/game.slice'

export const useUpdateTeam = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const updateTeam = async ({ capitan, formation, team_id }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('team')
        .update({ captain_id: capitan, updated_at: new Date(Date.now()) })
        .eq('id', team_id)
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
