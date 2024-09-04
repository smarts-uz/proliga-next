import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setTourTeam } from 'app/lib/features/game/game.slice'

export const useGetTourTeam = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getTourTeam = async (id) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('tour_team')
        .select('*')
        .eq('team_id', id)

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        dispatch(setTourTeam(data[0]))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getTourTeam, isLoading, error }
}
